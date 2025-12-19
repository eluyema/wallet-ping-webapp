import WalletInput from '@/components/WalletInput';
import Header from '@/components/Header';
import StepIllustration from '@/components/StepIllustration';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Track Crypto Wallet - Simple Ethereum Wallet Tracking | WalletPing',
  description: 'Learn how to track your crypto wallet in 3 simple steps. Paste address, track changes, bookmark page. No accounts, no complexity. Start tracking Ethereum wallets now.',
  keywords: 'track crypto wallet, track ethereum wallet, how to track crypto, wallet tracking guide, monitor crypto wallet',
  openGraph: {
    title: 'Track Crypto Wallet - Simple 3-Step Guide',
    description: 'Paste → Track → Bookmark. The simplest way to track your Ethereum wallet.',
    type: 'website',
  },
};

export default function TrackCryptoWalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950">
      {/* Animated gradient overlay */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-gradient"></div>
      </div>

      <Header />
      
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 font-medium">
              Action-Oriented Guide
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight pb-2">
            Track Crypto Wallet
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Three simple steps to start tracking your Ethereum wallet
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            <strong className="text-cyan-400">Paste → Track → See changes</strong>
          </p>
        </div>

        {/* Step-by-Step Visual Guide */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Step 1 */}
            <div className="group">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border-2 border-cyan-500/50 rounded-2xl flex items-center justify-center text-3xl font-bold text-cyan-300 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                      Paste Your Address
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Copy your Ethereum wallet address from MetaMask, Coinbase, or any wallet. 
                    It starts with <code className="px-2 py-1 bg-gray-800/50 rounded text-cyan-400">0x</code> 
                    and is 42 characters long.
                  </p>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
                    <p className="text-sm text-gray-400 mb-3">Try it now:</p>
                    <WalletInput />
                  </div>
                </div>
                <div className="lg:w-1/2 group-hover:scale-105 transition-transform duration-300">
                  <StepIllustration step={1} />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group">
              <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-2 border-blue-500/50 rounded-2xl flex items-center justify-center text-3xl font-bold text-blue-300 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                      Click Track
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Hit the <strong className="text-blue-400">"Track Wallet"</strong> button. 
                    We'll fetch the current balance from the Ethereum blockchain and show you the status instantly.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-400">Results in under 2 seconds</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-400">No account or login required</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-400">100% read-only and secure</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 group-hover:scale-105 transition-transform duration-300">
                  <StepIllustration step={2} />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 border-2 border-purple-500/50 rounded-2xl flex items-center justify-center text-3xl font-bold text-purple-300 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                      See Changes
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    View your wallet status, current balance, and change history. 
                    Bookmark the page and refresh anytime to see if anything changed.
                  </p>
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="font-semibold text-white mb-3">You'll see:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">▲</span> Balance increased
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-400">▼</span> Balance decreased
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-gray-400">━</span> No changes
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-blue-400">📊</span> Last 10 snapshots
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2 group-hover:scale-105 transition-transform duration-300">
                  <StepIllustration step={3} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Track Instead of Check */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Why track instead of just checking?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Tracking gives you context</h3>
                <p className="text-gray-300 mb-4">
                  See not just your current balance, but how it changed over time. 
                  Did it go up? Down? When was the last change?
                </p>
                <Link href="/check-crypto-wallet-balance" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium inline-flex items-center gap-2">
                  Learn the difference
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">Perfect for waiting</h3>
                <p className="text-gray-300 mb-4">
                  Waiting for crypto to arrive? Track your wallet and see exactly when it shows up.
                </p>
                <Link href="/did-my-crypto-arrive" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium inline-flex items-center gap-2">
                  Check if crypto arrived
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-20">
          <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 animate-gradient"></div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Start tracking now
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Paste your Ethereum wallet address and see your balance status instantly
              </p>
              <div className="max-w-2xl mx-auto mb-8">
                <WalletInput />
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <Link href="/crypto-wallet-tracker" className="hover:text-cyan-400 transition-colors">
                  ← Back to main tracker
                </Link>
                <Link href="/get-notified-when-crypto-arrives" className="hover:text-cyan-400 transition-colors">
                  Want notifications? →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 pt-8 border-t border-gray-800/50">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms</Link>
            <a href="mailto:support@walletping.io" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <p>© 2025 WalletPing. Simple crypto wallet tracking for Ethereum.</p>
        </footer>
      </main>
    </div>
  );
}

