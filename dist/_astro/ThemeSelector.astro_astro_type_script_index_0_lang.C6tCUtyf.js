import{s as r,c as l}from"./themeStore.RGKjjuzo.js";import"./index.CViUNx8d.js";let s=!1;const c=document.getElementById("theme-toggle"),n=document.getElementById("theme-dropdown"),m=document.querySelectorAll(".theme-option"),i=document.querySelector(".current-theme-name");function a(e){document.querySelectorAll(".theme-icon > svg").forEach(o=>{o.classList.add("hidden")});const t=document.querySelector(`.theme-icon-${e}`);t&&t.classList.remove("hidden"),i&&(i.textContent=e.split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" "))}function d(){s=!s,s?(n?.classList.remove("hidden","scale-95","opacity-0"),n?.classList.add("scale-100","opacity-100"),c?.setAttribute("aria-expanded","true")):(n?.classList.add("scale-95","opacity-0"),setTimeout(()=>{n?.classList.add("hidden")},100),c?.setAttribute("aria-expanded","false"))}function u(e){s&&c&&!c.contains(e.target)&&n&&!n.contains(e.target)&&d()}c?.addEventListener("click",e=>{e.preventDefault(),d()});m.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-theme");r(t),a(t),d()})});document.addEventListener("click",u);document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("theme")||"light";a(e),l.subscribe(t=>{a(t)})});
