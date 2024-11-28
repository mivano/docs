"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6833],{25466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"end-user-flows/security-verification/by-management-api","title":"\u901a\u8fc7 Management API \u5b9e\u73b0\u5b89\u5168\u9a8c\u8bc1","description":"\u5bc6\u7801\u9a8c\u8bc1","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/security-verification/by-management-api.mdx","sourceDirName":"end-user-flows/security-verification","slug":"/end-user-flows/security-verification/by-management-api","permalink":"/zh-CN/end-user-flows/security-verification/by-management-api","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/security-verification/by-management-api.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"\u5b89\u5168\u9a8c\u8bc1","permalink":"/zh-CN/end-user-flows/security-verification/"},"next":{"title":"\u7ec4\u7ec7\u4f53\u9a8c","permalink":"/zh-CN/end-user-flows/organization-experience/"}}');var r=n(86070),s=n(15658);const o={sidebar_position:1},d="\u901a\u8fc7 Management API \u5b9e\u73b0\u5b89\u5168\u9a8c\u8bc1",a={},c=[{value:"\u5bc6\u7801\u9a8c\u8bc1",id:"\u5bc6\u7801\u9a8c\u8bc1",level:2},{value:"\u90ae\u4ef6 / \u77ed\u4fe1\u4e00\u6b21\u6027\u4ee3\u7801\u9a8c\u8bc1",id:"\u90ae\u4ef6--\u77ed\u4fe1\u4e00\u6b21\u6027\u4ee3\u7801\u9a8c\u8bc1",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u901a\u8fc7-management-api-\u5b9e\u73b0\u5b89\u5168\u9a8c\u8bc1",children:"\u901a\u8fc7 Management API \u5b9e\u73b0\u5b89\u5168\u9a8c\u8bc1"})}),"\n",(0,r.jsx)(t.h2,{id:"\u5bc6\u7801\u9a8c\u8bc1",children:"\u5bc6\u7801\u9a8c\u8bc1"}),"\n",(0,r.jsx)(t.p,{children:"\u5f53\u7528\u6237\u5c1d\u8bd5\u66f4\u6539\u5bc6\u7801\u65f6\uff0c\u7cfb\u7edf\u5e94\u63d0\u793a\u4ed6\u4eec\u91cd\u65b0\u8f93\u5165\u5f53\u524d\u5bc6\u7801\u4ee5\u9a8c\u8bc1\u5176\u8eab\u4efd\u3002\u6b64\u6b65\u9aa4\u786e\u4fdd\u53ea\u6709\u6388\u6743\u7684\u8d26\u6237\u6301\u6709\u4eba\u53ef\u4ee5\u66f4\u6539\u5bc6\u7801\uff0c\u4ece\u800c\u9632\u6b62\u672a\u7ecf\u6388\u6743\u7684\u8d26\u6237\u8bbf\u95ee\u3002"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"method"}),(0,r.jsx)(t.th,{children:"path"}),(0,r.jsx)(t.th,{children:"description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"POST"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-verifyuserpassword",children:"/api/users/{userId}/password/verify"})}),(0,r.jsx)(t.td,{children:"\u901a\u8fc7\u7528\u6237 ID \u9a8c\u8bc1\u5f53\u524d\u7528\u6237\u5bc6\u7801\u3002"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"\u90ae\u4ef6--\u77ed\u4fe1\u4e00\u6b21\u6027\u4ee3\u7801\u9a8c\u8bc1",children:"\u90ae\u4ef6 / \u77ed\u4fe1\u4e00\u6b21\u6027\u4ee3\u7801\u9a8c\u8bc1"}),"\n",(0,r.jsx)(t.p,{children:"\u5411\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u53d1\u9001\u9a8c\u8bc1\u7801\uff0c\u5e76\u63d0\u793a\u4ed6\u4eec\u8f93\u5165\u4ee3\u7801\u4ee5\u786e\u8ba4\u5176\u8eab\u4efd\u3002\u8fd9\u4e9b\u7aef\u70b9\u53ef\u7528\u4e8e\u9a8c\u8bc1\u7528\u6237\u7684\u8eab\u4efd\u6216\u786e\u8ba4\u7279\u5b9a\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u7684\u6240\u6709\u6743\u3002\u5f53\u7528\u6237\u5c1d\u8bd5\u5c06\u65b0\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u6216\u7535\u8bdd\u53f7\u7801\u94fe\u63a5\u5230\u5176\u8d26\u6237\u65f6\uff0c\u5f3a\u70c8\u5efa\u8bae\u8fdb\u884c\u6b64\u9a8c\u8bc1\u6b65\u9aa4\uff0c\u4ee5\u786e\u4fdd\u6240\u63d0\u4f9b\u4fe1\u606f\u7684\u771f\u5b9e\u6027\u3002"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"method"}),(0,r.jsx)(t.th,{children:"path"}),(0,r.jsx)(t.th,{children:"description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"POST"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-createverificationcode",children:"/api/verification/verification-codes"})}),(0,r.jsx)(t.td,{children:"\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u9a8c\u8bc1\u7801\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"POST"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://openapi.logto.io/operation/operation-verifyverificationcode",children:"/api/verification/verification-codes/verify"})}),(0,r.jsx)(t.td,{children:"\u901a\u8fc7\u9a8c\u8bc1\u7801\u9a8c\u8bc1\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u3002"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},15658:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var i=n(30758);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);