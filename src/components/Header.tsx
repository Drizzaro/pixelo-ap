import React from 'react';
import { appConfig } from '../config/appConfig';
import { Download, ArrowLeft, Search, Share2, MoreVertical } from 'lucide-react';

interface HeaderProps {
  onScrollToDownload: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToDownload }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: appConfig.appName,
          text: appConfig.shortDescription,
          url: window.location.href,
        });
      } catch {
        // Ignored if cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('App link copied to clipboard!');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Left: Google Play style nav back arrow & App mini identity */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowLeft className="w-5 h-5 text-gray-800 stroke-[2.2]" />
          </button>

          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden border border-gray-100 flex-shrink-0 bg-white p-0.5 shadow-2xs">
              <img
                src={appConfig.appLogo}
                alt={appConfig.appName}
                className="w-full h-full object-contain rounded-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/logo.png';
                }}
              />
            </div>
            <div className="truncate">
              <span className="font-bold text-gray-900 text-sm sm:text-base tracking-tight truncate block">
                {appConfig.appName}
              </span>
            </div>
          </div>
        </div>

        {/* Right Play Store actions: Search, Share, and Install / Download */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('about-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-9 h-9 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer"
            title="Search / Details"
            aria-label="Search"
          >
            <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-gray-700 stroke-[2.2]" />
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="w-9 h-9 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer"
            title="Share App"
            aria-label="Share"
          >
            <Share2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-gray-700 stroke-[2.2]" />
          </button>

          {/* Quick Header Download Pill */}
          <button
            type="button"
            onClick={onScrollToDownload}
            className="ml-1 inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full shadow-xs transition-all cursor-pointer transform active:scale-98"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Install</span>
          </button>
        </div>
      </div>
    </header>
  );
};
