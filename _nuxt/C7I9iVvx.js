import{m as y,a as v}from"./BVe6K9i-.js";import{f as D}from"./D3j0TLhE.js";import{T as L,V as w,ah as A,r as p,s as B,aO as S,N as g,ap as T,X as F,aN as I,am as d,b as E}from"./C9j35KK9.js";import{u as N}from"./CRG_Yqa4.js";import{V as O}from"./jFbDlT-s.js";import{V as R}from"./DufOT4eb.js";const W=L({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...y({origin:"center center",scrollStrategy:"block",transition:{component:O},zIndex:2400})},"VDialog"),X=w()({name:"VDialog",props:W(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,V){let{emit:m,slots:s}=V;const u=A(e,"modelValue"),{scopeId:h}=N(),t=p();function f(a){var r,c;const o=a.relatedTarget,l=a.target;if(o!==l&&((r=t.value)!=null&&r.contentEl)&&((c=t.value)!=null&&c.globalTop)&&![document,t.value.contentEl].includes(l)&&!t.value.contentEl.contains(l)){const n=I(t.value.contentEl);if(!n.length)return;const i=n[0],x=n[n.length-1];o===i?x.focus():i.focus()}}B(()=>{document.removeEventListener("focusin",f)}),S&&g(()=>u.value&&e.retainFocus,a=>{a?document.addEventListener("focusin",f):document.removeEventListener("focusin",f)},{immediate:!0});function P(){var a;m("afterEnter"),(a=t.value)!=null&&a.contentEl&&!t.value.contentEl.contains(document.activeElement)&&t.value.contentEl.focus({preventScroll:!0})}function b(){m("afterLeave")}return g(u,async a=>{var o;a||(await T(),(o=t.value.activatorEl)==null||o.focus({preventScroll:!0}))}),F(()=>{const a=v.filterProps(e),o=d({"aria-haspopup":"dialog"},e.activatorProps),l=d({tabindex:-1},e.contentProps);return E(v,d({ref:t,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},a,{modelValue:u.value,"onUpdate:modelValue":r=>u.value=r,"aria-modal":"true",activatorProps:o,contentProps:l,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:P,onAfterLeave:b},h),{activator:s.activator,default:function(){for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return E(R,{root:"VDialog"},{default:()=>{var i;return[(i=s.default)==null?void 0:i.call(s,...c)]}})}})}),D({},t)}});export{X as V,W as m};
