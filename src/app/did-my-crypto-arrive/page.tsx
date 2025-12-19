import WalletInput from '@/components/WalletInput';
import Header from '@/components/Header';
import WaitingArrived from '@/components/WaitingArrived';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Did My Crypto Arrive? Check Ethereum Wallet for Incoming Transactions | WalletPing',
  description: 'Waiting for crypto to arrive? Track your Ethereum wallet to see exactly when your crypto shows up. Calm, simple confirmation without constant refreshing.',
  keywords: 'did my crypto arrive, crypto arrived, check incoming crypto, ethereum transaction arrived, waiting for crypto, crypto confirmation',
  openGraph: {
    title: 'Did My Crypto Arrive? - Calm Crypto Arrival Tracking',
    description: 'Stop refreshing. Track your wallet and see exactly when your crypto arrives.',
    type: 'website',
  },
};

export default function DidMyCryptoArrivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-emerald-950/20 to-gray-950">
      {/* Animated gradient overlay */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 animate-gradient"></div>
      </div>

      <Header />
      
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-full text-sm text-emerald-300 font-medium flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 1535 2500" fill="currentColor">
                <path d="M767.5 0L767 2.1V1710.7L767.5 1711.2L1535 1255.9L767.5 0Z" opacity="0.6"/>
                <path d="M767.5 0L0 1255.9L767.5 1711.2V915.6V0Z"/>
                <path d="M767.5 1854.9L767.2 1855.3V2446.2L767.5 2500L1535 1399.7L767.5 1854.9Z" opacity="0.6"/>
                <path d="M767.5 2500V1854.9L0 1399.7L767.5 2500Z"/>
                <path d="M767.5 1711.2L1535 1255.9L767.5 915.6V1711.2Z" opacity="0.2"/>
                <path d="M0 1255.9L767.5 1711.2V915.6L0 1255.9Z" opacity="0.6"/>
              </svg>
              Ethereum Arrival Tracker
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent leading-tight pb-2">
            Did My Crypto Arrive?
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Stop refreshing. Track your Ethereum wallet and see exactly when it arrives.
          </p>
          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
            Calm reassurance for incoming ETH transactions
          </p>
          <p className="text-sm text-gray-500 mb-10">
            Supports Ethereum (ETH) • More chains coming soon
          </p>
        </div>

        {/* Waiting vs Arrived States */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Waiting State */}
            <div className="group">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 h-full">
                <div className="mb-6">
                  <WaitingArrived state="waiting" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Before: Anxious Waiting</h2>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">⏳</span>
                    <span>Constantly refreshing wallet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">😰</span>
                    <span>"Did it go through?"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">🔄</span>
                    <span>Checking every few minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">❓</span>
                    <span>"How long does this take?"</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Arrived State */}
            <div className="group">
              <div className="bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-cyan-500/5 backdrop-blur-sm border-2 border-emerald-500/30 rounded-3xl p-8 h-full hover:border-emerald-500/50 transition-colors duration-300">
                <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                  <WaitingArrived state="arrived" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">After: Confirmed Arrival</h2>
                <ul className="space-y-2 text-emerald-300 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Clear "Balance increased" status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exact amount received shown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Timestamp of arrival</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Peace of mind ✨</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How Tracking Confirms Arrival */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              How tracking confirms arrival
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Start tracking before it arrives</h3>
                  <p className="text-gray-400">
                    Enter your wallet address and bookmark the tracking page. You'll see the current balance and "No changes" status.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Do something else</h3>
                  <p className="text-gray-400">
                    No need to constantly refresh. Go about your day. WalletPing remembers the last balance for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">3️⃣</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Check back when ready</h3>
                  <p className="text-gray-400">
                    Refresh the page. If your crypto arrived, you'll see a clear "Balance increased" status with the exact amount.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">✅</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Instant confirmation</h3>
                  <p className="text-gray-400">
                    No guessing, no calculating. The status tells you immediately: your crypto arrived.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center">
              <p className="text-emerald-300 font-medium text-lg mb-2">
                💡 Pro tip
              </p>
              <p className="text-gray-300">
                Bookmark your tracking page right after sending or requesting crypto. 
                Check back in 5-10 minutes instead of refreshing every 30 seconds.
              </p>
            </div>
          </div>
        </div>

        {/* Common Scenarios */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Common "did it arrive?" scenarios
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💸</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Waiting for a payment</h3>
                    <p className="text-gray-400 mb-3">
                      Someone said they sent you ETH. Track your wallet to see exactly when it shows up and how much arrived.
                    </p>
                    <div className="text-sm text-cyan-400">
                      ✓ See exact amount received • ✓ Know precise arrival time
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏦</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Withdrawal from exchange</h3>
                    <p className="text-gray-400 mb-3">
                      Withdrew from Coinbase or Binance? Track to confirm it hit your personal wallet.
                    </p>
                    <div className="text-sm text-emerald-400">
                      ✓ Confirm exchange withdrawal • ✓ Verify full amount received
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🎁</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Receiving a gift or airdrop</h3>
                    <p className="text-gray-400 mb-3">
                      Expecting tokens or a crypto gift? See the moment it arrives without constant checking.
                    </p>
                    <div className="text-sm text-purple-400">
                      ✓ Airdrop confirmation • ✓ Gift receipt tracking
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-blue-500/30 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">↔️</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Moving between your own wallets</h3>
                    <p className="text-gray-400 mb-3">
                      Transferring from one wallet to another? Track the receiving wallet to confirm arrival.
                    </p>
                    <div className="text-sm text-blue-400">
                      ✓ Self-transfer confirmation • ✓ Multi-wallet management
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calm Tracking Interface Preview */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
              A calm interface for anxious moments
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              No flashing alerts, no overwhelming data. Just the answer to your question: "Did it arrive?"
            </p>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
              {/* Placeholder for calm-tracking.png */}
              <div className="aspect-video bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 flex items-center justify-center mb-6">
                <div className="text-center p-8 max-w-md">
                  <div className="mb-6">
                    <div className="inline-block px-6 py-3 bg-emerald-500/20 border border-emerald-500/50 rounded-xl mb-4">
                      <span className="text-emerald-300 font-semibold text-lg">Balance increased</span>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm mb-2">Change since previous check:</div>
                  <div className="text-emerald-400 text-3xl font-bold mb-4">+0.5000 ETH</div>
                  <div className="text-gray-400 text-sm mb-1">Current balance:</div>
                  <div className="text-white text-2xl font-semibold">10.5000 ETH</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="bg-gray-800/50 rounded-xl p-4">
                  <div className="text-cyan-400 text-sm mb-1">Last checked</div>
                  <div className="text-white font-semibold">Just now</div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4">
                  <div className="text-emerald-400 text-sm mb-1">Last change</div>
                  <div className="text-white font-semibold">2 min ago</div>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4">
                  <div className="text-purple-400 text-sm mb-1">Tracking since</div>
                  <div className="text-white font-semibold">10 min ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-20">
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-green-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-3xl p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-green-500/5 to-cyan-500/5 animate-gradient"></div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Track your wallet now
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Stop wondering. Start tracking. See exactly when your crypto arrives.
              </p>
              <div className="max-w-2xl mx-auto mb-8">
                <WalletInput />
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <Link href="/crypto-wallet-tracker" className="hover:text-cyan-400 transition-colors">
                  ← Main tracker
                </Link>
                <Link href="/get-notified-when-crypto-arrives" className="hover:text-cyan-400 transition-colors">
                  Want automatic notifications? →
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

