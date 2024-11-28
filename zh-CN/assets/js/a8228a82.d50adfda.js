"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[42875],{39468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"logto-oss/using-cli/manage-database-configs","title":"\u7ba1\u7406\u6570\u636e\u5e93\u914d\u7f6e","description":"\u5982\u4f55\u901a\u8fc7 CLI \u7ba1\u7406\u6570\u636e\u5e93\u914d\u7f6e\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/logto-oss/using-cli/manage-database-configs.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/manage-database-configs","permalink":"/zh-CN/logto-oss/using-cli/manage-database-configs","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/logto-oss/using-cli/manage-database-configs.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"description":"\u5982\u4f55\u901a\u8fc7 CLI \u7ba1\u7406\u6570\u636e\u5e93\u914d\u7f6e\u3002","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"\u6570\u636e\u5e93\u66f4\u6539","permalink":"/zh-CN/logto-oss/using-cli/database-alteration"},"next":{"title":"\u7ffb\u8bd1","permalink":"/zh-CN/logto-oss/using-cli/translation"}}');var r=t(86070),s=t(15658),l=t(78551),o=t(77501);const i={description:"\u5982\u4f55\u901a\u8fc7 CLI \u7ba1\u7406\u6570\u636e\u5e93\u914d\u7f6e\u3002",sidebar_position:4},c="\u7ba1\u7406\u6570\u636e\u5e93\u914d\u7f6e",u={},d=[{value:"\u901a\u8fc7\u952e\u83b7\u53d6\u914d\u7f6e",id:"\u901a\u8fc7\u952e\u83b7\u53d6\u914d\u7f6e",level:2},{value:"\u901a\u8fc7\u952e\u8bbe\u7f6e\u914d\u7f6e",id:"\u901a\u8fc7\u952e\u8bbe\u7f6e\u914d\u7f6e",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u7ba1\u7406\u6570\u636e\u5e93\u914d\u7f6e",children:"\u7ba1\u7406\u6570\u636e\u5e93\u914d\u7f6e"})}),"\n",(0,r.jsx)(n.p,{children:"Logto \u5e2e\u52a9\u7ef4\u62a4\u4e00\u4e9b\u6280\u672f\u914d\u7f6e\uff0c\u4f8b\u5982 OIDC \u548c Cookie \u5bc6\u94a5\u3002\u5728\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 Admin Console \u6216 Management API \u7ba1\u7406\u5b83\u4eec\u4e4b\u524d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 CLI \u6765\u5b9e\u73b0\u76ee\u6807\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u901a\u8fc7\u952e\u83b7\u53d6\u914d\u7f6e",children:"\u901a\u8fc7\u952e\u83b7\u53d6\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u6cd5\uff1a"}),"\n",(0,r.jsxs)(o.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto db config get <key> [keys...]\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config get <key> [keys...]\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u5047\u8bbe\u4f60\u60f3\u83b7\u53d6 OIDC \u79c1\u94a5\uff1a"}),"\n",(0,r.jsxs)(o.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto db config get oidc.privateKeys\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config get oidc.privateKeys\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u8f93\u51fa\u5c06\u7c7b\u4f3c\u4e8e\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'oidc.privateKeys=["\\n-----BEGIN PRIVATE KEY-----\\nMIIJRAIBA..."]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"logto db config get --help"})," \u4ee5\u83b7\u53d6\u6240\u6709\u53ef\u7528\u7684\u952e\uff0c\u6216\u67e5\u770b ",(0,r.jsx)(n.a,{href:"/concepts/core-service/configuration/#database-configs",children:"Configuration"})," \u4ee5\u83b7\u53d6\u8be6\u7ec6\u8bf4\u660e\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u901a\u8fc7\u952e\u8bbe\u7f6e\u914d\u7f6e",children:"\u901a\u8fc7\u952e\u8bbe\u7f6e\u914d\u7f6e"}),"\n",(0,r.jsxs)(o.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto db config set <key> [keys...]\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config set <key> [keys...]\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u5047\u8bbe\u4f60\u60f3\u8bbe\u7f6e OIDC Cookie \u5bc6\u94a5\uff1a"}),"\n",(0,r.jsxs)(o.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'logto db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'npx @logto/cli db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u5e38\uff0c\u8bbe\u7f6e\u7684\u503c\u5e94\u8be5\u662f\u4e00\u4e2a\u6709\u6548\u7684 JSON \u5b57\u7b26\u4e32\uff0c\u5e76\u9075\u5faa\u9884\u5b9a\u4e49\u7684\u7c7b\u578b\u5b9a\u4e49\u3002\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"logto db config set --help"})," \u4ee5\u83b7\u53d6\u6240\u6709\u53ef\u7528\u7684\u952e\uff0c\u6216\u67e5\u770b ",(0,r.jsx)(n.a,{href:"/concepts/core-service/configuration/",children:"Configuration"})," \u4ee5\u83b7\u53d6\u8be6\u7ec6\u8bf4\u660e\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},78551:(e,n,t)=>{t.d(n,{A:()=>l});t(30758);var a=t(13526);const r={tabItem:"tabItem_PGP0"};var s=t(86070);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:t,children:n})}},77501:(e,n,t)=>{t.d(n,{A:()=>I});var a=t(30758),r=t(13526),s=t(65052),l=t(25557),o=t(77469),i=t(50873),c=t(62230),u=t(60196);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=g({queryString:t,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),m=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(13887);const m={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var x=t(86070);function v(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==a&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function I(e){const n=(0,f.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},15658:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var a=t(30758);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);