import $ from"./BMXUoh3F.js";import w from"./CZZFHdBc.js";import{_ as D}from"./D5O44JQ1.js";import M from"./B68wz5r_.js";import{_ as F}from"./B2k1AYXO.js";import{_ as N}from"./Ce_tlMTY.js";import{bJ as O,r as v,e as A,bg as R,l as z,ag as H,y as I,o as r,c as f,F as J,b as s,a as c,f as p,w as i,h as _,a2 as L,t as T,g as d,$ as X,a5 as Y,a7 as j,as as q}from"./DQ3ZSoQy.js";const G=O("home",()=>{const a=v("");function l(m){a.value=m}return{profilePreview:a,setProfilePreview:l}}),K=["textContent"],re=A({__name:"UserSelector",props:{user:{},add:{type:Boolean}},setup(a){const l=a,m=R(),C=z(),U=G(),o=H({enabled:!1,x:0,y:0}),t=v(!1);function g(){C.push(l.user.route)}function k(){t.value=!0}function S(e){if(m.mdAndUp.value){U.setProfilePreview(l.user.profile.username);return}o.enabled=!0}function y(e){e.preventDefault(),o.enabled=!1,o.x=e.clientX,o.y=e.clientY,q(()=>{o.enabled=!0})}return(e,n)=>{const b=I("router-link"),V=$,P=w,h=D,x=M,B=F,E=N;return r(),f("div",{class:j(["dx-profile-selector",{"dx-profile-selector--add":e.add}])},[e.user?(r(),f(J,{key:0},[s(b,{to:e.user.route},null,8,["to"]),c("a",{class:"cursor-pointer",onClick:S,onContextmenu:y},[(r(),p(L,null,{default:i(()=>[(r(),p(P,{key:e.user.profile.avatar,avatar:e.user.profile.avatar},{inner:i(()=>[e.user.hasLocalChanges||e.user.hasUnsavedChanges?(r(),p(V,{key:0})):_("",!0)]),_:1},8,["avatar"]))]),_:1})),c("h3",{class:"mt-4 text-truncate",textContent:T(e.user.profile.username)},null,8,K),s(x,{modelValue:d(o).enabled,"onUpdate:modelValue":n[0]||(n[0]=u=>d(o).enabled=u),offset:[15,0]},{default:i(()=>[s(h,{onOpen:g,onEdit:k,user:e.user},null,8,["user"])]),_:1},8,["modelValue"])],32)],64)):_("",!0),X(e.$slots,"default"),s(E,{edit:"",modelValue:d(t),"onUpdate:modelValue":n[2]||(n[2]=u=>Y(t)?t.value=u:null)},{default:i(()=>[s(B,{user:e.user,onClose:n[1]||(n[1]=u=>t.value=!1)},null,8,["user"])]),_:1},8,["modelValue"])],2)}}});export{re as _,G as u};
