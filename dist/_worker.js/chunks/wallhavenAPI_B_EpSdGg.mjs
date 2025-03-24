globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, d as renderTemplate, b as renderScript, f as renderSlot, r as renderComponent, e as addAttribute, u as unescapeHTML, g as renderHead, m as maybeRenderHead } from './astro/server_DPP3diHq.mjs';
/* empty css                         */
import { a as axios } from './index_B4FnV-YZ.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", `</title><!-- Add script to set theme before page renders to prevent flash --><script>
      // Check saved theme or system preference
      const theme = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
          return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
        return 'light';
      })();
      
      // Add or remove dark class based on theme
      if (theme === 'dark' || theme === 'red-lunar' || theme === 'chainsaw' || theme === 'gojo') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Add theme-specific class
      document.documentElement.classList.add(\`theme-\${theme}\`);
    <\/script><!-- Import Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">`, `</head> <body class="themed-body min-h-screen transition-colors duration-300 font-poppins"> <div class="theme-background-pattern absolute inset-0 pointer-events-none"></div> <header id="navbar" class="themed-navbar fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300"> <!-- Enhanced Matrix pattern background --> <div class="absolute inset-0 overflow-hidden opacity-15"> <div class="matrix-dots"></div> </div> <!-- Improved Navbar content --> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center py-3"> <div class="flex items-center"> <a href="/" class="relative group flex items-center space-x-3"> <!-- App Icon --> <div class="w-10 h-10 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-110"> <img src="/src/assets/icon.jpg" alt="KIBEWALL" class="w-full h-full object-cover"> </div> <!-- Logo Text --> <div class="logo-container relative"> <svg xmlns="http://www.w3.org/2000/svg" width="150" height="40" viewBox="0 0 300 80" class="logo-svg"> <!-- KIBEWALL Text --> <text x="150" y="42" font-family="'Poppins', sans-serif" font-size="36" font-weight="800" text-anchor="middle" fill="url(#logo-gradient)" fill-opacity="1" letter-spacing="2" style="fill: #ec4899;">
KIBEWALL
</text> <!-- Animated dot row beneath logo --> <g class="dot-row"> <circle cx="75" cy="60" r="3" class="dot-pulse" style="animation-delay: 0s"></circle> <circle cx="95" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.1s"></circle> <circle cx="115" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.2s"></circle> <circle cx="135" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.3s"></circle> <circle cx="155" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.4s"></circle> <circle cx="175" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.5s"></circle> <circle cx="195" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.6s"></circle> <circle cx="215" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.7s"></circle> <circle cx="235" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.8s"></circle> </g> <!-- Gradient for text --> <defs> <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" class="logo-gradient-start" stop-color="#ef4444"></stop> <stop offset="100%" class="logo-gradient-end" stop-color="#ec4899"></stop> </linearGradient> </defs> </svg> <!-- Light Animation Effect --> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 blur-sm -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out transform-gpu"></div> </div> </a> </div> <nav class="flex items-center space-x-6"> <div class="hidden md:flex space-x-1"> `, ' </div> <!-- Mobile menu button --> <button class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> <!-- Theme Toggle Button - Replaced with ThemeSelector component --> <div class="theme-toggle-container"> ', ' </div> </nav> </div> </div> </header> <!-- Added padding to compensate for fixed navbar --> <div class="pt-20"></div> <main class="themed-main relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> ', ' </main> <footer class="themed-footer border-t"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <p class="text-center text-gray-600 dark:text-gray-400 text-sm">\n&copy; ', ' KIBEWALL. Powered by <a href="https://wallhaven.cc" target="_blank" rel="noopener noreferrer" class="text-rose-600 dark:text-rose-400 hover:text-rose-500 dark:hover:text-rose-300 transition-colors">Wallhaven API</a> </p> </div> </footer> ', " </body> </html> "], ['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", `</title><!-- Add script to set theme before page renders to prevent flash --><script>
      // Check saved theme or system preference
      const theme = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
          return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
        return 'light';
      })();
      
      // Add or remove dark class based on theme
      if (theme === 'dark' || theme === 'red-lunar' || theme === 'chainsaw' || theme === 'gojo') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Add theme-specific class
      document.documentElement.classList.add(\\\`theme-\\\${theme}\\\`);
    <\/script><!-- Import Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">`, `</head> <body class="themed-body min-h-screen transition-colors duration-300 font-poppins"> <div class="theme-background-pattern absolute inset-0 pointer-events-none"></div> <header id="navbar" class="themed-navbar fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300"> <!-- Enhanced Matrix pattern background --> <div class="absolute inset-0 overflow-hidden opacity-15"> <div class="matrix-dots"></div> </div> <!-- Improved Navbar content --> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center py-3"> <div class="flex items-center"> <a href="/" class="relative group flex items-center space-x-3"> <!-- App Icon --> <div class="w-10 h-10 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-110"> <img src="/src/assets/icon.jpg" alt="KIBEWALL" class="w-full h-full object-cover"> </div> <!-- Logo Text --> <div class="logo-container relative"> <svg xmlns="http://www.w3.org/2000/svg" width="150" height="40" viewBox="0 0 300 80" class="logo-svg"> <!-- KIBEWALL Text --> <text x="150" y="42" font-family="'Poppins', sans-serif" font-size="36" font-weight="800" text-anchor="middle" fill="url(#logo-gradient)" fill-opacity="1" letter-spacing="2" style="fill: #ec4899;">
KIBEWALL
</text> <!-- Animated dot row beneath logo --> <g class="dot-row"> <circle cx="75" cy="60" r="3" class="dot-pulse" style="animation-delay: 0s"></circle> <circle cx="95" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.1s"></circle> <circle cx="115" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.2s"></circle> <circle cx="135" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.3s"></circle> <circle cx="155" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.4s"></circle> <circle cx="175" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.5s"></circle> <circle cx="195" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.6s"></circle> <circle cx="215" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.7s"></circle> <circle cx="235" cy="60" r="3" class="dot-pulse" style="animation-delay: 0.8s"></circle> </g> <!-- Gradient for text --> <defs> <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" class="logo-gradient-start" stop-color="#ef4444"></stop> <stop offset="100%" class="logo-gradient-end" stop-color="#ec4899"></stop> </linearGradient> </defs> </svg> <!-- Light Animation Effect --> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 blur-sm -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out transform-gpu"></div> </div> </a> </div> <nav class="flex items-center space-x-6"> <div class="hidden md:flex space-x-1"> `, ' </div> <!-- Mobile menu button --> <button class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> <!-- Theme Toggle Button - Replaced with ThemeSelector component --> <div class="theme-toggle-container"> ', ' </div> </nav> </div> </div> </header> <!-- Added padding to compensate for fixed navbar --> <div class="pt-20"></div> <main class="themed-main relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> ', ' </main> <footer class="themed-footer border-t"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <p class="text-center text-gray-600 dark:text-gray-400 text-sm">\n&copy; ', ' KIBEWALL. Powered by <a href="https://wallhaven.cc" target="_blank" rel="noopener noreferrer" class="text-rose-600 dark:text-rose-400 hover:text-rose-500 dark:hover:text-rose-300 transition-colors">Wallhaven API</a> </p> </div> </footer> ', " </body> </html> "])), addAttribute(Astro2.generator, "content"), Astro2.props.title, renderHead(), [
    { href: "/", label: "Home", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>` },
    { href: "/search", label: "Search", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>` }
  ].map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="nav-item relative px-4 py-2 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 transition-all duration-300 hover:text-rose-600 dark:hover:text-rose-400"> <span class="flex items-center space-x-2"> <span class="nav-icon">${unescapeHTML(link.icon)}</span> <span class="nav-label font-medium">${link.label}</span> </span> <span class="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-rose-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span> <!-- Glowing dot indicator --> <span class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 nav-dot"></span> </a>`), Astro2.slots.has("theme-selector") ? renderTemplate`${renderSlot($$result, $$slots["theme-selector"])}` : renderTemplate`<div class="theme-selector-placeholder"> ${renderComponent($$result, "import-statement", "import-statement", { "to": "../../components/ThemeSelector.astro" })} </div>`, renderSlot($$result, $$slots["default"]), (/* @__PURE__ */ new Date()).getFullYear(), renderScript($$result, "A:/Project/Wall_app/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "A:/Project/Wall_app/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$LoadingSpinner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LoadingSpinner;
  const { size = "md" } = Astro2.props;
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16"
  };
  return renderTemplate`${maybeRenderHead()}<div class="relative flex justify-center items-center py-8" data-astro-cid-nk2zudzz> <!-- Rotating spinner border --> <div${addAttribute(`animate-spin rounded-full border-t-2 border-b-2 border-purple-500 ${sizeClasses[size]}`, "class")} data-astro-cid-nk2zudzz></div> <!-- Centered anime character that changes based on theme --> <div class="absolute inset-0 flex justify-center items-center" data-astro-cid-nk2zudzz> <span class="spinner-char text-2xl" data-astro-cid-nk2zudzz></span> </div> <span class="sr-only" data-astro-cid-nk2zudzz>Loading...</span> </div> `;
}, "A:/Project/Wall_app/src/components/LoadingSpinner.astro", void 0);

const API_BASE = "/api/wallhaven";
const wallhavenAPI = {
  // Get a specific wallpaper by ID
  async getWallpaper(id) {
    try {
      const response = await axios.get(`${API_BASE}/w/${id}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching wallpaper:", error);
      throw error;
    }
  },
  // Search for wallpapers
  async searchWallpapers(params = {}) {
    try {
      const response = await axios.get(`${API_BASE}/search`, {
        params
      });
      return response.data;
    } catch (error) {
      console.error("Error searching wallpapers:", error);
      throw error;
    }
  },
  // Get tag information
  async getTagInfo(tagId) {
    try {
      const response = await axios.get(`${API_BASE}/tag/${tagId}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching tag info:", error);
      throw error;
    }
  }
};

export { $$LoadingSpinner as $, $$Layout as a, wallhavenAPI as w };
