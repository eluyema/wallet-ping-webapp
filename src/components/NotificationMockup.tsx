interface NotificationMockupProps {
  type: 'email' | 'sms' | 'bell';
}

export default function NotificationMockup({ type }: NotificationMockupProps) {
  if (type === 'email') {
    return (
      <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-white font-semibold text-sm">WalletPing</div>
            </div>
            <div className="text-emerald-300 font-semibold text-xs mb-1">Crypto Arrived!</div>
            <div className="text-gray-400 text-xs mb-2">Your wallet received +0.5 ETH</div>
            <div className="text-gray-500 text-xs">0x1234...5678</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'sms') {
    return (
      <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/30 flex items-center justify-center p-6">
        <div className="w-full max-w-xs">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-left">
            <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-3">
              <div className="text-cyan-300 font-semibold text-xs mb-1">WalletPing Alert</div>
              <div className="text-white text-xs">✅ +0.5 ETH received</div>
              <div className="text-gray-400 text-xs mt-1">Wallet: 0x12...78</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // bell
  return (
    <div className="aspect-video bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 flex items-center justify-center p-8">
      <div className="text-center">
        <div className="relative inline-block mb-6">
          <div className="w-24 h-24 bg-purple-500/20 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>
        <div className="text-purple-300 font-semibold text-lg mb-2">Notification arrives</div>
        <div className="text-gray-400 text-sm">While you're doing something else</div>
      </div>
    </div>
  );
}

