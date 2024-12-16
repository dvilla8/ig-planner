import{S as p,W as ee,ah as te,B as y,r as v,aA as ae,L as ne,n as le,N as m,s as oe,Y as ue,as as I,ar as ie,bj as re,b as l,am as R,F as S,au as _,b7 as se,bk as ce,bl as de,aT as fe}from"./DQ3ZSoQy.js";import{m as ve,f as me,V as xe,a as ge}from"./B0zwKj1h.js";import{m as he,u as we,V as G}from"./BKbAMuvn.js";import{f as Ve}from"./D3j0TLhE.js";import{I as ye}from"./DJTKTUe1.js";const Fe=p({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...he(),...ve()},"VTextarea"),Re=ee()({name:"VTextarea",directives:{Intersect:ye},inheritAttrs:!1,props:Fe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,D){let{attrs:F,emit:B,slots:i}=D;const o=te(e,"modelValue"),{isFocused:f,focus:E,blur:U}=we(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),j=y(()=>{if(F.maxlength)return F.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function $(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const M=v(),x=v(),N=ae(""),g=v(),L=y(()=>e.persistentPlaceholder||f.value||e.active);function C(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||E()}function W(t){C(),B("click:control",t)}function Y(t){B("mousedown:control",t)}function q(t){t.stopPropagation(),C(),I(()=>{o.value="",de(e["onClick:clear"],t)})}function J(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];I(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));ne(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&I(()=>{if(!c.value||!x.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(x.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),b=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),k=parseFloat(e.maxRows)*w+a||1/0,s=fe(u??0,b,k);h.value=Math.floor((s-a)/w),N.value=ie(s)})}le(d),m(o,d),m(()=>e.rows,d),m(()=>e.maxRows,d),m(()=>e.density,d);let r;return m(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),oe(()=>{r==null||r.disconnect()}),ue(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=re(F),{modelValue:w,...b}=G.filterProps(e),k=me(e);return l(G,R({ref:M,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":P.value},e.class],style:e.style},a,b,{centerAffix:h.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{id:V,isDisabled:A,isDirty:H,isReadonly:K,isValid:Q}=s;return l(xe,R({ref:x,style:{"--v-textarea-control-height":N.value},onClick:W,onMousedown:Y,"onClick:clear":q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},k,{id:V.value,active:L.value||H.value,centerAffix:h.value===1&&!P.value,dirty:H.value||e.dirty,disabled:A.value,focused:f.value,error:Q.value===!1}),{...i,default:X=>{let{props:{class:T,...z}}=X;return l(S,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),_(l("textarea",R({ref:g,class:T,value:o.value,onInput:J,autofocus:e.autofocus,readonly:K.value,disabled:A.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:C,onBlur:U},z,u),null),[[se("intersect"),{handler:$},null,{once:!0}]]),e.autoGrow&&_(l("textarea",{class:[T,"v-textarea__sizer"],id:`${z.id}-sizer`,"onUpdate:modelValue":Z=>o.value=Z,ref:c,readonly:!0,"aria-hidden":"true"},null),[[ce,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(S,null,[(V=i.details)==null?void 0:V.call(i,s),t&&l(S,null,[l("span",null,null),l(ge,{active:e.persistentCounter||f.value,value:O.value,max:j.value,disabled:e.disabled},i.counter)])])}:void 0})}),Ve({},M,x,g)}});export{Re as V};
