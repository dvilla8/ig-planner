import{be as pe,bf as Le,T as Z,r as D,aO as z,b7 as ue,N as R,aZ as V,at as je,B as C,ap as fe,ao as H,aV as be,L as ve,bg as Be,ac as de,af as Me,aS as we,am as j,bh as ze,aI as U,bi as $e,n as qe,ag as Re,ae as Ye,bb as Ue,b9 as Ge,U as Xe,a8 as Ze,V as Ke,ah as Je,a9 as Qe,aD as et,ab as tt,s as nt,X as ot,b as W,bj as at,ar as rt,aG as it,ay as lt,F as st,aW as ct}from"./C9j35KK9.js";import{g as ut,B as oe,a as Ee,n as ft,b as vt,s as dt}from"./D3j0TLhE.js";import{p as Se,f as ae,a as re,b as xe,g as Oe}from"./D_BqIkRL.js";import{m as mt,a as gt,u as yt}from"./CRG_Yqa4.js";import{a as ht}from"./DT_k8Ksj.js";import{m as bt,u as wt}from"./BcO4HMLB.js";import{a as Et,b as St}from"./CRkQD9Vu.js";import{m as xt,M as Ot}from"./B9GxKqc9.js";const J=new WeakMap;function kt(e,n){Object.keys(n).forEach(t=>{if(pe(t)){const o=Le(t),a=J.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[c,r]=i;c===o&&(e.removeEventListener(o,r),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),J.has(e)||J.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Ct(e,n){Object.keys(n).forEach(t=>{if(pe(t)){const o=Le(t),a=J.get(e);a==null||a.forEach(i=>{const[c,r]=i;c===o&&(e.removeEventListener(o,r),a.delete(i))})}else e.removeAttribute(t)})}function Fe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Pt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?At(e):me(e))return e;e=e.parentElement}return document.scrollingElement}function ee(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(me(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function me(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function At(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Tt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function ie(e,n){return{x:e.x+n.x,y:e.y+n.y}}function pt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function ke(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return ie({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ie({x:a,y:i},n)}return ie({x:n.width/2,y:n.height/2},n)}const Ne={static:Mt,connected:Ft},Lt=Z({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ne},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Bt(e,n){const t=D({}),o=D();z&&ue(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var c,r;R(()=>e.locationStrategy,i),V(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(c=e.locationStrategy(n,e,t))==null?void 0:c.updateLocation:o.value=(r=Ne[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function a(i){var c;(c=o.value)==null||c.call(o,i)}return{contentStyles:t,updateLocation:o}}function Mt(){}function Rt(e,n){const t=ft(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Ft(e,n,t){(Array.isArray(e.target.value)||Tt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=je(()=>{const d=Se(n.location,e.isRtl.value),f=n.origin==="overlap"?d:n.origin==="auto"?ae(d):Se(n.origin,e.isRtl.value);return d.side===f.side&&d.align===re(f).align?{preferredAnchor:xe(d),preferredOrigin:xe(f)}:{preferredAnchor:d,preferredOrigin:f}}),[c,r,u,v]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>C(()=>{const f=parseFloat(n[d]);return isNaN(f)?1/0:f})),s=C(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let w=!1;const O=new ResizeObserver(()=>{w&&x()});R([e.target,e.contentEl],(d,f)=>{let[P,A]=d,[E,b]=f;E&&!Array.isArray(E)&&O.unobserve(E),P&&!Array.isArray(P)&&O.observe(P),b&&O.unobserve(b),A&&O.observe(A)},{immediate:!0}),V(()=>{O.disconnect()});function x(){if(w=!1,requestAnimationFrame(()=>w=!0),!e.target.value||!e.contentEl.value)return;const d=ut(e.target.value),f=Rt(e.contentEl.value,e.isRtl.value),P=ee(e.contentEl.value),A=12;P.length||(P.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const E=P.reduce((S,h)=>{const m=h.getBoundingClientRect(),y=new oe({x:h===document.documentElement?0:m.x,y:h===document.documentElement?0:m.y,width:h.clientWidth,height:h.clientHeight});return S?new oe({x:Math.max(S.left,y.left),y:Math.max(S.top,y.top),width:Math.min(S.right,y.right)-Math.max(S.left,y.left),height:Math.min(S.bottom,y.bottom)-Math.max(S.top,y.top)}):y},void 0);E.x+=A,E.y+=A,E.width-=A*2,E.height-=A*2;let b={anchor:a.value,origin:i.value};function p(S){const h=new oe(f),m=ke(S.anchor,d),y=ke(S.origin,h);let{x:N,y:_}=pt(m,y);switch(S.anchor.side){case"top":_-=s.value[0];break;case"bottom":_+=s.value[0];break;case"left":N-=s.value[0];break;case"right":N+=s.value[0];break}switch(S.anchor.align){case"top":_-=s.value[1];break;case"bottom":_+=s.value[1];break;case"left":N-=s.value[1];break;case"right":N+=s.value[1];break}return h.x+=N,h.y+=_,h.width=Math.min(h.width,u.value),h.height=Math.min(h.height,v.value),{overflows:Ee(h,E),x:N,y:_}}let B=0,F=0;const k={x:0,y:0},l={x:!1,y:!1};let L=-1;for(;!(L++>10);){const{x:S,y:h,overflows:m}=p(b);B+=S,F+=h,f.x+=S,f.y+=h;{const y=Oe(b.anchor),N=m.x.before||m.x.after,_=m.y.before||m.y.after;let $=!1;if(["x","y"].forEach(T=>{if(T==="x"&&N&&!l.x||T==="y"&&_&&!l.y){const I={anchor:{...b.anchor},origin:{...b.origin}},q=T==="x"?y==="y"?re:ae:y==="y"?ae:re;I.anchor=q(I.anchor),I.origin=q(I.origin);const{overflows:Y}=p(I);(Y[T].before<=m[T].before&&Y[T].after<=m[T].after||Y[T].before+Y[T].after<(m[T].before+m[T].after)/2)&&(b=I,$=l[T]=!0)}}),$)continue}m.x.before&&(B+=m.x.before,f.x+=m.x.before),m.x.after&&(B-=m.x.after,f.x-=m.x.after),m.y.before&&(F+=m.y.before,f.y+=m.y.before),m.y.after&&(F-=m.y.after,f.y-=m.y.after);{const y=Ee(f,E);k.x=E.width-y.x.before-y.x.after,k.y=E.height-y.y.before-y.y.after,B+=y.x.before,f.x+=y.x.before,F+=y.y.before,f.y+=y.y.before}break}const ne=Oe(b.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${b.anchor.side} ${b.anchor.align}`,transformOrigin:`${b.origin.side} ${b.origin.align}`,top:H(le(F)),left:e.isRtl.value?void 0:H(le(B)),right:e.isRtl.value?H(le(-B)):void 0,minWidth:H(ne==="y"?Math.min(c.value,d.width):c.value),maxWidth:H(Ce(be(k.x,c.value===1/0?0:c.value,u.value))),maxHeight:H(Ce(be(k.y,r.value===1/0?0:r.value,v.value)))}),{available:k,contentBox:f}}return R(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>x()),fe(()=>{const d=x();if(!d)return;const{available:f,contentBox:P}=d;P.height>f.y&&requestAnimationFrame(()=>{x(),requestAnimationFrame(()=>{x()})})}),{updateLocation:x}}function le(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ce(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let se=!0;const te=[];function Nt(e){!se||te.length?(te.push(e),ce()):(se=!1,e(),ce())}let Pe=-1;function ce(){cancelAnimationFrame(Pe),Pe=requestAnimationFrame(()=>{const e=te.shift();e&&e(),te.length?ce():se=!0})}const Q={none:null,close:Vt,block:It,reposition:Wt},_t=Z({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in Q}},"VOverlay-scroll-strategies");function Ht(e,n){if(!z)return;let t;ve(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Be(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=Q[e.scrollStrategy])==null||o.call(Q,n,e,t)}))}),V(()=>{t==null||t.stop()})}function Vt(e){function n(t){e.isActive.value=!1}_e(e.targetEl.value??e.contentEl.value,n)}function It(e,n){var c;const t=(c=e.root.value)==null?void 0:c.offsetParent,o=[...new Set([...ee(e.targetEl.value,n.contained?t:void 0),...ee(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(r=>me(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,u)=>{r.style.setProperty("--v-body-scroll-x",H(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",H(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",H(a)),r.classList.add("v-overlay-scroll-blocked")}),V(()=>{o.forEach((r,u)=>{const v=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),s=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),w=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-v,r.scrollTop=-s,r.style.scrollBehavior=w}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Wt(e,n,t){let o=!1,a=-1,i=-1;function c(r){Nt(()=>{var s,w;const u=performance.now();(w=(s=e.updateLocation).value)==null||w.call(s,r),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{_e(e.targetEl.value??e.contentEl.value,r=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{c(r)})})):c(r)})})}),V(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function _e(e,n){const t=[document,...ee(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),V(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const Dt=Symbol.for("vuetify:v-menu"),jt=Z({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...mt()},"VOverlay-activator");function zt(e,n){let{isActive:t,isTop:o,contentEl:a}=n;const i=de("useActivator"),c=D();let r=!1,u=!1,v=!0;const s=C(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),w=C(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!s.value),{runOpenDelay:O,runCloseDelay:x}=gt(e,l=>{l===(e.openOnHover&&r||s.value&&u)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(v=!0),t.value=l)}),d=D(),f={onClick:l=>{l.stopPropagation(),c.value=l.currentTarget||l.target,t.value||(d.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var L;(L=l.sourceCapabilities)!=null&&L.firesTouchEvents||(r=!0,c.value=l.currentTarget||l.target,O())},onMouseleave:l=>{r=!1,x()},onFocus:l=>{ze(l.target,":focus-visible")!==!1&&(u=!0,l.stopPropagation(),c.value=l.currentTarget||l.target,O())},onBlur:l=>{u=!1,l.stopPropagation(),x()}},P=C(()=>{const l={};return w.value&&(l.onClick=f.onClick),e.openOnHover&&(l.onMouseenter=f.onMouseenter,l.onMouseleave=f.onMouseleave),s.value&&(l.onFocus=f.onFocus,l.onBlur=f.onBlur),l}),A=C(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{r=!0,O()},l.onMouseleave=()=>{r=!1,x()}),s.value&&(l.onFocusin=()=>{u=!0,O()},l.onFocusout=()=>{u=!1,x()}),e.closeOnContentClick){const L=Me(Dt,null);l.onClick=()=>{t.value=!1,L==null||L.closeParents()}}return l}),E=C(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{v&&(r=!0,v=!1,O())},l.onMouseleave=()=>{r=!1,x()}),l});R(o,l=>{var L;l&&(e.openOnHover&&!r&&(!s.value||!u)||s.value&&!u&&(!e.openOnHover||!r))&&!((L=a.value)!=null&&L.contains(document.activeElement))&&(t.value=!1)}),R(t,l=>{l||setTimeout(()=>{d.value=void 0})},{flush:"post"});const b=we();ve(()=>{b.value&&fe(()=>{c.value=b.el})});const p=we(),B=C(()=>e.target==="cursor"&&d.value?d.value:p.value?p.el:He(e.target,i)||c.value),F=C(()=>Array.isArray(B.value)?void 0:B.value);let k;return R(()=>!!e.activator,l=>{l&&z?(k=Be(),k.run(()=>{$t(e,i,{activatorEl:c,activatorEvents:P})})):k&&k.stop()},{flush:"post",immediate:!0}),V(()=>{k==null||k.stop()}),{activatorEl:c,activatorRef:b,target:B,targetEl:F,targetRef:p,activatorEvents:P,contentEvents:A,scrimEvents:E}}function $t(e,n,t){let{activatorEl:o,activatorEvents:a}=t;R(()=>e.activator,(u,v)=>{if(v&&u!==v){const s=r(v);s&&c(s)}u&&fe(()=>i())},{immediate:!0}),R(()=>e.activatorProps,()=>{i()}),V(()=>{c()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&kt(u,j(a.value,v))}function c(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Ct(u,j(a.value,v))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const v=He(u,n);return o.value=(v==null?void 0:v.nodeType)===Node.ELEMENT_NODE?v:void 0,o.value}}function He(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function qt(){if(!z)return U(!1);const{ssr:e}=$e();if(e){const n=U(!1);return qe(()=>{n.value=!0}),n}else return U(!0)}const Yt=Z({eager:Boolean},"lazy");function Ut(e,n){const t=U(!1),o=C(()=>t.value||e.eager||n.value);R(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}const Ae=Symbol.for("vuetify:stack"),X=Re([]);function Gt(e,n,t){const o=de("useStack"),a=!t,i=Me(Ae,void 0),c=Re({activeChildren:new Set});Ye(Ae,c);const r=U(+n.value);ue(e,()=>{var w;const s=(w=X.at(-1))==null?void 0:w[1];r.value=s?s+10:+n.value,a&&X.push([o.uid,r.value]),i==null||i.activeChildren.add(o.uid),V(()=>{if(a){const O=Ue(X).findIndex(x=>x[0]===o.uid);X.splice(O,1)}i==null||i.activeChildren.delete(o.uid)})});const u=U(!0);a&&ve(()=>{var w;const s=((w=X.at(-1))==null?void 0:w[0])===o.uid;setTimeout(()=>u.value=s)});const v=C(()=>!c.activeChildren.size);return{globalTop:Ge(u),localTop:v,stackStyles:C(()=>({zIndex:r.value}))}}function Xt(e){return{teleportTarget:C(()=>{const t=e();if(t===!0||!z)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=[...o.children].find(i=>i.matches(".v-overlay-container"));return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Zt(){return!0}function Ve(e,n,t){if(!e||Ie(e,t)===!1)return!1;const o=Fe(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function Ie(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Zt)(e)}function Kt(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;e.shadowTarget=e.target,n._clickOutside.lastMousedownWasOutside&&Ve(e,n,t)&&setTimeout(()=>{Ie(e,t)&&o&&o(e)},0)}function Te(e,n){const t=Fe(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Jt={mounted(e,n){const t=a=>Kt(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=Ve(a,e,n)};Te(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},beforeUnmount(e,n){e._clickOutside&&(Te(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Qt(e){const{modelValue:n,color:t,...o}=e;return W(ct,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&W("div",j({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const en=Z({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...jt(),...Xe(),...bt(),...Yt(),...Lt(),..._t(),...Ze(),...xt()},"VOverlay"),un=Ke()({name:"VOverlay",directives:{ClickOutside:Jt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...en()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=de("VOverlay"),c=D(),r=D(),u=D(),v=Je(e,"modelValue"),s=C({get:()=>v.value,set:g=>{g&&e.disabled||(v.value=g)}}),{themeClasses:w}=Qe(e),{rtlClasses:O,isRtl:x}=et(),{hasContent:d,onAfterLeave:f}=Ut(e,s),P=ht(C(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:A,localTop:E,stackStyles:b}=Gt(s,tt(e,"zIndex"),e._disableGlobalStack),{activatorEl:p,activatorRef:B,target:F,targetEl:k,targetRef:l,activatorEvents:L,contentEvents:ne,scrimEvents:S}=zt(e,{isActive:s,isTop:E,contentEl:u}),{teleportTarget:h}=Xt(()=>{var G,ye,he;const g=e.attach||e.contained;if(g)return g;const M=((G=p==null?void 0:p.value)==null?void 0:G.getRootNode())||((he=(ye=i.proxy)==null?void 0:ye.$el)==null?void 0:he.getRootNode());return M instanceof ShadowRoot?M:!1}),{dimensionStyles:m}=wt(e),y=qt(),{scopeId:N}=yt();R(()=>e.disabled,g=>{g&&(s.value=!1)});const{contentStyles:_,updateLocation:$}=Bt(e,{isRtl:x,contentEl:u,target:F,isActive:s});Ht(e,{root:c,contentEl:u,targetEl:k,isActive:s,updateLocation:$});function T(g){a("click:outside",g),e.persistent?K():s.value=!1}function I(g){return s.value&&A.value&&(!e.scrim||g.target===r.value||g instanceof MouseEvent&&g.shadowTarget===r.value)}z&&R(s,g=>{g?window.addEventListener("keydown",q):window.removeEventListener("keydown",q)},{immediate:!0}),nt(()=>{z&&window.removeEventListener("keydown",q)});function q(g){var M,G;g.key==="Escape"&&A.value&&(e.persistent?K():(s.value=!1,(M=u.value)!=null&&M.contains(document.activeElement)&&((G=p.value)==null||G.focus())))}const Y=Et();ue(()=>e.closeOnBack,()=>{St(Y,g=>{A.value&&s.value?(g(!1),e.persistent?K():s.value=!1):g()})});const ge=D();R(()=>s.value&&(e.absolute||e.contained)&&h.value==null,g=>{if(g){const M=Pt(c.value);M&&M!==document.scrollingElement&&(ge.value=M.scrollTop)}});function K(){e.noClickAnimation||u.value&&vt(u.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:dt})}function We(){a("afterEnter")}function De(){f(),a("afterLeave")}return ot(()=>{var g;return W(st,null,[(g=t.activator)==null?void 0:g.call(t,{isActive:s.value,targetRef:l,props:j({ref:B},L.value,e.activatorProps)}),y.value&&d.value&&W(at,{disabled:!h.value,to:h.value},{default:()=>[W("div",j({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},w.value,O.value,e.class],style:[b.value,{"--v-overlay-opacity":e.opacity,top:H(ge.value)},e.style],ref:c},N,o),[W(Qt,j({color:P,modelValue:s.value&&!!e.scrim,ref:r},S.value),null),W(Ot,{appear:!0,persisted:!0,transition:e.transition,target:F.value,onAfterEnter:We,onAfterLeave:De},{default:()=>{var M;return[rt(W("div",j({ref:u,class:["v-overlay__content",e.contentClass],style:[m.value,_.value]},ne.value,e.contentProps),[(M=t.default)==null?void 0:M.call(t,{isActive:s})]),[[it,s.value],[lt("click-outside"),{handler:T,closeConditional:I,include:()=>[p.value]}]])]}})])]})])}),{activatorEl:p,scrimEl:r,target:F,animateClick:K,contentEl:u,globalTop:A,localTop:E,updateLocation:$}}});export{Dt as V,un as a,en as m};
