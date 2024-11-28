"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[69137],{43349:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>v,contentTitle:()=>m,default:()=>b,frontMatter:()=>f,metadata:()=>n,toc:()=>x});const n=JSON.parse('{"id":"integrate-logto/third-party-applications/README","title":"Third-party applications","description":"Logto\'s third-party application integration enables you to leverage Logto as an Identity Provider (IdP) for external applications.","source":"@site/docs/integrate-logto/third-party-applications/README.mdx","sourceDirName":"integrate-logto/third-party-applications","slug":"/integrate-logto/third-party-applications/","permalink":"/integrate-logto/third-party-applications/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrate-logto/third-party-applications/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Protected App","permalink":"/integrate-logto/protected-app"},"next":{"title":"OIDC / OAuth third-party applications","permalink":"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/"}}');var a,o,r=i(86070),l=i(15658),p=i(30758);function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)({}).hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},s.apply(null,arguments)}const c=t=>{let{title:e,titleId:i,...n}=t;return p.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:20,height:21,fill:"none",viewBox:"0 0 20 21","aria-labelledby":i},n),e?p.createElement("title",{id:i},e):null,a||(a=p.createElement("g",{clipPath:"url(#oidc_svg__a)"},p.createElement("path",{fill:"#9E9E9E",d:"m20 11.834-.5-4.5-1.45.95c-1.35-.85-3.05-1.45-4.95-1.75 0 0-.95-.2-2.2-.2s-2.4.15-2.4.15c-4.85.6-8.5 3.35-8.5 6.65 0 3.4 3.75 6.2 9.5 6.7v-1.95c-3.95-.55-6.45-2.4-6.45-4.75 0-2.2 2.3-4.05 5.45-4.65 0 0 2.45-.55 4.6.1 1.05.25 2 .6 2.8 1.1l-1.9 1.15z"}),p.createElement("path",{fill:"#FF9800",d:"M9.5 2.334v17.5l3-1.5V.834z"}))),o||(o=p.createElement("defs",null,p.createElement("clipPath",{id:"oidc_svg__a"},p.createElement("path",{fill:"#fff",d:"M0 .333h20v20H0z"})))))};var d,h,u;function g(){return g=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)({}).hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},g.apply(null,arguments)}const y=t=>{let{title:e,titleId:i,...n}=t;return p.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:20,height:21,fill:"none",viewBox:"0 0 20 21","aria-labelledby":i},n),e?p.createElement("title",{id:i},e):null,d||(d=p.createElement("path",{fill:"#C1272D",d:"M0 17.082c0-2.196 2.095-10.39 6.427-15.881-3.058 5.772-4.836 9.681-3.539 12.728 1.02 2.393 6.258 1.633 9.09.675C6.937 16.886 1.764 17.196 0 17.083"})),h||(h=p.createElement("path",{fill:"#C1272D",d:"M9.384.958c1.913 1.099 8 7 10.616 13.477-3.498-5.52-6.012-9.006-9.314-9.412-2.594-.32-4.55 4.572-5.133 7.49.534-5.481 2.85-10.09 3.83-11.555"})),u||(u=p.createElement("path",{fill:"#C1272D",d:"M18.777 17.063c-1.913 1.098-10.096 3.39-17.044 2.405 6.556-.252 10.849-.674 12.853-3.315 1.575-2.075-1.706-6.206-3.956-8.166 4.506 3.2 7.362 7.5 8.147 9.076"})))},f={sidebar_position:3},m="Third-party applications",v={},x=[{value:"Create an third-party application in Logto",id:"create-an-third-party-application-in-logto",level:2},{value:"Setup the third-party application configurations",id:"setup-the-third-party-application-configurations",level:2}];function w(t){const e={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.R)(),...t.components},{CloudLink:i,DocCardList:n}=e;return i||j("CloudLink",!0),n||j("DocCardList",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"third-party-applications",children:"Third-party applications"})}),"\n",(0,r.jsx)(e.p,{children:"Logto's third-party application integration enables you to leverage Logto as an Identity Provider (IdP) for external applications."}),"\n",(0,r.jsx)(e.p,{children:"An Identity Provider (IdP) is a service that verifies user identities and manages their login credentials. After confirming a user's identity, the IdP generates authentication tokens or assertions and allows the user to access various applications or services without needing to log in again."}),"\n",(0,r.jsxs)(e.p,{children:["Unlike the applications you created in the ",(0,r.jsx)(e.a,{href:"/integrate-logto/integrate-logto-into-your-application",children:"Integrate Logto into your application"})," guide that are developed and fully controlled by you, third-party applications are independent services developed by external developers or business partners."]}),"\n",(0,r.jsx)(e.p,{children:'This integration approach is well-suited for common business scenarios. You can enable users to access partner applications using their Logto accounts, just like how enterprise users sign in to Slack with Google Workspace. You can also build an open platform where third-party applications can add "Sign in with Logto" functionality, similar to "Sign in with Google."'}),"\n",(0,r.jsx)(e.h2,{id:"create-an-third-party-application-in-logto",children:"Create an third-party application in Logto"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["Go to ",(0,r.jsx)(i,{to:"/applications",children:"Console > Applications"})]}),"\n",(0,r.jsxs)(e.li,{children:['Select "Third-party app" as the application type and choose one of the following integration protocols:',"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"OIDC"}),"\n",(0,r.jsx)(e.li,{children:"SAML (Coming soon)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"Enter a name and description for your application and click on the Create button. A new third-party application will be created."}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:'All created third-party applications will be catalogued on the Applications page under the "Third-party apps" tab. This arrangement helps you distinguish them from your own applications, making it easier to manage all your applications in one place.'}),"\n",(0,r.jsx)(e.h2,{id:"setup-the-third-party-application-configurations",children:"Setup the third-party application configurations"}),"\n",(0,r.jsx)(e.p,{children:"Based on the protocol type you selected when creating the third-party application, you can follow one of these guides to setup your third-party application:"}),"\n",(0,r.jsx)(n,{items:[{type:"link",label:"OIDC / OAuth",href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications",description:"Set up OIDC or OAuth configurations for your third-party application to integrate with Logto.",customProps:{icon:(0,r.jsx)(c,{})}},{type:"link",label:"SAML (Coming soon)",href:"/integrate-logto/third-party-applications/#setup-the-third-party-application-configurations",description:"Set up SAML configurations for your third-party application to integrate with Logto.",customProps:{icon:(0,r.jsx)(y,{})}}]})]})}function b(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(w,{...t})}):w(t)}function j(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},15658:(t,e,i)=>{i.d(e,{R:()=>r,x:()=>l});var n=i(30758);const a={},o=n.createContext(a);function r(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);