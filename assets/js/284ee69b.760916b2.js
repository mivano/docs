"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[65616],{8727:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var t=i(69547),o=i(86070),s=i(15658);const r={date:new Date("2023-02-26T00:00:00.000Z"),authors:"gao",tags:["release"]},a="Logto 2023 February Update (Extended)",l={authorsImageUrls:[void 0]},d=[{value:"\ud83d\udca5 BREAKING CHANGES \ud83d\udca5",id:"-breaking-changes-",level:2},{value:"Decouple normal users and admins",id:"decouple-normal-users-and-admins",level:3},{value:"CORS policy",id:"cors-policy",level:3},{value:"\ud83d\udd10 Security update",id:"-security-update",level:2},{value:"\ud83e\uddd1\u200d\ud83d\ude80 Feature update",id:"-feature-update",level:2},{value:"\ud83d\udca1 Smart Input for Sign-in Experience",id:"-smart-input-for-sign-in-experience",level:3},{value:"\ud83c\udfa8 Customize CSS in Sign-in Experience",id:"-customize-css-in-sign-in-experience",level:3},{value:"\ud83d\udd17 Open standard connectors with better config interface",id:"-open-standard-connectors-with-better-config-interface",level:3},{value:"\ud83d\udcc4 New language",id:"-new-language",level:3},{value:"\ud83c\udf89 New Contributors",id:"-new-contributors",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"While Logto Cloud is still under construction, we would like to introduce some new features to our foundation, Logto OSS. This will be the last version before general availability."})}),"\n",(0,o.jsx)(n.p,{children:"Notable updates include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Refactored infrastructure and enhanced security"}),"\n",(0,o.jsx)(n.li,{children:"Smart Input and Customize CSS added to Sign-in Experience"}),"\n",(0,o.jsx)(n.li,{children:"Open standard connectors (SAML, OIDC, and OAuth 2.0)"}),"\n",(0,o.jsx)(n.li,{children:"New language support"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Let's take a look at what's inside!"}),"\n","\n",(0,o.jsx)(n.h2,{id:"-breaking-changes-",children:"\ud83d\udca5 BREAKING CHANGES \ud83d\udca5"}),"\n",(0,o.jsx)(n.h3,{id:"decouple-normal-users-and-admins",children:"Decouple normal users and admins"}),"\n",(0,o.jsx)(n.p,{children:"Logto was using a single port to serve both normal users and admins, as well as the web console. While we continuously maintain a high level of security, it\u2019ll still be great to decouple these components into two separate parts to keep data isolated and provide a flexible infrastructure."}),"\n",(0,o.jsx)("img",{width:"737",alt:"image",src:"https://user-images.githubusercontent.com/14722250/221365507-6f20a804-1059-4933-9b88-df1244ab900b.png"}),"\n",(0,o.jsxs)(n.p,{children:["From this version, Logto now listens to two ports by default, one for normal users (",(0,o.jsx)(n.code,{children:"3001"}),"), and one for admins (",(0,o.jsx)(n.code,{children:"3002"}),")."]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"\u203c\ufe0f Click to expand details"})}),(0,o.jsx)("p",{children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Nothing changed for normal users. No adaption is needed."}),"\n",(0,o.jsxs)(n.li,{children:["For admin users:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The default Admin Console URL has been changed to ",(0,o.jsx)(n.code,{children:"http://localhost:3002/console"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["To change the admin port, set the environment variable ",(0,o.jsx)(n.code,{children:"ADMIN_PORT"}),". For instance, ",(0,o.jsx)(n.code,{children:"ADMIN_PORT=3456"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["You can specify a custom endpoint for admins by setting the environment variable ",(0,o.jsx)(n.code,{children:"ADMIN_ENDPOINT"}),". For example, ",(0,o.jsx)(n.code,{children:"ADMIN_ENDPOINT=https://admin.your-domain.com"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["You can now completely disable admin endpoints by setting ",(0,o.jsx)(n.code,{children:"ADMIN_DISABLE_LOCALHOST=1"})," and leaving ",(0,o.jsx)(n.code,{children:"ADMIN_ENDPOINT"})," unset."]}),"\n",(0,o.jsxs)(n.li,{children:["Admin Console and admin user data are not accessible via normal user endpoints, including ",(0,o.jsx)(n.code,{children:"localhost"})," and ",(0,o.jsx)(n.code,{children:"ENDPOINT"})," from the environment."]}),"\n",(0,o.jsx)(n.li,{children:"Admin Console no longer displays audit logs of admin users. However, these logs still exist in the database, and Logto still inserts admin user logs. There is just no convenient interface to inspect them."}),"\n",(0,o.jsx)(n.li,{children:"Due to the data isolation, the numbers on the dashboard may slightly decrease (admins are excluded)."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Resource Indicator for Logto Management API changed from ",(0,o.jsx)(n.code,{children:"https://[your-tenant-id].logto.app/api"})," to ",(0,o.jsx)(n.code,{children:"https://default.logto.app/api"}),"."]}),"\n"]})})]}),"\n",(0,o.jsxs)(n.p,{children:["If you are upgrading from a previous version, simply run the ",(0,o.jsx)(n.a,{href:"https://docs.logto.io/docs/references/using-cli/database-alteration",children:"database alteration command"})," as usual, and we'll take care of the rest."]}),"\n",(0,o.jsxs)(n.admonition,{type:"success",children:[(0,o.jsx)(n.mdxAdmonitionTitle,{children:(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"DID YOU KNOW?"})})}),(0,o.jsx)(n.p,{children:"Under the hood, we use the powerful Postgres feature Row-Level Security to isolate admin and user data."})]}),"\n",(0,o.jsx)(n.h3,{id:"cors-policy",children:"CORS policy"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:"ADMIN_ENDPOINT"})," is not specified, ",(0,o.jsx)(n.code,{children:"localhost:[admin-port]"})," will be allowed to perform Cross-Origin Resource Sharing (CORS) in Logto."]}),"\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:"ADMIN_ENDPOINT"})," is specified, only requests from the origin of ",(0,o.jsx)(n.code,{children:"ADMIN_ENDPOINT"})," will be allowed."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"-security-update",children:"\ud83d\udd10 Security update"}),"\n",(0,o.jsx)(n.p,{children:"In previous versions, when registering or changing passwords, all new passwords were stored in plain text in the Audit Logs before being encrypted and inserted into the database."}),"\n",(0,o.jsx)(n.p,{children:"In this version, we have updated the process to fully mask password fields before inserting them into the Audit Logs."}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"For enhanced security and compliance, we strongly recommend removing all passwords from the Audit Logs or deleting all logs that include passwords."})}),"\n",(0,o.jsx)(n.p,{children:"If you have any questions regarding this issue or the removal of data, please do not hesitate to contact us via email or Discord."}),"\n",(0,o.jsx)(n.h2,{id:"-feature-update",children:"\ud83e\uddd1\u200d\ud83d\ude80 Feature update"}),"\n",(0,o.jsx)(n.h3,{id:"-smart-input-for-sign-in-experience",children:"\ud83d\udca1 Smart Input for Sign-in Experience"}),"\n",(0,o.jsx)(n.p,{children:"We have integrated the traditional input fields for username, phone number, and email into a single intelligent input box:"}),"\n",(0,o.jsx)("p",{children:(0,o.jsx)("video",{src:"https://user-images.githubusercontent.com/14722250/221401902-cc9bcd91-160c-4058-91ce-1e8a7bdfc842.mov"})}),"\n",(0,o.jsxs)(n.p,{children:["This advanced input box automatically identifies the type of characters you\u2019re entering, such as an ",(0,o.jsx)(n.code,{children:"@"})," sign or consecutive numbers, and provides relevant error feedback."]}),"\n",(0,o.jsx)(n.p,{children:"By streamlining the sign-in process, users no longer need to waste time figuring out which button to click to switch their desired login method. This reduces the risk of errors and ensures a smoother sign-in experience."}),"\n",(0,o.jsx)(n.h3,{id:"-customize-css-in-sign-in-experience",children:"\ud83c\udfa8 Customize CSS in Sign-in Experience"}),"\n",(0,o.jsx)(n.p,{children:"We have put a lot of effort into improving the user sign-in experience and have provided a brand color option for the UI. However, we know that fine-tuning UI requirements can be unpredictable. While Logto is still exploring the best options for customization, we want to provide a programmatic method to unblock your development."}),"\n",(0,o.jsxs)(n.p,{children:["You can now use the Management API ",(0,o.jsx)(n.code,{children:"PATCH /api/sign-in-exp"})," with body ",(0,o.jsx)(n.code,{children:'{ "customCss": "arbitrary string" }'})," to set customized CSS for the sign-in experience. You should see the value of ",(0,o.jsx)(n.code,{children:"customCss"})," attached after ",(0,o.jsx)(n.code,{children:"<title>"})," of the page. If the style has a higher priority, it should be able to override."]}),"\n",(0,o.jsxs)(n.p,{children:["For instance, if you want to give your sign-in page a feel of the ",(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"Night City"})}),", try this CSS:"]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"Click to expand CSS and preview"})}),(0,o.jsx)("p",{}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:"@font-face { font-family: 'Rock Salt'; font-style: normal; font-weight: 400; font-display: swap; src: url(https://fonts.gstatic.com/s/rocksalt/v18/MwQ0bhv11fWD6QsAVOZrt0M6p7NGrQ.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n@font-face { font-family: 'Share Tech'; font-style: normal; font-weight: 400; font-display: swap; src: url(https://fonts.gstatic.com/s/sharetech/v17/7cHtv4Uyi5K0OeZ7bohU8H0JmBUhfrE.woff2) format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }\n#app * { font-family: 'Share Tech'; letter-spacing: 0.5px; }\n#app > div[class$=viewBox] { background-image: url(https://silverhand.io/assets/v-in-nc.jpg); background-size: cover; }\n#app main[class$=main] { background-image: url(https://silverhand.io/assets/gentle-universe.png); background-size: cover; opacity: 0.98; min-height: initial; padding: 24px; padding-bottom: 72px; border-radius: 12px; }\n#app main[class$=main] img[class$=logo] { content: url(https://silverhand.io/assets/cyberpunk-2077.png); margin: -20px 0 -12px; height: 160px; }\n#app main[class$=main] div[class$=headline] { visibility: hidden; height: 60px; }\n#app main[class$=main] div[class$=headline]:before { content: 'Welcome to Night City'; visibility: visible; display: block; font-family: 'Rock Salt'; font-style: italic; line-height: 60px; font-size: 20px; color: rgba(245,250,255,0.6); padding: 0 20px; }\n#app form div[class$=inputField] > div { outline: none; border: none; border-radius: 4px; }\n#app form div[class$=inputField] > div > input, #app form div[class$=inputField] div[class$=countryCodeSelector] { background: initial; background-color: #453f67; font-family: 'Share Tech'; letter-spacing: 0.5px; font-size: 16px; font-weight: 600; }\n#app button { font-weight: 600; font-size: 16px; border-radius: 4px; }\n#app button[type=submit] { background: linear-gradient(270.84deg, #2FD6FB -24.55%, #6369FC 44.33%, #A741EB 119.2%), #5D34F2; }\n"})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/14722250/221394786-4ae77638-8f35-4791-afae-8ab6a314dbf8.jpg",alt:"custom-css-preview"})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:'"We have a city to burn!"'})})]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["Since Logto uses CSS Modules, you may see a hash value in the ",(0,o.jsx)(n.code,{children:"class"})," property of DOM elements (e.g. a ",(0,o.jsx)(n.code,{children:"<div>"})," with ",(0,o.jsx)(n.code,{children:"vUugRG_container"}),")."]}),(0,o.jsxs)(n.p,{children:["To override these, you can use the ",(0,o.jsx)(n.code,{children:"$="})," CSS selector to match elements that end with a specified value. In this case, it should be ",(0,o.jsx)(n.code,{children:"div[class$=container]"}),"."]})]}),"\n",(0,o.jsx)(n.h3,{id:"-open-standard-connectors-with-better-config-interface",children:"\ud83d\udd17 Open standard connectors with better config interface"}),"\n",(0,o.jsx)(n.p,{children:"Logto now supports standard protocols (SAML, OIDC, and OAuth 2.0) for creating social connectors to integrate external identity providers. Each protocol can create multiple social connectors, giving you more control over your access needs."}),"\n",(0,o.jsx)(n.p,{children:"Plus, we optimized the config interface for SAML connectors. Try it and let us know your feeling!"}),"\n",(0,o.jsx)(n.h3,{id:"-new-language",children:"\ud83d\udcc4 New language"}),"\n",(0,o.jsxs)(n.p,{children:["Added Russian translation. (credit ",(0,o.jsx)(n.a,{href:"https://github.com/evist0",children:"@evist0"}),")"]}),"\n",(0,o.jsx)(n.h2,{id:"-new-contributors",children:"\ud83c\udf89 New Contributors"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/Alanimdeo",children:"@Alanimdeo"})," made their first contribution in ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/logto/pull/3064",children:"#3064"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/gadkins",children:"@gadkins"})," made their first contribution in ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/logto/pull/3032",children:"#3032"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/evist0",children:"@evist0"})," made their first contribution in ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/logto/pull/3158",children:"#3158"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/muratgozel",children:"@muratgozel"})," made their first contribution in ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/logto/pull/3203",children:"#3203"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Thank you!"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(30758);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}},69547:e=>{e.exports=JSON.parse('{"permalink":"/blog/releases/2023-feb-extended","source":"@site/blog/releases/2023-feb-extended.md","title":"Logto 2023 February Update (Extended)","description":"While Logto Cloud is still under construction, we would like to introduce some new features to our foundation, Logto OSS. This will be the last version before general availability.","date":"2023-02-26T00:00:00.000Z","tags":[{"inline":true,"label":"release","permalink":"/blog/tags/release"}],"readingTime":5.61,"hasTruncateMarker":true,"authors":[{"name":"Gao","title":"Founder of Silverhand","url":"https://github.com/gao-sun","imageURL":"https://github.com/gao-sun.png","key":"gao","page":null}],"frontMatter":{"date":"2023-02-26T00:00:00.000Z","authors":"gao","tags":["release"]},"unlisted":false,"prevItem":{"title":"Announcing Logto Cloud (Preview) and OSS General Availability","permalink":"/blog/announcing-logto-cloud-preview"},"nextItem":{"title":"Do you need to build your own auth for apps?","permalink":"/blog/do-you-need-to-build-auth"}}')}}]);