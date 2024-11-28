"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[97385],{6832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"logto-oss/using-cli/migrate-from-env","title":"\u4ece\u73af\u5883\u53d8\u91cf\u8fc1\u79fb\u914d\u7f6e","description":"\u5982\u679c\u4f60\u7684 Logto \u7248\u672c\u5927\u4e8e\u6216\u7b49\u4e8e v1.0.0-beta.11\uff0c\u4f60\u53ef\u4ee5\u8df3\u8fc7\u6b64\u9875\u9762\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/logto-oss/using-cli/migrate-from-env.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/migrate-from-env","permalink":"/zh-CN/logto-oss/using-cli/migrate-from-env","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/logto-oss/using-cli/migrate-from-env.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"\u7ffb\u8bd1","permalink":"/zh-CN/logto-oss/using-cli/translation"},"next":{"title":"\u8f6e\u6362\u7b7e\u540d\u5bc6\u94a5 (OSS)","permalink":"/zh-CN/logto-oss/using-cli/rotate-signing-keys"}}');var o=t(86070),a=t(15658),s=t(78551),l=t(77501);const i={sidebar_position:6},u="\u4ece\u73af\u5883\u53d8\u91cf\u8fc1\u79fb\u914d\u7f6e",c={},d=[];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u4ece\u73af\u5883\u53d8\u91cf\u8fc1\u79fb\u914d\u7f6e",children:"\u4ece\u73af\u5883\u53d8\u91cf\u8fc1\u79fb\u914d\u7f6e"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684 Logto \u7248\u672c\u5927\u4e8e\u6216\u7b49\u4e8e ",(0,o.jsx)(n.code,{children:"v1.0.0-beta.11"}),"\uff0c\u4f60\u53ef\u4ee5\u8df3\u8fc7\u6b64\u9875\u9762\u3002"]})}),"\n",(0,o.jsx)(n.p,{children:"\u7ba1\u7406\u8fc7\u591a\u7684\u73af\u5883\u53d8\u91cf\u65e2\u4e0d\u9ad8\u6548\u4e5f\u4e0d\u7075\u6d3b\uff0c\u5f53\u4f60\u6709\u591a\u4e2a\u5bb9\u5668\u8fd0\u884c\u65f6\uff0c\u5f88\u96be\u4fdd\u6301\u5355\u4e00\u7684\u4fe1\u606f\u6e90\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u6211\u4eec\u51b3\u5b9a\u5c06\u6240\u6709\u53ef\u80fd\u7684\u6280\u672f\u914d\u7f6e\u79fb\u52a8\u5230\u6570\u636e\u5e93\u4e2d\uff0c\u5305\u62ec OIDC \u76f8\u5173\u7684\u5bc6\u94a5\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u4e3a\u4e86\u987a\u5229\u8fdb\u884c\uff0c\u786e\u4fdd\u4f60\u6709\u4e00\u4e2a\u539f\u59cb\u7684 ",(0,o.jsx)(n.code,{children:".env"})," \u6587\u4ef6\uff0c\u6216\u8005\u5728\u5177\u6709\u4ee5\u4e0b\u53d8\u91cf\u7684\u73af\u5883\u4e2d\u8fd0\u884c\u547d\u4ee4\uff1a"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"OIDC_PRIVATE_KEYS=some_secret_key # \u6216 OIDC_PRIVATE_KEY_PATHS\nOIDC_COOKIE_KEYS=key1,key2\nDB_URL=postgresql://localhost:5432/logto\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u7136\u540e\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,o.jsxs)(l.A,{groupId:"cmd",children:[(0,o.jsx)(s.A,{value:"cli",label:"CLI",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"logto db seed oidc\n# \u6216\nlogto db seed oidc --env /your/path/to/.env\n"})})}),(0,o.jsx)(s.A,{value:"npx",label:"npx",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db seed oidc\n# \u6216\nnpx @logto/cli db seed oidc --env /your/path/to/.env\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"\u5982\u679c\u4e00\u5207\u987a\u5229\uff0c\u4f60\u5c06\u770b\u5230\u5982\u4e0b\u6d88\u606f\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[info] \u4ece\u73af\u5883\u53d8\u91cf\u8bfb\u53d6\u914d\u7f6e oidc.privateKeys\n[info] \u4ece\u73af\u5883\u53d8\u91cf\u8bfb\u53d6\u914d\u7f6e oidc.cookieKeys\n[info] \u751f\u6210\u914d\u7f6e oidc.refreshTokenReuseInterval\n[info] \u2714 \u79cd\u5b50 OIDC \u914d\u7f6e\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u4ece\u73b0\u5728\u5f00\u59cb\uff0c\u4f60\u53ef\u4ee5\u5b89\u5168\u5730\u4ece\u73af\u5883\u53d8\u91cf\u4e2d\u79fb\u9664 ",(0,o.jsx)(n.code,{children:"OIDC_PRIVATE_KEYS"})," \u548c ",(0,o.jsx)(n.code,{children:"OIDC_COOKIE_KEYS"}),"\u3002\u8bb0\u5f97\u91cd\u542f\u4f60\u7684 Logto \u5b9e\u4f8b\u4ee5\u4f7f\u66f4\u6539\u751f\u6548\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},78551:(e,n,t)=>{t.d(n,{A:()=>s});t(30758);var r=t(13526);const o={tabItem:"tabItem_PGP0"};var a=t(86070);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:t,children:n})}},77501:(e,n,t)=>{t.d(n,{A:()=>I});var r=t(30758),o=t(13526),a=t(65052),s=t(25557),l=t(77469),i=t(50873),u=t(62230),c=t(60196);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,d]=f({queryString:t,groupId:o}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,c.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),g=(()=>{const e=u??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(13887);const g={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var v=t(86070);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),o=l[t].value;o!==r&&(u(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,o.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function I(e){const n=(0,b.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},15658:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(30758);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);