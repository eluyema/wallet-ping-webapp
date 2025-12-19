interface StepIllustrationProps {
  step: 1 | 2 | 3;
}

export default function StepIllustration({ step }: StepIllustrationProps) {
  if (step === 1) {
    return (
      <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/30 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
          </div>
          <p className="text-cyan-300 font-semibold mb-2">Paste wallet address</p>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-400 text-sm font-mono">
            0x1234...5678
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/30 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-blue-300 font-semibold mb-2">Fetching balance...</p>
          <div className="flex justify-center gap-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
          </div>
          <p className="text-gray-500 text-xs mt-3">Connecting to blockchain</p>
        </div>
      </div>
    );
  }

  // Step 3
  return (
    <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/30 flex items-center justify-center p-6">
      <TimelineVisual />
    </div>
  );
}

function TimelineVisual() {
  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
        <span className="text-emerald-300 text-sm font-medium">10.45 ETH</span>
        <span className="text-emerald-400 text-xs font-semibold">+0.45</span>
      </div>
      <div className="flex items-center justify-between bg-gray-800/50 border border-gray-700/30 rounded-lg p-3">
        <span className="text-gray-300 text-sm">10.00 ETH</span>
        <span className="text-gray-500 text-xs">0.00</span>
      </div>
      <div className="flex items-center justify-between bg-gray-800/50 border border-gray-700/30 rounded-lg p-3">
        <span className="text-gray-300 text-sm">10.00 ETH</span>
        <span className="text-gray-500 text-xs">0.00</span>
      </div>
      <div className="text-center pt-2">
        <p className="text-purple-300 font-semibold text-xs">Balance Timeline</p>
      </div>
    </div>
  );
}

