import{r as P,b9 as q,ba as H,aX as G,bb as T,B as C,N as Q,aA as R,n as V,Q as X,b5 as Y}from"./DM9sX13V.js";function k(n){return H()?(G(n),!0):!1}function F(){const n=new Set,t=u=>{n.delete(u)};return{on:u=>{n.add(u);const d=()=>t(u);return k(d),{off:d}},off:t,trigger:(...u)=>Promise.all(Array.from(n).map(d=>d(...u))),clear:()=>{n.clear()}}}const x=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const z=Object.prototype.toString,J=n=>z.call(n)==="[object Object]",L=()=>{},K=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),Z=ee();function ee(){var n,t;return x&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function ne(n){let t;function e(){return t||(t=n()),t}return e.reset=async()=>{const i=t;t=void 0,i&&await i},e}function I(n){return Array.isArray(n)?n:[n]}function te(n,t,e={}){const{immediate:i=!0}=e,f=P(!1);let u=null;function d(){u&&(clearTimeout(u),u=null)}function o(){f.value=!1,d()}function g(...y){d(),f.value=!0,u=setTimeout(()=>{f.value=!1,u=null,n(...y)},T(t))}return i&&(f.value=!0,x&&g()),k(o),{isPending:q(f),start:g,stop:o}}const U=x?window:void 0,re=x?window.document:void 0,N=x?window.navigator:void 0;function A(n){var t;const e=T(n);return(t=e==null?void 0:e.$el)!=null?t:e}function S(...n){let t,e,i,f;if(typeof n[0]=="string"||Array.isArray(n[0])?([e,i,f]=n,t=U):[t,e,i,f]=n,!t)return L;e=I(e),i=I(i);const u=[],d=()=>{u.forEach(s=>s()),u.length=0},o=(s,c,v,h)=>(s.addEventListener(c,v,h),()=>s.removeEventListener(c,v,h)),g=Q(()=>[A(t),T(f)],([s,c])=>{if(d(),!s)return;const v=J(c)?{...c}:c;u.push(...e.flatMap(h=>i.map(b=>o(s,h,b,v))))},{immediate:!0,flush:"post"}),y=()=>{g(),d()};return k(y),y}let W=!1;function se(n,t,e={}){const{window:i=U,ignore:f=[],capture:u=!0,detectIframe:d=!1}=e;if(!i)return L;Z&&!W&&(W=!0,Array.from(i.document.body.children).forEach(l=>l.addEventListener("click",L)),i.document.documentElement.addEventListener("click",L));let o=!0;const g=l=>T(f).some(p=>{if(typeof p=="string")return Array.from(i.document.querySelectorAll(p)).some(r=>r===l.target||l.composedPath().includes(r));{const r=A(p);return r&&(l.target===r||l.composedPath().includes(r))}});function y(l){const p=T(l);return p&&p.$.subTree.shapeFlag===16}function s(l,p){const r=T(l),a=r.$.subTree&&r.$.subTree.children;return a==null||!Array.isArray(a)?!1:a.some(m=>m.el===p.target||p.composedPath().includes(m.el))}const c=l=>{const p=A(n);if(l.target!=null&&!(!(p instanceof Element)&&y(n)&&s(n,l))&&!(!p||p===l.target||l.composedPath().includes(p))){if(l.detail===0&&(o=!g(l)),!o){o=!0;return}t(l)}};let v=!1;const h=[S(i,"click",l=>{v||(v=!0,setTimeout(()=>{v=!1},0),c(l))},{passive:!0,capture:u}),S(i,"pointerdown",l=>{const p=A(n);o=!g(l)&&!!(p&&!l.composedPath().includes(p))},{passive:!0}),d&&S(i,"blur",l=>{setTimeout(()=>{var p;const r=A(n);((p=i.document.activeElement)==null?void 0:p.tagName)==="IFRAME"&&!(r!=null&&r.contains(i.document.activeElement))&&t(l)},0)})].filter(Boolean);return()=>h.forEach(l=>l())}function ue(){const n=P(!1),t=X();return t&&V(()=>{n.value=!0},t),n}function $(n){const t=ue();return C(()=>(t.value,!!n()))}const oe=500,ie=10;function ce(n,t,e){var i,f;const u=C(()=>A(n));let d,o,g,y=!1;function s(){d&&(clearTimeout(d),d=void 0),o=void 0,g=void 0,y=!1}function c(r){var a,m,w;const[_,E,O]=[g,o,y];if(s(),!(e!=null&&e.onMouseUp)||!E||!_||(a=e==null?void 0:e.modifiers)!=null&&a.self&&r.target!==u.value)return;(m=e==null?void 0:e.modifiers)!=null&&m.prevent&&r.preventDefault(),(w=e==null?void 0:e.modifiers)!=null&&w.stop&&r.stopPropagation();const M=r.x-E.x,D=r.y-E.y,B=Math.sqrt(M*M+D*D);e.onMouseUp(r.timeStamp-_,B,O)}function v(r){var a,m,w,_;(a=e==null?void 0:e.modifiers)!=null&&a.self&&r.target!==u.value||(s(),(m=e==null?void 0:e.modifiers)!=null&&m.prevent&&r.preventDefault(),(w=e==null?void 0:e.modifiers)!=null&&w.stop&&r.stopPropagation(),o={x:r.x,y:r.y},g=r.timeStamp,d=setTimeout(()=>{y=!0,t(r)},(_=e==null?void 0:e.delay)!=null?_:oe))}function h(r){var a,m,w,_;if((a=e==null?void 0:e.modifiers)!=null&&a.self&&r.target!==u.value||!o||(e==null?void 0:e.distanceThreshold)===!1)return;(m=e==null?void 0:e.modifiers)!=null&&m.prevent&&r.preventDefault(),(w=e==null?void 0:e.modifiers)!=null&&w.stop&&r.stopPropagation();const E=r.x-o.x,O=r.y-o.y;Math.sqrt(E*E+O*O)>=((_=e==null?void 0:e.distanceThreshold)!=null?_:ie)&&s()}const b={capture:(i=e==null?void 0:e.modifiers)==null?void 0:i.capture,once:(f=e==null?void 0:e.modifiers)==null?void 0:f.once},l=[S(u,"pointerdown",v,b),S(u,"pointermove",h,b),S(u,["pointerup","pointerleave"],c,b)];return()=>l.forEach(r=>r())}function j(n,t={}){const{controls:e=!1,navigator:i=N}=t,f=$(()=>i&&"permissions"in i),u=R(),d=typeof n=="string"?{name:n}:n,o=R(),g=()=>{var s,c;o.value=(c=(s=u.value)==null?void 0:s.state)!=null?c:"prompt"};S(u,"change",g);const y=ne(async()=>{if(f.value){if(!u.value)try{u.value=await i.permissions.query(d)}catch{u.value=void 0}finally{g()}if(e)return Y(u.value)}});return y(),e?{state:o,isSupported:f,query:y}:o}function de(n={}){const{navigator:t=N,read:e=!1,source:i,copiedDuring:f=1500,legacy:u=!1}=n,d=$(()=>t&&"clipboard"in t),o=j("clipboard-read"),g=j("clipboard-write"),y=C(()=>d.value||u),s=P(""),c=P(!1),v=te(()=>c.value=!1,f,{immediate:!1});function h(){d.value&&r(o.value)?t.clipboard.readText().then(a=>{s.value=a}):s.value=p()}y.value&&e&&S(["copy","cut"],h);async function b(a=T(i)){y.value&&a!=null&&(d.value&&r(g.value)?await t.clipboard.writeText(a):l(a),s.value=a,c.value=!0,v.start())}function l(a){const m=document.createElement("textarea");m.value=a??"",m.style.position="absolute",m.style.opacity="0",document.body.appendChild(m),m.select(),document.execCommand("copy"),m.remove()}function p(){var a,m,w;return(w=(m=(a=document==null?void 0:document.getSelection)==null?void 0:a.call(document))==null?void 0:m.toString())!=null?w:""}function r(a){return a==="granted"||a==="prompt"}return{isSupported:y,text:s,copied:c,copy:b}}const le={multiple:!0,accept:"*",reset:!1,directory:!1};function fe(n={}){const{document:t=re}=n,e=P(null),{on:i,trigger:f}=F(),{on:u,trigger:d}=F();let o;t&&(o=t.createElement("input"),o.type="file",o.onchange=s=>{const c=s.target;e.value=c.files,f(e.value)},o.oncancel=()=>{d()});const g=()=>{e.value=null,o&&o.value&&(o.value="",f(null))},y=s=>{if(!o)return;const c={...le,...n,...s};o.multiple=c.multiple,o.accept=c.accept,o.webkitdirectory=c.directory,K(c,"capture")&&(o.capture=c.capture),c.reset&&g(),o.click()};return{files:q(e),open:y,reset:g,onCancel:u,onChange:i}}export{de as a,se as b,ce as o,fe as u};
