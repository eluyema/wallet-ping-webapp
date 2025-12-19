interface TimelineItem {
  balance: string;
  delta: string;
  type: 'increased' | 'decreased' | 'no-change';
}

export default function TimelineVisual() {
  const items: TimelineItem[] = [
    { balance: '10.4500 ETH', delta: '+0.4500', type: 'increased' },
    { balance: '10.0000 ETH', delta: '0.0000', type: 'no-change' },
    { balance: '9.8800 ETH', delta: '-0.1200', type: 'decreased' },
  ];

  const getColors = (type: string) => {
    switch (type) {
      case 'increased':
        return { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-300', delta: 'text-emerald-400' };
      case 'decreased':
        return { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-300', delta: 'text-red-400' };
      default:
        return { bg: 'bg-gray-800/50', border: 'border-gray-700/30', text: 'text-gray-300', delta: 'text-gray-500' };
    }
  };

  return (
    <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/30 flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-3">
        {items.map((item, index) => {
          const colors = getColors(item.type);
          return (
            <div
              key={index}
              className={`flex items-center justify-between ${colors.bg} border ${colors.border} rounded-lg p-3 transition-all duration-300 hover:scale-105`}
            >
              <span className={`${colors.text} text-sm font-medium`}>{item.balance}</span>
              <span className={`${colors.delta} text-xs font-semibold`}>{item.delta}</span>
            </div>
          );
        })}
        <div className="text-center pt-2">
          <p className="text-purple-300 font-semibold text-sm">Balance Timeline</p>
          <p className="text-gray-500 text-xs mt-1">Last 3 snapshots</p>
        </div>
      </div>
    </div>
  );
}

