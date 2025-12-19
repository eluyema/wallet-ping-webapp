'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { isValidAddress } from '@/lib/trackerUtils';

export default function WalletInput() {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!address.trim()) {
      setError('Please enter a wallet address');
      return;
    }

    if (!isValidAddress(address.trim())) {
      setError('Please enter a valid Ethereum address (0x followed by 40 hex characters)');
      return;
    }

    // Trigger ping animation
    setIsTracking(true);

    // Navigate to wallet page after animation starts
    setTimeout(() => {
      router.push(`/wallet/${address.trim()}`);
    }, 400);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="text"
            name="wallet-address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Paste your wallet address..."
            autoComplete="on"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            className="flex-1 px-5 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none text-sm font-mono text-white placeholder-gray-500 transition-all duration-300"
          />
          <div className="relative">
            <button
              type="submit"
              disabled={isTracking}
              className={`relative overflow-hidden px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 whitespace-nowrap shadow-md shadow-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/40 disabled:opacity-80 ${
                isTracking ? 'scale-95' : ''
              }`}
            >
              {/* Ping waves animation */}
              {isTracking && (
                <>
                  <span className="absolute inset-0 rounded-xl border-2 border-cyan-400 animate-ping-wave opacity-75" />
                  <span className="absolute inset-0 rounded-xl border-2 border-blue-400 animate-ping-wave-delayed opacity-75" />
                  <span className="absolute inset-0 rounded-xl border-2 border-cyan-300 animate-ping-wave-delayed-2 opacity-50" />
                </>
              )}
              <span className="relative z-10 flex items-center gap-2">
                {isTracking ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Tracking...
                  </>
                ) : (
                  'Track Wallet'
                )}
              </span>
            </button>
          </div>
        </div>
        {error && (
          <p className="text-sm text-red-400 bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/30">{error}</p>
        )}
      </div>
    </form>
  );
}

