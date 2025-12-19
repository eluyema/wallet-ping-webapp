import { notFound } from 'next/navigation';
import WalletTracker from '@/components/WalletTracker';
import Image from 'next/image';
import { ensureFreshWallet } from '@/lib/realTracker';
import { isValidAddress, formatAddress } from '@/lib/trackerUtils';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ address: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { address } = await params;
  
  if (!isValidAddress(address)) {
    return {
      title: 'Invalid Wallet Address - WalletPing',
      description: 'The provided wallet address is not valid.',
    };
  }

  return {
    title: `${formatAddress(address)} - WalletPing Tracker`,
    description: `Track Ethereum wallet ${formatAddress(address)} balance changes. See current balance, recent changes, and activity timeline.`,
  };
}

export default async function WalletPage({ params }: Props) {
  const { address } = await params;

  // Validate address
  if (!isValidAddress(address)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-red-500/30 p-8 text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/50">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Invalid Wallet Address
          </h1>
          <p className="text-gray-300 mb-6">
            The wallet address you provided is not valid. Please check and try again.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            A valid Ethereum address starts with &quot;0x&quot; and is followed by 40 hexadecimal characters.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/30"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  // Get tracking data
  const trackingData = await ensureFreshWallet(address);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950">
      {/* Animated gradient overlay */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-gradient"></div>
      </div>

      {/* Header with Logo */}
      <header className="relative border-b border-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 flex-shrink-0">
                <div className="absolute inset-0 animate-ping-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image src="/logo.png" alt="" width={40} height={40} className="opacity-60 w-full h-full object-contain" />
                </div>
                <Image src="/logo.png" alt="WalletPing Logo" width={40} height={40} className="relative z-10 w-full h-full object-contain" priority />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                WalletPing
              </span>
            </a>
            <nav className="flex items-center gap-6">
              <a href="/crypto-wallet-tracker" className="text-sm text-gray-300 hover:text-white transition-colors font-medium">
                Tracker
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      <div className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <a
              href="/"
              className="inline-flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </a>
          </div>
          
          <WalletTracker initialData={trackingData} />
        </div>
      </div>
    </div>
  );
}

