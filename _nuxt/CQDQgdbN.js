import G from"./CWwkylGI.js";import{_ as J}from"./6GE5qb33.js";import{_ as K}from"./bp3CQhPa.js";import{_ as Q}from"./Oe347uGr.js";import{T as x,U as P,V as C,X as k,b as a,a8 as Z,ab as _,a9 as ee,aD as te,aI as B,B as f,aa as M,ao as w,r as z,aV as ae,N as H,n as le,s as oe,b6 as re,ah as se,b7 as ne,b8 as ie,am as N,L as ue,aq as ce,F as q,e as de,R as me,Y as ve,b5 as fe,o as D,f as U,w as V,c as ge,a0 as be,g as $,S as he,_ as ye}from"./C9j35KK9.js";import{V as pe,a as E}from"./UAzjJ9zz.js";import{a as Y,u as _e}from"./DT_k8Ksj.js";import{m as Se,u as Ve}from"./CRkQD9Vu.js";import{m as L}from"./CstALlm4.js";import{m as Be,u as xe}from"./DTUtmRYW.js";import{m as O,u as W}from"./NOxhSdmF.js";import{V as Ce}from"./wjBXyAAh.js";import{V as A}from"./DufOT4eb.js";import{V as ke}from"./BD0miwB2.js";import{m as Te,u as Pe}from"./74WDUIk0.js";import{m as Ie,u as we}from"./Ch6VYACP.js";import{V as He}from"./BC1tTZIE.js";import{u as Ae}from"./BdeAwghj.js";import"./CNsMeHU7.js";import"./DKAUf2fm.js";import"./CA2Ofjkw.js";import"./D-AeHYCc.js";import"./C03rp0Wp.js";import"./-OQjmno_.js";import"./BcO4HMLB.js";import"./FqlRDC7B.js";import"./Bsk102WD.js";import"./D_BqIkRL.js";import"./C59DeDNA.js";import"./BPG55ajZ.js";import"./DeWj1TKx.js";import"./Dd3GiGZ3.js";import"./B1PVAuNG.js";import"./Y655z9Rr.js";import"./B9GxKqc9.js";import"./kX5b-xsn.js";import"./CZDjzeCz.js";import"./BVe6K9i-.js";import"./D3j0TLhE.js";import"./CRG_Yqa4.js";import"./jFbDlT-s.js";import"./-VlRP2mm.js";/* empty css        */import"./DDhlrQgV.js";const Le=x({text:String,...P(),...L()},"VToolbarTitle"),De=C()({name:"VToolbarTitle",props:Le(),setup(e,g){let{slots:t}=g;return k(()=>{const n=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[n&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),Ee=[null,"prominent","default","comfortable","compact"],X=x({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ee.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Te(),...P(),...Ie(),...O(),...L({tag:"header"}),...Z()},"VToolbar"),F=C()({name:"VToolbar",props:X(),setup(e,g){var b;let{slots:t}=g;const{backgroundColorClasses:n,backgroundColorStyles:o}=Y(_(e,"color")),{borderClasses:l}=Pe(e),{elevationClasses:m}=we(e),{roundedClasses:i}=W(e),{themeClasses:s}=ee(e),{rtlClasses:u}=te(),v=B(!!(e.extended||(b=t.extension)!=null&&b.call(t))),c=f(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),p=f(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return M({VBtn:{variant:"text"}}),k(()=>{var I;const d=!!(e.title||t.title),h=!!(t.image||e.image),y=(I=t.extension)==null?void 0:I.call(t);return v.value=!!(e.extended||y),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,l.value,m.value,i.value,s.value,u.value,e.class],style:[o.value,e.style]},{default:()=>[h&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(A,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(He,{key:"image-img",cover:!0,src:e.image},null)]),a(A,{defaults:{VTabs:{height:w(c.value)}}},{default:()=>{var r,S,T;return[a("div",{class:"v-toolbar__content",style:{height:w(c.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(r=t.prepend)==null?void 0:r.call(t)]),d&&a(De,{key:"title",text:e.title},{text:t.title}),(S=t.default)==null?void 0:S.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(T=t.append)==null?void 0:T.call(t)])])]}}),a(A,{defaults:{VTabs:{height:w(p.value)}}},{default:()=>[a(ke,null,{default:()=>[v.value&&a("div",{class:"v-toolbar__extension",style:{height:w(p.value)}},[y])]})]})]})}),{contentHeight:c,extensionHeight:p}}}),Ne=x({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Re(e){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=g;let n=0,o=0;const l=z(null),m=B(0),i=B(0),s=B(0),u=B(!1),v=B(!1),c=f(()=>Number(e.scrollThreshold)),p=f(()=>ae((c.value-m.value)/c.value||0)),b=()=>{const d=l.value;if(!d||t&&!t.value)return;n=m.value,m.value="window"in d?d.pageYOffset:d.scrollTop;const h=d instanceof Window?document.documentElement.scrollHeight:d.scrollHeight;if(o!==h){o=h;return}v.value=m.value<n,s.value=Math.abs(m.value-c.value)};return H(v,()=>{i.value=i.value||m.value}),H(u,()=>{i.value=0}),le(()=>{H(()=>e.scrollTarget,d=>{var y;const h=d?document.querySelector(d):window;h&&h!==l.value&&((y=l.value)==null||y.removeEventListener("scroll",b),l.value=h,l.value.addEventListener("scroll",b,{passive:!0}))},{immediate:!0})}),oe(()=>{var d;(d=l.value)==null||d.removeEventListener("scroll",b)}),t&&H(t,b,{immediate:!0}),{scrollThreshold:c,currentScroll:m,currentThreshold:s,isScrollActive:u,scrollRatio:p,isScrollingUp:v,savedScroll:i}}const Ue=x({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...X(),...re(),...Ne(),height:{type:[Number,String],default:64}},"VAppBar"),$e=C()({name:"VAppBar",props:Ue(),emits:{"update:modelValue":e=>!0},setup(e,g){let{slots:t}=g;const n=z(),o=se(e,"modelValue"),l=f(()=>{var S;const r=new Set(((S=e.scrollBehavior)==null?void 0:S.split(" "))??[]);return{hide:r.has("hide"),fullyHide:r.has("fully-hide"),inverted:r.has("inverted"),collapse:r.has("collapse"),elevate:r.has("elevate"),fadeImage:r.has("fade-image")}}),m=f(()=>{const r=l.value;return r.hide||r.fullyHide||r.inverted||r.collapse||r.elevate||r.fadeImage||!o.value}),{currentScroll:i,scrollThreshold:s,isScrollingUp:u,scrollRatio:v}=Re(e,{canScroll:m}),c=f(()=>l.value.hide||l.value.fullyHide),p=f(()=>e.collapse||l.value.collapse&&(l.value.inverted?v.value>0:v.value===0)),b=f(()=>e.flat||l.value.fullyHide&&!o.value||l.value.elevate&&(l.value.inverted?i.value>0:i.value===0)),d=f(()=>l.value.fadeImage?l.value.inverted?1-v.value:v.value:void 0),h=f(()=>{var T,R;if(l.value.hide&&l.value.inverted)return 0;const r=((T=n.value)==null?void 0:T.contentHeight)??0,S=((R=n.value)==null?void 0:R.extensionHeight)??0;return c.value?i.value<s.value||l.value.fullyHide?r+S:r:r+S});ne(f(()=>!!e.scrollBehavior),()=>{ue(()=>{c.value?l.value.inverted?o.value=i.value>s.value:o.value=u.value||i.value<s.value:o.value=!0})});const{ssrBootStyles:y}=Ae(),{layoutItemStyles:I}=ie({id:e.name,order:f(()=>parseInt(e.order,10)),position:_(e,"location"),layoutSize:h,elementSize:B(void 0),active:o,absolute:_(e,"absolute")});return k(()=>{const r=F.filterProps(e);return a(F,N({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...I.value,"--v-toolbar-image-opacity":d.value,height:void 0,...y.value},e.style]},r,{collapse:p.value,flat:b.value}),t)}),{}}}),Fe=x({divider:[Number,String],...P()},"VBreadcrumbsDivider"),Me=C()({name:"VBreadcrumbsDivider",props:Fe(),setup(e,g){let{slots:t}=g;return k(()=>{var n;return a("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((n=t==null?void 0:t.default)==null?void 0:n.call(t))??e.divider])}),{}}}),ze=x({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...P(),...Se(),...L({tag:"li"})},"VBreadcrumbsItem"),j=C()({name:"VBreadcrumbsItem",props:ze(),setup(e,g){let{slots:t,attrs:n}=g;const o=Ve(e,n),l=f(()=>{var u;return e.active||((u=o.isActive)==null?void 0:u.value)}),m=f(()=>l.value?e.activeColor:e.color),{textColorClasses:i,textColorStyles:s}=_e(m);return k(()=>a(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":l.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:l.value&&e.activeClass},i.value,e.class],style:[s.value,e.style],"aria-current":l.value?"page":void 0},{default:()=>{var u,v;return[o.isLink.value?a("a",N({class:"v-breadcrumbs-item--link",onClick:o.navigate},o.linkProps),[((v=t.default)==null?void 0:v.call(t))??e.title]):((u=t.default)==null?void 0:u.call(t))??e.title]}})),{}}}),qe=x({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:ce,items:{type:Array,default:()=>[]},...P(),...Be(),...O(),...L({tag:"ul"})},"VBreadcrumbs"),Ye=C()({name:"VBreadcrumbs",props:qe(),setup(e,g){let{slots:t}=g;const{backgroundColorClasses:n,backgroundColorStyles:o}=Y(_(e,"bgColor")),{densityClasses:l}=xe(e),{roundedClasses:m}=W(e);M({VBreadcrumbsDivider:{divider:_(e,"divider")},VBreadcrumbsItem:{activeClass:_(e,"activeClass"),activeColor:_(e,"activeColor"),color:_(e,"color"),disabled:_(e,"disabled")}});const i=f(()=>e.items.map(s=>typeof s=="string"?{item:{title:s},raw:s}:{item:s,raw:s}));return k(()=>{const s=!!(t.prepend||e.icon);return a(e.tag,{class:["v-breadcrumbs",n.value,l.value,m.value,e.class],style:[o.value,e.style]},{default:()=>{var u;return[s&&a("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?a(A,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):a(Ce,{key:"prepend-icon",start:!0,icon:e.icon},null)]),i.value.map((v,c,p)=>{var h;let{item:b,raw:d}=v;return a(q,null,[((h=t.item)==null?void 0:h.call(t,{item:b,index:c}))??a(j,N({key:c,disabled:c>=p.length-1},typeof b=="string"?{title:b}:b),{default:t.title?()=>{var y;return(y=t.title)==null?void 0:y.call(t,{item:b,index:c})}:void 0}),c<p.length-1&&a(Me,null,{default:t.divider?()=>{var y;return(y=t.divider)==null?void 0:y.call(t,{item:d,index:c})}:void 0})])}),(u=t.default)==null?void 0:u.call(t)]}})}),{}}}),Oe=de({__name:"AppBar",setup(e){const g=me(),t=ve();return fe(()=>{document.body.classList.add("app-bar--enabled")}),(n,o)=>{const l=G,m=J,i=K,s=Q;return D(),U($e,{class:he({"pl-9":$(t).options.guides}),flat:""},{default:V(()=>[a(pe,{"no-gutters":""},{default:V(()=>[a(E,{class:"flex-grow-0 text-left","align-self":"center",style:{"min-width":"244px"}},{default:V(()=>[a(l,{to:"/",title:"Planner",class:"mx-4 mt-1"})]),_:1}),a(E,{class:"flex-grow-1 text-left","align-self":"center"},{default:V(()=>[a(Ye,{class:"ma-0 px-2"},{default:V(()=>[(D(!0),ge(q,null,be($(g).userList,u=>(D(),U(j,{to:u.route},{default:V(()=>[a(m,{user:u},null,8,["user"])]),_:2},1032,["to"]))),256))]),_:1})]),_:1}),a(E,{class:"text-right text-overline px-4","align-self":"center"},{default:V(()=>[a(i,{class:"text-grey"}),a(s,{class:"ms-2"})]),_:1})]),_:1})]),_:1},8,["class"])}}}),Nt=ye(Oe,[["__scopeId","data-v-0b8dbecc"]]);export{Nt as default};
