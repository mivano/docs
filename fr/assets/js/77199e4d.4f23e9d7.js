"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[19249],{49329:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"logto-oss/troubleshooting-oss","title":"D\xe9pannage pour OSS","description":"Mon navigateur ne peut pas charger la console d\'administration (affiche l\'erreur{\' \'}","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/troubleshooting-oss.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/troubleshooting-oss","permalink":"/fr/logto-oss/troubleshooting-oss","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/logto-oss/troubleshooting-oss.mdx","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_label":"D\xe9pannage","sidebar_position":9},"sidebar":"docsSidebar","previous":{"title":"Mise \xe0 niveau","permalink":"/fr/logto-oss/upgrading-oss-version"},"next":{"title":"Contribution","permalink":"/fr/logto-oss/contribution"}}');var r=o(86070),i=o(15658);const t={sidebar_label:"D\xe9pannage",sidebar_position:9},l="D\xe9pannage pour OSS",a={},c=[];function d(e){const s={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components},{Details:o}=s;return o||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"d\xe9pannage-pour-oss",children:"D\xe9pannage pour OSS"})}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)(s.p,{children:["Mon navigateur ne peut pas charger la console d'administration (affiche l'erreur"," ","\n",(0,r.jsx)("code",{children:"Crypto.subtle is unavailable..."}),")"]})}),(0,r.jsxs)(s.p,{children:["La console d'administration utilise ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",children:"Web Crypto API"}),", qui n\xe9cessite des ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts",children:"contextes s\xe9curis\xe9s"}),", c'est-\xe0-dire HTTPS ou HTTP avec ",(0,r.jsx)(s.code,{children:"localhost"}),"."]}),(0,r.jsx)(s.p,{children:"Si vous utilisez HTTP avec une adresse IP ou un domaine personnalis\xe9, le navigateur ne peut pas charger la console d'administration."})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)(s.p,{children:["J'utilise un domaine personnalis\xe9, mais mon navigateur ne peut pas charger la console\nd'administration (affiche l'erreur ",(0,r.jsx)("code",{children:'"code": "oidc.invalid_redirect_uri"'}),")"]})}),(0,r.jsxs)(s.p,{children:["Si vous utilisez un domaine personnalis\xe9 plut\xf4t que ",(0,r.jsx)(s.code,{children:"localhost"}),", vous devez d\xe9finir la variable d'environnement ",(0,r.jsx)(s.code,{children:"ENDPOINT"})," sur l'URL de Logto. C'est en raison de l'exigence stricte de l'URI de redirection dans OIDC. Voir ",(0,r.jsx)(s.a,{href:"/concepts/core-service/configuration/",children:"Configuration"})," pour plus de d\xe9tails."]})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)(s.p,{children:["J'utilise un proxy HTTPS (par exemple, Nginx) devant Logto, mais j'ai \xe9chou\xe9 \xe0 la connexion\n(affiche l'erreur ",(0,r.jsx)("code",{children:"TypeError: Failed to fetch"}),")"]})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Tout d'abord, assurez-vous d'avoir d\xe9fini la variable d'environnement du n\u0153ud ",(0,r.jsx)(s.code,{children:"TRUST_PROXY_HEADER"})," sur ",(0,r.jsx)(s.code,{children:"true"}),". Voir ",(0,r.jsx)(s.a,{href:"/concepts/core-service/configuration/#using-a-https-proxy",children:"Configuration"})," pour plus de d\xe9tails."]}),"\n",(0,r.jsxs)(s.li,{children:["De plus, vous devez d\xe9finir l'en-t\xeate ",(0,r.jsx)(s.code,{children:"X-Forwarded-Proto"})," sur ",(0,r.jsx)(s.code,{children:"https"})," dans votre configuration de proxy. Voir ",(0,r.jsx)(s.a,{href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies",children:"Trusting TLS offloading proxies"})," pour plus de d\xe9tails."]}),"\n"]})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:"Je rencontre des probl\xe8mes de CORS."}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Si ",(0,r.jsx)(s.code,{children:"ADMIN_ENDPOINT"})," n'est pas sp\xe9cifi\xe9, ",(0,r.jsx)(s.code,{children:"localhost:[admin-port]"})," sera autoris\xe9 \xe0 effectuer le partage de ressources cross-origin (CORS) dans Logto."]}),"\n",(0,r.jsxs)(s.li,{children:["Si ",(0,r.jsx)(s.code,{children:"ADMIN_ENDPOINT"})," est sp\xe9cifi\xe9, seules les requ\xeates provenant de l'origine de ",(0,r.jsx)(s.code,{children:"ADMIN_ENDPOINT"})," seront autoris\xe9es."]}),"\n"]})]}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:(0,r.jsxs)(s.p,{children:["Qu'est-ce que c'est encore ? ",(0,r.jsx)("code",{children:"Error: Invalid id token"})]})}),(0,r.jsx)(s.p,{children:"Si vous ne m\xe9langez pas vos jetons, alors dans la plupart des cas, cela est caus\xe9 par un d\xe9calage entre l'heure de votre serveur et celle de votre client. Synchronisez l'heure sur votre serveur et votre client et r\xe9essayez."})]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},15658:(e,s,o)=>{o.d(s,{R:()=>t,x:()=>l});var n=o(30758);const r={},i=n.createContext(r);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);