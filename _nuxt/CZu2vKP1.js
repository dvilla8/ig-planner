import{_ as i}from"./Ctr4cW6G.js";import{V as l}from"./C7I9iVvx.js";import{e as m,o as f,f as p,w as n,b as c,Z as d}from"./C9j35KK9.js";const w=m({__name:"UserEditorDialog",props:{create:{type:Boolean},edit:{type:Boolean}},emits:["close"],setup(u,{emit:s}){const t=s;return(e,o)=>{const a=i;return f(),p(l,{fullscreen:e.$vuetify.display.smAndDown,"max-width":700,onClose:o[1]||(o[1]=r=>t("close"))},{default:n(()=>[c(a,{title:e.$t(e.create?"common.actions.createProfile":"common.actions.editProfile"),onBack:o[0]||(o[0]=r=>t("close"))},{default:n(()=>[d(e.$slots,"default")]),_:3},8,["title"])]),_:3},8,["fullscreen"])}}});export{w as _};
