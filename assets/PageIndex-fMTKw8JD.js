import{_,a as b}from"./ProfileAvatar-XD72KCrl.js";import{o as a,c as n,a as y,d as p,r as C,b as i,F as u,e as o,w as m,t as P,f,g as w,h as I,n as S,i as B,u as $,j as N,k as d,l as V,m as M}from"./index-B3yH-wOc.js";const j={},D={class:"ig-intro text-center"},F=y('<h2 class="hidden-md-and-up" data-v-ff6eeff4> Plan your Instagram grid<br data-v-ff6eeff4>like a pro with IG Planner </h2><h2 class="hidden-sm-and-down" data-v-ff6eeff4>Plan your Instagram grid like a pro</h2><p class="mt-5 text-grey-darken-1" data-v-ff6eeff4><a href="https://github.com/dxlliv/ig-planner" data-v-ff6eeff4>dxlliv/ig-planner</a> let you preview what your profile grid will look like.<br class="hidden-xs" data-v-ff6eeff4> Clone the repository and build your Instagram grid with a text editor. </p>',3),z=[F];function A(c,t){return a(),n("div",D,z)}const E=_(j,[["render",A],["__scopeId","data-v-ff6eeff4"]]),G=["textContent"],L=["href"],O=p({__name:"ProfileSelector",props:{profile:{},add:{type:Boolean}},setup(c){const t=C({enabled:!1,x:0,y:0});function r(e){e.preventDefault(),t.enabled=!1,t.x=e.clientX,t.y=e.clientY,B(()=>{t.enabled=!0})}return(e,h)=>{const s=b,l=i("router-link");return a(),n("div",{class:S(["ig-profile-selector",{"ig-profile-selector--add":e.add}])},[e.profile?(a(),n(u,{key:0},[o(l,{to:{name:"profile",params:{username:e.profile.username}},onContextmenu:r},{default:m(()=>[o(s,{avatar:e.profile.avatar},null,8,["avatar"]),f("h3",{class:"mt-4",textContent:P(e.profile.username)},null,8,G)]),_:1},8,["to"]),f("a",{class:"text-blue-grey-lighten-4",href:e.profile.publicProfile,target:"_blank"},"🡥",8,L)],64)):w("",!0),I(e.$slots,"default")],2)}}}),T=p({__name:"PageIndex",setup(c){const t=$(),r=N(()=>Object.values(t.users));return(e,h)=>{const s=O,l=i("v-divider"),v=E,g=i("v-container");return a(),d(g,{class:"text-center pt-16"},{default:m(()=>[(a(!0),n(u,null,V(M(r),(x,k)=>(a(),d(s,{key:k,profile:x.profile},null,8,["profile"]))),128)),o(l,{class:"mt-15 mb-10"}),o(v)]),_:1})}}}),Y=_(T,[["__scopeId","data-v-c6a027b4"]]);export{Y as default};
