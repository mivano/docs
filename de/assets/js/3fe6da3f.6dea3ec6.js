"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[39311],{1839:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"developers/user-impersonation","title":"Benutzermimikry","description":"Stellen Sie sich vor, Sarah, eine Support-Ingenieurin bei TechCorp, erh\xe4lt ein dringendes Ticket von Alex, einem Kunden, der keinen Zugriff auf eine kritische Ressource hat. Um das Problem effizient zu diagnostizieren und zu l\xf6sen, muss Sarah genau das sehen, was Alex im System sieht. Hier kommt die Benutzermimikry-Funktion von Logto ins Spiel.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/developers/user-impersonation.mdx","sourceDirName":"developers","slug":"/developers/user-impersonation","permalink":"/de/developers/user-impersonation","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/developers/user-impersonation.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"user-impersonation","title":"Benutzermimikry","sidebar_label":"Benutzermimikry","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Erstelle ein benutzerdefiniertes Token-Claims-Skript","permalink":"/de/developers/custom-token-claims/create-script"},"next":{"title":"Signaturschl\xfcssel","permalink":"/de/developers/signing-keys"}}');var t=r(86070),i=r(15658);const o={id:"user-impersonation",title:"Benutzermimikry",sidebar_label:"Benutzermimikry",sidebar_position:3},a="Benutzermimikry",c={},d=[{value:"Wie funktioniert es?",id:"wie-funktioniert-es",level:2},{value:"Schritt 1: Mimikry anfordern",id:"schritt-1-mimikry-anfordern",level:3},{value:"Schritt 2: Erhalt eines Subjekt-Tokens",id:"schritt-2-erhalt-eines-subjekt-tokens",level:3},{value:"Schritt 3: Austausch des Subjekt-Tokens gegen ein Zugangstoken",id:"schritt-3-austausch-des-subjekt-tokens-gegen-ein-zugangstoken",level:3},{value:"Beispielverwendung",id:"beispielverwendung",level:2},{value:"<code>act</code> Anspruch",id:"act-anspruch",level:2},{value:"Anpassung der Token-Anspr\xfcche",id:"anpassung-der-token-anspr\xfcche",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"benutzermimikry",children:"Benutzermimikry"})}),"\n",(0,t.jsx)(n.p,{children:"Stellen Sie sich vor, Sarah, eine Support-Ingenieurin bei TechCorp, erh\xe4lt ein dringendes Ticket von Alex, einem Kunden, der keinen Zugriff auf eine kritische Ressource hat. Um das Problem effizient zu diagnostizieren und zu l\xf6sen, muss Sarah genau das sehen, was Alex im System sieht. Hier kommt die Benutzermimikry-Funktion von Logto ins Spiel."}),"\n",(0,t.jsx)(n.p,{children:"Die Benutzermimikry erm\xf6glicht es autorisierten Benutzern wie Sarah, vor\xfcbergehend im Namen anderer Benutzer wie Alex innerhalb des Systems zu agieren. Diese leistungsstarke Funktion ist von unsch\xe4tzbarem Wert f\xfcr die Fehlersuche, die Bereitstellung von Kundensupport und die Durchf\xfchrung administrativer Aufgaben."}),"\n",(0,t.jsx)(n.h2,{id:"wie-funktioniert-es",children:"Wie funktioniert es?"}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n    participant Sarah as Sarahs App\n    participant TechCorp as TechCorps Server\n    participant Logto as Logto Management API\n    participant LogtoToken as Logto Token-Endpunkt\n\n    Sarah->>TechCorp: POST /api/request-impersonation\n    Note over Sarah,TechCorp: Anfrage zur Mimikry von Alex\n\n    TechCorp->>Logto: POST /api/subject-tokens\n    Note over TechCorp,Logto: Anfrage nach Subjekt-Token f\xfcr Alex\n\n    Logto--\x3e>TechCorp: R\xfcckgabe des Subjekt-Tokens\n    TechCorp--\x3e>Sarah: R\xfcckgabe des Subjekt-Tokens\n\n    Sarah->>LogtoToken: POST /oidc/token\n    Note over Sarah,LogtoToken: Austausch des Subjekt-Tokens gegen Zugangstoken\n\n    LogtoToken--\x3e>Sarah: R\xfcckgabe des Zugangstokens\n    Note over Sarah: Sarah kann nun auf Ressourcen wie Alex zugreifen"}),"\n",(0,t.jsx)(n.p,{children:"Der Mimikry-Prozess umfasst drei Hauptschritte:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Sarah beantragt die Mimikry \xfcber den Backend-Server von TechCorp"}),"\n",(0,t.jsx)(n.li,{children:"Der Server von TechCorp erh\xe4lt ein Subjekt-Token von Logtos Management API"}),"\n",(0,t.jsx)(n.li,{children:"Sarahs Anwendung tauscht dieses Subjekt-Token gegen ein Zugangstoken aus"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Lassen Sie uns durchgehen, wie Sarah diese Funktion nutzen kann, um Alex zu helfen."}),"\n",(0,t.jsx)(n.h3,{id:"schritt-1-mimikry-anfordern",children:"Schritt 1: Mimikry anfordern"}),"\n",(0,t.jsx)(n.p,{children:"Zuerst muss Sarahs Support-Anwendung die Mimikry beim Backend-Server von TechCorp anfordern."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Anfrage (Sarahs Anwendung an TechCorps Server)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'POST /api/request-impersonation HTTP/1.1\nHost: api.techcorp.com\nAuthorization: Bearer <Sarahs_access_token>\nContent-Type: application/json\n\n{\n  "userId": "alex123",\n  "reason": "Untersuchung des Zugriffsproblems auf Ressourcen",\n  "ticketId": "TECH-1234"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"In dieser API sollte das Backend ordnungsgem\xe4\xdfe Autorisierungspr\xfcfungen durchf\xfchren, um sicherzustellen, dass Sarah die erforderlichen Berechtigungen hat, um Alex zu imitieren."}),"\n",(0,t.jsx)(n.h3,{id:"schritt-2-erhalt-eines-subjekt-tokens",children:"Schritt 2: Erhalt eines Subjekt-Tokens"}),"\n",(0,t.jsxs)(n.p,{children:["Der Server von TechCorp ruft nach der Validierung von Sarahs Anfrage die ",(0,t.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api",children:"Management API"})," von Logto auf, um ein Subjekt-Token zu erhalten."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Anfrage (TechCorps Server an Logtos Management API)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'POST /api/subject-tokens HTTP/1.1\nHost: techcorp.logto.app\nAuthorization: Bearer <TechCorp_m2m_access_token>\nContent-Type: application/json\n\n{\n  "userId": "alex123",\n  "context": {\n    "ticketId": "TECH-1234",\n    "reason": "Zugriffsproblem auf Ressourcen",\n    "supportEngineerId": "sarah789"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Antwort (Logto an TechCorps Server)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "subjectToken": "sub_7h32jf8sK3j2",\n  "expiresIn": 600\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Der Server von TechCorp sollte dann dieses Subjekt-Token an Sarahs Anwendung zur\xfcckgeben."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Antwort (TechCorps Server an Sarahs Anwendung)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "subjectToken": "sub_7h32jf8sK3j2",\n  "expiresIn": 600\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"schritt-3-austausch-des-subjekt-tokens-gegen-ein-zugangstoken",children:"Schritt 3: Austausch des Subjekt-Tokens gegen ein Zugangstoken"}),"\n",(0,t.jsx)(n.p,{children:"Nun tauscht Sarahs Anwendung dieses Subjekt-Token gegen ein Zugangstoken aus, das Alex repr\xe4sentiert, und gibt die Ressource an, bei der das Token verwendet wird."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Anfrage (Sarahs Anwendung an Logtos Token-Endpunkt)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"POST /oidc/token HTTP/1.1\nHost: techcorp.logto.app\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=urn:ietf:params:oauth:grant-type:token-exchange\n&client_id=techcorp_support_app\n&scope=resource:read\n&subject_token=alx_7h32jf8sK3j2\n&subject_token_type=urn:ietf:params:oauth:token-type:access_token\n&resource=https://api.techcorp.com/customer-data\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Antwort (Logto an Sarahs Anwendung)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "access_token": "eyJhbG...<truncated>",\n  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",\n  "token_type": "Bearer",\n  "expires_in": 3600,\n  "scope": "resource:read"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Das zur\xfcckgegebene ",(0,t.jsx)(n.code,{children:"access_token"})," wird an die angegebene Ressource gebunden, wodurch sichergestellt wird, dass es nur mit der Kunden-Daten-API von TechCorp verwendet werden kann."]}),"\n",(0,t.jsx)(n.h2,{id:"beispielverwendung",children:"Beispielverwendung"}),"\n",(0,t.jsx)(n.p,{children:"So k\xf6nnte Sarah dies in einer Node.js-Support-Anwendung verwenden:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"interface ImpersonationResponse {\n  subjectToken: string;\n  expiresIn: number;\n}\n\ninterface TokenExchangeResponse {\n  access_token: string;\n  issued_token_type: string;\n  token_type: string;\n  expires_in: number;\n  scope: string;\n}\n\nasync function impersonateUser(\n  userId: string,\n  clientId: string,\n  ticketId: string,\n  resource: string\n): Promise<string> {\n  try {\n    // Schritt 1 & 2: Mimikry anfordern und Subjekt-Token erhalten\n    const impersonationResponse = await fetch(\n      'https://api.techcorp.com/api/request-impersonation',\n      {\n        method: 'POST',\n        headers: {\n          Authorization: \"Bearer <Sarahs_access_token>\",\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          userId,\n          reason: 'Untersuchung des Zugriffsproblems auf Ressourcen',\n          ticketId,\n        }),\n      }\n    );\n\n    if (!impersonationResponse.ok) {\n      throw new Error(`HTTP-Fehler aufgetreten. Status: ${impersonationResponse.status}`);\n    }\n\n    const { subjectToken } = (await impersonationResponse.json()) as ImpersonationResponse;\n\n    // Schritt 3: Austausch des Subjekt-Tokens gegen Zugangstoken\n    const tokenExchangeBody = new URLSearchParams({\n      grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',\n      client_id: clientId,\n      scope: 'openid profile resource.read',\n      subject_token: subjectToken,\n      subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',\n      resource: resource,\n    });\n\n    const tokenExchangeResponse = await fetch('https://techcorp.logto.app/oidc/token', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },\n      body: tokenExchangeBody,\n    });\n\n    if (!tokenExchangeResponse.ok) {\n      throw new Error(`HTTP-Fehler! Status: ${tokenExchangeResponse.status}`);\n    }\n\n    const tokenData = (await tokenExchangeResponse.json()) as TokenExchangeResponse;\n    return tokenData.access_token;\n  } catch (error) {\n    console.error('Mimikry fehlgeschlagen:', error);\n    throw error;\n  }\n}\n\n// Sarah verwendet diese Funktion, um Alex zu imitieren\nasync function performImpersonation(): Promise<void> {\n  try {\n    const accessToken = await impersonateUser(\n      'alex123',\n      'techcorp_support_app',\n      'TECH-1234',\n      'https://api.techcorp.com/customer-data'\n    );\n    console.log('Mimikry-Zugangstoken f\xfcr Alex:', accessToken);\n  } catch (error) {\n    console.error('Mimikry fehlgeschlagen:', error);\n  }\n}\n\n// F\xfchre die Mimikry aus\nvoid performImpersonation()\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Das Subjekt-Token ist kurzlebig und f\xfcr den einmaligen Gebrauch bestimmt."}),"\n",(0,t.jsx)(n.li,{children:"Das Mimikry-Zugangstoken wird nicht mit einem Auffrischungstoken geliefert. Sarah muss diesen Prozess wiederholen, wenn das Token abl\xe4uft, bevor sie Alex' Problem l\xf6st."}),"\n",(0,t.jsx)(n.li,{children:"Der Backend-Server von TechCorp muss ordnungsgem\xe4\xdfe Autorisierungspr\xfcfungen implementieren, um sicherzustellen, dass nur autorisierte Support-Mitarbeiter wie Sarah die Mimikry anfordern k\xf6nnen."}),"\n"]})}),"\n",(0,t.jsxs)(n.h2,{id:"act-anspruch",children:[(0,t.jsx)(n.code,{children:"act"})," Anspruch"]}),"\n",(0,t.jsxs)(n.p,{children:["Beim Verwenden des Token-Austausch-Flows f\xfcr die Mimikry kann das ausgegebene Zugangstoken einen zus\xe4tzlichen ",(0,t.jsx)(n.code,{children:"act"}),' (Akteur) Anspruch enthalten. Dieser Anspruch repr\xe4sentiert die Identit\xe4t der "handelnden Partei" - in unserem Beispiel Sarah, die die Mimikry durchf\xfchrt.']}),"\n",(0,t.jsxs)(n.p,{children:["Um den ",(0,t.jsx)(n.code,{children:"act"})," Anspruch einzuschlie\xdfen, muss Sarahs Anwendung ein ",(0,t.jsx)(n.code,{children:"actor_token"})," in der Token-Austauschanfrage bereitstellen. Dieses Token sollte ein g\xfcltiges Zugangstoken f\xfcr Sarah mit dem ",(0,t.jsx)(n.code,{children:"openid"})," Scope sein. So wird es in der Token-Austauschanfrage eingeschlossen:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"POST /oidc/token HTTP/1.1\nHost: techcorp.logto.app\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=urn:ietf:params:oauth:grant-type:token-exchange\n&client_id=techcorp_support_app\n&scope=resource:read\n&subject_token=alx_7h32jf8sK3j2\n&subject_token_type=urn:ietf:params:oauth:token-type:access_token\n&actor_token=sarah_access_token\n&actor_token_type=urn:ietf:params:oauth:token-type:access_token\n&resource=https://api.techcorp.com/customer-data\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Wenn ein ",(0,t.jsx)(n.code,{children:"actor_token"})," bereitgestellt wird, enth\xe4lt das resultierende Zugangstoken einen ",(0,t.jsx)(n.code,{children:"act"})," Anspruch wie diesen:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "aud": "https://api.techcorp.com",\n  "iss": "https://techcorp.logto.app",\n  "exp": 1443904177,\n  "sub": "alex123",\n  "act": {\n    "sub": "sarah789"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Dieser ",(0,t.jsx)(n.code,{children:"act"})," Anspruch zeigt deutlich an, dass Sarah (sarah789) im Namen von Alex (alex123) handelt. Der ",(0,t.jsx)(n.code,{children:"act"})," Anspruch kann n\xfctzlich f\xfcr die \xdcberpr\xfcfung und Nachverfolgung von Mimikry-Aktionen sein."]}),"\n",(0,t.jsx)(n.h2,{id:"anpassung-der-token-anspr\xfcche",children:"Anpassung der Token-Anspr\xfcche"}),"\n",(0,t.jsxs)(n.p,{children:["Logto erm\xf6glicht es Ihnen, die Token-Anspr\xfcche ",(0,t.jsx)(n.del,{children:"JWT-Anspr\xfcche"})," f\xfcr Mimikry-Tokens anzupassen. Dies kann n\xfctzlich sein, um zus\xe4tzlichen Kontext oder Metadaten zum Mimikry-Prozess hinzuzuf\xfcgen, wie z. B. den Grund f\xfcr die Mimikry oder das zugeh\xf6rige Support-Ticket."]}),"\n",(0,t.jsxs)(n.p,{children:["Wenn der Server von TechCorp ein Subjekt-Token von Logtos Management API anfordert, kann er ein ",(0,t.jsx)(n.code,{children:"context"})," Objekt einschlie\xdfen:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "userId": "alex123",\n  "context": {\n    "ticketId": "TECH-1234",\n    "reason": "Zugriffsproblem auf Ressourcen",\n    "supportEngineerId": "sarah789"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Dieser Kontext kann dann in einer ",(0,t.jsx)(n.code,{children:"getCustomJwtClaims()"})," Funktion verwendet werden, um spezifische Anspr\xfcche zum endg\xfcltigen Zugangstoken hinzuzuf\xfcgen. Hier ist ein Beispiel, wie dies implementiert werden k\xf6nnte:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const getCustomJwtClaims = async ({ token, context, environmentVariables }) => {\n  if (context.grant?.type === 'urn:ietf:params:oauth:grant-type:token-exchange') {\n    const { ticketId, reason, supportEngineerId } = context.grant.subjectTokenContext;\n    return {\n      impersonation_context: {\n        ticket_id: ticketId,\n        reason: reason,\n        support_engineer: supportEngineerId,\n      },\n    };\n  }\n  return {};\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Das resultierende Zugangstoken, das Sarah erh\xe4lt, k\xf6nnte so aussehen:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "sub": "alex123",\n  "aud": "https://api.techcorp.com/customer-data",\n  "impersonation_context": {\n    "ticket_id": "TECH-1234",\n    "reason": "Zugriffsproblem auf Ressourcen",\n    "support_engineer": "sarah789"\n  }\n  // ... andere Standardanspr\xfcche\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Durch die Anpassung der Zugangstoken-Anspr\xfcche auf diese Weise kann TechCorp wertvolle Informationen \xfcber den Mimikry-Kontext einf\xfcgen, was es einfacher macht, Mimikry-Aktivit\xe4ten in ihrem System zu \xfcberpr\xfcfen und zu verstehen."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Seien Sie vorsichtig, wenn Sie benutzerdefinierte Anspr\xfcche zu Ihren Tokens hinzuf\xfcgen. Vermeiden Sie es, sensible Informationen einzuschlie\xdfen, die Sicherheitsrisiken darstellen k\xf6nnten, wenn das Token abgefangen oder geleakt wird. Die JWTs sind signiert, aber nicht verschl\xfcsselt, sodass die Anspr\xfcche f\xfcr jeden sichtbar sind, der Zugriff auf das Token hat."})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},15658:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(30758);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);