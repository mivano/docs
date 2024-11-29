"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[23030],{95594:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"authorization/api-resources/node-express","title":"Anleitung: Node (Express)","description":"Schritt 1: Das Bearer-Token aus dem Anfrage-Header extrahieren","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/authorization/api-resources/node-express.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/node-express","permalink":"/de/authorization/api-resources/node-express","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/authorization/api-resources/node-express.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Leitfaden: Python","permalink":"/de/authorization/api-resources/python"},"next":{"title":"Anleitung: Spring Boot","permalink":"/de/authorization/api-resources/spring-boot"}}');var i=r(86070),o=r(15658);const s={sidebar_position:3},a="Anleitung: Node (Express)",d={},u=[{value:"Schritt 1: Das Bearer-Token aus dem Anfrage-Header extrahieren",id:"schritt-1-das-bearer-token-aus-dem-anfrage-header-extrahieren",level:2},{value:"Schritt 2: Token-Validierung",id:"schritt-2-token-validierung",level:2},{value:"Installiere <code>jose</code> als Abh\xe4ngigkeit",id:"installiere-jose-als-abh\xe4ngigkeit",level:3},{value:"Abrufen der OIDC-Konfigurationen von Logto",id:"abrufen-der-oidc-konfigurationen-von-logto",level:3},{value:"Auth-Middleware hinzuf\xfcgen",id:"auth-middleware-hinzuf\xfcgen",level:3},{value:"Middleware auf deine API anwenden",id:"middleware-auf-deine-api-anwenden",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"anleitung-node-express",children:"Anleitung: Node (Express)"})}),"\n",(0,i.jsx)(n.h2,{id:"schritt-1-das-bearer-token-aus-dem-anfrage-header-extrahieren",children:"Schritt 1: Das Bearer-Token aus dem Anfrage-Header extrahieren"}),"\n",(0,i.jsxs)(n.p,{children:["Eine autorisierte Anfrage sollte einen ",(0,i.jsx)(n.code,{children:"Authorization"}),"-Header mit ",(0,i.jsx)(n.code,{children:"Bearer <access_token>"})," als Inhalt enthalten. Extrahiere das Autorisierungstoken aus dem Anfrage-Header:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"// auth_middleware.ts\n\nimport { IncomingHttpHeaders } from 'http';\n\nconst extractBearerTokenFromHeaders = ({ authorization }: IncomingHttpHeaders) => {\n  const bearerTokenIdentifier = 'Bearer';\n\n  if (!authorization) {\n    throw new Error({ code: 'auth.authorization_header_missing', status: 401 });\n  }\n\n  if (!authorization.startsWith(bearerTokenIdentifier)) {\n    throw new Error({ code: 'auth.authorization_token_type_not_supported', status: 401 });\n  }\n\n  return authorization.slice(bearerTokenIdentifier.length + 1);\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"schritt-2-token-validierung",children:"Schritt 2: Token-Validierung"}),"\n",(0,i.jsxs)(n.p,{children:["Zur Demonstration verwenden wir das ",(0,i.jsx)(n.a,{href:"https://github.com/panva/jose",children:"jose"}),"-Paket, um die Signatur, den Ablaufstatus und die erforderlichen Anspr\xfcche des Tokens zu validieren."]}),"\n",(0,i.jsxs)(n.h3,{id:"installiere-jose-als-abh\xe4ngigkeit",children:["Installiere ",(0,i.jsx)(n.code,{children:"jose"})," als Abh\xe4ngigkeit"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i jose --save\n"})}),"\n",(0,i.jsx)(n.h3,{id:"abrufen-der-oidc-konfigurationen-von-logto",children:"Abrufen der OIDC-Konfigurationen von Logto"}),"\n",(0,i.jsxs)(n.p,{children:["Du ben\xf6tigst einen JWK-\xf6ffentlichen Schl\xfcssel und den Aussteller des Tokens, um die Signatur und die Quelle des empfangenen JWS-Tokens zu \xfcberpr\xfcfen. Alle aktuellen \xf6ffentlichen Logto-Autorisierungskonfigurationen findest du unter ",(0,i.jsx)(n.code,{children:"https://<your-logto-domain>/oidc/.well-known/openid-configuration"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["z.B. Rufe ",(0,i.jsx)(n.code,{children:"https://tenant-id.logto.app/oidc/.well-known/openid-configuration"})," auf. Und finde die folgenden zwei Felder im Antwortk\xf6rper:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jwks_uri": "https://tenant-id.logto.app/oidc/jwks",\n  "issuer": "https://tenant-id.logto.app/oidc"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"auth-middleware-hinzuf\xfcgen",children:"Auth-Middleware hinzuf\xfcgen"}),"\n",(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.code,{children:"jwtVerify"}),"-Methode von Jose kann dir helfen, das JWS-Format des Tokens, die Tokensignatur, den Aussteller, die Zielgruppe und den Ablaufstatus zu \xfcberpr\xfcfen. Eine Ausnahme wird ausgel\xf6st, wenn die Validierung fehlschl\xe4gt."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Wenn du ",(0,i.jsx)(n.a,{href:"/authorization/role-based-access-control/protect-api-resources-with-rbac",children:"rollenbasierte Zugangskontrolle (RBAC)"})," verwendest, ist auch eine Berechtigungspr\xfcfung erforderlich."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"// auth-middleware.ts\n\nimport { createRemoteJWKSet, jwtVerify } from 'jose';\n\n//...\n\nexport const verifyAuthFromRequest = async (req, res, next) => {\n  // Extrahiere das Token\n  const token = extractBearerTokenFromHeaders(req.headers);\n\n  const { payload } = await jwtVerify(\n    token, // Das rohe Bearer-Token, das aus dem Anfrage-Header extrahiert wurde\n    createRemoteJWKSet(new URL('https://<your-logto-domain>/oidc/jwks')), // Erzeuge ein jwks mit jwks_uri, das vom Logto-Server abgefragt wurde\n    {\n      // Erwarteter Aussteller des Tokens, sollte vom Logto-Server ausgestellt sein\n      issuer: 'https://<your-logto-domain>/oidc',\n      // Erwartetes Zielgruppen-Token, sollte der Ressourcenindikator der aktuellen API sein\n      audience: '<your request listener resource indicator>',\n    }\n  );\n\n  // wenn du RBAC verwendest\n  assert(payload.scope.includes('some_scope'));\n\n  // benutzerdefinierte Payload-Logik\n  userId = payload.sub;\n\n  return next();\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"middleware-auf-deine-api-anwenden",children:"Middleware auf deine API anwenden"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { verifyAuthFromRequest } from '/middleware/auth-middleware.ts';\n\napp.get('/user/:id', verifyAuthFromRequest, (req, res, next) => {\n  // Benutzerdefinierter Code\n});\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},15658:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(30758);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);