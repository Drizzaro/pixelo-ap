/**
 * ============================================================================
 * PIXELO APK LANDING PAGE CONFIGURATION
 * ============================================================================
 * Edit the values below to easily update the app landing page content,
 * branding, banner, screenshots, release notes, and APK download target.
 * 
 * TO ATTACH YOUR OWN APK FILE:
 * 1. Place your .apk file in the `/public/` or `/public/downloads/` folder
 *    (e.g., `/public/downloads/my-app.apk`).
 * 2. Update `apkDownloadUrl` below to match: `'/downloads/my-app.apk'`.
 * 3. Or, if hosted on Google Drive, GitHub Releases, Firebase, or S3,
 *    simply paste the full direct URL (e.g. `'https://github.com/.../app.apk'`).
 * ============================================================================
 */

export interface ScreenshotItem {
  id: string;
  url: string;
  caption: string;
  subtitle?: string;
  tag?: string;
}

export interface AppFeature {
  id: string;
  title: string;
  description: string;
  iconName: 'Sparkles' | 'Zap' | 'ShieldCheck' | 'Layers' | 'Cpu' | 'Palette' | 'DownloadCloud' | 'Smartphone';
}

export interface AppConfig {
  // 1. Core App Identity
  appName: string;
  appSubtitle: string;
  developerName: string;
  developerVerified: boolean;
  category: string;
  shortDescription: string;
  
  // 2. Visual Assets
  appLogo: string;         // Square icon (e.g. /pixelo-icon.svg or /logo.png)
  appLogoFull: string;     // Full logo with wordmark (e.g. /pixelo-logo.svg)
  bannerImage: string;     // App banner cover image
  screenshots: ScreenshotItem[];

  // 3. App Metadata & Android Specs
  version: string;
  appSize: string;
  androidRequirement: string;
  lastUpdated: string;
  releaseDate: string;
  rating: number;
  reviewsCount: string;
  downloadsCount: string;
  contentRating: string;
  
  // 4. Download & APK Configuration
  apkFileName: string;
  apkDownloadUrl: string;       // Direct local or CDN link to the APK
  apkFallbackUrl?: string;      // Alternative backup mirror
  apkSha256: string;            // Integrity hash verification
  packageName: string;
  targetSdk: string;
  minSdk: string;
  architectures: string;

  // 5. About & Content
  fullDescription: string[];
  features: AppFeature[];
  whatsNew: string[];
  installSteps: { step: number; title: string; desc: string }[];

  // 6. Legal & Support
  copyrightYear: number;
  privacyPolicyUrl: string;
  termsOfServiceUrl: string;
  supportEmail: string;
}

export const appConfig: AppConfig = {
  // 1. Core App Identity
  appName: "PIXELO",
  appSubtitle: "Photo & Pixel Art Studio",
  developerName: "Pixelo Labs India",
  developerVerified: true,
  category: "Photography & Design",
  shortDescription: "A simple, fast, and powerful visual creative studio for everyone. Craft, edit, and export pixel-perfect creations.",

  // 2. Visual Assets
  appLogo: "/logo.png",
  appLogoFull: "/pixelo-logo.svg",
  bannerImage: "/banner.svg",
  screenshots: [
    {
      id: "screen-1",
      url: "/screenshots/app-screen-1.jpg",
      caption: "Discover Top Local Businesses",
      subtitle: "Explore trending places and verified services in your city.",
      tag: "Home"
    },
    {
      id: "screen-2",
      url: "/screenshots/app-screen-2.jpg",
      caption: "Events & Popular Categories",
      subtitle: "Find exactly what you need, from photostats to restaurants.",
      tag: "Explore"
    },
    {
      id: "screen-3",
      url: "/screenshots/app-screen-3.jpg",
      caption: "Get in Touch Easily",
      subtitle: "Submit enquiries and grow your business with PIXELO INDIA.",
      tag: "Contact"
    },
    {
      id: "screen-4",
      url: "/screenshots/app-screen-4.jpg",
      caption: "AI Powered Support",
      subtitle: "Get instant help from Pixel, our intelligent assistant.",
      tag: "Support"
    }
  ],

  // 3. App Metadata & Android Specs
  version: "2.4.1",
  appSize: "34.3 MB",
  androidRequirement: "Android 8.0 and up",
  lastUpdated: "September 18, 2026",
  releaseDate: "March 2025",
  rating: 4.8,
  reviewsCount: "78",
  downloadsCount: "100+",
  contentRating: "Everyone 3+",

  // 4. Download & APK Configuration
  // Direct path to the actual APK in public directory (or paste your external CDN/Drive URL)
  apkFileName: "pixelo-v2.4.1.apk",
  apkDownloadUrl: "/downloads/pixelo-v2.4.1.apk",
  apkFallbackUrl: "/pixelo.apk",
  apkSha256: "8f4c2e19a842f61c9b3d07e155462b8a09618f0a6d59b207b8b2e1f5c6e80b2a",
  packageName: "com.pixelo.app",
  targetSdk: "Android 14 (API 34)",
  minSdk: "Android 8.0 (API 26)",
  architectures: "arm64-v8a, armeabi-v7a, x86_64",

  // 5. About & Content
  fullDescription: [
    "Pixelo is the modern, lightweight photo and pixel art powerhouse engineered specifically for Android devices. Whether you are crafting retro sprite art, retouching portrait photography, or designing bold social assets, Pixelo gives you studio-grade controls in a remarkably intuitive package.",
    "Built with hardware-accelerated rendering and a clean, zero-distraction red & white interface, Pixelo delivers lag-free responsiveness even on older Android smartphones. No cloud lock-in, no forced subscriptions, and 100% offline capability so your creativity never stops."
  ],

  features: [
    {
      id: "feat-1",
      title: "Real-Time Pixel Grid Engine",
      description: "Sub-pixel precision snapping with custom symmetry mirrors, dithering brushes, and isometric drawing guides.",
      iconName: "Palette"
    },
    {
      id: "feat-2",
      title: "Hardware-Accelerated Speed",
      description: "Optimized Vulkan & OpenGL graphics pipeline ensures 60 FPS fluidity with instant undo/redo buffers.",
      iconName: "Zap"
    },
    {
      id: "feat-3",
      title: "100% Offline & Private",
      description: "All photo processing happens strictly on your device. Your photos, artworks, and files never leave your phone.",
      iconName: "ShieldCheck"
    },
    {
      id: "feat-4",
      title: "Non-Destructive Layers",
      description: "Stack up to 32 layers with individual opacity, clipping masks, group folders, and professional blend modes.",
      iconName: "Layers"
    },
    {
      id: "feat-5",
      title: "Lossless 4K & SVG Export",
      description: "Export high-resolution rasters, scalable SVGs, transparent PNGs, or compact WebP formats in seconds.",
      iconName: "DownloadCloud"
    },
    {
      id: "feat-6",
      title: "Zero Ads & Bloatware",
      description: "A clean, trustworthy experience with zero banner ads, popups, or intrusive tracking libraries.",
      iconName: "Sparkles"
    }
  ],

  whatsNew: [
    "Brand new neural smart-sharpen tool for crisp pixel definition.",
    "Enhanced export speeds for 4K canvas renders (up to 2.4x faster).",
    "Added support for 8 new Indian regional color harmonies & palette packs.",
    "Improved compatibility for Android 14 edge-to-edge display modes.",
    "Resolved minor stylus pressure sensitivity quirks on tablet devices."
  ],

  installSteps: [
    {
      step: 1,
      title: "Download the APK",
      desc: "Tap the big red 'DOWNLOAD APK' button above to start the direct download on your phone or tablet."
    },
    {
      step: 2,
      title: "Allow Unknown Sources",
      desc: "If prompted by Android, enable 'Allow from this source' for your browser in Settings > Install Unknown Apps."
    },
    {
      step: 3,
      title: "Install & Launch",
      desc: "Open your notifications or Downloads folder, tap the downloaded APK, hit 'Install', and enjoy Pixelo!"
    }
  ],

  // 6. Legal & Support
  copyrightYear: 2026,
  privacyPolicyUrl: "#privacy",
  termsOfServiceUrl: "#terms",
  supportEmail: "support@pixelo.in"
};
