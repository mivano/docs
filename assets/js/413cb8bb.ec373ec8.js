"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[65670],{64541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"docs/references/tunnel-cli/README","title":"\ud83e\udd16 Using Logto Tunnel CLI","description":"For Logto Cloud users, We\'ve made it easy to let you \\"Bring your own UI\\" to Logto. Cloud users can now upload a zip file containing the custom UI assets in Logto Console -> Sign-in experience -> Custom UI. (Check out the Bring your UI page for more details.)","source":"@site/docs/docs/references/tunnel-cli/README.mdx","sourceDirName":"docs/references/tunnel-cli","slug":"/docs/references/tunnel-cli/","permalink":"/docs/references/tunnel-cli/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/docs/references/tunnel-cli/README.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11},"sidebar":"docsSidebar","previous":{"title":"\ud83e\udd16 I18n translation with CLI","permalink":"/docs/references/translate-cli/"},"next":{"title":"Deploy to Cloud","permalink":"/docs/references/tunnel-cli/deploy"}}');var a=t(86070),i=t(15658),r=t(55635),s=t(81531);const l={sidebar_position:11},c="\ud83e\udd16 Using Logto Tunnel CLI",u={},d=[{value:"Why do I need this?",id:"why-do-i-need-this",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Step 1: Execute the command",id:"step-1-execute-the-command",level:3},{value:"Step 2: Update endpoint URI in your application",id:"step-2-update-endpoint-uri-in-your-application",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",mermaid:"mermaid",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"-using-logto-tunnel-cli",children:"\ud83e\udd16 Using Logto Tunnel CLI"})}),"\n",(0,a.jsxs)(n.p,{children:['For Logto Cloud users, We\'ve made it easy to let you "Bring your own UI" to Logto. Cloud users can now upload a zip file containing the custom UI assets in Logto Console -> Sign-in experience -> Custom UI. (Check out the ',(0,a.jsx)(n.a,{href:"/docs/recipes/customize-sie/bring-your-ui",children:"Bring your UI"})," page for more details.)"]}),"\n",(0,a.jsx)(n.p,{children:"However, when developing such custom UI pages, users want to test and debug the code locally, before uploading to Logto Cloud. This CLI command helps you set up a local tunnel and connect the following 3 entities together:\nyour Logto cloud auth endpoint, your application, and your custom sign-in UI."}),"\n",(0,a.jsx)(n.h2,{id:"why-do-i-need-this",children:"Why do I need this?"}),"\n",(0,a.jsx)(n.p,{children:'By default, when you click the "sign-in" button in your application, you will be navigated to the sign-in page configured at Logto endpoint. A successful sign-in flow can be illustrated as follows:'}),"\n",(0,a.jsx)(n.mermaid,{value:'sequenceDiagram\n    box Local machine\n    participant A as Your application\n    end\n    box Logto Cloud\n    participant B as Logto Cloud auth endpoint\n    participant C as Logto sign-in page\n    end\n    A ->> B: User initiates "sign-in" action and request auth\n    B --\x3e> A: Return auth response and tell the client<br/>to redirect to the Logto sign-in page\n    A ->> C: Redirect to the Logto sign-in page\n    C ->> B: Submit the sign-in form and<br/>request experience API to authenticate\n    B --\x3e> C: Respond the sign-in request and<br/>tell the client to redirect to your application\n    C --\x3e> A: Redirect to your application\n    A --\x3e A: Handle the sign-in callback and<br/>the user is now authenticated'}),"\n",(0,a.jsx)(n.p,{children:"But now since you are developing your own custom sign-in UI, you need a way to navigate to the custom sign-in UI pages running on your local machine instead.\nThis requires a local tunnel service to intercept the outgoing requests from your application and redirect them to your custom sign-in UI pages."}),"\n",(0,a.jsx)(n.p,{children:"Additionally, you need to interact with Logto's experience API to authenticate users and manage sessions.\nThis service will also help forward these experience API requests to Logto Cloud in order to avoid CORS issues."}),"\n",(0,a.jsx)(n.p,{children:'The sequence diagram below illustrates how a successful "sign-in" flow works with your custom UI and the tunnel service in place:'}),"\n",(0,a.jsx)(n.mermaid,{value:'sequenceDiagram\n    box Local machine\n    participant A as Your application\n    participant B as Your custom sign-in UI\n    participant C as Tunnel\n    end\n    box Logto Cloud\n    participant D as Logto Cloud auth endpoint\n    participant E as Logto sign-in page\n    end\n    A ->> C: User initiates "sign-in" action and request auth\n    C ->> D: Forward auth request to Logto Cloud endpoint\n    D --\x3e> C: Return auth response and tell the client<br/>to redirect to the Logto sign-in page\n    C ->> B: Intercept the redirect and<br/>redirect to your custom sign-in page\n    B ->> C: Submit the sign-in form and<br/>request experience API to authenticate\n    C ->> D: Forward the experience API requests to Logto Cloud\n    D --\x3e> C: Authenticate sign-in request and<br/>tell the client to redirect to your application\n    C --\x3e> A: Redirect to your application\n    A --\x3e A: Handle the sign-in callback and<br/>the user is now authenticated'}),"\n",(0,a.jsx)(n.p,{children:"With the tunnel service in place, you can now develop and test your custom sign-in UI locally, without needing to upload the assets to Logto Cloud every time you make a change."}),"\n",(0,a.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,a.jsx)(n.h3,{id:"step-1-execute-the-command",children:"Step 1: Execute the command"}),"\n",(0,a.jsxs)(n.p,{children:["Assuming your Cloud tenant ID is ",(0,a.jsx)(n.code,{children:"foobar"}),", and you have a custom sign-in page running on your local dev server at ",(0,a.jsx)(n.code,{children:"http://localhost:4000"}),", then you can execute the command this way:"]}),"\n",(0,a.jsxs)(s.A,{groupId:"cmd",children:[(0,a.jsx)(r.A,{value:"cli",label:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"logto-tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://foobar.logto.app/\n"})})}),(0,a.jsx)(r.A,{value:"npx",label:"npx",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://foobar.logto.app/\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"It also works if you have custom domain configured in Logto:"}),"\n",(0,a.jsxs)(s.A,{groupId:"cmd",children:[(0,a.jsx)(r.A,{value:"cli",label:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"logto-tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://your.custom.domain/\n"})})}),(0,a.jsx)(r.A,{value:"npx",label:"npx",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://your.custom.domain/\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Alternatively, the command also supports static html assets without needing to run it first on a dev server. Just make sure there's a ",(0,a.jsx)(n.code,{children:"index.html"})," in the path you specified."]}),"\n",(0,a.jsxs)(s.A,{groupId:"cmd",children:[(0,a.jsx)(r.A,{value:"cli",label:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"logto-tunnel -p 9000 --experience-path /path/to/your/static/files --endpoint https://foobar.logto.app/\n"})})}),(0,a.jsx)(r.A,{value:"npx",label:"npx",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel -p 9000 --experience-path /path/to/your/static/files --endpoint https://foobar.logto.app/\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"step-2-update-endpoint-uri-in-your-application",children:"Step 2: Update endpoint URI in your application"}),"\n",(0,a.jsxs)(n.p,{children:["Finally, run your application and set its Logto endpoint to the tunnel service address ",(0,a.jsx)(n.code,{children:"http://localhost:9000/"})," instead."]}),"\n",(0,a.jsx)(n.p,{children:"Let's take a React application as an example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"title=App.tsx",children:"import { LogtoProvider, LogtoConfig } from '@logto/react';\n\nconst config: LogtoConfig = {\n  // endpoint: 'https://foobar.logto.app/', // original Logto Cloud endpoint\n  endpoint: 'http://localhost:9000/', // tunnel service address\n  appId: '<your-application-id>',\n};\n\nconst App = () => (\n  <LogtoProvider config={config}>\n    <YourAppContent />\n  </LogtoProvider>\n);\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you are using social sign-in, you also need to update the redirect URI in your social provider settings to the tunnel service address."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"http://localhost:9000/callback/<connector-id>\n"})}),"\n",(0,a.jsx)(n.p,{children:'If all set up correctly, when you click the "sign-in" button in your application, you should be navigated to your custom sign-in page instead of Logto\'s built-in UI, along with valid session (cookies) that allows you to further interact with Logto experience API.'}),"\n",(0,a.jsx)(n.p,{children:"Happy coding!"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},55635:(e,n,t)=>{t.d(n,{A:()=>r});t(30758);var o=t(13526);const a={tabItem:"tabItem_Okan"};var i=t(86070);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,r),hidden:t,children:n})}},81531:(e,n,t)=>{t.d(n,{A:()=>j});var o=t(30758),a=t(13526),i=t(24287),r=t(25557),s=t(10987),l=t(18592),c=t(99985),u=t(17107);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=p(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[c,d]=g({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(t);return[a,(0,o.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),x=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(83369);const x={tabList:"tabList_gfGw",tabItem:"tabItem_JRKE"};var b=t(86070);function y(e){let{className:n,block:t,selectedValue:o,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==o&&(c(n),r(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function I(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(y,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function j(e){const n=(0,f.A)();return(0,b.jsx)(I,{...e,children:d(e.children)},String(n))}},15658:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(30758);const a={},i=o.createContext(a);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);