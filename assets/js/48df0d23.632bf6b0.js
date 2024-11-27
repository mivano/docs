"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[45892],{95493:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"logto-oss/using-cli/manage-database-configs","title":"Manage database configs","description":"How to manage database configs by CLI.","source":"@site/docs/logto-oss/using-cli/manage-database-configs.mdx","sourceDirName":"logto-oss/using-cli","slug":"/logto-oss/using-cli/manage-database-configs","permalink":"/logto-oss/using-cli/manage-database-configs","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/logto-oss/using-cli/manage-database-configs.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"description":"How to manage database configs by CLI.","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Database alteration","permalink":"/logto-oss/using-cli/database-alteration"},"next":{"title":"Translation","permalink":"/logto-oss/using-cli/translation"}}');var s=a(86070),o=a(15658),r=a(39280),l=a(69708);const i={description:"How to manage database configs by CLI.",sidebar_position:4},c="Manage database configs",u={},d=[{value:"Get config by key",id:"get-config-by-key",level:2},{value:"Set config by key",id:"set-config-by-key",level:2}];function g(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"manage-database-configs",children:"Manage database configs"})}),"\n",(0,s.jsx)(n.p,{children:"Logto helps to maintain some technical configs, such as OIDC and Cookie keys. Before we can managing them via Admin Console or Management API, you can use CLI to achieve the goal."}),"\n",(0,s.jsx)(n.h2,{id:"get-config-by-key",children:"Get config by key"}),"\n",(0,s.jsx)(n.p,{children:"Usage:"}),"\n",(0,s.jsxs)(l.A,{groupId:"cmd",children:[(0,s.jsx)(r.A,{value:"cli",label:"CLI",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"logto db config get <key> [keys...]\n"})})}),(0,s.jsx)(r.A,{value:"npx",label:"npx",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config get <key> [keys...]\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Say you want to get the OIDC private keys:"}),"\n",(0,s.jsxs)(l.A,{groupId:"cmd",children:[(0,s.jsx)(r.A,{value:"cli",label:"CLI",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"logto db config get oidc.privateKeys\n"})})}),(0,s.jsx)(r.A,{value:"npx",label:"npx",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config get oidc.privateKeys\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"The output will be like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'oidc.privateKeys=["\\n-----BEGIN PRIVATE KEY-----\\nMIIJRAIBA..."]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"logto db config get --help"})," for all available keys, or see ",(0,s.jsx)(n.a,{href:"/concepts/core-service/configuration/#database-configs",children:"Configuration"})," for detailed explanation."]}),"\n",(0,s.jsx)(n.h2,{id:"set-config-by-key",children:"Set config by key"}),"\n",(0,s.jsxs)(l.A,{groupId:"cmd",children:[(0,s.jsx)(r.A,{value:"cli",label:"CLI",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"logto db config set <key> [keys...]\n"})})}),(0,s.jsx)(r.A,{value:"npx",label:"npx",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db config set <key> [keys...]\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Say you want to set the OIDC Cookie keys:"}),"\n",(0,s.jsxs)(l.A,{groupId:"cmd",children:[(0,s.jsx)(r.A,{value:"cli",label:"CLI",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'logto db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'})})}),(0,s.jsx)(r.A,{value:"npx",label:"npx",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'npx @logto/cli db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Normally, the value to set should be a valid JSON string, and follows the pre-defined type definition. Run ",(0,s.jsx)(n.code,{children:"logto db config set --help"})," for all available keys, or see ",(0,s.jsx)(n.a,{href:"/concepts/core-service/configuration/",children:"Configuration"})," for detailed explanation."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},39280:(e,n,a)=>{a.d(n,{A:()=>r});a(30758);var t=a(13526);const s={tabItem:"tabItem_WK0d"};var o=a(86070);function r(e){let{children:n,hidden:a,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,r),hidden:a,children:n})}},69708:(e,n,a)=>{a.d(n,{A:()=>k});var t=a(30758),s=a(13526),o=a(97822),r=a(25557),l=a(96601),i=a(787),c=a(25744),u=a(57450);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:a}=e;const s=(0,r.W6)(),o=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function p(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,o=g(e),[r,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,d]=b({queryString:a,groupId:s}),[p,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,u.Dv)(a);return[s,(0,t.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:s}),m=(()=>{const e=c??p;return h({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{m&&i(m)}),[m]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=a(28827);const m={tabList:"tabList_D2ZI",tabItem:"tabItem_JkB6"};var x=a(86070);function y(e){let{className:n,block:a,selectedValue:t,selectValue:r,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,a=i.indexOf(n),s=l[a].value;s!==t&&(c(n),r(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:o}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=p(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,x.jsx)(y,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function k(e){const n=(0,f.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},15658:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>l});var t=a(30758);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);