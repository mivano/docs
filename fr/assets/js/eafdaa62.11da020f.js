"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[85909],{86676:(e,n,i)=>{i.d(n,{Ay:()=>l,RM:()=>t});var r=i(86070),o=i(15658);const t=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Dans ce guide, nous supposons que vous avez des connaissances de base sur les Connecteurs Logto. Si ce n'est pas le cas, consultez le guide ",(0,r.jsx)(n.a,{href:"/connectors",children:"Configurer les connecteurs"})," pour commencer."]})})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},71179:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"integrations/social/naver/README","title":"Configurer la connexion sociale avec Naver","description":"Le connecteur Naver offre un moyen succinct pour votre application d\'utiliser le syst\xe8me d\'Authentification OAuth 2.0 de Naver.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrations/social/naver/README.mdx","sourceDirName":"integrations/social/naver","slug":"/integrations/naver","permalink":"/fr/integrations/naver","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrations/social/naver/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/naver","sidebar_label":"Naver","sidebar_custom_props":{"description":"Naver est le principal fournisseur de services Internet en Cor\xe9e du Sud."}},"sidebar":"integrationsSidebar","previous":{"title":"Kakao","permalink":"/fr/integrations/kakao"},"next":{"title":"OAuth 2.0 (Social)","permalink":"/fr/integrations/oauth2"}}');var o=i(86070),t=i(15658),s=i(86676);const l={slug:"/integrations/naver",sidebar_label:"Naver",sidebar_custom_props:{description:"Naver est le principal fournisseur de services Internet en Cor\xe9e du Sud."}},c="Configurer la connexion sociale avec Naver",d={},a=[...s.RM,{value:"Site D\xe9veloppeur Seulement Support Cor\xe9en Maintenant",id:"site-d\xe9veloppeur-seulement-support-cor\xe9en-maintenant",level:2},{value:"Pour la Production",id:"pour-la-production",level:2},{value:"Configurer un projet dans les Naver Developers",id:"configurer-un-projet-dans-les-naver-developers",level:2},{value:"Nom de l&#39;application (\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc774\ub984)",id:"nom-de-lapplication-\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158-\uc774\ub984",level:3},{value:"Utilisation de l&#39;API (\uc0ac\uc6a9 API)",id:"utilisation-de-lapi-\uc0ac\uc6a9-api",level:3},{value:"Environnement de service Open API de connexion (\ub85c\uadf8\uc778 \uc624\ud508 API \uc11c\ube44\uc2a4 \ud658\uacbd)",id:"environnement-de-service-open-api-de-connexion-\ub85c\uadf8\uc778-\uc624\ud508-api-\uc11c\ube44\uc2a4-\ud658\uacbd",level:3},{value:"PC Web (PC \uc6f9)",id:"pc-web-pc-\uc6f9",level:4},{value:"Mobile Web (Mobile \uc6f9)",id:"mobile-web-mobile-\uc6f9",level:4},{value:"Configurer Logto",id:"configurer-logto",level:2},{value:"Types de configuration",id:"types-de-configuration",level:3},{value:"clientId",id:"clientid",level:4},{value:"clientSecret",id:"clientsecret",level:4}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"configurer-la-connexion-sociale-avec-naver",children:"Configurer la connexion sociale avec Naver"})}),"\n",(0,o.jsx)(n.p,{children:"Le connecteur Naver offre un moyen succinct pour votre application d'utiliser le syst\xe8me d'Authentification OAuth 2.0 de Naver."}),"\n",(0,o.jsx)(s.Ay,{}),"\n",(0,o.jsx)(n.h2,{id:"site-d\xe9veloppeur-seulement-support-cor\xe9en-maintenant",children:"Site D\xe9veloppeur Seulement Support Cor\xe9en Maintenant"}),"\n",(0,o.jsxs)(n.p,{children:["Actuellement, le site ",(0,o.jsx)(n.code,{children:"Naver Developers"})," ne prend en charge que le cor\xe9en. Veuillez envisager d'utiliser un traducteur."]}),"\n",(0,o.jsx)(n.h2,{id:"pour-la-production",children:"Pour la Production"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Pour la production, vous devez obtenir une r\xe9vision de l'\xe9quipe Naver.\nSinon, seuls les utilisateurs enregistr\xe9s peuvent se connecter.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Vous pouvez ajouter un testeur depuis le menu ",(0,o.jsx)(n.code,{children:"\ub9f4\ubc84\uad00\ub9ac(Member Manage)"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Pour obtenir une r\xe9vision, veuillez v\xe9rifier ",(0,o.jsx)(n.code,{children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c \uc0c1\ud0dc(Application Devlopment Status)"}),"\ndepuis ",(0,o.jsx)(n.code,{children:"API \uc124\uc815(API Setting)"})," dans les param\xe8tres de votre projet d'application."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configurer-un-projet-dans-les-naver-developers",children:"Configurer un projet dans les Naver Developers"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Visitez le site ",(0,o.jsx)(n.a,{href:"https://developers.naver.com/main/",children:"Naver Developers"})," et connectez-vous avec votre compte Naver."]}),"\n",(0,o.jsxs)(n.li,{children:["Cliquez sur ",(0,o.jsx)(n.strong,{children:"Application -> \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \ub4f1\ub85d"})," dans le menu pour cr\xe9er un nouveau projet."]}),"\n",(0,o.jsx)(n.li,{children:"Suivez les instructions ci-dessous pour cr\xe9er une application."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"nom-de-lapplication-\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158-\uc774\ub984",children:"Nom de l'application (\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc774\ub984)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Tapez le nom de votre application sur ",(0,o.jsx)(n.code,{children:"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc774\ub984"})," (Ce nom est affich\xe9 lors de la connexion d'un utilisateur.)"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"utilisation-de-lapi-\uc0ac\uc6a9-api",children:"Utilisation de l'API (\uc0ac\uc6a9 API)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Choisissez ",(0,o.jsx)(n.code,{children:"\ub124\uc774\ubc84 \ub85c\uadf8\uc778(Naver Login)"})," pour ",(0,o.jsx)(n.code,{children:"\uc0ac\uc6a9 API(API Usage)"})]}),"\n",(0,o.jsxs)(n.li,{children:["Cochez ",(0,o.jsx)(n.code,{children:"\uc774\uba54\uc77c \uc8fc\uc18c(Email Address), \ubcc4\uba85(Nickname), \ud504\ub85c\ud544 \uc0ac\uc9c4(Profile Image)"})," comme ",(0,o.jsx)(n.code,{children:"\ud544\uc218(Necessary)"})," depuis ",(0,o.jsx)(n.code,{children:"\uad8c\ud55c(Role)"})," (Vous pouvez cocher ",(0,o.jsx)(n.code,{children:"\ucd94\uac00(Add)"})," comme optionnel pour ces options, mais vous ne pourrez pas obtenir les informations de l'utilisateur.)"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"environnement-de-service-open-api-de-connexion-\ub85c\uadf8\uc778-\uc624\ud508-api-\uc11c\ube44\uc2a4-\ud658\uacbd",children:"Environnement de service Open API de connexion (\ub85c\uadf8\uc778 \uc624\ud508 API \uc11c\ube44\uc2a4 \ud658\uacbd)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Pour ",(0,o.jsx)(n.code,{children:"\ub85c\uadf8\uc778 \uc624\ud508 API \uc11c\ube44\uc2a4 \ud658\uacbd(Sign in Open API Service Environment)"}),", ajoutez deux environnements ",(0,o.jsx)(n.code,{children:"PC\uc6f9(PC Web)"})," et ",(0,o.jsx)(n.code,{children:"\ubaa8\ubc14\uc77c\uc6f9(Mobile Web)"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"pc-web-pc-\uc6f9",children:"PC Web (PC \uc6f9)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Pour ",(0,o.jsx)(n.code,{children:"\uc11c\ube44\uc2a4 URL(Service URL)"}),", tapez ",(0,o.jsx)(n.code,{children:"http(s)://YOUR_URL"})," (ex. ",(0,o.jsx)(n.a,{href:"https://logto.io",children:"https://logto.io"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Pour ",(0,o.jsx)(n.code,{children:"\ub124\uc774\ubc84 \ub85c\uadf8\uc778(Naver Login) Callback URL"}),", tapez ",(0,o.jsx)(n.code,{children:"http(s)://YOUR_URL/callback/${connector_id}"})," (ex. ",(0,o.jsx)(n.a,{href:"https://logto.io/callback/$%7Bconnector_id%7D",children:"https://logto.io/callback/${connector_id}"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"mobile-web-mobile-\uc6f9",children:"Mobile Web (Mobile \uc6f9)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Pour ",(0,o.jsx)(n.code,{children:"\uc11c\ube44\uc2a4 URL(Service URL)"}),", tapez ",(0,o.jsx)(n.code,{children:"http(s)://YOUR_URL"})," (ex. ",(0,o.jsx)(n.a,{href:"https://logto.io",children:"https://logto.io"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Pour ",(0,o.jsx)(n.code,{children:"\ub124\uc774\ubc84 \ub85c\uadf8\uc778(Naver Login) Callback URL"}),", tapez ",(0,o.jsx)(n.code,{children:"http(s)://YOUR_URL/callback/${connector_id}"})," (ex. ",(0,o.jsx)(n.a,{href:"https://logto.io/callback/$%7Bconnector_id%7D",children:"https://logto.io/callback/${connector_id}"}),")"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,o.jsx)(n.strong,{children:"Attention"})]}),"\n",(0,o.jsxs)(n.p,{children:["Le ",(0,o.jsx)(n.code,{children:"connector_id"})," peut \xeatre trouv\xe9 sur la barre sup\xe9rieure de la page de d\xe9tails du connecteur dans la Logto Admin Console."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configurer-logto",children:"Configurer Logto"}),"\n",(0,o.jsx)(n.h3,{id:"types-de-configuration",children:"Types de configuration"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Nom"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"clientid",children:"clientId"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"clientId"})," est ",(0,o.jsx)(n.code,{children:"Client ID"})," de votre projet.\n(Vous pouvez le trouver dans ",(0,o.jsx)(n.code,{children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc815\ubcf4(Application Info)"})," de votre projet depuis les Naver developers.)"]}),"\n",(0,o.jsx)(n.h4,{id:"clientsecret",children:"clientSecret"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"clientSecret"})," est ",(0,o.jsx)(n.code,{children:"Client Secret"})," de votre projet.\n(Vous pouvez le trouver dans ",(0,o.jsx)(n.code,{children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc815\ubcf4(Application Info)"})," de votre projet depuis les Naver developers.)"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var r=i(30758);const o={},t=r.createContext(o);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);