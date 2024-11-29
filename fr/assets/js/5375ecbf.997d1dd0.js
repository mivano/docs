"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[50951],{59980:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"authorization/role-based-access-control/configure-roles","title":"Configurer les r\xf4les","description":"Configurer via Logto Console","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/configure-roles.mdx","sourceDirName":"authorization/role-based-access-control","slug":"/authorization/role-based-access-control/configure-roles","permalink":"/fr/authorization/role-based-access-control/configure-roles","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/authorization/role-based-access-control/configure-roles.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Configurer les permissions","permalink":"/fr/authorization/role-based-access-control/configure-permissions"},"next":{"title":"Prot\xe9ger les ressources API avec le contr\xf4le d\u2019acc\xe8s bas\xe9 sur les r\xf4les (RBAC)","permalink":"/fr/authorization/role-based-access-control/protect-api-resources-with-rbac"}}');var n=r(86070),t=r(15658);const o={sidebar_position:2},l="Configurer les r\xf4les",a={},u=[{value:"Configurer via Logto Console",id:"configurer-via-logto-console",level:2},{value:"D\xe9finir le type de r\xf4le",id:"d\xe9finir-le-type-de-r\xf4le",level:3},{value:"Cr\xe9er et d\xe9finir un nouveau r\xf4le",id:"cr\xe9er-et-d\xe9finir-un-nouveau-r\xf4le",level:3},{value:"Voir ou mettre \xe0 jour un r\xf4le",id:"voir-ou-mettre-\xe0-jour-un-r\xf4le",level:3},{value:"G\xe9rer les utilisateurs ou les applications machine \xe0 machine dans les r\xf4les",id:"g\xe9rer-les-utilisateurs-ou-les-applications-machine-\xe0-machine-dans-les-r\xf4les",level:3},{value:"G\xe9rer les permissions dans les r\xf4les",id:"g\xe9rer-les-permissions-dans-les-r\xf4les",level:3},{value:"G\xe9rer les r\xf4les attribu\xe9s \xe0 une application machine \xe0 machine ou un utilisateur",id:"g\xe9rer-les-r\xf4les-attribu\xe9s-\xe0-une-application-machine-\xe0-machine-ou-un-utilisateur",level:3},{value:"Configurer via Logto Management API",id:"configurer-via-logto-management-api",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components},{CloudLink:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"configurer-les-r\xf4les",children:"Configurer les r\xf4les"})}),"\n",(0,n.jsx)(s.h2,{id:"configurer-via-logto-console",children:"Configurer via Logto Console"}),"\n",(0,n.jsx)(s.h3,{id:"d\xe9finir-le-type-de-r\xf4le",children:"D\xe9finir le type de r\xf4le"}),"\n",(0,n.jsx)(s.p,{children:'Dans Logto, il existe deux types de R\xf4les bas\xe9s sur l\'entit\xe9 \xe0 laquelle ils peuvent \xeatre appliqu\xe9s : "R\xf4le utilisateur" ou "R\xf4le d\'application machine \xe0 machine".'}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"R\xf4le utilisateur"})," : Le r\xf4le utilisateur est un type de r\xf4le uniquement attribuable aux utilisateurs. Il peut inclure des Permissions de vos propres Ressources API."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"R\xf4le machine \xe0 machine"})," : Le r\xf4le M2M est un type de r\xf4le uniquement attribuable aux applications machine \xe0 machine. Il peut inclure \xe0 la fois vos propres Permissions API et les Permissions de Logto Management API. Le r\xf4le machine \xe0 machine est g\xe9n\xe9ralement utilis\xe9 pour prot\xe9ger votre Authentification machine \xe0 machine. Comme l'acc\xe8s \xe0 Logto Management API ou \xe0 vos propres Ressources API."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Apr\xe8s avoir cr\xe9\xe9 un r\xf4le, vous ne pouvez pas modifier son type."}),"\n",(0,n.jsx)(s.h3,{id:"cr\xe9er-et-d\xe9finir-un-nouveau-r\xf4le",children:"Cr\xe9er et d\xe9finir un nouveau r\xf4le"}),"\n",(0,n.jsxs)(s.p,{children:["Un r\xf4le est un groupe de Permissions. Acc\xe9dez \xe0 ",(0,n.jsx)(r,{to:"/roles",children:"Console > Roles"}),", et vous verrez une liste des r\xf4les que vous avez d\xe9finis."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Gardez \xe0 l'esprit que bien qu'il soit techniquement possible de cr\xe9er un r\xf4le ",(0,n.jsx)(s.em,{children:"sans"})," Permissions ou utilisateurs assign\xe9s, il n'est pas recommand\xe9 de cr\xe9er trop de r\xf4les vides. Cela perturbera l'harmonie de la gestion des r\xf4les et rendra le syst\xe8me de Contr\xf4le d\u2019acc\xe8s bas\xe9 sur les r\xf4les (RBAC) inefficace."]}),"\n",(0,n.jsx)(s.li,{children:"Les Permissions sont regroup\xe9es par API dans le s\xe9lecteur, vous permettant de les ajouter en bloc ou de les s\xe9lectionner individuellement."}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["Le Contr\xf4le d\u2019acc\xe8s bas\xe9 sur les r\xf4les (RBAC) est utilis\xe9 dans toute l'infrastructure Logto, tant au niveau syst\xe8me/utilisateur qu'au niveau de l'Organisation. Ce chapitre se concentre sur le RBAC au niveau syst\xe8me/utilisateur. Si vous avez besoin de mettre en \u0153uvre le RBAC au niveau de l'Organisation, consultez le ",(0,n.jsx)(s.a,{href:"/authorization/organization-template",children:"mod\xe8le d'organisation"}),"."]})}),"\n",(0,n.jsx)(s.h3,{id:"voir-ou-mettre-\xe0-jour-un-r\xf4le",children:"Voir ou mettre \xe0 jour un r\xf4le"}),"\n",(0,n.jsx)(s.p,{children:"Vous pouvez \xe9galement modifier le nom et la description du r\xf4le, et inspecter et g\xe9rer les Permissions et utilisateurs assign\xe9s au r\xf4le \xe0 tout moment."}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsx)(s.p,{children:"La suppression du r\xf4le \xe9liminera toutes les Permissions li\xe9es pour les utilisateurs concern\xe9s et supprimera la connexion entre les r\xf4les, les utilisateurs ou les applications, et les Permissions."})}),"\n",(0,n.jsx)(s.h3,{id:"g\xe9rer-les-utilisateurs-ou-les-applications-machine-\xe0-machine-dans-les-r\xf4les",children:"G\xe9rer les utilisateurs ou les applications machine \xe0 machine dans les r\xf4les"}),"\n",(0,n.jsx)(s.p,{children:"Selon le type de r\xf4le que vous choisissez, vous pourrez attribuer ou supprimer des utilisateurs ou des applications machine \xe0 machine sur la page de d\xe9tails du r\xf4le."}),"\n",(0,n.jsx)(s.p,{children:'Cliquez sur l\'onglet "Utilisateurs" ou "Applications machine \xe0 machine" pour voir les utilisateurs ou applications assign\xe9s au r\xf4le. Pour continuer \xe0 ajouter des utilisateur(s) ou application(s) au r\xf4le, cliquez sur le bouton "Attribuer des utilisateurs" ou "Attribuer des applications" dans le coin sup\xe9rieur droit.'}),"\n",(0,n.jsx)(s.h3,{id:"g\xe9rer-les-permissions-dans-les-r\xf4les",children:"G\xe9rer les permissions dans les r\xf4les"}),"\n",(0,n.jsx)(s.p,{children:"Si vous avez besoin de modifier les capacit\xe9s d'un r\xf4le, vous pouvez facilement le faire en attribuant ou en supprimant des Permissions."}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"Si une Permission est supprim\xe9e, les utilisateurs ou applications avec ce r\xf4le perdront l'acc\xe8s accord\xe9 par cette Permission."})}),"\n",(0,n.jsx)(s.h3,{id:"g\xe9rer-les-r\xf4les-attribu\xe9s-\xe0-une-application-machine-\xe0-machine-ou-un-utilisateur",children:"G\xe9rer les r\xf4les attribu\xe9s \xe0 une application machine \xe0 machine ou un utilisateur"}),"\n",(0,n.jsx)(s.p,{children:"Vous pouvez trouver un onglet \"R\xf4les\" sur la page de d\xe9tails d'un utilisateur ou d'une application. Cliquez sur l'onglet pour voir et g\xe9rer les r\xf4les attribu\xe9s \xe0 l'utilisateur ou aux applications machine \xe0 machine."}),"\n",(0,n.jsx)(s.p,{children:"Si la configuration dans Logto Cloud ne vous suffit pas, vous pouvez utiliser Management API pour effectuer cette t\xe2che de gestion de mani\xe8re programmatique."}),"\n",(0,n.jsx)(s.h2,{id:"configurer-via-logto-management-api",children:"Configurer via Logto Management API"}),"\n",(0,n.jsxs)(s.p,{children:["G\xe9rez en utilisant Logto Management API. Effectuez un appel au point de terminaison relatif. Consultez cette ",(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-listresourcescopes",children:"r\xe9f\xe9rence"}),"."]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"m\xe9thode"}),(0,n.jsx)(s.th,{children:"chemin"}),(0,n.jsx)(s.th,{children:"description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"GET"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-listroles",children:"/api/roles"})}),(0,n.jsx)(s.td,{children:"Obtenez des r\xf4les avec des filtres et une pagination."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"POST"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-createrole",children:"/api/roles"})}),(0,n.jsx)(s.td,{children:"Cr\xe9ez un nouveau r\xf4le avec les donn\xe9es fournies."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"GET"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-getrole",children:"/api/roles/{Id}"})}),(0,n.jsx)(s.td,{children:"Obtenez les d\xe9tails du r\xf4le par ID."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DELETE"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-deleterole",children:"/api/roles/{Id}"})}),(0,n.jsx)(s.td,{children:"Supprimez un r\xf4le avec l'ID donn\xe9."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"PATCH"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-updaterole",children:"/api/roles/{Id}"})}),(0,n.jsx)(s.td,{children:"Mettez \xe0 jour les d\xe9tails du r\xf4le. Cette m\xe9thode effectue une mise \xe0 jour partielle."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"GET"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-listroleusers",children:"/api/roles/{Id}/users"})}),(0,n.jsx)(s.td,{children:"Obtenez les utilisateurs qui ont le r\xf4le attribu\xe9 avec pagination."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"POST"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-createroleuser",children:"/api/roles/{Id}/users"})}),(0,n.jsxs)(s.td,{children:["Attribuez un r\xf4le \xe0 une liste d'utilisateurs. Le r\xf4le doit avoir le type ",(0,n.jsx)(s.code,{children:"User"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DELETE"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-deleteroleuser",children:"/api/roles/{Id}/users/{userId}"})}),(0,n.jsx)(s.td,{children:"Supprimez un r\xf4le d'un utilisateur avec l'ID donn\xe9."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"GET"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-listroleapplications",children:"/api/roles/{Id}/applications"})}),(0,n.jsx)(s.td,{children:"Obtenez les applications qui ont le r\xf4le attribu\xe9 avec pagination."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"POST"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-createroleapplication",children:"/api/roles/{Id}/applications"})}),(0,n.jsxs)(s.td,{children:["Attribuez un r\xf4le \xe0 une liste d'applications. Le r\xf4le doit avoir le type ",(0,n.jsx)(s.code,{children:"Application"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DELETE"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-deleteroleapplication",children:"/api/roles/{Id}/applications/{applicationId}"})}),(0,n.jsx)(s.td,{children:"Supprimez le r\xf4le d'une application avec l'ID donn\xe9."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"GET"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-listrolescopes",children:"/api/roles/{Id}/scopes"})}),(0,n.jsx)(s.td,{children:"Obtenez les Port\xe9es de Ressource API (Permissions) li\xe9es \xe0 un r\xf4le."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"POST"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-createrolescope",children:"/api/roles/{Id}/scopes"})}),(0,n.jsx)(s.td,{children:"Liez une liste de Port\xe9es de Ressource API (Permissions) \xe0 un r\xf4le. Les Port\xe9es li\xe9es originales seront conserv\xe9es."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"DELETE"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"https://openapi.logto.io/operation/operation-deleterolescope",children:"/api/roles/{Id}/scopes/{scopeId}"})}),(0,n.jsx)(s.td,{children:"Dissociez une Port\xe9e de Ressource API (Permission) d'un r\xf4le avec l'ID donn\xe9."})]})]})]}),"\n",(0,n.jsx)(s.h1,{id:"r\xf4les-par-d\xe9faut",children:"R\xf4les par d\xe9faut"}),"\n",(0,n.jsx)(s.p,{children:"Les r\xf4les par d\xe9faut sont les r\xf4les automatiquement attribu\xe9s lorsque les utilisateurs sont cr\xe9\xe9s, soit pour l'auto-inscription, soit cr\xe9\xe9s via Management API. Vous pouvez activer ce basculement en allant dans r\xf4les-d\xe9tail du r\xf4le-g\xe9n\xe9ral."})]})}function c(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},15658:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>l});var i=r(30758);const n={},t=i.createContext(n);function o(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);