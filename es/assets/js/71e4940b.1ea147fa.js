"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[38825],{98155:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"integrations/email/http-mail/README","title":"Configura la verificaci\xf3n por correo electr\xf3nico a trav\xe9s de una llamada HTTP","description":"El conector oficial de Logto para correo electr\xf3nico HTTP.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrations/email/http-mail/README.mdx","sourceDirName":"integrations/email/http-mail","slug":"/integrations/http-email","permalink":"/es/integrations/http-email","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrations/email/http-mail/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/http-email","sidebar_label":"HTTP Email","sidebar_custom_props":{"description":"Env\xeda correos electr\xf3nicos a trav\xe9s de una llamada HTTP."}},"sidebar":"integrationsSidebar","previous":{"title":"AWS Direct Mail","permalink":"/es/integrations/aws-ses"},"next":{"title":"Mailgun","permalink":"/es/integrations/mailgun"}}');var t=n(86070),a=n(15658),i=n(40428);const c={slug:"/integrations/http-email",sidebar_label:"HTTP Email",sidebar_custom_props:{description:"Env\xeda correos electr\xf3nicos a trav\xe9s de una llamada HTTP."}},s="Configura la verificaci\xf3n por correo electr\xf3nico a trav\xe9s de una llamada HTTP",l={},d=[...i.RM,{value:"Comenzar",id:"comenzar",level:2},{value:"Configurar el conector de correo electr\xf3nico HTTP",id:"configurar-el-conector-de-correo-electr\xf3nico-http",level:2},{value:"Carga \xfatil",id:"carga-\xfatil",level:2}];function u(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"configura-la-verificaci\xf3n-por-correo-electr\xf3nico-a-trav\xe9s-de-una-llamada-http",children:"Configura la verificaci\xf3n por correo electr\xf3nico a trav\xe9s de una llamada HTTP"})}),"\n",(0,t.jsx)(o.p,{children:"El conector oficial de Logto para correo electr\xf3nico HTTP."}),"\n",(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsx)(o.h2,{id:"comenzar",children:"Comenzar"}),"\n",(0,t.jsx)(o.p,{children:"El conector de correo electr\xf3nico HTTP te permite enviar correos electr\xf3nicos a trav\xe9s de una llamada HTTP. Para usar el conector de correo electr\xf3nico HTTP, necesitar\xe1s tener tu propio servicio de correo electr\xf3nico que exponga una API HTTP para enviar correos electr\xf3nicos. Logto llamar\xe1 a esta API cuando necesite enviar un correo electr\xf3nico. Por ejemplo, cuando un usuario se registra, Logto llamar\xe1 a la API HTTP para enviar un correo electr\xf3nico de verificaci\xf3n."}),"\n",(0,t.jsx)(o.h2,{id:"configurar-el-conector-de-correo-electr\xf3nico-http",children:"Configurar el conector de correo electr\xf3nico HTTP"}),"\n",(0,t.jsx)(o.p,{children:"Para usar el conector de correo electr\xf3nico HTTP, necesitas configurar un endpoint HTTP al que Logto pueda llamar. Y un token de autorizaci\xf3n opcional para el endpoint."}),"\n",(0,t.jsx)(o.h2,{id:"carga-\xfatil",children:"Carga \xfatil"}),"\n",(0,t.jsx)(o.p,{children:"El conector de correo electr\xf3nico HTTP enviar\xe1 la siguiente carga \xfatil al endpoint cuando necesite enviar un correo electr\xf3nico:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n  "to": "foo@logto.io",\n  "type": "SignIn",\n  "payload": {\n    "code": "123456"\n  }\n}\n'})}),"\n",(0,t.jsxs)(o.p,{children:["Puedes encontrar todos los tipos en ",(0,t.jsx)(o.a,{href:"/connectors/email-connectors/built-in-email-service/#unified-email-templates",children:"Plantilla de correo electr\xf3nico"}),", y la definici\xf3n completa del tipo ",(0,t.jsx)(o.code,{children:"SendMessageData"})," en ",(0,t.jsx)(o.a,{href:"https://github.com/logto-io/logto/tree/master/packages/toolkit/connector-kit/src/types/passwordless.ts",children:"connector-kit"}),"."]})]})}function p(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},40428:(e,o,n)=>{n.d(o,{Ay:()=>c,RM:()=>a});var r=n(86070),t=n(15658);const a=[];function i(e){const o={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,r.jsx)(o.admonition,{type:"tip",children:(0,r.jsxs)(o.p,{children:["En esta gu\xeda, asumimos que tienes conocimientos b\xe1sicos de los conectores de Logto. Si no los tienes, consulta la gu\xeda ",(0,r.jsx)(o.a,{href:"/connectors",children:"Configurar conectores"})," para comenzar."]})})}function c(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},15658:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>c});var r=n(30758);const t={},a=r.createContext(t);function i(e){const o=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);