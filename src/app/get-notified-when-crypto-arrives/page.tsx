import WalletInput from '@/components/WalletInput';
import Header from '@/components/Header';
import NotificationMockup from '@/components/NotificationMockup';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Notified When Crypto Arrives - Future Ethereum Wallet Notifications | WalletPing',
  description: 'Want notifications when crypto arrives in your Ethereum wallet? Learn about WalletPing\'s future notification features. Track manually now, get alerts later.',
  keywords: 'get notified when crypto arrives, crypto arrival notifications, ethereum wallet alerts, crypto notifications, wallet notification app',
  openGraph: {
    title: 'Get Notified When Crypto Arrives - Coming Soon',
    description: 'The future of calm crypto notifications. Track now, notifications coming soon.',
    type: 'website',
  },
};

export default function GetNotifiedWhenCryptoArrivesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950">
      {/* Animated gradient overlay */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 animate-gradient"></div>
      </div>

      <Header />
      
      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium">
              Future Feature Preview
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight pb-2">
            Get Notified When Crypto Arrives
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            The future of calm crypto notifications
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Track manually now • Automatic notifications coming soon
          </p>
        </div>

        {/* Current vs Future */}
        <div className="mb-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Available Now */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8">
              <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-300 font-medium mb-6">
                ✅ Available Now
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Manual Tracking</h2>
              <p className="text-gray-400 mb-6">
                Track your wallet and refresh when you want to check. Simple, effective, no setup required.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="text-white font-semibold mb-1">Bookmark & refresh</div>
                    <div className="text-gray-500 text-sm">Check on your schedule</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="text-white font-semibold mb-1">No accounts needed</div>
                    <div className="text-gray-500 text-sm">Start tracking instantly</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="text-white font-semibold mb-1">Full control</div>
                    <div className="text-gray-500 text-sm">You decide when to check</div>
                  </div>
                </div>
              </div>

              <Link href="/track-crypto-wallet" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40">
                Start tracking now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Coming Soon */}
            <div className="bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-cyan-500/5 backdrop-blur-sm border-2 border-purple-500/30 rounded-3xl p-8">
              <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium mb-6">
                🔮 Coming Soon
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Automatic Notifications</h2>
              <p className="text-gray-400 mb-6">
                We're exploring automatic notifications for when your crypto arrives. No promises yet, but here's the vision.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-400 text-xs">?</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Email or SMS alerts</div>
                    <div className="text-gray-500 text-sm">Get notified instantly</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-400 text-xs">?</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Custom thresholds</div>
                    <div className="text-gray-500 text-sm">Only notify for large amounts</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-400 text-xs">?</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Calm notifications</div>
                    <div className="text-gray-500 text-sm">No spam, just what matters</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                <p className="text-purple-300 text-sm text-center">
                  Validating demand first. Use manual tracking to show us this matters to you!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Mockups */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              How notifications could work
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Calm, clear, and only when something actually changes
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Email Notification Mockup */}
              <div className="group">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-colors duration-300">
                  <div className="mb-4">
                    <NotificationMockup type="email" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Notification</h3>
                  <p className="text-gray-400 text-sm">
                    Simple email when your balance increases. No spam, just arrivals.
                  </p>
                </div>
              </div>

              {/* SMS Notification Mockup */}
              <div className="group">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
                  <div className="mb-4">
                    <NotificationMockup type="sms" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">SMS Alert</h3>
                  <p className="text-gray-400 text-sm">
                    Quick text message for instant mobile notifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* No Need to Refresh */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Imagine: No need to refresh
              </h2>
              <p className="text-xl text-gray-300">
                The ultimate calm crypto experience
              </p>
            </div>

            <div className="mb-8">
              <NotificationMockup type="bell" />
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">😌</div>
                <h3 className="font-semibold text-white mb-2">Peace of mind</h3>
                <p className="text-gray-400 text-sm">No anxiety, no constant checking</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-semibold text-white mb-2">Instant awareness</h3>
                <p className="text-gray-400 text-sm">Know the moment it arrives</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-semibold text-white mb-2">Only what matters</h3>
                <p className="text-gray-400 text-sm">No spam, just real changes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why We're Waiting */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Why notifications aren't live yet
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Validating demand</h3>
                  <p className="text-gray-400">
                    We want to make sure people actually want this feature before building it. 
                    Your use of manual tracking helps us understand the need.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Getting it right</h3>
                  <p className="text-gray-400">
                    Notifications done wrong are annoying. We're taking time to design calm, 
                    helpful notifications that respect your attention.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">3️⃣</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Infrastructure costs</h3>
                  <p className="text-gray-400">
                    Automatic monitoring requires servers running 24/7. We need to validate 
                    the business model before investing in infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 text-center">
              <p className="text-purple-300 font-medium mb-2">
                Help us validate this feature
              </p>
              <p className="text-gray-400">
                Use manual tracking now. If enough people find it valuable, 
                we'll know notifications are worth building.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-20">
          <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-gradient"></div>
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Start tracking today
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Manual tracking works great right now. Notifications might come later.
              </p>
              <div className="max-w-2xl mx-auto mb-8">
                <WalletInput />
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <Link href="/crypto-wallet-tracker" className="hover:text-cyan-400 transition-colors">
                  ← Main tracker
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

