"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[32381],{51452:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[{value:"Register a developer application",id:"register-a-developer-application",level:3},{value:"Configure Logto",id:"configure-logto",level:3},{value:"Config types",id:"config-types",level:4},{value:"clientId",id:"clientid",level:4},{value:"clientSecret",id:"clientsecret",level:4}];function s(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"register-a-developer-application",children:"Register a developer application"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit ",(0,i.jsx)(n.a,{href:"https://discord.com/developers/applications",children:"Discord Developer Portal"})," and sign in with your Discord account."]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"New Application"})," button to create an application, choose a name for it (Ex: LogtoAuth), tick the box and click ",(0,i.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"OAuth2"})," page and click ",(0,i.jsx)(n.strong,{children:"Reset Secret"})]}),"\n",(0,i.jsxs)(n.li,{children:["Take note of the ",(0,i.jsx)(n.strong,{children:"CLIENT ID"})," and ",(0,i.jsx)(n.strong,{children:"CLIENT SECRET"})," fields"]}),"\n",(0,i.jsxs)(n.li,{children:["Add the valid redirects (Ex: ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"http://auth.mycompany.io/callback/${connector_id}"})}),"). The ",(0,i.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-logto",children:"Configure Logto"}),"\n",(0,i.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"clientid",children:"clientId"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"clientId"})," is the ",(0,i.jsx)(n.code,{children:"CLIENT ID"})," field we saved earlier.\n(You can find it in the Oauth2 Page in Discord Developer Portal.)"]}),"\n",(0,i.jsx)(n.h4,{id:"clientsecret",children:"clientSecret"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"clientSecret"})," is the ",(0,i.jsx)(n.code,{children:"CLIENT SECRET"})," we saved earlier.\n(If you've lost it you need to click ",(0,i.jsx)(n.strong,{children:"Reset Secret"}),")"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},2981:(e,n,t)=>{t.d(n,{Ay:()=>v,RM:()=>b});var i=t(86070),o=t(15658);function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The sample project is available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/js/tree/master/packages/next-sample",children:"SDK repository"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The example is based on Next.js ",(0,i.jsx)(n.a,{href:"https://nextjs.org/docs/pages",children:"Pages Router"}),"."]}),"\n"]})})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}var a=t(6469);const l=[...a.RM];function c(e){return(0,i.jsx)(a.Ay,{packageName:"@logto/next"})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c()}var p=t(29177),u=t(36083),h=t(12654),g=t(87585);const x=[{value:"Init LogtoClient",id:"init-logtoclient",level:3},{value:"Configure Redirect URIs",id:"configure-redirect-uris",level:3},...g.RM,...u.RM,...h.RM,{value:"Prepare API routes",id:"prepare-api-routes",level:3},{value:"Implement sign-in and sign-out",id:"implement-sign-in-and-sign-out",level:3},...p.RM];function j(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(n.p,{children:"Import and initialize LogtoClient:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="libraries/logto.ts"',children:"import LogtoClient from '@logto/next';\n\nexport const logtoClient = new LogtoClient({\n  appId: '<your-application-id>',\n  appSecret: '<your-app-secret-copied-from-console>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: 'http://localhost:3000',\n  cookieSecret: 'complex_password_at_least_32_characters_long',\n  cookieSecure: process.env.NODE_ENV === 'production',\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"configure-redirect-uris",children:"Configure Redirect URIs"}),"\n",(0,i.jsx)(g.Ay,{}),"\n",(0,i.jsx)(u.Ay,{}),"\n",(0,i.jsx)(h.Ay,{redirectUri:"http://localhost:3000/api/logto/sign-in-callback"}),"\n",(0,i.jsx)(n.h3,{id:"prepare-api-routes",children:"Prepare API routes"}),"\n",(0,i.jsxs)(n.p,{children:["Prepare ",(0,i.jsx)(n.a,{href:"https://nextjs.org/docs/api-routes/introduction",children:"API routes"})," to connect with Logto."]}),"\n",(0,i.jsx)(n.p,{children:"Go back to your IDE/editor, use the following code to implement the API routes first:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="pages/api/logto/[action].ts"',children:"import { logtoClient } from '../../../libraries/logto';\n\nexport default logtoClient.handleAuthRoutes();\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will create 4 routes automatically:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/api/logto/sign-in"}),": Sign in with Logto."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/api/logto/sign-in-callback"}),": Handle sign-in callback."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/api/logto/sign-out"}),": Sign out with Logto."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/api/logto/user"}),": Check if user is authenticated with Logto, if yes, return user info."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in-and-sign-out",children:"Implement sign-in and sign-out"}),"\n",(0,i.jsxs)(n.p,{children:["We have prepared the API routes, now let's implement the sign-in and sign-out buttons in your home page. We need to redirect the user to the sign-in or sign-out route when needed. To help with this, use ",(0,i.jsx)(n.code,{children:"useSWR"})," to fetch authentication status from ",(0,i.jsx)(n.code,{children:"/api/logto/user"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Check ",(0,i.jsx)(n.a,{href:"https://swr.vercel.app/docs/getting-started",children:"this guide"})," to learn more about ",(0,i.jsx)(n.code,{children:"useSWR"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="/pages/index.tsx"',children:"import { type LogtoContext } from '@logto/next';\nimport useSWR from 'swr';\n\nconst Home = () => {\n  const { data } = useSWR<LogtoContext>('/api/logto/user');\n\n  return (\n    <nav>\n      {data?.isAuthenticated ? (\n        <p>\n          Hello, {data.claims?.sub},\n          <button\n            onClick={() => {\n              window.location.assign('/api/logto/sign-out');\n            }}\n          >\n            Sign Out\n          </button>\n        </p>\n      ) : (\n        <p>\n          <button\n            onClick={() => {\n              window.location.assign('/api/logto/sign-in');\n            }}\n          >\n            Sign In\n          </button>\n        </p>\n      )}\n    </nav>\n  );\n};\n\nexport default Home;\n"})}),"\n",(0,i.jsx)(p.Ay,{})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}var f=t(92409);const b=[{value:"Installation",id:"installation",level:3},...l,{value:"Integration",id:"integration",level:3},...x,...f.RM];function A(e){const n={h3:"h3",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(n.h3,{id:"integration",children:"Integration"}),"\n",(0,i.jsx)(m,{}),"\n",(0,i.jsx)(f.Ay,{sdk:"Next"})]})}function v(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(A,{...e})}):A(e)}},37391:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(28084).A+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},23471:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>s});var i=t(86070),o=t(15658);const r=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",s=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(13885).A+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},42969:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(3466).A+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},4914:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/introduction",children:"introduction page"})," to get started."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},37448:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},92409:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},52878:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,connector:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var i=t(43472),o=t(86070),r=t(15658);t(4914),t(23471),t(37391),t(37448),t(42969),t(52878),t(2981),t(51452);const s={slug:"how-to-build-discord-sign-in-with-next-and-logto",authors:"logto",tags:["authentication","discord","next","js","social-sign-in","sign-in","login"],title:"How to build Discord sign-in with Next and Logto"},a=void 0,l={authorsImageUrls:[void 0]},c="Discord",d=[];function p(e){return(0,o.jsx)(o.Fragment,{})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p()}},29177:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[{value:"Checkpoint: Test your application",id:"checkpoint-test-your-application",level:3}];function s(e){const n={h3:"h3",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"checkpoint-test-your-application",children:"Checkpoint: Test your application"}),"\n",(0,i.jsx)(n.p,{children:"Now, you can test your application:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Run your application, you will see the sign-in button."}),"\n",(0,i.jsx)(n.li,{children:"Click the sign-in button, the SDK will init the sign-in process and redirect you to the Logto sign-in page."}),"\n",(0,i.jsx)(n.li,{children:"After you signed in, you will be redirected back to your application and see the sign-out button."}),"\n",(0,i.jsx)(n.li,{children:"Click the sign-out button to clear local storage and sign out."}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},6469:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>a});var i=t(86070),o=t(15658),r=t(78551),s=t(77501);const a=[];function l(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[e.packageName?null:(()=>{throw new Error("props.packageName is required when importing _npm_like_installation.mdx")})(),"\n",(0,i.jsx)(n.p,{children:"Install Logto SDK via your favorite package manager:"}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsx)(r.A,{value:"npm",label:"npm",children:(0,i.jsx)("pre",{children:(0,i.jsxs)("code",{className:"language-bash",children:["npm i ",e.packageName]})})}),(0,i.jsx)(r.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)("pre",{children:(0,i.jsxs)("code",{className:"language-bash",children:["pnpm add ",e.packageName]})})}),(0,i.jsx)(r.A,{value:"yarn",label:"yarn",children:(0,i.jsx)("pre",{children:(0,i.jsxs)("code",{className:"language-bash",children:["yarn add ",e.packageName]})})})]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},68347:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var i=t(86070),o=t(15658);const r=[];function s(e){const n={a:"a",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Regarding redirect-based sign-in"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["This authentication process follows the ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect (OIDC)"})," protocol, and Logto enforces strict security measures to protect user sign-in."]}),"\n",(0,i.jsx)(n.li,{children:"If you have multiple apps, you can use the same identity provider (Logto). Once the user signs in to one app, Logto will automatically complete the sign-in process when the user accesses another app."}),"\n"]}),(0,i.jsxs)(n.p,{children:["To learn more about the rationale and benefits of redirect-based sign-in, see ",(0,i.jsx)(n.a,{href:"/concepts/sign-in-experience",children:"Logto sign-in experience explained"}),"."]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},36083:(e,n,t)=>{t.d(n,{Ay:()=>l,Ip:()=>r,RM:()=>s});var i=t(86070),o=t(15658);const r="http://localhost:3000/",s=[];function a(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,i.jsx)("code",{children:r}),"."]})})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},12654:(e,n,t)=>{t.d(n,{Ay:()=>d,Ip:()=>s,YF:()=>a,RM:()=>l});var i=t(86070),o=t(15658);const r="data:image/png;base64,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",s="http://localhost:3000/",a=`${s}callback`,l=[{value:"Configure redirect URIs",id:"configure-redirect-uris",level:4}];function c(e){const n={h4:"h4",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n","\n",(0,i.jsx)(n.h4,{id:"configure-redirect-uris",children:"Configure redirect URIs"}),"\n",(0,i.jsxs)(n.p,{children:["Switch to the application details page of Logto Console. Add a redirect URI ",(0,i.jsx)("code",{children:e.redirectUri??"http://localhost:3000/callback"}),"."]}),"\n",(0,i.jsx)("img",{alt:"Redirect URI in Logto Console",src:r,width:"600px"}),"\n",(0,i.jsxs)(n.p,{children:["Just like signing in, users should be redirected to Logto for signing out of the shared session. Once finished, it would be great to redirect the user back to your website. For example, add ",(0,i.jsx)("code",{children:s})," as the post sign-out redirect URI section."]}),"\n",(0,i.jsx)(n.p,{children:'Then click "Save" to save the changes.'})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},87585:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>s});var i=t(86070),o=t(15658),r=t(68347);const s=[...r.RM];function a(e){const n={hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Before we dive into the details, here's a quick overview of the end-user experience. The sign-in process can be simplified as follows:"}),"\n",(0,i.jsx)(n.mermaid,{value:"graph LR\n    A(Your app) --\x3e|1. Invoke sign-in| B(Logto)\n    B --\x3e|2. Finish sign-in| A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Your app invokes the sign-in method."}),"\n",(0,i.jsx)(n.li,{children:"The user is redirected to the Logto sign-in page. For native apps, the system browser is opened."}),"\n",(0,i.jsx)(n.li,{children:"The user signs in and is redirected back to your app (configured as the redirect URI)."}),"\n"]}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.hr,{})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},78551:(e,n,t)=>{t.d(n,{A:()=>s});t(30758);var i=t(13526);const o={tabItem:"tabItem_PGP0"};var r=t(86070);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,s),hidden:t,children:n})}},77501:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(30758),o=t(13526),r=t(65052),s=t(25557),a=t(77469),l=t(50873),c=t(62230),d=t(60196);function p(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=u(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,p]=g({queryString:t,groupId:o}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Dv)(t);return[o,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),m=(()=>{const e=c??x;return h({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),j(e)}),[p,j,r]),tabValues:r}}var j=t(13887);const m={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var f=t(86070);function b(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=a[t].value;o!==i&&(c(n),s(o))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:p,onClick:d,...r,className:(0,o.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function A(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(A,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,f.jsx)(v,{...e,children:p(e.children)},String(n))}},28084:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},81684:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},15658:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(30758);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}},43472:e=>{e.exports=JSON.parse('{"permalink":"/zh-CN/tutorial/how-to-build-discord-sign-in-with-next-and-logto","source":"@site/tutorial/build-with-logto/generated-next-discord.mdx","title":"How to build Discord sign-in with Next and Logto","description":"{/*","date":"2024-11-30T06:00:15.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/zh-CN/tutorial/tags/authentication"},{"inline":true,"label":"discord","permalink":"/zh-CN/tutorial/tags/discord"},{"inline":true,"label":"next","permalink":"/zh-CN/tutorial/tags/next"},{"inline":true,"label":"js","permalink":"/zh-CN/tutorial/tags/js"},{"inline":true,"label":"social-sign-in","permalink":"/zh-CN/tutorial/tags/social-sign-in"},{"inline":true,"label":"sign-in","permalink":"/zh-CN/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/zh-CN/tutorial/tags/login"}],"readingTime":1.265,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-discord-sign-in-with-next-and-logto","authors":"logto","tags":["authentication","discord","next","js","social-sign-in","sign-in","login"],"title":"How to build Discord sign-in with Next and Logto"},"unlisted":false,"prevItem":{"title":"How to build Azure AD sign-in with Next and Logto","permalink":"/zh-CN/tutorial/how-to-build-azure-ad-sign-in-with-next-and-logto"},"nextItem":{"title":"How to build Facebook sign-in with Next and Logto","permalink":"/zh-CN/tutorial/how-to-build-facebook-sign-in-with-next-and-logto"}}')}}]);