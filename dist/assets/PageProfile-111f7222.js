import{k as c,l as ee,o as d,c as b,m as ve,v as me,u as k,b as g,n as ge,q as Re,s as Ie,e as P,t as M,_ as H,r as A,f as h,w as x,d as D,h as T,x as I,y as L,z as K,A as Be,B as Le,g as Q,C as _e,D as $e,E as O,F as j,i as Z,G as C,H as He,j as ze,I as Ye,J as Xe,K as We}from"./index-9e0a579a.js";import{_ as Ue}from"./ProfileAvatar.vue_vue_type_script_setup_true_lang-27b9a6cd.js";const Fe={__name:"ToolRuler",props:{left:Boolean,right:Boolean},setup(e){const o=e,n=c(),l=c(0);return ee(()=>{n.value.max=window.innerHeight}),(t,a)=>(d(),b("div",{class:Ie(["rulers",{"rulers--left":o.left,"rulers--right":o.right}])},[ve(g("input",{ref_key:"pageRulerY",ref:n,"onUpdate:modelValue":a[0]||(a[0]=r=>ge(l)?l.value=r:null),type:"range"},null,512),[[me,k(l)]]),g("div",{class:"ruler ruler--horizontal",style:Re({top:`${k(l)}px`})},null,4)],2))}},Ge={class:"igp-profile-media igp-profile-media--story"},qe=["src"],Je={class:"igp-profile-media--story-slider__value"},Ke=P({__name:"ProfileMediaStory",props:{media:Object},setup(e){const o=e,n=c(null),l=c(null),t=c(o.media.cover);ee(()=>{n.value.addEventListener("loadedmetadata",function(){t.value=t.value*10,n.value.currentTime=t.value/10,l.value.max=n.value.duration*10},!1)});function a(){n.value.currentTime=t.value/10}return(r,f)=>(d(),b("div",Ge,[g("video",{ref_key:"reel",ref:n,src:e.media.file.path},null,8,qe),ve(g("input",{ref_key:"slider",ref:l,"onUpdate:modelValue":f[0]||(f[0]=u=>ge(t)?t.value=u:null),type:"range",class:"igp-profile-media--story-slider",onChange:a},null,544),[[me,k(t)]]),g("div",Je,M(k(t)/10),1)]))}});const Qe=H(Ke,[["__scopeId","data-v-f59db4a2"]]),Ze={class:"igp-profile-media igp-profile-media--video"},et=["src"],tt={class:"igp-profile-media--video-slider__value"},nt={class:"igp-profile-media__icon"},ot=P({__name:"ProfileMediaVideo",props:{media:Object},setup(e){const o=e,n=c(null),l=c(null),t=c(o.media.cover);ee(()=>{n.value.addEventListener("loadedmetadata",function(){t.value=t.value*10,n.value.currentTime=t.value/10,l.value.max=n.value.duration*10},!1)});function a(){n.value.currentTime=t.value/10}return(r,f)=>{const u=A("v-icon");return d(),b("div",Ze,[g("video",{ref_key:"video",ref:n,src:e.media.file.path},null,8,et),ve(g("input",{ref_key:"slider",ref:l,"onUpdate:modelValue":f[0]||(f[0]=p=>ge(t)?t.value=p:null),type:"range",class:"igp-profile-media--video-slider",onChange:a},null,544),[[me,k(t)]]),g("div",tt,M(k(t)/10),1),g("div",nt,[h(u,null,{default:x(()=>[D("mdi-play")]),_:1})])])}}});const lt=H(ot,[["__scopeId","data-v-fae6eeec"]]),at=P({__name:"ProfileMediaImage",props:{media:Object},setup(e){return(o,n)=>{const l=A("v-img");return d(),T(l,{class:"igp-profile-media igp-profile-media--image",src:e.media.file.path},null,8,["src"])}}});const je=H(at,[["__scopeId","data-v-d4d0df33"]]);/**
 * Vue 3 Carousel 0.2.12
 * (c) 2023
 * @license MIT
 */const S={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},Oe={itemsToShow:{default:S.itemsToShow,type:Number},itemsToScroll:{default:S.itemsToScroll,type:Number},wrapAround:{default:S.wrapAround,type:Boolean},throttle:{default:S.throttle,type:Number},snapAlign:{default:S.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:S.transition,type:Number},breakpoints:{default:S.breakpoints,type:Object},autoplay:{default:S.autoplay,type:Number},pauseAutoplayOnHover:{default:S.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:S.mouseDrag,type:Boolean},touchDrag:{default:S.touchDrag,type:Boolean},dir:{default:S.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}};function it({config:e,slidesCount:o}){const{snapAlign:n,wrapAround:l,itemsToShow:t=1}=e;if(l)return Math.max(o-1,0);let a;switch(n){case"start":a=o-t;break;case"end":a=o-1;break;case"center":case"center-odd":a=o-Math.ceil((t-.5)/2);break;case"center-even":a=o-Math.ceil(t/2);break;default:a=0;break}return Math.max(a,0)}function st({config:e,slidesCount:o}){const{wrapAround:n,snapAlign:l,itemsToShow:t=1}=e;let a=0;if(n||t>o)return a;switch(l){case"start":a=0;break;case"end":a=t-1;break;case"center":case"center-odd":a=Math.floor((t-1)/2);break;case"center-even":a=Math.floor((t-2)/2);break;default:a=0;break}return a}function fe({val:e,max:o,min:n}){return o<n?e:Math.min(Math.max(e,n),o)}function rt({config:e,currentSlide:o,slidesCount:n}){const{snapAlign:l,wrapAround:t,itemsToShow:a=1}=e;let r=o;switch(l){case"center":case"center-odd":r-=(a-1)/2;break;case"center-even":r-=(a-2)/2;break;case"end":r-=a-1;break}return t?r:fe({val:r,max:n-a,min:0})}function ut(e){var o,n,l,t;return e?((o=e[0])===null||o===void 0?void 0:o.children)==="v-if"||((l=(n=e[0])===null||n===void 0?void 0:n.type)===null||l===void 0?void 0:l.name)==="CarouselSlide"?e.filter(a=>{var r;return((r=a.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"}):((t=e[0])===null||t===void 0?void 0:t.children)||[]:[]}function pe({val:e,max:o,min:n=0}){return e>o?pe({val:e-(o+1),max:o,min:n}):e<n?pe({val:e+(o+1),max:o,min:n}):e}function ct(e,o){let n;return o?function(...l){const t=this;n||(e.apply(t,l),n=!0,setTimeout(()=>n=!1,o))}:e}function dt(e,o){let n;return function(...l){n&&clearTimeout(n),n=setTimeout(()=>{e(...l),n=null},o)}}var _t=P({name:"ARIA",setup(){const e=I("currentSlide",c(0)),o=I("slidesCount",c(0));return()=>L("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${e.value+1} of ${o.value}`)}}),ft=P({name:"Carousel",props:Oe,setup(e,{slots:o,emit:n,expose:l}){var t;const a=c(null),r=c([]),f=c(0),u=c(0);let p=c({}),v=Object.assign({},S);const s=K(Object.assign({},v)),_=c((t=e.modelValue)!==null&&t!==void 0?t:0),z=c(0),he=c(0),N=c(0),Y=c(0);let R,te;O("config",s),O("slidesCount",u),O("currentSlide",_),O("maxSlide",N),O("minSlide",Y),O("slideWidth",f);function ne(){const i=Object.assign(Object.assign({},e),e.settings);p=c(Object.assign({},i.breakpoints)),v=Object.assign(Object.assign({},i),{settings:void 0,breakpoints:void 0}),ye(v)}function U(){const i=Object.keys(p.value).map(y=>Number(y)).sort((y,$)=>+$-+y);let m=Object.assign({},v);i.some(y=>window.matchMedia(`(min-width: ${y}px)`).matches?(m=Object.assign(Object.assign({},m),p.value[y]),!0):!1),ye(m)}function ye(i){Object.entries(i).forEach(([m,y])=>s[m]=y)}const be=dt(()=>{Object.keys(p.value).length&&(U(),X()),F()},16);function F(){if(!a.value)return;const i=a.value.getBoundingClientRect();f.value=i.width/s.itemsToShow}function X(){u.value<=0||(he.value=Math.ceil((u.value-1)/2),N.value=it({config:s,slidesCount:u.value}),Y.value=st({config:s,slidesCount:u.value}),s.wrapAround||(_.value=fe({val:_.value,max:N.value,min:Y.value})))}ee(()=>{Object.keys(p.value).length&&U(),Be(()=>{X(),F(),De(),n("init")}),we(),window.addEventListener("resize",be,{passive:!0})}),Le(()=>{te&&clearTimeout(te),R&&clearInterval(R),window.removeEventListener("resize",be,{passive:!0})});let w=!1;const G={x:0,y:0},q={x:0,y:0},E=K({x:0,y:0}),oe=c(!1),Ee=()=>{oe.value=!0},Ve=()=>{oe.value=!1};function xe(i){["INPUT","TEXTAREA"].includes(i.target.tagName)||(w=i.type==="touchstart",!(!w&&i.button!==0||B.value)&&(w||i.preventDefault(),G.x=w?i.touches[0].clientX:i.clientX,G.y=w?i.touches[0].clientY:i.clientY,document.addEventListener(w?"touchmove":"mousemove",le,!0),document.addEventListener(w?"touchend":"mouseup",Se,!0)))}let le=()=>{};function De(){var i;le=ct(m=>{q.x=w?m.touches[0].clientX:m.clientX,q.y=w?m.touches[0].clientY:m.clientY;const y=q.x-G.x,$=q.y-G.y;E.y=$,E.x=y},(i=s.throttle)!==null&&i!==void 0?i:16)}function Se(){const i=s.dir==="rtl"?-1:1,m=Math.sign(E.x)*.4,y=Math.round(E.x/f.value+m)*i;if(y&&!w){const $=re=>{re.stopPropagation(),window.removeEventListener("click",$,!0)};window.addEventListener("click",$,!0)}V(_.value-y),E.x=0,E.y=0,document.removeEventListener(w?"touchmove":"mousemove",le,!0),document.removeEventListener(w?"touchend":"mouseup",Se,!0)}function we(){!s.autoplay||s.autoplay<=0||(R=setInterval(()=>{s.pauseAutoplayOnHover&&oe.value||J()},s.autoplay))}function ke(){R&&(clearInterval(R),R=null),we()}const B=c(!1);function V(i){const m=s.wrapAround?i:fe({val:i,max:N.value,min:Y.value});_.value===m||B.value||(n("slide-start",{slidingToIndex:i,currentSlideIndex:_.value,prevSlideIndex:z.value,slidesCount:u.value}),B.value=!0,z.value=_.value,_.value=m,te=setTimeout(()=>{if(s.wrapAround){const y=pe({val:m,max:N.value,min:0});y!==_.value&&(_.value=y,n("loop",{currentSlideIndex:_.value,slidingToIndex:i}))}n("update:modelValue",_.value),n("slide-end",{currentSlideIndex:_.value,prevSlideIndex:z.value,slidesCount:u.value}),B.value=!1,ke()},s.transition))}function J(){V(_.value+s.itemsToScroll)}function ae(){V(_.value-s.itemsToScroll)}const Pe={slideTo:V,next:J,prev:ae};O("nav",Pe),O("isSliding",B);const Ce=Q(()=>rt({config:s,currentSlide:_.value,slidesCount:u.value}));O("slidesToScroll",Ce);const Ne=Q(()=>{const i=s.dir==="rtl"?-1:1,m=Ce.value*f.value*i;return{transform:`translateX(${E.x-m}px)`,transition:`${B.value?s.transition:0}ms`,margin:s.wrapAround?`0 -${u.value*f.value}px`:"",width:"100%"}});function Te(){ne(),U(),X(),F(),ke()}Object.keys(Oe).forEach(i=>{["modelValue"].includes(i)||_e(()=>e[i],Te)}),_e(()=>e.modelValue,i=>{i!==_.value&&V(Number(i))}),_e(u,X),ne();const Me={config:s,slidesCount:u,slideWidth:f,next:J,prev:ae,slideTo:V,currentSlide:_,maxSlide:N,minSlide:Y,middleSlide:he};l({updateBreakpointsConfigs:U,updateSlidesData:X,updateSlideWidth:F,initDefaultConfigs:ne,restartCarousel:Te,slideTo:V,next:J,prev:ae,nav:Pe,data:Me});const ie=o.default||o.slides,se=o.addons,Ae=K(Me);return()=>{const i=ut(ie==null?void 0:ie(Ae)),m=(se==null?void 0:se(Ae))||[];i.forEach((ue,ce)=>ue.props.index=ce);let y=i;if(s.wrapAround){const ue=i.map((de,W)=>$e(de,{index:-i.length+W,isClone:!0,key:`clone-before-${W}`})),ce=i.map((de,W)=>$e(de,{index:i.length+W,isClone:!0,key:`clone-after-${W}`}));y=[...ue,...i,...ce]}r.value=i,u.value=Math.max(i.length,1);const $=L("ol",{class:"carousel__track",style:Ne.value,onMousedownCapture:s.mouseDrag?xe:null,onTouchstartPassiveCapture:s.touchDrag?xe:null},y),re=L("div",{class:"carousel__viewport"},$);return L("section",{ref:a,class:{carousel:!0,"carousel--rtl":s.dir==="rtl"},dir:s.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:Ee,onMouseleave:Ve},[re,m,L(_t)])}}}),pt=P({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:o}){const n=I("config",K(Object.assign({},S))),l=I("currentSlide",c(0)),t=I("slidesToScroll",c(0)),a=I("slideWidth",c(0)),r=I("isSliding",c(!1)),f=Q(()=>({width:a.value?`${a.value}px`:"100%"})),u=()=>e.index===l.value,p=()=>e.index===l.value-1,v=()=>e.index===l.value+1,s=()=>{const _=Math.floor(t.value),z=Math.ceil(t.value+n.itemsToShow-1);return e.index>=_&&e.index<=z};return()=>{var _;return L("li",{style:f.value,class:{carousel__slide:!0,"carousel_slide--clone":e.isClone,"carousel__slide--visible":s(),"carousel__slide--active":u(),"carousel__slide--prev":p(),"carousel__slide--next":v(),"carousel__slide--sliding":r.value},"aria-hidden":!s()},(_=o.default)===null||_===void 0?void 0:_.call(o))}}});const vt={class:"igp-profile-media igp-profile-media--album"},mt={class:"igp-profile-media__icon"},gt=P({__name:"ProfileMediaAlbum",props:{media:Object},setup(e){return(o,n)=>{const l=je,t=A("v-icon");return d(),b("div",vt,[h(k(ft),null,{default:x(()=>[(d(!0),b(j,null,Z(e.media.album,(a,r)=>(d(),T(k(pt),{key:r},{default:x(()=>[h(l,{media:a},null,8,["media"])]),_:2},1024))),128))]),_:1}),g("div",mt,[h(t,null,{default:x(()=>[D("mdi-folder-multiple-image")]),_:1})])])}}}),ht={class:"igp-profile-page__media"},yt=P({__name:"ProfilePageMedia",props:{profile:Object,mode:String},setup(e){return(o,n)=>{const l=je,t=A("v-col"),a=gt,r=lt,f=Qe,u=A("v-row"),p=A("v-container");return d(),b("div",ht,[h(p,{class:"pt-1 px-0"},{default:x(()=>[e.mode==="posts"&&e.profile.media.posts.length>0?(d(),T(u,{key:0},{default:x(()=>[(d(!0),b(j,null,Z(e.profile.media.posts,(v,s)=>(d(),b(j,{key:s},[v.type==="image"?(d(),T(t,{key:0,cols:4},{default:x(()=>[h(l,{media:v},null,8,["media"])]),_:2},1024)):C("",!0),v.type==="album"?(d(),T(t,{key:1,cols:4},{default:x(()=>[h(a,{media:v},null,8,["media"])]),_:2},1024)):C("",!0),v.type==="video"?(d(),T(t,{key:2,cols:4},{default:x(()=>[h(r,{media:v},null,8,["media"])]),_:2},1024)):C("",!0),v.type==="reel"?(d(),T(t,{key:3,cols:4},{default:x(()=>[h(f,{media:v},null,8,["media"])]),_:2},1024)):C("",!0)],64))),128))]),_:1})):C("",!0),e.mode==="reels"&&e.profile.media.reels.length>0?(d(),T(u,{key:1},{default:x(()=>[(d(!0),b(j,null,Z(e.profile.media.reels,(v,s)=>(d(),T(f,{key:s,media:v},null,8,["media"]))),128))]),_:1})):C("",!0)]),_:1})])}}});const bt={class:"igp-profile-page__tabs"},xt=["onClick"],St=P({__name:"ProfilePageTabs",props:{profile:Object,active:String},emits:["select"],setup(e,{emit:o}){var t,a;const n=e,l=[];return((t=n.profile)==null?void 0:t.media.posts.length)>0&&l.push({name:"posts",label:"Posts",icon:"mdi-grid"}),((a=n.profile)==null?void 0:a.media.reels.length)>0&&l.push({name:"reels",label:"Reels",icon:"mdi-play-box-multiple-outline"}),(r,f)=>{const u=A("v-icon");return d(),b("div",bt,[(d(),b(j,null,Z(l,(p,v)=>{var s;return d(),b(j,null,[((s=e.profile)==null?void 0:s.media[p.name].length)>0?(d(),b("div",{key:v,class:Ie(["igp-profile-page__tabs__tab",{"igp-profile-page__tabs__tab--active":e.active===p.name}]),onClick:_=>o("select",p.name)},[h(u,{size:"15"},{default:x(()=>[D(M(p.icon),1)]),_:2},1024),D(" "+M(p.label),1)],10,xt)):C("",!0)],64)}),64))])}}});const wt=H(St,[["__scopeId","data-v-0ff337b3"]]),kt={class:"igp-profile-page__header pb-10 mb-5"},Pt=["textContent"],Ct={class:"igp-profile-page__header__stats mb-5"},Tt=["textContent"],Mt=["textContent"],At=["textContent"],$t=["textContent"],Ot=["innerHTML"],It=["href","textContent"],jt=P({__name:"ProfilePageHeader",props:{profile:Object},setup(e){return(o,n)=>{const l=Ue,t=A("v-col"),a=A("v-row");return d(),b("div",kt,[h(a,null,{default:x(()=>[h(t,{cols:"4",class:"igp-profile-page__header__avatar text-center"},{default:x(()=>{var r;return[h(l,{size:150,avatar:(r=e.profile)==null?void 0:r.avatar},null,8,["avatar"])]}),_:1}),h(t,{cols:"8"},{default:x(()=>{var r,f,u,p,v,s;return[g("div",{class:"igp-profile-page__header__username mb-5",textContent:M(e.profile.fields.username)},null,8,Pt),g("ul",Ct,[g("li",null,[g("b",{textContent:M((r=e.profile)==null?void 0:r.media.posts.length)},null,8,Tt),D(" posts ")]),g("li",null,[g("b",{textContent:M((f=e.profile)==null?void 0:f.fields.followers_count)},null,8,Mt),D(" followers ")]),g("li",null,[g("b",{textContent:M((u=e.profile)==null?void 0:u.fields.follows_count)},null,8,At),D(" following ")])]),g("p",{class:"igp-profile-page__header__name",textContent:M((p=e.profile)==null?void 0:p.fields.name)},null,8,$t),g("p",{class:"igp-profile-page__header__biography",innerHTML:(v=e.profile)==null?void 0:v.fields.biography},null,8,Ot),(s=e.profile)!=null&&s.fields.website?(d(),b("a",{key:0,class:"igp-profile-page__header__website",href:e.profile.fields.website,target:"_blank",textContent:M(e.profile.fields.website.replace("http://","").replace("https://",""))},null,8,It)):C("",!0)]}),_:1})]),_:1})])}}});const Et=H(jt,[["__scopeId","data-v-2dcb49bd"]]),Vt={key:0,class:"igp-profile-page"},Dt=P({__name:"ProfilePage",props:{profile:Object},setup(e){const o=c("posts");return(n,l)=>{const t=Et,a=wt,r=yt,f=A("v-container");return e.profile?(d(),b("div",Vt,[h(f,null,{default:x(()=>[h(t,{profile:e.profile},null,8,["profile"]),h(a,{profile:e.profile,active:k(o),onSelect:l[0]||(l[0]=u=>o.value=u)},null,8,["profile","active"]),e.profile.media?(d(),T(r,{key:0,profile:e.profile,mode:k(o)},null,8,["profile","mode"])):C("",!0)]),_:1})])):C("",!0)}}});const Nt=H(Dt,[["__scopeId","data-v-5923658f"]]),Rt=He("profile",()=>{const e=ze(),o=c({});function n(t){o.value=t}async function l(t){if(Object.prototype.hasOwnProperty.call(e.profiles,t))return o.value=e.profiles[t],!0;throw new Error("Profile not found")}return{profile:o,setProfile:n,loadProfile:l}}),Ht=P({__name:"PageProfile",setup(e){const o=Xe(),n=We(),l=Rt(),t=Q(()=>l.profile),a=I("options");return Ye(async()=>{await l.loadProfile(o.params.username).catch(r=>{console.error(r),n.push({name:"index",hash:"#404"})})}),(r,f)=>{const u=Nt,p=Fe;return d(),b(j,null,[h(u,{profile:k(t)},null,8,["profile"]),k(a).rulers?(d(),b(j,{key:0},[h(p,{left:""}),h(p,{right:""})],64)):C("",!0)],64)}}});export{Ht as default};