import WalletInput from '@/components/WalletInput';
import Header from '@/components/Header';
import StructuredData from '@/components/StructuredData';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WalletPing - Simple Crypto Wallet Tracker for Ethereum',
  description: 'Track your Ethereum wallet balance changes without the noise. Simple, calm crypto tracking. See instantly if your balance increased, decreased, or stayed the same.',
  keywords: 'crypto wallet tracker, ethereum tracker, wallet monitor, crypto balance, track ethereum wallet',
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950/20 to-gray-950">
        {/* Animated gradient overlay */}
        <div className="fixed inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-gradient"></div>
        </div>

        <Header />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight pb-2">
            WalletPing
          </h1>
          <p className="text-2xl text-gray-300 mb-3 max-w-2xl mx-auto font-light">
            Track your crypto, stay calm
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Know when your wallet balance changes — no noise, no stress, just clarity
          </p>
          <div className="mb-6">
            <WalletInput />
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/crypto-wallet-tracker" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium inline-flex items-center gap-1">
              Explore full tracker
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/did-my-crypto-arrive" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
              Waiting for crypto?
            </Link>
          </div>
        </div>

        {/* What You'll See */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What you'll see
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Clear Status
              </h3>
              <p className="text-gray-400">
                See if your balance increased, decreased, or stayed the same at a glance
              </p>
            </div>

            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-emerald-500/20 p-6 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                {/* Ethereum icon */}
                <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 1535 2500" fill="currentColor">
                  <path d="M767.5 0L767 2.1V1710.7L767.5 1711.2L1535 1255.9L767.5 0Z" opacity="0.6"/>
                  <path d="M767.5 0L0 1255.9L767.5 1711.2V915.6V0Z"/>
                  <path d="M767.5 1854.9L767.2 1855.3V2446.2L767.5 2500L1535 1399.7L767.5 1854.9Z" opacity="0.6"/>
                  <path d="M767.5 2500V1854.9L0 1399.7L767.5 2500Z"/>
                  <path d="M767.5 1711.2L1535 1255.9L767.5 915.6V1711.2Z" opacity="0.2"/>
                  <path d="M0 1255.9L767.5 1711.2V915.6L0 1255.9Z" opacity="0.6"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Current Balance
              </h3>
              <p className="text-gray-400">
                Your exact balance in ETH, updated every time you check
              </p>
            </div>

            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Recent Timeline
              </h3>
              <p className="text-gray-400">
                View the last 10 snapshots to see your balance history
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            How it works
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start gap-4 bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-cyan-500/20">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Enter your wallet address
                </h3>
                <p className="text-gray-400">
                  Paste any Ethereum wallet address you want to track
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-emerald-500/20">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Get instant tracking
                </h3>
                <p className="text-gray-400">
                  WalletPing starts monitoring and shows you the current status
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-purple-500/20">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  Bookmark and refresh
                </h3>
                <p className="text-gray-400">
                  Save the page and check back anytime to see if anything changed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Example States */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Example states
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm text-gray-300 border-2 border-gray-700/50 rounded-xl p-6 text-center hover:border-gray-600/50 transition-all duration-300">
              <p className="text-lg font-semibold mb-2">No changes detected</p>
              <p className="text-sm text-gray-400">Your balance is stable</p>
            </div>

            <div className="bg-emerald-500/10 backdrop-blur-sm text-emerald-300 border-2 border-emerald-500/30 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300 shadow-md shadow-emerald-500/20">
              <p className="text-lg font-semibold mb-2">Balance increased by +0.45 ETH</p>
              <p className="text-sm text-emerald-400">Your balance went up</p>
            </div>

            <div className="bg-red-500/10 backdrop-blur-sm text-red-300 border-2 border-red-500/30 rounded-xl p-6 text-center hover:border-red-500/50 transition-all duration-300 shadow-md shadow-red-500/20">
              <p className="text-lg font-semibold mb-2">Balance decreased by -0.12 ETH</p>
              <p className="text-sm text-red-400">Your balance went down</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 pt-8 border-t border-gray-800/50">
          <div className="flex justify-center gap-6 mb-4">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms</Link>
            <a href="mailto:support@walletping.io" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <p>© 2025 WalletPing. Track your crypto with calm.</p>
        </footer>
        </div>
      </div>
    </>
  );
}
