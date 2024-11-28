"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[24579],{14998:(e,o,n)=>{n.d(o,{Ay:()=>r,RM:()=>c});var s=n(86070),t=n(15658);const c=[];function i(e){const o={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsxs)(o.p,{children:["\u6709\u5173 SSO \u548c\u5982\u4f55\u5728 Logto \u4e2d\u914d\u7f6e SSO \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",(0,s.jsx)(o.a,{href:"/connectors/enterprise-connectors",children:"\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SAML & OIDC)"})," \u6587\u6863\u4ee5\u5f00\u59cb\u4f7f\u7528\u3002"]})})}function r(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},5635:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"integrations/sso/google-workspace/README","title":"\u8bbe\u7f6e Google Workspace \u7684\u5355\u70b9\u767b\u5f55","description":"\u901a\u8fc7\u6700\u5c11\u7684\u914d\u7f6e\u5de5\u4f5c\uff0c\u6b64\u8fde\u63a5\u5668\u5141\u8bb8\u4e0e Microsoft Entra ID \u96c6\u6210\u4ee5\u5b9e\u73b0\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO)\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrations/sso/google-workspace/README.mdx","sourceDirName":"integrations/sso/google-workspace","slug":"/integrations/google-workspace","permalink":"/zh-CN/integrations/google-workspace","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrations/sso/google-workspace/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/google-workspace","sidebar_label":"Google Workspace","sidebar_custom_props":{"description":"\u5728 Google \u751f\u6001\u7cfb\u7edf\u4e2d\u7edf\u4e00\u548c\u5b89\u5168\u5730\u7ba1\u7406\u7528\u6237\u8bbf\u95ee\u3002","logoFilename":"google.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Microsoft Entra ID (SAML)","permalink":"/zh-CN/integrations/entra-id-saml"},"next":{"title":"OIDC (\u4f01\u4e1a)","permalink":"/zh-CN/integrations/oidc-sso"}}');var t=n(86070),c=n(15658),i=n(14998);const r={slug:"/integrations/google-workspace",sidebar_label:"Google Workspace",sidebar_custom_props:{description:"\u5728 Google \u751f\u6001\u7cfb\u7edf\u4e2d\u7edf\u4e00\u548c\u5b89\u5168\u5730\u7ba1\u7406\u7528\u6237\u8bbf\u95ee\u3002",logoFilename:"google.svg"}},l="\u8bbe\u7f6e Google Workspace \u7684\u5355\u70b9\u767b\u5f55",d={},a=[...i.RM,{value:"\u6b65\u9aa4 1\uff1a\u5728 Google Cloud Platform \u4e0a\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",id:"\u6b65\u9aa4-1\u5728-google-cloud-platform-\u4e0a\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",level:2},{value:"\u6b65\u9aa4 2\uff1a\u4e3a\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u7528\u6237\u6388\u6743\u9875\u9762 (Consent Screen)",id:"\u6b65\u9aa4-2\u4e3a\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u7528\u6237\u6388\u6743\u9875\u9762-consent-screen",level:2},{value:"\u6b65\u9aa4 3\uff1a\u521b\u5efa\u65b0\u7684 OAuth \u51ed\u636e",id:"\u6b65\u9aa4-3\u521b\u5efa\u65b0\u7684-oauth-\u51ed\u636e",level:2},{value:"\u6b65\u9aa4 4\uff1a\u4f7f\u7528\u5ba2\u6237\u7aef\u51ed\u636e\u8bbe\u7f6e Logto \u8fde\u63a5\u5668",id:"\u6b65\u9aa4-4\u4f7f\u7528\u5ba2\u6237\u7aef\u51ed\u636e\u8bbe\u7f6e-logto-\u8fde\u63a5\u5668",level:2},{value:"\u6b65\u9aa4 5\uff1a\u9644\u52a0\u6743\u9650 (Scopes)\uff08\u53ef\u9009\uff09",id:"\u6b65\u9aa4-5\u9644\u52a0\u6743\u9650-scopes\u53ef\u9009",level:2},{value:"\u6b65\u9aa4 6\uff1a\u8bbe\u7f6e\u7535\u5b50\u90ae\u4ef6\u57df\u5e76\u542f\u7528 SSO \u8fde\u63a5\u5668",id:"\u6b65\u9aa4-6\u8bbe\u7f6e\u7535\u5b50\u90ae\u4ef6\u57df\u5e76\u542f\u7528-sso-\u8fde\u63a5\u5668",level:2}];function h(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"\u8bbe\u7f6e-google-workspace-\u7684\u5355\u70b9\u767b\u5f55",children:"\u8bbe\u7f6e Google Workspace \u7684\u5355\u70b9\u767b\u5f55"})}),"\n",(0,t.jsx)(o.p,{children:"\u901a\u8fc7\u6700\u5c11\u7684\u914d\u7f6e\u5de5\u4f5c\uff0c\u6b64\u8fde\u63a5\u5668\u5141\u8bb8\u4e0e Microsoft Entra ID \u96c6\u6210\u4ee5\u5b9e\u73b0\u4f01\u4e1a\u5355\u70b9\u767b\u5f55 (SSO)\u3002"}),"\n",(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsx)(o.h2,{id:"\u6b65\u9aa4-1\u5728-google-cloud-platform-\u4e0a\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",children:"\u6b65\u9aa4 1\uff1a\u5728 Google Cloud Platform \u4e0a\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee"}),"\n",(0,t.jsxs)(o.p,{children:["\u5728\u4f60\u53ef\u4ee5\u4f7f\u7528 Google Workspace \u4f5c\u4e3a\u8ba4\u8bc1 (Authentication) \u63d0\u4f9b\u5546\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u5728 ",(0,t.jsx)(o.a,{href:"https://console.developers.google.com/",children:"Google API Console"})," \u4e2d\u8bbe\u7f6e\u4e00\u4e2a\u9879\u76ee\u4ee5\u83b7\u53d6 OAuth 2.0 \u51ed\u636e\u3002\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u4e00\u4e2a\u9879\u76ee\uff0c\u53ef\u4ee5\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002\u5426\u5219\uff0c\u8bf7\u5728\u4f60\u7684 Google \u7ec4\u7ec7\u4e0b\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\u3002"]}),"\n",(0,t.jsx)(o.h2,{id:"\u6b65\u9aa4-2\u4e3a\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u7528\u6237\u6388\u6743\u9875\u9762-consent-screen",children:"\u6b65\u9aa4 2\uff1a\u4e3a\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u7528\u6237\u6388\u6743\u9875\u9762 (Consent Screen)"}),"\n",(0,t.jsx)(o.p,{children:"\u4e3a\u4e86\u521b\u5efa\u65b0\u7684 OIDC \u51ed\u636e\uff0c\u4f60\u9700\u8981\u4e3a\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u7528\u6237\u6388\u6743\u9875\u9762\u3002"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\u5bfc\u822a\u5230 ",(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/apis/credentials/consent",children:"OAuth \u7528\u6237\u6388\u6743\u9875\u9762"})," \u9875\u9762\u5e76\u9009\u62e9 ",(0,t.jsx)(o.code,{children:"Internal"})," \u7528\u6237\u7c7b\u578b\u3002\u8fd9\u5c06\u4f7f OAuth \u5e94\u7528\u7a0b\u5e8f\u4ec5\u5bf9\u4f60\u7684\u7ec4\u7ec7\u5185\u7684\u7528\u6237\u53ef\u7528\u3002"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Google Workspace consent screen user type.webp",src:n(19682).A+"",width:"2604",height:"1363"})}),"\n",(0,t.jsxs)(o.ol,{start:"2",children:["\n",(0,t.jsxs)(o.li,{children:["\u6309\u7167\u9875\u9762\u4e0a\u7684\u8bf4\u660e\u586b\u5199 ",(0,t.jsx)(o.code,{children:"\u7528\u6237\u6388\u6743\u9875\u9762"})," \u8bbe\u7f6e\u3002\u4f60\u9700\u8981\u63d0\u4f9b\u4ee5\u4e0b\u6700\u4f4e\u4fe1\u606f\uff1a"]}),"\n"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"\u5e94\u7528\u7a0b\u5e8f\u540d\u79f0"}),"\uff1a\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u540d\u79f0\u3002\u5b83\u5c06\u5728\u7528\u6237\u6388\u6743\u9875\u9762\u4e0a\u663e\u793a\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"\u652f\u6301\u7535\u5b50\u90ae\u4ef6"}),"\uff1a\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u652f\u6301\u7535\u5b50\u90ae\u4ef6\u3002\u5b83\u5c06\u5728\u7528\u6237\u6388\u6743\u9875\u9762\u4e0a\u663e\u793a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Google Workspace consent screen settings.webp",src:n(3535).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(o.ol,{start:"3",children:["\n",(0,t.jsxs)(o.li,{children:["\u8bbe\u7f6e\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684 ",(0,t.jsx)(o.code,{children:"\u6743\u9650 (Scopes)"}),"\u3002\u4e3a\u4e86\u6b63\u786e\u68c0\u7d22\u7528\u6237\u7684\u8eab\u4efd\u4fe1\u606f\u548c\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0cLogto SSO \u8fde\u63a5\u5668\u9700\u8981\u4ece IdP \u6388\u4e88\u4ee5\u4e0b\u6743\u9650\uff1a"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Google Workspace consent screen scopes.webp",src:n(7519).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"openid"}),"\uff1a\u6b64\u6743\u9650\u662f OIDC \u8ba4\u8bc1 (Authentication) \u6240\u5fc5\u9700\u7684\u3002\u5b83\u7528\u4e8e\u68c0\u7d22 ID \u4ee4\u724c (ID token) \u5e76\u8bbf\u95ee IdP \u7684 userInfo \u7aef\u70b9\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"profile"}),"\uff1a\u6b64\u6743\u9650\u662f\u8bbf\u95ee\u7528\u6237\u57fa\u672c\u4e2a\u4eba\u4fe1\u606f\u6240\u5fc5\u9700\u7684\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"email"}),"\uff1a\u6b64\u6743\u9650\u662f\u8bbf\u95ee\u7528\u6237\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u6240\u5fc5\u9700\u7684\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["\u70b9\u51fb ",(0,t.jsx)(o.code,{children:"Save"})," \u6309\u94ae\u4ee5\u4fdd\u5b58\u7528\u6237\u6388\u6743\u9875\u9762\u8bbe\u7f6e\u3002"]}),"\n",(0,t.jsx)(o.h2,{id:"\u6b65\u9aa4-3\u521b\u5efa\u65b0\u7684-oauth-\u51ed\u636e",children:"\u6b65\u9aa4 3\uff1a\u521b\u5efa\u65b0\u7684 OAuth \u51ed\u636e"}),"\n",(0,t.jsxs)(o.p,{children:["\u5bfc\u822a\u5230 ",(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/apis/credentials",children:"Credentials"})," \u9875\u9762\u5e76\u70b9\u51fb ",(0,t.jsx)(o.code,{children:"Create Credentials"})," \u6309\u94ae\u3002\u4ece\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9 ",(0,t.jsx)(o.code,{children:"OAuth client ID"})," \u9009\u9879\u4ee5\u4e3a\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u521b\u5efa\u65b0\u7684 OAuth \u51ed\u636e\u3002"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Google Workspace create credentials.webp",src:n(14583).A+"",width:"2604",height:"1363"})}),"\n",(0,t.jsx)(o.p,{children:"\u7ee7\u7eed\u8bbe\u7f6e OAuth \u51ed\u636e\uff0c\u586b\u5199\u4ee5\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Google Workspace credentials config.webp",src:n(36087).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\u9009\u62e9 ",(0,t.jsx)(o.code,{children:"Web application"})," \u4f5c\u4e3a\u5e94\u7528\u7a0b\u5e8f\u7c7b\u578b\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:["\u586b\u5199\u4f60\u7684\u5ba2\u6237\u7aef\u5e94\u7528\u7a0b\u5e8f\u7684 ",(0,t.jsx)(o.code,{children:"\u540d\u79f0"}),"\uff0c\u4f8b\u5982 ",(0,t.jsx)(o.code,{children:"Logto SSO Connector"}),"\u3002\u8fd9\u5c06\u5e2e\u52a9\u4f60\u5728\u5c06\u6765\u8bc6\u522b\u51ed\u636e\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:["\u4f7f\u7528 Logto \u56de\u8c03 URI \u586b\u5199 ",(0,t.jsx)(o.code,{children:"Authorized redirect URIs"}),"\u3002\u8fd9\u662f Google \u5728\u6210\u529f\u8ba4\u8bc1 (Authentication) \u540e\u5c06\u7528\u6237\u7684\u6d4f\u89c8\u5668\u91cd\u5b9a\u5411\u5230\u7684 URI\u3002\u5f53\u7528\u6237\u6210\u529f\u901a\u8fc7 IdP \u8ba4\u8bc1 (Authentication) \u540e\uff0cIdP \u4f1a\u5c06\u7528\u6237\u7684\u6d4f\u89c8\u5668\u91cd\u5b9a\u5411\u56de\u6b64\u6307\u5b9a\u7684 URI\uff0c\u5e76\u9644\u5e26\u6388\u6743\u4ee3\u7801\u3002Logto \u5c06\u6839\u636e\u4ece\u6b64 URI \u63a5\u6536\u5230\u7684\u6388\u6743\u4ee3\u7801\u5b8c\u6210\u8ba4\u8bc1 (Authentication) \u8fc7\u7a0b\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:["\u4f7f\u7528 Logto \u56de\u8c03 URI \u7684\u6765\u6e90\u586b\u5199 ",(0,t.jsx)(o.code,{children:"Authorized JavaScript origins"}),"\u3002\u8fd9\u786e\u4fdd\u53ea\u6709\u4f60\u7684 Logto \u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u5411 Google OAuth \u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\u3002"]}),"\n",(0,t.jsxs)(o.li,{children:["\u70b9\u51fb ",(0,t.jsx)(o.code,{children:"Create"})," \u6309\u94ae\u4ee5\u521b\u5efa OAuth \u51ed\u636e\u3002"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"\u6b65\u9aa4-4\u4f7f\u7528\u5ba2\u6237\u7aef\u51ed\u636e\u8bbe\u7f6e-logto-\u8fde\u63a5\u5668",children:"\u6b65\u9aa4 4\uff1a\u4f7f\u7528\u5ba2\u6237\u7aef\u51ed\u636e\u8bbe\u7f6e Logto \u8fde\u63a5\u5668"}),"\n",(0,t.jsx)(o.p,{children:"\u6210\u529f\u521b\u5efa OAuth \u51ed\u636e\u540e\uff0c\u4f60\u5c06\u6536\u5230\u4e00\u4e2a\u5305\u542b\u5ba2\u6237\u7aef ID \u548c\u5ba2\u6237\u7aef\u5bc6\u94a5\u7684\u63d0\u793a\u6846\u3002"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Google Workspace client credentials.webp",src:n(87144).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(o.p,{children:["\u590d\u5236 ",(0,t.jsx)(o.code,{children:"Client ID"})," \u548c ",(0,t.jsx)(o.code,{children:"Client secret"})," \u5e76\u586b\u5199\u5230 Logto \u7684 SSO \u8fde\u63a5\u5668 ",(0,t.jsx)(o.code,{children:"Connection"})," \u9009\u9879\u5361\u4e2d\u7684\u76f8\u5e94\u5b57\u6bb5\u3002"]}),"\n",(0,t.jsx)(o.p,{children:"\u73b0\u5728\u4f60\u5df2\u7ecf\u6210\u529f\u5728 Logto \u4e0a\u914d\u7f6e\u4e86\u4e00\u4e2a Google Workspace SSO \u8fde\u63a5\u5668\u3002"}),"\n",(0,t.jsx)(o.h2,{id:"\u6b65\u9aa4-5\u9644\u52a0\u6743\u9650-scopes\u53ef\u9009",children:"\u6b65\u9aa4 5\uff1a\u9644\u52a0\u6743\u9650 (Scopes)\uff08\u53ef\u9009\uff09"}),"\n",(0,t.jsxs)(o.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(o.code,{children:"\u6743\u9650 (Scope)"})," \u5b57\u6bb5\u5411\u4f60\u7684 OAuth \u8bf7\u6c42\u6dfb\u52a0\u9644\u52a0\u6743\u9650\u3002\u8fd9\u5c06\u5141\u8bb8\u4f60\u4ece Google OAuth \u670d\u52a1\u5668\u8bf7\u6c42\u66f4\u591a\u4fe1\u606f\u3002\u8bf7\u53c2\u9605 ",(0,t.jsx)(o.a,{href:"https://developers.google.com/identity/protocols/oauth2/scopes",children:"Google OAuth Scopes"})," \u6587\u6863\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(o.p,{children:["\u65e0\u8bba\u81ea\u5b9a\u4e49\u6743\u9650\u8bbe\u7f6e\u5982\u4f55\uff0cLogto \u5c06\u59cb\u7ec8\u5411 IdP \u53d1\u9001 ",(0,t.jsx)(o.code,{children:"openid"}),"\u3001",(0,t.jsx)(o.code,{children:"profile"})," \u548c ",(0,t.jsx)(o.code,{children:"email"})," \u6743\u9650\u3002\u8fd9\u662f\u4e3a\u4e86\u786e\u4fdd Logto \u80fd\u591f\u6b63\u786e\u68c0\u7d22\u7528\u6237\u7684\u8eab\u4efd\u4fe1\u606f\u548c\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002"]}),"\n",(0,t.jsx)(o.h2,{id:"\u6b65\u9aa4-6\u8bbe\u7f6e\u7535\u5b50\u90ae\u4ef6\u57df\u5e76\u542f\u7528-sso-\u8fde\u63a5\u5668",children:"\u6b65\u9aa4 6\uff1a\u8bbe\u7f6e\u7535\u5b50\u90ae\u4ef6\u57df\u5e76\u542f\u7528 SSO \u8fde\u63a5\u5668"}),"\n",(0,t.jsxs)(o.p,{children:["\u5728 Logto \u7684\u8fde\u63a5\u5668 ",(0,t.jsx)(o.code,{children:"SSO \u4f53\u9a8c (Experience)"})," \u9009\u9879\u5361\u4e2d\u63d0\u4f9b\u4f60\u7684\u7ec4\u7ec7\u7684 ",(0,t.jsx)(o.code,{children:"\u7535\u5b50\u90ae\u4ef6\u57df"}),"\u3002\u8fd9\u5c06\u542f\u7528 SSO \u8fde\u63a5\u5668\u4f5c\u4e3a\u8fd9\u4e9b\u7528\u6237\u7684\u8ba4\u8bc1 (Authentication) \u65b9\u6cd5\u3002"]}),"\n",(0,t.jsx)(o.p,{children:"\u5177\u6709\u6307\u5b9a\u57df\u4e2d\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u7684\u7528\u6237\u5c06\u88ab\u91cd\u5b9a\u5411\u4ee5\u4f7f\u7528\u4f60\u7684 SSO \u8fde\u63a5\u5668\u4f5c\u4e3a\u4ed6\u4eec\u552f\u4e00\u7684\u8ba4\u8bc1 (Authentication) \u65b9\u6cd5\u3002"}),"\n",(0,t.jsxs)(o.p,{children:["\u6709\u5173 Google Workspace SSO \u8fde\u63a5\u5668\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",(0,t.jsx)(o.a,{href:"https://developers.google.com/identity/openid-connect/openid-connect",children:"Google OpenID Connector"}),"\u3002"]})]})}function g(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},87144:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/google_workspace_client_credentials-04b46e076f40fb0bd433529cb59d6f46.webp"},7519:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/google_workspace_consent_screen_scopes-eb352a52b1f1056877a6b93edf68a0bb.webp"},3535:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/google_workspace_consent_screen_settings-e7eb6c977bb7d90015b38d1d9f84673e.webp"},19682:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/google_workspace_consent_screen_user_type-f5da0e8e1d400973d4702ce1f553fd27.webp"},14583:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/google_workspace_create_credentials-4b2f8a7bd881d99886aa1131503ea227.webp"},36087:(e,o,n)=>{n.d(o,{A:()=>s});const s=n.p+"assets/images/google_workspace_credentials_config-0a4787d6350ce1a7c3e0c337bb0726c6.webp"},15658:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>r});var s=n(30758);const t={},c=s.createContext(t);function i(e){const o=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:o},e.children)}}}]);