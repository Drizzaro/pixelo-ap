/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { AppHero } from './components/AppHero';
import { AppBanner } from './components/AppBanner';
import { ScreenshotGallery } from './components/ScreenshotGallery';
import { DownloadSection } from './components/DownloadSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToDownload = () => {
    const el = document.getElementById('download-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWhatsNew = () => {
    const el = document.getElementById('whats-new-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-red-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Header
        onScrollToDownload={scrollToDownload}
      />

      {/* Main App Store Style Layout Container */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. App Information Section (Icon, Title, Dev, Store Chips) */}
        <AppHero
          onScrollToDownload={scrollToDownload}
          onScrollToWhatsNew={scrollToWhatsNew}
        />

        {/* 2. App Banner / Cover Image */}
        <AppBanner />

        {/* 3. Screenshots Gallery Carousel with Lightbox */}
        <ScreenshotGallery />

        {/* 4. Prominent Download Section */}
        <DownloadSection />

        {/* 5. About this app, Features & What's New */}
        <AboutSection />
      </main>

      {/* 6. Minimal Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
