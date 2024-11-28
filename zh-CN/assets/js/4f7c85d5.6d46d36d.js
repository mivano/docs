"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[18247],{18847:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"end-user-flows/authentication-parameters/direct-sign-in","title":"\u76f4\u63a5\u767b\u5f55","description":"\u76f4\u63a5\u767b\u5f55\u662f Logto \u7279\u6709\u7684\u8ba4\u8bc1 (Authentication) \u53c2\u6570\uff0c\u5b83\u4f7f\u4f60\u80fd\u591f\u76f4\u63a5\u542f\u52a8\u793e\u4ea4\u767b\u5f55\u6216\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO)\uff0c\u7ed5\u8fc7\u9ed8\u8ba4\u7684\u901a\u7528 Logto \u767b\u5f55\u9875\u9762\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/authentication-parameters/direct-sign-in.mdx","sourceDirName":"end-user-flows/authentication-parameters","slug":"/end-user-flows/authentication-parameters/direct-sign-in","permalink":"/zh-CN/end-user-flows/authentication-parameters/direct-sign-in","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/authentication-parameters/direct-sign-in.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"\u9996\u5c4f\u53c2\u6570","permalink":"/zh-CN/end-user-flows/authentication-parameters/first-screen"},"next":{"title":"\u7528\u6237\u6388\u6743\u9875\u9762 (Consent screen)","permalink":"/zh-CN/end-user-flows/consent-screen"}}');var s=i(86070),o=i(15658);const c={sidebar_position:2},r="\u76f4\u63a5\u767b\u5f55",d={},l=[{value:"\u793e\u4ea4\u767b\u5f55",id:"\u793e\u4ea4\u767b\u5f55",level:2},{value:"\u5728\u54ea\u91cc\u627e\u5230\u8fde\u63a5\u5668 IdP \u540d\u79f0",id:"\u5728\u54ea\u91cc\u627e\u5230\u8fde\u63a5\u5668-idp-\u540d\u79f0",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO)",id:"\u4f01\u4e1a\u5355\u70b9\u767b\u5f55-sso",level:2},{value:"\u5728\u54ea\u91cc\u627e\u5230\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u8fde\u63a5\u5668 ID",id:"\u5728\u54ea\u91cc\u627e\u5230\u4f01\u4e1a\u5355\u70b9\u767b\u5f55-sso-\u8fde\u63a5\u5668-id",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3},{value:"\u56de\u9000\u5230\u767b\u5f55\u9875\u9762",id:"\u56de\u9000\u5230\u767b\u5f55\u9875\u9762",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components},{CloudLink:t,Details:c}=n;return t||p("CloudLink",!0),c||p("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u76f4\u63a5\u767b\u5f55",children:"\u76f4\u63a5\u767b\u5f55"})}),"\n",(0,s.jsx)(n.p,{children:"\u76f4\u63a5\u767b\u5f55\u662f Logto \u7279\u6709\u7684\u8ba4\u8bc1 (Authentication) \u53c2\u6570\uff0c\u5b83\u4f7f\u4f60\u80fd\u591f\u76f4\u63a5\u542f\u52a8\u793e\u4ea4\u767b\u5f55\u6216\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO)\uff0c\u7ed5\u8fc7\u9ed8\u8ba4\u7684\u901a\u7528 Logto \u767b\u5f55\u9875\u9762\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4f60\u5728\u7f51\u7ad9\u4e0a\u5d4c\u5165\u4e86\u81ea\u5b9a\u4e49\u767b\u5f55\u9875\u9762\u6216\u8eab\u4efd\u63d0\u4f9b\u5546 (IdP) \u767b\u5f55\u5165\u53e3\u70b9\uff08\u67e5\u770b\u4f7f\u7528\u6848\u4f8b\uff09\uff0c\u6b64\u529f\u80fd\u7279\u522b\u6709\u7528\u3002\u901a\u8fc7\u4f7f\u7528\u76f4\u63a5\u767b\u5f55\uff0c\u4f60\u53ef\u4ee5\u5c06\u7528\u6237\u76f4\u63a5\u91cd\u5b9a\u5411\u5230 IdP \u7684\u767b\u5f55\u9875\u9762\u3002"}),"\n",(0,s.jsx)(n.mermaid,{value:"sequenceDiagram\n    actor user as \u7528\u6237\n    participant app as \u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\n    participant logto as Logto\n    participant idp as \u8eab\u4efd\u63d0\u4f9b\u5546 (IdP)\n\n    user->>app: \u70b9\u51fb\u76f4\u63a5\u767b\u5f55\u94fe\u63a5\n    app->>logto: \u53d1\u9001\u5e26\u6709\u76f4\u63a5\u767b\u5f55\u53c2\u6570\u7684\u8ba4\u8bc1\u8bf7\u6c42\n    logto->>idp: \u8df3\u8fc7\u767b\u5f55\u9875\u9762\uff0c\u76f4\u63a5\u542f\u52a8\u793e\u4ea4\u6216\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO)\n    idp->>logto: \u53d1\u9001\u8ba4\u8bc1 (Authentication) \u4ee4\u724c\u6216\u65ad\u8a00\n    logto->>app: \u5c06\u7528\u6237\u91cd\u5b9a\u5411\u56de\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u9644\u5e26\u8ba4\u8bc1 (Authentication) \u6570\u636e"}),"\n",(0,s.jsx)(n.h2,{id:"\u793e\u4ea4\u767b\u5f55",children:"\u793e\u4ea4\u767b\u5f55"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f20\u9012 ",(0,s.jsx)(n.code,{children:"direct_sign_in"})," \u53c2\u6570\uff0c\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"social:<idp-name>"}),"\uff0c\u4ee5\u76f4\u63a5\u542f\u52a8\u793e\u4ea4\u767b\u5f55\u6d41\u7a0b\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5728\u54ea\u91cc\u627e\u5230\u8fde\u63a5\u5668-idp-\u540d\u79f0",children:"\u5728\u54ea\u91cc\u627e\u5230\u8fde\u63a5\u5668 IdP \u540d\u79f0"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5bfc\u822a\u5230 ",(0,s.jsx)(t,{to:"/connectors/social",children:"\u63a7\u5236\u53f0 > \u8fde\u63a5\u5668 > \u793e\u4ea4\u8fde\u63a5\u5668"})]}),"\n",(0,s.jsx)(n.li,{children:"\u70b9\u51fb\u4f60\u60f3\u4f7f\u7528\u7684\u8fde\u63a5\u5668\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5728\u8fde\u63a5\u5668\u8bbe\u7f6e\u9875\u9762\u9876\u90e8\u627e\u5230\u8eab\u4efd\u63d0\u4f9b\u5546\u540d\u79f0\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u793e\u4ea4\u8fde\u63a5\u5668 IdP \u540d\u79f0",src:i(31170).A+"",width:"2478",height:"520"})}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"direct_sign_in"})," \u53c2\u6570\u6784\u5efa\u4f60\u81ea\u5df1\u7684\u8ba4\u8bc1 (Authentication) \u8bf7\u6c42 URL\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl --location \\\n  --request GET 'https://[tenant-id].logto.app/oidc/auth?client_id=1234567890&...&direct_sign_in=social:google'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u652f\u6301\u7684 Logto SDK \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5728\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"signIn"})," \u65b9\u6cd5\u65f6\u8bbe\u7f6e ",(0,s.jsx)(n.code,{children:"directSignIn"})," \u53c2\u6570\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const authResult = await logto.signIn({\n  redirectUri: 'https://your-app.com/callback',\n  directSignIn: 'social:google',\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f01\u4e1a\u5355\u70b9\u767b\u5f55-sso",children:"\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO)"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f20\u9012 ",(0,s.jsx)(n.code,{children:"direct_sign_in"})," \u53c2\u6570\uff0c\u503c\u4e3a ",(0,s.jsx)(n.code,{children:"sso:<connector-id>"}),"\uff0c\u4ee5\u76f4\u63a5\u542f\u52a8\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u6d41\u7a0b\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5728\u54ea\u91cc\u627e\u5230\u4f01\u4e1a\u5355\u70b9\u767b\u5f55-sso-\u8fde\u63a5\u5668-id",children:"\u5728\u54ea\u91cc\u627e\u5230\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u8fde\u63a5\u5668 ID"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5bfc\u822a\u5230 ",(0,s.jsx)(t,{to:"/enterprise-sso",children:"\u63a7\u5236\u53f0 > \u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO)"})]}),"\n",(0,s.jsx)(n.li,{children:"\u70b9\u51fb\u4f60\u60f3\u4f7f\u7528\u7684\u8fde\u63a5\u5668\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5728\u8fde\u63a5\u5668\u8bbe\u7f6e\u9875\u9762\u9876\u90e8\u627e\u5230\u8fde\u63a5\u5668 ID\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u8fde\u63a5\u5668 ID",src:i(17538).A+"",width:"1914",height:"256"})}),"\n",(0,s.jsx)(n.h3,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"direct_sign_in"})," \u53c2\u6570\u6784\u5efa\u4f60\u81ea\u5df1\u7684\u8ba4\u8bc1 (Authentication) \u8bf7\u6c42 URL\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl --location \\\n  --request GET 'https://[tenant-id].logto.app/oidc/auth?client_id=1234567890&...&direct_sign_in=sso:1234567890'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u652f\u6301\u7684 Logto SDK \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5728\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"signIn"})," \u65b9\u6cd5\u65f6\u8bbe\u7f6e ",(0,s.jsx)(n.code,{children:"directSignIn"})," \u53c2\u6570\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"logtoClient.signIn({\n  redirectUri: 'https://your-app.com/callback',\n  directSignIn: 'sso:1234567890',\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u56de\u9000\u5230\u767b\u5f55\u9875\u9762",children:"\u56de\u9000\u5230\u767b\u5f55\u9875\u9762"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u76f4\u63a5\u767b\u5f55\u8fc7\u7a0b\u5931\u8d25\uff0c\u4f8b\u5982\u8fde\u63a5\u5668\u672a\u627e\u5230\u6216\u672a\u542f\u7528\uff0c\u7528\u6237\u5c06\u88ab\u91cd\u5b9a\u5411\u5230\u6807\u51c6\u767b\u5f55\u9875\u9762\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u6b63\u5728\u9010\u6b65\u4e3a\u6240\u6709 Logto SDK \u6dfb\u52a0\u5bf9 ",(0,s.jsx)(n.code,{children:"direct_sign_in"})," \u53c2\u6570\u7684\u652f\u6301\u3002\u5982\u679c\u4f60\u5728\u4f60\u7684 SDK \u4e2d\u6ca1\u6709\u770b\u5230\u5b83\uff0c\u8bf7\u63d0\u4ea4\u95ee\u9898\u6216\u8054\u7cfb\u6211\u4eec\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}),"\n",(0,s.jsxs)(c,{children:[(0,s.jsx)("summary",{children:"\u76f4\u63a5\u767b\u5f55\u4e0e API \u8ba4\u8bc1 (Authentication) \u76f8\u540c\u5417\uff1f"}),(0,s.jsx)(n.p,{children:"\u4e0d\uff0c\u76f4\u63a5\u767b\u5f55\u662f\u4e00\u4e2a\u7528\u6237\u6d41\u7a0b\u53c2\u6570\uff0c\u5141\u8bb8\u4f60\u8df3\u8fc7\u9ed8\u8ba4\u7684 Logto \u767b\u5f55\u9875\u9762\uff0c\u5e76\u5c06\u7528\u6237\u76f4\u63a5\u91cd\u5b9a\u5411\u5230\u793e\u4ea4\u6216\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO) \u63d0\u4f9b\u5546\u7684\u767b\u5f55\u9875\u9762\u3002\u4e0e\u57fa\u4e8e API \u7684\u8ba4\u8bc1 (Authentication) \u4e0d\u540c\uff0c\u7528\u6237\u4ecd\u7136\u9700\u8981\u9996\u5148\u91cd\u5b9a\u5411\u5230 Logto \u8ba4\u8bc1 (Authentication) \u7aef\u70b9\u4ee5\u542f\u52a8\u767b\u5f55\u8fc7\u7a0b\u3002"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},17538:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/direct-sign-in-enterprise-sso-e0b6cfcd47d3793e09c3e1f79b82a217.png"},31170:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/direct-sign-in-social-name-9b5687a77124ce38a1e26dd35b76356b.png"},15658:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var t=i(30758);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);