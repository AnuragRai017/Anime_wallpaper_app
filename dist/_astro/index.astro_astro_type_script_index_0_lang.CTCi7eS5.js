import{s as c,i as g,p as u,l as m}from"./wallpaperStore.ChAeZdfK.js";import"./index.CViUNx8d.js";c({categories:"010",purity:"100",sorting:"date_added",page:1},!0);function h(e){const a=document.createElement("div");return a.className="wallpaper-card group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 transform-gpu",a.innerHTML=`
      <a href="/wallpaper/${e.id}" class="block aspect-auto">
        <!-- Main image with enhanced loading and hover effects -->
        <img 
          src="${e.thumbs.large}" 
          alt="Wallpaper ID: ${e.id}"
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <!-- Glass overlay with improved aesthetics -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm group-hover:backdrop-blur-0">
          <!-- Content container with smoother animation -->
          <div class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <div class="flex items-center justify-between">
              <!-- Category and resolution badges with improved design -->
              <div class="space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span class="px-2 py-1 text-xs rounded-md bg-rose-500 text-white hover:bg-rose-600 transition-colors theme-badge inline-flex items-center gap-1 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  ${e.category}
                </span>
                <span class="px-2 py-1 text-xs rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors theme-badge inline-flex items-center gap-1 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                  ${e.resolution}
                </span>
              </div>
              
              <!-- Views and favorites with improved design -->
              <div class="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                <span class="flex items-center text-xs text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  ${new Intl.NumberFormat().format(e.views)}
                </span>
                <span class="flex items-center text-xs text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1 text-rose-400" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  ${new Intl.NumberFormat().format(e.favorites)}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Enhanced shine effect on hover -->
        <div class="card-shine absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transform-gpu ease-in-out"></div>
        
        <!-- ID badge for quick reference -->
        <div class="absolute top-2 right-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md text-xs font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center">
          <span class="text-xs mr-1 text-rose-400">#</span>${e.id}
        </div>
      </a>
      
      <!-- Loading overlay that fades out -->
      <div class="loading-overlay absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-opacity duration-500">
        <div class="w-8 h-8 rounded-full border-2 border-rose-500 border-t-transparent animate-spin"></div>
      </div>
    `,a}function i(e){const a=document.documentElement,s=Array.from(a.classList).find(t=>t.startsWith("theme-"))?.replace("theme-","")||"light";switch(e.classList.remove("animate-pulse-slow","animate-flash","animate-saw","animate-pulse-blue"),s){case"red-lunar":e.classList.add("animate-pulse-slow");break;case"yellow-flash":e.classList.add("animate-flash");break;case"chainsaw":e.classList.add("animate-saw");break;case"gojo":e.classList.add("animate-pulse-blue");break}e.querySelectorAll(".theme-badge").forEach((t,r)=>{if(t.classList.remove("bg-rose-500","hover:bg-rose-600","bg-blue-500","hover:bg-blue-600","bg-red-700","hover:bg-red-600","bg-amber-700","hover:bg-amber-600","bg-indigo-700","hover:bg-indigo-600"),r===0)switch(s){case"light":t.classList.add("bg-rose-500","hover:bg-rose-600");break;case"dark":t.classList.add("bg-rose-600","hover:bg-rose-700");break;case"red-lunar":t.classList.add("bg-red-700","hover:bg-red-600");break;case"yellow-flash":t.classList.add("bg-amber-700","hover:bg-amber-600");break;case"chainsaw":t.classList.add("bg-red-900","hover:bg-red-800");break;case"gojo":t.classList.add("bg-indigo-700","hover:bg-indigo-600");break}else switch(s){case"light":t.classList.add("bg-blue-500","hover:bg-blue-600");break;case"dark":t.classList.add("bg-blue-600","hover:bg-blue-700");break;case"red-lunar":t.classList.add("bg-red-800","hover:bg-red-700");break;case"yellow-flash":t.classList.add("bg-amber-800","hover:bg-amber-700");break;case"chainsaw":t.classList.add("bg-gray-800","hover:bg-gray-700");break;case"gojo":t.classList.add("bg-blue-800","hover:bg-blue-700");break}})}function l(e){const a=e.querySelector("img"),s=e.querySelector(".loading-overlay");!a||!s||(a.complete?(s.style.opacity="0",setTimeout(()=>{s.style.display="none"},300)):a.addEventListener("load",()=>{s.style.opacity="0",setTimeout(()=>{s.style.display="none"},300)}))}function b(){const e=document.getElementById("scroll-trigger"),a=document.getElementById("wallpaper-grid");if(!e||!a)return;const s=new IntersectionObserver(async n=>{if(n[0].isIntersecting&&!g.get()&&u.get().hasMore){e.classList.add("loading");const r=await m();r?.data&&r.data.forEach(d=>{const o=h(d);a.appendChild(o),i(o),l(o)}),e.classList.remove("loading")}},{rootMargin:"200px"});return s.observe(e),()=>s.disconnect()}const p=new MutationObserver(()=>{document.querySelectorAll(".wallpaper-card").forEach(e=>{i(e)})});document.addEventListener("DOMContentLoaded",()=>{b(),document.querySelectorAll(".wallpaper-card").forEach(e=>{i(e),l(e)}),p.observe(document.documentElement,{attributes:!0})});
