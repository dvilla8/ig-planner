import{d as _,h as q,o as B,e as w,f as L,j as N,p as j,g as T,n as U,k as I,l as k,m as O,w as V,q as D}from"./entry.nxeMeOXT.js";import{d as E,c as b,a as C,B as F,M as H,f as P,aj as M}from"./swiper-vue.Dnu8qG6n.js";async function R(t,r=_()){const{path:o,matched:e}=r.resolve(t);if(!e.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(o)))return;const n=r._preloadPromises=r._preloadPromises||[];if(n.length>4)return Promise.all(n).then(()=>R(t,r));r._routePreloaded.add(o);const i=e.map(s=>{var a;return(a=s.components)==null?void 0:a.default}).filter(s=>typeof s=="function");for(const s of i){const a=Promise.resolve(s()).catch(()=>{}).finally(()=>n.splice(n.indexOf(a)));n.push(a)}await Promise.all(n)}const z=(...t)=>t.find(r=>r!==void 0);function $(t){const r=t.componentName||"NuxtLink";function o(e,n){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return S(e,t.trailingSlash);const i="path"in e&&e.path!==void 0?e.path:n(e).path,s={...e,path:S(i,t.trailingSlash)};return"name"in s&&delete s.name,s}return E({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:n}){const i=_(),s=I(),a=b(()=>{const l=e.to||e.href||"";return o(l,i.resolve)}),f=b(()=>typeof a.value=="string"&&q(a.value,{acceptRelative:!0})),g=b(()=>e.target&&e.target!=="_self"),p=b(()=>e.external||g.value?!0:typeof a.value=="object"?!1:a.value===""||f.value),x=C(!1),v=C(null),A=l=>{var d;v.value=e.custom?(d=l==null?void 0:l.$el)==null?void 0:d.nextElementSibling:l==null?void 0:l.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!W()){const d=k();let h,u=null;F(()=>{const y=Q();B(()=>{h=w(()=>{var c;(c=v==null?void 0:v.value)!=null&&c.tagName&&(u=y.observe(v.value,async()=>{u==null||u(),u=null;const m=typeof a.value=="string"?a.value:i.resolve(a.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",m).catch(()=>{}),!p.value&&R(a.value,i).catch(()=>{})]),x.value=!0}))})})}),H(()=>{h&&L(h),u==null||u(),u=null})}return()=>{var u,y;if(!p.value){const c={ref:A,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(x.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel||void 0),P(M("RouterLink"),c,n.default)}const l=typeof a.value=="object"?((u=i.resolve(a.value))==null?void 0:u.href)??null:a.value&&!e.external&&!f.value?o(N(s.app.baseURL,a.value),i.resolve):a.value||null,d=e.target||null,h=z(e.noRel?"":e.rel,t.externalRelAttribute,f.value||g.value?"noopener noreferrer":"")||null;if(e.custom){if(!n.default)return null;const c=()=>O(l,{replace:e.replace,external:e.external});return n.default({href:l,navigate:c,get route(){if(!l)return;const m=j(l);return{path:m.pathname,fullPath:m.pathname,get query(){return T(m.search)},hash:m.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l}},rel:h,target:d,isExternal:p.value,isActive:!1,isExactActive:!1})}return P("a",{ref:v,href:l,rel:h,target:d},(y=n.default)==null?void 0:y.call(n))}}})}const K=$(U);function S(t,r){const o=r==="append"?V:D;return q(t)&&!t.startsWith("http")?t:o(t,!0)}function Q(){const t=k();if(t._observer)return t._observer;let r=null;const o=new Map,e=(i,s)=>(r||(r=new IntersectionObserver(a=>{for(const f of a){const g=o.get(f.target);(f.isIntersecting||f.intersectionRatio>0)&&g&&g()}})),o.set(i,s),r.observe(i),()=>{o.delete(i),r.unobserve(i),o.size===0&&(r.disconnect(),r=null)});return t._observer={observe:e}}function W(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{K as _};
