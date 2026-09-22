import React from 'react';
import { appConfig } from '../config/appConfig';
import { Sparkles } from 'lucide-react';

export const AppBanner: React.FC = () => {
  return (
    <section className="my-3 sm:my-5">
      <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xs border border-gray-100 bg-gray-50 aspect-[16/7] sm:aspect-[21/8] max-h-[320px] group">
        <img
          src={appConfig.bannerImage}
          alt={`${appConfig.appName} Banner`}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.01]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/banner.svg';
          }}
        />

        {/* Subtle decorative bottom label overlay */}
        <div className="absolute bottom-2.5 left-3 sm:bottom-4 sm:left-5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/80 shadow-2xs text-[11px] sm:text-xs font-semibold text-gray-800 pointer-events-none">
          <Sparkles className="w-3 h-3 text-red-600 fill-red-600" />
          <span>Official Android Build</span>
        </div>
      </div>
    </section>
  );
};
