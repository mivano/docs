"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[11724],{85674:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),s=n(17279);const r=[{value:"Create your OIDC app",id:"create-your-oidc-app",level:3},{value:"Configure your connector",id:"configure-your-connector",level:3},{value:"Config types",id:"config-types",level:3}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"create-your-oidc-app",children:"Create your OIDC app"}),"\n",(0,i.jsx)(t.p,{children:"When you open this page, we believe you already know which social identity provider you want to connect to. The first thing to do is to confirm that the identity provider supports the OIDC protocol, which is a prerequisite for configuring a valid connector. Then, follow the identity provider's instructions to register and create the relevant app for OIDC authorization."}),"\n",(0,i.jsx)(t.h3,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsx)(t.p,{children:'We ONLY support "Authorization Code" grant type for security consideration and it can perfectly fit Logto\'s scenario.'}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"clientId"})," and ",(0,i.jsx)(t.code,{children:"clientSecret"})," can be found at your OIDC apps details page."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"clientId"}),": The client ID is a unique identifier that identifies the client application during registration with the authorization server. This ID is used by the authorization server to verify the identity of the client application and to associate any authorized access tokens with that specific client application."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"clientSecret"}),": The client secret is a confidential key that is issued to the client application by the authorization server during registration. The client application uses this secret key to authenticate itself with the authorization server when requesting access tokens. The client secret is considered confidential information and should be kept secure at all times."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"scope"}),': The scope parameter is used to specify the set of resources and permissions that the client application is requesting access to. The scope parameter is typically defined as a space-separated list of values that represent specific permissions. For example, a scope value of "read write" might indicate that the client application is requesting read and write access to a user\'s data.']}),"\n",(0,i.jsxs)(t.p,{children:["You are expected to find ",(0,i.jsx)(t.code,{children:"authorizationEndpoint"}),", ",(0,i.jsx)(t.code,{children:"tokenEndpoint"}),", ",(0,i.jsx)(t.code,{children:"jwksUri"})," and ",(0,i.jsx)(t.code,{children:"issuer"})," as OpenID Provider's configuration information. They should be available in social vendor's documentation."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"authenticationEndpoint"}),": This endpoint is used to initiate the authentication process. The authentication process typically involves the user logging in and granting authorization for the client application to access their resources."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"tokenEndpoint"}),": This endpoint is used by the client application to obtain an id token that can be used to access the requested resources. The client application typically sends a request to the token endpoint with a grant type and authorization code to receive an id token."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"jwksUri"}),": This is the URL endpoint where the JSON Web Key Set (JWKS) of the social identity provider (IdP for short) can be obtained. The JWKS is a set of cryptographic keys that the IdP uses to sign and verify JSON Web Tokens (JWTs) that are issued during the authentication process. The ",(0,i.jsx)(t.code,{children:"jwksUri"})," is used by the relying party (RP) to obtain the public keys used by the IdP to sign the JWTs, so the RP can verify the authenticity and integrity of the JWTs received from the IdP."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"issuer"}),": This is the unique identifier of the IdP that is used by the RP to verify the JWTs received from the IdP. It is included in the JWTs as the ",(0,i.jsx)(t.code,{children:"iss"})," ",(0,i.jsx)(t.a,{href:"https://www.rfc-editor.org/rfc/rfc7519#section-4",children:"claim"})," (Id token is always a JWT). The issuer value should match the URL of the IdP's authorization server, and it should be a URI that the RP trusts. When the RP receives a JWT, it checks the ",(0,i.jsx)(t.code,{children:"iss"})," claim to ensure that it was issued by a trusted IdP, and that the JWT is intended for use with the RP."]}),"\n",(0,i.jsxs)(t.p,{children:["Together, ",(0,i.jsx)(t.code,{children:"jwksUri"})," and ",(0,i.jsx)(t.code,{children:"issuer"})," provide a secure mechanism for the RP to verify the identity of the end-user during the authentication process. By using the public keys obtained from the ",(0,i.jsx)(t.code,{children:"jwksUri"}),", the RP can verify the authenticity and integrity of the JWTs issued by the IdP. The issuer value ensures that the RP only accepts JWTs that were issued by a trusted IdP, and that the JWTs are intended for use with the RP."]}),"\n",(0,i.jsxs)(t.p,{children:["Since an authentication request is always required, an ",(0,i.jsx)(t.code,{children:"authRequestOptionalConfig"})," is provided to wrap all optional configs, you can find details on ",(0,i.jsx)(t.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest",children:"OIDC Authentication Request"}),". You may also find that ",(0,i.jsx)(t.code,{children:"nonce"})," is missing in this config. Since ",(0,i.jsx)(t.code,{children:"nonce"})," should identical for each request, we put the generation of ",(0,i.jsx)(t.code,{children:"nonce"})," in code implementation. So do not worry about it! Previously mentioned ",(0,i.jsx)(t.code,{children:"jwksUri"})," and ",(0,i.jsx)(t.code,{children:"issuer"})," are also included in ",(0,i.jsx)(t.code,{children:"idTokenVerificationConfig"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"You may be curious as to why a standard OIDC protocol supports both the implicit and hybrid flows, yet the Logto connector only supports the authorization flow. It has been determined that the implicit and hybrid flows are less secure than the authorization flow. Due to Logto's focus on security, it only supports the authorization flow for the highest level of security for its users, despite its slightly less convenient nature."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"responseType"})," and ",(0,i.jsx)(t.code,{children:"grantType"}),' can ONLY be FIXED values with "Authorization Code" flow, so we make them optional and default values will be automatically filled.']}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["\u2139\ufe0f ",(0,i.jsx)(t.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(t.p,{children:["For all flow types, we provided an OPTIONAL ",(0,i.jsx)(t.code,{children:"customConfig"})," key to put your customize parameters.\nEach social identity provider could have their own variant on OIDC standard protocol. If your desired social identity provider strictly stick to OIDC standard protocol, the you do not need to care about ",(0,i.jsx)(t.code,{children:"customConfig"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"scope"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clientId"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clientSecret"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"authorizationEndpoint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tokenEndpoint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"idTokenVerificationConfig"}),(0,i.jsx)(t.td,{children:"IdTokenVerificationConfig"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"authRequestOptionalConfig"}),(0,i.jsx)(t.td,{children:"AuthRequestOptionalConfig"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"customConfig"}),(0,i.jsx)(t.td,{children:"{ [key: string]: string }"}),(0,i.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"AuthRequestOptionalConfig properties"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"responseType"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tokenEndpoint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"responseMode"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"display"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"prompt"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxAge"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"uiLocales"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"idTokenHint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"loginHint"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"acrValues"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"IdTokenVerificationConfig properties"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Required"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"jwksUri"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"issuer"}),(0,i.jsx)(t.td,{children:"string | string[]"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"audience"}),(0,i.jsx)(t.td,{children:"string | string[]"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"algorithms"}),(0,i.jsx)(t.td,{children:"string[]"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"clockTolerance"}),(0,i.jsx)(t.td,{children:"string | number"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"crit"}),(0,i.jsx)(t.td,{children:"{ [key: string]: string | boolean }"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"currentDate"}),(0,i.jsx)(t.td,{children:"Date"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxTokenAge"}),(0,i.jsx)(t.td,{children:"string | number"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"subject"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"typ"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["See ",(0,i.jsx)(t.a,{href:"https://github.com/panva/jose/blob/main/docs/interfaces/jwt_verify.JWTVerifyOptions.md",children:"here"})," to find more details about ",(0,i.jsx)(t.code,{children:"IdTokenVerificationConfig"}),"."]})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},37363:(e,t,n)=>{n.d(t,{ZP:()=>u,d$:()=>l});var i=n(11527),s=n(17279),r=n(80983),o=n(67109),a=n(65416),c=n(62533),d=n(94842);const l=[...r.d$,{value:"Installation",id:"installation",level:3},...c.d$,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...a.d$,{value:"Implement sign-in and sign-out",id:"implement-sign-in-and-sign-out",level:3},...o.d$,...d.d$];function h(e){const t={h3:"h3",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"implement-sign-in-and-sign-out",children:"Implement sign-in and sign-out"}),"\n",(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(d.ZP,{sdk:"React"})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,connector:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(11527),s=n(17279);n(87593),n(80710),n(12665),n(80386),n(31877),n(23095),n(37363),n(85674);const r={slug:"how-to-build-oidc-sign-in-with-react-and-logto",authors:"logto",tags:["authentication","oidc","react","js","social-sign-in","sign-in","login"],title:"How to build OIDC sign-in with React and Logto"},o=void 0,a={permalink:"/tutorial/how-to-build-oidc-sign-in-with-react-and-logto",source:"@site/tutorial/build-with-logto/generated-react-oidc.mdx",title:"How to build OIDC sign-in with React and Logto",description:"\x3c!--",date:"2024-06-30T13:03:56.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"oidc",permalink:"/tutorial/tags/oidc"},{inline:!0,label:"react",permalink:"/tutorial/tags/react"},{inline:!0,label:"js",permalink:"/tutorial/tags/js"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.29,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-oidc-sign-in-with-react-and-logto",authors:"logto",tags:["authentication","oidc","react","js","social-sign-in","sign-in","login"],title:"How to build OIDC sign-in with React and Logto"},unlisted:!1,prevItem:{title:"How to build OAuth2 sign-in with React and Logto",permalink:"/tutorial/how-to-build-oauth2-sign-in-with-react-and-logto"},nextItem:{title:"How to build SAML sign-in with React and Logto",permalink:"/tutorial/how-to-build-saml-sign-in-with-react-and-logto"}},c={authorsImageUrls:[void 0]},d="OIDC",l=[];function h(e){return(0,i.jsx)(i.Fragment,{})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h()}},84530:(e,t,n)=>{n.d(t,{ZP:()=>d,d$:()=>a});var i=n(11527),s=n(17279),r=n(75696),o=n(78407);const a=[];function c(e){const t={p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[e.packageName?null:(()=>{throw new Error("props.packageName is required when importing _npm_like_installation.mdx")})(),"\n",(0,i.jsx)(t.p,{children:"Install Logto SDK via your favorite package manager:"}),"\n",(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(r.Z,{value:"npm",label:"npm",children:(0,i.jsx)("pre",{children:(0,i.jsxs)("code",{className:"language-bash",children:["npm i ",e.packageName]})})}),(0,i.jsx)(r.Z,{value:"pnpm",label:"pnpm",children:(0,i.jsx)("pre",{children:(0,i.jsxs)("code",{className:"language-bash",children:["pnpm add ",e.packageName]})})}),(0,i.jsx)(r.Z,{value:"yarn",label:"yarn",children:(0,i.jsx)("pre",{children:(0,i.jsxs)("code",{className:"language-bash",children:["yarn add ",e.packageName]})})})]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},7709:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),s=n(17279);const r=[];function o(e){const t={admonition:"admonition",p:"p",...(0,s.a)(),...e.components};return(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Before calling ",(0,i.jsx)("code",{children:e.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},51187:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),s=n(17279);const r=[];function o(e){const t={admonition:"admonition",code:"code",p:"p",...(0,s.a)(),...e.components};return(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["In the following code snippets, we assume your app is running on ",(0,i.jsx)(t.code,{children:"http://localhost:3000"}),"."]})})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},63903:(e,t,n)=>{n.d(t,{ZP:()=>c,d$:()=>o});var i=n(11527),s=n(17279),r=n(82418);const o=[{value:"Configure redirect URIs",id:"configure-redirect-uris",level:4}];function a(e){const t={code:"code",h4:"h4",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(t.h4,{id:"configure-redirect-uris",children:"Configure redirect URIs"}),"\n",(0,i.jsxs)(t.p,{children:["Switch to the application details page of Logto Console. Add a Redirect URI ",(0,i.jsx)("code",{children:e.redirectUri??"http://localhost:3000/callback"}),"."]}),"\n",(0,i.jsx)("img",{alt:"Redirect URI in Logto Console",src:r.Z,width:"600px"}),"\n",(0,i.jsxs)(t.p,{children:["Just like signing in, users should be redirected to Logto for signing out of the shared session. Once finished, it would be great to redirect the user back to your website. For example, add ",(0,i.jsx)(t.code,{children:"http://localhost:3000"})," as the post sign-out redirect URI section."]}),"\n",(0,i.jsx)(t.p,{children:'Then click "Save" to save the changes.'})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},68668:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),s=n(17279);const r=[];function o(e){const t={code:"code",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(t.p,{children:["Calling ",(0,i.jsx)(t.code,{children:".signOut()"})," will clear all the Logto data in memory and localStorage if they exist."]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},80983:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),s=n(17279);const r=[];function o(e){const t={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The sample project is available on our ",(0,i.jsx)(t.a,{href:"https://github.com/logto-io/js/tree/master/packages/react-sample",children:"SDK repository"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["The tutorial video is available on our ",(0,i.jsx)(t.a,{href:"https://youtu.be/pvKYt8QFppE",children:"YouTube channel"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},67109:(e,t,n)=>{n.d(t,{ZP:()=>g,d$:()=>u});var i=n(11527),s=n(17279),r=n(7709),o=n(51187),a=n(63903),c=n(55556),d=n(68668);function l(e){const t={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Since we use ",(0,i.jsx)(t.code,{children:"http://localhost:3000/callback"})," as the redirect URI, now we need to handle it properly."]}),"\n",(0,i.jsx)(t.p,{children:"First let's create a callback page:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="pages/Callback/index.tsx"',children:"import { useHandleSignInCallback } from '@logto/react';\n\nconst Callback = () => {\n  const { isLoading } = useHandleSignInCallback(() => {\n    // Do something when finished, e.g. redirect to home page\n  });\n\n  // When it's working in progress\n  if (isLoading) {\n    return <div>Redirecting...</div>;\n  }\n\n  return null;\n};\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Finally insert the code below to create a ",(0,i.jsx)(t.code,{children:"/callback"})," route which does NOT require authentication:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'// Assuming react-router\n<Route path="/callback" element={<Callback />} />\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}const u=[{value:"Configure redirect URIs",id:"configure-redirect-uris",level:3},...c.d$,...o.d$,...a.d$,{value:"Handle redirect",id:"handle-redirect",level:3},{value:"Implement sign-in and sign-out",id:"implement-sign-in-and-sign-out",level:3},...r.d$,...d.d$];function p(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"configure-redirect-uris",children:"Configure redirect URIs"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(t.h3,{id:"handle-redirect",children:"Handle redirect"}),"\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(t.h3,{id:"implement-sign-in-and-sign-out",children:"Implement sign-in and sign-out"}),"\n",(0,i.jsxs)(t.p,{children:["We provide two hooks ",(0,i.jsx)(t.code,{children:"useHandleSignInCallback()"})," and ",(0,i.jsx)(t.code,{children:"useLogto()"})," which can help you easily manage the authentication flow."]}),"\n",(0,i.jsx)(r.ZP,{calling:".signIn()"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="pages/Home/index.tsx"',children:"import { useLogto } from '@logto/react';\n\nconst Home = () => {\n  const { signIn, signOut, isAuthenticated } = useLogto();\n\n  return isAuthenticated ? (\n    <button onClick={signOut}>Sign Out</button>\n  ) : (\n    <button onClick={() => signIn('http://localhost:3000/callback')}>Sign In</button>\n  );\n};\n"})}),"\n",(0,i.jsx)(d.ZP,{})]})}function g(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},65416:(e,t,n)=>{n.d(t,{ZP:()=>a,d$:()=>r});var i=n(11527),s=n(17279);const r=[];function o(e){const t={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Import and use ",(0,i.jsx)(t.code,{children:"LogtoProvider"})," to provide a Logto context to your app:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="App.tsx"',children:"import { LogtoProvider, LogtoConfig } from '@logto/react';\n\nconst config: LogtoConfig = {\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  appId: '<your-application-id>',\n};\n\nconst App = () => (\n  <LogtoProvider config={config}>\n    <YourAppContent />\n  </LogtoProvider>\n);\n"})})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},62533:(e,t,n)=>{n.d(t,{ZP:()=>c,d$:()=>o});var i=n(11527),s=n(17279),r=n(84530);const o=[...r.d$];function a(e){return(0,i.jsx)(r.ZP,{packageName:"@logto/react"})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a()}},75696:(e,t,n)=>{n.d(t,{Z:()=>o});n(50959);var i=n(5341);const s={tabItem:"tabItem_YHvg"};var r=n(11527);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s.tabItem,o),hidden:n,children:t})}},78407:(e,t,n)=>{n.d(t,{Z:()=>A});var i=n(50959),s=n(5341),r=n(18387),o=n(28903),a=n(15885),c=n(35927),d=n(38894),l=n(70148);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function j(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=u(e),[o,c]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[d,h]=g({queryString:n,groupId:s}),[j,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,l.Nk)(n);return[s,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),m=(()=>{const e=d??j;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),x(e)}),[h,x,r]),tabValues:r}}var x=n(20619);const m={tabList:"tabList_bI1r",tabItem:"tabItem_PIQj"};var f=n(11527);function b(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),l=e=>{const t=e.currentTarget,n=c.indexOf(t),s=a[n].value;s!==i&&(d(t),o(s))},h=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>c.push(e),onKeyDown:h,onClick:l,...r,className:(0,s.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function A(e){const t=(0,x.Z)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(t))}},82418:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);