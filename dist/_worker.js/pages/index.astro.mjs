globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, b as renderScript, d as renderTemplate, e as addAttribute, r as renderComponent } from '../chunks/astro/server_DPP3diHq.mjs';
import { w as wallhavenAPI, a as $$Layout, $ as $$LoadingSpinner } from '../chunks/wallhavenAPI_B_EpSdGg.mjs';
/* empty css                                 */
import { $ as $$WallpaperCard } from '../chunks/WallpaperCard_BZtadfWi.mjs';
export { renderers } from '../renderers.mjs';

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Welcome component for the homepage with theme selection -->${maybeRenderHead()}<section class="text-center py-12 relative overflow-hidden" data-astro-cid-mmc7otgs> <!-- Background design elements --> <div class="absolute inset-0 pointer-events-none" data-astro-cid-mmc7otgs> <div class="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" data-astro-cid-mmc7otgs></div> <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl" data-astro-cid-mmc7otgs></div> </div> <div class="relative z-10" data-astro-cid-mmc7otgs> <div class="flex justify-center" data-astro-cid-mmc7otgs> <h1 class="text-5xl md:text-6xl font-bold mb-6 animate-shimmer bg-clip-text" data-astro-cid-mmc7otgs> <span class="bg-gradient-to-r from-rose-500 to-purple-600 text-transparent bg-clip-text" data-astro-cid-mmc7otgs>KIBEWALL</span> </h1> </div> <p class="text-xl max-w-3xl mx-auto mb-8 text-primary leading-relaxed" data-astro-cid-mmc7otgs>
Discover and download high-quality anime wallpapers for your desktop or mobile device.
<span class="block mt-2 text-accent font-medium" data-astro-cid-mmc7otgs>Your ultimate collection featuring your favorite anime characters and series.</span> </p> <div class="flex flex-col md:flex-row justify-center md:space-x-6 space-y-4 md:space-y-0" data-astro-cid-mmc7otgs> <a href="/search?categories=010&purity=100" class="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 backdrop-blur-sm relative overflow-hidden group" data-astro-cid-mmc7otgs> <span class="relative z-10" data-astro-cid-mmc7otgs>Browse Anime Wallpapers</span> <!-- Button shine effect --> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out transform-gpu" data-astro-cid-mmc7otgs></div> </a> <a href="/search" class="px-8 py-3 bg-gradient-to-r from-slate-700/80 to-slate-800/80 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-500/20 backdrop-blur-sm relative overflow-hidden group dark:from-slate-700 dark:to-slate-900" data-astro-cid-mmc7otgs> <span class="relative z-10" data-astro-cid-mmc7otgs>Advanced Search</span> <!-- Button shine effect --> <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out transform-gpu" data-astro-cid-mmc7otgs></div> </a> </div> </div> </section> <!-- Theme Selector Section with better UI --> <section class="text-center py-6 relative mb-6" data-astro-cid-mmc7otgs> <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-gray-700/50 to-transparent" data-astro-cid-mmc7otgs></div> <h2 class="text-2xl font-bold mb-4 text-primary" data-astro-cid-mmc7otgs>Choose Your Theme</h2> <div class="flex flex-wrap justify-center gap-2 py-2" data-astro-cid-mmc7otgs> <button class="theme-btn rounded-lg p-1 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500" data-theme="light" data-astro-cid-mmc7otgs> <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-rose-400 to-purple-500 flex items-center justify-center shadow-lg" data-astro-cid-mmc7otgs> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-mmc7otgs> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" data-astro-cid-mmc7otgs></path> </svg> </div> <span class="block mt-1 text-xs font-medium text-primary" data-astro-cid-mmc7otgs>Light</span> </button> <button class="theme-btn rounded-lg p-1 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-theme="dark" data-astro-cid-mmc7otgs> <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg" data-astro-cid-mmc7otgs> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-mmc7otgs> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-astro-cid-mmc7otgs></path> </svg> </div> <span class="block mt-1 text-xs font-medium text-primary" data-astro-cid-mmc7otgs>Dark</span> </button> <button class="theme-btn rounded-lg p-1 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" data-theme="yellow-flash" data-astro-cid-mmc7otgs> <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg" data-astro-cid-mmc7otgs> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-mmc7otgs> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-mmc7otgs></path> </svg> </div> <span class="block mt-1 text-xs font-medium text-primary" data-astro-cid-mmc7otgs>Yellow Flash</span> </button> <button class="theme-btn rounded-lg p-1 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-theme="chainsaw" data-astro-cid-mmc7otgs> <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg" data-astro-cid-mmc7otgs> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-mmc7otgs> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0 0L9.121 9.121" data-astro-cid-mmc7otgs></path> </svg> </div> <span class="block mt-1 text-xs font-medium text-primary" data-astro-cid-mmc7otgs>Chainsaw</span> </button> <button class="theme-btn rounded-lg p-1 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-theme="gojo" data-astro-cid-mmc7otgs> <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg" data-astro-cid-mmc7otgs> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-mmc7otgs> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-mmc7otgs></path> </svg> </div> <span class="block mt-1 text-xs font-medium text-primary" data-astro-cid-mmc7otgs>Gojo</span> </button> </div> <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-300/50 dark:via-gray-700/50 to-transparent" data-astro-cid-mmc7otgs></div> </section> <!-- About This App Section with enhanced design --> <div class="relative mt-12 p-6 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01] hover:shadow-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50" data-astro-cid-mmc7otgs> <!-- Background gradients for enhanced design --> <div class="absolute inset-0 pointer-events-none" data-astro-cid-mmc7otgs> <div class="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-rose-100/20 dark:to-rose-900/10" data-astro-cid-mmc7otgs></div> <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-300/30 dark:via-rose-500/30 to-transparent" data-astro-cid-mmc7otgs></div> <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-300/30 dark:via-rose-500/30 to-transparent" data-astro-cid-mmc7otgs></div> </div> <div class="relative z-10" data-astro-cid-mmc7otgs> <h2 class="text-xl font-semibold mb-4 text-primary bg-clip-text" data-astro-cid-mmc7otgs> <span class="text-accent" data-astro-cid-mmc7otgs>About This App</span> </h2> <p class="mb-3 text-primary leading-relaxed" data-astro-cid-mmc7otgs>
This application uses the <a href="https://wallhaven.cc/help/api" class="text-accent hover:underline font-medium" data-astro-cid-mmc7otgs>Wallhaven API</a> to provide you with access to thousands of anime wallpapers.
</p> <p class="mb-3 text-primary" data-astro-cid-mmc7otgs>
Features:
</p> <ul class="list-disc list-inside ml-4 mb-3 space-y-1 text-primary" data-astro-cid-mmc7otgs> <li data-astro-cid-mmc7otgs>Browse the latest anime wallpapers with infinite scroll</li> <li data-astro-cid-mmc7otgs>Search by tags, resolution, or color with advanced filtering</li> <li data-astro-cid-mmc7otgs>View detailed wallpaper information and metadata</li> <li data-astro-cid-mmc7otgs>Download wallpapers in original quality</li> <li data-astro-cid-mmc7otgs>Customize your experience with anime-inspired themes</li> </ul> </div> </div> <!-- Theme switcher script with improved functionality --> ${renderScript($$result, "A:/Project/Wall_app/src/components/Welcome.astro?astro&type=script&index=0&lang.ts")} `;
}, "A:/Project/Wall_app/src/components/Welcome.astro", void 0);

const themeConfigs = {
  "light": {
    name: "light",
    label: "Light Mode",
    background: "bg-gray-100",
    textColor: "text-gray-900",
    accentColor: "from-red-500 to-red-800",
    secondaryColor: "bg-white",
    hoverAnimation: "hover:scale-105 hover:shadow-md",
    cardAnimation: "transform transition-all duration-300 ease-in-out",
    navbarStyle: "bg-white border-gray-200 shadow-lg",
    buttonStyle: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-200",
    borderColor: "border-gray-200",
    gradientOverlay: "bg-gradient-to-br from-white/50 to-gray-100/50",
    specialEffect: "",
    fontFamily: "font-sans",
    characterQuote: ""
  },
  "dark": {
    name: "dark",
    label: "Dark Mode",
    background: "bg-gray-900",
    textColor: "text-white",
    accentColor: "from-red-500 to-red-800",
    secondaryColor: "bg-black",
    hoverAnimation: "hover:scale-105 hover:shadow-md hover:shadow-red-900/20",
    cardAnimation: "transform transition-all duration-300 ease-in-out",
    navbarStyle: "bg-black border-red-800/30 shadow-red-900/20",
    buttonStyle: "bg-gray-800 text-gray-400 hover:bg-gray-700 focus:ring-gray-700",
    borderColor: "border-gray-700",
    gradientOverlay: "bg-gradient-to-br from-gray-800/50 to-black/50",
    specialEffect: "",
    fontFamily: "font-sans",
    characterQuote: ""
  },
  "red-lunar": {
    name: "red-lunar",
    label: "Red Lunar",
    background: "bg-red-950",
    textColor: "text-red-50",
    accentColor: "from-red-600 to-red-900",
    secondaryColor: "bg-red-900",
    hoverAnimation: "hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 hover:rotate-1",
    cardAnimation: "transform transition-all duration-500 ease-in-out animate-pulse-slow",
    navbarStyle: "bg-red-900 border-red-700 shadow-red-500/30",
    buttonStyle: "bg-red-800 text-red-100 hover:bg-red-700 focus:ring-red-600",
    borderColor: "border-red-700",
    gradientOverlay: "bg-gradient-to-br from-red-900/70 to-red-950/70",
    specialEffect: 'after:content-[""] after:absolute after:inset-0 after:bg-red-500/10 after:animate-pulse-slow',
    fontFamily: "font-serif",
    characterQuote: ""
  },
  "yellow-flash": {
    name: "yellow-flash",
    label: "Yellow Flash (Minato)",
    background: "bg-blue-900",
    textColor: "text-yellow-100",
    accentColor: "from-yellow-400 to-amber-500",
    secondaryColor: "bg-blue-800",
    hoverAnimation: "hover:scale-110 hover:shadow-xl hover:shadow-yellow-300/50 hover:-rotate-1 hover:translate-y-[-5px] hover:blur-[0.5px]",
    cardAnimation: "transform transition-all duration-75 ease-out animate-teleport-flash",
    navbarStyle: "bg-blue-800 border-yellow-500 shadow-yellow-300/30",
    buttonStyle: "bg-yellow-500 text-blue-900 hover:bg-yellow-400 focus:ring-yellow-300",
    borderColor: "border-yellow-500",
    gradientOverlay: 'bg-gradient-to-br from-blue-800/80 to-blue-900/80 after:content-[""] after:absolute after:inset-0 after:bg-[url("/kunai-mark.svg")] after:bg-repeat after:opacity-5',
    specialEffect: 'before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-yellow-400/30 before:to-transparent before:blur-md before:animate-teleport',
    fontFamily: "font-sans",
    characterQuote: `"I'll never let my teammates die."`
  },
  "chainsaw": {
    name: "chainsaw",
    label: "Chainsaw Man",
    background: "bg-orange-950",
    textColor: "text-orange-100",
    accentColor: "from-red-700 to-orange-600",
    secondaryColor: "bg-red-900",
    hoverAnimation: "hover:scale-105 hover:shadow-lg hover:shadow-red-600/40 hover:skew-x-2 hover:-skew-y-1",
    cardAnimation: "transform transition-all duration-300 ease-in-out animate-saw",
    navbarStyle: "bg-red-900 border-orange-600 shadow-red-600/30",
    buttonStyle: "bg-red-700 text-orange-100 hover:bg-red-600 focus:ring-red-500",
    borderColor: "border-red-700",
    gradientOverlay: 'bg-gradient-to-br from-red-900/70 to-orange-950/70 after:content-[""] after:absolute after:inset-0 after:bg-[url("/chainsaw-pattern.svg")] after:bg-repeat after:opacity-5',
    specialEffect: 'before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-red-500/20 before:to-transparent before:blur-sm before:animate-blood-drip',
    fontFamily: "font-mono",
    characterQuote: '"The devil that devils fear the most."'
  },
  "gojo": {
    name: "gojo",
    label: "Gojo Satoru",
    background: "bg-indigo-950",
    textColor: "text-blue-100",
    accentColor: "from-blue-400 to-indigo-600",
    secondaryColor: "bg-indigo-900",
    hoverAnimation: "hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 hover:translate-y-[-3px] hover:translate-x-[2px] hover:blur-[0.5px]",
    cardAnimation: "transform transition-all duration-400 ease-out animate-infinity",
    navbarStyle: "bg-indigo-900 border-blue-600 shadow-blue-500/20",
    buttonStyle: "bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-400",
    borderColor: "border-blue-600",
    gradientOverlay: 'bg-gradient-to-br from-indigo-800/70 to-indigo-950/70 after:content-[""] after:absolute after:inset-0 after:bg-[url("/infinity-symbol.svg")] after:bg-repeat after:opacity-5',
    specialEffect: 'before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-blue-400/30 before:to-transparent before:blur-xl before:animate-domain-expansion',
    fontFamily: "font-sans",
    characterQuote: '"Throughout Heaven and Earth, I alone am the honored one."'
  }
};

const $$ThemeSelector = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="theme-selector relative" data-astro-cid-lgn464si> <button id="theme-toggle" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-colors duration-300" aria-label="Toggle theme menu" aria-expanded="false" data-astro-cid-lgn464si> <!-- Theme icons --> <div class="flex items-center space-x-2" data-astro-cid-lgn464si> <span class="theme-icon" data-astro-cid-lgn464si> <!-- Light Icon --> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 theme-icon-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-lgn464si> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" data-astro-cid-lgn464si></path> </svg> <!-- Dark Icon --> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 theme-icon-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-lgn464si> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-astro-cid-lgn464si></path> </svg> <!-- Red Lunar Icon --> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 theme-icon-red-lunar" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-lgn464si> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" data-astro-cid-lgn464si></path> </svg> <!-- Yellow Flash Icon --> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 theme-icon-yellow-flash" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-lgn464si> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v2m0 18v-2m9-9h-2M5 12H3m14.121 7.121l-1.414-1.414M8.293 8.293L6.879 6.879M15.707 6.879l1.414-1.414M8.293 15.707l-1.414 1.414" data-astro-cid-lgn464si></path> </svg> <!-- Chainsaw Icon --> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 theme-icon-chainsaw" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-lgn464si> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0 0L9.121 9.121" data-astro-cid-lgn464si></path> </svg> <!-- Gojo Icon --> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 theme-icon-gojo" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-lgn464si> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-lgn464si></path> </svg> </span> <span class="hidden md:inline text-sm font-medium current-theme-name" data-astro-cid-lgn464si>Theme</span> </div> </button> <!-- Dropdown Theme Menu --> <div id="theme-dropdown" class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 theme-dropdown hidden transform scale-95 opacity-0 transition-all duration-100 origin-top-right" data-astro-cid-lgn464si> <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="theme-toggle" data-astro-cid-lgn464si> ${Object.values(themeConfigs).map((theme) => renderTemplate`<button class="theme-option w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 flex items-center space-x-2"${addAttribute(theme.name, "data-theme")} role="menuitem" data-astro-cid-lgn464si> <span${addAttribute(`h-3 w-3 rounded-full inline-block theme-color-${theme.name}`, "class")} data-astro-cid-lgn464si></span> <span data-astro-cid-lgn464si>${theme.label}</span> </button>`)} </div> </div> </div> ${renderScript($$result, "A:/Project/Wall_app/src/components/ThemeSelector.astro?astro&type=script&index=0&lang.ts")} `;
}, "A:/Project/Wall_app/src/components/ThemeSelector.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const response = await wallhavenAPI.searchWallpapers({
    categories: "010",
    // Anime category
    purity: "100",
    // SFW content
    sorting: "date_added",
    page: 1
  });
  const wallpapers = response.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "KIBEWALL | Home", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Welcome", $$Welcome, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<section class="mt-12 relative" data-astro-cid-j7pv25f6> <!-- Section heading with enhanced design --> <div class="flex items-center mb-8 relative" data-astro-cid-j7pv25f6> <div class="absolute left-0 w-2 h-8 bg-gradient-to-b from-rose-500 to-purple-600 rounded-full" data-astro-cid-j7pv25f6></div> <h2 class="text-2xl font-bold ml-4 text-primary" data-astro-cid-j7pv25f6>Latest Anime Wallpapers</h2> <div class="ml-4 px-2.5 py-1 text-xs font-medium bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full" data-astro-cid-j7pv25f6>
New
</div> <div class="flex-1 h-px bg-gradient-to-r from-rose-500/50 via-transparent to-transparent ml-4" data-astro-cid-j7pv25f6></div> </div> <div id="wallpaper-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-astro-cid-j7pv25f6> ${wallpapers.length > 0 ? wallpapers.map((wallpaper) => renderTemplate`${renderComponent($$result2, "WallpaperCard", $$WallpaperCard, { "wallpaper": wallpaper, "data-astro-cid-j7pv25f6": true })}`) : renderTemplate`<div class="col-span-full text-center py-12 bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-200/30 dark:border-gray-700/30" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "LoadingSpinner", $$LoadingSpinner, { "size": "lg", "data-astro-cid-j7pv25f6": true })} <p class="text-primary mt-4" data-astro-cid-j7pv25f6>Loading wallpapers...</p> </div>`} </div> <!-- Enhanced loading indicator for infinite scroll --> <div id="scroll-trigger" class="py-8 text-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "LoadingSpinner", $$LoadingSpinner, { "size": "lg", "data-astro-cid-j7pv25f6": true })} <p class="text-sm text-primary mt-2" data-astro-cid-j7pv25f6>Loading more wallpapers...</p> </div> </section> `, "theme-selector": async ($$result2) => renderTemplate`${renderComponent($$result2, "ThemeSelector", $$ThemeSelector, { "slot": "theme-selector", "data-astro-cid-j7pv25f6": true })}` })} ${renderScript($$result, "A:/Project/Wall_app/src/pages/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "A:/Project/Wall_app/src/pages/index.astro", void 0);

const $$file = "A:/Project/Wall_app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
