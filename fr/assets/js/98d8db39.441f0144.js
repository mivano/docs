"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[8906],{86676:(e,n,i)=>{i.d(n,{Ay:()=>d,RM:()=>r});var t=i(86070),s=i(15658);const r=[];function o(e){const n={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Dans ce guide, nous supposons que vous avez des connaissances de base sur les Connecteurs Logto. Si ce n'est pas le cas, consultez le guide ",(0,t.jsx)(n.a,{href:"/connectors",children:"Configurer les connecteurs"})," pour commencer."]})})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},63830:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"integrations/social/oidc/README","title":"Configurer la connexion sociale avec OpenID Connect (OIDC)","description":"Le connecteur officiel Logto pour le protocole OpenID Connect (OIDC).","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrations/social/oidc/README.mdx","sourceDirName":"integrations/social/oidc","slug":"/integrations/oidc","permalink":"/fr/integrations/oidc","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrations/social/oidc/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/oidc","sidebar_label":"OIDC (Social)","sidebar_custom_props":{"description":"OpenID Connect 1.0 est une couche d\'identit\xe9 simple au-dessus du protocole OAuth 2.0."}},"sidebar":"integrationsSidebar","previous":{"title":"OAuth 2.0 (Social)","permalink":"/fr/integrations/oauth2"},"next":{"title":"WeChat (Native)","permalink":"/fr/integrations/wechat-native"}}');var s=i(86070),r=i(15658),o=i(86676);const d={slug:"/integrations/oidc",sidebar_label:"OIDC (Social)",sidebar_custom_props:{description:"OpenID Connect 1.0 est une couche d'identit\xe9 simple au-dessus du protocole OAuth 2.0."}},c="Configurer la connexion sociale avec OpenID Connect (OIDC)",l={},u=[...o.RM,{value:"Commencer",id:"commencer",level:2},{value:"Cr\xe9ez votre application OIDC",id:"cr\xe9ez-votre-application-oidc",level:2},{value:"Configurez votre connecteur",id:"configurez-votre-connecteur",level:2},{value:"Types de configuration",id:"types-de-configuration",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configurer-la-connexion-sociale-avec-openid-connect-oidc",children:"Configurer la connexion sociale avec OpenID Connect (OIDC)"})}),"\n",(0,s.jsx)(n.p,{children:"Le connecteur officiel Logto pour le protocole OpenID Connect (OIDC)."}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(n.h2,{id:"commencer",children:"Commencer"}),"\n",(0,s.jsx)(n.p,{children:"Le connecteur OIDC permet la connexion de Logto \xe0 un fournisseur d'identit\xe9 sociale arbitraire qui prend en charge le protocole OIDC."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,s.jsx)(n.strong,{children:"Remarque"})]}),"\n",(0,s.jsx)(n.p,{children:"Le connecteur OIDC est un type sp\xe9cial de connecteur dans Logto, vous pouvez ajouter quelques connecteurs bas\xe9s sur OIDC."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"cr\xe9ez-votre-application-oidc",children:"Cr\xe9ez votre application OIDC"}),"\n",(0,s.jsx)(n.p,{children:"Lorsque vous ouvrez cette page, nous croyons que vous savez d\xe9j\xe0 \xe0 quel fournisseur d'identit\xe9 sociale vous souhaitez vous connecter. La premi\xe8re chose \xe0 faire est de confirmer que le fournisseur d'identit\xe9 prend en charge le protocole OIDC, ce qui est une condition pr\xe9alable pour configurer un connecteur valide. Ensuite, suivez les instructions du fournisseur d'identit\xe9 pour enregistrer et cr\xe9er l'application pertinente pour l'Autorisation OIDC."}),"\n",(0,s.jsx)(n.h2,{id:"configurez-votre-connecteur",children:"Configurez votre connecteur"}),"\n",(0,s.jsx)(n.p,{children:'Nous ne prenons en charge que le type de subvention "Authorization Code" pour des raisons de s\xe9curit\xe9 et il peut parfaitement s\'adapter au sc\xe9nario de Logto.'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"clientId"})," et ",(0,s.jsx)(n.code,{children:"clientSecret"})," peuvent \xeatre trouv\xe9s sur la page des d\xe9tails de vos applications OIDC."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"clientId"})," : L'ID client est un identifiant unique qui identifie l'application cliente lors de l'enregistrement aupr\xe8s du serveur d'autorisation. Cet ID est utilis\xe9 par le serveur d'autorisation pour v\xe9rifier l'identit\xe9 de l'application cliente et pour associer tous les jetons d\u2019acc\xe8s autoris\xe9s \xe0 cette application cliente sp\xe9cifique."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"clientSecret"})," : Le secret client est une cl\xe9 confidentielle qui est d\xe9livr\xe9e \xe0 l'application cliente par le serveur d'autorisation lors de l'enregistrement. L'application cliente utilise cette cl\xe9 secr\xe8te pour s'authentifier aupr\xe8s du serveur d'autorisation lors de la demande de jetons d\u2019acc\xe8s. Le secret client est consid\xe9r\xe9 comme une information confidentielle et doit \xeatre gard\xe9 en s\xe9curit\xe9 \xe0 tout moment."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"tokenEndpointAuthMethod"})," : La m\xe9thode d'authentification du point de terminaison de jeton est utilis\xe9e par l'application cliente pour s'authentifier aupr\xe8s du serveur d'autorisation lors de la demande de jetons d\u2019acc\xe8s. Pour d\xe9couvrir les m\xe9thodes prises en charge, consultez le champ ",(0,s.jsx)(n.code,{children:"token_endpoint_auth_methods_supported"})," disponible au point de terminaison de d\xe9couverte OpenID Connect du fournisseur de service OAuth 2.0, ou r\xe9f\xe9rez-vous \xe0 la documentation pertinente fournie par le fournisseur de service OAuth 2.0."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"clientSecretJwtSigningAlgorithm (Optionnel)"})," : Requis uniquement lorsque ",(0,s.jsx)(n.code,{children:"tokenEndpointAuthMethod"})," est ",(0,s.jsx)(n.code,{children:"client_secret_jwt"}),". L'algorithme de signature JWT du secret client est utilis\xe9 par l'application cliente pour signer le JWT qui est envoy\xe9 au serveur d'autorisation lors de la requ\xeate de jeton."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"scope"})," : Le param\xe8tre de port\xe9e est utilis\xe9 pour sp\xe9cifier l'ensemble des ressources et des permissions auxquelles l'application cliente demande l'acc\xe8s. Le param\xe8tre de port\xe9e est g\xe9n\xe9ralement d\xe9fini comme une liste de valeurs s\xe9par\xe9es par des espaces qui repr\xe9sentent des permissions sp\xe9cifiques. Par exemple, une valeur de port\xe9e de \"read write\" pourrait indiquer que l'application cliente demande un acc\xe8s en lecture et \xe9criture aux donn\xe9es d'un utilisateur."]}),"\n",(0,s.jsxs)(n.p,{children:["Vous \xeates cens\xe9 trouver ",(0,s.jsx)(n.code,{children:"authorizationEndpoint"}),", ",(0,s.jsx)(n.code,{children:"tokenEndpoint"}),", ",(0,s.jsx)(n.code,{children:"jwksUri"})," et ",(0,s.jsx)(n.code,{children:"issuer"})," comme informations de configuration du fournisseur OpenID. Ils devraient \xeatre disponibles dans la documentation du fournisseur social."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"authenticationEndpoint"})," : Ce point de terminaison est utilis\xe9 pour initier le processus d'authentification. Le processus d'authentification implique g\xe9n\xe9ralement que l'utilisateur se connecte et accorde l'autorisation \xe0 l'application cliente d'acc\xe9der \xe0 ses ressources."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"tokenEndpoint"})," : Ce point de terminaison est utilis\xe9 par l'application cliente pour obtenir un jeton d\u2019identifiant qui peut \xeatre utilis\xe9 pour acc\xe9der aux ressources demand\xe9es. L'application cliente envoie g\xe9n\xe9ralement une requ\xeate au point de terminaison de jeton avec un type de subvention et un code d'autorisation pour recevoir un jeton d\u2019identifiant."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"jwksUri"})," : Il s'agit de l'URL du point de terminaison o\xf9 l'ensemble de cl\xe9s Web JSON (JWKS) du fournisseur d'identit\xe9 sociale (IdP en abr\xe9g\xe9) peut \xeatre obtenu. Le JWKS est un ensemble de cl\xe9s cryptographiques que l'IdP utilise pour signer et v\xe9rifier les JSON Web Tokens (JWT) qui sont \xe9mis lors du processus d'authentification. Le ",(0,s.jsx)(n.code,{children:"jwksUri"})," est utilis\xe9 par la partie de confiance (RP) pour obtenir les cl\xe9s publiques utilis\xe9es par l'IdP pour signer les JWT, afin que la RP puisse v\xe9rifier l'authenticit\xe9 et l'int\xe9grit\xe9 des JWT re\xe7us de l'IdP."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"issuer"})," : Il s'agit de l'identifiant unique de l'IdP qui est utilis\xe9 par la RP pour v\xe9rifier les JWT re\xe7us de l'IdP. Il est inclus dans les JWT en tant que revendication ",(0,s.jsx)(n.code,{children:"iss"})," (le jeton d\u2019identifiant est toujours un JWT). La valeur de l'\xe9metteur doit correspondre \xe0 l'URL du serveur d'autorisation de l'IdP, et elle doit \xeatre une URI que la RP consid\xe8re comme fiable. Lorsque la RP re\xe7oit un JWT, elle v\xe9rifie la revendication ",(0,s.jsx)(n.code,{children:"iss"})," pour s'assurer qu'il a \xe9t\xe9 \xe9mis par un IdP de confiance, et que le JWT est destin\xe9 \xe0 \xeatre utilis\xe9 avec la RP."]}),"\n",(0,s.jsxs)(n.p,{children:["Ensemble, ",(0,s.jsx)(n.code,{children:"jwksUri"})," et ",(0,s.jsx)(n.code,{children:"issuer"})," fournissent un m\xe9canisme s\xe9curis\xe9 pour la RP pour v\xe9rifier l'identit\xe9 de l'utilisateur final lors du processus d'authentification. En utilisant les cl\xe9s publiques obtenues \xe0 partir du ",(0,s.jsx)(n.code,{children:"jwksUri"}),", la RP peut v\xe9rifier l'authenticit\xe9 et l'int\xe9grit\xe9 des JWT \xe9mis par l'IdP. La valeur de l'\xe9metteur garantit que la RP n'accepte que les JWT qui ont \xe9t\xe9 \xe9mis par un IdP de confiance, et que les JWT sont destin\xe9s \xe0 \xeatre utilis\xe9s avec la RP."]}),"\n",(0,s.jsxs)(n.p,{children:["\xc9tant donn\xe9 qu'une requ\xeate d\u2019authentification est toujours requise, un ",(0,s.jsx)(n.code,{children:"authRequestOptionalConfig"})," est fourni pour regrouper toutes les configurations optionnelles, vous pouvez trouver des d\xe9tails sur ",(0,s.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"OIDC Authentication Request"}),". Vous pouvez \xe9galement constater que ",(0,s.jsx)(n.code,{children:"nonce"})," est manquant dans cette configuration. \xc9tant donn\xe9 que ",(0,s.jsx)(n.code,{children:"nonce"})," doit \xeatre identique pour chaque requ\xeate, nous avons plac\xe9 la g\xe9n\xe9ration de ",(0,s.jsx)(n.code,{children:"nonce"})," dans l'impl\xe9mentation du code. Alors ne vous inqui\xe9tez pas ! Le ",(0,s.jsx)(n.code,{children:"jwksUri"})," et l'",(0,s.jsx)(n.code,{children:"issuer"})," mentionn\xe9s pr\xe9c\xe9demment sont \xe9galement inclus dans ",(0,s.jsx)(n.code,{children:"idTokenVerificationConfig"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Vous vous demandez peut-\xeatre pourquoi un protocole OIDC standard prend en charge \xe0 la fois les flux implicites et hybrides, alors que le connecteur Logto ne prend en charge que le flux d'autorisation. Il a \xe9t\xe9 d\xe9termin\xe9 que les flux implicites et hybrides sont moins s\xe9curis\xe9s que le flux d'autorisation. En raison de l'accent mis par Logto sur la s\xe9curit\xe9, il ne prend en charge que le flux d'autorisation pour le plus haut niveau de s\xe9curit\xe9 pour ses utilisateurs, malgr\xe9 sa nature l\xe9g\xe8rement moins pratique."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"responseType"})," et ",(0,s.jsx)(n.code,{children:"grantType"}),' ne peuvent \xeatre que des valeurs FIXES avec le flux "Authorization Code", nous les rendons donc optionnels et les valeurs par d\xe9faut seront automatiquement remplies.']}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,s.jsx)(n.strong,{children:"Remarque"})]}),"\n",(0,s.jsxs)(n.p,{children:["Pour tous les types de flux, nous avons fourni une cl\xe9 ",(0,s.jsx)(n.code,{children:"customConfig"})," OPTIONNELLE pour placer vos param\xe8tres personnalis\xe9s.\nChaque fournisseur d'identit\xe9 sociale pourrait avoir sa propre variante sur le protocole standard OIDC. Si votre fournisseur d'identit\xe9 sociale souhait\xe9 respecte strictement le protocole standard OIDC, alors vous n'avez pas besoin de vous soucier de ",(0,s.jsx)(n.code,{children:"customConfig"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"types-de-configuration",children:"Types de configuration"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nom"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Requis"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scope"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Vrai"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientId"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Vrai"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clientSecret"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Vrai"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"authorizationEndpoint"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Vrai"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tokenEndpoint"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Vrai"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"idTokenVerificationConfig"}),(0,s.jsx)(n.td,{children:"IdTokenVerificationConfig"}),(0,s.jsx)(n.td,{children:"Vrai"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"authRequestOptionalConfig"}),(0,s.jsx)(n.td,{children:"AuthRequestOptionalConfig"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"customConfig"}),(0,s.jsx)(n.td,{children:"Record<string, string>"}),(0,s.jsx)(n.td,{children:"Faux"})]})]})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9s AuthRequestOptionalConfig"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Requis"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"responseType"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tokenEndpoint"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"responseMode"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"display"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"prompt"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxAge"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"uiLocales"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"idTokenHint"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"loginHint"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"acrValues"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Faux"})]})]})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Propri\xe9t\xe9s IdTokenVerificationConfig"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Requis"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"jwksUri"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Vrai"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"issuer"}),(0,s.jsx)(n.td,{children:"string | string[]"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"audience"}),(0,s.jsx)(n.td,{children:"string | string[]"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"algorithms"}),(0,s.jsx)(n.td,{children:"string[]"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"clockTolerance"}),(0,s.jsx)(n.td,{children:"string | number"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"crit"}),(0,s.jsx)(n.td,{children:"Record<string, string | boolean>"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"currentDate"}),(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxTokenAge"}),(0,s.jsx)(n.td,{children:"string | number"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"subject"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Faux"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"typ"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Faux"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Voir ",(0,s.jsx)(n.a,{href:"https://github.com/panva/jose/blob/main/docs/interfaces/jwt_verify.JWTVerifyOptions.md",children:"ici"})," pour plus de d\xe9tails sur ",(0,s.jsx)(n.code,{children:"IdTokenVerificationConfig"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>d});var t=i(30758);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);