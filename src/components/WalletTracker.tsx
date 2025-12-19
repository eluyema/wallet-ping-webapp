'use client';

import { useState } from 'react';
import { WalletTrackingData, formatAddress, formatBalance, formatDelta, getStatusMessage, getStatusColor } from '@/lib/trackerUtils';

interface WalletTrackerProps {
  initialData: WalletTrackingData;
}

export default function WalletTracker({ initialData }: WalletTrackerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(initialData.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    
    if (seconds < 60) return 'just now';
    if (seconds < 120) return '1 minute ago';
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
    if (seconds < 7200) return '1 hour ago';
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
    if (seconds < 172800) return '1 day ago';
    return `${Math.floor(seconds / 86400)} days ago`;
  };

  const get24HourChange = () => {
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    // Find the first snapshot older than 24 hours
    const oldSnapshot = initialData.snapshots
      .slice()
      .reverse()
      .find(s => new Date(s.timestamp) <= oneDayAgo);
    
    if (!oldSnapshot) return null;
    
    return initialData.currentBalance - oldSnapshot.balance;
  };

  const isFirstSnapshot = initialData.snapshots.length === 1;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h1 className="text-xl font-mono font-semibold text-white truncate">
                {formatAddress(initialData.address)}
              </h1>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 text-purple-300 text-xs font-medium rounded-lg flex items-center gap-2">
                <svg className="w-3 h-3" viewBox="0 0 1535 2500" fill="currentColor">
                  <path d="M767.5 0L767 2.1V1710.7L767.5 1711.2L1535 1255.9L767.5 0Z" opacity="0.6"/>
                  <path d="M767.5 0L0 1255.9L767.5 1711.2V915.6V0Z"/>
                  <path d="M767.5 1854.9L767.2 1855.3V2446.2L767.5 2500L1535 1399.7L767.5 1854.9Z" opacity="0.6"/>
                  <path d="M767.5 2500V1854.9L0 1399.7L767.5 2500Z"/>
                  <path d="M767.5 1711.2L1535 1255.9L767.5 915.6V1711.2Z" opacity="0.2"/>
                  <path d="M0 1255.9L767.5 1711.2V915.6L0 1255.9Z" opacity="0.6"/>
                </svg>
                Ethereum
              </span>
            </div>
            <p className="text-xs text-gray-500 font-mono break-all">
              {initialData.address}
            </p>
          </div>
          <button
            onClick={handleCopy}
            className="px-5 py-2 text-sm font-medium text-white bg-gray-800/80 hover:bg-gray-700/80 rounded-xl transition-all duration-300 whitespace-nowrap border border-gray-700/50 hover:border-cyan-500/50"
          >
            {copied ? '✓ Copied!' : 'Copy Address'}
          </button>
        </div>
      </div>

      {/* Big Status Banner */}
      <div className={`rounded-2xl border-2 p-10 ${getStatusColor(initialData.changeType)} backdrop-blur-sm relative overflow-hidden`}>
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r opacity-10 animate-gradient" 
          style={{
            backgroundImage: initialData.changeType === 'up' 
              ? 'linear-gradient(90deg, rgba(16,185,129,0.2), rgba(5,150,105,0.2))' 
              : initialData.changeType === 'down'
              ? 'linear-gradient(90deg, rgba(239,68,68,0.2), rgba(220,38,38,0.2))'
              : 'linear-gradient(90deg, rgba(59,130,246,0.2), rgba(37,99,235,0.2))'
          }}
        />
        <div className="text-center relative z-10">
          <h2 className="text-4xl font-bold mb-3">
            {getStatusMessage(initialData.changeType, initialData.deltaSincePrev, isFirstSnapshot)}
          </h2>
          <p className="text-sm opacity-75 flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-current animate-pulse"></span>
            Last fetched {formatTimeAgo(initialData.lastCheckedAt)}
          </p>
          <p className="text-xs opacity-60 mt-1">
            {formatDate(initialData.lastCheckedAt)}
          </p>
        </div>
      </div>

      {/* Change Summary */}
      {initialData.changeType !== 'started' && !isFirstSnapshot && (
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6">
          <h3 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
            Change since previous snapshot
            <span className="group relative">
              <svg className="w-4 h-4 text-gray-500 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="invisible group-hover:visible absolute left-6 top-0 w-64 bg-gray-800 text-gray-200 text-xs rounded-lg p-3 shadow-lg border border-gray-700 z-10">
                We compare the current balance to the last time this page was checked. This is different from blockchain transactions.
              </span>
            </span>
          </h3>
          <p className={`text-3xl font-bold flex items-center gap-2 ${
            initialData.deltaSincePrev > 0 ? 'text-emerald-400' : 
            initialData.deltaSincePrev < 0 ? 'text-red-400' : 
            'text-gray-400'
          }`}>
            {initialData.deltaSincePrev > 0 && (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            )}
            {initialData.deltaSincePrev < 0 && (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
            {formatDelta(initialData.deltaSincePrev)} ETH
          </p>
        </div>
      )}

      {/* 24 Hour Context */}
      {get24HourChange() !== null && (
        <div className="bg-blue-500/5 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6">
          <h3 className="text-sm font-medium text-blue-300 mb-2">Past 24 hours</h3>
          <p className={`text-2xl font-semibold ${
            get24HourChange()! > 0 ? 'text-emerald-400' : 
            get24HourChange()! < 0 ? 'text-red-400' : 
            'text-gray-400'
          }`}>
            {get24HourChange()! === 0 
              ? 'No change in the past 24 hours' 
              : `${formatDelta(get24HourChange()!)} ETH change`
            }
          </p>
        </div>
      )}

      {/* Current Balance */}
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8 shadow-xl shadow-cyan-500/10">
        <h3 className="text-sm font-medium text-gray-400 mb-3">Current Balance</h3>
        <p className="text-5xl font-bold text-white flex items-baseline gap-3">
          {formatBalance(initialData.currentBalance)} 
          <span className="text-2xl text-cyan-400 flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 1535 2500" fill="currentColor">
              <path d="M767.5 0L767 2.1V1710.7L767.5 1711.2L1535 1255.9L767.5 0Z" opacity="0.6"/>
              <path d="M767.5 0L0 1255.9L767.5 1711.2V915.6V0Z"/>
              <path d="M767.5 1854.9L767.2 1855.3V2446.2L767.5 2500L1535 1399.7L767.5 1854.9Z" opacity="0.6"/>
              <path d="M767.5 2500V1854.9L0 1399.7L767.5 2500Z"/>
              <path d="M767.5 1711.2L1535 1255.9L767.5 915.6V1711.2Z" opacity="0.2"/>
              <path d="M0 1255.9L767.5 1711.2V915.6L0 1255.9Z" opacity="0.6"/>
            </svg>
            ETH
          </span>
        </p>
      </div>

      {/* Metadata */}
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-1 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Tracking since
            </h3>
            <p className="text-sm text-white">
              {formatDate(initialData.snapshots[initialData.snapshots.length - 1].timestamp)}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-1 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Last checked
            </h3>
            <p className="text-sm text-white">
              {formatDate(initialData.lastCheckedAt)}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-1 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Last change detected
            </h3>
            <p className="text-sm text-white">
              {formatDate(initialData.lastChangeAt)}
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Recent Activity
        </h3>
        <div className="space-y-2">
          {initialData.snapshots.map((snapshot, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4 px-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="flex-1">
                <p className="text-base font-semibold text-white flex items-center gap-2">
                  <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 1535 2500" fill="currentColor">
                    <path d="M767.5 0L767 2.1V1710.7L767.5 1711.2L1535 1255.9L767.5 0Z" opacity="0.6"/>
                    <path d="M767.5 0L0 1255.9L767.5 1711.2V915.6V0Z"/>
                    <path d="M767.5 1854.9L767.2 1855.3V2446.2L767.5 2500L1535 1399.7L767.5 1854.9Z" opacity="0.6"/>
                    <path d="M767.5 2500V1854.9L0 1399.7L767.5 2500Z"/>
                    <path d="M767.5 1711.2L1535 1255.9L767.5 915.6V1711.2Z" opacity="0.2"/>
                    <path d="M0 1255.9L767.5 1711.2V915.6L0 1255.9Z" opacity="0.6"/>
                  </svg>
                  {formatBalance(snapshot.balance)} ETH
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatTimeAgo(snapshot.timestamp)} · {formatDate(snapshot.timestamp)}
                </p>
              </div>
              <div className="text-right">
                {snapshot.delta !== 0 && (
                  <span className={`text-sm font-semibold px-3 py-1 rounded-lg ${
                    snapshot.delta > 0 
                      ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/30' 
                      : 'text-red-400 bg-red-500/10 border border-red-500/30'
                  }`}>
                    {formatDelta(snapshot.delta)} ETH
                  </span>
                )}
                {snapshot.delta === 0 && index === initialData.snapshots.length - 1 && (
                  <span className="text-sm text-gray-500 px-3 py-1 rounded-lg bg-gray-700/30">Initial</span>
                )}
                {snapshot.delta === 0 && index !== initialData.snapshots.length - 1 && (
                  <span className="text-sm text-gray-500 px-3 py-1 rounded-lg bg-gray-700/30">No change</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon Teaser */}
      <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 text-center">
        <div className="inline-block px-4 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full mb-4 border border-purple-500/30">
          COMING SOON
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">Get Notified Automatically</h3>
        <p className="text-base text-gray-300 max-w-md mx-auto">
          Soon you'll be able to receive email or SMS notifications when your wallet balance changes. No more manual checking!
        </p>
      </div>

      {/* Soft CTA */}
      <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8 text-center">
        <h3 className="text-2xl font-semibold text-white mb-3">Stay Updated</h3>
        <p className="text-base text-gray-300 mb-6 max-w-md mx-auto">
          Bookmark this page to check your wallet status anytime. Refresh to see the latest updates.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
        >
          Track Another Wallet
        </a>
      </div>
    </div>
  );
}

