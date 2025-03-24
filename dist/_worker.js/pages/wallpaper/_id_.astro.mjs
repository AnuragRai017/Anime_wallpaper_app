globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                    */
import { c as createComponent, a as createAstro, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_DPP3diHq.mjs';
import { w as wallhavenAPI, a as $$Layout, $ as $$LoadingSpinner } from '../../chunks/wallhavenAPI_B_EpSdGg.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const wallpaper = id ? await wallhavenAPI.getWallpaper(id) : null;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  };
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + " KB";
    else return (bytes / 1048576).toFixed(2) + " MB";
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": wallpaper ? `Wallpaper ${wallpaper.id} | Anime Wallpaper Hub` : "Wallpaper Not Found" }, { "default": async ($$result2) => renderTemplate`${wallpaper ? renderTemplate`${maybeRenderHead()}<div> <div class="flex justify-between items-center mb-6"> <h1 class="text-3xl font-bold">Wallpaper #${wallpaper.id}</h1> <a${addAttribute(wallpaper.path, "href")} download target="_blank" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg flex items-center transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg>
Download
</a> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- Wallpaper Image --> <div class="lg:col-span-2"> <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg"> <img${addAttribute(wallpaper.path, "src")}${addAttribute(`Wallpaper ID: ${wallpaper.id}`, "alt")} class="w-full h-auto" loading="lazy"> </div> </div> <!-- Wallpaper Info --> <div> <div class="bg-gray-800 rounded-lg p-6 shadow-lg"> <h2 class="text-xl font-semibold mb-4 text-purple-400">Wallpaper Information</h2> <div class="space-y-4"> <div> <p class="text-sm text-gray-400">Category</p> <p class="text-white font-medium capitalize">${wallpaper.category}</p> </div> <div> <p class="text-sm text-gray-400">Resolution</p> <p class="text-white font-medium">${wallpaper.resolution} (${wallpaper.dimension_x}x${wallpaper.dimension_y})</p> </div> <div> <p class="text-sm text-gray-400">File Size</p> <p class="text-white font-medium">${formatFileSize(wallpaper.file_size)}</p> </div> <div> <p class="text-sm text-gray-400">File Type</p> <p class="text-white font-medium">${wallpaper.file_type}</p> </div> <div> <p class="text-sm text-gray-400">Created</p> <p class="text-white font-medium">${formatDate(wallpaper.created_at)}</p> </div> <div> <p class="text-sm text-gray-400">Views / Favorites</p> <p class="text-white font-medium"> <span class="inline-flex items-center mr-3"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg> ${wallpaper.views} </span> <span class="inline-flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> ${wallpaper.favorites} </span> </p> </div> ${wallpaper.source && renderTemplate`<div> <p class="text-sm text-gray-400">Source</p> <a${addAttribute(wallpaper.source, "href")} target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:text-purple-300 truncate block"> ${wallpaper.source} </a> </div>`} ${wallpaper.colors && wallpaper.colors.length > 0 && renderTemplate`<div> <p class="text-sm text-gray-400 mb-2">Colors</p> <div class="flex flex-wrap gap-2"> ${wallpaper.colors.map((color) => renderTemplate`<div class="w-6 h-6 rounded shadow-sm"${addAttribute(`background-color: ${color};`, "style")}${addAttribute(color, "title")}></div>`)} </div> </div>`} ${wallpaper.tags && wallpaper.tags.length > 0 && renderTemplate`<div> <p class="text-sm text-gray-400 mb-2">Tags</p> <div class="flex flex-wrap gap-2"> ${wallpaper.tags.map((tag) => renderTemplate`<a${addAttribute(`/search?q=${tag.name}`, "href")} class="bg-gray-700 hover:bg-gray-600 text-sm text-gray-200 px-2 py-1 rounded-md transition-colors"> ${tag.name} </a>`)} </div> </div>`} <div class="pt-4 border-t border-gray-700"> <a${addAttribute(wallpaper.url, "href")} target="_blank" rel="noopener noreferrer" class="text-purple-400 hover:text-purple-300 inline-flex items-center">
View on Wallhaven
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a> </div> </div> </div> </div> </div> </div>` : renderTemplate`<div class="text-center py-12"> ${renderComponent($$result2, "LoadingSpinner", $$LoadingSpinner, { "size": "lg" })} <p class="text-gray-400 mt-4">Loading wallpaper details...</p> </div>`}` })}`;
}, "A:/Project/Wall_app/src/pages/wallpaper/[id].astro", void 0);

const $$file = "A:/Project/Wall_app/src/pages/wallpaper/[id].astro";
const $$url = "/wallpaper/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
