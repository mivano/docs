"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[68701],{41754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"docs/references/using-cli/README","title":"\ud83d\udda5 Using Logto CLI","description":"Logto CLI applies to Logto OSS only. If you are using Logto Cloud, you don\'t need to install Logto CLI.","source":"@site/docs/docs/references/using-cli/README.mdx","sourceDirName":"docs/references/using-cli","slug":"/docs/references/using-cli/","permalink":"/docs/references/using-cli/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/docs/references/using-cli/README.mdx","tags":[],"version":"current","sidebarPosition":3.1,"frontMatter":{"sidebar_position":3.1},"sidebar":"docsSidebar","previous":{"title":"Signing keys","permalink":"/docs/references/openid-connect/signing-keys-rotation/"},"next":{"title":"Install Logto","permalink":"/docs/references/using-cli/install-logto"}}');var r=t(86070),l=t(15658),o=t(55635),s=t(81531);const i={sidebar_position:3.1},c="\ud83d\udda5 Using Logto CLI",u={},d=[{value:"Get started",id:"get-started",level:2},{value:"Install CLI globally",id:"install-cli-globally",level:3},{value:"Local CLI",id:"local-cli",level:3},{value:"Use CLI by <code>npx</code>",id:"use-cli-by-npx",level:3}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"-using-logto-cli",children:"\ud83d\udda5 Using Logto CLI"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Logto CLI applies to Logto OSS only. If you are using Logto Cloud, you don't need to install Logto CLI."})}),"\n",(0,r.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,r.jsx)(n.p,{children:"Logto CLI provide a conveneient way to install, maintain, and update your Logto instance without handling those boring tech stuff manually."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Currently we don't ship binaries, thus Node.js ",(0,r.jsx)(n.code,{children:"^18.12.0"})," is required in the environment."]})}),"\n",(0,r.jsx)(n.h3,{id:"install-cli-globally",children:"Install CLI globally"}),"\n",(0,r.jsxs)(n.p,{children:["Install via your preferred package manager to use ",(0,r.jsx)(n.code,{children:"logto"})," command globally:"]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(o.A,{value:"npm",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm i @logto/cli -g\n"})})}),(0,r.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn global add @logto/cli\n"})})}),(0,r.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add -g @logto/cli\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["You can always append ",(0,r.jsx)(n.code,{children:"--help"})," to show the help info of each command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto --help\nlogto db seed --help\n"})}),"\n",(0,r.jsx)(n.h3,{id:"local-cli",children:"Local CLI"}),"\n",(0,r.jsxs)(n.p,{children:["A built-in version of CLI is shipped with every Logto release since v1.0.0-beta.11. Say you already have a Logto instance in ",(0,r.jsx)(n.code,{children:"~/logto"}),", then you can run the commands below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/logto\nnpm run cli # Invoke the local CLI\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note if you want to execute with options, you need to prepend a ",(0,r.jsx)(n.code,{children:"--"})," BEFORE the options for Logto CLI, e.g.:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run cli db seed -- --db-url postgresql://your-database-url\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"use-cli-by-npx",children:["Use CLI by ",(0,r.jsx)(n.code,{children:"npx"})]}),"\n",(0,r.jsxs)(n.p,{children:["Another way to use Logto CLI is ",(0,r.jsx)(n.code,{children:"npx"}),", which can execute a package without installation."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will be helpful for one-off invocations, e.g.:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db seed --db-url postgresql://your-database-url\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},55635:(e,n,t)=>{t.d(n,{A:()=>o});t(30758);var a=t(13526);const r={tabItem:"tabItem_Okan"};var l=t(86070);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},81531:(e,n,t)=>{t.d(n,{A:()=>I});var a=t(30758),r=t(13526),l=t(24287),o=t(25557),s=t(10987),i=t(18592),c=t(99985),u=t(17107);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=h(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[c,d]=g({queryString:t,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),m=(()=>{const e=c??b;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=t(83369);const m={tabList:"tabList_gfGw",tabItem:"tabItem_JRKE"};var x=t(86070);function v(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=s[t].value;r!==a&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:l}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function j(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function I(e){const n=(0,f.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},15658:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(30758);const r={},l=a.createContext(r);function o(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);