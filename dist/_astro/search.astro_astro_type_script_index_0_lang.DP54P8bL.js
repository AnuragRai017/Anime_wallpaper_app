import{s as p,a as h,i as m,p as v,l as f}from"./wallpaperStore.ChAeZdfK.js";import"./index.CViUNx8d.js";function w(){const t=document.getElementById("search-form"),e=document.getElementById("toggle-search"),o=e.querySelector(".search-icon"),n=e.querySelector(".search-text"),i=t.querySelectorAll('input[name="colors"]');e.addEventListener("click",()=>{t.classList.contains("hidden")?(t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("opacity-0","scale-95"),t.classList.add("opacity-100","scale-100")},50),n.textContent="Hide Search",o.innerHTML=`
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        `):(t.classList.add("opacity-0","scale-95"),setTimeout(()=>{t.classList.add("hidden")},300),n.textContent="Show Search",o.innerHTML=`
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        `)}),i.forEach(s=>{s.addEventListener("change",()=>{t.dispatchEvent(new Event("submit"))})}),t.addEventListener("submit",async s=>{s.preventDefault();const r=new FormData(t),l=new URLSearchParams;for(const[g,d]of r.entries())d&&l.set(g,d.toString());const c=`${window.location.pathname}?${l.toString()}`;window.history.pushState({path:c},"",c),await p({q:r.get("q")?.toString()||"",categories:r.get("categories")?.toString(),sorting:r.get("sorting")?.toString(),resolutions:r.get("resolutions")?.toString(),colors:r.get("colors")?.toString(),page:1},!0),y(h.get())});const a=new URLSearchParams(window.location.search);Array.from(a.entries()).length>0&&e.click()}function u(t){return`
      <div class="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-500/20 transform-gpu">
        <a href="/wallpaper/${t.id}" class="block aspect-auto">
          <img 
            src="${t.thumbs.large}" 
            alt="Wallpaper ID: ${t.id}"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm group-hover:backdrop-blur-0">
            <div class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <div class="flex items-center justify-between">
                <div class="space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span class="px-2 py-1 text-xs rounded-md bg-purple-700 text-white hover:bg-purple-600 transition-colors">
                    ${t.category}
                  </span>
                  <span class="px-2 py-1 text-xs rounded-md bg-blue-700 text-white hover:bg-blue-600 transition-colors">
                    ${t.resolution}
                  </span>
                </div>
                <div class="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span class="flex items-center text-xs text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    ${t.views}
                  </span>
                  <span class="flex items-center text-xs text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    ${t.favorites}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transform-gpu ease-in-out"></div>
        </a>
      </div>
    `}function y(t){const e=document.getElementById("wallpaper-grid");if(e){if(t.length===0){e.innerHTML=`
        <div class="col-span-full text-center py-12 bg-gray-800 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-xl font-semibold text-gray-300 mb-2">No wallpapers found</h3>
          <p class="text-gray-400">
            Try adjusting your search criteria or browse our featured collections.
          </p>
        </div>
      `;return}e.innerHTML=t.map(o=>u(o)).join("")}}function x(){const t=document.getElementById("scroll-trigger"),e=document.getElementById("wallpaper-grid");if(!t||!e)return;const o=new IntersectionObserver(async n=>{if(n[0].isIntersecting&&!m.get()&&v.get().hasMore){const a=await f();a?.data&&a.data.forEach(s=>{const r=document.createElement("div");r.innerHTML=u(s),e.appendChild(r.firstElementChild)})}},{rootMargin:"100px"});return o.observe(t),()=>o.disconnect()}document.addEventListener("DOMContentLoaded",()=>{w(),x()});
