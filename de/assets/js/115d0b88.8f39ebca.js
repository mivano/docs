"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3168],{28257:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"logto-oss/upgrading-oss-version","title":"Upgrade deiner OSS-Version","description":"Logto folgt semver, daher kannst du, wenn wir es nicht im Changelog erw\xe4hnen, Logto problemlos upgraden, ohne deinen Code oder das Datenbankschema \xe4ndern zu m\xfcssen. Du findest die Liste der Ver\xf6ffentlichungen in Github Release.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/logto-oss/upgrading-oss-version.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/upgrading-oss-version","permalink":"/de/logto-oss/upgrading-oss-version","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/de/docusaurus-plugin-content-docs/current/logto-oss/upgrading-oss-version.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_label":"Upgrade","sidebar_position":8},"sidebar":"docsSidebar","previous":{"title":"Schritt-f\xfcr-Schritt-Anleitung zur Entwicklung eines sozialen Connectors","permalink":"/de/logto-oss/develop-your-connector/step-by-step-guide"},"next":{"title":"Fehlerbehebung","permalink":"/de/logto-oss/troubleshooting-oss"}}');var t=r(86070),i=r(15658);const o={sidebar_label:"Upgrade",sidebar_position:8},d="Upgrade deiner OSS-Version",a={},u=[{value:"Schritt 1: Auf die neue Version aktualisieren",id:"schritt-1-auf-die-neue-version-aktualisieren",level:2},{value:"Schritt 2: Datenbank\xe4nderungen anwenden",id:"schritt-2-datenbank\xe4nderungen-anwenden",level:2},{value:"Schritt 3: Anwendung neu starten",id:"schritt-3-anwendung-neu-starten",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"upgrade-deiner-oss-version",children:"Upgrade deiner OSS-Version"})}),"\n",(0,t.jsxs)(n.p,{children:["Logto folgt ",(0,t.jsx)(n.a,{href:"https://semver.org/",children:"semver"}),", daher kannst du, wenn wir es nicht im Changelog erw\xe4hnen, Logto problemlos upgraden, ohne deinen Code oder das Datenbankschema \xe4ndern zu m\xfcssen. Du findest die Liste der Ver\xf6ffentlichungen in ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/releases",children:"Github Release"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"schritt-1-auf-die-neue-version-aktualisieren",children:"Schritt 1: Auf die neue Version aktualisieren"}),"\n",(0,t.jsx)(n.p,{children:"Um zu aktualisieren, folge der entsprechenden Methode basierend auf deiner Bereitstellung:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Docker-Image"}),": Ziehe das neueste Image."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NPM-Paket"}),": Aktualisiere auf die neueste Version."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tar-Datei"}),": Lade die neueste ",(0,t.jsx)(n.code,{children:".tar"}),"-Datei von der Release-Seite herunter."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"schritt-2-datenbank\xe4nderungen-anwenden",children:"Schritt 2: Datenbank\xe4nderungen anwenden"}),"\n",(0,t.jsxs)(n.p,{children:["Verwende die ",(0,t.jsx)(n.a,{href:"/logto-oss/using-cli/database-alteration/",children:"Logto CLI"}),", um die notwendigen Datenbank\xe4nderungen durchzuf\xfchren. F\xfcr ein nahtloses Upgrade ist es nicht erforderlich, die Produktionsanwendung zu stoppen. Logto stellt sicher, dass das neue Datenbankschema mit dem vorhandenen Code kompatibel bleibt, sodass die Produktion reibungslos ohne Unterbrechungen weiterl\xe4uft."]}),"\n",(0,t.jsx)(n.h2,{id:"schritt-3-anwendung-neu-starten",children:"Schritt 3: Anwendung neu starten"}),"\n",(0,t.jsx)(n.p,{children:"Nach dem Aktualisieren des Codes und Anwenden der Datenbank\xe4nderungen starte deine Anwendung neu, um die \xc4nderungen zu \xfcbernehmen. Stelle sicher, dass die neue Version reibungslos l\xe4uft und alle Komponenten wie erwartet funktionieren."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Tipp"}),": Um ein Upgrade ohne Ausfallzeiten zu erreichen, erw\xe4ge die Verwendung einer \u201eSwap\u201c-Strategie, bei der du den Datenverkehr schrittweise von der alten Instanz zur neuen verschiebst. Auf diese Weise erleben die Benutzer keine Unterbrechung w\xe4hrend des Upgrades."]}),"\n",(0,t.jsx)(n.p,{children:"Dein Upgrade ist nun abgeschlossen!"})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},15658:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var s=r(30758);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);