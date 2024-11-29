"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[59865],{15189:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>g,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"authorization/organization-template/README","title":"Organisationstemplate","description":"Ein Organisationstemplate ist ein Zugangskontroll-Design f\xfcr Multi-Tenant-Apps. Es baut auf den Grundlagen der rollenbasierten Zugangskontrolle (RBAC) auf, ist jedoch f\xfcr Multi-Tenant-Umgebungen angepasst, in denen Organisationen Unternehmen, Gruppen oder Benutzer repr\xe4sentieren.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/authorization/organization-template/README.mdx","sourceDirName":"authorization/organization-template","slug":"/authorization/organization-template/","permalink":"/de/authorization/organization-template/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/authorization/organization-template/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"API-Ressourcen mit RBAC sch\xfctzen","permalink":"/de/authorization/role-based-access-control/protect-api-resources-with-rbac"},"next":{"title":"Organisationstemplate konfigurieren","permalink":"/de/authorization/organization-template/configure-organization-template"}}');var s=i(86070),r=i(15658);const a=i.p+"assets/images/organization-example-afa2da085d6afd66d90ecece13bedd5c.webp",o="data:image/webp;base64,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",d=i.p+"assets/images/organization-role-ae60e0000282d30a23f9c694c4074d5f.webp",l={sidebar_position:3},g="Organisationstemplate",c={},u=[{value:"Organisationsberechtigung",id:"organisationsberechtigung",level:3},{value:"Organisationsrolle",id:"organisationsrolle",level:3},{value:"Organisationstemplate",id:"organisationstemplate-1",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"organisationstemplate",children:"Organisationstemplate"})}),"\n",(0,s.jsxs)(n.p,{children:["Ein ",(0,s.jsx)(n.strong,{children:"Organisationstemplate"})," ist ein Zugangskontroll-Design f\xfcr Multi-Tenant-Apps. Es baut auf den Grundlagen der rollenbasierten Zugangskontrolle (RBAC) auf, ist jedoch f\xfcr Multi-Tenant-Umgebungen angepasst, in denen Organisationen Unternehmen, Gruppen oder Benutzer repr\xe4sentieren."]}),"\n",(0,s.jsx)(n.p,{children:"Auf Organisationsebene ist eine Zugangskontrolle erforderlich, um Berechtigungen f\xfcr Ressourcen zu verwalten."}),"\n",(0,s.jsx)(n.p,{children:"Hier ist ein Beispiel mit Notion, einem beliebten Kollaborationstool und einer typischen Multi-Tenant-App. Es unterst\xfctzt verschiedene Funktionen f\xfcr Authentifizierung und Autorisierung:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Du kannst mit einem Konto mehrere Arbeitsbereiche erstellen und beitreten, anstatt separate Konten f\xfcr jeden Arbeitsbereich zu ben\xf6tigen."}),"\n",(0,s.jsxs)(n.li,{children:["Notion verwendet das ",(0,s.jsx)(n.strong,{children:"gleiche Set"}),' von Zugriffsleveln, wie "Arbeitsbereichsbesitzer" und "Mitglied", \xfcber alle Arbeitsbereiche hinweg, obwohl du m\xf6glicherweise unterschiedliche Zugriffslevel f\xfcr jeden erwartest.']}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In diesem Kapitel konzentrieren wir uns auf das Organisationstemplate, das sich auf das Autorisierungsdesign auf Organisationsebene bezieht."}),"\n",(0,s.jsx)(n.p,{children:"Um es richtig einzurichten, musst du verstehen, [wie Organisationen funktionieren] und welche verschiedenen Entit\xe4ten beteiligt sind. Wenn du das noch nicht \xfcberpr\xfcft hast, solltest du diese Kapitel lesen."}),"\n",(0,s.jsx)(n.h1,{id:"organisationstemplate-verstehen",children:"Organisationstemplate verstehen"}),"\n",(0,s.jsx)(n.h3,{id:"organisationsberechtigung",children:"Organisationsberechtigung"}),"\n",(0,s.jsx)(n.p,{children:"Organisationsberechtigung bezieht sich auf die Autorisierung, eine Aktion im Kontext einer Organisation auszuf\xfchren. Eine Organisationsberechtigung sollte als aussagekr\xe4ftiger String dargestellt werden, der auch als Name und eindeutiger Identifikator dient."}),"\n",(0,s.jsx)("img",{src:o,width:"100%",alt:"Organisationsberechtigungen"}),"\n",(0,s.jsxs)(n.p,{children:["Zum Beispiel ",(0,s.jsx)(n.code,{children:"edit:resource"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Organisationsberechtigungen sind ohne den Kontext einer Organisation nicht aussagekr\xe4ftig. Zum Beispiel ist ",(0,s.jsx)(n.code,{children:"edit:resource"})," im Kontext der Organisation ",(0,s.jsx)(n.code,{children:"org1"})," anders als ",(0,s.jsx)(n.code,{children:"edit:resource"})," im Kontext der Organisation ",(0,s.jsx)(n.code,{children:"org2"}),", da sie auf unterschiedliche Ressourcen verweisen (",(0,s.jsx)(n.code,{children:"org 1"})," vs ",(0,s.jsx)(n.code,{children:"org 2"}),")."]}),"\n",(0,s.jsx)(n.h3,{id:"organisationsrolle",children:"Organisationsrolle"}),"\n",(0,s.jsx)(n.p,{children:"Eine Organisationsrolle ist eine Sammlung von Organisations- oder API-Berechtigungen (Berechtigungen, die direkt in API-Ressourcen in Logto Cloud definiert sind), die Benutzern zugewiesen werden k\xf6nnen."}),"\n",(0,s.jsx)("img",{src:d,width:"100%",alt:"Organisationsrollen"}),"\n",(0,s.jsxs)(n.p,{children:["Organisationsrollen sind ohne den Kontext einer Organisation nicht aussagekr\xe4ftig. Zum Beispiel ist ",(0,s.jsx)(n.code,{children:"admin"})," im Kontext der Organisation ",(0,s.jsx)(n.code,{children:"org1"})," anders als ",(0,s.jsx)(n.code,{children:"admin"})," im Kontext der Organisation ",(0,s.jsx)(n.code,{children:"org2"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Kann ich Berechtigungen, die auf API-Ressourcenebene definiert sind, Organisationsrollen zuweisen?"})}),(0,s.jsx)(n.p,{children:"Ja, du kannst API-Berechtigungen Organisationsrollen zuweisen, nicht nur Berechtigungen auf Organisationsebene."}),(0,s.jsx)(n.p,{children:"API-Ressourcen in Logto Cloud sch\xfctzen haupts\xe4chlich Benutzer- / Systemressourcen, aber wenn Systeme und Organisationen Endpunkte teilen, erm\xf6glicht Logto die Zuweisung von API-Berechtigungen zu Organisationsrollen f\xfcr Flexibilit\xe4t."})]}),"\n",(0,s.jsx)(n.h2,{id:"organisationstemplate-1",children:"Organisationstemplate"}),"\n",(0,s.jsxs)(n.p,{children:["Organisationstemplate bezieht sich auf eine Sammlung von Organisationsberechtigungen und -rollen, die f\xfcr jede ",(0,s.jsx)(n.a,{href:"/organizations",children:"Organisation"})," gelten. Es wird als rollenbasierte Zugangskontrolle auf Organisationsebene betrachtet."]}),"\n",(0,s.jsx)(n.p,{children:'Denke an eine typische Kollaborations-App, und sie teilen nat\xfcrlich das gleiche Zugangskontroll-"Template", das Zugriffslevel definiert und was Benutzer in der Organisation tun k\xf6nnen. Wir nennen es "Organisationstemplate" in Logto.'}),"\n",(0,s.jsx)(n.p,{children:"Lass uns ein Beispiel nehmen, um zu verstehen, wie alles zusammenh\xe4ngt:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"John"}),", ",(0,s.jsx)(n.strong,{children:"Sarah"})," sind in verschiedenen Organisationen mit unterschiedlichen Rollen im Kontext verschiedener Organisationen."]}),"\n",(0,s.jsx)("img",{src:a,width:"100%",alt:"Organisationstemplate"}),"\n",(0,s.jsx)(n.p,{children:"Aus diesem Diagramm sind hier einige Informationen, die du wissen musst:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"John"})," ist mit zwei Organisationen verbunden und verwendet die E-Mail ",(0,s.jsx)(n.code,{children:"john@email.com"})," als seinen eindeutigen Identifikator. Er hat die Position des ",(0,s.jsx)(n.code,{children:"admin"})," in ",(0,s.jsx)(n.code,{children:"Organisation A"})," und ist ein ",(0,s.jsx)(n.code,{children:"Gast"})," in ",(0,s.jsx)(n.code,{children:"Organisation B"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sarah"})," ist mit einer einzigen Organisation verbunden und verwendet die E-Mail ",(0,s.jsx)(n.code,{children:"sarah@email.com"})," als ihren eindeutigen Identifikator. Sie ist die ",(0,s.jsx)(n.code,{children:"admin"})," von ",(0,s.jsx)(n.code,{children:"Organisation B"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Die Rollen ",(0,s.jsx)(n.code,{children:"Admin"}),", ",(0,s.jsx)(n.code,{children:"Mitglied"})," und ",(0,s.jsx)(n.code,{children:"Gast"})," sind innerhalb von Organisationen festgelegt und diese Rollen sind konsistent \xfcber verschiedene Organisationen hinweg."]}),"\n",(0,s.jsx)(n.li,{children:"Zus\xe4tzliche Rollen k\xf6nnen innerhalb der Organisationstemplate-Einstellungen erstellt werden. Diese neu erstellten Rollen werden auf alle Organisationen angewendet und geteilt."}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"In Logto ist das Organisationstemplate ein Zugangskontrollmodell, das speziell f\xfcr Organisationen entwickelt wurde. Obwohl es auf der rollenbasierten Zugangskontrolle (RBAC) basiert, ist es f\xfcr unterschiedliche Szenarien gedacht."}),(0,s.jsx)(n.p,{children:"Verwende das Organisationstemplate, wenn du Rollen und Berechtigungen f\xfcr eine Organisation einrichten musst."}),(0,s.jsx)(n.p,{children:"F\xfcr eine einfache B2C-App ohne Organisationsebene verwende stattdessen Benutzer- / System-RBAC."}),(0,s.jsxs)(n.p,{children:["Du kannst sowohl das Organisationstemplate als auch Benutzer- / System-RBAC in Logto verwenden, um einen robusteren Ansatz zu verfolgen, der deinen spezifischen Gesch\xe4fts- und Produktanforderungen entspricht. Um RBAC zu verstehen, siehe diesen ",(0,s.jsx)(n.a,{href:"/authorization/role-based-access-control/",children:"Abschnitt"}),"."]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(30758);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);