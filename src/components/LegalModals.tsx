import React from 'react';
import { appConfig } from '../config/appConfig';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl sm:rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-950">
                {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                {appConfig.appName} • Last updated {appConfig.lastUpdated}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-5 space-y-4 text-xs sm:text-sm text-gray-600 max-h-[60vh] overflow-y-auto pr-2">
          {isPrivacy ? (
            <>
              <p>
                At <strong>{appConfig.developerName}</strong>, we believe user privacy and data ownership are fundamental rights. This policy outlines how <strong>{appConfig.appName}</strong> respects and handles your data.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">1. Local Processing Guarantee</h4>
              <p>
                All image processing, pixel canvas renderings, and photo edits generated in {appConfig.appName} happen entirely locally on your Android device. No photos or artwork files are transmitted to external servers without your explicit action.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">2. Permissions Used</h4>
              <p>
                {appConfig.appName} requests standard storage/media access solely to read user-selected images from your gallery and save your exported files to your Downloads or Pictures directory.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">3. No Advertising Trackers</h4>
              <p>
                The official APK distribution is completely free of third-party advertising tracking SDKs or location brokers.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">4. Inquiries</h4>
              <p>
                For questions regarding security or privacy, contact our team at <strong>{appConfig.supportEmail}</strong>.
              </p>
            </>
          ) : (
            <>
              <p>
                By downloading and installing the <strong>{appConfig.appName}</strong> Android application package (APK), you agree to the following terms:
              </p>
              <h4 className="font-bold text-gray-900 text-sm">1. License Grant</h4>
              <p>
                {appConfig.developerName} grants you a personal, non-exclusive, non-transferable license to install and run {appConfig.appName} on your Android device for personal and commercial creative use.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">2. Ownership of Created Work</h4>
              <p>
                You retain 100% intellectual property ownership of any images, artwork, sprites, or graphics you create, edit, or export using {appConfig.appName}.
              </p>
              <h4 className="font-bold text-gray-900 text-sm">3. Disclaimer of Warranty</h4>
              <p>
                The software is provided "as is" without warranty of any kind. We strive for utmost stability and security, with packages verified clean against known vulnerabilities.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
