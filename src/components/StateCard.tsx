interface StateCardProps {
  type: 'started' | 'increased' | 'no-change' | 'decreased';
  balance: string;
  delta?: string;
}

export default function StateCard({ type, balance, delta }: StateCardProps) {
  const configs = {
    started: {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      label: 'Tracking Started',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/20',
      textColor: 'text-blue-300',
      deltaColor: '',
    },
    increased: {
      icon: (
        <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      label: 'Balance Increased',
      bgGradient: 'from-emerald-500/10 to-green-500/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-300',
      deltaColor: 'text-emerald-400',
    },
    'no-change': {
      icon: (
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: 'No Changes',
      bgGradient: 'from-gray-500/10 to-gray-600/10',
      borderColor: 'border-gray-500/20',
      textColor: 'text-gray-300',
      deltaColor: 'text-gray-500',
    },
    decreased: {
      icon: (
        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      ),
      label: 'Balance Decreased',
      bgGradient: 'from-red-500/10 to-orange-500/10',
      borderColor: 'border-red-500/20',
      textColor: 'text-red-300',
      deltaColor: 'text-red-400',
    },
  };

  const config = configs[type];

  return (
    <div className={`aspect-video bg-gradient-to-br ${config.bgGradient} rounded-xl flex items-center justify-center overflow-hidden border ${config.borderColor}`}>
      <div className="text-center p-4">
        <div className={`w-16 h-16 bg-${type === 'started' ? 'blue' : type === 'increased' ? 'emerald' : type === 'no-change' ? 'gray' : 'red'}-500/20 rounded-full flex items-center justify-center mx-auto mb-3`}>
          {config.icon}
        </div>
        <div className={`${config.textColor} font-semibold text-sm mb-2`}>{config.label}</div>
        <div className="text-white text-xl font-bold mb-1">{balance}</div>
        {delta && <div className={`${config.deltaColor} text-xs font-medium`}>{delta}</div>}
        {!delta && type === 'no-change' && <div className="text-gray-600 text-xs">No change</div>}
      </div>
    </div>
  );
}

