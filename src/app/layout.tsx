import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://walletping.io'),
  title: {
    default: "WalletPing - Simple Crypto Wallet Tracker for Ethereum",
    template: "%s | WalletPing"
  },
  description: "Track your Ethereum wallet balance changes with calm, simple updates. No accounts required. See balance history, detect changes, and stay updated without the noise.",
  keywords: ['crypto wallet tracker', 'ethereum wallet tracker', 'wallet balance tracker', 'crypto balance monitor', 'ethereum balance checker', 'wallet ping', 'crypto tracker', 'eth tracker', 'wallet monitor', 'track crypto wallet', 'check wallet balance'],
  authors: [{ name: 'WalletPing' }],
  creator: 'WalletPing',
  publisher: 'WalletPing',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/app-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/app-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/app-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://walletping.io',
    siteName: 'WalletPing',
    title: 'WalletPing - Simple Crypto Wallet Tracker for Ethereum',
    description: 'Track your Ethereum wallet balance changes with calm, simple updates. No accounts required.',
    images: [
      {
        url: '/app-icon.png',
        width: 512,
        height: 512,
        alt: 'WalletPing Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'WalletPing - Simple Crypto Wallet Tracker',
    description: 'Track your Ethereum wallet balance changes with calm, simple updates.',
    images: ['/app-icon.png'],
  },
  alternates: {
    canonical: 'https://walletping.io',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100`}
        suppressHydrationWarning
      >
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'} />
        {children}
      </body>
    </html>
  );
}
