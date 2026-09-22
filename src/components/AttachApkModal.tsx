import React, { useState } from 'react';
import { appConfig } from '../config/appConfig';
import { X, Check, Copy, FolderUp, FileCode, ExternalLink, HelpCircle, HardDrive } from 'lucide-react';

interface AttachApkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AttachApkModal: React.FC<AttachApkModalProps> = ({ isOpen, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const exampleConfig = `// In src/config/appConfig.ts:
export const appConfig = {
  appName: "${appConfig.appName}",
  version: "2.4.1",
  appSize: "34.3 MB",
  
  // Option A: Direct file in /public/ folder
  apkFileName: "pixelo-v2.4.1.apk",
  apkDownloadUrl: "/downloads/pixelo-v2.4.1.apk",

  // Option B: Hosted on Google Drive / GitHub / S3 / Firebase
  // apkDownloadUrl: "https://your-domain.com/downloads/pixelo.apk",
};`;

  const copyConfigSnippet = () => {
    navigator.clipboard.writeText(exampleConfig);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
              <FolderUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black text-gray-950">
                How to Attach Your APK File
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Quick guide for website owners and developers
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
        <div className="mt-5 space-y-5 text-xs sm:text-sm text-gray-700">
          {/* Method 1 */}
          <div className="p-4 rounded-xl bg-red-50/50 border border-red-100 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">
                1
              </span>
              <h4 className="font-extrabold text-gray-950">
                Method 1: Upload Directly to AI Studio (Recommended)
              </h4>
            </div>
            <p className="text-gray-600 pl-7 leading-relaxed">
              In the AI Studio left file explorer, upload or drop your <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200 font-bold text-red-600">.apk</code> file into the <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200 font-semibold">public/downloads/</code> folder (e.g. <code className="font-semibold">public/downloads/pixelo-v2.4.1.apk</code>).
            </p>
            <p className="text-gray-500 pl-7 text-[11px]">
              Any file placed in the <code className="font-mono">public/</code> directory is automatically served statically at the root URL (e.g., <code className="font-mono">/downloads/pixelo-v2.4.1.apk</code>). A starter APK is already included there!
            </p>
          </div>

          {/* Method 2 */}
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/80 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-gray-800 text-white font-bold text-xs flex items-center justify-center">
                2
              </span>
              <h4 className="font-extrabold text-gray-950">
                Method 2: Use an External Cloud URL
              </h4>
            </div>
            <p className="text-gray-600 pl-7 leading-relaxed">
              If your APK is hosted externally on <strong>Google Drive, GitHub Releases, Firebase Storage, AWS S3, or Cloudflare R2</strong>, simply set <code className="font-mono bg-white px-1 py-0.5 rounded border text-red-600 font-bold">apkDownloadUrl</code> to your direct download link.
            </p>
          </div>

          {/* Code Configuration preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-gray-900 flex items-center gap-1.5">
                <FileCode className="w-4 h-4 text-red-600" />
                <span>Configuration in src/config/appConfig.ts:</span>
              </span>
              <button
                type="button"
                onClick={copyConfigSnippet}
                className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-3 rounded-xl bg-gray-900 text-gray-100 font-mono text-[11px] overflow-x-auto">
              {exampleConfig}
            </pre>
          </div>

          {/* Replacing Logo, Banner and Screenshots */}
          <div className="pt-3 border-t border-gray-100 text-xs text-gray-600 space-y-1">
            <p>
              <strong>To replace Logo:</strong> Tap the logo or click "Upload / Replace PNG Logo" to upload any PNG from your device, or place your PNG as <code className="font-mono text-gray-900 bg-gray-100 px-1 rounded">public/logo.png</code>.
            </p>
            <p>
              <strong>To replace Banner & Screenshots:</strong> Place your image files in <code className="font-mono text-gray-900 bg-gray-100 px-1 rounded">public/</code> or <code className="font-mono text-gray-900 bg-gray-100 px-1 rounded">public/screenshots/</code> and edit the paths in <code className="font-mono text-gray-900 bg-gray-100 px-1 rounded">src/config/appConfig.ts</code>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors cursor-pointer"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};
