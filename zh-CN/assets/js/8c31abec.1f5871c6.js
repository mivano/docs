"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5741],{11993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"logto-oss/using-cli/install-logto","title":"\u5b89\u88c5 Logto","description":"\u5982\u4f55\u901a\u8fc7 CLI \u5b89\u88c5 Logto \u5f00\u6e90\u670d\u52a1 (OSS) \u7684\u6307\u5357\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/logto-oss/using-cli/install-logto.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/install-logto","permalink":"/zh-CN/logto-oss/using-cli/install-logto","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/logto-oss/using-cli/install-logto.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"description":"\u5982\u4f55\u901a\u8fc7 CLI \u5b89\u88c5 Logto \u5f00\u6e90\u670d\u52a1 (OSS) \u7684\u6307\u5357\u3002","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Logto CLI","permalink":"/zh-CN/logto-oss/using-cli/"},"next":{"title":"\u7ba1\u7406\u8fde\u63a5\u5668","permalink":"/zh-CN/logto-oss/using-cli/manage-connectors"}}');var o=n(86070),l=n(15658),s=n(78551),a=n(77501);const i={description:"\u5982\u4f55\u901a\u8fc7 CLI \u5b89\u88c5 Logto \u5f00\u6e90\u670d\u52a1 (OSS) \u7684\u6307\u5357\u3002",sidebar_position:1},c="\u5b89\u88c5 Logto",u={},d=[{value:"\u4ea4\u4e92\u5f0f",id:"\u4ea4\u4e92\u5f0f",level:2},{value:"\u9009\u9879\u548c\u9759\u9ed8\u5b89\u88c5",id:"\u9009\u9879\u548c\u9759\u9ed8\u5b89\u88c5",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"\u5b89\u88c5-logto",children:"\u5b89\u88c5 Logto"})}),"\n",(0,o.jsx)(t.h2,{id:"\u4ea4\u4e92\u5f0f",children:"\u4ea4\u4e92\u5f0f"}),"\n",(0,o.jsx)(t.p,{children:"\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u8fdb\u884c\u4ea4\u4e92\u5f0f\u5b89\u88c5\uff1a"}),"\n",(0,o.jsxs)(a.A,{groupId:"cmd",children:[(0,o.jsx)(s.A,{value:"cli",label:"CLI",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"logto init\n"})})}),(0,o.jsx)(s.A,{value:"npm",label:"npm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npm init @logto@latest\n"})})})]}),"\n",(0,o.jsx)(t.h2,{id:"\u9009\u9879\u548c\u9759\u9ed8\u5b89\u88c5",children:"\u9009\u9879\u548c\u9759\u9ed8\u5b89\u88c5"}),"\n",(0,o.jsx)(t.p,{children:"\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u6dfb\u52a0\u4ee5\u4e0b\u9009\u9879\u4ee5\u8df3\u8fc7\u67d0\u4e9b\u95ee\u9898\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# \u6240\u6709\u8fd9\u4e9b\u9009\u9879\u90fd\u662f\u53ef\u9009\u7684\n--db-url      Logto \u6570\u636e\u5e93\u7684 Postgres URL\n-p, --path    Logto \u5b9e\u4f8b\u7684\u8def\u5f84\uff0c\u5fc5\u987b\u662f\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u8def\u5f84\n--ss          \u8df3\u8fc7 Logto \u6570\u636e\u5e93\u64ad\u79cd\n--oc          \u5b89\u88c5\u540e\u6dfb\u52a0\u5b98\u65b9\u8fde\u63a5\u5668\n"})}),"\n",(0,o.jsxs)(t.p,{children:["\u8fd0\u884c ",(0,o.jsx)(t.code,{children:"logto init --help"})," \u83b7\u53d6\u5b8c\u6574\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"]}),"\n",(0,o.jsx)(t.p,{children:"\u4ee5\u4e0b\u662f\u6267\u884c\u9759\u9ed8\u5b89\u88c5\u7684\u793a\u4f8b\uff08\u4f8b\u5982\uff0c\u5728 CI \u4e2d\uff09\uff1a"}),"\n",(0,o.jsxs)(a.A,{groupId:"cmd",children:[(0,o.jsx)(s.A,{value:"cli",label:"CLI",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"logto init -p ./logto --db-url postgresql://your-postgres-dsn:5432/logto --oc\n"})})}),(0,o.jsx)(s.A,{value:"npm",label:"npm",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx @logto/cli init -p ./logto --db-url postgresql://your-postgres-dsn:5432/logto --oc\n"})})})]}),"\n",(0,o.jsx)(t.p,{children:"\u5b83\u5c06\u6309\u987a\u5e8f\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\u4e0b\u8f7d\u5e76\u89e3\u538b Logto \u5230 ",(0,o.jsx)(t.code,{children:"./logto"})]}),"\n",(0,o.jsxs)(t.li,{children:["\u5c1d\u8bd5\u4f7f\u7528 URL ",(0,o.jsx)(t.code,{children:"postgresql://your-postgres-dsn:5432/logto"})," \u521d\u59cb\u5316\u548c\u64ad\u79cd\u6570\u636e\u5e93"]}),"\n",(0,o.jsxs)(t.li,{children:["\u5c06 Logto \u5b98\u65b9\u8fde\u63a5\u5668\u6dfb\u52a0\u5230 ",(0,o.jsx)(t.code,{children:"./logto/packages/core/connectors"})]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},78551:(e,t,n)=>{n.d(t,{A:()=>s});n(30758);var r=n(13526);const o={tabItem:"tabItem_PGP0"};var l=n(86070);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:n,children:t})}},77501:(e,t,n)=>{n.d(t,{A:()=>I});var r=n(30758),o=n(13526),l=n(65052),s=n(25557),a=n(77469),i=n(50873),c=n(62230),u=n(60196);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(o.location.search);t.set(l,e),o.replace({...o.location,search:t.toString()})}),[l,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,l=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,d]=g({queryString:n,groupId:o}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,l]=(0,u.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:o}),f=(()=>{const e=c??b;return p({value:e,tabValues:l})?e:null})();(0,a.A)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=n(13887);const f={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var x=n(86070);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),o=a[n].value;o!==r&&(c(t),s(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function I(e){const t=(0,m.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},15658:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(30758);const o={},l=r.createContext(o);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);