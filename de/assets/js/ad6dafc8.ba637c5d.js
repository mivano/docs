"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[37434],{11585:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"end-user-flows/enterprise-sso/idp-initiated-sso","title":"idp-initiated-sso","description":"IdP-initiiertes SSO ist ein Single Sign-On-Prozess, bei dem der Identit\xe4tsanbieter (IdP) haupts\xe4chlich den Authentifizierungsablauf steuert. Dieser Prozess beginnt, wenn sich ein Benutzer in die Plattform des IdP einloggt, wie z. B. ein Unternehmensportal oder ein zentrales Identit\xe4ts-Dashboard. Nach der Authentifizierung generiert der IdP eine SAML-Assertion und leitet den Benutzer zum Dienstanbieter (SP) weiter, um auf die Anwendung oder den Dienst zuzugreifen.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/idp-initiated-sso.mdx","sourceDirName":"end-user-flows/enterprise-sso","slug":"/end-user-flows/enterprise-sso/idp-initiated-sso","permalink":"/de/end-user-flows/enterprise-sso/idp-initiated-sso","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/end-user-flows/enterprise-sso/idp-initiated-sso.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"IdP-initiiertes SSO","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"SP-initiiertes SSO","permalink":"/de/end-user-flows/enterprise-sso/sp-initiated-sso"},"next":{"title":"Enterprise SSO-Identit\xe4t","permalink":"/de/end-user-flows/enterprise-sso/enterprise-sso-identity"}}');var r=i(86070),s=i(15658),d=i(56412);const o={sidebar_label:"IdP-initiiertes SSO",sidebar_position:2},a="IdP-initiiertes SSO (nur SAML)",u={},l=[{value:"Risiken und \xdcberlegungen",id:"risiken-und-\xfcberlegungen",level:2},{value:"IdP-initiiertes SSO mit Logto OIDC-Anwendungen verbinden",id:"idp-initiiertes-sso-mit-logto-oidc-anwendungen-verbinden",level:2},{value:"Voraussetzungen",id:"voraussetzungen",level:3},{value:"IdP-initiiertes SSO aktivieren",id:"idp-initiiertes-sso-aktivieren",level:3},{value:"W\xe4hle die SP-Anwendung aus",id:"w\xe4hle-die-sp-anwendung-aus",level:3},{value:"IdP-initiierten Authentifizierungsablauf konfigurieren",id:"idp-initiierten-authentifizierungsablauf-konfigurieren",level:2},{value:"Option A: Weiterleitung zur Standard-SP-Anwendung (Empfohlen)",id:"option-a-weiterleitung-zur-standard-sp-anwendung-empfohlen",level:3},{value:"Option B: Benutzer direkt mit IdP-initiiertem SSO authentifizieren",id:"option-b-benutzer-direkt-mit-idp-initiiertem-sso-authentifizieren",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A,{cloud:"comingSoon",oss:!1}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"idp-initiiertes-sso-nur-saml",children:"IdP-initiiertes SSO (nur SAML)"})}),"\n",(0,r.jsx)(n.p,{children:"IdP-initiiertes SSO ist ein Single Sign-On-Prozess, bei dem der Identit\xe4tsanbieter (IdP) haupts\xe4chlich den Authentifizierungsablauf steuert. Dieser Prozess beginnt, wenn sich ein Benutzer in die Plattform des IdP einloggt, wie z. B. ein Unternehmensportal oder ein zentrales Identit\xe4ts-Dashboard. Nach der Authentifizierung generiert der IdP eine SAML-Assertion und leitet den Benutzer zum Dienstanbieter (SP) weiter, um auf die Anwendung oder den Dienst zuzugreifen."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"IdP-initiiertes SSO",src:i(79500).A+"",width:"2250",height:"1530"})}),"\n",(0,r.jsx)(n.h2,{id:"risiken-und-\xfcberlegungen",children:"Risiken und \xdcberlegungen"}),"\n",(0,r.jsxs)(n.p,{children:["IdP-initiiertes SSO kann mehrere Sicherheitsl\xfccken einf\xfchren, derer sich Organisationen bewusst sein sollten. Da der Authentifizierungsprozess vom IdP ohne direkte Anfrage des Benutzers initiiert wird, kann er anf\xe4llig f\xfcr verschiedene Angriffe sein, einschlie\xdflich ",(0,r.jsx)(n.a,{href:"https://blog.logto.io/csrf",children:"Cross-Site Request Forgery"})," (CSRF)."]}),"\n",(0,r.jsx)(n.p,{children:"Dieses Fehlen einer benutzerinitiierten Authentifizierung kann zu unbefugtem Zugriff f\xfchren, wenn keine geeigneten Schutzma\xdfnahmen vorhanden sind. Dar\xfcber hinaus erh\xf6ht die Abh\xe4ngigkeit von einem einzigen Authentifizierungspunkt das Risiko eines Sicherheitsvorfalls, da das Kompromittieren des IdP alle verbundenen Anwendungen gef\xe4hrden k\xf6nnte."}),"\n",(0,r.jsx)(n.p,{children:"Daher wird dringend empfohlen, SP-initiiertes SSO zu verwenden, das einen sichereren und kontrollierteren Authentifizierungsablauf bietet und sicherstellt, dass Benutzer explizit Zugriff auf Dienste anfordern."}),"\n",(0,r.jsx)(n.h2,{id:"idp-initiiertes-sso-mit-logto-oidc-anwendungen-verbinden",children:"IdP-initiiertes SSO mit Logto OIDC-Anwendungen verbinden"}),"\n",(0,r.jsx)(n.p,{children:"Logto als OpenID Connect (OIDC)-Anbieter unterst\xfctzt kein IdP-initiiertes SSO. Du kannst jedoch Logto als SP konfigurieren, um IdP-initiiertes SSO mit deinem Unternehmens-IdP unter Verwendung von SAML zu unterst\xfctzen. Diese Konfiguration erm\xf6glicht es dir, die Authentifizierungsfunktionen von Logto zu nutzen, w\xe4hrend der IdP die Kontrolle \xfcber den Authentifizierungsablauf beh\xe4lt."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Standardm\xe4\xdfig ist diese Funktion in Logto nicht aktiviert. Wenn du IdP-initiiertes SSO f\xfcr deinen Mandanten aktiviert haben m\xf6chtest, kontaktiere bitte unser ",(0,r.jsx)(n.a,{href:"https://logto.io/contact?src=docs.sso",children:"Support-Team"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"voraussetzungen",children:"Voraussetzungen"}),"\n",(0,r.jsxs)(n.p,{children:["Bevor du IdP-initiiertes SSO konfigurierst, musst du zuerst einen SAML-Connector erstellen. Navigiere zur ",(0,r.jsx)(t,{to:"/enterprise-sso",children:"Konsole > Enterprise SSO"})," und folge der Schritt-f\xfcr-Schritt-Anleitung, um einen ",(0,r.jsx)(n.a,{href:"/integrations/saml-sso/",children:"SAML"})," Connector mit deinem IdP einzurichten."]}),"\n",(0,r.jsxs)(n.p,{children:["Sobald der SAML-Connector eingerichtet ist, kannst du die SSO-Anmeldemethode im Abschnitt ",(0,r.jsx)(t,{to:"/sign-in-experience",children:"Anmeldeerfahrung"})," aktivieren und den SP-initiierten SSO-Ablauf testen, um sicherzustellen, dass die Konfiguration korrekt ist. Stelle sicher, dass das SP-initiierte SSO wie erwartet funktioniert, bevor du mit dem IdP-initiierten SSO fortf\xe4hrst."]}),"\n",(0,r.jsx)(n.h3,{id:"idp-initiiertes-sso-aktivieren",children:"IdP-initiiertes SSO aktivieren"}),"\n",(0,r.jsxs)(n.p,{children:["Sobald die IdP-initiierte SSO-Funktion f\xfcr deinen Mandanten aktiviert ist, solltest du einen zus\xe4tzlichen Tab auf der Einstellungsseite deines SAML-Connectors sehen, der ",(0,r.jsx)(n.strong,{children:"IdP-initiiertes SSO"})," genannt wird. Aktiviere den ",(0,r.jsx)(n.strong,{children:"IdP-initiiertes SSO"}),"-Schalter, um die Funktion f\xfcr den Connector zu aktivieren."]}),"\n",(0,r.jsx)(n.h3,{id:"w\xe4hle-die-sp-anwendung-aus",children:"W\xe4hle die SP-Anwendung aus"}),"\n",(0,r.jsxs)(n.p,{children:["Im Gegensatz zu SP-initiiertem SSO, bei dem der Authentifizierungsablauf vom SP ausgeht, erfordert IdP-initiiertes SSO eine clientseitige SP-Anwendung, um Benutzer nach dem Authentifizierungsprozess weiterzuleiten. Du kannst die SP-Anwendung aus der Liste der registrierten Anwendungen im Dropdown-Men\xfc ",(0,r.jsx)(n.strong,{children:"Standardanwendung"})," ausw\xe4hlen."]}),"\n",(0,r.jsxs)(n.p,{children:["Nur ",(0,r.jsx)(n.strong,{children:"Traditionelle Web-App"})," und ",(0,r.jsx)(n.strong,{children:"Single Page App"})," Anwendungen werden f\xfcr IdP-initiiertes SSO unterst\xfctzt. Stelle sicher, dass du den entsprechenden Anwendungstyp basierend auf deinem Anwendungsfall ausw\xe4hlst."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Auf der Seite deines IdP lasse den ",(0,r.jsx)(n.code,{children:"RelayState"}),"-Parameter f\xfcr den IdP-initiierten SSO-Ablauf ",(0,r.jsx)(n.strong,{children:"LEER"}),", damit er korrekt funktioniert. Logto wird die Weiterleitung basierend auf der ausgew\xe4hlten Standard-SP-Anwendung handhaben."]})}),"\n",(0,r.jsx)(n.h2,{id:"idp-initiierten-authentifizierungsablauf-konfigurieren",children:"IdP-initiierten Authentifizierungsablauf konfigurieren"}),"\n",(0,r.jsx)(n.p,{children:"Um IdP-initiiertes SAML SSO mit OIDC zu verbinden, bietet Logto zwei Konfigurationsoptionen, um die Authentifizierungsanfrage zu bearbeiten."}),"\n",(0,r.jsx)(n.h3,{id:"option-a-weiterleitung-zur-standard-sp-anwendung-empfohlen",children:"Option A: Weiterleitung zur Standard-SP-Anwendung (Empfohlen)"}),"\n",(0,r.jsx)(n.p,{children:"Wenn der IdP den SSO-Ablauf initiiert und die SAML-Assertion an Logto sendet, wird eine IdP-initiierte SSO-Assertion-Session erstellt. Logto leitet den Benutzer zur Standard-SP-Anwendung weiter, um eine standardm\xe4\xdfige OIDC-Authentifizierungsanfrage auf der Clientseite zu initiieren."}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    actor User\n    participant IdP as IdP\n    participant Logto as Logto\n    participant Experience as Anmeldeerfahrung\n    participant SP as Client\n\n    User->>IdP: Einloggen und SP-Anwendung ausw\xe4hlen\n    IdP->>Logto: Weiterleitung zu Logto mit SAML-Assertion\n    Logto--\x3e>Logto: IdP-initiierte SSO-Assertion-Session speichern\n    Logto->>SP: Weiterleitung zur Standard-SP-Anwendung\n    SP->>Logto: OIDC-Authentifizierungsanfrage\n    Logto->>Experience: Benutzer zur Anmeldeerfahrung weiterleiten\n    Experience--\x3e>Logto: IdP-initiierte SSO-Assertion-Session validieren (stille Authentifizierung)\n    Logto->>SP: Authentifizieren und zur SP-Anwendung mit Autorisierungscode weiterleiten\n    SP->>Logto: OIDC-Token-Anfrage\n    Logto->>SP: Token-Antwort\n    SP->>User: Benutzer authentifizieren"}),"\n",(0,r.jsxs)(n.p,{children:["Um diese Option einzurichten, w\xe4hle die ",(0,r.jsx)(n.strong,{children:"Weiterleitung zum Client f\xfcr SP-initiierte Authentifizierung"}),"-Karte im ",(0,r.jsx)(n.strong,{children:"IdP-initiiertes SSO"}),"-Tab der SAML-Connector-Einstellungen."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"SP-initiiertes SSO-Ablauf",src:i(30582).A+"",width:"2336",height:"1070"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Gib eine ",(0,r.jsx)(n.strong,{children:"Client-Weiterleitungs-URL"})," an, um den Benutzer nach dem IdP-initiierten SSO-Ablauf zur Standard-SP-Anwendung weiterzuleiten. Logto wird den Benutzer zu dieser URL mit dem ",(0,r.jsx)(n.code,{children:"?ssoConnectorId={connectorId}"}),"-Abfrageparameter weiterleiten. Die Client-Anwendung sollte die Weiterleitung handhaben und die OIDC-Authentifizierungsanfrage initiieren. (Wir empfehlen, eine dedizierte Route oder Seite in deiner Client-Anwendung zu verwenden, um die IdP-initiierte SSO-Authentifizierungsanfrage zu bearbeiten.)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Bearbeite die OIDC-Authentifizierungsanfrage auf der Clientseite unter Verwendung des ",(0,r.jsx)(n.code,{children:"ssoConnectorId"}),"-Abfrageparameters, um den SAML-Connector zu identifizieren, der den IdP-initiierten SSO-Authentifizierungsablauf initiiert hat."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\xdcbermittle den ",(0,r.jsx)(n.a,{href:"/end-user-flows/authentication-parameters/direct-sign-in/",children:"direkten Anmelde"}),"-Authentifizierungsparameter in der Anmeldeanfrage an Logto, um den SSO-Authentifizierungsablauf abzuschlie\xdfen."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// React-Beispiel\nimport { Prompt, useLogto } from '@logto/react';\nimport { useEffect } from 'react';\nimport { useNavigate, useSearchParams } from 'react-router-dom';\n\nconst SsoDirectSignIn = () => {\n  const { signIn } = useLogto();\n  const [searchParams] = useSearchParams();\n\n  useEffect(() => {\n    const ssoConnectorId = searchParams.get('ssoConnectorId');\n    if (ssoConnectorId) {\n      void signIn({\n        redirectUri,\n        prompt: Prompt.Login,\n        directSignIn: {\n          method: 'sso',\n          target: ssoConnectorId,\n        },\n      });\n    }\n  }, [searchParams, signIn]);\n};\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"redirectUri"}),": Die ",(0,r.jsx)(n.code,{children:"redirect_uri"}),", um den Benutzer nach Abschluss des OIDC-Authentifizierungsablaufs weiterzuleiten."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"prompt=login"}),": Erzwingt, dass der Benutzer sich mit der IdP-initiierten SSO-Identit\xe4t anmeldet."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"directSignIn=sso:{connectorId}"}),": Gibt die direkte Anmeldemethode als ",(0,r.jsx)(n.code,{children:"sso"})," und die Ziel-SAML-Connector-ID an. Dieser Parameter wird den SSO-Authentifizierungsablauf direkt ausl\xf6sen, ohne die Anmeldeseite anzuzeigen. Der Benutzer wird automatisch authentifiziert, indem die gespeicherte IdP-initiierte SSO-Assertion-Session verwendet wird, wenn die Connector-ID \xfcbereinstimmt und die Session g\xfcltig ist."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Diese Methode stellt sicher, dass der Authentifizierungsablauf sicher ist und dem Standard-OIDC-Protokoll folgt, w\xe4hrend die Kontrolle des IdP \xfcber den Authentifizierungsprozess beibehalten wird. Die Client-App kann die IdP-initiierte SSO-Assertion-Session nutzen, um den Benutzer ohne zus\xe4tzliche Anmeldeschritte zu authentifizieren, w\xe4hrend der Authentifizierungsablauf sicher und kontrolliert bleibt. Die Client-App kann weiterhin die ",(0,r.jsx)(n.code,{children:"state"}),"- und ",(0,r.jsx)(n.code,{children:"PKCE"}),"-Parameter validieren, um sicherzustellen, dass die Authentifizierungsanfrage sicher ist."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Diese Methode ist sowohl f\xfcr ",(0,r.jsx)(n.strong,{children:"Traditionelle Web-App"})," als auch f\xfcr ",(0,r.jsx)(n.strong,{children:"Single Page App"})," Anwendungen verf\xfcgbar. Und sie wird f\xfcr alle Anwendungsf\xe4lle empfohlen."]})}),"\n",(0,r.jsx)(n.h3,{id:"option-b-benutzer-direkt-mit-idp-initiiertem-sso-authentifizieren",children:"Option B: Benutzer direkt mit IdP-initiiertem SSO authentifizieren"}),"\n",(0,r.jsx)(n.p,{children:"In bestimmten F\xe4llen kann es sein, dass der SP den IdP-initiierten SSO-Callback nicht bearbeiten und die OIDC-Authentifizierungsanfrage nicht initiieren kann. In diesem Fall bietet Logto eine alternative Option, um den Benutzer direkt mit der IdP-initiierten SSO-Assertion-Session zu authentifizieren."}),"\n",(0,r.jsxs)(n.p,{children:["Diese Option wird als weniger sicher angesehen und nicht empfohlen. Der Authentifizierungsablauf umgeht das Standard-OIDC-Protokoll. Da die Authentifizierungsanfrage vom IdP initiiert wird, kann die Client-App m\xf6glicherweise die Authentifizierungsanfrage nicht sicher validieren. Zum Beispiel kann die Client-App die ",(0,r.jsx)(n.code,{children:"state"}),"- und ",(0,r.jsx)(n.code,{children:"PKCE"}),"-Parameter nicht validieren, um sicherzustellen, dass die Authentifizierungsanfrage sicher ist."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Diese Methode ist nicht f\xfcr ",(0,r.jsx)(n.strong,{children:"Single Page App"})," Anwendungen verf\xfcgbar, da sie erfordert, dass die Client-App die Authentifizierungsanfrage sicher mit dem ",(0,r.jsx)(n.code,{children:"PKCE"}),"-Parameter bearbeitet. Wenn du IdP-initiiertes SSO f\xfcr eine SPA-Anwendung implementieren musst, verwende bitte die oben genannte Option."]})}),"\n",(0,r.jsx)(n.mermaid,{value:"  sequenceDiagram\n\n  actor User\n  participant IdP as IdP\n  participant Logto as Logto\n  participant Experience as Anmeldeerfahrung\n  participant SP as Client\n\n  User->>IdP: Einloggen und SP-Anwendung ausw\xe4hlen\n  IdP->>Logto: Weiterleitung zu Logto mit SAML-Assertion\n  Logto--\x3e>Logto: IdP-initiierte SSO-Assertion-Session speichern\n  Logto--\x3e>Logto: OIDC-Authentifizierungsanfrage initiieren\n  Logto->>Experience: Benutzer zur Anmeldeerfahrung weiterleiten\n  Experience--\x3e>Logto: IdP-initiierte SSO-Assertion-Session validieren (stille Authentifizierung)\n  Logto->>SP: Authentifizieren und zur SP-Anwendung mit Autorisierungscode weiterleiten (Keine `state`- oder `PKCE`-Validierung)\n  SP->>Logto: OIDC-Token-Anfrage\n  Logto->>SP: Token-Antwort\n  SP->>User: Benutzer authentifizieren"}),"\n",(0,r.jsxs)(n.p,{children:["Um diese Option zu konfigurieren, w\xe4hle die ",(0,r.jsx)(n.strong,{children:"Direkt anmelden mit IdP-initiiertem SSO"}),"-Option im ",(0,r.jsx)(n.strong,{children:"IdP-initiiertes SSO"}),"-Tab der SAML-Connector-Einstellungen."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"IdP-initiiertes SSO-Ablauf",src:i(61217).A+"",width:"2336",height:"1422"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["W\xe4hle die ",(0,r.jsx)(n.strong,{children:"Post-Anmelde-Weiterleitungs-URI"})," aus, um den Benutzer nach erfolgreicher Authentifizierung zur\xfcck zur Client-Anwendung weiterzuleiten. Diese URL wird als ",(0,r.jsx)(n.code,{children:"redirect_uri"})," in der OIDC-Authentifizierungsanfrage verwendet. Die URI muss eine der erlaubten Weiterleitungs-URIs sein, die in der Client-Anwendung registriert sind."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Es wird dringend empfohlen, eine dedizierte ",(0,r.jsx)(n.strong,{children:"Weiterleitungs-URI"})," f\xfcr IdP-initiiertes SSO zu verwenden. Da die Authentifizierungsanfrage unaufgefordert ist, sollte die Client-Anwendung die Antwort unabh\xe4ngig verwalten, getrennt vom Standard-SP-initiierten Authentifizierungsablauf."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Passe die Autorisierungsanfrageparameter bei Bedarf mit dem ",(0,r.jsx)(n.strong,{children:"Zus\xe4tzliche Authentifizierungsparameter"})," JSON-Editor an (dem Typ ",(0,r.jsx)(n.code,{children:"Map<string,string>"})," folgend)."]}),"\n",(0,r.jsxs)(n.p,{children:["Zum Beispiel fordert Logto standardm\xe4\xdfig nur die ",(0,r.jsx)(n.code,{children:"openid"}),"- und ",(0,r.jsx)(n.code,{children:"profile"}),"-Berechtigungen an. Du kannst zus\xe4tzliche Berechtigungen oder Parameter zur Authentifizierungsanfrage hinzuf\xfcgen."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "scope": "email offline_access"\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["zus\xe4tzliche ",(0,r.jsx)(n.code,{children:"email"}),"-Berechtigung hinzuf\xfcgen, um die E-Mail-Adresse des Benutzers anzufordern."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"offline_access"}),"-Berechtigung hinzuf\xfcgen, um das Auffrischungstoken anzufordern."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Wir empfehlen auch, einen benutzerdefinierten ",(0,r.jsx)(n.code,{children:"state"}),"-Parameter bereitzustellen, um die Authentifizierungsantwort sicher zu validieren."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "state": "custom-state-value"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Die Client-App sollte den ",(0,r.jsx)(n.code,{children:"state"}),"-Parameter in der Autorisierungscode-Antwort validieren, um sicherzustellen, dass die Authentifizierungsanfrage g\xfcltig ist."]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},56412:(e,n,i)=>{i.d(n,{A:()=>d});const t="availability_kRMk";var r=i(86070);const s=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`,d=e=>{let{cloud:n,oss:i}=e;return(0,r.jsxs)("div",{className:t,children:[(0,r.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${s(n)}`}),(0,r.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${s(i)}`})]})}},79500:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/idp-initiated-sso-portal-1b3deb662e1a548801c88fb3a3bbbc25.png"},30582:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/idp-initiated-sso-redirect-69783e23ee4e33ca7f1cf4e78045d8f9.png"},61217:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/idp-initiated-sso-sign-in-3abafcd93461508577bada1a50df912f.png"},15658:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var t=i(30758);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);