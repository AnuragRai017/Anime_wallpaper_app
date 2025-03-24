globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderComponent, b as renderScript, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DPP3diHq.mjs';
import { w as wallhavenAPI, $ as $$LoadingSpinner, a as $$Layout } from '../chunks/wallhavenAPI_B_EpSdGg.mjs';
import { $ as $$WallpaperCard } from '../chunks/WallpaperCard_BZtadfWi.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const { searchParams } = Astro2.url;
  const query = searchParams.get("q") || "";
  const categories = searchParams.get("categories") || "010";
  const purity = searchParams.get("purity") || "100";
  const validSortings = ["date_added", "relevance", "random", "views", "favorites", "toplist"];
  const sortingParam = searchParams.get("sorting") || "date_added";
  const sorting = validSortings.includes(sortingParam) ? sortingParam : "date_added";
  const resolution = searchParams.get("resolutions") || "";
  const color = searchParams.get("colors") || "";
  const response = await wallhavenAPI.searchWallpapers({
    q: query,
    categories,
    purity,
    sorting,
    page: 1,
    resolutions: resolution,
    colors: color
  });
  const { data: wallpapers, meta } = response;
  const colorOptions = [
    { value: "660000", label: "Dark Red" },
    { value: "cc0000", label: "Red" },
    { value: "cc3333", label: "Light Red" },
    { value: "0000cc", label: "Blue" },
    { value: "000066", label: "Dark Blue" },
    { value: "66cccc", label: "Light Blue" },
    { value: "00cc00", label: "Green" },
    { value: "006600", label: "Dark Green" },
    { value: "66cc66", label: "Light Green" },
    { value: "cccc00", label: "Yellow" },
    { value: "cc9933", label: "Orange" },
    { value: "999999", label: "Gray" },
    { value: "ffffff", label: "White" },
    { value: "000000", label: "Black" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Search | KIBEWALL", "data-astro-cid-ipsxrsrh": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-8" data-astro-cid-ipsxrsrh> <div class="flex justify-between items-center mb-6" data-astro-cid-ipsxrsrh> <h1 class="text-3xl font-bold" data-astro-cid-ipsxrsrh>Search Wallpapers</h1> <button id="toggle-search" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-all duration-300 flex items-center gap-2" data-astro-cid-ipsxrsrh> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-ipsxrsrh></path> </svg> <span class="search-text" data-astro-cid-ipsxrsrh>Show Search</span> </button> </div> <form id="search-form" class="bg-gray-800 p-6 rounded-lg shadow-lg hidden transform transition-all duration-300 opacity-0 scale-95" data-astro-cid-ipsxrsrh> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-astro-cid-ipsxrsrh> <div data-astro-cid-ipsxrsrh> <label for="query" class="block text-sm font-medium text-gray-300 mb-1" data-astro-cid-ipsxrsrh>Search</label> <input type="text" id="query" name="q"${addAttribute(query, "value")} placeholder="Search by tag, keyword..." class="w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 px-4 py-2" data-astro-cid-ipsxrsrh> </div> <div data-astro-cid-ipsxrsrh> <label for="categories" class="block text-sm font-medium text-gray-300 mb-1" data-astro-cid-ipsxrsrh>Categories</label> <select id="categories" name="categories" class="w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 px-4 py-2" data-astro-cid-ipsxrsrh> <option value="100"${addAttribute(categories === "100", "selected")} data-astro-cid-ipsxrsrh>General</option> <option value="010"${addAttribute(categories === "010", "selected")} data-astro-cid-ipsxrsrh>Anime</option> <option value="001"${addAttribute(categories === "001", "selected")} data-astro-cid-ipsxrsrh>People</option> <option value="111"${addAttribute(categories === "111", "selected")} data-astro-cid-ipsxrsrh>All</option> </select> </div> <div data-astro-cid-ipsxrsrh> <label for="sorting" class="block text-sm font-medium text-gray-300 mb-1" data-astro-cid-ipsxrsrh>Sort By</label> <select id="sorting" name="sorting" class="w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 px-4 py-2" data-astro-cid-ipsxrsrh> <option value="date_added"${addAttribute(sorting === "date_added", "selected")} data-astro-cid-ipsxrsrh>Date Added</option> <option value="relevance"${addAttribute(sorting === "relevance", "selected")} data-astro-cid-ipsxrsrh>Relevance</option> <option value="random"${addAttribute(sorting === "random", "selected")} data-astro-cid-ipsxrsrh>Random</option> <option value="views"${addAttribute(sorting === "views", "selected")} data-astro-cid-ipsxrsrh>Views</option> <option value="favorites"${addAttribute(sorting === "favorites", "selected")} data-astro-cid-ipsxrsrh>Favorites</option> <option value="toplist"${addAttribute(sorting === "toplist", "selected")} data-astro-cid-ipsxrsrh>Toplist</option> </select> </div> <div data-astro-cid-ipsxrsrh> <label for="resolutions" class="block text-sm font-medium text-gray-300 mb-1" data-astro-cid-ipsxrsrh>Resolution</label> <select id="resolutions" name="resolutions" class="w-full rounded-md bg-gray-700 border-gray-600 text-gray-200 px-4 py-2" data-astro-cid-ipsxrsrh> <option value=""${addAttribute(resolution === "", "selected")} data-astro-cid-ipsxrsrh>Any</option> <option value="1920x1080"${addAttribute(resolution === "1920x1080", "selected")} data-astro-cid-ipsxrsrh>1920x1080</option> <option value="2560x1440"${addAttribute(resolution === "2560x1440", "selected")} data-astro-cid-ipsxrsrh>2560x1440</option> <option value="3840x2160"${addAttribute(resolution === "3840x2160", "selected")} data-astro-cid-ipsxrsrh>4K (3840x2160)</option> </select> </div> <div class="md:col-span-2 lg:col-span-4" data-astro-cid-ipsxrsrh> <label class="block text-sm font-medium text-gray-300 mb-2" data-astro-cid-ipsxrsrh>Color</label> <div class="grid grid-cols-7 gap-2" data-astro-cid-ipsxrsrh> ${colorOptions.map((colorOption) => renderTemplate`<label${addAttribute(`relative w-8 h-8 rounded cursor-pointer border-2 ${color === colorOption.value ? "border-purple-500" : "border-transparent"} hover:border-purple-500/50 transition-colors`, "class")}${addAttribute(`background-color: #${colorOption.value};`, "style")}${addAttribute(colorOption.label, "title")} data-astro-cid-ipsxrsrh> <input type="radio" name="colors"${addAttribute(colorOption.value, "value")}${addAttribute(color === colorOption.value, "checked")} class="sr-only" data-astro-cid-ipsxrsrh> ${color === colorOption.value && renderTemplate`<span class="absolute inset-0 flex items-center justify-center" data-astro-cid-ipsxrsrh> <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-ipsxrsrh> <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" data-astro-cid-ipsxrsrh></path> </svg> </span>`} </label>`)} </div> </div> </div> <div class="mt-4 flex justify-end" data-astro-cid-ipsxrsrh> <button type="submit" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30" data-astro-cid-ipsxrsrh>
Search
</button> </div> </form> </div> ${query && renderTemplate`<div class="mb-4 p-3 bg-gray-800 rounded-lg" data-astro-cid-ipsxrsrh> <p class="text-gray-300" data-astro-cid-ipsxrsrh>
Search results for: <span class="font-semibold text-white" data-astro-cid-ipsxrsrh>${query}</span> ${meta.total > 0 && renderTemplate`<span class="ml-2 text-gray-400" data-astro-cid-ipsxrsrh>(${meta.total} wallpapers found)</span>`} </p> </div>`}<div id="wallpaper-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-astro-cid-ipsxrsrh> ${wallpapers.length > 0 ? wallpapers.map((wallpaper) => renderTemplate`${renderComponent($$result2, "WallpaperCard", $$WallpaperCard, { "wallpaper": wallpaper, "data-astro-cid-ipsxrsrh": true })}`) : renderTemplate`<div class="col-span-full text-center py-12 bg-gray-800 rounded-lg" data-astro-cid-ipsxrsrh> <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ipsxrsrh> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-ipsxrsrh></path> </svg> <h3 class="text-xl font-semibold text-gray-300 mb-2" data-astro-cid-ipsxrsrh>No wallpapers found</h3> <p class="text-gray-400" data-astro-cid-ipsxrsrh>
Try adjusting your search criteria or browse our featured collections.
</p> </div>`} </div>  <div id="scroll-trigger" class="py-8 text-center" data-astro-cid-ipsxrsrh> ${renderComponent($$result2, "LoadingSpinner", $$LoadingSpinner, { "size": "lg", "data-astro-cid-ipsxrsrh": true })} </div> ` })} ${renderScript($$result, "A:/Project/Wall_app/src/pages/search.astro?astro&type=script&index=0&lang.ts")} `;
}, "A:/Project/Wall_app/src/pages/search.astro", void 0);

const $$file = "A:/Project/Wall_app/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
