"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[71316],{67661:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"end-user-flows/account-settings/README","title":"\u8d26\u6237\u8bbe\u7f6e","description":"Logto \u63d0\u4f9b\u4e86\u4e24\u7ec4\u8d26\u6237\u8bbe\u7f6e API\uff0c\u5141\u8bb8\u7528\u6237\u7ba1\u7406\u5b58\u50a8\u5728 Logto \u4e2d\u7684\u8d26\u6237\u548c\u4e2a\u4eba\u8d44\u6599\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/account-settings/README.mdx","sourceDirName":"end-user-flows/account-settings","slug":"/end-user-flows/account-settings/","permalink":"/zh-CN/end-user-flows/account-settings/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/account-settings/README.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"docsSidebar","previous":{"title":"Sign-out","permalink":"/zh-CN/end-user-flows/sign-out"},"next":{"title":"\u901a\u8fc7 Management API \u8fdb\u884c\u8d26\u6237\u8bbe\u7f6e","permalink":"/zh-CN/end-user-flows/account-settings/by-management-api"}}');var o=t(86070),r=t(15658);const i={sidebar_position:7},c="\u8d26\u6237\u8bbe\u7f6e",a={},u=[{value:"\u7528\u6237\u7ba1\u7406 API",id:"\u7528\u6237\u7ba1\u7406-api",level:2},{value:"\u8d26\u6237 API",id:"\u8d26\u6237-api",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u8d26\u6237\u8bbe\u7f6e",children:"\u8d26\u6237\u8bbe\u7f6e"})}),"\n",(0,o.jsx)(n.p,{children:"Logto \u63d0\u4f9b\u4e86\u4e24\u7ec4\u8d26\u6237\u8bbe\u7f6e API\uff0c\u5141\u8bb8\u7528\u6237\u7ba1\u7406\u5b58\u50a8\u5728 Logto \u4e2d\u7684\u8d26\u6237\u548c\u4e2a\u4eba\u8d44\u6599\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u7528\u6237\u7ba1\u7406-api",children:"\u7528\u6237\u7ba1\u7406 API"}),"\n",(0,o.jsx)(n.p,{children:"Logto \u7ba1\u7406 API \u63d0\u4f9b\u4e86\u6700\u5168\u9762\u7684\u529f\u80fd\u6765\u7ba1\u7406\u7528\u6237\u53ca\u5176\u4e2a\u4eba\u8d44\u6599\u6570\u636e\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b API \u5b9e\u73b0\u4e00\u4e2a\u81ea\u6258\u7ba1\u7684\u7528\u6237\u7ba1\u7406\u7cfb\u7edf\u6216\u7ec8\u7aef\u7528\u6237\u8d26\u6237\u8bbe\u7f6e\u9875\u9762\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u4f7f\u7528 ",(0,o.jsx)(n.a,{href:"/end-user-flows/account-settings/by-management-api",children:"\u7528\u6237\u7ba1\u7406 API"})," \u6784\u5efa\u4f60\u81ea\u5df1\u7684\u8d26\u6237\u8bbe\u7f6e\u9875\u9762\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u8d26\u6237-api",children:"\u8d26\u6237 API"}),"\n",(0,o.jsx)(n.p,{children:"\u9664\u4e86\u7ba1\u7406 API\uff0cLogto \u8fd8\u63d0\u4f9b\u4e86\u4e00\u7ec4\u7ec8\u7aef\u7528\u6237\u8d26\u6237 API\uff0c\u5141\u8bb8\u7ec8\u7aef\u7528\u6237\u76f4\u63a5\u7ba1\u7406\u4ed6\u4eec\u7684\u8d26\u6237\u8bbe\u7f6e\u548c\u4e2a\u4eba\u8d44\u6599\u6570\u636e\u3002\u4e0e\u7ba1\u7406 API \u4e0d\u540c\uff0c\u8d26\u6237 API \u8bbe\u8ba1\u7528\u4e8e\u7ec8\u7aef\u7528\u6237\u4e0a\u4e0b\u6587\u4e2d\uff0c\u5177\u6709\u8be6\u7ec6\u7684\u7528\u6237\u6743\u9650\u63a7\u5236\u3002\u4f60\u53ef\u4ee5\u5728\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\u4e2d\u76f4\u63a5\u4f7f\u7528\u8d26\u6237 API \u6765\u6784\u5efa\u4e00\u4e2a\u7528\u6237\u53cb\u597d\u7684\u8d26\u6237\u8bbe\u7f6e\u9875\u9762\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u4f7f\u7528 ",(0,o.jsx)(n.a,{href:"/end-user-flows/account-settings/by-account-api",children:"\u8d26\u6237 API"})," \u6784\u5efa\u4f60\u81ea\u5df1\u7684\u8d26\u6237\u8bbe\u7f6e\u9875\u9762\u3002"]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},15658:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(30758);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);