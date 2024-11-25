"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[67197],{20783:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[{value:"Set up a project in the Kakao Devlopers Console",id:"set-up-a-project-in-the-kakao-devlopers-console",level:3},{value:"Configure Kakao Login",id:"configure-kakao-login",level:3},{value:"Activate Kakao Login",id:"activate-kakao-login",level:4},{value:"Privacy Setting",id:"privacy-setting",level:4},{value:"Security Setting (Optional)",id:"security-setting-optional",level:4},{value:"Configure Logto",id:"configure-logto",level:3},{value:"Config types",id:"config-types",level:4},{value:"clientId",id:"clientid",level:4},{value:"clientSeceret",id:"clientseceret",level:4}];function r(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"set-up-a-project-in-the-kakao-devlopers-console",children:"Set up a project in the Kakao Devlopers Console"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Visit the ",(0,i.jsx)(n.a,{href:"https://developers.kakao.com/console/app",children:"Kakao Developers Console"})," and sign in with your Kakao account."]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Add an application"})," to create new project or choose exist project."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-kakao-login",children:"Configure Kakao Login"}),"\n",(0,i.jsx)(n.h4,{id:"activate-kakao-login",children:"Activate Kakao Login"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Product Settings -> Kakao Login"})," from the menu."]}),"\n",(0,i.jsxs)(n.li,{children:["Turn on ",(0,i.jsx)(n.code,{children:"Kakao Login Activation"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add below URL into ",(0,i.jsx)(n.code,{children:"Redirect URI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"http(s)://YOUR_URL/callback/${connector_id}"})," (The ",(0,i.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page.)"]}),"\n",(0,i.jsxs)(n.li,{children:["(Please replace ",(0,i.jsx)(n.code,{children:"YOUR_URL"})," with your ",(0,i.jsx)(n.code,{children:"Logto"})," URL, and choose ",(0,i.jsx)(n.code,{children:"http"})," or ",(0,i.jsx)(n.code,{children:"https"})," on your situation.)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"privacy-setting",children:"Privacy Setting"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Product Settings -> Kakao Login -> Consent Item"})," from the menu."]}),"\n",(0,i.jsxs)(n.li,{children:["Change state of ",(0,i.jsx)(n.code,{children:"Nickname"}),", ",(0,i.jsx)(n.code,{children:"Profile image"}),", and ",(0,i.jsx)(n.code,{children:"Email"})," to ",(0,i.jsx)(n.strong,{children:"Required consent"})," (You might not able to change ",(0,i.jsx)(n.code,{children:"Email"})," to ",(0,i.jsx)(n.strong,{children:"Required consent"})," because of your project setting.)"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"security-setting-optional",children:"Security Setting (Optional)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Product Settings -> Kakao Login -> Security"})," from the menu."]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.code,{children:"Client secret code"})," to generate secret code."]}),"\n",(0,i.jsxs)(n.li,{children:["Change ",(0,i.jsx)(n.code,{children:"Activation state"})," to Enable. (If you enable it, ",(0,i.jsx)(n.code,{children:"secret code"})," is necessary.)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-logto",children:"Configure Logto"}),"\n",(0,i.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string?"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"clientid",children:"clientId"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"clientId"})," is ",(0,i.jsx)(n.code,{children:"REST API key"})," of your project.\n(You can find it from ",(0,i.jsx)(n.code,{children:"summary"})," of your project from Kakao developers console.)"]}),"\n",(0,i.jsx)(n.h4,{id:"clientseceret",children:"clientSeceret"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"clientSecret"})," is ",(0,i.jsx)(n.code,{children:"Secret Code"})," of your project.\n(Please check ",(0,i.jsx)(n.a,{href:"#security-setting-optional",children:"Security Setting (Optional)"}),")"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},41221:(e,n,t)=>{t.d(n,{Ay:()=>g,RM:()=>h});var i=t(86070),o=t(15658),s=t(51973),r=t(59051),a=t(8013),c=t(83127),l=t(37205),d=t(72217);const h=[...s.RM,{value:"Installation",id:"installation",level:3},...l.RM,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...c.RM,{value:"Implement sign-in and sign-out",id:"implement-sign-in-and-sign-out",level:3},...a.RM,{value:"Handle authentication status",id:"handle-authentication-status",level:3},...r.RM,...d.RM];function p(e){const n={h3:"h3",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(l.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(c.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in-and-sign-out",children:"Implement sign-in and sign-out"}),"\n",(0,i.jsx)(a.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(d.Ay,{sdk:"Python"})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},5103:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(28084).A+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},78752:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var i=t(86070),o=t(15658);const s=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(13885).A+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},70777:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(3466).A+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},56818:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/docs/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},19400:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},72217:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},98862:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},86777:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,connector:()=>m,contentTitle:()=>j,default:()=>k,frontMatter:()=>u,metadata:()=>i,toc:()=>f});var i=t(61204),o=t(86070),s=t(15658),r=t(56818),a=t(78752),c=t(5103),l=t(19400),d=t(70777),h=t(98862),p=t(41221),g=t(20783);const u={slug:"how-to-build-kakao-sign-in-with-python-and-logto",authors:"logto",tags:["authentication","kakao","python","python","social-sign-in","sign-in","login"],title:"How to build Kakao sign-in with Python and Logto"},j=void 0,x={authorsImageUrls:[void 0]},m="Kakao",f=[...r.RM,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...a.RM,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...p.RM,{value:"Add Kakao connector",id:"add-kakao-connector",level:2},...c.RM,{value:"Set up Kakao login",id:"set-up-kakao-login",level:2},...g.RM,{value:"Save your configuration",id:"save-your-configuration",level:2},...l.RM,{value:"Enable Kakao connector in Sign-in Experience",id:"enable-kakao-connector-in-sign-in-experience",level:2},...d.RM,{value:"Testing and Validation",id:"testing-and-validation",level:2},...h.RM,{value:"Further readings",id:"further-readings",level:2}];function A(e){const n={a:"a",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n","\n","\n",(0,o.jsx)(r.Ay,{connector:m,sdk:"Python",link:"https://www.python.org/"}),"\n",(0,o.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,o.jsx)(a.Ay,{type:"Traditional web",framework:"Flask"}),"\n",(0,o.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,o.jsx)(p.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"add-kakao-connector",children:"Add Kakao connector"}),"\n",(0,o.jsx)(c.Ay,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"set-up-kakao-login",children:"Set up Kakao login"}),"\n",(0,o.jsx)(g.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,o.jsx)(l.Ay,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"enable-kakao-connector-in-sign-in-experience",children:"Enable Kakao connector in Sign-in Experience"}),"\n",(0,o.jsx)(d.Ay,{connector:m}),"\n",(0,o.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,o.jsx)(h.Ay,{connector:m,sdk:"Python"}),"\n",(0,o.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,o.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,o.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,o.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function k(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(A,{...e})}):A(e)}},33425:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var i=t(86070),o=t(15658);const s=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",r=[];function a(e){const n={admonition:"admonition",...(0,o.R)(),...e.components};return(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,i.jsx)("img",{alt:"App Secret",src:s,width:"586px"})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},25909:(e,n,t)=>{t.d(n,{Ay:()=>d,Ip:()=>r,RM:()=>c,YF:()=>a});var i=t(86070),o=t(15658),s=t(75844);const r="http://localhost:3000/",a=`${r}callback`,c=[{value:"Configure redirect URIs",id:"configure-redirect-uris",level:4}];function l(e){const n={h4:"h4",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n","\n",(0,i.jsx)(n.h4,{id:"configure-redirect-uris",children:"Configure redirect URIs"}),"\n",(0,i.jsxs)(n.p,{children:["Switch to the application details page of Logto Console. Add a redirect URI ",(0,i.jsx)("code",{children:e.redirectUri??"http://localhost:3000/callback"}),"."]}),"\n",(0,i.jsx)("img",{alt:"Redirect URI in Logto Console",src:s.A,width:"600px"}),"\n",(0,i.jsxs)(n.p,{children:["Just like signing in, users should be redirected to Logto for signing out of the shared session. Once finished, it would be great to redirect the user back to your website. For example, add ",(0,i.jsx)("code",{children:r})," as the post sign-out redirect URI section."]}),"\n",(0,i.jsx)(n.p,{children:'Then click "Save" to save the changes.'})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},51973:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The example uses ",(0,i.jsx)(n.a,{href:"https://flask.palletsprojects.com/en/2.3.x/",children:"Flask"}),", but the concepts are the same for other frameworks."]}),"\n",(0,i.jsxs)(n.li,{children:["The Python sample project is available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/python/tree/master/samples",children:"Python SDK repo"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Logto SDK leverages coroutines, remember to use ",(0,i.jsx)(n.code,{children:"await"})," when calling async functions."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},59051:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In Logto SDK, we can use ",(0,i.jsx)(n.code,{children:"client.isAuthenticated()"})," to check the authentication status, if the user is signed in, the value will be true, otherwise, the value will be false."]}),"\n",(0,i.jsx)(n.p,{children:"Here we also implement a simple home page for demonstration:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the user is not signed in, show a sign-in button;"}),"\n",(0,i.jsx)(n.li,{children:"If the user is signed in, show a sign-out button."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'@app.route("/")\nasync def home():\n    if client.isAuthenticated() is False:\n        return "Not authenticated <a href=\'/sign-in\'>Sign in</a>"\n    return "Authenticated <a href=\'/sign-out\'>Sign out</a>"\n'})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},8013:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>a});var i=t(86070),o=t(15658),s=t(98742),r=t(25909);const a=[];function c(e){const n={blockquote:"blockquote",code:"code",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In your web application, add a route to properly handle the sign-in request from users. Let's use ",(0,i.jsx)(n.code,{children:"/sign-in"})," as an example:"]}),"\n",(0,i.jsx)(s.A,{language:"python",title:"flask.py",children:`@app.route("/sign-in")\nasync def sign_in():\n  # Get the sign-in URL and redirect the user to it\n  return redirect(await client.signIn(\n      redirectUri="${r.YF}",\n  ))\n`}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)("code",{children:r.YF})," with the callback URL you set in your Logto Console for this application."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to show the sign-up page on the first screen, you can set ",(0,i.jsx)(n.code,{children:"interactionMode"})," to ",(0,i.jsx)(n.code,{children:"signUp"}),":"]}),"\n",(0,i.jsx)(s.A,{language:"python",title:"flask.py",children:`@app.route("/sign-in")\nasync def sign_in():\n  return redirect(await client.signIn(\n      redirectUri="${r.YF}",\n      interactionMode="signUp", # Show the sign-up page on the first screen\n  ))\n`}),"\n",(0,i.jsxs)(n.p,{children:["Now, whenever your users visit ",(0,i.jsxs)("code",{children:[r.Ip,"sign-in"]}),", it will start a new sign-in attempt and redirect the user to the Logto sign-in page."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),"\nCreating a sign-in route isn't the only way to start a sign-in attempt. You can always use the ",(0,i.jsx)(n.code,{children:"signIn"})," method to get the sign-in URL and redirect the user to it."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After the user makes a signing-out request, Logto will clear all user authentication information in the session."}),"\n",(0,i.jsx)(n.p,{children:"To clean up the Python session and Logto session, a sign-out route can be implemented as follows:"}),"\n",(0,i.jsx)(s.A,{language:"python",title:"flask.py",children:`@app.route("/sign-out")\nasync def sign_out():\n  return redirect(\n      # Redirect the user to the home page after a successful sign-out\n      await client.signOut(postLogoutRedirectUri="${r.Ip}")\n  )\n`})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},83127:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var i=t(86070),o=t(15658),s=t(33425);const r=[...s.RM];function a(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"First, create a Logto config:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="client.py"',children:'from logto import LogtoClient, LogtoConfig\n\nclient = LogtoClient(\n    LogtoConfig(\n        endpoint="https://you-logto-endpoint.app",  # Replace with your Logto endpoint\n        appId="replace-with-your-app-id",\n        appSecret="replace-with-your-app-secret",\n    ),\n)\n'})}),"\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(n.p,{children:"Also replace the default memory storage with a persistent storage, for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="client.py"',children:"from logto import LogtoClient, LogtoConfig, Storage\nfrom flask import session\nfrom typing import Union\n\nclass SessionStorage(Storage):\n    def get(self, key: str) -> Union[str, None]:\n        return session.get(key, None)\n\n    def set(self, key: str, value: Union[str, None]) -> None:\n        session[key] = value\n\n    def delete(self, key: str) -> None:\n        session.pop(key, None)\n\nclient = LogtoClient(\n    LogtoConfig(...),\n    storage=SessionStorage(),\n)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/python/blob/master/logto/Storage.py",children:"Storage"})," for more details."]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},37205:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var i=t(86070),o=t(15658);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Execute in the project root directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install logto # or `poetry add logto` or whatever you use\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},75844:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,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"},28084:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},81684:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},61204:e=>{e.exports=JSON.parse('{"permalink":"/tutorial/how-to-build-kakao-sign-in-with-python-and-logto","source":"@site/tutorial/build-with-logto/generated-python-kakao.mdx","title":"How to build Kakao sign-in with Python and Logto","description":"{/*","date":"2024-11-25T07:48:59.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/tutorial/tags/authentication"},{"inline":true,"label":"kakao","permalink":"/tutorial/tags/kakao"},{"inline":true,"label":"python","permalink":"/tutorial/tags/python"},{"inline":true,"label":"python","permalink":"/tutorial/tags/python"},{"inline":true,"label":"social-sign-in","permalink":"/tutorial/tags/social-sign-in"},{"inline":true,"label":"sign-in","permalink":"/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/tutorial/tags/login"}],"readingTime":1.28,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-kakao-sign-in-with-python-and-logto","authors":"logto","tags":["authentication","kakao","python","python","social-sign-in","sign-in","login"],"title":"How to build Kakao sign-in with Python and Logto"},"unlisted":false,"prevItem":{"title":"How to build Hugging Face sign-in with Python and Logto","permalink":"/tutorial/how-to-build-hugging-face-sign-in-with-python-and-logto"},"nextItem":{"title":"How to build Naver sign-in with Python and Logto","permalink":"/tutorial/how-to-build-naver-sign-in-with-python-and-logto"}}')}}]);