"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[19928],{94644:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"end-user-flows/authentication-parameters/first-screen","title":"\u9996\u5c4f\u53c2\u6570","description":"\u4e00\u7ec4\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u53c2\u6570\uff0c\u5141\u8bb8\u4f60\u4e3a\u7ec8\u7aef\u7528\u6237\u5b9a\u5236\u6240\u9700\u7684\u9996\u5c4f\u4f53\u9a8c\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/authentication-parameters/first-screen.mdx","sourceDirName":"end-user-flows/authentication-parameters","slug":"/end-user-flows/authentication-parameters/first-screen","permalink":"/zh-CN/end-user-flows/authentication-parameters/first-screen","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/authentication-parameters/first-screen.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"\u8ba4\u8bc1\u53c2\u6570","permalink":"/zh-CN/end-user-flows/authentication-parameters/"},"next":{"title":"\u76f4\u63a5\u767b\u5f55","permalink":"/zh-CN/end-user-flows/authentication-parameters/direct-sign-in"}}');var r=i(86070),t=i(15658);const c={sidebar_position:1},d="\u9996\u5c4f\u53c2\u6570",o={},l=[{value:"first_screen",id:"first_screen",level:2},{value:"identifier",id:"identifier",level:2},{value:"login_hint",id:"login_hint",level:2},{value:"SDK \u652f\u6301",id:"sdk-\u652f\u6301",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u9996\u5c4f\u53c2\u6570",children:"\u9996\u5c4f\u53c2\u6570"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u7ec4\u81ea\u5b9a\u4e49\u8ba4\u8bc1\u53c2\u6570\uff0c\u5141\u8bb8\u4f60\u4e3a\u7ec8\u7aef\u7528\u6237\u5b9a\u5236\u6240\u9700\u7684\u9996\u5c4f\u4f53\u9a8c\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"first_screen"}),"\uff1a\u6307\u5b9a\u7528\u6237\u5c06\u770b\u5230\u7684\u9996\u5c4f\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"identifier"}),"\uff1a\u6307\u5b9a\u767b\u5f55\u6216\u6ce8\u518c\u8868\u5355\u5c06\u63a5\u53d7\u7684\u6807\u8bc6\u7b26\u7c7b\u578b\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"login_hint"}),"\uff1a\u7528\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u6216\u7528\u6237\u540d\u586b\u5145\u6807\u8bc6\u7b26\u5b57\u6bb5\u3002\uff08\u8fd9\u662f\u4e00\u4e2a OIDC \u6807\u51c6\u53c2\u6570\uff09"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"first_screen",children:"first_screen"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"first_screen"})," \u53c2\u6570\u662f\u51b3\u5b9a\u7528\u6237\u91cd\u5b9a\u5411\u5230 Logto \u767b\u5f55\u9875\u9762\u65f6\u5c06\u770b\u5230\u7684\u9996\u5c4f\u7684\u5173\u952e\u53c2\u6570\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5c06\u663e\u793a\u901a\u7528\u767b\u5f55\u8868\u5355\u3002\u4f7f\u7528\u6b64\u53c2\u6570\u53ef\u4ee5\u6839\u636e\u4f60\u7684\u5e94\u7528\u9700\u6c42\u81ea\u5b9a\u4e49\u9996\u5c4f\u3002\u652f\u6301\u7684\u503c\u6709\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sign_in"}),"\uff1a\u663e\u793a\u767b\u5f55\u8868\u5355\u3002\uff08\u9ed8\u8ba4\uff09"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"register"}),"\uff1a\u663e\u793a\u6ce8\u518c\u8868\u5355\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"reset_password"}),"\uff1a\u663e\u793a\u5bc6\u7801\u91cd\u7f6e\u8868\u5355\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"single_sign_on"}),"\uff1a\u663e\u793a\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u767b\u5f55\u8868\u5355\u3002\uff08\u5c06\u8be2\u95ee\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u4ee5\u786e\u5b9a\u542f\u7528\u7684 SSO \u63d0\u4f9b\u5546\uff09"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"identifier:sign-in"}),"\uff1a\u663e\u793a\u7279\u5b9a\u6807\u8bc6\u7b26\u7684\u767b\u5f55\u8868\u5355\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"identifier"})," \u53c2\u6570\u6307\u5b9a\u6807\u8bc6\u7b26\u7c7b\u578b\u3002\u5f53\u4f60\u542f\u7528\u4e86\u591a\u79cd\u6807\u8bc6\u7b26\u767b\u5f55\u65b9\u6cd5\u65f6\uff0c\u8fd9\u5f88\u6709\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"identifier:register"}),"\uff1a\u663e\u793a\u7279\u5b9a\u6807\u8bc6\u7b26\u7684\u6ce8\u518c\u8868\u5355\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"identifier"})," \u53c2\u6570\u6307\u5b9a\u6807\u8bc6\u7b26\u7c7b\u578b\u3002\u5f53\u4f60\u542f\u7528\u4e86\u591a\u79cd\u6807\u8bc6\u7b26\u6ce8\u518c\u65b9\u6cd5\u65f6\uff0c\u8fd9\u5f88\u6709\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"\u9996\u5c4f\u53c2\u6570",src:i(3782).A+"",width:"3708",height:"3104"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u76f4\u63a5\u5c06\u7528\u6237\u53d1\u9001\u5230\u4f01\u4e1a SSO \u767b\u5f55\u8868\u5355\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"curl --location \\\n--request GET 'https://<your-tenant>.logto.app/oidc/auth?client_id=<client_id>&...&first_screen=single_sign_on'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"identifier",children:"identifier"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"identifier"})," \u53c2\u6570\u7528\u4e8e\u6307\u5b9a\u767b\u5f55\u6216\u6ce8\u518c\u8868\u5355\u5c06\u63a5\u53d7\u7684\u6807\u8bc6\u7b26\u7c7b\u578b\u3002\u6b64\u53c2\u6570\u4ec5\u5728 ",(0,r.jsx)(n.code,{children:"first_screen"})," \u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(n.code,{children:"identifier:sign-in"}),"\u3001",(0,r.jsx)(n.code,{children:"identifier:register"})," \u6216 ",(0,r.jsx)(n.code,{children:"reset_password"})," \u65f6\u9002\u7528\u3002\u652f\u6301\u7684\u503c\u6709\uff1a",(0,r.jsx)(n.code,{children:"username"}),"\u3001",(0,r.jsx)(n.code,{children:"email"})," \u548c ",(0,r.jsx)(n.code,{children:"phone"}),"\u3002\u7528\u7a7a\u683c\u5206\u9694\u591a\u4e2a\u503c\u4ee5\u5141\u8bb8\u591a\u79cd\u6807\u8bc6\u7b26\u7c7b\u578b\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u76f4\u63a5\u5c06\u7528\u6237\u53d1\u9001\u5230\u7535\u5b50\u90ae\u4ef6\u6216\u7535\u8bdd\u53f7\u7801\u6ce8\u518c\u9875\u9762\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"curl --location \\\n--request GET 'https://<your-tenant>.logto.app/oidc/auth?client_id=<client_id>&...&first_screen=identifier:register&identifier=email phone'\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u53c2\u6570\u4e2d\u6307\u5b9a\u7684\u6240\u6709\u6807\u8bc6\u7b26\u7c7b\u578b\u5fc5\u987b\u5728 Logto \u63a7\u5236\u53f0\u4e2d\u7684\u767b\u5f55\u6216\u6ce8\u518c\u8bbe\u7f6e\u4e2d\u542f\u7528\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4efb\u4f55\u4e0d\u652f\u6301\u6216\u7981\u7528\u7684\u6807\u8bc6\u7b26\u7c7b\u578b\u5c06\u88ab\u5ffd\u7565\u3002\u5982\u679c\u6240\u6709\u6307\u5b9a\u7684\u6807\u8bc6\u7b26\u90fd\u4e0d\u652f\u6301\uff0c\u5c06\u4f7f\u7528\u9ed8\u8ba4\u7684\u767b\u5f55\u4f53\u9a8c\u914d\u7f6e\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"login_hint",children:"login_hint"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"login_hint"})," \u53c2\u6570\u5728\u6807\u51c6 ",(0,r.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint",children:"OpenID Connect \u89c4\u8303"})," \u4e2d\u5b9a\u4e49\uff0c\u7528\u4e8e\u9884\u586b\u5145\u767b\u5f55\u8868\u5355\u4e2d\u7684\u7528\u6237\u6807\u8bc6\u7b26\uff08\u5982\u7535\u5b50\u90ae\u4ef6\u3001\u7535\u8bdd\u53f7\u7801\u6216\u7528\u6237\u540d\uff09\u3002\u5728 Logto \u4e2d\uff0c\u5b83\u53ef\u4ee5\u4e0e\u5176\u4ed6\u767b\u5f55\u5c4f\u5e55\u53c2\u6570\u7ed3\u5408\u4f7f\u7528\uff0c\u4ee5\u589e\u5f3a\u7528\u6237\u4f53\u9a8c\u3002\u6b64\u53c2\u6570\u7279\u522b\u6709\u7528\uff0c\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u9884\u8ba4\u8bc1\u8868\u5355\uff0c\u53ef\u4ee5\u63d0\u524d\u6536\u96c6\u7528\u6237\u7684\u6807\u8bc6\u7b26\uff0c\u4f7f\u4ed6\u4eec\u5728\u767b\u5f55\u65f6\u65e0\u9700\u91cd\u65b0\u8f93\u5165\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u5728\u767b\u5f55\u8868\u5355\u4e2d\u9884\u586b\u5145\u6536\u96c6\u5230\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"curl --location \\\n--request GET 'https://<your-tenant>.logto.app/oidc/auth?client_id=<client_id>&...&first_screen=identifier:sign_in&identifier=email&login_hint=example@logto.io\n"})}),"\n",(0,r.jsx)(n.h2,{id:"sdk-\u652f\u6301",children:"SDK \u652f\u6301"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u652f\u6301\u7684 Logto SDK \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5728\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"signIn"})," \u65b9\u6cd5\u65f6\u8bbe\u7f6e\u53c2\u6570\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"logtoClient.signIn({\n  redirectUri: 'https://your-app.com/callback',\n  firstScreen: 'identifier:register',\n  identifier: ['email', 'phone'],\n  loginHint: 'example@logto.io',\n});\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u6b63\u5728\u9010\u6b65\u4e3a\u6240\u6709 Logto SDK \u6dfb\u52a0\u5bf9 ",(0,r.jsx)(n.code,{children:"first_screen"}),"\u3001",(0,r.jsx)(n.code,{children:"identifier"})," \u548c ",(0,r.jsx)(n.code,{children:"login_hint"})," \u53c2\u6570\u7684\u652f\u6301\u3002\u5982\u679c\u4f60\u5728\u4f60\u7684 SDK \u4e2d\u6ca1\u6709\u770b\u5230\u5b83\u4eec\uff0c\u8bf7\u63d0\u4ea4\u95ee\u9898\u6216\u8054\u7cfb\u6211\u4eec\u3002"]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e Logto OSS \u7528\u6237\uff0c\u8fd9\u4e9b\u53c2\u6570\u81ea\u7248\u672c 1.15.0 \u5f00\u59cb\u652f\u6301\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u65e7\u7248\u672c\uff0c\u8bf7\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u3002"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3782:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/first-screen-parameter-13bd87e8ba0235b1f5092d04faa17239.png"},15658:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>d});var s=i(30758);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);