import{V as b,b as y,am as T,aW as u,T as V}from"./C9j35KK9.js";import{b as h,d as A,s as v,c as B,g as F,n as q}from"./D3j0TLhE.js";const C=V({target:[Object,Array]},"v-dialog-transition"),L=b()({name:"VDialogTransition",props:C(),setup(g,o){let{slots:e}=o;const i={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,l){var c;await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),t.style.visibility="";const{x:s,y:a,sx:p,sy:m,speed:r}=w(g.target,t),f=h(t,[{transform:`translate(${s}px, ${a}px) scale(${p}, ${m})`,opacity:0},{}],{duration:225*r,easing:A});(c=x(t))==null||c.forEach(n=>{h(n,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*r,easing:v})}),f.finished.then(()=>l())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,l){var c;await new Promise(n=>requestAnimationFrame(n));const{x:s,y:a,sx:p,sy:m,speed:r}=w(g.target,t);h(t,[{},{transform:`translate(${s}px, ${a}px) scale(${p}, ${m})`,opacity:0}],{duration:125*r,easing:B}).finished.then(()=>l()),(c=x(t))==null||c.forEach(n=>{h(n,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*r,easing:v})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>g.target?y(u,T({name:"dialog-transition"},i,{css:!1}),e):y(u,{name:"dialog-transition"},e)}});function x(g){var e;const o=(e=g.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:e.children;return o&&[...o]}function w(g,o){const e=F(g),i=q(o),[t,l]=getComputedStyle(o).transformOrigin.split(" ").map($=>parseFloat($)),[s,a]=getComputedStyle(o).getPropertyValue("--v-overlay-anchor-origin").split(" ");let p=e.left+e.width/2;s==="left"||a==="left"?p-=e.width/2:(s==="right"||a==="right")&&(p+=e.width/2);let m=e.top+e.height/2;s==="top"||a==="top"?m-=e.height/2:(s==="bottom"||a==="bottom")&&(m+=e.height/2);const r=e.width/i.width,f=e.height/i.height,c=Math.max(1,r,f),n=r/c||0,E=f/c||0,d=i.width*i.height/(window.innerWidth*window.innerHeight),P=d>.12?Math.min(1.5,(d-.12)*10+1):1;return{x:p-(t+i.left),y:m-(l+i.top),sx:n,sy:E,speed:P}}export{L as V};
