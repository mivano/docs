"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[87551],{91569:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[{value:"Register Twilio account",id:"register-twilio-account",level:3},{value:"Set up senders&#39; phone numbers",id:"set-up-senders-phone-numbers",level:3},{value:"Get account credentials",id:"get-account-credentials",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3},{value:"Test Twilio SMS connector",id:"test-twilio-sms-connector",level:4},{value:"Config types",id:"config-types",level:4},{value:"Reference",id:"reference",level:4}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"register-twilio-account",children:"Register Twilio account"}),"\n",(0,o.jsxs)(n.p,{children:["Create a new account on ",(0,o.jsx)(n.a,{href:"https://www.twilio.com",children:"Twilio"}),". (Jump to the next step if you already have one.)"]}),"\n",(0,o.jsx)(n.h3,{id:"set-up-senders-phone-numbers",children:"Set up senders' phone numbers"}),"\n",(0,o.jsxs)(n.p,{children:["Go to the ",(0,o.jsx)(n.a,{href:"https://console.twilio.com/",children:"Twilio console page"})," and sign in with your Twilio account."]}),"\n",(0,o.jsx)(n.p,{children:'Purchase a phone number under "Phone Numbers" -> "Manage" -> "Buy a number".'}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,o.jsx)(n.strong,{children:"Tip"})]}),"\n",(0,o.jsx)(n.p,{children:"Sometimes you may encounter the situation that SMS service is not supported in specific countries or areas. Pick a number from other regions to bypass."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'Once we have a valid number claimed, navigate to the "Messaging" -> "Services". Create a new Message Service by clicking on the button.'}),"\n",(0,o.jsxs)(n.p,{children:["Give a friendly service name and choose ",(0,o.jsx)(n.em,{children:"Notify my users"})," as our service purpose.\nFollowing the next step, choose ",(0,o.jsx)(n.code,{children:"Phone Number"})," as ",(0,o.jsx)(n.em,{children:"Sender Type"}),", and add the phone number we just claimed to this service as a sender."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,o.jsx)(n.strong,{children:"Note"})]}),"\n",(0,o.jsx)(n.p,{children:"Each phone number can only be linked with one messaging service."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"get-account-credentials",children:"Get account credentials"}),"\n",(0,o.jsxs)(n.p,{children:["We will need the API credentials to make the connector work. Let's begin with the ",(0,o.jsx)(n.a,{href:"https://console.twilio.com/",children:"Twilio console page"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:['Click on the "Account" menu in the top-right corner, then go to the "API keys & tokens" page to get your ',(0,o.jsx)(n.code,{children:"Account SID"})," and ",(0,o.jsx)(n.code,{children:"Auth token"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:['Back to "Messaging" -> "Services" settings page starting from the sidebar, and find the ',(0,o.jsx)(n.code,{children:"Sid"})," of your service."]}),"\n",(0,o.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,o.jsxs)(n.p,{children:["Fill out the ",(0,o.jsx)(n.em,{children:"accountSID"}),", ",(0,o.jsx)(n.em,{children:"authToken"})," and ",(0,o.jsx)(n.em,{children:"fromMessagingServiceSID"})," fields with ",(0,o.jsx)(n.code,{children:"Account SID"}),", ",(0,o.jsx)(n.code,{children:"Auth token"})," and ",(0,o.jsx)(n.code,{children:"Sid"})," of the corresponding messaging service."]}),"\n",(0,o.jsx)(n.p,{children:"You can add multiple SMS connector templates for different cases. Here is an example of adding a single template:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Fill out the ",(0,o.jsx)(n.code,{children:"content"})," field with arbitrary string-typed contents. Do not forget to leave ",(0,o.jsx)(n.code,{children:"{{code}}"})," placeholder for random verification code."]}),"\n",(0,o.jsxs)(n.li,{children:["Fill out the ",(0,o.jsx)(n.code,{children:"usageType"})," field with either ",(0,o.jsx)(n.code,{children:"Register"}),", ",(0,o.jsx)(n.code,{children:"SignIn"}),", ",(0,o.jsx)(n.code,{children:"ForgotPassword"}),", ",(0,o.jsx)(n.code,{children:"Generic"})," for different use cases. In order to enable full user flows, templates with usageType ",(0,o.jsx)(n.code,{children:"Register"}),", ",(0,o.jsx)(n.code,{children:"SignIn"}),", ",(0,o.jsx)(n.code,{children:"ForgotPassword"})," and ",(0,o.jsx)(n.code,{children:"Generic"})," are required."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"test-twilio-sms-connector",children:"Test Twilio SMS connector"}),"\n",(0,o.jsx)(n.p,{children:'You can enter a phone number and click on "Send" to see whether the settings can work before "Save and Done".'}),"\n",(0,o.jsx)(n.p,{children:"That's it. Don't forget to enable connector in sign-in experience."}),"\n",(0,o.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"accountSID"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"authToken"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"fromMessagingServiceSID"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"templates"}),(0,o.jsx)(n.td,{children:"Templates[]"})]})]})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Template Properties"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Enum values"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"content"}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"N/A"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"usageType"}),(0,o.jsx)(n.td,{children:"enum string"}),(0,o.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"reference",children:"Reference"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.twilio.com/docs/api/errors",children:"Twilio - Error and Warning Dictionary"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},458:(e,n,t)=>{t.d(n,{Ay:()=>x,RM:()=>u});var o=t(86070),i=t(15658),s=t(21907),r=t(88656),c=t(48293),a=t(65701),l=t(8466),d=t(1364),h=t(90446),g=t(85868);const u=[...r.RM,{value:"Installation",id:"installation",level:3},...h.RM,{value:"Create a session storage",id:"create-a-session-storage",level:3},...s.RM,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...d.RM,{value:"Implement sign-in route",id:"implement-sign-in-route",level:3},...a.RM,{value:"Implement the callback route",id:"implement-the-callback-route",level:3},...c.RM,{value:"Implement sign-out route",id:"implement-sign-out-route",level:3},...l.RM,...g.RM];function p(e){const n={h3:"h3",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(h.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"create-a-session-storage",children:"Create a session storage"}),"\n",(0,o.jsx)(s.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,o.jsx)(d.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-in-route",children:"Implement sign-in route"}),"\n",(0,o.jsx)(a.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-the-callback-route",children:"Implement the callback route"}),"\n",(0,o.jsx)(c.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-out-route",children:"Implement sign-out route"}),"\n",(0,o.jsx)(l.Ay,{}),"\n",(0,o.jsx)(g.Ay,{sdk:"Go"})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},21993:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["To add or change ",e.connectorType,' connector, go to the "Connector" tab in the Admin Console,\nthen click on "Email and SMS connectors". From there, click "Set up" or go to detail page and\nclick "Change ',e.connectorType,' connector".']})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Connector tab",src:t(73977).A+"",width:"4164",height:"1290"})}),"\n",(0,o.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,o.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,o.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},4214:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var o=t(86070),i=t(15658);const s=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function c(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Get Started",src:t(13885).A+"",width:"2354",height:"588"})}),"\n",(0,o.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,o.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,o.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Framework List",src:t(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,o.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,o.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8329:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Select "',e.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up\nidentifier" to provide sign-up for ',e.connectorType," passwordless sign-in, which may increase\nyour conversion rate."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Save changes",src:t(3466).A+"",width:"2474",height:"188"})}),"\n",(0,o.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},65147:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n",(0,o.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,o.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,o.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,o.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,o.jsx)(n.a,{href:"/docs/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["Basic knowledge of ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},85821:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},85868:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,o.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},14225:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},23619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,connector:()=>j,contentTitle:()=>x,default:()=>b,frontMatter:()=>p,metadata:()=>o,toc:()=>f});var o=t(78661),i=t(86070),s=t(15658),r=t(65147),c=t(4214),a=t(21993),l=t(85821),d=t(8329),h=t(14225),g=t(458),u=t(91569);const p={slug:"how-to-build-twilio-sign-in-with-go-and-logto",authors:"logto",tags:["authentication","twilio","go","go","passwordless-sign-in","sign-in","login"],title:"How to build Twilio SMS passwordless sign-in with Go and Logto"},x=void 0,m={authorsImageUrls:[void 0]},j="Twilio",f=[...r.RM,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...c.RM,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...g.RM,{value:"Add Twilio connector",id:"add-twilio-connector",level:2},...a.RM,{value:"Set up Twilio SMS connector",id:"set-up-twilio-sms-connector",level:2},...u.RM,{value:"Save your configuration",id:"save-your-configuration",level:2},...l.RM,{value:"Enable Twilio connector in Sign-in Experience",id:"enable-twilio-connector-in-sign-in-experience",level:2},...d.RM,{value:"Testing and Validation",id:"testing-and-validation",level:2},...h.RM,{value:"Further readings",id:"further-readings",level:2}];function w(e){const n={a:"a",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n","\n","\n",(0,i.jsx)(r.Ay,{connector:j,sdk:"Go",link:"https://go.dev/"}),"\n",(0,i.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,i.jsx)(c.Ay,{type:"Traditional web",framework:"undefined"}),"\n",(0,i.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,i.jsx)(g.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"add-twilio-connector",children:"Add Twilio connector"}),"\n",(0,i.jsx)(a.Ay,{connector:j,connectorType:"SMS"}),"\n",(0,i.jsx)(n.h2,{id:"set-up-twilio-sms-connector",children:"Set up Twilio SMS connector"}),"\n",(0,i.jsx)(u.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,i.jsx)(l.Ay,{connector:j}),"\n",(0,i.jsx)(n.h2,{id:"enable-twilio-connector-in-sign-in-experience",children:"Enable Twilio connector in Sign-in Experience"}),"\n",(0,i.jsx)(d.Ay,{connectorType:"SMS",passwordlessSignUpIdentifier:"Phone number"}),"\n",(0,i.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,i.jsx)(h.Ay,{connector:j,sdk:"Go"}),"\n",(0,i.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,i.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,i.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,i.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function b(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}},42897:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var o=t(86070),i=t(15658);const s=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",r=[];function c(e){const n={admonition:"admonition",...(0,i.R)(),...e.components};return(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,o.jsx)("img",{alt:"App Secret",src:s,width:"586px"})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},21907:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In traditional web applications, the user authentication information will be stored in the user session."}),"\n",(0,o.jsxs)(n.p,{children:["Logto SDK provides a ",(0,o.jsx)(n.code,{children:"Storage"})," interface, you can implement a ",(0,o.jsx)(n.code,{children:"Storage"})," adapter based on your web framework so that the Logto SDK can store user authentication information in the session."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"We do NOT recommend using cookie-based sessions, as user authentication information stored by Logto may exceed the cookie size limit.\nIn this example, we use memory-based sessions. You can use Redis, MongoDB, and other technologies in production to store sessions as needed."})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Storage"})," type in the Logto SDK is as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="github.com/logto-io/client/storage.go"',children:"package client\n\ntype Storage interface {\n\tGetItem(key string) string\n\tSetItem(key, value string)\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We use ",(0,o.jsx)(n.a,{href:"https://github.com/gin-contrib/sessions",children:"github.com/gin-contrib/sessions"})," middleware as an example to demonstrate this process."]}),"\n",(0,o.jsx)(n.p,{children:"Apply the middleware to the application, so that we can get the user session by the user request context in the route handler:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n\t"github.com/gin-contrib/sessions"\n\t"github.com/gin-contrib/sessions/memstore"\n\t"github.com/gin-gonic/gin"\n\t"github.com/logto-io/go/client"\n)\n\nfunc main() {\n\trouter := gin.Default()\n\n\t// We use memory-based session in this example\n\tstore := memstore.NewStore([]byte("your session secret"))\n\trouter.Use(sessions.Sessions("logto-session", store))\n\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// Get user session\n\t\tsession := sessions.Default(ctx)\n\t\t// ...\n\t\tctx.String(200, "Hello Logto!")\n\t})\n\trouter.Run(":3000")\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:"session_storage.go"})," file, define a ",(0,o.jsx)(n.code,{children:"SessionStorage"})," and implement the Logto SDK's ",(0,o.jsx)(n.code,{children:"Storage"})," interfaces:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="session_storage.go"',children:'package main\n\nimport (\n\t"github.com/gin-contrib/sessions"\n)\n\ntype SessionStorage struct {\n\tsession sessions.Session\n}\n\nfunc (storage *SessionStorage) GetItem(key string) string {\n\tvalue := storage.session.Get(key)\n\tif value == nil {\n\t\treturn ""\n\t}\n\treturn value.(string)\n}\n\nfunc (storage *SessionStorage) SetItem(key, value string) {\n\tstorage.session.Set(key, value)\n\tstorage.session.Save()\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now, in the route handler, you can create a session storage for Logto:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"session := sessions.Default(ctx)\nsessionStorage := &SessionStorage{session: session}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},88656:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The following demonstration is built upon the ",(0,o.jsx)(n.a,{href:"https://gin-gonic.com",children:"Gin Web Framework"}),". You may also integrate Logto into other frameworks by taking the same steps."]}),"\n",(0,o.jsxs)(n.li,{children:["The Go sample project is available on our ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/go/tree/master/gin-sample",children:"Go SDK repo"}),"."]}),"\n"]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},48293:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"When the user signs in successfully on the Logto sign-in page, Logto will redirect the user to the Redirect URI."}),"\n",(0,o.jsxs)(n.p,{children:["Since the redirect URI is ",(0,o.jsx)(n.code,{children:"http://localhost:3000/callback"}),", we add the ",(0,o.jsx)(n.code,{children:"/callback"})," route to handle the callback after signing in."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\t// Add a route for handling sign-in callback requests\n\trouter.GET("/callback", func(ctx *gin.Context) {\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// The sign-in callback request is handled by Logto\n\t\terr := logtoClient.HandleSignInCallback(ctx.Request)\n\t\tif err != nil {\n\t\t\tctx.String(http.StatusInternalServerError, err.Error())\n\t\t\treturn\n\t\t}\n\n\t\t// Jump to the page specified by the developer.\n\t\t// This example takes the user back to the home page.\n\t\tctx.Redirect(http.StatusTemporaryRedirect, "/")\n\t})\n\n\t// ...\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},65701:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["After the redirect URI is configured, we add a ",(0,o.jsx)(n.code,{children:"sign-in"})," route to handle the sign-in request and also add an sign-in link on the home page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\t// Add a link to perform a sign-in request on the home page\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// ...\n\t\thomePage := `<h1>Hello Logto</h1>` +\n\t\t\t"<div>" + authState + "</div>" +\n\t\t\t// Add link\n\t\t\t`<div><a href="/sign-in">Sign In</a></div>`\n\n\t\tctx.Data(http.StatusOK, "text/html; charset=utf-8", []byte(homePage))\n\t})\n\n\t// Add a route for handling sign-in requests\n\trouter.GET("/sign-in", func(ctx *gin.Context) {\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// The sign-in request is handled by Logto.\n\t\t// The user will be redirected to the Redirect URI on signed in.\n\t\tsignInUri, err := logtoClient.SignIn("http://localhost:3000/callback")\n\t\tif err != nil {\n\t\t\tctx.String(http.StatusInternalServerError, err.Error())\n\t\t\treturn\n\t\t}\n\n\t\t// Redirect the user to the Logto sign-in page.\n\t\tctx.Redirect(http.StatusTemporaryRedirect, signInUri)\n\t})\n\n\t// ...\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Now, when your user visit ",(0,o.jsx)(n.code,{children:"http://localhost:3000/sign-in"}),", the user will be redirected to the Logto sign-in page."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},8466:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Similar to the sign-in flow, when the user signs out, Logto will redirect the user to the post sign-out redirect URI."}),"\n",(0,o.jsxs)(n.p,{children:["Now, let's add the ",(0,o.jsx)(n.code,{children:"sign-out"})," route to handle the sign-out request and also add a sign-out link on the home page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\t// Add a link to perform a sign-out request on the home page\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// ...\n\t\thomePage := `<h1>Hello Logto</h1>` +\n\t\t\t"<div>" + authState + "</div>" +\n\t\t\t`<div><a href="/sign-in">Sign In</a></div>` +\n\t\t\t// Add link\n\t\t\t`<div><a href="/sign-out">Sign Out</a></div>`\n\n\t\tctx.Data(http.StatusOK, "text/html; charset=utf-8", []byte(homePage))\n\t})\n\n\t// Add a route for handling signing out requests\n\trouter.GET("/sign-out", func(ctx *gin.Context) {\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// The sign-out request is handled by Logto.\n\t\t// The user will be redirected to the Post Sign-out Redirect URI on signed out.\n\t\tsignOutUri, signOutErr := logtoClient.SignOut("http://localhost:3000")\n\n\t\tif signOutErr != nil {\n\t\t\tctx.String(http.StatusOK, signOutErr.Error())\n\t\t\treturn\n\t\t}\n\n\t\tctx.Redirect(http.StatusTemporaryRedirect, signOutUri)\n\t})\n\n\t// ...\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"After the user makes a signing-out request, Logto will clear all user authentication information in the session."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},1364:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var o=t(86070),i=t(15658),s=t(42897);const r=[...s.RM];function c(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"First, create a Logto config:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\tlogtoConfig := &client.LogtoConfig{\n\t\tEndpoint:  "<your-logto-endpoint>", // E.g. http://localhost:3001\n\t\tAppId:     "<your-application-id>",\n\t\tAppSecret: "<your-application-secret>",\n\t}\n\t// ...\n}\n'})}),"\n",(0,o.jsx)(s.Ay,{}),"\n",(0,o.jsxs)(n.p,{children:["Then, you can create a ",(0,o.jsx)(n.code,{children:"LogtoClient"})," for each user request with the Logto config above:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// Create LogtoClient\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// Use Logto to control the content of the home page\n\t\tauthState := "You are not logged in to this website. :("\n\n\t\tif logtoClient.IsAuthenticated() {\n\t\t\tauthState = "You are logged in to this website! :)"\n\t\t}\n\n\t\thomePage := `<h1>Hello Logto</h1>` +\n\t\t\t"<div>" + authState + "</div>"\n\n\t\tctx.Data(http.StatusOK, "text/html; charset=utf-8", []byte(homePage))\n\t})\n\n\t// ...\n}\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},90446:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Execute in the project root directory:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go get github.com/logto-io/go\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Add the ",(0,o.jsx)(n.code,{children:"github.com/logto-io/go/client"})," package to your application code:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'// main.go\npackage main\n\nimport (\n\t"github.com/gin-gonic/gin"\n\t// Add dependency\n\t"github.com/logto-io/go/client"\n)\n\nfunc main() {\n\trouter := gin.Default()\n\trouter.GET("/", func(c *gin.Context) {\n\t\tc.String(200, "Hello Logto!")\n\t})\n\trouter.Run(":3000")\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},73977:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"},81684:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},15658:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(30758);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}},78661:e=>{e.exports=JSON.parse('{"permalink":"/tutorial/how-to-build-twilio-sign-in-with-go-and-logto","source":"@site/tutorial/build-with-logto/generated-go-twilio.mdx","title":"How to build Twilio SMS passwordless sign-in with Go and Logto","description":"{/*","date":"2024-11-20T02:03:44.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/tutorial/tags/authentication"},{"inline":true,"label":"twilio","permalink":"/tutorial/tags/twilio"},{"inline":true,"label":"go","permalink":"/tutorial/tags/go"},{"inline":true,"label":"go","permalink":"/tutorial/tags/go"},{"inline":true,"label":"passwordless-sign-in","permalink":"/tutorial/tags/passwordless-sign-in"},{"inline":true,"label":"sign-in","permalink":"/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/tutorial/tags/login"}],"readingTime":1.3,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-twilio-sign-in-with-go-and-logto","authors":"logto","tags":["authentication","twilio","go","go","passwordless-sign-in","sign-in","login"],"title":"How to build Twilio SMS passwordless sign-in with Go and Logto"},"unlisted":false,"prevItem":{"title":"How to build SendGrid Email passwordless sign-in with Go and Logto","permalink":"/tutorial/how-to-build-sendgrid-sign-in-with-go-and-logto"},"nextItem":{"title":"How to build Apple sign-in with iOS Swift and Logto","permalink":"/tutorial/how-to-build-apple-sign-in-with-ios-swift-and-logto"}}')}}]);