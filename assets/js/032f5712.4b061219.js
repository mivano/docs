"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[73605],{68681:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"docs/recipes/single-sign-on/configure-sso/google-workspace","title":"Configure Google Workspace SSO","description":"With minimal configuration efforts, this connector allows integration with Microsoft Entra ID for enterprise SSO.","source":"@site/docs/docs/recipes/single-sign-on/configure-sso/google-workspace.md","sourceDirName":"docs/recipes/single-sign-on/configure-sso","slug":"/docs/recipes/single-sign-on/configure-sso/google-workspace","permalink":"/docs/recipes/single-sign-on/configure-sso/google-workspace","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/single-sign-on/configure-sso/google-workspace.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_label":"Google Workspace","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Microsoft Entra ID (OIDC)","permalink":"/docs/recipes/single-sign-on/configure-sso/entra-id-oidc"},"next":{"title":"Okta","permalink":"/docs/recipes/single-sign-on/configure-sso/okta"}}');var s=n(86070),i=n(15658);const r={sidebar_label:"Google Workspace",sidebar_position:4},c="Configure Google Workspace SSO",l={},a=[{value:"Step 1: Create a new project on Google Cloud Platform",id:"step-1-create-a-new-project-on-google-cloud-platform",level:2},{value:"Step 2: Config the consent screen for your application",id:"step-2-config-the-consent-screen-for-your-application",level:2},{value:"Step 3: Create a new OAuth credential",id:"step-3-create-a-new-oauth-credential",level:2},{value:"Step 4: Set up Logto connector with the client credentials",id:"step-4-set-up-logto-connector-with-the-client-credentials",level:2},{value:"Step 5: Additional Scopes (Optional)",id:"step-5-additional-scopes-optional",level:2},{value:"Step 6: Set email domains and enable the SSO connector",id:"step-6-set-email-domains-and-enable-the-sso-connector",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"configure-google-workspace-sso",children:"Configure Google Workspace SSO"})}),"\n",(0,s.jsx)(o.p,{children:"With minimal configuration efforts, this connector allows integration with Microsoft Entra ID for enterprise SSO."}),"\n",(0,s.jsx)(o.h2,{id:"step-1-create-a-new-project-on-google-cloud-platform",children:"Step 1: Create a new project on Google Cloud Platform"}),"\n",(0,s.jsxs)(o.p,{children:["Before you can use Google Workspace as an authentication provider, you must set up a project in the ",(0,s.jsx)(o.a,{href:"https://console.developers.google.com/",children:"Google API Console"})," to obtain OAuth 2.0 credentials, If you already have a project, you can skip this step. Otherwise, create a new project under your Google organization."]}),"\n",(0,s.jsx)(o.h2,{id:"step-2-config-the-consent-screen-for-your-application",children:"Step 2: Config the consent screen for your application"}),"\n",(0,s.jsx)(o.p,{children:"In order to create a new OIDC credential, you need to configure the consent screen for your application."}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Navigate to the ",(0,s.jsx)(o.a,{href:"https://console.cloud.google.com/apis/credentials/consent",children:"OAuth consent screen"})," page and select the ",(0,s.jsx)(o.code,{children:"Internal"})," user type. This will make the OAuth application only available to users within your organization."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Google Workspace consent screen user type.webp",src:n(82927).A+"",width:"2604",height:"1363"})}),"\n",(0,s.jsxs)(o.ol,{start:"2",children:["\n",(0,s.jsxs)(o.li,{children:["Fill in the ",(0,s.jsx)(o.code,{children:"Consent Screen"})," settings following the instructions on the page. You need to provide the following minimum information:"]}),"\n"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Application name"}),": The name of your application. It will be displayed on the consent screen."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Support email"}),": The support email of your application. It will be displayed on the consent screen."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Google Workspace consent screen settings.webp",src:n(65960).A+"",width:"2604",height:"1865"})}),"\n",(0,s.jsxs)(o.ol,{start:"3",children:["\n",(0,s.jsxs)(o.li,{children:["Set the ",(0,s.jsx)(o.code,{children:"Scopes"})," for your application. In order to retrieve the user's identity information and email address properly from the IdP, Logto SSO connectors need to grant the following scopes from the IdP:"]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Google Workspace consent screen scopes.webp",src:n(68240).A+"",width:"2604",height:"1865"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"openid"}),": This scope is required for OIDC authentication. It is used to retrieve the ID token and get access to the userInfo endpoint of the IdP."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"profile"}),": This scope is required for accessing the user's basic profile information."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"email"}),": This scope is required for accessing the user's email address."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Click the ",(0,s.jsx)(o.code,{children:"Save"})," button to save the consent screen settings."]}),"\n",(0,s.jsx)(o.h2,{id:"step-3-create-a-new-oauth-credential",children:"Step 3: Create a new OAuth credential"}),"\n",(0,s.jsxs)(o.p,{children:["Navigate to the ",(0,s.jsx)(o.a,{href:"https://console.cloud.google.com/apis/credentials",children:"Credentials"})," page and click the ",(0,s.jsx)(o.code,{children:"Create Credentials"})," button. Select the ",(0,s.jsx)(o.code,{children:"OAuth client ID"})," option from the dropdown menu to create a new OAuth credential for your application."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Google Workspace create credentials.webp",src:n(95350).A+"",width:"2604",height:"1363"})}),"\n",(0,s.jsx)(o.p,{children:"Continue setting up the OAuth credential by filling up the following information:"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Google Workspace credentials config.webp",src:n(88502).A+"",width:"2604",height:"1865"})}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsxs)(o.li,{children:["Select the ",(0,s.jsx)(o.code,{children:"Web application"})," as the application type."]}),"\n",(0,s.jsxs)(o.li,{children:["Fill in the ",(0,s.jsx)(o.code,{children:"Name"})," of your client application, ",(0,s.jsx)(o.code,{children:"Logto SSO Connector"})," for example. This will help you to identify the credentials in the future."]}),"\n",(0,s.jsxs)(o.li,{children:["Fill in the ",(0,s.jsx)(o.code,{children:"Authorized redirect URIs"})," with the Logto callback URI. This is the URI that Google will redirect the user's browser after successful authentication. After a user successfully authenticates with the IdP, the IdP redirects the user's browser back to this designated URI along with an authorization code. Logto will complete the authentication process based on the authorization code received from this URI."]}),"\n",(0,s.jsxs)(o.li,{children:["Fill in the ",(0,s.jsx)(o.code,{children:"Authorized JavaScript origins"})," with the Logto callback URI's origin. This ensures only your Logto application can send requests to the Google OAuth server."]}),"\n",(0,s.jsxs)(o.li,{children:["Click the ",(0,s.jsx)(o.code,{children:"Create"})," button to create the OAuth credential."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"step-4-set-up-logto-connector-with-the-client-credentials",children:"Step 4: Set up Logto connector with the client credentials"}),"\n",(0,s.jsx)(o.p,{children:"After successfully creating the OAuth credential, you will receive a prompt modal with the client ID and client secret."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Google Workspace client credentials.webp",src:n(43305).A+"",width:"2604",height:"1865"})}),"\n",(0,s.jsxs)(o.p,{children:["Copy the ",(0,s.jsx)(o.code,{children:"Client ID"})," and ",(0,s.jsx)(o.code,{children:"Client secret"})," and fill in the corresponding fields on Logto\u2019s SSO connector ",(0,s.jsx)(o.code,{children:"Connection"})," tab."]}),"\n",(0,s.jsx)(o.p,{children:"Now you have successfully configured a Google Workspace SSO connector on Logto."}),"\n",(0,s.jsx)(o.h2,{id:"step-5-additional-scopes-optional",children:"Step 5: Additional Scopes (Optional)"}),"\n",(0,s.jsxs)(o.p,{children:["Use the ",(0,s.jsx)(o.code,{children:"Scope"})," field to add additional scopes to your OAuth request. This will allow you to request more information from the Google OAuth server. Please refer to the ",(0,s.jsx)(o.a,{href:"https://developers.google.com/identity/protocols/oauth2/scopes",children:"Google OAuth Scopes"})," documentation for more information."]}),"\n",(0,s.jsxs)(o.p,{children:["Regardless of the custom scope settings, Logto will always send the ",(0,s.jsx)(o.code,{children:"openid"}),", ",(0,s.jsx)(o.code,{children:"profile"}),", and ",(0,s.jsx)(o.code,{children:"email"})," scopes to the IdP. This is to ensure that Logto can retrieve the user's identity information and email address properly."]}),"\n",(0,s.jsx)(o.h2,{id:"step-6-set-email-domains-and-enable-the-sso-connector",children:"Step 6: Set email domains and enable the SSO connector"}),"\n",(0,s.jsxs)(o.p,{children:["Provide the ",(0,s.jsx)(o.code,{children:"email domains"})," of your organization on Logto\u2019s connector ",(0,s.jsx)(o.code,{children:"SSO experience"})," tab. This will enable the SSO connector as an authentication method for those users."]}),"\n",(0,s.jsx)(o.p,{children:"Users with email addresses in the specified domains will be redirected to use your SSO connector as their only authentication method."}),"\n",(0,s.jsxs)(o.p,{children:["For more information about the Google Workspace SSO connector, please check ",(0,s.jsx)(o.a,{href:"https://developers.google.com/identity/openid-connect/openid-connect",children:"Google OpenID Connector"}),"."]})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},43305:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/google_workspace_client_credentials-04b46e076f40fb0bd433529cb59d6f46.webp"},68240:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/google_workspace_consent_screen_scopes-eb352a52b1f1056877a6b93edf68a0bb.webp"},65960:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/google_workspace_consent_screen_settings-e7eb6c977bb7d90015b38d1d9f84673e.webp"},82927:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/google_workspace_consent_screen_user_type-f5da0e8e1d400973d4702ce1f553fd27.webp"},95350:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/google_workspace_create_credentials-4b2f8a7bd881d99886aa1131503ea227.webp"},88502:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/google_workspace_credentials_config-0a4787d6350ce1a7c3e0c337bb0726c6.webp"},15658:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>c});var t=n(30758);const s={},i=t.createContext(s);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);