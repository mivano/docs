"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[57338],{6083:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>R,contentTitle:()=>k,default:()=>P,frontMatter:()=>E,metadata:()=>o,toc:()=>M});const o=JSON.parse('{"id":"connectors/sms-connectors/sms-connectors","title":"SMS connectors","description":"Configuring an SMS connector allows you to send a one-time password (OTP) to the user\'s phone number. This passwordless authentication mechanism can be utilized in various scenarios, including sign-up, sign-in, forgot password, and link-account processes, to validate the user\'s identity. It streamlines user authentication and enhances security by minimizing the risk of password-related breaches.","source":"@site/docs/connectors/sms-connectors/README.mdx","sourceDirName":"connectors/sms-connectors","slug":"/connectors/sms-connectors/","permalink":"/connectors/sms-connectors/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/connectors/sms-connectors/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"sms-connectors","title":"SMS connectors","sidebar_label":"SMS connectors","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Email templates","permalink":"/connectors/email-connectors/email-templates"},"next":{"title":"SMS templates","permalink":"/connectors/sms-connectors/sms-templates"}}');var i,s=t(86070),r=t(15658),c=t(22211),l=t(30758);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(null,arguments)}const d=e=>{let{title:n,titleId:t,...o}=e;return l.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},o),n?l.createElement("title",{id:t},n):null,i||(i=l.createElement("path",{fill:"#E31E26",fillRule:"evenodd",d:"M11.982 0C5.376 0 0 5.384 0 12s5.376 12 11.982 12C18.624 24.035 24 18.65 24 12S18.624 0 11.982 0m0 20.868c-4.849 0-8.82-3.977-8.82-8.868 0-4.856 3.971-8.833 8.82-8.833 4.885 0 8.856 3.977 8.856 8.833 0 4.891-3.971 8.868-8.856 8.868m2.989-9.36a2.497 2.497 0 0 0 2.494-2.5 2.497 2.497 0 0 0-2.494-2.498 2.497 2.497 0 0 0-2.495 2.499 2.497 2.497 0 0 0 2.495 2.498m2.494 3.483a2.497 2.497 0 0 1-2.494 2.499 2.497 2.497 0 0 1-2.495-2.499 2.497 2.497 0 0 1 2.495-2.498 2.497 2.497 0 0 1 2.494 2.498M8.997 17.49a2.497 2.497 0 0 0 2.495-2.499 2.497 2.497 0 0 0-2.495-2.498 2.497 2.497 0 0 0-2.494 2.498 2.497 2.497 0 0 0 2.494 2.499m2.495-8.481a2.497 2.497 0 0 1-2.495 2.498A2.497 2.497 0 0 1 6.502 9.01 2.497 2.497 0 0 1 8.996 6.51a2.497 2.497 0 0 1 2.495 2.499",clipRule:"evenodd"})))};var h;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u.apply(null,arguments)}const m=e=>{let{title:n,titleId:t,...o}=e;return l.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},o),n?l.createElement("title",{id:t},n):null,h||(h=l.createElement("image",{xlinkHref:"data:image/png;base64,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",width:24,height:24,preserveAspectRatio:"none"})))};var g,p;function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},f.apply(null,arguments)}const A=e=>{let{title:n,titleId:t,...o}=e;return l.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},o),n?l.createElement("title",{id:t},n):null,g||(g=l.createElement("g",{clipPath:"url(#gateway_svg__a)"},l.createElement("path",{fill:"#0025BF",d:"M0 15.631c0 1.137.884 2.084 2.02 2.147h16.23L0 .917z"}),l.createElement("path",{fill:"#0B51FF",d:"M8.083.917H0l18.314 16.924 5.683 5.242V15.63z"}),l.createElement("path",{fill:"#067DFF",d:"m8.083.917 15.914 14.714V8.18L16.167.917z"}),l.createElement("path",{fill:"#03A5FF",d:"M21.976.917h-5.81l7.831 7.262V3.064a2.026 2.026 0 0 0-2.02-2.147"}))),p||(p=l.createElement("defs",null,l.createElement("clipPath",{id:"gateway_svg__a"},l.createElement("path",{fill:"#fff",d:"M0 .917h24v22.166H0z"})))))};var v;function b(){return b=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},b.apply(null,arguments)}const y=e=>{let{title:n,titleId:t,...o}=e;return l.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},o),n?l.createElement("title",{id:t},n):null,v||(v=l.createElement("path",{fill:"#FF6A00",d:"M3.263 4.585C2.17 4.81.995 5.684.506 6.642.018 7.599 0 7.835 0 11.866c0 2.15.036 3.923.09 4.2a4.11 4.11 0 0 0 3.245 3.245c.498.09 6.97.136 6.97.036 0-.072-.551-2.242-.579-2.269-.009-.018-1.157-.271-2.55-.57-3.244-.705-3.15-.678-3.416-1.003l-.235-.28V8.662l.235-.285c.27-.326.172-.298 3.417-1.004l2.55-.57c.027-.019.578-2.188.578-2.257 0-.086-6.607-.045-7.042.045zm10.477.013c.01.163.515 2.152.57 2.206.018.027 1.256.308 2.74.624 1.482.316 2.802.637 2.92.705.158.092.292.223.388.38.145.253.163.524.163 3.435s-.018 3.181-.163 3.435a1.2 1.2 0 0 1-.389.38c-.117.063-1.425.379-2.92.704l-2.739.628c-.054.055-.56 2.043-.57 2.206 0 .1.651.117 3.508.09 3.937-.036 3.986-.045 4.99-.723a4.13 4.13 0 0 0 1.554-2.034c.208-.606.208-.66.208-4.683s0-4.077-.208-4.682a4.13 4.13 0 0 0-1.555-2.035c-1.003-.677-1.048-.687-4.99-.722-2.856-.027-3.507-.014-3.507.09zm-4.035 7.164a.65.65 0 0 0-.018.298c.027.15.19.163 2.314.19l2.278.018v-.633h-2.256c-1.89 0-2.278.018-2.314.127z"})))};var j,x;function w(){return w=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},w.apply(null,arguments)}const S=e=>{let{title:n,titleId:t,...o}=e;return l.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":t},o),n?l.createElement("title",{id:t},n):null,j||(j=l.createElement("g",{clipPath:"url(#tencent-sms_svg__a)"},l.createElement("path",{fill:"#00A3FF",d:"M20.743 17.32c-.385.373-1.155.933-2.504.933H9.956c2.505-2.333 4.623-4.293 4.816-4.48.193-.186.674-.653 1.156-1.026.963-.84 1.733-.934 2.407-.934.964 0 1.734.374 2.408.934 1.349 1.213 1.349 3.36 0 4.573m1.638-6.067c-.964-1.026-2.408-1.68-3.95-1.68-1.348 0-2.503.467-3.563 1.214-.385.373-.963.746-1.444 1.306-.386.374-8.668 8.214-8.668 8.214.481.093 1.059.093 1.54.093h10.499c.77 0 1.348 0 1.926-.093a6 6 0 0 0 3.563-1.494 5.21 5.21 0 0 0 .097-7.56"}),l.createElement("path",{fill:"#00C8DC",d:"M8.897 10.693c-1.06-.746-2.119-1.12-3.371-1.12-1.54 0-2.986.654-3.949 1.68-2.119 2.147-2.119 5.507.097 7.654.963.84 1.926 1.306 3.082 1.4l2.215-2.054H5.719c-1.252-.093-2.023-.466-2.504-.933a3.28 3.28 0 0 1-.097-4.667c.674-.653 1.445-.933 2.408-.933.578 0 1.445.093 2.312.933.385.374 1.444 1.12 1.83 1.494h.096l1.444-1.4v-.094c-.674-.653-1.733-1.493-2.311-1.96"}),l.createElement("path",{fill:"#006EFF",d:"M19.01 8.36c-1.06-2.8-3.853-4.76-7.031-4.76-3.756 0-6.742 2.707-7.32 6.067.29 0 .578-.094.963-.094.386 0 .867.094 1.252.094.482-2.334 2.6-4.014 5.105-4.014a5.34 5.34 0 0 1 4.816 2.987s.096.093.096 0c.674-.093 1.445-.28 2.119-.28q0 .14 0 0"}))),x||(x=l.createElement("defs",null,l.createElement("clipPath",{id:"tencent-sms_svg__a"},l.createElement("path",{fill:"#fff",d:"M0 3.6h24v16.8H0z"})))))};const E={id:"sms-connectors",title:"SMS connectors",sidebar_label:"SMS connectors",sidebar_position:1},k="SMS connectors",R={},M=[{value:"Choose your SMS connector",id:"choose-your-sms-connector",level:2},{value:"Configuration steps",id:"configuration-steps",level:2},{value:"Enable phone number sign-up or sign-in",id:"enable-phone-number-sign-up-or-sign-in",level:2},{value:"FAQs",id:"faqs",level:2}];function C(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{CloudLink:t,Details:o}=n;return t||z("CloudLink",!0),o||z("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"sms-connectors",children:"SMS connectors"})}),"\n",(0,s.jsx)(n.p,{children:"Configuring an SMS connector allows you to send a one-time password (OTP) to the user's phone number. This passwordless authentication mechanism can be utilized in various scenarios, including sign-up, sign-in, forgot password, and link-account processes, to validate the user's identity. It streamlines user authentication and enhances security by minimizing the risk of password-related breaches."}),"\n",(0,s.jsx)(n.h2,{id:"choose-your-sms-connector",children:"Choose your SMS connector"}),"\n",(0,s.jsx)(n.p,{children:"Logto has some built-in SMS connectors which allow out-of-box usage:"}),"\n","\n",(0,s.jsx)(c.A,{items:[{type:"link",label:"Twilio SMS",href:"/integrations/twilio-sms",description:"The official Logto connector for Twilio short message service.",customProps:{icon:(0,s.jsx)(d,{})}},{type:"link",label:"SMS Aero",href:"/integrations/smsaero",description:"The official Logto connector for SMSAero short message service.",customProps:{icon:(0,s.jsx)(m,{})}},{type:"link",label:"GatewayAPI SMS",href:"/integrations/gatewayapi",description:"The official Logto connector for GatewayAPI SMS.",customProps:{icon:(0,s.jsx)(A,{})}},{type:"link",label:"Aliyun SMS",href:"/integrations/aliyun-sms",description:"The official Logto connector for Aliyun short message service.",customProps:{icon:(0,s.jsx)(y,{})}},{type:"link",label:"Tencent SMS",href:"/integrations/tencent-sms",description:"The official Logto connector for Tencent short message service.",customProps:{icon:(0,s.jsx)(S,{})}}]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-steps",children:"Configuration steps"}),"\n",(0,s.jsx)(n.p,{children:"Follow the steps below to add the SMS connector:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Navigate to:"})," ",(0,s.jsx)(t,{to:"/connectors/passwordless",children:"Console > Connector > Email and SMS connectors"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"To add a new SMS connector:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:'Click the "Set up" button and select your desired SMS provider'}),"\n",(0,s.jsx)(n.li,{children:"Review the README documentation for your chosen provider"}),"\n",(0,s.jsx)(n.li,{children:'Complete the required fields in the "Parameter Configuration" section'}),"\n",(0,s.jsx)(n.li,{children:"Customize the SMS template using the JSON editor"}),"\n",(0,s.jsx)(n.li,{children:'Test your configuration by sending a verification code to your phone using the "Generic" template'}),"\n",(0,s.jsx)(n.li,{children:'Click "Save and Done" to finish'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"To change to another SMS connector:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Access the connector details page and click "Change connector" in the top-right corner'}),"\n",(0,s.jsx)(n.li,{children:"Alternatively, delete the existing connector and create a new one"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["You can bring ONLY ONE ",(0,s.jsx)(n.em,{children:"SMS connector"})," alive."]}),(0,s.jsx)(n.p,{children:'When you already have an email connector, you can only select "Change email connector". When performing this operation in the console, it takes effect immediately once saved, so please be sure to test your configuration before saving.'}),(0,s.jsx)(n.p,{children:'To ensure the stability of your service, Cloud users can create a dev tenant for the development environment. After testing the configuration in the development environment, "migrate" the configuration to production, and then save the setup.'})]}),"\n",(0,s.jsx)(n.h2,{id:"enable-phone-number-sign-up-or-sign-in",children:"Enable phone number sign-up or sign-in"}),"\n",(0,s.jsx)(n.p,{children:"Once you successfully add the SMS connector and complete the configuration, you can enable sign-in and sign-up configurations that rely on phone + verification code, according to your business needs."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Navigate to"}),": ",(0,s.jsx)(t,{to:"/sign-in-experience/sign-up-and-sign-in",children:"Console > Sign-in experience > Sign-up and sign-in"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Set sign-up methods:"}),' Choose "Phone number" or "Email address or phone number" as the sign-up identifier. ',(0,s.jsx)(n.strong,{children:"Note: Phone number verification is currently mandatory during sign-up."})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Set sign-in methods:"}),' The chosen sign-up identifier automatically becomes a sign-in method. Click "Add another" for additional sign-in options.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Save Changes and Test:"}),' Click "Save changes" to implement the new sign-in experience. Remember to use the "Live preview" to test the functionality.']}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Because our configurations take effect immediately, deleting existing SMS connector can affect end-users' normal login and registration processes."}),(0,s.jsx)(n.p,{children:'For example, if the sign-in identifier includes "phone number + verification code" combination, deleting the existing SMS connector will prevent users from receiving verification codes via email and will result in an error in the sign-in flow.'}),(0,s.jsx)(n.p,{children:"Please be aware of the potential risks when operating on connectors."})]}),"\n",(0,s.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:"Logto doesn't have the SMS connector I want to use. What should I do?"}),(0,s.jsxs)(n.p,{children:["We're still working on more connectors. If you require further options, just let us know your needs in Discord and file a Feature Request on ",(0,s.jsx)(n.a,{href:"https://github.com/logto-io/logto/issues",children:"GitHub"}),". If you need further assistance, you can also ",(0,s.jsx)(n.a,{href:"mailto:contact@logto.io",children:"contact us via email"}),"."]}),(0,s.jsxs)(n.p,{children:["For open-source Logto users, we provide an easy-to-extend connector creation method, allowing you to ",(0,s.jsx)(n.a,{href:"/logto-oss/develop-your-connector",children:"customize your own connector"})," based on your specific scenarios. You are always welcomed to submit a pull request to Logto, so that others in the community may also benefit from your work."]})]})]})}function P(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(C,{...e})}):C(e)}function z(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},70885:(e,n,t)=>{t.d(n,{W:()=>a});var o=t(30758),i=t(73658);const s=["zero","one","two","few","many","other"];function r(e){return s.filter((n=>e.includes(n)))}const c={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,o.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:r(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(n,t)=>function(e,n,t){const o=e.split("|");if(1===o.length)return o[0];o.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const i=t.select(n),s=t.pluralForms.indexOf(i);return o[Math.min(s,o.length-1)]}(t,n,e)}}},22211:(e,n,t)=>{t.d(n,{A:()=>v});var o=t(36679),i=t(39798),s=t(51074),r=t(7614),c=t(70885),l=t(13526);const a={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=t(86070);function h(e){let{href:n,children:t}=e;return(0,d.jsx)(i.A,{href:n,className:(0,l.A)("card padding--lg",a.cardContainer),children:t})}function u(e){let{href:n,icon:t,title:o,description:i}=e;return(0,d.jsxs)(h,{href:n,children:[t,(0,d.jsx)("label",{className:(0,l.A)("text--truncate",a.cardTitle),title:o,children:o}),i&&(0,d.jsx)("p",{className:a.cardDescription,title:i,children:i})]})}function m(e){let{item:n}=e;const t=(0,o.Nr)(n),i=function(){const{selectMessage:e}=(0,c.W)();return n=>e(n,(0,s.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,d.jsx)(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??i(n.items.length)}):null}function g(e){let{item:n}=e;const t=(0,r.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.cC)(n.docId??void 0);return(0,d.jsx)(u,{href:n.href,icon:n.customProps?.icon??t,title:n.label,description:n.description??i?.description})}function p(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(g,{item:n});case"category":return(0,d.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}const f={section:"section_jTJS"};function A(e){let{className:n}=e;const t=(0,o.$S)();return(0,d.jsx)(v,{items:t.items,className:n})}function v(e){const{items:n,className:t}=e;if(!n)return(0,d.jsx)(A,{...e});const i=(0,o.d1)(n);return(0,d.jsx)("section",{className:(0,l.A)(f.section,t),children:i.map(((e,n)=>(0,d.jsx)("article",{className:f.article,children:(0,d.jsx)(p,{item:e})},n)))})}},15658:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(30758);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);