import{T as Z,V as ee,ah as te,B as y,r as v,aI as ae,L as ne,n as le,N as m,s as oe,X as ie,ap as k,ao as ue,bn as re,b as l,am as R,F as S,ar as _,ay as se,bo as ce,bp as de,aV as fe}from"./C9j35KK9.js";import{m as ve,f as me,V as xe,a as ge}from"./C2HjhM8c.js";import{m as he,u as Ve,V as G}from"./C-36LrTt.js";import{f as we}from"./D3j0TLhE.js";import{I as ye}from"./DDhlrQgV.js";const Fe=Z({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...he(),...ve()},"VTextarea"),Re=ee()({name:"VTextarea",directives:{Intersect:ye},inheritAttrs:!1,props:Fe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,D){let{attrs:F,emit:B,slots:u}=D;const o=te(e,"modelValue"),{isFocused:f,focus:E,blur:U}=Ve(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),$=y(()=>{if(F.maxlength)return F.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function j(t,n){var a,i;!e.autofocus||!t||(i=(a=n[0].target)==null?void 0:a.focus)==null||i.call(a)}const M=v(),x=v(),N=ae(""),g=v(),p=y(()=>e.persistentPlaceholder||f.value||e.active);function C(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||E()}function L(t){C(),B("click:control",t)}function X(t){B("mousedown:control",t)}function q(t){t.stopPropagation(),C(),k(()=>{o.value="",de(e["onClick:clear"],t)})}function J(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const i=[n.selectionStart,n.selectionEnd];k(()=>{n.selectionStart=i[0],n.selectionEnd=i[1]})}}const c=v(),h=v(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));ne(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&k(()=>{if(!c.value||!x.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(x.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),i=c.value.scrollHeight,V=parseFloat(t.lineHeight),I=Math.max(parseFloat(e.rows)*V+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),b=parseFloat(e.maxRows)*V+a||1/0,s=fe(i??0,I,b);h.value=Math.floor((s-a)/V),N.value=ue(s)})}le(d),m(o,d),m(()=>e.rows,d),m(()=>e.maxRows,d),m(()=>e.density,d);let r;return m(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),oe(()=>{r==null||r.disconnect()}),ie(()=>{const t=!!(u.counter||e.counter||e.counterValue),n=!!(t||u.details),[a,i]=re(F),{modelValue:V,...I}=G.filterProps(e),b=me(e);return l(G,R({ref:M,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":P.value},e.class],style:e.style},a,I,{centerAffix:h.value===1&&!P.value,focused:f.value}),{...u,default:s=>{let{id:w,isDisabled:H,isDirty:T,isReadonly:K,isValid:Q}=s;return l(xe,R({ref:x,style:{"--v-textarea-control-height":N.value},onClick:L,onMousedown:X,"onClick:clear":q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},b,{id:w.value,active:p.value||T.value,centerAffix:h.value===1&&!P.value,dirty:T.value||e.dirty,disabled:H.value,focused:f.value,error:Q.value===!1}),{...u,default:W=>{let{props:{class:z,...A}}=W;return l(S,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),_(l("textarea",R({ref:g,class:z,value:o.value,onInput:J,autofocus:e.autofocus,readonly:K.value,disabled:H.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:C,onBlur:U},A,i),null),[[se("intersect"),{handler:j},null,{once:!0}]]),e.autoGrow&&_(l("textarea",{class:[z,"v-textarea__sizer"],id:`${A.id}-sizer`,"onUpdate:modelValue":Y=>o.value=Y,ref:c,readonly:!0,"aria-hidden":"true"},null),[[ce,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var w;return l(S,null,[(w=u.details)==null?void 0:w.call(u,s),t&&l(S,null,[l("span",null,null),l(ge,{active:e.persistentCounter||f.value,value:O.value,max:$.value,disabled:e.disabled},u.counter)])])}:void 0})}),we({},M,x,g)}});export{Re as V};
