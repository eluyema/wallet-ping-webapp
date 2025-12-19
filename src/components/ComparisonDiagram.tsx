interface ComparisonDiagramProps {
  type: 'checking' | 'tracking';
}

export default function ComparisonDiagram({ type }: ComparisonDiagramProps) {
  if (type === 'checking') {
    return (
      <div className="aspect-video bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-xl border border-gray-500/30 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="text-5xl font-bold text-gray-300 mb-2">10.0000 ETH</div>
          <div className="text-gray-500 text-sm mb-6">Right now</div>
          <div className="mt-6 text-gray-600 text-xs italic">
            That's all you know
          </div>
        </div>
      </div>
    );
  }

  // tracking
  return (
    <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-xl border border-cyan-500/30 flex items-center justify-center p-4">
      <div className="w-full max-w-xs space-y-2">
        <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/30 rounded px-3 py-2">
          <span className="text-emerald-300 text-xs font-semibold">10.45 ETH</span>
          <span className="text-emerald-400 text-xs">+0.45</span>
        </div>
        <div className="flex items-center justify-between bg-gray-800/30 border border-gray-700/30 rounded px-3 py-2">
          <span className="text-gray-400 text-xs">10.00 ETH</span>
          <span className="text-gray-500 text-xs">0.00</span>
        </div>
        <div className="flex items-center justify-between bg-red-500/10 border border-red-500/30 rounded px-3 py-2">
          <span className="text-red-300 text-xs">9.88 ETH</span>
          <span className="text-red-400 text-xs">-0.12</span>
        </div>
        <div className="text-center pt-2">
          <div className="text-cyan-400 text-xs font-medium">Full history visible</div>
        </div>
      </div>
    </div>
  );
}

