// Mock tracking backend for WalletPing prototype

export type ChangeType = 'up' | 'down' | 'none' | 'started';

export interface Snapshot {
  balance: number;
  timestamp: Date;
  delta: number;
}

export interface WalletTrackingData {
  address: string;
  currentBalance: number;
  deltaSincePrev: number;
  lastCheckedAt: Date;
  lastChangeAt: Date;
  changeType: ChangeType;
  snapshots: Snapshot[];
}

// In-memory storage (resets on server restart - that's fine for prototype)
const walletStore = new Map<string, WalletTrackingData>();

// Validate Ethereum address format (basic check)
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

// Format address for display (shortened)
export function formatAddress(address: string): string {
  if (!address || address.length < 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

// Format balance with proper decimals
export function formatBalance(balance: number): string {
  return balance.toFixed(4);
}

// Format delta with sign
export function formatDelta(delta: number): string {
  if (delta === 0) return '0.0000';
  const sign = delta > 0 ? '+' : '';
  return `${sign}${delta.toFixed(4)}`;
}

// Generate realistic initial balance
function generateInitialBalance(): number {
  return Math.random() * 10 + 0.5; // Between 0.5 and 10.5 ETH
}

// Simulate balance change (30% chance of change)
function simulateBalanceChange(currentBalance: number): number {
  const changeChance = Math.random();
  
  if (changeChance < 0.7) {
    // No change (70% of the time)
    return currentBalance;
  }
  
  // Change amount: 0.01 to 2 ETH
  const changeAmount = Math.random() * 2 + 0.01;
  
  if (changeChance < 0.85) {
    // Increase (15% of the time)
    return currentBalance + changeAmount;
  } else {
    // Decrease (15% of the time)
    return Math.max(0.01, currentBalance - changeAmount);
  }
}

// Main function: ensure wallet exists and return fresh data
export function ensureFreshWallet(address: string): WalletTrackingData {
  const now = new Date();
  
  // Check if wallet already tracked
  const existing = walletStore.get(address);
  
  if (!existing) {
    // First time tracking this wallet
    const initialBalance = generateInitialBalance();
    
    const trackingData: WalletTrackingData = {
      address,
      currentBalance: initialBalance,
      deltaSincePrev: 0,
      lastCheckedAt: now,
      lastChangeAt: now,
      changeType: 'started',
      snapshots: [
        {
          balance: initialBalance,
          timestamp: now,
          delta: 0,
        }
      ]
    };
    
    walletStore.set(address, trackingData);
    return trackingData;
  }
  
  // Wallet exists - simulate a new check
  const prevBalance = existing.currentBalance;
  const newBalance = simulateBalanceChange(prevBalance);
  const delta = newBalance - prevBalance;
  
  let changeType: ChangeType = 'none';
  let lastChangeAt = existing.lastChangeAt;
  
  if (delta > 0.001) {
    changeType = 'up';
    lastChangeAt = now;
  } else if (delta < -0.001) {
    changeType = 'down';
    lastChangeAt = now;
  }
  
  // Add new snapshot
  const newSnapshot: Snapshot = {
    balance: newBalance,
    timestamp: now,
    delta,
  };
  
  // Keep only last 10 snapshots
  const updatedSnapshots = [newSnapshot, ...existing.snapshots].slice(0, 10);
  
  const updatedData: WalletTrackingData = {
    address,
    currentBalance: newBalance,
    deltaSincePrev: delta,
    lastCheckedAt: now,
    lastChangeAt,
    changeType,
    snapshots: updatedSnapshots,
  };
  
  walletStore.set(address, updatedData);
  return updatedData;
}

// Get human-readable status message
export function getStatusMessage(changeType: ChangeType, delta: number): string {
  switch (changeType) {
    case 'started':
      return 'Tracking started';
    case 'up':
      return `Balance increased by ${formatDelta(delta)} ETH`;
    case 'down':
      return `Balance decreased by ${formatDelta(Math.abs(delta))} ETH`;
    case 'none':
    default:
      return 'No changes detected';
  }
}

// Get status color for UI (Dark theme)
export function getStatusColor(changeType: ChangeType): string {
  switch (changeType) {
    case 'up':
      return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/50 shadow-lg shadow-emerald-500/20';
    case 'down':
      return 'bg-red-500/10 text-red-300 border-red-500/50 shadow-lg shadow-red-500/20';
    case 'started':
      return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/50 shadow-lg shadow-cyan-500/20';
    case 'none':
    default:
      return 'bg-gray-800/50 text-gray-300 border-gray-700/50';
  }
}

