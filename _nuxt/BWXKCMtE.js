import{u as r}from"./D392tYcY.js";import{V as l,a as c}from"./DP525h8b.js";import{d as p,Q as u,V as d,Z as f,l as C,a5 as g,u as _}from"./CBwktElb.js";const V=p({__name:"InstagramMediaContextMenuItemReplaceMediaAlbum",props:{media:{}},emits:["close"],setup(o,{emit:n}){const t=o,s=n,{open:i,onChange:m}=r({accept:"image/*",multiple:!1});return m(e=>{if(!e)return;const a=e[0];t.media.setMediaAlbumImage(a),t.media.refresh(),s("close")}),(e,a)=>(u(),d(c,{onClick:_(i)},{default:f(()=>[C(l,{textContent:g(e.$t("instagram.profile.menu.replaceMedia"))},null,8,["textContent"])]),_:1},8,["onClick"]))}});export{V as _};