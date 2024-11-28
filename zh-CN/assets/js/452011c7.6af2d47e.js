"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[34216],{87183:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>j,contentTitle:()=>x,default:()=>E,frontMatter:()=>m,metadata:()=>i,toc:()=>v});const i=JSON.parse('{"id":"integrate-logto/third-party-applications/README","title":"\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f","description":"Logto \u7684\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u96c6\u6210\u4f7f\u4f60\u80fd\u591f\u5c06 Logto \u4f5c\u4e3a\u5916\u90e8\u5e94\u7528\u7a0b\u5e8f\u7684\u8eab\u4efd\u63d0\u4f9b\u5546 (IdP)\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrate-logto/third-party-applications/README.mdx","sourceDirName":"integrate-logto/third-party-applications","slug":"/integrate-logto/third-party-applications/","permalink":"/zh-CN/integrate-logto/third-party-applications/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrate-logto/third-party-applications/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"\u53d7\u4fdd\u62a4\u7684\u5e94\u7528","permalink":"/zh-CN/integrate-logto/protected-app"},"next":{"title":"OIDC/OAuth \u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f","permalink":"/zh-CN/integrate-logto/third-party-applications/oidc-oauth-third-party-applications/"}}');var o,r,l=n(86070),a=n(15658),s=n(30758);function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c.apply(null,arguments)}const d=t=>{let{title:e,titleId:n,...i}=t;return s.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:20,height:21,fill:"none",viewBox:"0 0 20 21","aria-labelledby":n},i),e?s.createElement("title",{id:n},e):null,o||(o=s.createElement("g",{clipPath:"url(#oidc_svg__a)"},s.createElement("path",{fill:"#9E9E9E",d:"m20 11.834-.5-4.5-1.45.95c-1.35-.85-3.05-1.45-4.95-1.75 0 0-.95-.2-2.2-.2s-2.4.15-2.4.15c-4.85.6-8.5 3.35-8.5 6.65 0 3.4 3.75 6.2 9.5 6.7v-1.95c-3.95-.55-6.45-2.4-6.45-4.75 0-2.2 2.3-4.05 5.45-4.65 0 0 2.45-.55 4.6.1 1.05.25 2 .6 2.8 1.1l-1.9 1.15z"}),s.createElement("path",{fill:"#FF9800",d:"M9.5 2.334v17.5l3-1.5V.834z"}))),r||(r=s.createElement("defs",null,s.createElement("clipPath",{id:"oidc_svg__a"},s.createElement("path",{fill:"#fff",d:"M0 .333h20v20H0z"})))))};var p,h,u;function g(){return g=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},g.apply(null,arguments)}const f=t=>{let{title:e,titleId:n,...i}=t;return s.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:20,height:21,fill:"none",viewBox:"0 0 20 21","aria-labelledby":n},i),e?s.createElement("title",{id:n},e):null,p||(p=s.createElement("path",{fill:"#C1272D",d:"M0 17.082c0-2.196 2.095-10.39 6.427-15.881-3.058 5.772-4.836 9.681-3.539 12.728 1.02 2.393 6.258 1.633 9.09.675C6.937 16.886 1.764 17.196 0 17.083"})),h||(h=s.createElement("path",{fill:"#C1272D",d:"M9.384.958c1.913 1.099 8 7 10.616 13.477-3.498-5.52-6.012-9.006-9.314-9.412-2.594-.32-4.55 4.572-5.133 7.49.534-5.481 2.85-10.09 3.83-11.555"})),u||(u=s.createElement("path",{fill:"#C1272D",d:"M18.777 17.063c-1.913 1.098-10.096 3.39-17.044 2.405 6.556-.252 10.849-.674 12.853-3.315 1.575-2.075-1.706-6.206-3.956-8.166 4.506 3.2 7.362 7.5 8.147 9.076"})))},m={sidebar_position:3},x="\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f",j={},v=[{value:"\u5728 Logto \u4e2d\u521b\u5efa\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f",id:"\u5728-logto-\u4e2d\u521b\u5efa\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"\u8bbe\u7f6e\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e",id:"\u8bbe\u7f6e\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e",level:2}];function y(t){const e={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...t.components},{CloudLink:n,DocCardList:i}=e;return n||b("CloudLink",!0),i||b("DocCardList",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f",children:"\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f"})}),"\n",(0,l.jsx)(e.p,{children:"Logto \u7684\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u96c6\u6210\u4f7f\u4f60\u80fd\u591f\u5c06 Logto \u4f5c\u4e3a\u5916\u90e8\u5e94\u7528\u7a0b\u5e8f\u7684\u8eab\u4efd\u63d0\u4f9b\u5546 (IdP)\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u8eab\u4efd\u63d0\u4f9b\u5546 (IdP) \u662f\u4e00\u79cd\u9a8c\u8bc1\u7528\u6237\u8eab\u4efd\u5e76\u7ba1\u7406\u5176\u767b\u5f55\u51ed\u636e\u7684\u670d\u52a1\u3002\u5728\u786e\u8ba4\u7528\u6237\u8eab\u4efd\u540e\uff0cIdP \u751f\u6210\u8ba4\u8bc1\u4ee4\u724c\u6216\u65ad\u8a00\uff0c\u5e76\u5141\u8bb8\u7528\u6237\u8bbf\u95ee\u5404\u79cd\u5e94\u7528\u7a0b\u5e8f\u6216\u670d\u52a1\uff0c\u800c\u65e0\u9700\u518d\u6b21\u767b\u5f55\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0e\u5728 ",(0,l.jsx)(e.a,{href:"/integrate-logto/integrate-logto-into-your-application",children:"\u5c06 Logto \u96c6\u6210\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d"})," \u6307\u5357\u4e2d\u521b\u5efa\u7684\u7531\u4f60\u5f00\u53d1\u548c\u5b8c\u5168\u63a7\u5236\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0d\u540c\uff0c\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u662f\u7531\u5916\u90e8\u5f00\u53d1\u4eba\u5458\u6216\u4e1a\u52a1\u5408\u4f5c\u4f19\u4f34\u5f00\u53d1\u7684\u72ec\u7acb\u670d\u52a1\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u79cd\u96c6\u6210\u65b9\u6cd5\u975e\u5e38\u9002\u5408\u5e38\u89c1\u7684\u4e1a\u52a1\u573a\u666f\u3002\u4f60\u53ef\u4ee5\u8ba9\u7528\u6237\u4f7f\u7528\u4ed6\u4eec\u7684 Logto \u8d26\u6237\u8bbf\u95ee\u5408\u4f5c\u4f19\u4f34\u5e94\u7528\u7a0b\u5e8f\uff0c\u5c31\u50cf\u4f01\u4e1a\u7528\u6237\u4f7f\u7528 Google Workspace \u767b\u5f55 Slack \u4e00\u6837\u3002\u4f60\u8fd8\u53ef\u4ee5\u6784\u5efa\u4e00\u4e2a\u5f00\u653e\u5e73\u53f0\uff0c\u8ba9\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u6dfb\u52a0\u201c\u4f7f\u7528 Logto \u767b\u5f55\u201d\u529f\u80fd\uff0c\u7c7b\u4f3c\u4e8e\u201c\u4f7f\u7528 Google \u767b\u5f55\u201d\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5728-logto-\u4e2d\u521b\u5efa\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f",children:"\u5728 Logto \u4e2d\u521b\u5efa\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\u8fdb\u5165 ",(0,l.jsx)(n,{to:"/applications",children:"\u63a7\u5236\u53f0 > \u5e94\u7528\u7a0b\u5e8f"})]}),"\n",(0,l.jsxs)(e.li,{children:["\u9009\u62e9\u201c\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u201d\u4f5c\u4e3a\u5e94\u7528\u7a0b\u5e8f\u7c7b\u578b\uff0c\u5e76\u9009\u62e9\u4ee5\u4e0b\u96c6\u6210\u534f\u8bae\u4e4b\u4e00\uff1a","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"OIDC"}),"\n",(0,l.jsx)(e.li,{children:"SAML\uff08\u5373\u5c06\u63a8\u51fa\uff09"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.li,{children:"\u8f93\u5165\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u540d\u79f0\u548c\u63cf\u8ff0\uff0c\u7136\u540e\u70b9\u51fb\u521b\u5efa\u6309\u94ae\u3002\u4e00\u4e2a\u65b0\u7684\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u5c06\u88ab\u521b\u5efa\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u6240\u6709\u521b\u5efa\u7684\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u5c06\u88ab\u5217\u5728\u201c\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u201d\u9009\u9879\u5361\u4e0b\u7684\u5e94\u7528\u7a0b\u5e8f\u9875\u9762\u4e0a\u3002\u8fd9\u79cd\u5b89\u6392\u5e2e\u52a9\u4f60\u5c06\u5b83\u4eec\u4e0e\u4f60\u81ea\u5df1\u7684\u5e94\u7528\u7a0b\u5e8f\u533a\u5206\u5f00\u6765\uff0c\u4f7f\u4f60\u66f4\u5bb9\u6613\u5728\u4e00\u4e2a\u5730\u65b9\u7ba1\u7406\u6240\u6709\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u8bbe\u7f6e\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e",children:"\u8bbe\u7f6e\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e"}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u636e\u521b\u5efa\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u65f6\u9009\u62e9\u7684\u534f\u8bae\u7c7b\u578b\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6307\u5357\u4e4b\u4e00\u6765\u8bbe\u7f6e\u4f60\u7684\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\uff1a"}),"\n",(0,l.jsx)(i,{items:[{type:"link",label:"OIDC/OAuth",href:"/integrate-logto/third-party-applications/oidc-oauth-third-party-applications",description:"\u4e3a\u4f60\u7684\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e OIDC \u6216 OAuth \u914d\u7f6e\u4ee5\u4e0e Logto \u96c6\u6210\u3002",customProps:{icon:(0,l.jsx)(d,{})}},{type:"link",label:"SAML\uff08\u5373\u5c06\u63a8\u51fa\uff09",href:"/integrate-logto/third-party-applications/#setup-the-third-party-application-configurations",description:"\u4e3a\u4f60\u7684\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e SAML \u914d\u7f6e\u4ee5\u4e0e Logto \u96c6\u6210\u3002",customProps:{icon:(0,l.jsx)(f,{})}}]})]})}function E(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(y,{...t})}):y(t)}function b(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},15658:(t,e,n)=>{n.d(e,{R:()=>l,x:()=>a});var i=n(30758);const o={},r=i.createContext(o);function l(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:l(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);