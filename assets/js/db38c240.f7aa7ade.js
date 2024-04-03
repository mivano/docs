"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[50365],{58699:(e,o,t)=>{t.d(o,{ZP:()=>a,d$:()=>s});var n=t(11527),r=t(17279);const s=[{value:"Retrieve Logto&#39;s OIDC configurations",id:"retrieve-logtos-oidc-configurations",level:3}];function i(e){const o={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h3,{id:"retrieve-logtos-oidc-configurations",children:"Retrieve Logto's OIDC configurations"}),"\n",(0,n.jsxs)(o.p,{children:["You will need a JWK public key set and the token issuer to verify the signature and source of the received JWS token. All the latest public Logto Authorization Configurations can be found at ",(0,n.jsx)(o.code,{children:"https://<your-logto-domain>/oidc/.well-known/openid-configuration"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["e.g. Call ",(0,n.jsx)(o.code,{children:"https://logto.dev/oidc/.well-known/openid-configuration"}),". And locate the following two fields in the response body:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-json",children:'{\n  "jwks_uri": "https://logto.dev/oidc/jwks",\n  "issuer": "https://logto.dev/oidc"\n}\n'})})]})}function a(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},77205:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=t(11527),r=t(17279),s=t(58699);const i={sidebar_label:"Node (Express)"},a="Protect your API on Node (Express)",d={id:"docs/recipes/protect-your-api/node",title:"Protect your API on Node (Express)",description:"Make sure to register your api resource in Logto Admin Console before continuing.",source:"@site/docs/docs/recipes/protect-your-api/node.mdx",sourceDirName:"docs/recipes/protect-your-api",slug:"/docs/recipes/protect-your-api/node",permalink:"/docs/recipes/protect-your-api/node",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/protect-your-api/node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Node (Express)"},sidebar:"docsSidebar",previous:{title:"\u2694\ufe0f Protect your API",permalink:"/docs/recipes/protect-your-api/"},next:{title:"Python",permalink:"/docs/recipes/protect-your-api/python"}},c={},l=[{value:"Extract the Bearer Token from request header",id:"extract-the-bearer-token-from-request-header",level:2},{value:"Token validation",id:"token-validation",level:2},{value:"Install <code>jose</code> as your dependency",id:"install-jose-as-your-dependency",level:3},...s.d$,{value:"Add auth middleware",id:"add-auth-middleware",level:3},{value:"Apply middleware to your API",id:"apply-middleware-to-your-api",level:2}];function u(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"protect-your-api-on-node-express",children:"Protect your API on Node (Express)"}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["Make sure to ",(0,n.jsx)(o.a,{href:"/docs/recipes/protect-your-api/#register-the-api-resources-using-logto-admin-console",children:"register your api resource in Logto Admin Console"})," before continuing."]})}),"\n",(0,n.jsx)(o.h2,{id:"extract-the-bearer-token-from-request-header",children:"Extract the Bearer Token from request header"}),"\n",(0,n.jsxs)(o.p,{children:["A authorized request should contain an ",(0,n.jsx)(o.code,{children:"Authorization"})," header with ",(0,n.jsx)(o.code,{children:"Bearer <access_token>"})," as its content. Extract the Authorization Token from the request header:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",children:"// auth_middleware.ts\n\nimport { IncomingHttpHeaders } from 'http';\n\nconst extractBearerTokenFromHeaders = ({ authorization }: IncomingHttpHeaders) => {\n  const bearerTokenIdentifier = 'Bearer';\n\n  if (!authorization) {\n    throw new Error({ code: 'auth.authorization_header_missing', status: 401 });\n  }\n\n  if (!authorization.startsWith(bearerTokenIdentifier)) {\n    throw new Error({ code: 'auth.authorization_token_type_not_supported', status: 401 });\n  }\n\n  return authorization.slice(bearerTokenIdentifier.length + 1);\n};\n"})}),"\n",(0,n.jsx)(o.h2,{id:"token-validation",children:"Token validation"}),"\n",(0,n.jsxs)(o.p,{children:["For demonstration, we use ",(0,n.jsx)(o.a,{href:"https://github.com/panva/jose",children:"jose"})," package to validate the token's signature, expiration status, and required claims."]}),"\n",(0,n.jsxs)(o.h3,{id:"install-jose-as-your-dependency",children:["Install ",(0,n.jsx)(o.code,{children:"jose"})," as your dependency"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-sh",children:"npm i jose --save\n"})}),"\n",(0,n.jsx)(s.ZP,{}),"\n",(0,n.jsx)(o.h3,{id:"add-auth-middleware",children:"Add auth middleware"}),"\n",(0,n.jsxs)(o.p,{children:["Jose's ",(0,n.jsx)(o.code,{children:"jwtVerify"})," method may helps you to verify the token's JWS format, token signature, issuer, audience and the expiration status. A exception will be thrown if validation failed."]}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["For ",(0,n.jsx)(o.a,{href:"/docs/recipes/rbac",children:"\ud83d\udd10 RBAC"}),", scope validation is also required."]})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",children:"// auth-middleware.ts\n\nimport { createRemoteJWKSet, jwtVerify } from 'jose';\n\n//...\n\nexport const verifyAuthFromRequest = async (req, res, next) => {\n  // Extract the token\n  const token = extractBearerTokenFromHeaders(req.headers);\n\n  const { payload } = await jwtVerify(\n    token, // The raw Bearer Token extracted from the request header\n    createRemoteJWKSet('https://<your-logto-domain>/oidc/jwks'), // generate a jwks using jwks_uri inquired from Logto server\n    {\n      // expected issuer of the token, should be issued by the Logto server\n      issuer: 'https://<your-logto-domain>/oidc',\n      // expected audience token, should be the resource indicator of the current API\n      audience: '<your request listener resource indicator>',\n    }\n  );\n\n  // if you are using RBAC\n  assert(payload.scope.includes('some_scope'));\n\n  // custom payload logic\n  userId = payload.sub;\n\n  return next();\n};\n"})}),"\n",(0,n.jsx)(o.h2,{id:"apply-middleware-to-your-api",children:"Apply middleware to your API"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",children:"import { verifyAuthFromRequest } from '/middleware/auth-middleware.ts';\n\napp.get('/user/:id', verifyAuthFromRequest, (req, res, next) => {\n  // Custom code\n});\n"})})]})}function h(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},17279:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>i});var n=t(50959);const r={},s=n.createContext(r);function i(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);