"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[99061],{46296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"logto-oss/using-cli/rotate-signing-keys","title":"\u8f6e\u6362\u7b7e\u540d\u5bc6\u94a5 (OSS)","description":"\u5982\u679c\u4f60\u4f7f\u7528 Logto Cloud\uff0c\u4f60\u53ef\u4ee5\u5728\u63a7\u5236\u53f0 UI \u4e2d\u8f6e\u6362\u7b7e\u540d\u5bc6\u94a5\uff0c\u8bf7\u53c2\u8003 \u672c\u6559\u7a0b\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/logto-oss/using-cli/rotate-signing-keys.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/rotate-signing-keys","permalink":"/zh-CN/logto-oss/using-cli/rotate-signing-keys","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/logto-oss/using-cli/rotate-signing-keys.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"\u4ece\u73af\u5883\u53d8\u91cf\u8fc1\u79fb\u914d\u7f6e","permalink":"/zh-CN/logto-oss/using-cli/migrate-from-env"},"next":{"title":"Translate CLI","permalink":"/zh-CN/logto-oss/translate-cli"}}');var o=t(86070),l=t(15658),a=t(78551),s=t(77501);const i={},c="\u8f6e\u6362\u7b7e\u540d\u5bc6\u94a5 (OSS)",u={},d=[{value:"\u8f6e\u6362 OIDC \u79c1\u6709\u7b7e\u540d\u5bc6\u94a5",id:"\u8f6e\u6362-oidc-\u79c1\u6709\u7b7e\u540d\u5bc6\u94a5",level:2},{value:"\u8f6e\u6362 OIDC cookie \u5bc6\u94a5",id:"\u8f6e\u6362-oidc-cookie-\u5bc6\u94a5",level:2},{value:"\u4e4b\u524d\u7684\u5bc6\u94a5\u600e\u4e48\u529e\uff1f",id:"\u4e4b\u524d\u7684\u5bc6\u94a5\u600e\u4e48\u529e",level:2},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"\u5728 Cloudflare Zero Trust \u4e2d\u4f7f\u7528 Logto \u4f5c\u4e3a OIDC \u63d0\u4f9b\u5546",id:"\u5728-cloudflare-zero-trust-\u4e2d\u4f7f\u7528-logto-\u4f5c\u4e3a-oidc-\u63d0\u4f9b\u5546",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u8f6e\u6362\u7b7e\u540d\u5bc6\u94a5-oss",children:"\u8f6e\u6362\u7b7e\u540d\u5bc6\u94a5 (OSS)"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528 Logto Cloud\uff0c\u4f60\u53ef\u4ee5\u5728\u63a7\u5236\u53f0 UI \u4e2d\u8f6e\u6362\u7b7e\u540d\u5bc6\u94a5\uff0c\u8bf7\u53c2\u8003 ",(0,o.jsx)(n.a,{href:"/developers/signing-keys/#rotate-signing-keys-from-console-ui",children:"\u672c\u6559\u7a0b"}),"\u3002"]})}),"\n",(0,o.jsx)(n.p,{children:"Logto OSS \u4ece v1.8 \u5f00\u59cb\u652f\u6301\u8f6e\u6362\u7b7e\u540d\u5bc6\u94a5\u3002"}),"\n",(0,o.jsx)(n.p,{children:"Logto OIDC \u7b7e\u540d\u5bc6\u94a5\uff0c\u4e5f\u79f0\u4e3a \u201cOIDC \u79c1\u94a5\u201d \u548c \u201cOIDC cookie \u5bc6\u94a5\u201d\uff0c\u662f\u7528\u4e8e\u52a0\u5bc6 JWT \u4ee4\u724c\uff08\u8bbf\u95ee\u4ee4\u724c\u548c ID \u4ee4\u724c\uff09\u548c\u6d4f\u89c8\u5668 cookie \u7684\u7b7e\u540d\u5bc6\u94a5\uff0c\u5728 Logto \u767b\u5f55\u4f1a\u8bdd\u4e2d\u4f7f\u7528\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u5b9a\u671f\u8f6e\u6362\u4f60\u7684\u7b7e\u540d\u5bc6\u94a5\u53ef\u4ee5\u964d\u4f4e\u6f5c\u5728\u5bc6\u94a5\u6cc4\u9732\u7684\u98ce\u9669\u3002Logto \u5efa\u8bae\u4f60\u81f3\u5c11\u6bcf\u5e74\u8f6e\u6362\u4e00\u6b21\u7b7e\u540d\u5bc6\u94a5\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u8f6e\u6362-oidc-\u79c1\u6709\u7b7e\u540d\u5bc6\u94a5",children:"\u8f6e\u6362 OIDC \u79c1\u6709\u7b7e\u540d\u5bc6\u94a5"}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528\u4e0b\u9762\u7684 CLI \u547d\u4ee4\u751f\u6210\u4e00\u4e2a\u65b0\u7684 OIDC \u79c1\u6709\u7b7e\u540d\u5bc6\u94a5\u3002\u65b0\u5bc6\u94a5\u5c06\u5728\u91cd\u542f\u540e\u81ea\u52a8\u4f7f\u7528\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u53ef\u7528\u9009\u9879\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'--type    (\u53ef\u9009) \u4f60\u7684 JWT \u4ee4\u724c\u7684\u7b7e\u540d\u5bc6\u94a5\u7b97\u6cd5\u3002\n          \u503c\u4e3a "rsa" \u6216 "ec"\u3002\u9ed8\u8ba4\u4e3a "ec"\u3002\n'})}),"\n",(0,o.jsxs)(s.A,{groupId:"cmd",children:[(0,o.jsx)(a.A,{value:"cli",label:"CLI",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"logto db config rotate oidc.privateKeys --type rsa\n"})})}),(0,o.jsx)(a.A,{value:"Local",label:"local",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run cli db config rotate oidc.privateKeys -- --type rsa\n"})})}),(0,o.jsx)(a.A,{value:"npx",label:"npx",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config rotate oidc.privateKeys -- --type rsa\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"\u8f6e\u6362-oidc-cookie-\u5bc6\u94a5",children:"\u8f6e\u6362 OIDC cookie \u5bc6\u94a5"}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528\u4e0b\u9762\u7684 CLI \u547d\u4ee4\u751f\u6210\u4e00\u4e2a\u65b0\u7684 OIDC cookie \u5bc6\u94a5\u3002\u65b0\u5bc6\u94a5\u5c06\u5728\u91cd\u542f\u540e\u81ea\u52a8\u4f7f\u7528\u3002"}),"\n",(0,o.jsxs)(s.A,{groupId:"cmd",children:[(0,o.jsx)(a.A,{value:"cli",label:"CLI",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"logto db config rotate oidc.cookieKeys\n"})})}),(0,o.jsx)(a.A,{value:"Local",label:"local",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run cli db config rotate oidc.cookieKeys\n"})})}),(0,o.jsx)(a.A,{value:"npx",label:"npx",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config rotate oidc.cookieKeys\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"\u4e4b\u524d\u7684\u5bc6\u94a5\u600e\u4e48\u529e",children:"\u4e4b\u524d\u7684\u5bc6\u94a5\u600e\u4e48\u529e\uff1f"}),"\n",(0,o.jsx)(n.p,{children:"Logto \u5bc6\u94a5\u8f6e\u6362\u547d\u4ee4\u4e0d\u4f1a\u5220\u9664\u4f60\u4e4b\u524d\u7684\u7b7e\u540d\u5bc6\u94a5\uff0c\u5b83\u4eec\u5c06\u4fdd\u7559\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u9664\u975e\u4f60\u624b\u52a8\u5220\u9664\u5b83\u4eec\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u540c\u65f6\uff0c\u5728\u5220\u9664\u4e4b\u524d\u7684\u5bc6\u94a5\u65f6\u8981\u5c0f\u5fc3\uff0c\u56e0\u4e3a\u8fd9\u53ef\u80fd\u5bfc\u81f4\u610f\u5916\u95ee\u9898\u3002\u5efa\u8bae\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\uff08\u4f8b\u5982 2 \u5468\uff09\u540c\u65f6\u4fdd\u7559\u65b0\u5bc6\u94a5\u548c\u4e4b\u524d\u7684\u5bc6\u94a5\uff0c\u76f4\u5230\u4f60\u786e\u4fe1\u6240\u6709\u7528\u6237\u90fd\u5df2\u8fc1\u79fb\u5230\u65b0\u5bc6\u94a5\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u6545\u969c\u6392\u9664",children:"\u6545\u969c\u6392\u9664"}),"\n",(0,o.jsx)(n.h3,{id:"\u5728-cloudflare-zero-trust-\u4e2d\u4f7f\u7528-logto-\u4f5c\u4e3a-oidc-\u63d0\u4f9b\u5546",children:"\u5728 Cloudflare Zero Trust \u4e2d\u4f7f\u7528 Logto \u4f5c\u4e3a OIDC \u63d0\u4f9b\u5546"}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u6253\u7b97\u5728 Cloudflare Zero Trust \u4e2d\u4f7f\u7528 Logto \u4f5c\u4e3a OIDC \u63d0\u4f9b\u5546\uff0c\u8bf7\u6ce8\u610f\u5b83\u4e0d\u652f\u6301\u4f7f\u7528 ECDSA \u7b97\u6cd5\u7684 OIDC \u63d0\u4f9b\u5546\u3002\u5728\u8f6e\u6362 OIDC \u79c1\u6709\u7b7e\u540d\u5bc6\u94a5\u65f6\uff0c\u8bf7\u786e\u4fdd\u901a\u8fc7\u5728\u8f6e\u6362\u547d\u4ee4\u4e2d\u6307\u5b9a ",(0,o.jsx)(n.code,{children:"--type rsa"})," \u6765\u4f7f\u7528 RSA \u7b97\u6cd5\uff1a"]}),"\n",(0,o.jsxs)(s.A,{groupId:"cmd-cloudflare-zero-trust",children:[(0,o.jsx)(a.A,{value:"cli",label:"CLI",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"logto db config rotate oidc.privateKeys --type rsa\n"})})}),(0,o.jsx)(a.A,{value:"Local",label:"local",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm run cli db config rotate oidc.privateKeys -- --type rsa\n"})})}),(0,o.jsx)(a.A,{value:"npx",label:"npx",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config rotate oidc.privateKeys -- --type rsa\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},78551:(e,n,t)=>{t.d(n,{A:()=>a});t(30758);var r=t(13526);const o={tabItem:"tabItem_PGP0"};var l=t(86070);function a(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:t,children:n})}},77501:(e,n,t)=>{t.d(n,{A:()=>I});var r=t(30758),o=t(13526),l=t(65052),a=t(25557),s=t(77469),i=t(50873),c=t(62230),u=t(60196);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(o.location.search);n.set(l,e),o.replace({...o.location,search:n.toString()})}),[l,o])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,l=h(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,d]=g({queryString:t,groupId:o}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,l]=(0,u.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:o}),x=(()=>{const e=c??b;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{x&&i(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=t(13887);const x={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var m=t(86070);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),o=s[t].value;o!==r&&(c(n),a(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,o.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:l}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=b(e);return(0,m.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,m.jsx)(v,{...n,...e}),(0,m.jsx)(j,{...n,...e})]})}function I(e){const n=(0,f.A)();return(0,m.jsx)(y,{...e,children:d(e.children)},String(n))}},15658:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(30758);const o={},l=r.createContext(o);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);