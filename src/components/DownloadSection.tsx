import React, { useState } from 'react';
import { appConfig } from '../config/appConfig';
import {
  Download,
  ShieldCheck,
  Check,
  Copy,
  ChevronDown,
  ChevronUp,
  FileCode,
  Smartphone,
  ExternalLink,
  HardDrive
} from 'lucide-react';

export const DownloadSection: React.FC = () => {
  const [copiedHash, setCopiedHash] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  const handleDownload = () => {
    setDownloadTriggered(true);

    // Create programmatically triggered anchor download for robust cross-browser support
    const downloadUrl = appConfig.apkDownloadUrl;
    const fileName = appConfig.apkFileName || `${appConfig.appName.toLowerCase()}-v${appConfig.version}.apk`;

    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = fileName;
    a.setAttribute('target', '_self');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => {
      setDownloadTriggered(false);
    }, 4500);
  };

  const copyHash = () => {
    navigator.clipboard.writeText(appConfig.apkSha256);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <section id="download-section" className="my-6 sm:my-8 scroll-mt-20">
      {/* Google Play Style Install / Download Section */}
      <div className="relative rounded-2xl bg-gradient-to-b from-red-50/40 via-white to-white border border-red-100 p-5 sm:p-8 shadow-xs">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Play Protect Verified • Clean APK</span>
          </div>

          {/* Title & Description */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mb-1.5">
            Download APK File
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-5 max-w-md leading-relaxed">
            Direct installation package for your Android device (v{appConfig.version})
          </p>

          {/* Google Play Style Rounded Install Button */}
          <div className="w-full sm:w-auto flex flex-col items-center gap-2.5">
            <button
              type="button"
              onClick={handleDownload}
              className="w-full sm:w-auto min-w-[260px] sm:min-w-[300px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-xs transition-all transform active:scale-[0.99] cursor-pointer group"
            >
              <Download className="w-5 h-5 stroke-[2.5]" />
              <span>Install APK</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-red-700/80 text-white/95">
                {appConfig.appSize}
              </span>
            </button>

            {/* Notification alert after download is clicked */}
            {downloadTriggered && (
              <div className="w-full max-w-sm p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between animate-fade-in mt-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Download started! Check your notifications.</span>
                </div>
              </div>
            )}
          </div>

          {/* Store verification indicators */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] text-gray-500 font-medium">
            <span>Version {appConfig.version}</span>
            <span>•</span>
            <span>Android 8.0+</span>
            <span>•</span>
            <span className="text-emerald-700 font-semibold inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
              Secure Download
            </span>
          </div>

          {/* Secondary backup mirror download link */}
          <div className="mt-4 pt-4 border-t border-gray-100 w-full flex items-center justify-center gap-4 text-xs text-gray-500">
            <span>Having issues?</span>
            <a
              href={appConfig.apkFallbackUrl || appConfig.apkDownloadUrl}
              download={appConfig.apkFileName}
              className="text-red-600 hover:text-red-700 font-bold underline underline-offset-2 flex items-center gap-1 cursor-pointer"
            >
              Direct Link Mirror
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Technical APK Details Toggle */}
        <div className="mt-8 pt-6 border-t border-gray-100 max-w-2xl mx-auto">
          <button
            type="button"
            onClick={() => setShowSpecs(!showSpecs)}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-200/80 text-xs font-bold text-gray-700 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-red-600" />
              <span>Package Specs & SHA-256 Checksum</span>
            </div>
            {showSpecs ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showSpecs && (
            <div className="mt-3 p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-2.5 text-gray-600">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-semibold text-gray-500">Package Name:</span>
                <span className="font-mono text-gray-900 bg-white px-2 py-0.5 rounded border border-gray-200 text-[11px]">
                  {appConfig.packageName}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-semibold text-gray-500">File Name:</span>
                <span className="font-mono text-gray-900 bg-white px-2 py-0.5 rounded border border-gray-200 text-[11px]">
                  {appConfig.apkFileName}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-semibold text-gray-500">Target SDK:</span>
                <span className="text-gray-900 font-medium">{appConfig.targetSdk}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="font-semibold text-gray-500">Architecture:</span>
                <span className="text-gray-900 font-medium">{appConfig.architectures}</span>
              </div>
              <div className="pt-2 border-t border-gray-200/80">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-gray-500">SHA-256 Hash:</span>
                  <button
                    type="button"
                    onClick={copyHash}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 hover:text-red-700 cursor-pointer"
                  >
                    {copiedHash ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Hash</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="font-mono text-[10px] break-all bg-white p-2 rounded border border-gray-200 text-gray-800">
                  {appConfig.apkSha256}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3-Step Simple Installation Guide */}
      <div className="mt-8 rounded-2xl bg-white border border-gray-200 p-6 sm:p-8">
        <h3 className="text-base sm:text-lg font-extrabold text-gray-950 mb-4 flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-red-600" />
          <span>How to Install on Android</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {appConfig.installSteps.map((step) => (
            <div
              key={step.step}
              className="p-4 rounded-xl bg-gray-50/70 border border-gray-100 flex flex-col items-start gap-2.5"
            >
              <div className="w-7 h-7 rounded-full bg-red-600 text-white font-extrabold text-xs flex items-center justify-center">
                {step.step}
              </div>
              <h4 className="font-bold text-sm text-gray-900">{step.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
