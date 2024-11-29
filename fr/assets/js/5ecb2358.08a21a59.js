"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[72924],{72098:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"developers/custom-token-claims/create-script","title":"Cr\xe9er un script de revendications de jeton personnalis\xe9","description":"Pour ajouter des revendications personnalis\xe9es au jeton d\u2019acc\xe8s (Access token), vous devez fournir un script qui renvoie un objet contenant ces revendications. Le script doit \xeatre \xe9crit comme une fonction JavaScript qui renvoie un objet avec les revendications personnalis\xe9es.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/custom-token-claims/create-script.mdx","sourceDirName":"developers/custom-token-claims","slug":"/developers/custom-token-claims/create-script","permalink":"/fr/developers/custom-token-claims/create-script","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/developers/custom-token-claims/create-script.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"create-script","title":"Cr\xe9er un script de revendications de jeton personnalis\xe9","sidebar_label":"Cr\xe9er un script de revendications de jeton personnalis\xe9","sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Cas d\'utilisation courants","permalink":"/fr/developers/custom-token-claims/common-use-cases"},"next":{"title":"Usurpation d\u2019identit\xe9 utilisateur","permalink":"/fr/developers/user-impersonation"}}');var i=s(86070),r=s(15658);const o={id:"create-script",title:"Cr\xe9er un script de revendications de jeton personnalis\xe9",sidebar_label:"Cr\xe9er un script de revendications de jeton personnalis\xe9",sidebar_position:3},d="Cr\xe9er un script de revendications de jeton personnalis\xe9",c={},l=[{value:"Impl\xe9menter la fonction <code>getCustomJwtClaims()</code>",id:"impl\xe9menter-la-fonction-getcustomjwtclaims",level:2},{value:"\xc9tape 1 : Modifier le script",id:"\xe9tape-1--modifier-le-script",level:2},{value:"\xc9tape 2 : Param\xe8tres d&#39;entr\xe9e",id:"\xe9tape-2--param\xe8tres-dentr\xe9e",level:2},{value:"token",id:"token",level:3},{value:"context (Disponible uniquement pour le jeton d\u2019acc\xe8s utilisateur)",id:"context-disponible-uniquement-pour-le-jeton-dacc\xe8s-utilisateur",level:3},{value:"environmentVariables",id:"environmentvariables",level:3},{value:"api",id:"api",level:3},{value:"\xc9tape 3 : R\xe9cup\xe9rer des donn\xe9es externes",id:"\xe9tape-3--r\xe9cup\xe9rer-des-donn\xe9es-externes",level:2},{value:"\xc9tape 4 : Tester le script",id:"\xe9tape-4--tester-le-script",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{CloudLink:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"cr\xe9er-un-script-de-revendications-de-jeton-personnalis\xe9",children:"Cr\xe9er un script de revendications de jeton personnalis\xe9"})}),"\n",(0,i.jsxs)(n.p,{children:["Pour ajouter des revendications personnalis\xe9es au jeton d\u2019acc\xe8s (Access token), vous devez fournir un script qui renvoie un objet contenant ces revendications. Le script doit \xeatre \xe9crit comme une fonction ",(0,i.jsx)(n.code,{children:"JavaScript"})," qui renvoie un objet avec les revendications personnalis\xe9es."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Acc\xe9dez \xe0 ",(0,i.jsx)(t,{to:"/customize-jwt",children:"Console > Custom JWT"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Il existe deux types diff\xe9rents de jetons d\u2019acc\xe8s pour lesquels vous pouvez personnaliser les revendications du jeton d\u2019acc\xe8s :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Jeton d\u2019acc\xe8s utilisateur"})," : Le jeton d\u2019acc\xe8s \xe9mis pour les utilisateurs finaux. Par exemple, pour les applications Web ou mobiles."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Jeton d\u2019acc\xe8s Machine \xe0 Machine"})," : Le jeton d\u2019acc\xe8s \xe9mis pour les services ou applications. Par exemple, pour les applications machine \xe0 machine."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Diff\xe9rents types de jetons d\u2019acc\xe8s peuvent avoir diff\xe9rents contextes de charge utile de jeton. Vous pouvez personnaliser les revendications de jeton pour chaque type de jeton d\u2019acc\xe8s s\xe9par\xe9ment."}),"\n",(0,i.jsxs)(n.p,{children:["Choisissez n'importe quel type de jeton d\u2019acc\xe8s pour lequel vous souhaitez personnaliser les revendications de jeton, et cliquez sur le bouton ",(0,i.jsx)(n.strong,{children:"Ajouter des revendications personnalis\xe9es"})," pour cr\xe9er un nouveau script."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"La fonctionnalit\xe9 de revendications de jeton personnalis\xe9 est uniquement disponible pour :"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Utilisateurs OSS"}),"\n",(0,i.jsx)(n.li,{children:"Locataires Dev"}),"\n",(0,i.jsx)(n.li,{children:"Locataires payants (y compris les locataires Pro et Enterprise)"}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"impl\xe9menter-la-fonction-getcustomjwtclaims",children:["Impl\xe9menter la fonction ",(0,i.jsx)(n.code,{children:"getCustomJwtClaims()"})]}),"\n",(0,i.jsxs)(n.p,{children:["Dans la page de d\xe9tails ",(0,i.jsx)(n.strong,{children:"Custom JWT"}),", vous pouvez trouver l'\xe9diteur de script pour \xe9crire votre script de revendications de jeton personnalis\xe9. Le script doit \xeatre une fonction ",(0,i.jsx)(n.code,{children:"JavaScript"})," qui renvoie un objet de revendications personnalis\xe9es."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Page de d\xe9tails des revendications de jeton personnalis\xe9",src:s(63240).A+"",width:"3146",height:"1818"})}),"\n",(0,i.jsx)(n.h2,{id:"\xe9tape-1--modifier-le-script",children:"\xc9tape 1 : Modifier le script"}),"\n",(0,i.jsxs)(n.p,{children:["Utilisez l'\xe9diteur de code sur le c\xf4t\xe9 gauche pour modifier le script. Une valeur de retour d'objet vide par d\xe9faut ",(0,i.jsx)(n.code,{children:"getCustomJwtClaims"})," est fournie pour que vous puissiez commencer. Vous pouvez modifier la fonction pour renvoyer un objet de vos propres revendications personnalis\xe9es."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const getCustomJwtClaims = async ({ token, context, environmentVariables }) => {\n  return {};\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Cet \xe9diteur utilise le serveur de langage JavaScript pour fournir une coloration syntaxique de base, une compl\xe9tion de code et une v\xe9rification des erreurs. Le param\xe8tre d'entr\xe9e est bien typ\xe9 et document\xe9 dans le style jsDoc. Vous pouvez utiliser l'IntelliSense de l'\xe9diteur pour acc\xe9der correctement aux propri\xe9t\xe9s de l'objet d'entr\xe9e. Vous pouvez trouver les d\xe9finitions d\xe9taill\xe9es des param\xe8tres sur le c\xf4t\xe9 droit de la page."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Cette fonction sera export\xe9e en tant que module. Assurez-vous de conserver le nom de la fonction comme ",(0,i.jsx)(n.code,{children:"getCustomJwtClaims"})," afin que le module puisse exporter la fonction correctement."]})}),"\n",(0,i.jsx)(n.h2,{id:"\xe9tape-2--param\xe8tres-dentr\xe9e",children:"\xc9tape 2 : Param\xe8tres d'entr\xe9e"}),"\n",(0,i.jsxs)(n.p,{children:["La fonction ",(0,i.jsx)(n.code,{children:"getCustomJwtClaims"})," prend un objet comme param\xe8tre d'entr\xe9e. L'objet d'entr\xe9e contient les propri\xe9t\xe9s suivantes :"]}),"\n",(0,i.jsx)(n.h3,{id:"token",children:"token"}),"\n",(0,i.jsx)(n.p,{children:"L'objet de charge utile du jeton. Cet objet contient les revendications de jeton originales et les m\xe9tadonn\xe9es auxquelles vous pouvez avoir besoin d'acc\xe9der dans le script."}),"\n",(0,i.jsx)(n.p,{children:"Vous pouvez trouver la d\xe9finition de type d\xe9taill\xe9e de l'objet de charge utile du jeton et de l'objet de donn\xe9es utilisateur sur le c\xf4t\xe9 droit de la page. L'IntelliSense de l'\xe9diteur vous aidera \xe9galement \xe0 acc\xe9der correctement \xe0 ces propri\xe9t\xe9s de l'objet d'entr\xe9e."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Objet de donn\xe9es de jeton d\u2019acc\xe8s utilisateur","\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jti"})}),(0,i.jsx)(n.td,{children:"L'identifiant unique du JWT"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"aud"})}),(0,i.jsx)(n.td,{children:"L'audience du jeton"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"scope"})}),(0,i.jsx)(n.td,{children:"Les port\xe9es du jeton"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"clientId"})}),(0,i.jsx)(n.td,{children:"L'identifiant du client du jeton"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"accountId"})}),(0,i.jsx)(n.td,{children:"L'identifiant de l'utilisateur du jeton"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"expiresWithSession"})}),(0,i.jsx)(n.td,{children:"Si le jeton expirera avec la session"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"grantId"})}),(0,i.jsx)(n.td,{children:"L'identifiant de la requ\xeate d\u2019authentification actuelle du jeton"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"gty"})}),(0,i.jsx)(n.td,{children:"Le type de requ\xeate du jeton"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"kind"})}),(0,i.jsx)(n.td,{children:"Le type de jeton"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"AccessToken"})})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Objet de donn\xe9es de jeton d\u2019acc\xe8s machine \xe0 machine","\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"jti"})}),(0,i.jsx)(n.td,{children:"L'identifiant unique du JWT"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"aud"})}),(0,i.jsx)(n.td,{children:"L'audience du jeton"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"scope"})}),(0,i.jsx)(n.td,{children:"Les port\xe9es du jeton"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"clientId"})}),(0,i.jsx)(n.td,{children:"L'identifiant du client du jeton"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"kind"})}),(0,i.jsx)(n.td,{children:"Le type de jeton"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ClientCredentials"})})]})]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"context-disponible-uniquement-pour-le-jeton-dacc\xe8s-utilisateur",children:"context (Disponible uniquement pour le jeton d\u2019acc\xe8s utilisateur)"}),"\n",(0,i.jsx)(n.p,{children:"L'objet de contexte contient les donn\xe9es utilisateur et les donn\xe9es de requ\xeate pertinentes pour le processus d\u2019Autorisation actuel."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Objet de donn\xe9es utilisateur"}),"\nPour le jeton d\u2019acc\xe8s utilisateur, Logto fournit un contexte de donn\xe9es utilisateur suppl\xe9mentaire auquel vous pouvez acc\xe9der. L'objet de donn\xe9es utilisateur contient toutes les donn\xe9es de profil utilisateur et les donn\xe9es d'appartenance \xe0 l\u2019Organisation dont vous pourriez avoir besoin pour configurer les revendications personnalis\xe9es. Veuillez consulter ",(0,i.jsx)(n.a,{href:"/user-management/user-data",children:"Utilisateurs"})," et ",(0,i.jsx)(n.a,{href:"/organizations/organization-data",children:"Organisations"})," pour plus de d\xe9tails."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Objet de donn\xe9es de requ\xeate"}),"\nPour le jeton d\u2019acc\xe8s utilisateur accord\xe9 par \xe9change de jeton d\u2019usurpation d\u2019identit\xe9, Logto fournit un contexte de donn\xe9es de requ\xeate suppl\xe9mentaire auquel vous pouvez acc\xe9der. L'objet de donn\xe9es de requ\xeate contient le contexte personnalis\xe9 du jeton de sujet. Veuillez consulter ",(0,i.jsx)(n.a,{href:"/developers/user-impersonation",children:"Usurpation d\u2019identit\xe9"})," pour plus de d\xe9tails."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"environmentvariables",children:"environmentVariables"}),"\n",(0,i.jsxs)(n.p,{children:["Utilisez la section ",(0,i.jsx)(n.strong,{children:"D\xe9finir les variables d'environnement"})," sur la droite pour configurer les variables d'environnement pour votre script. Vous pouvez utiliser ces variables pour stocker des informations sensibles ou des donn\xe9es de configuration que vous ne souhaitez pas coder en dur dans le script. Par exemple, des cl\xe9s API, des secrets ou des URLs."]}),"\n",(0,i.jsxs)(n.p,{children:["Toutes les variables d'environnement que vous d\xe9finissez ici seront disponibles dans le script. Utilisez l'objet ",(0,i.jsx)(n.code,{children:"environmentVariables"})," dans le param\xe8tre d'entr\xe9e pour acc\xe9der \xe0 ces variables."]}),"\n",(0,i.jsx)(n.h3,{id:"api",children:"api"}),"\n",(0,i.jsxs)(n.p,{children:["L'objet ",(0,i.jsx)(n.code,{children:"api"})," fournit un ensemble de fonctions utilitaires que vous pouvez utiliser dans votre script pour un contr\xf4le d'acc\xe8s suppl\xe9mentaire sur le processus d'\xe9mission de jeton. L'objet ",(0,i.jsx)(n.code,{children:"api"})," contient les fonctions suivantes :"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"api.denyAccess(message?: string): void\n"})}),"\n",(0,i.jsxs)(n.p,{children:["La fonction ",(0,i.jsx)(n.code,{children:"api.denyAccess()"})," vous permet de refuser le processus d'\xe9mission de jeton avec un message personnalis\xe9. Vous pouvez utiliser cette fonction pour appliquer une validation d'acc\xe8s suppl\xe9mentaire sur le processus d'\xe9mission de jeton."]}),"\n",(0,i.jsx)(n.h2,{id:"\xe9tape-3--r\xe9cup\xe9rer-des-donn\xe9es-externes",children:"\xc9tape 3 : R\xe9cup\xe9rer des donn\xe9es externes"}),"\n",(0,i.jsxs)(n.p,{children:["Vous pouvez utiliser la fonction int\xe9gr\xe9e ",(0,i.jsx)(n.code,{children:"fetch"})," de node pour r\xe9cup\xe9rer des donn\xe9es externes dans votre script. La fonction ",(0,i.jsx)(n.code,{children:"fetch"})," est une fonction bas\xe9e sur des promesses qui vous permet de faire des requ\xeates HTTP vers des APIs externes."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const getCustomJwtClaims = async ({ environmentVariables }) => {\n  const response = await fetch('https://api.example.com/data', {\n    headers: {\n      Authorization: `Bearer ${environmentVariables.API_KEY}`,\n    },\n  });\n\n  const data = await response.json();\n\n  return {\n    data,\n  };\n};\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"Soyez conscient que toute r\xe9cup\xe9ration de donn\xe9es externes peut introduire une latence dans le processus d'\xe9mission de jeton. Assurez-vous que l'API externe est fiable et suffisamment rapide pour r\xe9pondre \xe0 vos exigences."}),(0,i.jsx)(n.p,{children:"De plus :"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"G\xe9rez correctement les erreurs et les d\xe9lais d'attente dans votre script pour \xe9viter que le processus d'\xe9mission de jeton ne soit bloqu\xe9."}),"\n",(0,i.jsx)(n.li,{children:"Utilisez des en-t\xeates d'autorisation appropri\xe9s pour prot\xe9ger votre API externe contre les acc\xe8s non autoris\xe9s."}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"\xe9tape-4--tester-le-script",children:"\xc9tape 4 : Tester le script"}),"\n",(0,i.jsxs)(n.p,{children:["Assurez-vous de tester votre script avant de l'enregistrer. Cliquez sur l'onglet ",(0,i.jsx)(n.strong,{children:"Contexte de test"})," sur le c\xf4t\xe9 droit de la page pour modifier la charge utile de jeton simul\xe9e et le contexte de donn\xe9es utilisateur pour les tests."]}),"\n",(0,i.jsxs)(n.p,{children:["Cliquez sur ",(0,i.jsx)(n.strong,{children:"Ex\xe9cuter le test"})," dans le coin sup\xe9rieur droit de l'\xe9diteur pour ex\xe9cuter le script avec les donn\xe9es simul\xe9es. La sortie du script sera affich\xe9e dans le tiroir ",(0,i.jsx)(n.strong,{children:"R\xe9sultat du test"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Tester le script JWT personnalis\xe9",src:s(45639).A+"",width:"2682",height:"1322"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Le r\xe9sultat du test est la sortie de la fonction ",(0,i.jsx)(n.code,{children:"getCustomJwtClaims"}),' avec les donn\xe9es simul\xe9es que vous avez d\xe9finies ("revendications de jeton suppl\xe9mentaires" obtenues apr\xe8s avoir termin\xe9 l\'\xe9tape 3 dans ',(0,i.jsx)(n.a,{href:"/developers/custom-token-claims/#how-do-custom-token-claims-work",children:"le diagramme de s\xe9quence"}),"). La charge utile r\xe9elle du jeton et le contexte de donn\xe9es utilisateur seront diff\xe9rents lorsque le script sera ex\xe9cut\xe9 dans le processus d'\xe9mission de jeton."]})}),"\n",(0,i.jsxs)(n.p,{children:["Cliquez sur le bouton ",(0,i.jsx)(n.strong,{children:"Cr\xe9er"})," pour enregistrer le script. Le script de revendications de jeton personnalis\xe9 sera enregistr\xe9 et appliqu\xe9 au processus d'\xe9mission de jeton d\u2019acc\xe8s."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},63240:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/custom-jwt-detail-page-9dc0f24eaf27c30b0b8b505111355be4.png"},45639:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/test-custom-jwt-script-312444d1b749a7a2be2b94f501dda3aa.png"},15658:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var t=s(30758);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);