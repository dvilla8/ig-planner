import{u as m}from"./index.BbN7YMFR.js";import{S as p,I as c}from"./entry.nxeMeOXT.js";import{d as l,a4 as u,a6 as d,aa as g,D as C,a1 as f,u as _}from"./swiper-vue.Dnu8qG6n.js";const I=l({__name:"InstagramMediaContextMenuAddCover",props:{media:{}},emits:["close"],setup(o,{emit:n}){const t=o,s=n,{open:i,onChange:r}=m({accept:"image/jpg, image/jpeg, image/png",multiple:!1});return r(e=>{if(!e)return;const a=e[0];t.media.setCover(a),t.media.save(),s("close")}),(e,a)=>(u(),d(c,{onClick:_(i)},{default:g(()=>[C(p,{textContent:f(e.$t("instagram.profile.menu.addCover"))},null,8,["textContent"])]),_:1},8,["onClick"]))}});export{I as _};
