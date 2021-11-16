var B=Object.defineProperty,C=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var T=(t,s,n)=>s in t?B(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,k=(t,s)=>{for(var n in s||(s={}))A.call(s,n)&&T(t,n,s[n]);if($)for(var n of $(s))E.call(s,n)&&T(t,n,s[n]);return t},O=(t,s)=>C(t,W(s));import{o as i,c as a,r as d,n as S,h as I,d as u,a as e,b as z,t as M,e as j,f as g,u as r,g as U,_ as V,i as _,j as P}from"./app.dfddf832.js";import{_ as H}from"./index.b8ff6443.js";const p={props:{width:{type:String,default:null}},setup(t){return(s,n)=>(i(),a("aside",{class:"w-aside",style:S({"--w-aside-width":t.width})},[d(s.$slots,"default")],4))}};p.install=t=>{t.component(p.name,p)};var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:p});const N=({type:t,vertical:s,text:n},{slots:o})=>{console.log(o);const c="w-badge";return I("span",{class:[c,c+"--"+t,s]},n||o.default?o.default:null)};N.props={type:{type:String,default:"primary"},vertical:{type:String,default:"top"},text:String};var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});const R={class:"w-card-header"},G={key:0,class:"w-card-title"},J={class:"w-card-body"},K={key:0,class:"w-card-footer"},L={name:"w-card"};function Q(t,{emit:s}){const n=t,o=u(()=>n.type?`w-card-${n.type}`:"");function c(){s("desc-click")}return(l,x)=>(i(),a("div",{class:g(["w-card",[r(o)]])},[e("div",R,[l.$slots.title||t.title?(i(),a("h3",G,[d(l.$slots,"title",{},()=>[z(M(t.title),1)])])):j("v-if",!0),l.$slots.desc||t.desc?(i(),a("div",{key:1,class:"w-card-desc",onClick:c},[d(l.$slots,"desc",{},()=>[z(M(t.desc),1)])])):j("v-if",!0)]),e("div",J,[d(l.$slots,"default")]),l.$slots.footer||t.footer?(i(),a("div",K,[d(l.$slots,"footer")])):j("v-if",!0)],2))}const h=Object.assign(L,{props:{type:String,title:{default:()=>{},type:[Object,String]},footer:{default:()=>{},type:[Object,String]},desc:String},emits:["desc-click"],setup:Q});h.install=t=>{t.component(h.name,h)};var X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:h});const y={props:{direction:{type:String,default:""}},setup(t){const s=t,n=U(),o=u(()=>s.direction==="vertical"?!0:s.direction==="horizontal"?!1:n&&n.default?n.default().some(l=>{const x=l.type.name;return x==="ElHeader"||x==="ElFooter"}):!1);return(c,l)=>(i(),a("section",{class:g(["w-container",{"is-vertical":r(o)}])},[d(c.$slots,"default")],2))}};y.install=t=>{t.component(y.name,y)};var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y});const f={props:{height:{type:String,default:null}},setup(t){return(s,n)=>(i(),a("footer",{class:"w-footer",style:S({"--w-footer-height":t.height})},[d(s.$slots,"default")],4))}};f.install=t=>{t.component(f.name,f)};var Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:f});const m={props:{height:{type:String,default:null}},setup(t){return(s,n)=>(i(),a("header",{class:"w-header",style:S({"--w-header-height":t.height})},[d(s.$slots,"default")],4))}};m.install=t=>{t.component(m.name,m)};var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:m});const te={class:"w-icon"},se=["xlink:href"],b={props:{name:String,useClass:String},setup(t){const s=t,n=u(()=>s.name?`#${s.name}`:"#");return(o,c)=>(i(),a("svg",te,[e("use",{"xlink:href":r(n),class:g([t.useClass])},null,10,se)]))}};b.install=t=>{t.component(b.name,b)};var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:b});const oe={},le={class:"w-main"};function ie(t,s){return i(),a("main",le,[d(t.$slots,"default")])}var v=V(oe,[["render",ie]]);v.install=t=>{t.component(v.name,v)};var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:v});const re={name:"w-tooltip",props:{tip:String,direction:String},setup(t){return{tooltipType:u(()=>t.direction?`w-tooltip-${t.direction}`:"")}}};function ce(t,s,n,o,c,l){return i(),a("span",{class:g(["w-tooltip",[o.tooltipType]]),"data-tooltip":"tip"},[d(t.$slots,"default")],2)}var w=V(re,[["render",ce]]);w.install=t=>{t.component(w.name,w)};var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const _e="w-design-vue",ue="0.0.10",ge="W Design Vue",pe="A simple components UI based on Vue 3.x + Vite 2.x.",he="MIT",ye="Weijuer<https://github.com/weijuer>",fe={type:"git",url:"git+https://github.com/weijuer/w-design-vue.git"},me="https://github.com/weijuer/w-design-vue/tree/master/#readme",be={url:"https://github.com/weijuer/w-design-vue/issues"},ve=["vitejs","vue3","component","components","ui","framework","frontend"],we=["lib","packages"],xe="lib/w-design-vue.umd.js",Se="lib/w-design-vue.es.js",je="lib/style.css",$e={".":{import:"./lib/w-design-vue.es.js",require:"./lib/w-design-vue.umd.js"},"./lib/style.css":"./lib/style.css"},Te={dev:"vite",build:"vite build",serve:"vite preview","docs:dev":"vitepress dev docs","docs:build":"vitepress build docs","docs:serve":"vitepress serve docs"},ke={vue:"^3.2.21"},Oe={node:">=12.0.0"},ze={"@vue/compiler-sfc":">=3.1.0",vue:">=3.1.0",vite:">=2.0.0"},Me={"@vitejs/plugin-vue":"^1.9.4","@vue/compiler-sfc":"^3.2.21",eslint:"^8.2.0","eslint-plugin-vue":"^8.0.3",mockjs:"^1.1.0",msw:"latest",sass:"^1.43.4",stylus:"^0.55.0",vite:"^2.6.14",vitepress:"^0.20.1"},Ve={workerDirectory:"public"};var Ne={name:_e,version:ue,title:ge,description:pe,private:!0,license:he,author:ye,repository:fe,homepage:me,bugs:be,keywords:ve,files:we,main:xe,module:Se,style:je,exports:$e,scripts:Te,dependencies:ke,engines:Oe,peerDependencies:ze,devDependencies:Me,msw:Ve};const De=Ne.version,Be=()=>{const t={"./aside/index.js":q,"./badge/badge.js":F,"./button/index.js":H,"./card/index.js":X,"./container/index.js":Y,"./footer/index.js":Z,"./header/index.js":ee,"./icon/index.js":ne,"./main/index.js":ae,"./tooltip/index.js":de},s={};return Object.keys(t).forEach(n=>{var l;const o=n.split("/")[1],c=`W${o.substring(0,1).toUpperCase()+o.substring(1)}`;s[c]=(l=t[n])==null?void 0:l.default}),s},D=Be(),Ce=t=>{Object.entries(D).map(([s,n])=>{t.component(s,n)})};var We=O(k({},D),{version:De,install:Ce});const Ae=P('<h2 id="badge-\u5FBD\u6807\u6570" tabindex="-1">Badge <strong>\u5FBD\u6807\u6570</strong> <a class="header-anchor" href="#badge-\u5FBD\u6807\u6570" aria-hidden="true">#</a></h2><p>\u56FE\u6807\u53F3\u4E0A\u89D2\u7684\u5706\u5F62\u5FBD\u6807\u6570\u5B57\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u51FA\u73B0\u5728\u901A\u77E5\u56FE\u6807\u6216\u5934\u50CF\u7684\u53F3\u4E0A\u89D2\uFF0C\u7528\u4E8E\u663E\u793A\u9700\u8981\u5904\u7406\u7684\u6D88\u606F\u6761\u6570\uFF0C\u901A\u8FC7\u9192\u76EE\u89C6\u89C9\u5F62\u5F0F\u5438\u5F15\u7528\u6237\u5904\u7406\u3002</p><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2>',5),Ee=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"State"),e("th",{style:{"text-align":"center"}},"postfix"),e("th",{style:{"text-align":"right"}},"Usage example")])],-1),Ie={style:{"text-align":"center"}},Ue=e("td",{style:{"text-align":"center"}},[e("code",null,"*-primary")],-1),Pe=e("td",{style:{"text-align":"right"}},[e("code",null,'<w-badge type="primary" />')],-1),He={style:{"text-align":"center"}},qe=e("td",{style:{"text-align":"center"}},[e("code",null,"*-success")],-1),Fe=e("td",{style:{"text-align":"right"}},[e("code",null,'<w-badge type="success" />')],-1),Re={style:{"text-align":"center"}},Ge=e("td",{style:{"text-align":"center"}},[e("code",null,"*-warning")],-1),Je=e("td",{style:{"text-align":"right"}},[e("code",null,'<w-badge type="warning" />')],-1),Ke={style:{"text-align":"center"}},Le=e("td",{style:{"text-align":"center"}},[e("code",null,"*-danger")],-1),Qe=e("td",{style:{"text-align":"right"}},[e("code",null,'<w-badge type="danger" />')],-1),Xe={style:{"text-align":"center"}},Ye=e("td",{style:{"text-align":"center"}},[e("code",null,"*-info")],-1),Ze=e("td",{style:{"text-align":"right"}},[e("code",null,'<w-badge type="info" />')],-1),et={style:{"text-align":"center"}},tt=e("td",{style:{"text-align":"center"}},[e("code",null,"*-metal")],-1),st=e("td",{style:{"text-align":"right"}},[e("code",null,'<w-badge type="metal" />')],-1),nt={style:{"text-align":"center"}},ot=e("td",{style:{"text-align":"center"}},[e("code",null,"*-brand")],-1),lt=e("td",{style:{"text-align":"right"}},[e("code",null,'<w-badge type="brand" />')],-1),it={style:{"text-align":"center"}},at=e("td",{style:{"text-align":"center"}},[e("code",null,"*-focus")],-1),rt=e("td",{style:{"text-align":"right"}},[e("code",null,'<w-badge type="focus" />')],-1),ct={style:{"text-align":"center"}},dt=e("td",{style:{"text-align":"center"}},[e("code",null,"*-dark")],-1),_t=e("td",{style:{"text-align":"right"}},[e("code",null,'<w-badge type="dark" />')],-1),ft='{"title":"Badge \u5FBD\u6807\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"Badge \u5FBD\u6807\u6570","slug":"badge-\u5FBD\u6807\u6570"},{"level":2,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A"}],"relativePath":"components/badge.md","lastUpdated":1637060440428}',ut={};function gt(t){const{WBadge:s}=We;return console.log(s),(n,o)=>(i(),a("div",null,[Ae,e("table",null,[Ee,e("tbody",null,[e("tr",null,[e("td",Ie,[_(r(s),{type:"primary"})]),Ue,Pe]),e("tr",null,[e("td",He,[_(r(s),{type:"success"})]),qe,Fe]),e("tr",null,[e("td",Re,[_(r(s),{type:"warning"})]),Ge,Je]),e("tr",null,[e("td",Ke,[_(r(s),{type:"danger"})]),Le,Qe]),e("tr",null,[e("td",Xe,[_(r(s),{type:"info"})]),Ye,Ze]),e("tr",null,[e("td",et,[_(r(s),{type:"metal"})]),tt,st]),e("tr",null,[e("td",nt,[_(r(s),{type:"brand"})]),ot,lt]),e("tr",null,[e("td",it,[_(r(s),{type:"focus"})]),at,rt]),e("tr",null,[e("td",ct,[_(r(s),{type:"dark"})]),dt,_t])])])]))}const mt=Object.assign(ut,{setup:gt});export{ft as __pageData,mt as default};
