import{_ as y}from"./8Pip3ll1.js";import k from"./DGPPM-Nc.js";import{_ as R}from"./BB7BnnsK.js";import{_ as $}from"./BkXrRsIE.js";import{_ as V}from"./CFW7K8tc.js";import{_ as b}from"./76OaSWHr.js";import{_ as A}from"./DP3D49ak.js";import{_ as h}from"./DpU1Bg40.js";import{_ as T}from"./CvmOckl2.js";import{_ as w}from"./Bf1jc3WF.js";import{_ as B}from"./B_vvbmo2.js";import{_ as N}from"./BNGtznsG.js";import{V as D}from"./DD1fc7KD.js";import{V as F}from"./Cbfouwyy.js";import{e as G,o as m,f as a,w as i,h as n,b as t}from"./DM9sX13V.js";const x=G({__name:"InstagramMediaMenu",props:{media:{}},emits:["update:modelValue"],setup(L,{emit:s}){const r=s;function o(){r("update:modelValue",!1)}return(e,j)=>{const l=y,d=k,u=R,_=$,p=V,f=b,c=A,M=h,I=T,C=w,v=B,g=N;return m(),a(F,{density:"compact",class:"dx-media-menu"},{default:i(()=>[["video","iframe"].includes(e.media.type)&&!e.media.isReel?(m(),a(d,{key:0,title:"Reel"},{default:i(()=>[["video","iframe"].includes(e.media.type)&&!e.media.isReel?(m(),a(l,{key:0,media:e.media,onClose:o},null,8,["media"])):n("",!0)]),_:1})):n("",!0),"list"in e.media?(m(),a(d,{key:1,title:"Album"},{default:i(()=>[t(u,{media:e.media,onClose:o},null,8,["media"]),t(_,{media:e.media,onClose:o},null,8,["media"]),e.media.list.length>1?(m(),a(p,{key:0,media:e.media,onClose:o},null,8,["media"])):n("",!0)]),_:1})):n("",!0),"cover"in e.media?(m(),a(d,{key:2,title:"Cover"},{default:i(()=>[e.media.cover?n("",!0):(m(),a(f,{key:0,media:e.media,onClose:o},null,8,["media"])),e.media.cover?(m(),a(c,{key:1,media:e.media,onClose:o},null,8,["media"])):n("",!0),e.media.cover?(m(),a(M,{key:2,media:e.media,onClose:o},null,8,["media"])):n("",!0)]),_:1})):n("",!0),["image","video"].includes(e.media.type)?(m(),a(d,{key:3,title:"Media"},{default:i(()=>[t(I,{media:e.media,onClose:o},null,8,["media"]),e.media.isReel?n("",!0):(m(),a(C,{key:0,media:e.media,onClose:o},null,8,["media"])),e.media.type==="image"?(m(),a(v,{key:1,media:e.media,onClose:o},null,8,["media"])):n("",!0)]),_:1})):n("",!0),t(D),t(g,{media:e.media,onClose:o},null,8,["media"])]),_:1})}}});export{x as _};