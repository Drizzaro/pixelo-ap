import React, { useState } from 'react';
import { appConfig } from '../config/appConfig';
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Layers,
  Palette,
  DownloadCloud,
  Cpu,
  Smartphone,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-red-600" />,
  Zap: <Zap className="w-5 h-5 text-red-600" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-red-600" />,
  Layers: <Layers className="w-5 h-5 text-red-600" />,
  Palette: <Palette className="w-5 h-5 text-red-600" />,
  DownloadCloud: <DownloadCloud className="w-5 h-5 text-red-600" />,
  Cpu: <Cpu className="w-5 h-5 text-red-600" />,
  Smartphone: <Smartphone className="w-5 h-5 text-red-600" />
};

export const AboutSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about-section" className="my-6 sm:my-8 space-y-6">
      {/* About this app - Google Play style clean card */}
      <div className="rounded-2xl bg-white border border-gray-100 p-5 sm:p-7 shadow-xs">
        <div className="flex items-center justify-between mb-3 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <h2 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
            About this app
          </h2>
          <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
        </div>

        {/* Short & Expandable Description */}
        <div className="text-xs sm:text-sm text-gray-600 leading-relaxed space-y-2.5">
          <p>{appConfig.shortDescription}</p>
          {(isExpanded ? appConfig.fullDescription : appConfig.fullDescription.slice(0, 1)).map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {!isExpanded && (
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="mt-2 text-xs sm:text-sm font-semibold text-red-600 hover:text-red-700 cursor-pointer"
          >
            Read more
          </button>
        )}

        {/* Feature Pills / Badges in Google Play Category style */}
        <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-gray-100">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700">
            #{appConfig.category}
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700">
            Android 8.0+
          </span>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700">
            No Ads Option
          </span>
          <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-full text-xs font-semibold">
            Google Play Protect Verified
          </span>
        </div>
      </div>

      {/* What's New Section (Google Play style) */}
      <div id="whats-new-section" className="rounded-2xl bg-white border border-gray-100 p-5 sm:p-7 shadow-xs scroll-mt-20">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
            What's new
          </h2>
          <span className="text-xs text-gray-500 font-medium">
            v{appConfig.version} • {appConfig.lastUpdated}
          </span>
        </div>

        <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
          {appConfig.whatsNew.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* App Info Grid (Google Play App info modal equivalent) */}
      <div className="rounded-2xl bg-white border border-gray-100 p-5 sm:p-7 shadow-xs">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
          App info
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-gray-50/70 rounded-xl">
            <span className="text-gray-500 block mb-0.5">Version</span>
            <span className="font-semibold text-gray-900">{appConfig.version}</span>
          </div>

          <div className="p-3 bg-gray-50/70 rounded-xl">
            <span className="text-gray-500 block mb-0.5">Updated on</span>
            <span className="font-semibold text-gray-900">{appConfig.lastUpdated}</span>
          </div>

          <div className="p-3 bg-gray-50/70 rounded-xl">
            <span className="text-gray-500 block mb-0.5">Requires Android</span>
            <span className="font-semibold text-gray-900">{appConfig.androidRequirement}</span>
          </div>

          <div className="p-3 bg-gray-50/70 rounded-xl">
            <span className="text-gray-500 block mb-0.5">Downloads</span>
            <span className="font-semibold text-gray-900">{appConfig.downloadsCount}</span>
          </div>

          <div className="p-3 bg-gray-50/70 rounded-xl">
            <span className="text-gray-500 block mb-0.5">Content rating</span>
            <span className="font-semibold text-gray-900">{appConfig.contentRating}</span>
          </div>

          <div className="p-3 bg-gray-50/70 rounded-xl">
            <span className="text-gray-500 block mb-0.5">Offered by</span>
            <span className="font-semibold text-gray-900">{appConfig.developerName}</span>
          </div>

          <div className="p-3 bg-gray-50/70 rounded-xl">
            <span className="text-gray-500 block mb-0.5">Package</span>
            <span className="font-semibold text-gray-900 truncate block">{appConfig.packageName}</span>
          </div>

          <div className="p-3 bg-gray-50/70 rounded-xl">
            <span className="text-gray-500 block mb-0.5">Download Size</span>
            <span className="font-semibold text-gray-900">{appConfig.appSize}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
