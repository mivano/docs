"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5907],{9746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"integrate-logto/protected-app","title":"Protected App","description":"The Protected App is designed to eliminate the complexity of SDK integrations by separating the authentication layer from your application. We handle the authentication, allowing you to focus on your core functionality. Once a user is authenticated, the Protected App serves the content from your server.","source":"@site/docs/integrate-logto/protected-app.mdx","sourceDirName":"integrate-logto","slug":"/integrate-logto/protected-app","permalink":"/integrate-logto/protected-app","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrate-logto/protected-app.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Understand authentication flow","permalink":"/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow"},"next":{"title":"Third-party applications","permalink":"/integrate-logto/third-party-applications/"}}');var i=n(86070),r=n(15658);const s={sidebar_position:2},a="Protected App",c={},d=[{value:"How Protected App works",id:"how-protected-app-works",level:2},{value:"Protect your origin server",id:"protect-your-origin-server",level:2},{value:"HTTP Header Validation",id:"http-header-validation",level:3},{value:"JSON Web Tokens (JWT) Validation",id:"json-web-tokens-jwt-validation",level:3},{value:"Get authentication state and user information",id:"get-authentication-state-and-user-information",level:2},{value:"Get the original host",id:"get-the-original-host",level:2},{value:"Customize authentication rules",id:"customize-authentication-rules",level:2},{value:"Local development",id:"local-development",level:2},{value:"Transition to SDK integration",id:"transition-to-sdk-integration",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"protected-app",children:"Protected App"})}),"\n",(0,i.jsx)(t.p,{children:"The Protected App is designed to eliminate the complexity of SDK integrations by separating the authentication layer from your application. We handle the authentication, allowing you to focus on your core functionality. Once a user is authenticated, the Protected App serves the content from your server."}),"\n",(0,i.jsx)(t.h2,{id:"how-protected-app-works",children:"How Protected App works"}),"\n",(0,i.jsx)(t.p,{children:"The Protected App, powered by Cloudflare, operates globally on edge networks, ensuring low latency and high availability for your application."}),"\n",(0,i.jsx)(t.p,{children:"The Protected App maintains session state and user information. If a user is not authenticated, the Protected App redirects them to the sign-in page. Once authenticated, the Protected App wraps the user's request with authentication and user information, then forwards it to the origin server."}),"\n",(0,i.jsx)(t.p,{children:"This process is visualized in the following flowchart:"}),"\n",(0,i.jsx)(t.mermaid,{value:'graph LR\n  A("Client<br/>(Browser)") --\x3e|Request| B(Logto<br/>Protected App)\n  B --\x3e Condition{{Route<br/>matches?}}\n  Condition --\x3e|Yes| Matched{{Is authenticated?}}\n  Matched --\x3e|Yes| C(Origin server)\n  Matched --\x3e|No| D(Logto sign-in)\n  Condition --\x3e|No| C'}),"\n",(0,i.jsx)(t.h2,{id:"protect-your-origin-server",children:"Protect your origin server"}),"\n",(0,i.jsx)(t.p,{children:"The origin server, which could be either a physical or virtual device not owned by Logto's Protected App, is where your application content resides. Similar to a Content Delivery Network (CDN) server, the Protected App manages authentication processes and retrieves content from your origin server. Therefore, if users gain direct access to your origin server, they can bypass the authentication and your application is no longer protected."}),"\n",(0,i.jsx)(t.p,{children:"So it is important to secure origin connections, it prevents attackers from discovering and access your origin server without authentication. There are several ways to do this:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"HTTP Header Validation"}),"\n",(0,i.jsx)(t.li,{children:"JSON Web Tokens (JWT) Validation"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"http-header-validation",children:"HTTP Header Validation"}),"\n",(0,i.jsxs)(t.p,{children:["Securing your origin server can be achieved using ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme",children:"HTTP Basic Authentication"})," to secure your origin server."]}),"\n",(0,i.jsx)(t.p,{children:"Each request from the Protected App includes the following header:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Authorization: Basic base64(appId:appSecret)\n"})}),"\n",(0,i.jsx)(t.p,{children:"By validating this header, you can confirm the request comes from the Protected App and deny any requests that do not include this header."}),"\n",(0,i.jsx)(t.p,{children:"If you're using Nginx or Apache, you can refer to the following guides to implement HTTP Basic Authentication on your origin server:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Nginx: ",(0,i.jsx)(t.a,{href:"https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/",children:"Configuring HTTP Basic Authentication"})]}),"\n",(0,i.jsxs)(t.li,{children:["Apache: ",(0,i.jsx)(t.a,{href:"https://httpd.apache.org/docs/2.4/howto/auth.html",children:"Authentication and Authorization"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To check the headers within your application, refer to the ",(0,i.jsx)(t.a,{href:"https://developers.cloudflare.com/workers/examples/basic-auth/",children:"HTTP Basic Authentication example"})," provided by Cloudflare to learn how to restrict access using the HTTP Basic schema."]}),"\n",(0,i.jsx)(t.h3,{id:"json-web-tokens-jwt-validation",children:"JSON Web Tokens (JWT) Validation"}),"\n",(0,i.jsx)(t.p,{children:"Another way to secure your origin server is by using JSON Web Tokens (JWT)."}),"\n",(0,i.jsx)(t.p,{children:"Each authed request from the Protected App includes the following header:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Logto-ID-Token: <JWT>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The JWT is called ",(0,i.jsx)(t.a,{href:"https://auth.wiki/id-token",children:"ID Token"})," which is signed by Logto and contains user information. By validating this JWT, you can confirm the request comes from the Protected App and deny any requests that do not include this header."]}),"\n",(0,i.jsxs)(t.p,{children:["The token is encrypted and signed as a ",(0,i.jsx)(t.a,{href:"https://auth.wiki/jws",children:"JWS"})," token."]}),"\n",(0,i.jsx)(t.p,{children:"The validation steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-7.2",children:"Validating a JWT"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515#section-5.2",children:"Validating the JWS signature"})}),"\n",(0,i.jsxs)(t.li,{children:["The token's issuer is ",(0,i.jsx)(t.code,{children:"https://<your-logto-domain>/oidc"})," (issued by your Logto auth server)"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const express = require('express');\nconst jwksClient = require('jwks-rsa');\nconst jwt = require('jsonwebtoken');\n\nconst ISSUER = 'https://<your-logto-domain>/oidc';\nconst CERTS_URL = 'https://<your-logto-domain>/oidc/jwks';\n\nconst client = jwksClient({\n  jwksUri: CERTS_URL,\n});\n\nconst getKey = (header, callback) => {\n  client.getSigningKey(header.kid, function (err, key) {\n    callback(err, key?.getPublicKey());\n  });\n};\n\nconst verifyToken = (req, res, next) => {\n  const token = req.headers['Logto-ID-Token'];\n\n  // Make sure that the incoming request has our token header\n  if (!token) {\n    return res\n      .status(403)\n      .send({ status: false, message: 'missing required Logto-ID-Token header' });\n  }\n\n  jwt.verify(token, getKey, { issuer: ISSUER }, (err, decoded) => {\n    if (err) {\n      return res.status(403).send({ status: false, message: 'invalid id token' });\n    }\n\n    req.user = decoded;\n    next();\n  });\n};\n\nconst app = express();\n\napp.use(verifyToken);\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(3000);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"get-authentication-state-and-user-information",children:"Get authentication state and user information"}),"\n",(0,i.jsxs)(t.p,{children:["If you need to get authentication and user information for your application, you can also use the ",(0,i.jsx)(t.code,{children:"Logto-ID-Token"})," header."]}),"\n",(0,i.jsx)(t.p,{children:"If you only want to decode the token, you can use the following code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const express = require('express');\n\nconst decodeIdToken = (req, res, next) => {\n  const token = req.headers['Logto-ID-Token'];\n\n  if (!token) {\n    return res.status(403).send({\n      status: false,\n      message: 'missing required Logto-ID-Token header',\n    });\n  }\n\n  const parts = token.split('.');\n  if (parts.length !== 3) {\n    throw new Error('Invalid ID token');\n  }\n\n  const payload = parts[1];\n  const decodedPayload = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));\n  const claims = JSON.parse(decodedPayload);\n\n  req.user = claims;\n  next();\n};\n\nconst app = express();\n\napp.use(decodeIdToken);\n\napp.get('/', (req, res) => {\n  res.json(req.user);\n});\n\napp.listen(3000);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"get-the-original-host",children:"Get the original host"}),"\n",(0,i.jsxs)(t.p,{children:["If you need to get the original host requested by the client, you can use the ",(0,i.jsx)(t.code,{children:"Logto-Host"})," or ",(0,i.jsx)(t.code,{children:"x-forwarded-host"})," header."]}),"\n",(0,i.jsx)(t.h2,{id:"customize-authentication-rules",children:"Customize authentication rules"}),"\n",(0,i.jsx)(t.p,{children:'By default, the Protected App will protect all routes. If you need to customize the authentication rules, you can set the "Custom authentication rules" field in Console.'}),"\n",(0,i.jsx)(t.p,{children:"It supports regular expressions, here are two case scenarios:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["To only protect routes ",(0,i.jsx)(t.code,{children:"/admin"})," and ",(0,i.jsx)(t.code,{children:"/privacy"})," with authentication: ",(0,i.jsx)(t.code,{children:"^/(admin|privacy)/.*"})]}),"\n",(0,i.jsxs)(t.li,{children:["To exclude JPG images from authentication: ",(0,i.jsx)(t.code,{children:"^(?!.*\\.jpg$).*$"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"local-development",children:"Local development"}),"\n",(0,i.jsxs)(t.p,{children:["The Protected App is designed to work with your origin server. However, if your origin server is not publicly accessible, you can use a tool like ",(0,i.jsx)(t.a,{href:"https://ngrok.com/",children:"ngrok"})," or ",(0,i.jsx)(t.a,{href:"https://developers.cloudflare.com/pages/how-to/preview-with-cloudflare-tunnel/",children:"Cloudflare Tunnels"})," to expose your local server to the internet."]}),"\n",(0,i.jsx)(t.h2,{id:"transition-to-sdk-integration",children:"Transition to SDK integration"}),"\n",(0,i.jsx)(t.p,{children:'The Protected App is designed to simplify the authentication process. However, if you decide to transition to SDK integration for better control and customization, you can create a new application in Logto and configure the SDK integration. And for a smooth transition, you can reuse the application configs from the Protected App. The Protected App is actually a "Traditional Web App" in Logto, you can find the "AppId" and "AppSecret" in the application settings. After the transition is complete, you can remove the Protected App from your application.'})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},15658:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(30758);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);