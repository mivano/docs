"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[61747],{55539:(e,n,t)=>{t.d(n,{ZP:()=>s,d$:()=>r});var i=t(11527),o=t(17279);const r=[{value:"Set up a project in the Kakao Devlopers Console",id:"set-up-a-project-in-the-kakao-devlopers-console",level:3},{value:"Configure Kakao Login",id:"configure-kakao-login",level:3},{value:"Activate Kakao Login",id:"activate-kakao-login",level:4},{value:"Privacy Setting",id:"privacy-setting",level:4},{value:"Security Setting (Optional)",id:"security-setting-optional",level:4},{value:"Configure Logto",id:"configure-logto",level:3},{value:"Config types",id:"config-types",level:4},{value:"clientId",id:"clientid",level:4},{value:"clientSeceret",id:"clientseceret",level:4}];function a(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"set-up-a-project-in-the-kakao-devlopers-console",children:"Set up a project in the Kakao Devlopers Console"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit the ",(0,i.jsx)(n.a,{href:"https://developers.kakao.com/console/app",children:"Kakao Developers Console"})," and sign in with your Kakao account."]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Add an application"})," to create new project or choose exist project."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-kakao-login",children:"Configure Kakao Login"}),"\n",(0,i.jsx)(n.h4,{id:"activate-kakao-login",children:"Activate Kakao Login"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Product Settings -> Kakao Login"})," from the menu."]}),"\n",(0,i.jsxs)(n.li,{children:["Turn on ",(0,i.jsx)(n.code,{children:"Kakao Login Activation"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add below URL into ",(0,i.jsx)(n.code,{children:"Redirect URI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"http(s)://YOUR_URL/callback/${connector_id}"})," (The ",(0,i.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page.)"]}),"\n",(0,i.jsxs)(n.li,{children:["(Please replace ",(0,i.jsx)(n.code,{children:"YOUR_URL"})," with your ",(0,i.jsx)(n.code,{children:"Logto"})," URL, and choose ",(0,i.jsx)(n.code,{children:"http"})," or ",(0,i.jsx)(n.code,{children:"https"})," on your situation.)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"privacy-setting",children:"Privacy Setting"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Product Settings -> Kakao Login -> Consent Item"})," from the menu."]}),"\n",(0,i.jsxs)(n.li,{children:["Change state of ",(0,i.jsx)(n.code,{children:"Nickname"}),", ",(0,i.jsx)(n.code,{children:"Profile image"}),", and ",(0,i.jsx)(n.code,{children:"Email"})," to ",(0,i.jsx)(n.strong,{children:"Required consent"})," (You might not able to change ",(0,i.jsx)(n.code,{children:"Email"})," to ",(0,i.jsx)(n.strong,{children:"Required consent"})," because of your project setting.)"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"security-setting-optional",children:"Security Setting (Optional)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Product Settings -> Kakao Login -> Security"})," from the menu."]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.code,{children:"Client secret code"})," to generate secret code."]}),"\n",(0,i.jsxs)(n.li,{children:["Change ",(0,i.jsx)(n.code,{children:"Activation state"})," to Enable. (If you enable it, ",(0,i.jsx)(n.code,{children:"secret code"})," is necessary.)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-logto",children:"Configure Logto"}),"\n",(0,i.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string?"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"clientid",children:"clientId"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"clientId"})," is ",(0,i.jsx)(n.code,{children:"REST API key"})," of your project.\n(You can find it from ",(0,i.jsx)(n.code,{children:"summary"})," of your project from Kakao developers console.)"]}),"\n",(0,i.jsx)(n.h4,{id:"clientseceret",children:"clientSeceret"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"clientSecret"})," is ",(0,i.jsx)(n.code,{children:"Secret Code"})," of your project.\n(Please check ",(0,i.jsx)(n.a,{href:"#security-setting-optional",children:"Security Setting (Optional)"}),")"]})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},37363:(e,n,t)=>{t.d(n,{ZP:()=>h,d$:()=>d});var i=t(11527),o=t(17279),r=t(80983),a=t(67109),s=t(65416),l=t(62533),c=t(94842);const d=[...r.d$,{value:"Installation",id:"installation",level:3},...l.d$,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...s.d$,{value:"Implement sign-in and sign-out",id:"implement-sign-in-and-sign-out",level:3},...a.d$,...c.d$];function u(e){const n={h3:"h3",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in-and-sign-out",children:"Implement sign-in and sign-out"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(c.ZP,{sdk:"React"})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},66183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,connector:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(11527),o=t(17279);t(87593),t(80710),t(12665),t(80386),t(31877),t(23095),t(37363),t(55539);const r={slug:"how-to-build-kakao-sign-in-with-react-and-logto",authors:"logto",tags:["authentication","kakao","react","js","social-sign-in","sign-in","login"],title:"How to build Kakao sign-in with React and Logto"},a=void 0,s={permalink:"/tutorial/how-to-build-kakao-sign-in-with-react-and-logto",source:"@site/tutorial/build-with-logto/generated-react-kakao.mdx",title:"How to build Kakao sign-in with React and Logto",description:"\x3c!--",date:"2024-06-30T13:03:56.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"kakao",permalink:"/tutorial/tags/kakao"},{inline:!0,label:"react",permalink:"/tutorial/tags/react"},{inline:!0,label:"js",permalink:"/tutorial/tags/js"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.285,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-kakao-sign-in-with-react-and-logto",authors:"logto",tags:["authentication","kakao","react","js","social-sign-in","sign-in","login"],title:"How to build Kakao sign-in with React and Logto"},unlisted:!1,prevItem:{title:"How to build Hugging Face sign-in with React and Logto",permalink:"/tutorial/how-to-build-hugging-face-sign-in-with-react-and-logto"},nextItem:{title:"How to build Naver sign-in with React and Logto",permalink:"/tutorial/how-to-build-naver-sign-in-with-react-and-logto"}},l={authorsImageUrls:[void 0]},c="Kakao",d=[];function u(e){return(0,i.jsx)(i.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u()}},84530:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>s});var i=t(11527),o=t(17279),r=t(75696),a=t(78407);const s=[];function l(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[e.packageName?null:(()=>{throw new Error("props.packageName is required when importing _npm_like_installation.mdx")})(),"\n",(0,i.jsx)(n.p,{children:"Install Logto SDK via your favorite package manager:"}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(r.Z,{value:"npm",label:"npm",children:(0,i.jsx)("pre",{children:(0,i.jsxs)("code",{className:"language-bash",children:["npm i ",e.packageName]})})}),(0,i.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)("pre",{children:(0,i.jsxs)("code",{className:"language-bash",children:["pnpm add ",e.packageName]})})}),(0,i.jsx)(r.Z,{value:"yarn",label:"yarn",children:(0,i.jsx)("pre",{children:(0,i.jsxs)("code",{className:"language-bash",children:["yarn add ",e.packageName]})})})]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},7709:(e,n,t)=>{t.d(n,{ZP:()=>s,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function a(e){const n={admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Before calling ",(0,i.jsx)("code",{children:e.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},51187:(e,n,t)=>{t.d(n,{ZP:()=>s,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function a(e){const n={admonition:"admonition",code:"code",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,i.jsx)(n.code,{children:"http://localhost:3000"}),"."]})})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},63903:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>a});var i=t(11527),o=t(17279),r=t(82418);const a=[{value:"Configure redirect URIs",id:"configure-redirect-uris",level:4}];function s(e){const n={code:"code",h4:"h4",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.h4,{id:"configure-redirect-uris",children:"Configure redirect URIs"}),"\n",(0,i.jsxs)(n.p,{children:["Switch to the application details page of Logto Console. Add a Redirect URI ",(0,i.jsx)("code",{children:e.redirectUri??"http://localhost:3000/callback"}),"."]}),"\n",(0,i.jsx)("img",{alt:"Redirect URI in Logto Console",src:r.Z,width:"600px"}),"\n",(0,i.jsxs)(n.p,{children:["Just like signing in, users should be redirected to Logto for signing out of the shared session. Once finished, it would be great to redirect the user back to your website. For example, add ",(0,i.jsx)(n.code,{children:"http://localhost:3000"})," as the post sign-out redirect URI section."]}),"\n",(0,i.jsx)(n.p,{children:'Then click "Save" to save the changes.'})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},68668:(e,n,t)=>{t.d(n,{ZP:()=>s,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function a(e){const n={code:"code",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(n.p,{children:["Calling ",(0,i.jsx)(n.code,{children:".signOut()"})," will clear all the Logto data in memory and localStorage if they exist."]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},80983:(e,n,t)=>{t.d(n,{ZP:()=>s,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function a(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The sample project is available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/js/tree/master/packages/react-sample",children:"SDK repository"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The tutorial video is available on our ",(0,i.jsx)(n.a,{href:"https://youtu.be/pvKYt8QFppE",children:"YouTube channel"}),"."]}),"\n"]})})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},67109:(e,n,t)=>{t.d(n,{ZP:()=>g,d$:()=>h});var i=t(11527),o=t(17279),r=t(7709),a=t(51187),s=t(63903),l=t(55556),c=t(68668);function d(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Since we use ",(0,i.jsx)(n.code,{children:"http://localhost:3000/callback"})," as the redirect URI, now we need to handle it properly."]}),"\n",(0,i.jsx)(n.p,{children:"First let's create a callback page:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="pages/Callback/index.tsx"',children:"import { useHandleSignInCallback } from '@logto/react';\n\nconst Callback = () => {\n  const { isLoading } = useHandleSignInCallback(() => {\n    // Do something when finished, e.g. redirect to home page\n  });\n\n  // When it's working in progress\n  if (isLoading) {\n    return <div>Redirecting...</div>;\n  }\n\n  return null;\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Finally insert the code below to create a ",(0,i.jsx)(n.code,{children:"/callback"})," route which does NOT require authentication:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'// Assuming react-router\n<Route path="/callback" element={<Callback />} />\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}const h=[{value:"Configure redirect URIs",id:"configure-redirect-uris",level:3},...l.d$,...a.d$,...s.d$,{value:"Handle redirect",id:"handle-redirect",level:3},{value:"Implement sign-in and sign-out",id:"implement-sign-in-and-sign-out",level:3},...r.d$,...c.d$];function p(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"configure-redirect-uris",children:"Configure redirect URIs"}),"\n",(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"handle-redirect",children:"Handle redirect"}),"\n",(0,i.jsx)(u,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in-and-sign-out",children:"Implement sign-in and sign-out"}),"\n",(0,i.jsxs)(n.p,{children:["We provide two hooks ",(0,i.jsx)(n.code,{children:"useHandleSignInCallback()"})," and ",(0,i.jsx)(n.code,{children:"useLogto()"})," which can help you easily manage the authentication flow."]}),"\n",(0,i.jsx)(r.ZP,{calling:".signIn()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="pages/Home/index.tsx"',children:"import { useLogto } from '@logto/react';\n\nconst Home = () => {\n  const { signIn, signOut, isAuthenticated } = useLogto();\n\n  return isAuthenticated ? (\n    <button onClick={signOut}>Sign Out</button>\n  ) : (\n    <button onClick={() => signIn('http://localhost:3000/callback')}>Sign In</button>\n  );\n};\n"})}),"\n",(0,i.jsx)(c.ZP,{})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},65416:(e,n,t)=>{t.d(n,{ZP:()=>s,d$:()=>r});var i=t(11527),o=t(17279);const r=[];function a(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Import and use ",(0,i.jsx)(n.code,{children:"LogtoProvider"})," to provide a Logto context to your app:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:"import { LogtoProvider, LogtoConfig } from '@logto/react';\n\nconst config: LogtoConfig = {\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  appId: '<your-application-id>',\n};\n\nconst App = () => (\n  <LogtoProvider config={config}>\n    <YourAppContent />\n  </LogtoProvider>\n);\n"})})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},62533:(e,n,t)=>{t.d(n,{ZP:()=>l,d$:()=>a});var i=t(11527),o=t(17279),r=t(84530);const a=[...r.d$];function s(e){return(0,i.jsx)(r.ZP,{packageName:"@logto/react"})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s()}},75696:(e,n,t)=>{t.d(n,{Z:()=>a});t(50959);var i=t(5341);const o={tabItem:"tabItem_YHvg"};var r=t(11527);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,a),hidden:t,children:n})}},78407:(e,n,t)=>{t.d(n,{Z:()=>A});var i=t(50959),o=t(5341),r=t(18387),a=t(28903),s=t(15885),l=t(35927),c=t(38894),d=t(70148);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=h(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,u]=g({queryString:t,groupId:o}),[j,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Nk)(t);return[o,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),m=(()=>{const e=c??j;return p({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=t(20619);const m={tabList:"tabList_bI1r",tabItem:"tabItem_PIQj"};var v=t(11527);function f(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==i&&(c(n),a(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function k(e){const n=j(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(f,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function A(e){const n=(0,x.Z)();return(0,v.jsx)(k,{...e,children:u(e.children)},String(n))}},82418:(e,n,t)=>{t.d(n,{Z:()=>i});const i="data:image/png;base64,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"}}]);