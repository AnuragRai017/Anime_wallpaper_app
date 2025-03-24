import{a as n}from"./index.CViUNx8d.js";const a={light:{name:"light",label:"Light Mode",background:"bg-gray-100",textColor:"text-gray-900",accentColor:"from-red-500 to-red-800",secondaryColor:"bg-white",hoverAnimation:"hover:scale-105 hover:shadow-md",cardAnimation:"transform transition-all duration-300 ease-in-out",navbarStyle:"bg-white border-gray-200 shadow-lg",buttonStyle:"bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-200",borderColor:"border-gray-200",gradientOverlay:"bg-gradient-to-br from-white/50 to-gray-100/50",specialEffect:"",fontFamily:"font-sans",characterQuote:""},dark:{name:"dark",label:"Dark Mode",background:"bg-gray-900",textColor:"text-white",accentColor:"from-red-500 to-red-800",secondaryColor:"bg-black",hoverAnimation:"hover:scale-105 hover:shadow-md hover:shadow-red-900/20",cardAnimation:"transform transition-all duration-300 ease-in-out",navbarStyle:"bg-black border-red-800/30 shadow-red-900/20",buttonStyle:"bg-gray-800 text-gray-400 hover:bg-gray-700 focus:ring-gray-700",borderColor:"border-gray-700",gradientOverlay:"bg-gradient-to-br from-gray-800/50 to-black/50",specialEffect:"",fontFamily:"font-sans",characterQuote:""},"red-lunar":{name:"red-lunar",label:"Red Lunar",background:"bg-red-950",textColor:"text-red-50",accentColor:"from-red-600 to-red-900",secondaryColor:"bg-red-900",hoverAnimation:"hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 hover:rotate-1",cardAnimation:"transform transition-all duration-500 ease-in-out animate-pulse-slow",navbarStyle:"bg-red-900 border-red-700 shadow-red-500/30",buttonStyle:"bg-red-800 text-red-100 hover:bg-red-700 focus:ring-red-600",borderColor:"border-red-700",gradientOverlay:"bg-gradient-to-br from-red-900/70 to-red-950/70",specialEffect:'after:content-[""] after:absolute after:inset-0 after:bg-red-500/10 after:animate-pulse-slow',fontFamily:"font-serif",characterQuote:""},"yellow-flash":{name:"yellow-flash",label:"Yellow Flash (Minato)",background:"bg-blue-900",textColor:"text-yellow-100",accentColor:"from-yellow-400 to-amber-500",secondaryColor:"bg-blue-800",hoverAnimation:"hover:scale-110 hover:shadow-xl hover:shadow-yellow-300/50 hover:-rotate-1 hover:translate-y-[-5px] hover:blur-[0.5px]",cardAnimation:"transform transition-all duration-75 ease-out animate-teleport-flash",navbarStyle:"bg-blue-800 border-yellow-500 shadow-yellow-300/30",buttonStyle:"bg-yellow-500 text-blue-900 hover:bg-yellow-400 focus:ring-yellow-300",borderColor:"border-yellow-500",gradientOverlay:'bg-gradient-to-br from-blue-800/80 to-blue-900/80 after:content-[""] after:absolute after:inset-0 after:bg-[url("/kunai-mark.svg")] after:bg-repeat after:opacity-5',specialEffect:'before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-yellow-400/30 before:to-transparent before:blur-md before:animate-teleport',fontFamily:"font-sans",characterQuote:`"I'll never let my teammates die."`},chainsaw:{name:"chainsaw",label:"Chainsaw Man",background:"bg-orange-950",textColor:"text-orange-100",accentColor:"from-red-700 to-orange-600",secondaryColor:"bg-red-900",hoverAnimation:"hover:scale-105 hover:shadow-lg hover:shadow-red-600/40 hover:skew-x-2 hover:-skew-y-1",cardAnimation:"transform transition-all duration-300 ease-in-out animate-saw",navbarStyle:"bg-red-900 border-orange-600 shadow-red-600/30",buttonStyle:"bg-red-700 text-orange-100 hover:bg-red-600 focus:ring-red-500",borderColor:"border-red-700",gradientOverlay:'bg-gradient-to-br from-red-900/70 to-orange-950/70 after:content-[""] after:absolute after:inset-0 after:bg-[url("/chainsaw-pattern.svg")] after:bg-repeat after:opacity-5',specialEffect:'before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-red-500/20 before:to-transparent before:blur-sm before:animate-blood-drip',fontFamily:"font-mono",characterQuote:'"The devil that devils fear the most."'},gojo:{name:"gojo",label:"Gojo Satoru",background:"bg-indigo-950",textColor:"text-blue-100",accentColor:"from-blue-400 to-indigo-600",secondaryColor:"bg-indigo-900",hoverAnimation:"hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 hover:translate-y-[-3px] hover:translate-x-[2px] hover:blur-[0.5px]",cardAnimation:"transform transition-all duration-400 ease-out animate-infinity",navbarStyle:"bg-indigo-900 border-blue-600 shadow-blue-500/20",buttonStyle:"bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-400",borderColor:"border-blue-600",gradientOverlay:'bg-gradient-to-br from-indigo-800/70 to-indigo-950/70 after:content-[""] after:absolute after:inset-0 after:bg-[url("/infinity-symbol.svg")] after:bg-repeat after:opacity-5',specialEffect:'before:content-[""] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-blue-400/30 before:to-transparent before:blur-xl before:animate-domain-expansion',fontFamily:"font-sans",characterQuote:'"Throughout Heaven and Earth, I alone am the honored one."'}},i=`
  @keyframes teleport {
    0% { transform: translateX(-100%); }
    5%, 95% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
  }
  
  @keyframes teleport-flash {
    0% { opacity: 1; }
    50% { opacity: 0.7; transform: scale(1.02); }
    51% { opacity: 0; transform: translateX(5px); }
    52% { opacity: 0.7; transform: translateX(0); }
    100% { opacity: 1; transform: scale(1); }
  }
  
  @keyframes saw {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(1deg); }
    50% { transform: rotate(0deg); }
    75% { transform: rotate(-1deg); }
    100% { transform: rotate(0deg); }
  }
  
  @keyframes blood-drip {
    0% { opacity: 0; transform: translateY(-100%); }
    50% { opacity: 0.3; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(100%); }
  }
  
  @keyframes infinity {
    0% { box-shadow: 0 0 5px 2px rgba(59, 130, 246, 0.3); }
    50% { box-shadow: 0 0 15px 5px rgba(59, 130, 246, 0.5); }
    100% { box-shadow: 0 0 5px 2px rgba(59, 130, 246, 0.3); }
  }
  
  @keyframes domain-expansion {
    0% { opacity: 0; transform: scale(0.95); }
    50% { opacity: 0.3; transform: scale(1.05); }
    100% { opacity: 0; transform: scale(0.95); }
  }
  
  @keyframes pulse-slow {
    0% { opacity: 0.8; }
    50% { opacity: 1; }
    100% { opacity: 0.8; }
  }
  
  .animate-teleport {
    animation: teleport 2s ease-in-out infinite;
  }
  
  .animate-teleport-flash {
    animation: teleport-flash 2s ease-in-out;
  }
  
  .animate-saw {
    animation: saw 0.5s ease-in-out infinite;
  }
  
  .animate-blood-drip {
    animation: blood-drip 4s ease-in-out infinite;
  }
  
  .animate-infinity {
    animation: infinity 2s ease-in-out infinite;
  }
  
  .animate-domain-expansion {
    animation: domain-expansion 3s ease-in-out infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }
`,t=n("light");function d(){if(typeof window<"u"){const e=localStorage.getItem("theme"),o=document.createElement("style");o.textContent=i,document.head.appendChild(o),s(),e&&Object.keys(a).includes(e)?t.set(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&t.set("dark")}}function s(){const e={"/kunai-mark.svg":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFD700" d="M12 2L2 22h20L12 2zm0 4l6 16H6l6-16z"/></svg>',"/chainsaw-pattern.svg":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FF4500" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L20 9v6l-8 4-8-4V9l8-4.2z"/></svg>',"/infinity-symbol.svg":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#4169E1" d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L14.8 9.62c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"/></svg>'};for(const[o,r]of Object.entries(e))console.log(`Theme asset would be created at ${o}`)}function f(e){if(t.set(e),typeof window<"u"){localStorage.setItem("theme",e);const o=document.documentElement;e==="dark"||e==="red-lunar"||e==="chainsaw"||e==="gojo"||e==="yellow-flash"?o.classList.add("dark"):o.classList.remove("dark"),Object.keys(a).forEach(r=>{o.classList.remove(`theme-${r}`)}),o.classList.add(`theme-${e}`),document.body.className=document.body.className.replace(/font-(sans|serif|mono)/g,"").concat(" ",a[e].fontFamily),a[e].characterQuote&&console.log(`Theme quote: ${a[e].characterQuote}`)}}export{t as c,d as i,f as s};
