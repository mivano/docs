"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[52562],{52980:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"end-user-flows/organization-experience/invite-organization-members","title":"Organisationsmitglieder einladen","description":"Als eine Multi-Organisation-Anwendung ist es eine h\xe4ufige Anforderung, Mitglieder in deine Organisation einzuladen. In diesem Leitfaden f\xfchren wir dich durch die Schritte und technischen Details, um diese Funktion in deiner Anwendung zu implementieren.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/organization-experience/invite-organization-members.mdx","sourceDirName":"end-user-flows/organization-experience","slug":"/end-user-flows/organization-experience/invite-organization-members","permalink":"/de/end-user-flows/organization-experience/invite-organization-members","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/organization-experience/invite-organization-members.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Organisation erstellen","permalink":"/de/end-user-flows/organization-experience/create-organization"},"next":{"title":"Organisationsverwaltung","permalink":"/de/end-user-flows/organization-experience/organization-management"}}');var t=i(86070),s=i(15658);const a={sidebar_position:2},d="Organisationsmitglieder einladen",l={},o=[{value:"\xdcberblick \xfcber den Ablauf",id:"\xfcberblick-\xfcber-den-ablauf",level:2},{value:"Organisationrollen erstellen",id:"organisationrollen-erstellen",level:2},{value:"Deinen E-Mail-Connector konfigurieren",id:"deinen-e-mail-connector-konfigurieren",level:2},{value:"Einladungen mit Logto Management API bearbeiten",id:"einladungen-mit-logto-management-api-bearbeiten",level:2},{value:"Organisation rollenbasierte Zugangskontrolle (RBAC) zur Verwaltung von Benutzerberechtigungen verwenden",id:"organisation-rollenbasierte-zugangskontrolle-rbac-zur-verwaltung-von-benutzerberechtigungen-verwenden",level:2},{value:"Berechtigungsaktualisierungen in Organisationstokens bearbeiten",id:"berechtigungsaktualisierungen-in-organisationstokens-bearbeiten",level:2},{value:"Vorhandene Berechtigungen widerrufen",id:"vorhandene-berechtigungen-widerrufen",level:3},{value:"Neue Berechtigungen gew\xe4hren",id:"neue-berechtigungen-gew\xe4hren",level:3},{value:"Neue Berechtigungen gew\xe4hren, die bereits in deinem Auth-System definiert sind",id:"neue-berechtigungen-gew\xe4hren-die-bereits-in-deinem-auth-system-definiert-sind",level:4},{value:"Neue Berechtigungen gew\xe4hren, die neu in deinem Auth-System eingef\xfchrt wurden",id:"neue-berechtigungen-gew\xe4hren-die-neu-in-deinem-auth-system-eingef\xfchrt-wurden",level:4},{value:"Echtzeit-Berechtigungspr\xfcfung implementieren und Organisationstoken aktualisieren",id:"echtzeit-berechtigungspr\xfcfung-implementieren-und-organisationstoken-aktualisieren",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"organisationsmitglieder-einladen",children:"Organisationsmitglieder einladen"})}),"\n",(0,t.jsx)(n.p,{children:"Als eine Multi-Organisation-Anwendung ist es eine h\xe4ufige Anforderung, Mitglieder in deine Organisation einzuladen. In diesem Leitfaden f\xfchren wir dich durch die Schritte und technischen Details, um diese Funktion in deiner Anwendung zu implementieren."}),"\n",(0,t.jsx)(n.h2,{id:"\xfcberblick-\xfcber-den-ablauf",children:"\xdcberblick \xfcber den Ablauf"}),"\n",(0,t.jsx)(n.p,{children:"Der gesamte Prozess wird im folgenden Diagramm veranschaulicht:"}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n\tParticipant U as Endbenutzer\n  Participant A as Organisationsadministrator\n  Participant C as Deine Multi-Organisation-App\n\tParticipant L as Logto\n\n  A ->> C: Eingabe der E-Mail des Eingeladenen und Rolle\n  C ->> L: Erstellen einer Organisationseinladung mit Management API\n  L --\x3e> C: R\xfcckgabe der Einladungs-ID\n  C ->> C: Erstellen des Einladungslinks mit Einladungs-ID\n  C ->> L: Anforderung zum Senden der Einladung per E-Mail mit Einladungslink\n  L --\x3e> U: Senden der Einladung per E-Mail mit Einladungslink\n  U ->> C: Klick auf den Einladungslink und Navigation zu deiner Landingpage,<br /> Annahme oder Ablehnung der Einladung\n  C ->> L: Aktualisierung des Einladungsstatus mit Management API"}),"\n",(0,t.jsx)(n.h2,{id:"organisationrollen-erstellen",children:"Organisationrollen erstellen"}),"\n",(0,t.jsxs)(n.p,{children:["Bevor du Mitglieder in deine Organisation einl\xe4dst, musst du Organisationrollen erstellen. Sieh dir den Leitfaden ",(0,t.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/organizations/configuration/",children:"Organisationen konfigurieren"})," f\xfcr detaillierte Anweisungen an."]}),"\n",(0,t.jsxs)(n.p,{children:["In diesem Leitfaden erstellen wir zwei typische Organisationrollen: ",(0,t.jsx)(n.code,{children:"admin"})," und ",(0,t.jsx)(n.code,{children:"member"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Die ",(0,t.jsx)(n.code,{children:"admin"}),"-Rolle hat vollen Zugriff auf alle Ressourcen in der Organisation, w\xe4hrend die ",(0,t.jsx)(n.code,{children:"member"}),"-Rolle eingeschr\xe4nkten Zugriff hat. Zum Beispiel kann jede Rolle einen Satz von Berechtigungen haben, wie folgt:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"admin"}),"-Rolle:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"read:data"})," - Lesezugriff auf alle Organisationsdatenressourcen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"write:data"})," - Schreibzugriff auf alle Organisationsdatenressourcen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"delete:data"})," - L\xf6schzugriff auf alle Organisationsdatenressourcen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"invite:member"})," - Mitglieder in die Organisation einladen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"manage:member"})," - Mitglieder in der Organisation verwalten."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"delete:member"})," - Mitglieder aus der Organisation entfernen."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"member"}),"-Rolle:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"read:data"})," - Lesezugriff auf alle Organisationsdatenressourcen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"write:data"})," - Schreibzugriff auf alle Organisationsdatenressourcen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"invite:member"})," - Mitglieder in die Organisation einladen."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Dies kann einfach in der Logto Admin-Konsole durchgef\xfchrt werden. Du kannst auch die Logto Management API verwenden, um Organisationrollen programmgesteuert zu erstellen."}),"\n",(0,t.jsx)(n.h2,{id:"deinen-e-mail-connector-konfigurieren",children:"Deinen E-Mail-Connector konfigurieren"}),"\n",(0,t.jsxs)(n.p,{children:["Da Einladungen per E-Mail versendet werden, stelle sicher, dass dein E-Mail-Connector ordnungsgem\xe4\xdf konfiguriert ist. Um Einladungen zu senden, musst du einen neu eingef\xfchrten E-Mail-Vorlagennutzungstyp konfigurieren - ",(0,t.jsx)(n.code,{children:"OrganizationInvitation"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Hinweis"}),"\n",(0,t.jsxs)(n.p,{children:['Der integrierte "Logto-E-Mail-Dienst" von Logto Cloud unterst\xfctzt derzeit nicht den Nutzungstyp ',(0,t.jsx)(n.code,{children:"OrganizationInvitation"}),". Stattdessen musst du deinen E-Mail-Connector (z.B. Sendgrid) konfigurieren und die ",(0,t.jsx)(n.code,{children:"OrganizationInvitation"}),"-Vorlage einrichten."]}),"\n",(0,t.jsxs)(n.p,{children:["Eine Beispiel-E-Mail-Vorlage f\xfcr den Nutzungstyp ",(0,t.jsx)(n.code,{children:"OrganizationInvitation"})," wird unten gezeigt:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "subject": "Willkommen in meiner Organisation",\n  "content": "<p>Tritt meiner Organisation \xfcber diesen <a href=\\"{{link}}\\" target=\\"_blank\\">Link</a> bei.</p>",\n  "usageType": "OrganizationInvitation",\n  "type": "text/html"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Der Platzhalter ",(0,t.jsx)(n.code,{children:"{{link}}"})," im E-Mail-Inhalt wird beim Senden der E-Mail durch den tats\xe4chlichen Einladungslink ersetzt. In diesem Leitfaden nehmen wir an, dass es ",(0,t.jsx)(n.code,{children:"https://your-app.com/invitation/accept/{your-invitation-id}"})," w\xe4re."]}),"\n",(0,t.jsxs)(n.p,{children:["Du kannst den Leitfaden ",(0,t.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/configure-connectors/email-connector/configure-popular-email-service/",children:"Beliebte E-Mail-Dienste konfigurieren"})," f\xfcr weitere Details zur Einrichtung von E-Mail-Connectors einsehen."]}),"\n",(0,t.jsx)(n.h2,{id:"einladungen-mit-logto-management-api-bearbeiten",children:"Einladungen mit Logto Management API bearbeiten"}),"\n",(0,t.jsx)(n.p,{children:"Hinweis"}),"\n",(0,t.jsxs)(n.p,{children:["Wenn du die Logto Management API noch nicht eingerichtet hast, sieh dir ",(0,t.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/interact-with-management-api/",children:"Interaktion mit Management API"})," f\xfcr Details an."]}),"\n",(0,t.jsx)(n.p,{children:"Wir haben eine Reihe von einladungsbezogenen Management APIs in der Organisationsfunktion bereitgestellt. Mit diesen APIs kannst du:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"POST /api/organization-invitations"})," eine Organisationseinladung mit einer zugewiesenen Organisationrolle erstellen."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"POST /api/organization-invitations/{id}/message"})," die Organisationseinladung per E-Mail an den Eingeladenen senden.\nHinweis: Diese API-Nutzlast unterst\xfctzt eine ",(0,t.jsx)(n.code,{children:"link"}),"-Eigenschaft, du kannst deinen Einladungslink basierend auf der Einladungs-ID erstellen. Zum Beispiel:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "link": "https://your-app.com/invitation/accept/{your-invitation-id}"\n}\n'})}),"\n","Dementsprechend musst du eine Landingpage implementieren, wenn dein Eingeladener \xfcber den Einladungslink zu deiner Anwendung navigiert."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GET /api/organization-invitations"})," & ",(0,t.jsx)(n.code,{children:"GET /api/organization-invitations/{id}"})," alle deine Einladungen oder eine bestimmte nach ID abrufen.\nAuf deiner Landingpage kannst du diese APIs verwenden, um alle Einladungen oder Details einer Einladung, die ein Benutzer erhalten hat, aufzulisten."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PUT /api/organization-invitations/{id}/status"})," die Einladung annehmen oder ablehnen, indem du den Einladungsstatus aktualisierst.\nVerwende diese API, um die Antwort des Benutzers auf die Einladung zu bearbeiten."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:['Bitte beachte, dass alle oben aufgef\xfchrten APIs ein g\xfcltiges "Organisationstoken" erfordern. Sieh dir diesen ',(0,t.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/organizations/integration/#step-2-fetch-the-organization-token",children:"Leitfaden"})," an, um zu erfahren, wie du das Organisationstoken erh\xe4ltst."]}),"\n",(0,t.jsx)(n.h2,{id:"organisation-rollenbasierte-zugangskontrolle-rbac-zur-verwaltung-von-benutzerberechtigungen-verwenden",children:"Organisation rollenbasierte Zugangskontrolle (RBAC) zur Verwaltung von Benutzerberechtigungen verwenden"}),"\n",(0,t.jsx)(n.p,{children:"Mit den obigen Einstellungen kannst du nun Einladungen per E-Mail senden, und Eingeladene k\xf6nnen der Organisation mit der zugewiesenen Rolle beitreten."}),"\n",(0,t.jsx)(n.p,{children:"Benutzer mit unterschiedlichen Organisationrollen haben unterschiedliche Berechtigungen in ihren Organisationstokens. Daher sollten sowohl deine Client-App als auch Backend-Dienste diese Berechtigungen \xfcberpr\xfcfen, um sichtbare Funktionen und erlaubte Aktionen zu bestimmen."}),"\n",(0,t.jsx)(n.h2,{id:"berechtigungsaktualisierungen-in-organisationstokens-bearbeiten",children:"Berechtigungsaktualisierungen in Organisationstokens bearbeiten"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Stelle sicher, dass du die Organisation in deine App integriert hast. Sieh dir den ",(0,t.jsx)(n.a,{href:"/authorization/organization-template/protect-organization-resources",children:"Integrationsleitfaden"})," f\xfcr weitere Details an."]})}),"\n",(0,t.jsx)(n.p,{children:"Das Verwalten von Berechtigungsaktualisierungen in Organisationstokens umfasst:"}),"\n",(0,t.jsx)(n.h3,{id:"vorhandene-berechtigungen-widerrufen",children:"Vorhandene Berechtigungen widerrufen"}),"\n",(0,t.jsx)(n.p,{children:"Zum Beispiel sollte das Herabstufen eines Admins zu einem Nicht-Admin-Mitglied Berechtigungen vom Benutzer entfernen. In einem solchen Fall kannst du einfach das zwischengespeicherte Organisationstoken l\xf6schen und ein neues mit Auffrischungstoken abrufen. Die reduzierten Berechtigungen werden sofort im neu ausgestellten Organisationstoken widergespiegelt."}),"\n",(0,t.jsx)(n.h3,{id:"neue-berechtigungen-gew\xe4hren",children:"Neue Berechtigungen gew\xe4hren"}),"\n",(0,t.jsx)(n.p,{children:"Dies kann weiter in zwei Szenarien unterteilt werden:"}),"\n",(0,t.jsx)(n.h4,{id:"neue-berechtigungen-gew\xe4hren-die-bereits-in-deinem-auth-system-definiert-sind",children:"Neue Berechtigungen gew\xe4hren, die bereits in deinem Auth-System definiert sind"}),"\n",(0,t.jsx)(n.p,{children:"\xc4hnlich wie beim Widerrufen von Berechtigungen, wenn die neu gew\xe4hrte Berechtigung bereits beim Auth-Server registriert ist, kannst du einfach ein neues Organisationstoken ausstellen, und die neuen Berechtigungen werden sofort widergespiegelt."}),"\n",(0,t.jsx)(n.h4,{id:"neue-berechtigungen-gew\xe4hren-die-neu-in-deinem-auth-system-eingef\xfchrt-wurden",children:"Neue Berechtigungen gew\xe4hren, die neu in deinem Auth-System eingef\xfchrt wurden"}),"\n",(0,t.jsxs)(n.p,{children:["In diesem Fall musst du einen erneuten Anmelde- oder Zustimmungsvorgang ausl\xf6sen, um das Organisationstoken des Benutzers zu aktualisieren. Zum Beispiel durch Aufrufen der ",(0,t.jsx)(n.code,{children:"signIn"}),"-Methode im Logto SDK."]}),"\n",(0,t.jsxs)(n.p,{children:["Erfahre mehr \xfcber ",(0,t.jsx)(n.a,{href:"/authorization/organization-template/protect-organization-resources/#fetch-the-organization-token",children:"das Ausstellen eines Organisationstokens"})]}),"\n",(0,t.jsx)(n.h3,{id:"echtzeit-berechtigungspr\xfcfung-implementieren-und-organisationstoken-aktualisieren",children:"Echtzeit-Berechtigungspr\xfcfung implementieren und Organisationstoken aktualisieren"}),"\n",(0,t.jsx)(n.p,{children:"Logto bietet Management API, um Echtzeit-Benutzerberechtigungen in der Organisation abzurufen."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"GET /api/organizations/{id}/users/{userId}/scopes"})," (",(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listorganizationuserscopes",children:"API-Referenzen"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Du kannst dann die Berechtigungen im Organisationstoken des Benutzers mit den Echtzeit-Berechtigungen vergleichen, um festzustellen, ob der Benutzer bef\xf6rdert oder herabgestuft wurde."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Wenn herabgestuft, kannst du einfach das zwischengespeicherte Organisationstoken l\xf6schen und das SDK wird automatisch ein neues mit den aktualisierten Berechtigungen ausstellen."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const { clearAccessToken } = useLogto();\n\n...\n// Wenn die abgerufenen Echtzeit-Berechtigungen weniger Berechtigungen haben als die Organisationstoken-Berechtigungen\nawait clearAccessToken();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Dies erfordert keinen erneuten Anmelde- oder Zustimmungsvorgang. Neue Organisationstokens werden automatisch vom Logto SDK ausgestellt."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Wenn eine neue Berechtigung in dein Auth-System eingef\xfchrt wird, l\xf6se einen erneuten Anmelde- oder Zustimmungsvorgang aus, um das Organisationstoken des Benutzers zu aktualisieren. Nehmen wir das React SDK als Beispiel:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const { clearAllTokens, signIn } = useLogto();\n\n...\n// Wenn die abgerufenen Echtzeit-Berechtigungen neu zugewiesene Berechtigungen haben als die Organisationstoken-Berechtigungen\nawait clearAllTokens();\nsignIn({\n  redirectUri: '<your-sign-in-redirect-uri>',\n  prompt: 'consent',\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"Der obige Code wird eine Seitennavigation zum Zustimmungsbildschirm ausl\xf6sen und automatisch zur\xfcck zu deiner App umleiten, mit aktualisierten Berechtigungen im Organisationstoken des Benutzers."}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var r=i(30758);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);