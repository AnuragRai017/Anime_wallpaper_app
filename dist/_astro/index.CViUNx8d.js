let t=[],i=0;const r=4;let a=s=>{let f=[],e={get(){return e.lc||e.listen(()=>{})(),e.value},lc:0,listen(l){return e.lc=f.push(l),()=>{for(let u=i+r;u<t.length;)t[u]===l?t.splice(u,r):u+=r;let n=f.indexOf(l);~n&&(f.splice(n,1),--e.lc)}},notify(l,n){let u=!t.length;for(let o of f)t.push(o,e.value,l,n);if(u){for(i=0;i<t.length;i+=r)t[i](t[i+1],t[i+2],t[i+3]);t.length=0}},off(){},set(l){let n=e.value;n!==l&&(e.value=l,e.notify(n))},subscribe(l){let n=e.listen(l);return l(e.value),n},value:s};return e};export{a};
