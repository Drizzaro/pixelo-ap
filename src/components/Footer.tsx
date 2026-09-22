import React from 'react';
import { appConfig } from '../config/appConfig';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="mt-14 pt-8 pb-12 border-t border-gray-200 text-center text-xs text-gray-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* App Name & Copyright */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md overflow-hidden bg-red-600 flex items-center justify-center text-white font-extrabold text-[10px]">
            P
          </div>
          <span className="font-bold text-gray-800">{appConfig.appName}</span>
          <span className="text-gray-400">•</span>
          <span>© {appConfig.copyrightYear} {appConfig.developerName}. All rights reserved.</span>
        </div>

        {/* Minimal Legal Links */}
        <div className="flex items-center gap-5 text-gray-500 font-medium">
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="hover:text-red-600 transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={onOpenTerms}
            className="hover:text-red-600 transition-colors cursor-pointer"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
};
