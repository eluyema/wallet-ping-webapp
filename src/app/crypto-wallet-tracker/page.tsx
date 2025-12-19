import WalletInput from '@/components/WalletInput';
import Header from '@/components/Header';
import StateCard from '@/components/StateCard';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crypto Wallet Tracker - Track Ethereum Balance Changes | WalletPing',
  description: 'Free crypto wallet tracker for Ethereum. Monitor your wallet balance changes without complexity. See instantly if your balance increased, decreased, or stayed the same.',
  keywords: 'crypto wallet tracker, ethereum wallet tracker, balance tracker, wallet monitor, crypto balance checker, track crypto wallet',
  openGraph: {
    title: 'Crypto Wallet Tracker - Simple Ethereum Balance Tracking',
    description: 'Track your crypto wallet balance changes without the noise. Simple, calm, focused.',
    type: 'website',
  },
};

export default function CryptoWalletTrackerPage() {
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
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-300 font-medium">
              #1 Simple Crypto Wallet Tracker
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight pb-2">
            Crypto Wallet Tracker
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Track your Ethereum wallet balance changes without the noise
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Simple, clean, and focused on what matters: <strong className="text-cyan-400">Did anything change?</strong>
          </p>
          <div className="max-w-2xl mx-auto">
            <WalletInput />
          </div>
        </div>

        {/* Tracking vs Checking Explanation */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
                Tracking vs. Checking
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300">
                    <div className="text-4xl mb-4">❌</div>
                    <h3 className="text-xl font-bold text-white mb-3">Old Way: Checking</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                      <li>• Refresh wallet constantly</li>
                      <li>• Lost in transaction hashes</li>
                      <li>• Gas fees confusion</li>
                      <li>• Constant anxiety</li>
                    </ul>
                  </div>
                </div>
                <div className="group">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-4xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-white mb-3">New Way: Tracking</h3>
                    <ul className="space-y-2 text-emerald-300 text-sm">
                      <li>• One simple status</li>
                      <li>• See balance history</li>
                      <li>• No technical jargon</li>
                      <li>• Peace of mind</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/check-crypto-wallet-balance" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium inline-flex items-center gap-2">
                  Learn more about checking vs tracking
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Example States with Images */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
            What you'll see
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Three simple states. That's it. No confusion, no clutter.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tracking Started */}
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-6 hover:border-blue-500/60 transition-all duration-300 hover:transform hover:scale-105 animate-fadeIn">
              <StateCard type="started" balance="10.0000 ETH" />
              <h3 className="text-xl font-bold text-white mb-2">Tracking Started</h3>
              <p className="text-gray-400 text-sm mb-4">When you first add a wallet, we start tracking from this moment.</p>
              <Link href="/track-crypto-wallet" className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1">
                Learn how to track
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Balance Increased */}
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-emerald-500/30 p-6 hover:border-emerald-500/60 transition-all duration-300 hover:transform hover:scale-105 animate-fadeIn" style={{animationDelay: '100ms'}}>
              <StateCard type="increased" balance="10.4500 ETH" delta="+0.4500 ETH" />
              <h3 className="text-xl font-bold text-white mb-2">Balance Increased</h3>
              <p className="text-gray-400 text-sm mb-4">Green status when your wallet balance goes up. Clear delta shown.</p>
              <Link href="/did-my-crypto-arrive" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium inline-flex items-center gap-1">
                Check if crypto arrived
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* No Changes */}
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-500/30 p-6 hover:border-gray-500/60 transition-all duration-300 hover:transform hover:scale-105 animate-fadeIn" style={{animationDelay: '200ms'}}>
              <StateCard type="no-change" balance="10.0000 ETH" />
              <h3 className="text-xl font-bold text-white mb-2">No Changes</h3>
              <p className="text-gray-400 text-sm mb-4">Calm neutral status when nothing changed. Peace of mind.</p>
              <Link href="/check-crypto-wallet-balance" className="text-gray-400 hover:text-gray-300 text-sm font-medium inline-flex items-center gap-1">
                About balance checking
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Use This */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800/50 p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Why use a crypto wallet tracker?
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Answer one question instantly</h3>
                  <p className="text-gray-400">Traditional explorers bury you in data. WalletPing answers: "Did anything change?" in under 2 seconds.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">See your balance history</h3>
                  <p className="text-gray-400">Not just current balance – see the last 10 snapshots to understand your wallet's activity patterns.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">No accounts, no setup</h3>
                  <p className="text-gray-400">Just paste a wallet address and start tracking. Bookmark the page. That's it.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6">
              <p className="text-cyan-300 font-medium text-center">
                <Link href="/get-notified-when-crypto-arrives" className="hover:text-cyan-200 transition-colors">
                  Want notifications when crypto arrives? Learn about our roadmap →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
            How it works
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Three simple steps to start tracking your crypto wallet
          </p>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-500/50 rounded-2xl flex items-center justify-center text-2xl font-bold text-cyan-300 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
                1
              </div>
              <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 group-hover:border-cyan-500/30 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Paste your wallet address</h3>
                <p className="text-gray-400">Enter any Ethereum wallet address in the input field above. No account or login required.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-500/50 rounded-2xl flex items-center justify-center text-2xl font-bold text-blue-300 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                2
              </div>
              <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 group-hover:border-blue-500/30 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-2">See instant status</h3>
                <p className="text-gray-400">Get immediate feedback on whether your balance increased, decreased, or stayed the same.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/50 rounded-2xl flex items-center justify-center text-2xl font-bold text-purple-300 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                3
              </div>
              <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 group-hover:border-purple-500/30 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Bookmark and relax</h3>
                <p className="text-gray-400">Save the page and check back whenever you want. No need to constantly refresh.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-20">
          <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 animate-gradient"></div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to track your wallet?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Enter your Ethereum address and see your balance status in seconds
              </p>
              <div className="max-w-2xl mx-auto mb-8">
                <WalletInput />
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <Link href="/track-crypto-wallet" className="hover:text-cyan-400 transition-colors">
                  Learn to track →
                </Link>
                <Link href="/check-crypto-wallet-balance" className="hover:text-cyan-400 transition-colors">
                  Checking vs Tracking →
                </Link>
                <Link href="/did-my-crypto-arrive" className="hover:text-cyan-400 transition-colors">
                  Waiting for crypto? →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Pages */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Explore more tracking features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/track-crypto-wallet" className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">Track Crypto Wallet</h3>
              <p className="text-sm text-gray-400">Step-by-step guide to tracking</p>
            </Link>

            <Link href="/check-crypto-wallet-balance" className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">Check Balance</h3>
              <p className="text-sm text-gray-400">Understand checking vs tracking</p>
            </Link>

            <Link href="/did-my-crypto-arrive" className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">Did Crypto Arrive?</h3>
              <p className="text-sm text-gray-400">Confirm incoming transactions</p>
            </Link>

            <Link href="/get-notified-when-crypto-arrives" className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-3">🔔</div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">Get Notifications</h3>
              <p className="text-sm text-gray-400">Future notification features</p>
            </Link>
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

