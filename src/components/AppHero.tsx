import React from 'react';
import { appConfig } from '../config/appConfig';
import {
  Star,
  Download,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Bookmark
} from 'lucide-react';

interface AppHeroProps {
  onScrollToDownload: () => void;
  onScrollToWhatsNew: () => void;
}

export const AppHero: React.FC<AppHeroProps> = ({
  onScrollToDownload,
  onScrollToWhatsNew
}) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${appConfig.appName} APK Download`,
          text: appConfig.shortDescription,
          url: window.location.href
        });
      } catch {
        // Ignored if cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section className="pt-4 sm:pt-7 pb-4">
      {/* Top App Header Row: Authentic Google Play Store App Layout */}
      <div className="flex items-start gap-4 sm:gap-6">
        {/* App Logo - Squircle corner style */}
        <div className="flex-shrink-0">
          <div className="w-18 h-18 sm:w-28 sm:h-28 rounded-2xl sm:rounded-[28px] bg-white p-1 sm:p-2 shadow-xs border border-gray-100 flex items-center justify-center overflow-hidden">
            <img
              src={appConfig.appLogo}
              alt={`${appConfig.appName} Logo`}
              className="w-full h-full object-contain rounded-xl sm:rounded-[22px]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/logo.png';
              }}
            />
          </div>
        </div>

        {/* Title, Subtitle, Developer */}
        <div className="flex-1 min-w-0 pt-0.5">
          <h1 className="text-xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-snug">
            {appConfig.appName}
          </h1>

          <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
            <span className="font-semibold text-red-600 hover:underline cursor-pointer">
              {appConfig.developerName}
            </span>
            {appConfig.developerVerified && (
              <span className="inline-flex items-center text-[10px] font-medium text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-md border border-emerald-100">
                <CheckCircle2 className="w-2.5 h-2.5 mr-0.5 text-emerald-600" />
                Verified
              </span>
            )}
          </div>

          <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
            Contains ads • In-app purchases
          </p>
        </div>
      </div>

      {/* Google Play Horizontal Stats Strip (Rating, Reviews, Downloads, APK Size, Rating for 3+) */}
      <div className="mt-5 py-2.5 border-y border-gray-100 flex items-center justify-between sm:justify-start sm:gap-8 overflow-x-auto scrollbar-none no-scrollbar">
        {/* Rating */}
        <div className="flex flex-col items-center flex-1 sm:flex-none px-2 border-r border-gray-100 sm:border-r-0">
          <div className="flex items-center gap-1 text-gray-900 font-bold text-xs sm:text-sm">
            <span>{appConfig.rating}</span>
            <Star className="w-3.5 h-3.5 fill-gray-900 text-gray-900" />
          </div>
          <span className="text-[10px] sm:text-[11px] text-gray-500 whitespace-nowrap mt-0.5">
            {appConfig.reviewsCount} reviews
          </span>
        </div>

        {/* Downloads */}
        <div className="flex flex-col items-center flex-1 sm:flex-none px-2 border-r border-gray-100 sm:border-r-0">
          <span className="text-gray-900 font-bold text-xs sm:text-sm">
            {appConfig.downloadsCount}
          </span>
          <span className="text-[10px] sm:text-[11px] text-gray-500 whitespace-nowrap mt-0.5">Downloads</span>
        </div>

        {/* APK Size */}
        <div className="flex flex-col items-center flex-1 sm:flex-none px-2 border-r border-gray-100 sm:border-r-0">
          <span className="text-gray-900 font-bold text-xs sm:text-sm">
            {appConfig.appSize}
          </span>
          <span className="text-[10px] sm:text-[11px] text-gray-500 whitespace-nowrap mt-0.5">APK Size</span>
        </div>

        {/* Content Rating */}
        <div className="flex flex-col items-center flex-1 sm:flex-none px-2">
          <div className="px-1 py-0.2 border border-gray-800 rounded text-[9px] sm:text-[10px] font-bold text-gray-900 leading-none">
            3+
          </div>
          <span className="text-[10px] sm:text-[11px] text-gray-500 whitespace-nowrap mt-0.5">Rated for 3+</span>
        </div>
      </div>

      {/* Primary Action Button (Full-width rounded pill like Google Play) */}
      <div className="mt-4">
        <button
          type="button"
          onClick={onScrollToDownload}
          className="w-full sm:w-auto sm:min-w-[240px] inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base text-white bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-xs transition-all cursor-pointer transform active:scale-[0.99]"
        >
          <Download className="w-4 h-4 stroke-[2.5]" />
          <span>Install</span>
        </button>

        {/* Secondary Play Store utilities: Wishlist, Share, and Verified */}
        <div className="mt-3 flex items-center justify-around sm:justify-start sm:gap-6 text-xs text-gray-600 font-medium">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 hover:text-red-600 transition-colors py-1 cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-gray-500" />
            <span>Share</span>
          </button>
          <button
            type="button"
            onClick={() => alert('Added to your Wishlist!')}
            className="inline-flex items-center gap-1.5 hover:text-red-600 transition-colors py-1 cursor-pointer"
          >
            <Bookmark className="w-4 h-4 text-gray-500" />
            <span>Add to wishlist</span>
          </button>
          <div className="inline-flex items-center gap-1 text-emerald-700">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Play Protect verified</span>
          </div>
        </div>
      </div>
    </section>
  );
};
