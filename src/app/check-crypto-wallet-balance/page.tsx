import WalletInput from '@/components/WalletInput';
import Header from '@/components/Header';
import ComparisonDiagram from '@/components/ComparisonDiagram';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Check Crypto Wallet Balance - Understand Checking vs Tracking | WalletPing',
  description: 'Learn the difference between checking and tracking your crypto wallet balance. Checking shows now, tracking shows changes over time. Upgrade to smarter wallet monitoring.',
  keywords: 'check crypto wallet balance, check ethereum balance, wallet balance checker, crypto balance, ethereum balance check',
  openGraph: {
    title: 'Check Crypto Wallet Balance - Checking vs Tracking Explained',
    description: 'Understand why tracking is better than just checking your crypto balance.',
    type: 'website',
  },
};

export default function CheckCryptoWalletBalancePage() {
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
            <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-sm text-emerald-300 font-medium">
              Beginner-Friendly Guide
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight pb-2">
            Check Crypto Wallet Balance
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Understand the difference between checking and tracking
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Checking = <strong className="text-gray-300">now</strong> • Tracking = <strong className="text-cyan-400">over time</strong>
          </p>
        </div>

        {/* Comparison Diagram */}
        <div className="mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Checking */}
              <div className="group">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 h-full">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gray-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Checking</h2>
                    <p className="text-gray-400">Single point in time</p>
                  </div>

                  <div className="mb-6">
                    <ComparisonDiagram type="checking" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500">•</span>
                      <p className="text-gray-400 text-sm">Shows current balance only</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500">•</span>
                      <p className="text-gray-400 text-sm">No history or context</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500">•</span>
                      <p className="text-gray-400 text-sm">Need to remember previous amounts</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-500">•</span>
                      <p className="text-gray-400 text-sm">Constant refreshing needed</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700/30">
                    <p className="text-gray-400 text-sm text-center">
                      <strong className="text-white">Good for:</strong> Quick one-time lookups
                    </p>
                  </div>
                </div>
              </div>

              {/* Tracking */}
              <div className="group">
                <div className="bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-emerald-500/5 backdrop-blur-sm border-2 border-cyan-500/30 rounded-3xl p-8 h-full hover:border-cyan-500/50 transition-colors duration-300">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">Tracking</h2>
                    <p className="text-cyan-400">Changes over time</p>
                  </div>

              <div className="mb-6">
                <ComparisonDiagram type="tracking" />
              </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300 text-sm">Shows current + historical balance</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300 text-sm">See exactly what changed</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300 text-sm">Automatic change detection</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-300 text-sm">Peace of mind</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-xl border border-cyan-500/30">
                    <p className="text-cyan-300 text-sm text-center font-medium">
                      <strong className="text-white">Perfect for:</strong> Ongoing monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Upgrade from checking to tracking
              </h2>
              <p className="text-xl text-gray-300">
                WalletPing turns simple balance checking into intelligent tracking
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-3">Traditional Checkers</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Most tools just show you the current balance. You have to remember what it was before and calculate changes yourself.
                </p>
                <p className="text-gray-500 text-xs italic">
                  "Was it 10.2 or 10.3 last time I checked?"
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="text-xl font-semibold text-white mb-3">WalletPing Tracker</h3>
                <p className="text-cyan-300 text-sm mb-4">
                  We remember for you. See instant status: increased, decreased, or no change. Plus full history of last 10 snapshots.
                </p>
                <p className="text-cyan-400 text-xs font-medium">
                  "Balance increased by +0.45 ETH"
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/track-crypto-wallet" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105">
                Start tracking now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* When to Use Each */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              When to use each approach
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">👀</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Use checking when:</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1">•</span>
                        <span>You just want a quick one-time balance lookup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1">•</span>
                        <span>You're checking someone else's public wallet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1">•</span>
                        <span>You don't care about historical changes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/5 to-emerald-500/5 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Use tracking when:</h3>
                    <ul className="space-y-2 text-cyan-300">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>You're waiting for crypto to arrive</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>You want to monitor your own wallet over time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>You need to know if anything changed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>You want peace of mind without constant checking</span>
                      </li>
                    </ul>
                  </div>
                </div>
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
                Try tracking your wallet
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                See the difference between checking and tracking for yourself
              </p>
              <div className="max-w-2xl mx-auto mb-8">
                <WalletInput />
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <Link href="/crypto-wallet-tracker" className="hover:text-cyan-400 transition-colors">
                  ← Main tracker page
                </Link>
                <Link href="/did-my-crypto-arrive" className="hover:text-cyan-400 transition-colors">
                  Waiting for crypto? →
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

