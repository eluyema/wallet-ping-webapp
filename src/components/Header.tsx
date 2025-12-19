import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="relative border-b border-gray-800/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="absolute inset-0 animate-ping-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image src="/logo.png" alt="" width={40} height={40} className="opacity-60 w-full h-full object-contain" />
              </div>
              <Image src="/logo.png" alt="WalletPing Logo" width={40} height={40} className="relative z-10 w-full h-full object-contain" priority />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              WalletPing
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/crypto-wallet-tracker" className="text-sm text-gray-300 hover:text-white transition-colors font-medium">
              Tracker
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

