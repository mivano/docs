"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[82273],{40702:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"authorization/organization-template/configure-organization-template","title":"Organisationstemplate konfigurieren","description":"Wir werden den Prozess der Konfiguration der Organisationstemplate-Funktion \xfcber die Logto-Konsole durchgehen.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/authorization/organization-template/configure-organization-template.mdx","sourceDirName":"authorization/organization-template","slug":"/authorization/organization-template/configure-organization-template","permalink":"/de/authorization/organization-template/configure-organization-template","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/authorization/organization-template/configure-organization-template.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Organisationstemplate","permalink":"/de/authorization/organization-template/"},"next":{"title":"Organisationsressourcen sch\xfctzen","permalink":"/de/authorization/organization-template/protect-organization-resources"}}');var t=i(86070),s=i(15658);const a={sidebar_position:1},o="Organisationstemplate konfigurieren",g={},l=[{value:"Konfiguration \xfcber die Logto-Konsole",id:"konfiguration-\xfcber-die-logto-konsole",level:2},{value:"Organisationsberechtigung erstellen",id:"organisationsberechtigung-erstellen",level:3},{value:"Organisationsrolle erstellen",id:"organisationsrolle-erstellen",level:3},{value:"Nur Organisationsrollen mit Organisationsberechtigungen",id:"nur-organisationsrollen-mit-organisationsberechtigungen",level:4},{value:"Nur Organisationsrollen mit API-Berechtigungen",id:"nur-organisationsrollen-mit-api-berechtigungen",level:4},{value:"Gemischte API- und Organisationsberechtigungen in Organisationsrollen",id:"gemischte-api--und-organisationsberechtigungen-in-organisationsrollen",level:4},{value:"Konfiguration \xfcber die Logto Management API",id:"konfiguration-\xfcber-die-logto-management-api",level:2},{value:"Umgang mit \xc4nderungen der Mitgliederberechtigungen",id:"umgang-mit-\xe4nderungen-der-mitgliederberechtigungen",level:2},{value:"Keine neuen Berechtigungen im System eingef\xfchrt",id:"keine-neuen-berechtigungen-im-system-eingef\xfchrt",level:4},{value:"Neue Berechtigung wird im System eingef\xfchrt und einem Mitglied zugewiesen",id:"neue-berechtigung-wird-im-system-eingef\xfchrt-und-einem-mitglied-zugewiesen",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"organisationstemplate-konfigurieren",children:"Organisationstemplate konfigurieren"})}),"\n",(0,t.jsx)(n.p,{children:"Wir werden den Prozess der Konfiguration der Organisationstemplate-Funktion \xfcber die Logto-Konsole durchgehen."}),"\n",(0,t.jsxs)(n.p,{children:["Navigiere zuerst zu ",(0,t.jsx)(i,{to:"/organization-template",children:"Konsole > Organisationstemplate"}),". Du wirst sehen, dass das Organisationstemplate aus zwei Teilen besteht: Organisationsrollen und Organisationsberechtigungen. Ein Organisationstemplate definiert gemeinsame Zugangskontrollrichtlinien (Berechtigungen und Rollen) f\xfcr mehrere Organisationen."]}),"\n",(0,t.jsx)(n.h2,{id:"konfiguration-\xfcber-die-logto-konsole",children:"Konfiguration \xfcber die Logto-Konsole"}),"\n",(0,t.jsx)(n.h3,{id:"organisationsberechtigung-erstellen",children:"Organisationsberechtigung erstellen"}),"\n",(0,t.jsx)(n.p,{children:"Organisationsberechtigungen sind ein wesentlicher Bestandteil des Organisationstemplates. Diese Berechtigungen sind speziell f\xfcr Organisationen innerhalb deines Produkts konzipiert. So verwaltest du sie:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Finde den Tab f\xfcr Organisationsberechtigungen:"}),' Gehe zum Tab "Organisationsberechtigungen", um deine vorhandenen Berechtigungen zu sehen.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Hinzuf\xfcgen, l\xf6schen und bearbeiten:"})," Du kannst problemlos neue Organisationsberechtigungen hinzuf\xfcgen, nicht ben\xf6tigte l\xf6schen und bestehende Berechtigungen nach Bedarf bearbeiten."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"organisationsrolle-erstellen",children:"Organisationsrolle erstellen"}),"\n",(0,t.jsx)(n.p,{children:"Logto unterst\xfctzt zwei Arten von Organisationsrollen, dies entspricht dem Benutzer/System-Level RBAC:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Benutzer"}),": Rollen, die Benutzern zugewiesen werden."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Maschine-zu-Maschine"}),": Rollen, die Maschine-zu-Maschine-Anwendungen zugewiesen werden."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Logto erm\xf6glicht es dir, Organisationsrollen auf verschiedene Weise zu definieren, um der Struktur deines Systems gerecht zu werden:"}),"\n",(0,t.jsx)(n.h4,{id:"nur-organisationsrollen-mit-organisationsberechtigungen",children:"Nur Organisationsrollen mit Organisationsberechtigungen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Wann verwenden:"})," Du hast separate Benutzer/System-Endpunkte und Organisationsendpunkte."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Erkl\xe4rung:"})," Dies ist der einfachste Ansatz, wenn die technische Architektur und das API-Design deines Produkts Benutzer/System-Ressourcen klar von Organisationsressourcen trennen. Deine Organisationsrollen werden nur die Berechtigungen enthalten, die du f\xfcr die Organisation definierst."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"nur-organisationsrollen-mit-api-berechtigungen",children:"Nur Organisationsrollen mit API-Berechtigungen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Wann verwenden:"})," Benutzer/System-Level und Organisations-Level Zugangskontrolle werden durch dieselben Endpunkte gehandhabt."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Erkl\xe4rung:"})," W\xe4hle dies, wenn du alle Berechtigungen \xfcber einheitliche API-Ressourcen verwalten m\xf6chtest."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"gemischte-api--und-organisationsberechtigungen-in-organisationsrollen",children:"Gemischte API- und Organisationsberechtigungen in Organisationsrollen"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Wann verwenden:"})," Du hast separate Endpunkte f\xfcr dein Produkt f\xfcr Benutzer/System-Level und Organisations-Level definiert, aber einige Benutzerrollen erfordern eine Mischung aus beiden Benutzer-Level- und Organisations-Level-Berechtigungen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Erkl\xe4rung:"})," Dies bietet die gr\xf6\xdfte Flexibilit\xe4t, kann aber auch am komplexesten zu verwalten sein."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"konfiguration-\xfcber-die-logto-management-api",children:"Konfiguration \xfcber die Logto Management API"}),"\n",(0,t.jsx)(n.p,{children:"Alles, was du in der Konsole tun kannst, kann auch \xfcber die Management API durchgef\xfchrt werden, einschlie\xdflich: Verwaltung des Organisationstemplates zum Erstellen, L\xf6schen oder Bearbeiten von Organisationsberechtigungen und -rollen."}),"\n",(0,t.jsx)(n.p,{children:"F\xfcr eine vollst\xe4ndige Liste der F\xe4higkeiten, siehe bitte unsere API-Referenz:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-updateorganizationrole",children:"Logto Management API - Organisationsrolle"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listorganizationscopes",children:"Logto Management API - Organisationsberechtigung"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Mit der Logto Management API kannst du benutzerdefinierte Organisationserfahrungen erstellen, wie z. B. das Erm\xf6glichen von Selbstbedienung f\xfcr Organisationsadministratoren zur Erstellung von Organisationen. Sieh dir ",(0,t.jsx)(n.a,{href:"/end-user-flows/organization-experience/",children:"diesen Abschnitt"})," an, um mehr Organisation-Level-Funktionen und -Verwaltung zu aktivieren."]}),"\n",(0,t.jsx)(n.h2,{id:"umgang-mit-\xe4nderungen-der-mitgliederberechtigungen",children:"Umgang mit \xc4nderungen der Mitgliederberechtigungen"}),"\n",(0,t.jsx)(n.p,{children:"\xc4hnlich wie bei API RBAC k\xf6nnen Mitgliederberechtigungen w\xe4hrend einer Sitzung ge\xe4ndert werden \u2013 zum Beispiel k\xf6nnen ihnen neue Rollen zugewiesen oder bestehende Rollenberechtigungen ge\xe4ndert werden."}),"\n",(0,t.jsx)(n.p,{children:"Was passiert, wenn sich die Mitgliederberechtigungen \xe4ndern? Es gibt zwei F\xe4lle."}),"\n",(0,t.jsx)(n.h4,{id:"keine-neuen-berechtigungen-im-system-eingef\xfchrt",children:"Keine neuen Berechtigungen im System eingef\xfchrt"}),"\n",(0,t.jsx)(n.p,{children:"Aktuelle Organisationstokens (auch bekannt als Organisationstoken) bleiben g\xfcltig, bis sie ablaufen, selbst nachdem die Organisationsberechtigungen eines Benutzers ge\xe4ndert wurden. Neue Berechtigungen werden jedoch in nachfolgenden Organisationstokens widergespiegelt, und alle widerrufenen Berechtigungen werden weggelassen."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Organisationstokens haben eine feste Ablaufzeit, die nicht ge\xe4ndert werden kann, im Gegensatz zu generischen Zugangstokens."})}),"\n",(0,t.jsxs)(n.p,{children:["Rufe regelm\xe4\xdfig ",(0,t.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api/",children:"Logto Management API"})," Endpunkte auf oder stelle eine langlebige Verbindung her (z. B. mit WebSocket), um die Organisationsberechtigungen des Benutzers dynamisch abzurufen. Bei Erkennung von \xc4nderungen l\xf6sche das bestehende Organisationstoken, und neu ausgestellte Tokens werden automatisch die \xc4nderungen im Berechtigungsumfang der Organisation widerspiegeln."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl \\\n -X GET https://[tenant_id].logto.app/api/organizations/{id}/users/{userId}/scopes \\\n -H "Authorization: Bearer $ORGANIZATION_TOKEN"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Wenn Berechtigungs\xe4nderungen erkannt werden, l\xf6sche zuerst das Organisationstoken aus dem Speicher und rufe dann die SDK-Methode ",(0,t.jsx)(n.code,{children:"getOrganizationToken(organizationId)"})," auf, um ein neues zu erhalten. Neu ausgestellte Organisationstokens sollten die Berechtigungs\xe4nderungen widerspiegeln."]}),"\n",(0,t.jsx)(n.h4,{id:"neue-berechtigung-wird-im-system-eingef\xfchrt-und-einem-mitglied-zugewiesen",children:"Neue Berechtigung wird im System eingef\xfchrt und einem Mitglied zugewiesen"}),"\n",(0,t.jsx)(n.p,{children:"Dies geschieht, wenn neue Berechtigungen in dein Organisationstemplate eingef\xfchrt werden. In diesem Fall musst du zuerst die neu eingef\xfchrten Berechtigungsumf\xe4nge beim Initialisieren des Logto-Clients einbeziehen. Zum Beispiel:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"new LogtoClient({\n  appId: 'your-app-id',\n  redirectUrl: 'your-redirect-url',\n  scopes: [\n    'urn:logto:scope:organizations',\n    // ... deine anderen bestehenden Organisationsberechtigungsumf\xe4nge,\n    'new-organization-permission-scope',\n  ],\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"Zweitens muss jede deiner Client-Anwendungen die Benutzer erneut um Zustimmung bitten oder sie erneut anmelden, um die neue Berechtigungs\xe4nderung zu erhalten. Dann wird der neue Berechtigungsumfang in neuen Organisationstokens widergespiegelt."}),"\n",(0,t.jsx)(n.p,{children:"Codebeispiel f\xfcr erneute Zustimmung:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"signIn({ redirectUrl: 'your-redirect-url', prompt: 'consent' });\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(30758);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);