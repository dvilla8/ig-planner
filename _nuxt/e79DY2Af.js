import{s,H as n}from"./BNCagIqf.js";import{j as a}from"./CBwktElb.js";const r=[null,"default","comfortable","compact"],d=s({density:{type:String,default:"default",validator:e=>r.includes(e)}},"density");function l(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:n();return{densityClasses:a(()=>`${t}--density-${e.density}`)}}export{d as m,l as u};