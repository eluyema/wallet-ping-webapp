interface WaitingArrivedProps {
  state: 'waiting' | 'arrived';
}

export default function WaitingArrived({ state }: WaitingArrivedProps) {
  if (state === 'waiting') {
    return (
      <div className="aspect-video bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-500/30 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-yellow-300 font-semibold mb-2">Waiting...</div>
          <div className="text-gray-500 text-sm mb-1">10.0000 ETH</div>
          <div className="text-gray-600 text-xs mt-3">No changes yet</div>
        </div>
      </div>
    );
  }

  // arrived
  return (
    <div className="aspect-video bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-500/30 flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="text-emerald-300 font-semibold mb-2 text-xl">✅ Arrived!</div>
        <div className="text-emerald-400 text-lg font-bold mb-1">10.5000 ETH</div>
        <div className="text-emerald-500 text-sm">+0.5000 ETH</div>
      </div>
    </div>
  );
}

