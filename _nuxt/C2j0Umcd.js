import{e as p,r as v,n as g,N as d,o as x,f as y,aX as V}from"./C9j35KK9.js";const b=p({__name:"contenteditable",props:{tag:String,contenteditable:{type:[Boolean,String],default:!0},modelValue:String,noHtml:{type:Boolean,default:!0},noNl:{type:Boolean,default:!1}},emits:{returned:String,"update:modelValue":String},setup(r,{emit:c}){const t=r;function u(e,n,l){return e.split(n).join(l)}const a=v();function i(){return t.noHtml?a.value.innerText:a.value.innerHTML}function o(e){t.noHtml?a.value.innerText=e:a.value.innerHTML=e}function f(e){c("update:modelValue",i())}function s(e){e.preventDefault();let n=(e.originalEvent||e).clipboardData.getData("text/plain");t.noNl&&(n=u(n,`\r
`," "),n=u(n,`
`," "),n=u(n,"\r"," ")),window.document.execCommand("insertText",!1,n)}function m(e){e.key=="Enter"&&t.noNl&&(e.preventDefault(),c("returned",i()))}return g(()=>{var e;o((e=t.modelValue)!=null?e:"")}),d(()=>t.modelValue,(e,n)=>{e!=i()&&o(e??"")}),d(()=>t.noHtml,(e,n)=>{var l;o((l=t.modelValue)!=null?l:"")}),d(()=>t.tag,(e,n)=>{var l;o((l=t.modelValue)!=null?l:"")},{flush:"post"}),(e,n)=>(x(),y(V(r.tag),{contenteditable:r.contenteditable,onInput:f,onBlur:f,onPaste:s,onKeypress:m,ref_key:"element",ref:a},null,40,["contenteditable"]))}});export{b as _};
