// Client-safe utility functions for wallet tracking
// No database or API calls here - just formatting and validation

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

// Validate Ethereum address format (works on client and server)
export function isValidAddress(address: string): boolean {
  // Basic check without ethers.js
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
      return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/50 shadow-md shadow-emerald-500/20';
    case 'down':
      return 'bg-red-500/10 text-red-300 border-red-500/50 shadow-md shadow-red-500/20';
    case 'started':
      return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-500/20';
    case 'none':
    default:
      return 'bg-gray-800/50 text-gray-300 border-gray-700/50';
  }
}

