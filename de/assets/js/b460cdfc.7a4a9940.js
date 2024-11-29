"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[7023],{76897:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"authorization/role-based-access-control/configure-permissions","title":"Berechtigungen konfigurieren","description":"Konfiguration \xfcber die Logto-Konsole","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/configure-permissions.mdx","sourceDirName":"authorization/role-based-access-control","slug":"/authorization/role-based-access-control/configure-permissions","permalink":"/de/authorization/role-based-access-control/configure-permissions","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/configure-permissions.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Rollenbasierte Zugangskontrolle","permalink":"/de/authorization/role-based-access-control/"},"next":{"title":"Rollen konfigurieren","permalink":"/de/authorization/role-based-access-control/configure-roles"}}');var t=o(86070),i=o(15658);const s={sidebar_position:1},c="Berechtigungen konfigurieren",d={},a=[{value:"Konfiguration \xfcber die Logto-Konsole",id:"konfiguration-\xfcber-die-logto-konsole",level:2},{value:"Konfiguration \xfcber die Logto Management API",id:"konfiguration-\xfcber-die-logto-management-api",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{CloudLink:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"berechtigungen-konfigurieren",children:"Berechtigungen konfigurieren"})}),"\n",(0,t.jsx)(n.h2,{id:"konfiguration-\xfcber-die-logto-konsole",children:"Konfiguration \xfcber die Logto-Konsole"}),"\n",(0,t.jsxs)(n.p,{children:["Berechtigungen werden auf der Ebene der ",(0,t.jsx)(n.strong,{children:"API-Ressource"})," festgelegt. Navigiere zu ",(0,t.jsx)(o,{to:"/api-resources",children:"Konsole > API-Ressourcen"}),', klicke auf die API-Ressource, die du verwalten m\xf6chtest, und gehe dann zum Tab "Berechtigungen".']}),"\n",(0,t.jsx)(n.p,{children:"Es ist wichtig, einen Namen und Details f\xfcr die Berechtigung anzugeben, da dies die Identifizierung und Verwaltung von Berechtigungen erleichtert."}),"\n",(0,t.jsx)(n.h2,{id:"konfiguration-\xfcber-die-logto-management-api",children:"Konfiguration \xfcber die Logto Management API"}),"\n",(0,t.jsxs)(n.p,{children:["Verwalte die Berechtigungen mit der Logto Management API. F\xfchre einen Aufruf zum relativen Endpunkt durch. Sieh dir diese ",(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listresourcescopes",children:"Referenz"})," an."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Methode"}),(0,t.jsx)(n.th,{children:"Pfad"}),(0,t.jsx)(n.th,{children:"Beschreibung"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"GET"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listresourcescopes",children:"/api/resources/{resourceId}/scopes"})}),(0,t.jsx)(n.td,{children:"Berechtigungen (Scopes) abrufen, die f\xfcr eine API-Ressource definiert sind."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createresourcescope",children:"/api/resources/{resourceId}/scopes"})}),(0,t.jsx)(n.td,{children:"Eine neue Berechtigung (Scope) f\xfcr eine API-Ressource erstellen."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DELETE"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-deleteresourcescope",children:"/api/resources/{resourceId}/scopes/{scopeId}"})}),(0,t.jsx)(n.td,{children:"Eine API-Ressourcenberechtigung (Scope) von der angegebenen Ressource l\xf6schen."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"PATCH"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-updateresourcescope",children:"/api/resources/{resourceId}/scopes/{scopeId}"})}),(0,t.jsx)(n.td,{children:"Eine API-Ressourcenberechtigung (Scope) f\xfcr die angegebene Ressource aktualisieren. Diese Methode f\xfchrt ein partielles Update durch."})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},15658:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var r=o(30758);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);