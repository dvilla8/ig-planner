import h from"./BHvV7Qvo.js";import y from"./BL2DbnkI.js";import{S as E,T as I}from"./BNCagIqf.js";import{d as g,a as k,o as v,y as M,R as C,ag as F,Q as s,V as m,Z as c,l as u,u as p,ae as S,W as f,Y as _}from"./CBwktElb.js";import T from"./C-INuqu6.js";import{V as w}from"./BNcqbSMJ.js";import{I as V}from"./LikY0yHT.js";const B=Symbol.for("nuxt:client-only"),P=g({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(d,{slots:a,attrs:t}){const o=k(!1);return v(()=>{o.value=!0}),M(B,!0),e=>{var r;if(o.value)return(r=a.default)==null?void 0:r.call(a);const n=a.fallback||a.placeholder;if(n)return n();const i=e.fallback||e.placeholder||"",l=e.fallbackTag||e.placeholderTag||"span";return C(l,t,i)}}}),Y=g({__name:"InstagramMediaImage",props:{media:{},isFromDetail:{type:Boolean}},setup(d){const a=d,t=k(a.media.rawFilePath);async function o(e){e&&(t.value=await I(a.media))}return(e,n)=>{const i=h,l=y,r=P,b=T;return F((s(),m(b,{type:"image",media:e.media},{actions:c(()=>[u(r,null,{default:c(()=>[("isPlannerFeatureEnabled"in e?e.isPlannerFeatureEnabled:p(E))("mediaEditor")?(s(),m(i,{key:0,onClick:n[0]||(n[0]=S($=>e.media.setEditing(!0),["stop"]))})):f("",!0),e.media.isEditing?(s(),m(l,{key:1,media:e.media},null,8,["media"])):f("",!0)]),_:1}),_(e.$slots,"actions")]),default:c(()=>[u(w,{cover:"",height:"100%",src:p(t)},null,8,["src"]),_(e.$slots,"link")]),_:3},8,["media"])),[[V,o]])}}});export{Y as _,P as a};