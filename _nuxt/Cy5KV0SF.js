import{m as L,V as E,a as b}from"./lkvhmnCO.js";import{f as M}from"./D3j0TLhE.js";import{S,aD as O,W as B,ah as K,aE as U,ad as N,B as V,r as F,af as H,aA as W,ae as j,aF as z,s as G,O as Y,as as $,aG as A,N as q,aH as k,am as p,Y as J,aB as y,b as P,aI as Q}from"./DQ3ZSoQy.js";import{u as X}from"./e8wLM4Yy.js";import{V as Z}from"./tR11RA7a.js";import{V as _}from"./B9U-N160.js";const ee=S({id:String,submenu:Boolean,...O(L({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Z}}),["absolute"])},"VMenu"),re=B()({name:"VMenu",props:ee(),emits:{"update:modelValue":a=>!0},setup(a,h){let{slots:c}=h;const s=K(a,"modelValue"),{scopeId:D}=X(),{isRtl:f}=U(),v=N(),m=V(()=>a.id||`v-menu-${v}`),o=F(),n=H(E,null),d=W(new Set);j(E,{register(){d.value.add(v)},unregister(){d.value.delete(v)},closeParents(e){setTimeout(()=>{var t;!d.value.size&&!a.persistent&&(e==null||(t=o.value)!=null&&t.contentEl&&!z(e,o.value.contentEl))&&(s.value=!1,n==null||n.closeParents())},40)}}),G(()=>{n==null||n.unregister(),document.removeEventListener("focusin",g)}),Y(()=>s.value=!1);async function g(e){var r,u,i;const t=e.relatedTarget,l=e.target;await $(),s.value&&t!==l&&((r=o.value)!=null&&r.contentEl)&&((u=o.value)!=null&&u.globalTop)&&![document,o.value.contentEl].includes(l)&&!o.value.contentEl.contains(l)&&((i=A(o.value.contentEl)[0])==null||i.focus())}q(s,e=>{e?(n==null||n.register(),k&&document.addEventListener("focusin",g,{once:!0})):(n==null||n.unregister(),k&&document.removeEventListener("focusin",g))},{immediate:!0});function C(e){n==null||n.closeParents(e)}function x(e){var t,l,r,u,i;if(!a.disabled)if(e.key==="Tab"||e.key==="Enter"&&!a.closeOnContentClick){if(e.key==="Enter"&&(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement&&e.target.closest("form")))return;e.key==="Enter"&&e.preventDefault(),Q(A((t=o.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",I=>I.tabIndex>=0)||(s.value=!1,(r=(l=o.value)==null?void 0:l.activatorEl)==null||r.focus())}else a.submenu&&e.key===(f.value?"ArrowRight":"ArrowLeft")&&(s.value=!1,(i=(u=o.value)==null?void 0:u.activatorEl)==null||i.focus())}function w(e){var l;if(a.disabled)return;const t=(l=o.value)==null?void 0:l.contentEl;t&&s.value?e.key==="ArrowDown"?(e.preventDefault(),e.stopImmediatePropagation(),y(t,"next")):e.key==="ArrowUp"?(e.preventDefault(),e.stopImmediatePropagation(),y(t,"prev")):a.submenu&&(e.key===(f.value?"ArrowRight":"ArrowLeft")?s.value=!1:e.key===(f.value?"ArrowLeft":"ArrowRight")&&(e.preventDefault(),y(t,"first"))):(a.submenu?e.key===(f.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(e.key))&&(s.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>w(e))))}const R=V(()=>p({"aria-haspopup":"menu","aria-expanded":String(s.value),"aria-owns":m.value,onKeydown:w},a.activatorProps));return J(()=>{const e=b.filterProps(a);return P(b,p({ref:o,id:m.value,class:["v-menu",a.class],style:a.style},e,{modelValue:s.value,"onUpdate:modelValue":t=>s.value=t,absolute:!0,activatorProps:R.value,location:a.location??(a.submenu?"end":"bottom"),"onClick:outside":C,onKeydown:x},D),{activator:c.activator,default:function(){for(var t=arguments.length,l=new Array(t),r=0;r<t;r++)l[r]=arguments[r];return P(_,{root:"VMenu"},{default:()=>{var u;return[(u=c.default)==null?void 0:u.call(c,...l)]}})}})}),M({id:m,ΨopenChildren:d},o)}});export{re as V};
