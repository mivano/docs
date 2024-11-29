"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[71673],{17034:(e,n,o)=>{o.d(n,{Ay:()=>c,RM:()=>r});var i=o(86070),t=o(15658);const r=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Pour plus d'informations sur l'authentification unique (SSO) et comment configurer l'authentification unique (SSO) dans Logto, veuillez consulter la documentation ",(0,i.jsx)(n.a,{href:"/connectors/enterprise-connectors",children:"SSO d\u2019entreprise (SAML & OIDC)"})," pour commencer."]})})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},54837:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"integrations/sso/google-workspace/README","title":"Configurer l\'authentification unique avec Google Workspace","description":"Avec un minimum d\'efforts de configuration, ce connecteur permet l\'int\xe9gration avec Microsoft Entra ID pour le SSO d\'entreprise.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/integrations/sso/google-workspace/README.mdx","sourceDirName":"integrations/sso/google-workspace","slug":"/integrations/google-workspace","permalink":"/fr/integrations/google-workspace","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/fr/docusaurus-plugin-content-docs/current/integrations/sso/google-workspace/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/google-workspace","sidebar_label":"Google Workspace","sidebar_custom_props":{"description":"Gestion unifi\xe9e et s\xe9curis\xe9e de l\'acc\xe8s des utilisateurs au sein de l\'\xe9cosyst\xe8me Google.","logoFilename":"google.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Microsoft Entra ID (SAML)","permalink":"/fr/integrations/entra-id-saml"},"next":{"title":"OIDC (Enterprise)","permalink":"/fr/integrations/oidc-sso"}}');var t=o(86070),r=o(15658),s=o(17034);const c={slug:"/integrations/google-workspace",sidebar_label:"Google Workspace",sidebar_custom_props:{description:"Gestion unifi\xe9e et s\xe9curis\xe9e de l'acc\xe8s des utilisateurs au sein de l'\xe9cosyst\xe8me Google.",logoFilename:"google.svg"}},l="Configurer l'authentification unique avec Google Workspace",a={},d=[...s.RM,{value:"\xc9tape 1 : Cr\xe9er un nouveau projet sur Google Cloud Platform",id:"\xe9tape-1--cr\xe9er-un-nouveau-projet-sur-google-cloud-platform",level:2},{value:"\xc9tape 2 : Configurer l&#39;\xe9cran de consentement pour votre application",id:"\xe9tape-2--configurer-l\xe9cran-de-consentement-pour-votre-application",level:2},{value:"\xc9tape 3 : Cr\xe9er une nouvelle information d&#39;identification OAuth",id:"\xe9tape-3--cr\xe9er-une-nouvelle-information-didentification-oauth",level:2},{value:"\xc9tape 4 : Configurer le connecteur Logto avec les informations d&#39;identification du client",id:"\xe9tape-4--configurer-le-connecteur-logto-avec-les-informations-didentification-du-client",level:2},{value:"\xc9tape 5 : Port\xe9es suppl\xe9mentaires (Optionnel)",id:"\xe9tape-5--port\xe9es-suppl\xe9mentaires-optionnel",level:2},{value:"\xc9tape 6 : D\xe9finir les domaines email et activer le connecteur SSO",id:"\xe9tape-6--d\xe9finir-les-domaines-email-et-activer-le-connecteur-sso",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"configurer-lauthentification-unique-avec-google-workspace",children:"Configurer l'authentification unique avec Google Workspace"})}),"\n",(0,t.jsx)(n.p,{children:"Avec un minimum d'efforts de configuration, ce connecteur permet l'int\xe9gration avec Microsoft Entra ID pour le SSO d'entreprise."}),"\n",(0,t.jsx)(s.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"\xe9tape-1--cr\xe9er-un-nouveau-projet-sur-google-cloud-platform",children:"\xc9tape 1 : Cr\xe9er un nouveau projet sur Google Cloud Platform"}),"\n",(0,t.jsxs)(n.p,{children:["Avant de pouvoir utiliser Google Workspace comme fournisseur d'Authentification (Authentication), vous devez configurer un projet dans la ",(0,t.jsx)(n.a,{href:"https://console.developers.google.com/",children:"Google API Console"})," pour obtenir des informations d'identification OAuth 2.0. Si vous avez d\xe9j\xe0 un projet, vous pouvez passer cette \xe9tape. Sinon, cr\xe9ez un nouveau projet sous votre Organisation (Organisation) Google."]}),"\n",(0,t.jsx)(n.h2,{id:"\xe9tape-2--configurer-l\xe9cran-de-consentement-pour-votre-application",children:"\xc9tape 2 : Configurer l'\xe9cran de consentement pour votre application"}),"\n",(0,t.jsx)(n.p,{children:"Afin de cr\xe9er une nouvelle information d'identification OIDC, vous devez configurer l'\xe9cran de consentement pour votre application."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Acc\xe9dez \xe0 la page ",(0,t.jsx)(n.a,{href:"https://console.cloud.google.com/apis/credentials/consent",children:"\xc9cran de consentement OAuth"})," et s\xe9lectionnez le type d'utilisateur ",(0,t.jsx)(n.code,{children:"Interne"}),". Cela rendra l'application OAuth uniquement disponible pour les utilisateurs au sein de votre Organisation (Organisation)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Google Workspace consent screen user type.webp",src:o(68470).A+"",width:"2604",height:"1363"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Remplissez les param\xe8tres de l'",(0,t.jsx)(n.code,{children:"\xc9cran de consentement"})," en suivant les instructions sur la page. Vous devez fournir les informations minimales suivantes :"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Nom de l'application"})," : Le nom de votre application. Il sera affich\xe9 sur l'\xe9cran de consentement."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Email de support"})," : L'email de support de votre application. Il sera affich\xe9 sur l'\xe9cran de consentement."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Google Workspace consent screen settings.webp",src:o(39867).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["D\xe9finissez les ",(0,t.jsx)(n.code,{children:"Port\xe9es"})," pour votre application. Afin de r\xe9cup\xe9rer correctement les informations d'identit\xe9 de l'utilisateur et l'adresse email de l'IdP, les connecteurs Logto SSO doivent accorder les port\xe9es suivantes de l'IdP :"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Google Workspace consent screen scopes.webp",src:o(39043).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"openid"})," : Cette port\xe9e est requise pour l'authentification OIDC. Elle est utilis\xe9e pour r\xe9cup\xe9rer le Jeton d\u2019identifiant (ID token) et acc\xe9der au point de terminaison userInfo de l'IdP."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"profile"})," : Cette port\xe9e est requise pour acc\xe9der aux informations de profil de base de l'utilisateur."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"email"})," : Cette port\xe9e est requise pour acc\xe9der \xe0 l'adresse email de l'utilisateur."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Cliquez sur le bouton ",(0,t.jsx)(n.code,{children:"Enregistrer"})," pour enregistrer les param\xe8tres de l'\xe9cran de consentement."]}),"\n",(0,t.jsx)(n.h2,{id:"\xe9tape-3--cr\xe9er-une-nouvelle-information-didentification-oauth",children:"\xc9tape 3 : Cr\xe9er une nouvelle information d'identification OAuth"}),"\n",(0,t.jsxs)(n.p,{children:["Acc\xe9dez \xe0 la page ",(0,t.jsx)(n.a,{href:"https://console.cloud.google.com/apis/credentials",children:"Informations d'identification"})," et cliquez sur le bouton ",(0,t.jsx)(n.code,{children:"Cr\xe9er des informations d'identification"}),". S\xe9lectionnez l'option ",(0,t.jsx)(n.code,{children:"ID client OAuth"})," dans le menu d\xe9roulant pour cr\xe9er une nouvelle information d'identification OAuth pour votre application."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Google Workspace create credentials.webp",src:o(2947).A+"",width:"2604",height:"1363"})}),"\n",(0,t.jsx)(n.p,{children:"Continuez \xe0 configurer l'information d'identification OAuth en remplissant les informations suivantes :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Google Workspace credentials config.webp",src:o(67515).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["S\xe9lectionnez ",(0,t.jsx)(n.code,{children:"Application Web"})," comme type d'application."]}),"\n",(0,t.jsxs)(n.li,{children:["Remplissez le ",(0,t.jsx)(n.code,{children:"Nom"})," de votre application cliente, ",(0,t.jsx)(n.code,{children:"Logto SSO Connector"})," par exemple. Cela vous aidera \xe0 identifier les informations d'identification \xe0 l'avenir."]}),"\n",(0,t.jsxs)(n.li,{children:["Remplissez les ",(0,t.jsx)(n.code,{children:"URIs de redirection autoris\xe9s"})," avec l'URI de rappel Logto. C'est l'URI vers lequel Google redirigera le navigateur de l'utilisateur apr\xe8s une Authentification (Authentication) r\xe9ussie. Apr\xe8s qu'un utilisateur s'est authentifi\xe9 avec succ\xe8s aupr\xe8s de l'IdP, l'IdP redirige le navigateur de l'utilisateur vers cet URI d\xe9sign\xe9 avec un code d'Autorisation (Authorization). Logto compl\xe9tera le processus d'Authentification (Authentication) bas\xe9 sur le code d'Autorisation (Authorization) re\xe7u de cet URI."]}),"\n",(0,t.jsxs)(n.li,{children:["Remplissez les ",(0,t.jsx)(n.code,{children:"Origines JavaScript autoris\xe9es"})," avec l'origine de l'URI de rappel Logto. Cela garantit que seule votre application Logto peut envoyer des requ\xeates au serveur OAuth de Google."]}),"\n",(0,t.jsxs)(n.li,{children:["Cliquez sur le bouton ",(0,t.jsx)(n.code,{children:"Cr\xe9er"})," pour cr\xe9er l'information d'identification OAuth."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\xe9tape-4--configurer-le-connecteur-logto-avec-les-informations-didentification-du-client",children:"\xc9tape 4 : Configurer le connecteur Logto avec les informations d'identification du client"}),"\n",(0,t.jsx)(n.p,{children:"Apr\xe8s avoir cr\xe9\xe9 avec succ\xe8s l'information d'identification OAuth, vous recevrez une fen\xeatre modale avec l'ID client et le secret client."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Google Workspace client credentials.webp",src:o(86172).A+"",width:"2604",height:"1865"})}),"\n",(0,t.jsxs)(n.p,{children:["Copiez l'",(0,t.jsx)(n.code,{children:"ID client"})," et le ",(0,t.jsx)(n.code,{children:"secret client"})," et remplissez les champs correspondants dans l'onglet ",(0,t.jsx)(n.code,{children:"Connexion"})," du connecteur SSO de Logto."]}),"\n",(0,t.jsx)(n.p,{children:"Vous avez maintenant configur\xe9 avec succ\xe8s un connecteur SSO Google Workspace sur Logto."}),"\n",(0,t.jsx)(n.h2,{id:"\xe9tape-5--port\xe9es-suppl\xe9mentaires-optionnel",children:"\xc9tape 5 : Port\xe9es suppl\xe9mentaires (Optionnel)"}),"\n",(0,t.jsxs)(n.p,{children:["Utilisez le champ ",(0,t.jsx)(n.code,{children:"Port\xe9e"})," pour ajouter des port\xe9es suppl\xe9mentaires \xe0 votre requ\xeate OAuth. Cela vous permettra de demander plus d'informations au serveur OAuth de Google. Veuillez vous r\xe9f\xe9rer \xe0 la documentation des ",(0,t.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/scopes",children:"Port\xe9es OAuth de Google"})," pour plus d'informations."]}),"\n",(0,t.jsxs)(n.p,{children:["Ind\xe9pendamment des param\xe8tres de port\xe9e personnalis\xe9s, Logto enverra toujours les port\xe9es ",(0,t.jsx)(n.code,{children:"openid"}),", ",(0,t.jsx)(n.code,{children:"profile"})," et ",(0,t.jsx)(n.code,{children:"email"})," \xe0 l'IdP. Cela garantit que Logto peut r\xe9cup\xe9rer correctement les informations d'identit\xe9 de l'utilisateur et l'adresse email."]}),"\n",(0,t.jsx)(n.h2,{id:"\xe9tape-6--d\xe9finir-les-domaines-email-et-activer-le-connecteur-sso",children:"\xc9tape 6 : D\xe9finir les domaines email et activer le connecteur SSO"}),"\n",(0,t.jsxs)(n.p,{children:["Fournissez les ",(0,t.jsx)(n.code,{children:"domaines email"})," de votre Organisation (Organisation) dans l'onglet ",(0,t.jsx)(n.code,{children:"Exp\xe9rience SSO"})," du connecteur de Logto. Cela activera le connecteur SSO comme m\xe9thode d'Authentification (Authentication) pour ces utilisateurs."]}),"\n",(0,t.jsx)(n.p,{children:"Les utilisateurs avec des adresses email dans les domaines sp\xe9cifi\xe9s seront redirig\xe9s pour utiliser votre connecteur SSO comme leur seule m\xe9thode d'Authentification (Authentication)."}),"\n",(0,t.jsxs)(n.p,{children:["Pour plus d'informations sur le connecteur SSO Google Workspace, veuillez consulter ",(0,t.jsx)(n.a,{href:"https://developers.google.com/identity/openid-connect/openid-connect",children:"Google OpenID Connector"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},86172:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/google_workspace_client_credentials-04b46e076f40fb0bd433529cb59d6f46.webp"},39043:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/google_workspace_consent_screen_scopes-eb352a52b1f1056877a6b93edf68a0bb.webp"},39867:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/google_workspace_consent_screen_settings-e7eb6c977bb7d90015b38d1d9f84673e.webp"},68470:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/google_workspace_consent_screen_user_type-f5da0e8e1d400973d4702ce1f553fd27.webp"},2947:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/google_workspace_create_credentials-4b2f8a7bd881d99886aa1131503ea227.webp"},67515:(e,n,o)=>{o.d(n,{A:()=>i});const i=o.p+"assets/images/google_workspace_credentials_config-0a4787d6350ce1a7c3e0c337bb0726c6.webp"},15658:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var i=o(30758);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);