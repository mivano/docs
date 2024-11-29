"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[21012],{31025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"integrate-logto/protected-app","title":"Application prot\xe9g\xe9e","description":"L\'Application prot\xe9g\xe9e est con\xe7ue pour \xe9liminer la complexit\xe9 des int\xe9grations SDK en s\xe9parant la couche d\'authentification de votre application. Nous g\xe9rons l\'authentification (Authentication), vous permettant de vous concentrer sur votre fonctionnalit\xe9 principale. Une fois qu\'un utilisateur est authentifi\xe9, l\'Application prot\xe9g\xe9e sert le contenu de votre serveur.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrate-logto/protected-app.mdx","sourceDirName":"integrate-logto","slug":"/integrate-logto/protected-app","permalink":"/fr/integrate-logto/protected-app","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrate-logto/protected-app.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Comprendre le flux d\'authentification","permalink":"/fr/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow"},"next":{"title":"Applications tierces","permalink":"/fr/integrate-logto/third-party-applications/"}}');var o=t(86070),r=t(15658);const s={sidebar_position:2},a="Application prot\xe9g\xe9e",l={},c=[{value:"Comment fonctionne l&#39;Application prot\xe9g\xe9e",id:"comment-fonctionne-lapplication-prot\xe9g\xe9e",level:2},{value:"Prot\xe9ger votre serveur d&#39;origine",id:"prot\xe9ger-votre-serveur-dorigine",level:2},{value:"Validation des en-t\xeates HTTP",id:"validation-des-en-t\xeates-http",level:3},{value:"Validation des JSON Web Tokens (JWT)",id:"validation-des-json-web-tokens-jwt",level:3},{value:"Obtenir l&#39;\xe9tat d&#39;authentification et les informations utilisateur",id:"obtenir-l\xe9tat-dauthentification-et-les-informations-utilisateur",level:2},{value:"Obtenir l&#39;h\xf4te d&#39;origine",id:"obtenir-lh\xf4te-dorigine",level:2},{value:"Personnaliser les r\xe8gles d&#39;authentification",id:"personnaliser-les-r\xe8gles-dauthentification",level:2},{value:"D\xe9veloppement local",id:"d\xe9veloppement-local",level:2},{value:"Transition vers l&#39;int\xe9gration SDK",id:"transition-vers-lint\xe9gration-sdk",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"application-prot\xe9g\xe9e",children:"Application prot\xe9g\xe9e"})}),"\n",(0,o.jsx)(n.p,{children:"L'Application prot\xe9g\xe9e est con\xe7ue pour \xe9liminer la complexit\xe9 des int\xe9grations SDK en s\xe9parant la couche d'authentification de votre application. Nous g\xe9rons l'authentification (Authentication), vous permettant de vous concentrer sur votre fonctionnalit\xe9 principale. Une fois qu'un utilisateur est authentifi\xe9, l'Application prot\xe9g\xe9e sert le contenu de votre serveur."}),"\n",(0,o.jsx)(n.h2,{id:"comment-fonctionne-lapplication-prot\xe9g\xe9e",children:"Comment fonctionne l'Application prot\xe9g\xe9e"}),"\n",(0,o.jsx)(n.p,{children:"L'Application prot\xe9g\xe9e, propuls\xe9e par Cloudflare, fonctionne globalement sur des r\xe9seaux de p\xe9riph\xe9rie, garantissant une faible latence et une haute disponibilit\xe9 pour votre application."}),"\n",(0,o.jsx)(n.p,{children:"L'Application prot\xe9g\xe9e maintient l'\xe9tat de session et les informations utilisateur. Si un utilisateur n'est pas authentifi\xe9, l'Application prot\xe9g\xe9e le redirige vers la page de connexion. Une fois authentifi\xe9, l'Application prot\xe9g\xe9e enveloppe la requ\xeate de l'utilisateur avec l'authentification (Authentication) et les informations utilisateur, puis la transmet au serveur d'origine."}),"\n",(0,o.jsx)(n.p,{children:"Ce processus est visualis\xe9 dans le diagramme de flux suivant :"}),"\n",(0,o.jsx)(n.mermaid,{value:'graph LR\n  A("Client<br/>(Navigateur)") --\x3e|Requ\xeate| B(Logto<br/>Application prot\xe9g\xe9e)\n  B --\x3e Condition{{Route<br/>correspond-elle ?}}\n  Condition --\x3e|Oui| Matched{{Est authentifi\xe9 ?}}\n  Matched --\x3e|Oui| C(Serveur d\'origine)\n  Matched --\x3e|Non| D(Connexion Logto)\n  Condition --\x3e|Non| C'}),"\n",(0,o.jsx)(n.h2,{id:"prot\xe9ger-votre-serveur-dorigine",children:"Prot\xe9ger votre serveur d'origine"}),"\n",(0,o.jsx)(n.p,{children:"Le serveur d'origine, qui peut \xeatre un appareil physique ou virtuel non poss\xe9d\xe9 par l'Application prot\xe9g\xe9e de Logto, est l'endroit o\xf9 r\xe9side le contenu de votre application. Semblable \xe0 un serveur de r\xe9seau de distribution de contenu (CDN), l'Application prot\xe9g\xe9e g\xe8re les processus d'authentification (Authentication) et r\xe9cup\xe8re le contenu de votre serveur d'origine. Par cons\xe9quent, si les utilisateurs acc\xe8dent directement \xe0 votre serveur d'origine, ils peuvent contourner l'authentification (Authentication) et votre application n'est plus prot\xe9g\xe9e."}),"\n",(0,o.jsx)(n.p,{children:"Il est donc important de s\xe9curiser les connexions d'origine, cela emp\xeache les attaquants de d\xe9couvrir et d'acc\xe9der \xe0 votre serveur d'origine sans authentification (Authentication). Il existe plusieurs fa\xe7ons de le faire :"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Validation des en-t\xeates HTTP"}),"\n",(0,o.jsx)(n.li,{children:"Validation des JSON Web Tokens (JWT)"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"validation-des-en-t\xeates-http",children:"Validation des en-t\xeates HTTP"}),"\n",(0,o.jsxs)(n.p,{children:["S\xe9curiser votre serveur d'origine peut \xeatre r\xe9alis\xe9 en utilisant ",(0,o.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme",children:"HTTP Basic Authentication"})," pour s\xe9curiser votre serveur d'origine."]}),"\n",(0,o.jsx)(n.p,{children:"Chaque requ\xeate de l'Application prot\xe9g\xe9e inclut l'en-t\xeate suivant :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Authorization: Basic base64(appId:appSecret)\n"})}),"\n",(0,o.jsx)(n.p,{children:"En validant cet en-t\xeate, vous pouvez confirmer que la requ\xeate provient de l'Application prot\xe9g\xe9e et refuser toute requ\xeate qui n'inclut pas cet en-t\xeate."}),"\n",(0,o.jsx)(n.p,{children:"Si vous utilisez Nginx ou Apache, vous pouvez vous r\xe9f\xe9rer aux guides suivants pour impl\xe9menter HTTP Basic Authentication sur votre serveur d'origine :"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Nginx : ",(0,o.jsx)(n.a,{href:"https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/",children:"Configuring HTTP Basic Authentication"})]}),"\n",(0,o.jsxs)(n.li,{children:["Apache : ",(0,o.jsx)(n.a,{href:"https://httpd.apache.org/docs/2.4/howto/auth.html",children:"Authentication and Authorization"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Pour v\xe9rifier les en-t\xeates au sein de votre application, r\xe9f\xe9rez-vous \xe0 l' ",(0,o.jsx)(n.a,{href:"https://developers.cloudflare.com/workers/examples/basic-auth/",children:"exemple HTTP Basic Authentication"})," fourni par Cloudflare pour apprendre comment restreindre l'acc\xe8s en utilisant le sch\xe9ma HTTP Basic."]}),"\n",(0,o.jsx)(n.h3,{id:"validation-des-json-web-tokens-jwt",children:"Validation des JSON Web Tokens (JWT)"}),"\n",(0,o.jsx)(n.p,{children:"Une autre fa\xe7on de s\xe9curiser votre serveur d'origine est d'utiliser les JSON Web Tokens (JWT)."}),"\n",(0,o.jsx)(n.p,{children:"Chaque requ\xeate authentifi\xe9e de l'Application prot\xe9g\xe9e inclut l'en-t\xeate suivant :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Logto-ID-Token: <JWT>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Le JWT est appel\xe9 ",(0,o.jsx)(n.a,{href:"https://auth.wiki/id-token",children:"Jeton d\u2019identifiant"})," qui est sign\xe9 par Logto et contient des informations utilisateur. En validant ce JWT, vous pouvez confirmer que la requ\xeate provient de l'Application prot\xe9g\xe9e et refuser toute requ\xeate qui n'inclut pas cet en-t\xeate."]}),"\n",(0,o.jsxs)(n.p,{children:["Le jeton est crypt\xe9 et sign\xe9 en tant que jeton ",(0,o.jsx)(n.a,{href:"https://auth.wiki/jws",children:"JWS"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Les \xe9tapes de validation :"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#section-7.2",children:"Validation d'un JWT"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515#section-5.2",children:"Validation de la signature JWS"})}),"\n",(0,o.jsxs)(n.li,{children:["L'\xe9metteur du jeton est ",(0,o.jsx)(n.code,{children:"https://<your-logto-domain>/oidc"})," (\xe9mis par votre serveur d'authentification Logto)"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const express = require('express');\nconst jwksClient = require('jwks-rsa');\nconst jwt = require('jsonwebtoken');\n\nconst ISSUER = 'https://<your-logto-domain>/oidc';\nconst CERTS_URL = 'https://<your-logto-domain>/oidc/jwks';\n\nconst client = jwksClient({\n  jwksUri: CERTS_URL,\n});\n\nconst getKey = (header, callback) => {\n  client.getSigningKey(header.kid, function (err, key) {\n    callback(err, key?.getPublicKey());\n  });\n};\n\nconst verifyToken = (req, res, next) => {\n  const token = req.headers['Logto-ID-Token'];\n\n  // Assurez-vous que la requ\xeate entrante a notre en-t\xeate de jeton\n  if (!token) {\n    return res\n      .status(403)\n      .send({ status: false, message: 'missing required Logto-ID-Token header' });\n  }\n\n  jwt.verify(token, getKey, { issuer: ISSUER }, (err, decoded) => {\n    if (err) {\n      return res.status(403).send({ status: false, message: 'invalid id token' });\n    }\n\n    req.user = decoded;\n    next();\n  });\n};\n\nconst app = express();\n\napp.use(verifyToken);\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(3000);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"obtenir-l\xe9tat-dauthentification-et-les-informations-utilisateur",children:"Obtenir l'\xe9tat d'authentification et les informations utilisateur"}),"\n",(0,o.jsxs)(n.p,{children:["Si vous avez besoin d'obtenir l'authentification (Authentication) et les informations utilisateur pour votre application, vous pouvez \xe9galement utiliser l'en-t\xeate ",(0,o.jsx)(n.code,{children:"Logto-ID-Token"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Si vous souhaitez uniquement d\xe9coder le jeton, vous pouvez utiliser le code suivant :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const express = require('express');\n\nconst decodeIdToken = (req, res, next) => {\n  const token = req.headers['Logto-ID-Token'];\n\n  if (!token) {\n    return res.status(403).send({\n      status: false,\n      message: 'missing required Logto-ID-Token header',\n    });\n  }\n\n  const parts = token.split('.');\n  if (parts.length !== 3) {\n    throw new Error('Invalid ID token');\n  }\n\n  const payload = parts[1];\n  const decodedPayload = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));\n  const claims = JSON.parse(decodedPayload);\n\n  req.user = claims;\n  next();\n};\n\nconst app = express();\n\napp.use(decodeIdToken);\n\napp.get('/', (req, res) => {\n  res.json(req.user);\n});\n\napp.listen(3000);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"obtenir-lh\xf4te-dorigine",children:"Obtenir l'h\xf4te d'origine"}),"\n",(0,o.jsxs)(n.p,{children:["Si vous avez besoin d'obtenir l'h\xf4te d'origine demand\xe9 par le client, vous pouvez utiliser l'en-t\xeate ",(0,o.jsx)(n.code,{children:"Logto-Host"})," ou ",(0,o.jsx)(n.code,{children:"x-forwarded-host"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"personnaliser-les-r\xe8gles-dauthentification",children:"Personnaliser les r\xe8gles d'authentification"}),"\n",(0,o.jsx)(n.p,{children:"Par d\xe9faut, l'Application prot\xe9g\xe9e prot\xe9gera toutes les routes. Si vous avez besoin de personnaliser les r\xe8gles d'authentification (Authentication), vous pouvez d\xe9finir le champ \"R\xe8gles d'authentification personnalis\xe9es\" dans la Console."}),"\n",(0,o.jsx)(n.p,{children:"Il prend en charge les expressions r\xe9guli\xe8res, voici deux sc\xe9narios de cas :"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Pour ne prot\xe9ger que les routes ",(0,o.jsx)(n.code,{children:"/admin"})," et ",(0,o.jsx)(n.code,{children:"/privacy"})," avec authentification (Authentication) : ",(0,o.jsx)(n.code,{children:"^/(admin|privacy)/.*"})]}),"\n",(0,o.jsxs)(n.li,{children:["Pour exclure les images JPG de l'authentification (Authentication) : ",(0,o.jsx)(n.code,{children:"^(?!.*\\.jpg$).*$"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"d\xe9veloppement-local",children:"D\xe9veloppement local"}),"\n",(0,o.jsxs)(n.p,{children:["L'Application prot\xe9g\xe9e est con\xe7ue pour fonctionner avec votre serveur d'origine. Cependant, si votre serveur d'origine n'est pas accessible publiquement, vous pouvez utiliser un outil comme ",(0,o.jsx)(n.a,{href:"https://ngrok.com/",children:"ngrok"})," ou ",(0,o.jsx)(n.a,{href:"https://developers.cloudflare.com/pages/how-to/preview-with-cloudflare-tunnel/",children:"Cloudflare Tunnels"})," pour exposer votre serveur local \xe0 Internet."]}),"\n",(0,o.jsx)(n.h2,{id:"transition-vers-lint\xe9gration-sdk",children:"Transition vers l'int\xe9gration SDK"}),"\n",(0,o.jsx)(n.p,{children:"L'Application prot\xe9g\xe9e est con\xe7ue pour simplifier le processus d'authentification (Authentication). Cependant, si vous d\xe9cidez de passer \xe0 l'int\xe9gration SDK pour un meilleur contr\xf4le et une personnalisation, vous pouvez cr\xe9er une nouvelle application dans Logto et configurer l'int\xe9gration SDK. Et pour une transition en douceur, vous pouvez r\xe9utiliser les configurations d'application de l'Application prot\xe9g\xe9e. L'Application prot\xe9g\xe9e est en fait une \"Application Web Traditionnelle\" dans Logto, vous pouvez trouver l'\"AppId\" et l'\"AppSecret\" dans les param\xe8tres de l'application. Une fois la transition termin\xe9e, vous pouvez supprimer l'Application prot\xe9g\xe9e de votre application."})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},15658:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(30758);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);