import{aX as L,B as o,aY as E,ab as g,ag as m,aj as x,T as B,ac as y,aO as P,ap as T,aZ as b}from"./C9j35KK9.js";function w(){const e=y("useRoute");return o(()=>{var a;return(a=e==null?void 0:e.proxy)==null?void 0:a.$route})}function q(){var e,a;return(a=(e=y("useRouter"))==null?void 0:e.proxy)==null?void 0:a.$router}function A(e,a){var d,h;const u=L("RouterLink"),n=o(()=>!!(e.href||e.to)),i=o(()=>(n==null?void 0:n.value)||E(a,"click")||E(e,"click"));if(typeof u=="string"||!("useLink"in u)){const s=g(e,"href");return{isLink:n,isClickable:i,href:s,linkProps:m({href:s})}}const c=o(()=>({...e,to:g(()=>e.to||"")})),l=u.useLink(c.value),t=o(()=>e.to?l:void 0),r=w(),v=o(()=>{var s,p,R;return t.value?e.exact?r.value?((R=t.value.isExactActive)==null?void 0:R.value)&&x(t.value.route.value.query,r.value.query):((p=t.value.isExactActive)==null?void 0:p.value)??!1:((s=t.value.isActive)==null?void 0:s.value)??!1:!1}),k=o(()=>{var s;return e.to?(s=t.value)==null?void 0:s.route.value.href:e.href});return{isLink:n,isClickable:i,isActive:v,route:(d=t.value)==null?void 0:d.route,navigate:(h=t.value)==null?void 0:h.navigate,href:k,linkProps:m({href:k,"aria-current":o(()=>v.value?"page":void 0)})}}const C=B({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let f=!1;function O(e,a){let u=!1,n,i;P&&(T(()=>{window.addEventListener("popstate",c),n=e==null?void 0:e.beforeEach((l,t,r)=>{f?u?a(r):r():setTimeout(()=>u?a(r):r()),f=!0}),i=e==null?void 0:e.afterEach(()=>{f=!1})}),b(()=>{window.removeEventListener("popstate",c),n==null||n(),i==null||i()}));function c(l){var t;(t=l.state)!=null&&t.replaced||(u=!0,setTimeout(()=>u=!1))}}export{q as a,O as b,C as m,A as u};
