"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[56711],{12113:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>h,default:()=>x,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"developers/webhooks/README","title":"Webhooks","description":"Logto Webhooks \u63d0\u4f9b\u5404\u79cd\u4e8b\u4ef6\u7684\u5b9e\u65f6\u901a\u77e5\uff0c\u5305\u62ec\u7528\u6237\u8d26\u6237\u3001\u89d2\u8272\u3001\u6743\u9650\u3001\u7ec4\u7ec7\u3001\u7ec4\u7ec7\u89d2\u8272\u3001\u7ec4\u7ec7\u6743\u9650\u548c\u7528\u6237\u4ea4\u4e92\u7684\u66f4\u6539\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/developers/webhooks/README.mdx","sourceDirName":"developers/webhooks","slug":"/developers/webhooks/","permalink":"/zh-CN/developers/webhooks/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/developers/webhooks/README.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"docsSidebar","previous":{"title":"\u7b7e\u540d\u5bc6\u94a5","permalink":"/zh-CN/developers/signing-keys"},"next":{"title":"\u914d\u7f6e Webhook","permalink":"/zh-CN/developers/webhooks/configure-webhooks"}}');var r=n(86070),t=n(15658);const i={sidebar_position:5},h="Webhooks",d={},l=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 Webhook\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-webhook",level:2},{value:"\u672f\u8bed",id:"\u672f\u8bed",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}];function c(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Details:n,Url:s}=o;return n||a("Details",!0),s||a("Url",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"webhooks",children:"Webhooks"})}),"\n",(0,r.jsx)(o.p,{children:"Logto Webhooks \u63d0\u4f9b\u5404\u79cd\u4e8b\u4ef6\u7684\u5b9e\u65f6\u901a\u77e5\uff0c\u5305\u62ec\u7528\u6237\u8d26\u6237\u3001\u89d2\u8272\u3001\u6743\u9650\u3001\u7ec4\u7ec7\u3001\u7ec4\u7ec7\u89d2\u8272\u3001\u7ec4\u7ec7\u6743\u9650\u548c\u7528\u6237\u4ea4\u4e92\u7684\u66f4\u6539\u3002"}),"\n",(0,r.jsxs)(o.p,{children:["\u5f53\u4e8b\u4ef6\u88ab\u89e6\u53d1\u65f6\uff0cLogto \u4f1a\u5411\u4f60\u63d0\u4f9b\u7684 Endpoint URL \u53d1\u9001\u4e00\u4e2a HTTP \u8bf7\u6c42\uff0c\u5176\u4e2d\u5305\u542b\u6709\u5173\u4e8b\u4ef6\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u4f8b\u5982\u7528\u6237 ID\u3001\u7528\u6237\u540d\u3001\u7535\u5b50\u90ae\u4ef6\u548c\u5176\u4ed6\u76f8\u5173\u7ec6\u8282\uff08\u6709\u5173\u8d1f\u8f7d\u548c\u5934\u4e2d\u5305\u542b\u7684\u6570\u636e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(o.a,{href:"/developers/webhooks/webhooks-request",children:"Webhook request"}),"\uff09\u3002\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u5904\u7406\u6b64\u8bf7\u6c42\u5e76\u91c7\u53d6\u81ea\u5b9a\u4e49\u64cd\u4f5c\uff0c\u4f8b\u5982\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u6216\u66f4\u65b0\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(o.p,{children:"\u6211\u4eec\u4f1a\u6839\u636e\u7528\u6237\u9700\u6c42\u4e0d\u65ad\u6dfb\u52a0\u66f4\u591a\u4e8b\u4ef6\u3002\u5982\u679c\u4f60\u5bf9\u4e1a\u52a1\u6709\u7279\u5b9a\u8981\u6c42\uff0c\u8bf7\u544a\u8bc9\u6211\u4eec\u3002"}),"\n",(0,r.jsx)(o.h2,{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-webhook",children:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 Webhook\uff1f"}),"\n",(0,r.jsx)(o.p,{children:"Webhooks \u63d0\u4f9b\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u7684\u5b9e\u65f6\u901a\u4fe1\uff0c\u6d88\u9664\u4e86\u8f6e\u8be2\u7684\u9700\u8981\uff0c\u5e76\u5b9e\u73b0\u4e86\u5373\u65f6\u6570\u636e\u66f4\u65b0\u3002\u5b83\u4eec\u7b80\u5316\u4e86\u5e94\u7528\u7a0b\u5e8f\u96c6\u6210\u548c\u5de5\u4f5c\u6d41\u81ea\u52a8\u5316\uff0c\u65e0\u9700\u590d\u6742\u7684\u4ee3\u7801\u6216\u4e13\u6709 API\u3002"}),"\n",(0,r.jsx)(o.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684 CIAM Webhook \u4f7f\u7528\u6848\u4f8b\uff1a"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\uff1a"})," \u914d\u7f6e\u4e00\u4e2a Webhook\uff0c\u5728\u65b0\u7528\u6237\u6ce8\u518c\u65f6\u53d1\u9001\u6b22\u8fce\u7535\u5b50\u90ae\u4ef6\uff0c\u6216\u5728\u7528\u6237\u4ece\u65b0\u8bbe\u5907\u6216\u4f4d\u7f6e\u767b\u5f55\u65f6\u901a\u77e5\u7ba1\u7406\u5458\u3002"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"\u53d1\u9001\u901a\u77e5\uff1a"})," \u914d\u7f6e\u4e00\u4e2a Webhook\uff0c\u4ee5\u89e6\u53d1\u4e0e\u4f60\u7684 CRM \u7cfb\u7edf\u7684\u865a\u62df\u52a9\u624b\uff0c\u5728\u7528\u6237\u6ce8\u518c\u65f6\u63d0\u4f9b\u5b9e\u65f6\u5ba2\u6237\u652f\u6301\u3002"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"\u6267\u884c\u989d\u5916\u7684 API \u8c03\u7528\uff1a"})," \u914d\u7f6e\u4e00\u4e2a Webhook\uff0c\u901a\u8fc7\u68c0\u67e5\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u57df\u6216 IP \u5730\u5740\u6765\u9a8c\u8bc1\u7528\u6237\u8bbf\u95ee\u6743\u9650\uff0c\u7136\u540e\u4f7f\u7528 Logto Management API \u5206\u914d\u5177\u6709\u8d44\u6e90\u6743\u9650\u7684\u9002\u5f53\u89d2\u8272\u3002"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"\u6570\u636e\u540c\u6b65\uff1a"})," \u914d\u7f6e Webhook \u4ee5\u4fdd\u6301\u5e94\u7528\u7a0b\u5e8f\u66f4\u65b0\u6709\u5173\u66f4\u6539\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u7528\u6237\u8d26\u6237\u6682\u505c\u6216\u5220\u9664\u3002"]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"\u751f\u6210\u62a5\u544a\uff1a"})," \u8bbe\u7f6e\u4e00\u4e2a Webhook \u4ee5\u63a5\u6536\u7528\u6237\u767b\u5f55\u6d3b\u52a8\u6570\u636e\uff0c\u5e76\u5229\u7528\u8fd9\u4e9b\u6570\u636e\u521b\u5efa\u7528\u6237\u53c2\u4e0e\u6216\u4f7f\u7528\u6a21\u5f0f\u7684\u62a5\u544a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"\u672f\u8bed",children:"\u672f\u8bed"}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"\u9879\u76ee"}),(0,r.jsx)(o.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Event"}),(0,r.jsx)(o.td,{children:"\u5f53\u6267\u884c\u7279\u5b9a\u64cd\u4f5c\u65f6\uff0c\u5b83\u5c06\u89e6\u53d1\u5177\u6709\u7279\u5b9a\u7c7b\u578b\u7684\u94a9\u5b50\u4e8b\u4ef6\u3002\u4f8b\u5982\uff0c\u5f53\u7528\u6237\u5b8c\u6210\u6ce8\u518c\u8fc7\u7a0b\u5e76\u521b\u5efa\u65b0\u8d26\u6237\u65f6\uff0cLogto \u5c06\u53d1\u51fa PostRegister \u94a9\u5b50\u4e8b\u4ef6\u3002"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Hook"}),(0,r.jsx)(o.td,{children:"\u94a9\u63a5\u5230\u7279\u5b9a\u4e8b\u4ef6\u7684\u5355\u4e2a\u6216\u4e00\u7cfb\u5217\u64cd\u4f5c\u3002\u64cd\u4f5c\u53ef\u4ee5\u662f\u8c03\u7528 API\u3001\u6267\u884c\u4ee3\u7801\u7247\u6bb5\u7b49\u3002"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Webhook"}),(0,r.jsx)(o.td,{children:"\u4e00\u79cd\u94a9\u5b50\u7684\u5b50\u7c7b\u578b\uff0c\u8868\u793a\u4f7f\u7528\u4e8b\u4ef6\u8d1f\u8f7d\u8c03\u7528 API\u3002"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"\u5047\u8bbe\u5f00\u53d1\u4eba\u5458\u5e0c\u671b\u5728\u7528\u6237\u901a\u8fc7\u65b0\u8bbe\u5907\u767b\u5f55\u65f6\u53d1\u9001\u901a\u77e5\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u8c03\u7528\u5176\u5b89\u5168\u670d\u52a1 API \u7684 webhook \u5230 PostSignIn \u4e8b\u4ef6\u3002"}),(0,r.jsx)(o.td,{})]})]})]}),"\n",(0,r.jsxs)(o.p,{children:["\u4ee5\u4e0b\u662f\u5728 Logto \u4e2d\u4e3a ",(0,r.jsx)(o.code,{children:"PostSignIn"})," \u4e8b\u4ef6\u542f\u7528\u4e24\u4e2a web hooks \u7684\u793a\u4f8b\uff1a"]}),"\n",(0,r.jsx)(o.mermaid,{value:"graph LR\n  subgraph Logto\n    SF(\u767b\u5f55\u5b8c\u6210)\n    PS(\u767b\u5f55\u540e)\n    WH2(Web hook 2)\n    WH1(Web hook 1)\n  end\n\n  subgraph Service 2\n    E2(Endpoint)\n  end\n\n  subgraph Service 1\n    E1(Endpoint)\n  end\n\n  SF --\x3e|\u89e6\u53d1| PS\n  PS --\x3e WH1\n  PS --\x3e WH2\n  WH1 ---\x3e|POST API \u8c03\u7528| E1\n  WH2 ---\x3e|POST API \u8c03\u7528| E2\n"}),"\n",(0,r.jsx)(o.h2,{id:"\u5e38\u89c1\u95ee\u9898",children:"\u5e38\u89c1\u95ee\u9898"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Logto \u652f\u6301\u540c\u6b65 webhooks \u5417\uff1f"}),(0,r.jsx)(o.p,{children:"\u867d\u7136\u540c\u6b65 webhooks \u4f1a\u4f7f\u7528\u6237\u767b\u5f55\u6d41\u7a0b\u66f4\u987a\u7545\uff0c\u4f46\u6211\u4eec\u76ee\u524d\u8fd8\u4e0d\u652f\u6301\uff08\u672a\u6765\u4f1a\u652f\u6301\uff09\u3002\u56e0\u6b64\uff0c\u4f9d\u8d56\u4e8e\u540c\u6b65 webhooks \u7684\u573a\u666f\u76ee\u524d\u90fd\u9700\u8981\u4e0d\u540c\u7684\u89e3\u51b3\u65b9\u6848\u3002\u5982\u679c\u4f60\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u968f\u65f6\u8054\u7cfb\u6211\u4eec\u3002"})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u5982\u4f55\u5904\u7406\u7528\u6237\u6743\u9650\u66f4\u6539\uff1f"}),(0,r.jsxs)(o.p,{children:["\u8bf7\u53c2\u9605 ",(0,r.jsx)(s,{type:"inline",href:"/authorization/role-based-access-control/protect-api-resources-with-rbac/#optional-handle-user-permission-change",children:"\u7ba1\u7406\u7528\u6237\u6743\u9650\u66f4\u6539"})," \u6307\u5357\u3002"]})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"\u5982\u4f55\u8c03\u8bd5 webhook \u8d85\u65f6\uff1f"}),(0,r.jsx)(o.p,{children:"\u5bf9\u4e8e\u63a5\u6536 Webhooks \u7684 endpoint\uff0c\u5b83\u5e94\u5c3d\u5feb\u8fd4\u56de 2xx \u54cd\u5e94\uff0c\u4ee5\u544a\u77e5 Logto Webhook \u5df2\u6210\u529f\u63a5\u6536\u3002\u7531\u4e8e\u4e0d\u540c\u7528\u6237\u5bf9 Webhooks \u7684\u5904\u7406\u903b\u8f91\u5dee\u5f02\u5f88\u5927\uff0c\u8fc7\u4e8e\u590d\u6742\u7684\u4efb\u52a1\u53ef\u80fd\u9700\u8981\u51e0\u79d2\u949f\uff0c\u5bfc\u81f4 Logto Webhook \u8d85\u65f6\u3002\u6700\u4f73\u5b9e\u8df5\u662f\u7ef4\u62a4\u81ea\u5df1\u7684\u4e8b\u4ef6\u961f\u5217\uff1b\u5728\u63a5\u6536\u5230 Logto Webhook \u540e\uff0c\u5c06\u4e8b\u4ef6\u63d2\u5165\u961f\u5217\u5e76\u8fd4\u56de 2xx \u54cd\u5e94\u7ed9 Logto\u3002\u7136\u540e\u8ba9\u81ea\u5df1\u7684\u5de5\u4f5c\u7a0b\u5e8f\u9010\u6b65\u5904\u7406\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u3002\u5982\u679c\u5de5\u4f5c\u7a0b\u5e8f\u9047\u5230\u9519\u8bef\uff0c\u8bf7\u5728\u81ea\u5df1\u7684\u670d\u52a1\u5668\u4e0a\u5904\u7406\u3002"})]}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsxs)("summary",{children:["\u6211\u53ef\u4ee5\u4ece ",(0,r.jsx)(o.code,{children:"PostSignIn"})," webhooks \u4e2d\u83b7\u53d6\u5ba2\u6237\u7aef IP \u5730\u5740\u5417\uff1f"]}),(0,r.jsx)(o.p,{children:"\u53ef\u4ee5\uff0c\u4f60\u53ef\u4ee5\u5728 Webhook \u8d1f\u8f7d\u4e2d\u83b7\u53d6 IP \u5730\u5740\u3001\u7528\u6237\u4ee3\u7406\u7b49\u4fe1\u606f\u3002\u5982\u679c\u4f60\u9700\u8981\u5f53\u524d\u4e0d\u652f\u6301\u7684\u4fe1\u606f\uff0c\u53ef\u4ee5\u5728 GitHub issues \u4e0a\u521b\u5efa\u529f\u80fd\u8bf7\u6c42\uff0c\u6216\u8054\u7cfb\u6211\u4eec\u3002"})]})]})}function x(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function a(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},15658:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>h});var s=n(30758);const r={},t=s.createContext(r);function i(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function h(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);