import{s as o,H as i}from"./BNCagIqf.js";import{j as n}from"./CBwktElb.js";const e=["static","relative","fixed","absolute","sticky"],p=o({position:{type:String,validator:t=>e.includes(t)}},"position");function m(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i();return{positionClasses:n(()=>t.position?`${s}--${t.position}`:void 0)}}export{p as m,m as u};