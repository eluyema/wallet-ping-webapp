// Real blockchain tracking using Alchemy API (SERVER-SIDE ONLY)
import { ethers } from 'ethers';
import { getOrCreateWallet, addSnapshot, getSnapshots, getLastSnapshot, initWalletPingTables } from './db';
import type { WalletTrackingData, Snapshot, ChangeType } from './trackerUtils';

// Re-export types
export type { WalletTrackingData, Snapshot, ChangeType };

// Initialize Alchemy provider
let provider: ethers.JsonRpcProvider | null = null;

function getProvider() {
  if (!provider) {
    const apiKey = process.env.ALCHEMY_API_KEY;
    if (!apiKey) {
      throw new Error('ALCHEMY_API_KEY is not set');
    }
    // Using Ethereum mainnet with explicit network configuration
    const network = ethers.Network.from('mainnet');
    provider = new ethers.JsonRpcProvider(
      `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`,
      network,
      { staticNetwork: network }
    );
  }
  return provider;
}


// Get ETH balance from Alchemy
async function getEthBalance(address: string): Promise<number> {
  try {
    const provider = getProvider();
    const balance = await provider.getBalance(address);
    // Convert from Wei to ETH
    return parseFloat(ethers.formatEther(balance));
  } catch (error) {
    // SECURITY: Never log API keys or connection details
    console.error('Error fetching balance from blockchain API. Check API configuration.');
    throw new Error('Failed to fetch balance from blockchain.');
  }
}

// Cache duration in seconds (1 minute)
const CACHE_DURATION_SECONDS = 60;

// Main function: ensure wallet exists and return fresh data
export async function ensureFreshWallet(address: string): Promise<WalletTrackingData> {
  try {
    // Initialize tables if needed
    await initWalletPingTables();
    
    // Get or create wallet in database
    await getOrCreateWallet(address);
    
    // Get recent snapshots
    const allSnapshots = await getSnapshots(address, 10);
    
    // Determine if we need to fetch new data from Alchemy
    let shouldFetchFromAlchemy = true;
    let currentBalance = 0;
    
    if (allSnapshots.length > 0) {
      const latestSnapshot = allSnapshots[0];
      const latestTimestamp = new Date(latestSnapshot.timestamp);
      const nowTimestamp = new Date();
      
      const latestMs = latestTimestamp.getTime();
      const nowMs = nowTimestamp.getTime();
      const ageInSeconds = Math.floor((nowMs - latestMs) / 1000);
      
      if (ageInSeconds < CACHE_DURATION_SECONDS) {
        // Cache is fresh - use existing data
        shouldFetchFromAlchemy = false;
        currentBalance = parseFloat(latestSnapshot.balance);
      }
    }
    
    // Fetch from Alchemy only if needed
    if (shouldFetchFromAlchemy) {
      currentBalance = await getEthBalance(address);
    }
    
    // Calculate delta and change type
    let deltaSincePrev = 0;
    let changeType: ChangeType = 'started';
    const now = new Date();
    let lastChangeAt = now;
    
    if (allSnapshots.length > 0) {
      // When using cache, compare with the cached snapshot
      // When fetching new, compare with previous snapshot
      const compareSnapshot = shouldFetchFromAlchemy && allSnapshots.length > 0 
        ? allSnapshots[0]  // Compare new balance with latest
        : allSnapshots[1] || allSnapshots[0];  // When cached, compare with previous if exists
      
      if (compareSnapshot) {
        const prevBalance = parseFloat(compareSnapshot.balance);
        deltaSincePrev = currentBalance - prevBalance;
        
        // Only treat as change if difference is significant (> 0.0001 ETH)
        if (Math.abs(deltaSincePrev) > 0.0001) {
          changeType = deltaSincePrev > 0 ? 'up' : 'down';
          lastChangeAt = now;
        } else {
          changeType = 'none';
          deltaSincePrev = 0;
          // Find last actual change
          const lastChangeSnapshot = allSnapshots.find(s => Math.abs(parseFloat(s.delta)) > 0.0001);
          if (lastChangeSnapshot) {
            lastChangeAt = new Date(lastChangeSnapshot.timestamp);
          } else {
            lastChangeAt = new Date(allSnapshots[allSnapshots.length - 1].timestamp);
          }
        }
      }
    }
    
    // Add new snapshot only if we fetched fresh data
    if (shouldFetchFromAlchemy) {
      await addSnapshot(address, currentBalance, deltaSincePrev);
      
      // Refresh snapshots list
      const refreshedSnapshots = await getSnapshots(address, 10);
      allSnapshots.length = 0;
      allSnapshots.push(...refreshedSnapshots);
    }
    
    // Convert to app format
    const snapshots: Snapshot[] = allSnapshots.map(s => ({
      balance: parseFloat(s.balance),
      timestamp: new Date(s.timestamp),
      delta: parseFloat(s.delta),
    }));
    
    // Use latest snapshot timestamp as lastCheckedAt
    const lastCheckedAt = allSnapshots.length > 0 
      ? new Date(allSnapshots[0].timestamp) 
      : now;
    
    return {
      address,
      currentBalance,
      deltaSincePrev,
      lastCheckedAt,
      lastChangeAt,
      changeType,
      snapshots,
    };
  } catch (error) {
    // SECURITY: Never log database/API connection details
    console.error('Error tracking wallet. Check database and API configuration.');
    throw new Error('Failed to track wallet. Please check your configuration.');
  }
}


