import React, { useRef, useState, useEffect } from 'react';
import { appConfig, ScreenshotItem } from '../config/appConfig';
import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn } from 'lucide-react';

export const ScreenshotGallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const screenshots = appConfig.screenshots;

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % screenshots.length : 0));
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + screenshots.length) % screenshots.length : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, screenshots.length]);

  return (
    <section className="my-5 sm:my-7">
      {/* Gallery Header with Title & Nav Buttons */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
            App Previews & Screenshots
          </h2>
        </div>

        {/* Desktop Previous / Next Buttons */}
        <div className="hidden sm:flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              canScrollLeft
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                : 'bg-gray-50 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              canScrollRight
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                : 'bg-gray-50 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Carousel - Mobile Play Store touch friendly */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 pt-0.5 snap-x snap-mandatory scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {screenshots.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveLightboxIndex(index)}
            className="flex-shrink-0 snap-start w-[145px] xs:w-[170px] sm:w-[210px] md:w-[240px] group cursor-pointer"
          >
            {/* Screenshot Card */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-gray-200/90 shadow-2xs hover:shadow-md transition-all duration-200">
              <div className="aspect-[9/16] bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={item.url}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-101"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white/95 backdrop-blur-xs text-red-600 rounded-full flex items-center justify-center shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous in Lightbox */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + screenshots.length) % screenshots.length : 0
              );
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next in Lightbox */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((prev) =>
                prev !== null ? (prev + 1) % screenshots.length : 0
              );
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container - Clean Image Only */}
          <div
            className="max-h-[90vh] max-w-sm sm:max-w-md md:max-w-lg w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 max-h-[85vh]">
              <img
                src={screenshots[activeLightboxIndex].url}
                alt={`Screenshot ${activeLightboxIndex + 1}`}
                className="w-auto h-auto max-h-[85vh] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
