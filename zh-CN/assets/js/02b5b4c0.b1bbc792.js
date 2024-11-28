"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[98593],{48708:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>h,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>e,toc:()=>a});const e=JSON.parse('{"id":"concepts/authn-vs-authz","title":"\u8ba4\u8bc1 (Authentication) \u4e0e\u6388\u6743 (Authorization)","description":"\u8ba4\u8bc1 (Authentication) \u548c \u6388\u6743 (Authorization) \u4e4b\u95f4\u7684\u533a\u522b\u53ef\u4ee5\u603b\u7ed3\u5982\u4e0b\uff1a","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/concepts/authn-vs-authz.mdx","sourceDirName":"concepts","slug":"/concepts/authn-vs-authz","permalink":"/zh-CN/concepts/authn-vs-authz","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/concepts/authn-vs-authz.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"\u767b\u5f55\u4f53\u9a8c","permalink":"/zh-CN/concepts/sign-in-experience"},"next":{"title":"Logto core service","permalink":"/zh-CN/concepts/core-service/"}}');var o=t(86070),s=t(15658);const r={sidebar_position:2},c="\u8ba4\u8bc1 (Authentication) \u4e0e\u6388\u6743 (Authorization)",h={},a=[{value:"\u8ba4\u8bc1 (Authentication)",id:"\u8ba4\u8bc1-authentication",level:2},{value:"\u6388\u6743 (Authorization)",id:"\u6388\u6743-authorization",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"\u6211\u9700\u8981\u6307\u5b9a\u54ea\u4e9b\u7528\u6237\u53ef\u4ee5\u767b\u5f55\u5230\u5e94\u7528\u7a0b\u5e8f",id:"\u6211\u9700\u8981\u6307\u5b9a\u54ea\u4e9b\u7528\u6237\u53ef\u4ee5\u767b\u5f55\u5230\u5e94\u7528\u7a0b\u5e8f",level:3},{value:"\u6211\u9700\u8981\u6211\u7684\u7528\u6237\u767b\u5f55\u5230\u4e00\u4e2a\u7ec4\u7ec7",id:"\u6211\u9700\u8981\u6211\u7684\u7528\u6237\u767b\u5f55\u5230\u4e00\u4e2a\u7ec4\u7ec7",level:3},{value:"\u6211\u4eec\u7684\u5ba2\u6237\u9700\u8981\u4e3a\u4ed6\u4eec\u7684\u767b\u5f55\u9875\u9762\u5b9a\u5236\u54c1\u724c",id:"\u6211\u4eec\u7684\u5ba2\u6237\u9700\u8981\u4e3a\u4ed6\u4eec\u7684\u767b\u5f55\u9875\u9762\u5b9a\u5236\u54c1\u724c",level:3}];function l(n){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"\u8ba4\u8bc1-authentication-\u4e0e\u6388\u6743-authorization",children:"\u8ba4\u8bc1 (Authentication) \u4e0e\u6388\u6743 (Authorization)"})}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.strong,{children:"\u8ba4\u8bc1 (Authentication)"})," \u548c ",(0,o.jsx)(i.strong,{children:"\u6388\u6743 (Authorization)"})," \u4e4b\u95f4\u7684\u533a\u522b\u53ef\u4ee5\u603b\u7ed3\u5982\u4e0b\uff1a"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"\u8ba4\u8bc1 (Authentication)"})," \u56de\u7b54\u4e86\u201c\u4f60\u62e5\u6709\u54ea\u4e2a\u8eab\u4efd\uff1f\u201d\u7684\u95ee\u9898"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"\u6388\u6743 (Authorization)"})," \u56de\u7b54\u4e86\u201c\u4f60\u53ef\u4ee5\u505a\u4ec0\u4e48\uff1f\u201d\u7684\u95ee\u9898"]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"\u6709\u5173\u5b8c\u6574\u7684\u5ba2\u6237\u8eab\u4efd\u548c\u8bbf\u95ee\u7ba1\u7406 (CIAM) \u4ecb\u7ecd\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003\u6211\u4eec\u7684 CIAM \u7cfb\u5217\uff1a"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"https://blog.logto.io/ciam-101-intro-authn-sso/",children:"CIAM 101: \u8ba4\u8bc1 (Authentication)\u3001\u8eab\u4efd\u3001\u5355\u70b9\u767b\u5f55 (SSO)"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"https://blog.logto.io/ciam-102-authz-and-rbac/",children:"CIAM 102: \u6388\u6743 (Authorization) \u4e0e\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236 (RBAC)"})}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"\u8ba4\u8bc1-authentication",children:"\u8ba4\u8bc1 (Authentication)"}),"\n",(0,o.jsx)(i.p,{children:"Logto \u652f\u6301\u591a\u79cd\u4ea4\u4e92\u5f0f\u548c\u975e\u4ea4\u4e92\u5f0f\u7684\u8ba4\u8bc1 (Authentication) \u65b9\u6cd5\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"\u767b\u5f55\u4f53\u9a8c"}),"\uff1a\u7ec8\u7aef\u7528\u6237\u7684\u8ba4\u8bc1 (Authentication) \u8fc7\u7a0b\u3002"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"\u673a\u5668\u5bf9\u673a\u5668 (M2M) \u8ba4\u8bc1 (Authentication)"}),"\uff1a\u670d\u52a1\u6216\u5e94\u7528\u7a0b\u5e8f\u7684\u8ba4\u8bc1 (Authentication) \u8fc7\u7a0b\u3002"]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"\u8ba4\u8bc1 (Authentication) \u7684\u6700\u7ec8\u76ee\u6807\u975e\u5e38\u7b80\u5355\uff1a\u9a8c\u8bc1\u5e76\u83b7\u53d6\u5b9e\u4f53\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff08\u5728 Logto \u4e2d\uff0c\u662f\u7528\u6237\u6216\u5e94\u7528\u7a0b\u5e8f\uff09\u3002"}),"\n",(0,o.jsx)(i.h2,{id:"\u6388\u6743-authorization",children:"\u6388\u6743 (Authorization)"}),"\n",(0,o.jsx)(i.p,{children:"\u5728 Logto \u4e2d\uff0c\u6388\u6743 (Authorization) \u662f\u901a\u8fc7\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236 (RBAC) \u5b8c\u6210\u7684\u3002\u5b83\u8ba9\u4f60\u53ef\u4ee5\u5b8c\u5168\u63a7\u5236\u7528\u6237\u6216 M2M \u5e94\u7528\u7a0b\u5e8f\u5bf9\u4ee5\u4e0b\u5185\u5bb9\u7684\u8bbf\u95ee\uff1a"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"API \u8d44\u6e90"}),"\uff1a\u7531\u7edd\u5bf9 URI \u8868\u793a\u7684\u5168\u5c40\u5b9e\u4f53\u3002"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"\u7ec4\u7ec7 (Organizations)"}),"\uff1a\u7528\u6237\u6216\u5e94\u7528\u7a0b\u5e8f\u7684\u7ec4\u3002"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.strong,{children:"\u7ec4\u7ec7 API \u8d44\u6e90"}),"\uff1a\u5c5e\u4e8e\u7ec4\u7ec7\u7684 API \u8d44\u6e90\u3002"]}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u8fd9\u4e9b\u6982\u5ff5\u7684\u4fe1\u606f\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u8d44\u6e90\uff1a"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/authorization/role-based-access-control",children:"\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236 (RBAC)"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/organizations",children:"\u7ec4\u7ec7 (Organizations)\uff08\u591a\u79df\u6237\uff09"})}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"\u4ee5\u4e0b\u662f\u8fd9\u4e9b\u6982\u5ff5\u4e4b\u95f4\u5173\u7cfb\u7684\u53ef\u89c6\u5316\u8868\u793a\uff1a"}),"\n",(0,o.jsx)(i.mermaid,{value:"graph TD\n  subgraph Resources\n    R(API \u8d44\u6e90)\n    O(\u7ec4\u7ec7 (Organizations))\n    OR(\u7ec4\u7ec7 API \u8d44\u6e90)\n  end\n\n  subgraph Identities\n    U(\u7528\u6237)\n    A(M2M \u5e94\u7528\u7a0b\u5e8f)\n  end"}),"\n",(0,o.jsx)(i.p,{children:"\u7b80\u800c\u8a00\u4e4b\uff0c\u6388\u6743 (Authorization) \u662f\u5173\u4e8e\u5b9a\u4e49\u89c4\u5219\uff0c\u4ee5\u786e\u5b9a\u201cIdentities\u201d\u7ec4\u4e2d\u7684\u5b9e\u4f53\u53ef\u4ee5\u8bbf\u95ee\u201cResources\u201d\u7ec4\u4e2d\u7684\u54ea\u4e9b\u5b9e\u4f53\u3002"}),"\n",(0,o.jsx)(i.h2,{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}),"\n",(0,o.jsx)(i.h3,{id:"\u6211\u9700\u8981\u6307\u5b9a\u54ea\u4e9b\u7528\u6237\u53ef\u4ee5\u767b\u5f55\u5230\u5e94\u7528\u7a0b\u5e8f",children:"\u6211\u9700\u8981\u6307\u5b9a\u54ea\u4e9b\u7528\u6237\u53ef\u4ee5\u767b\u5f55\u5230\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,o.jsx)(i.p,{children:"\u7531\u4e8e\u5355\u70b9\u767b\u5f55 (SSO) \u7684\u7279\u6027\uff0cLogto \u76ee\u524d\u4e0d\u652f\u6301\u5c06\u5e94\u7528\u7a0b\u5e8f\u7528\u4f5c\u8d44\u6e90\u3002\u76f8\u53cd\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49 API \u8d44\u6e90\u548c\u6743\u9650\u6765\u63a7\u5236\u5bf9\u8d44\u6e90\u7684\u8bbf\u95ee\u3002"}),"\n",(0,o.jsx)(i.h3,{id:"\u6211\u9700\u8981\u6211\u7684\u7528\u6237\u767b\u5f55\u5230\u4e00\u4e2a\u7ec4\u7ec7",children:"\u6211\u9700\u8981\u6211\u7684\u7528\u6237\u767b\u5f55\u5230\u4e00\u4e2a\u7ec4\u7ec7"}),"\n",(0,o.jsx)(i.p,{children:"\u5982\u524d\u6240\u8ff0\uff0c\u8ba4\u8bc1 (Authentication) \u6d89\u53ca\u9a8c\u8bc1\u5b9e\u4f53\u7684\u8eab\u4efd\uff0c\u800c\u8bbf\u95ee\u63a7\u5236\u662f\u901a\u8fc7\u6388\u6743 (Authorization) \u5904\u7406\u7684\u3002\u56e0\u6b64\uff1a"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\u786e\u5b9a\u7528\u6237\u5c5e\u4e8e\u54ea\u4e2a\u7ec4\u7ec7\u662f\u4e00\u4e2a\u6388\u6743 (Authorization) \u95ee\u9898\u3002"}),"\n",(0,o.jsx)(i.li,{children:"\u767b\u5f55\u8fc7\u7a0b\u662f\u4e00\u4e2a\u8ba4\u8bc1 (Authentication) \u95ee\u9898\u3002"}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"\u8fd9\u610f\u5473\u7740\u5728 Logto \u4e2d\u6ca1\u6709\u201c\u767b\u5f55\u5230\u7ec4\u7ec7\u201d\u7684\u6982\u5ff5\u3002\u4e00\u65e6\u7528\u6237\u88ab\u8ba4\u8bc1 (Authentication)\uff0c\u4ed6\u4eec\u53ef\u4ee5\u6839\u636e\u5b9a\u4e49\u7684\u6743\u9650\u88ab\u6388\u6743 (Authorization) \u8bbf\u95ee\u6240\u6709\u8d44\u6e90\uff08\u5305\u62ec\u7ec4\u7ec7\u8d44\u6e90\uff09\u3002"}),"\n",(0,o.jsx)(i.p,{children:"\u8fd9\u79cd\u6a21\u578b\u9ad8\u6548\u4e14\u6e05\u6670\uff0c\u56e0\u4e3a\u5b83\u5c06\u8ba4\u8bc1 (Authentication) \u548c\u6388\u6743 (Authorization) \u7684\u5173\u6ce8\u70b9\u5206\u5f00\u3002\u6240\u6709\u73b0\u4ee3 SaaS \u5e94\u7528\u7a0b\u5e8f\uff0c\u5982 GitHub \u548c Notion\uff0c\u90fd\u9075\u5faa\u8fd9\u79cd\u6a21\u578b\u3002"}),"\n",(0,o.jsxs)(i.p,{children:["\u7136\u800c\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u9700\u8981\u5728\u7528\u6237\u6765\u6e90\u548c\u7ec4\u7ec7\u4e4b\u95f4\u5efa\u7acb 1-1 \u6620\u5c04\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",(0,o.jsx)(i.a,{href:"/end-user-flows/enterprise-sso",children:"\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO)"})," \u548c ",(0,o.jsx)(i.a,{href:"/organizations/just-in-time-provisioning",children:"\u7ec4\u7ec7\u5373\u65f6 (JIT) \u4f9b\u5e94"})," \u53ef\u80fd\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"]}),"\n",(0,o.jsx)(i.h3,{id:"\u6211\u4eec\u7684\u5ba2\u6237\u9700\u8981\u4e3a\u4ed6\u4eec\u7684\u767b\u5f55\u9875\u9762\u5b9a\u5236\u54c1\u724c",children:"\u6211\u4eec\u7684\u5ba2\u6237\u9700\u8981\u4e3a\u4ed6\u4eec\u7684\u767b\u5f55\u9875\u9762\u5b9a\u5236\u54c1\u724c"}),"\n",(0,o.jsxs)(i.p,{children:["\u8bf7\u67e5\u770b ",(0,o.jsx)(i.a,{href:"/customization/match-your-brand/#app-specific-branding",children:"\u5e94\u7528\u7a0b\u5e8f\u7279\u5b9a\u54c1\u724c"})," \u548c ",(0,o.jsx)(i.a,{href:"/customization/match-your-brand/#organization-specific-branding",children:"\u7ec4\u7ec7\u7279\u5b9a\u54c1\u724c"})," \u4ee5\u83b7\u53d6\u76f8\u5173\u914d\u7f6e\u3002"]})]})}function d(n={}){const{wrapper:i}={...(0,s.R)(),...n.components};return i?(0,o.jsx)(i,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},15658:(n,i,t)=>{t.d(i,{R:()=>r,x:()=>c});var e=t(30758);const o={},s=e.createContext(o);function r(n){const i=e.useContext(s);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),e.createElement(s.Provider,{value:i},n.children)}}}]);