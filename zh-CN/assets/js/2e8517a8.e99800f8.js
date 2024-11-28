"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[22146],{53358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"end-user-flows/sign-out","title":"Sign-out","description":"The sign-out process in Logto (as an OIDC-based identity provider) is a multi-faced concept due to the involvement of both centralized sign-in session managed by Logto and the distributed authentication status managed by the client applications.","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/sign-out.mdx","sourceDirName":"end-user-flows","slug":"/end-user-flows/sign-out","permalink":"/zh-CN/end-user-flows/sign-out","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/end-user-flows/sign-out.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"docsSidebar","previous":{"title":"\u7528\u6237\u6388\u6743\u9875\u9762 (Consent screen)","permalink":"/zh-CN/end-user-flows/consent-screen"},"next":{"title":"\u8d26\u6237\u8bbe\u7f6e","permalink":"/zh-CN/end-user-flows/account-settings/"}}');var i=t(86070),o=t(15658);const a={sidebar_position:6},r="Sign-out",l={},c=[{value:"Sign-in session",id:"sign-in-session",level:2},{value:"Components",id:"components",level:2},{value:"Centralized sign-in session managed by Logto",id:"centralized-sign-in-session-managed-by-logto",level:3},{value:"Distributed authentication status managed by the client applications",id:"distributed-authentication-status-managed-by-the-client-applications",level:2},{value:"Sign-out mechanisms",id:"sign-out-mechanisms",level:2},{value:"Clear tokens and local session at the client side",id:"clear-tokens-and-local-session-at-the-client-side",level:3},{value:"Clear sign-in session at Logto",id:"clear-sign-in-session-at-logto",level:3},{value:"Federated sign-out: Back-channel logout",id:"federated-sign-out-back-channel-logout",level:2},{value:"Sign-out methods in Logto SDKs",id:"sign-out-methods-in-logto-sdks",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Related resources",id:"related-resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Details:t,Url:s}=n;return t||u("Details",!0),s||u("Url",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"sign-out",children:"Sign-out"})}),"\n",(0,i.jsx)(n.p,{children:"The sign-out process in Logto (as an OIDC-based identity provider) is a multi-faced concept due to the involvement of both centralized sign-in session managed by Logto and the distributed authentication status managed by the client applications."}),"\n",(0,i.jsx)(n.h2,{id:"sign-in-session",children:"Sign-in session"}),"\n",(0,i.jsx)(n.p,{children:"To better understand the sign-out process, it's important to first understand how user sign-in sessions and their authentication status are managed in Logto."}),"\n",(0,i.jsx)(n.mermaid,{value:"  sequenceDiagram\n    autonumber\n    actor User\n\n    box Relying Party (RP)\n      participant Client as Client application\n    end\n\n    box Logto (IdP)\n      participant OIDC as OIDC provider\n      participant SignIn as Sign-in page\n    end\n\n    User ->> Client: Access web application\n    Client ->> OIDC: Redirect user to OIDC for authentication\n    OIDC --\x3e> OIDC: Check user's sign-in session\n    OIDC ->> SignIn: Prompt user to sign in\n    SignIn ->> OIDC: Identify user and submit the interaction result\n    OIDC --\x3e> OIDC: Establish user's sign-in session and authentication grant\n    OIDC ->> Client: Redirect user back to the web application with authentication code (Authorization Code flow)\n    Client ->> OIDC: Exchange the code for tokens\n    OIDC --\x3e> Client: Return tokens"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The user accesses the web application (RP)."}),"\n",(0,i.jsxs)(n.li,{children:["The client application redirects the user to Logto (IdP) for ",(0,i.jsx)(n.a,{href:"https://auth.wiki/authentication",children:"authentication"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"The OIDC provider checks the user's sign-in session status. If no session exists or the session has expired, the user is prompted to sign in."}),"\n",(0,i.jsx)(n.li,{children:"The user interacts with the sign-in page to get authenticated."}),"\n",(0,i.jsx)(n.li,{children:"After successful sign-in, Logto creates a new session for the user and redirects back to the client application with an authorization code."}),"\n",(0,i.jsx)(n.li,{children:"The OIDC provider creates a new sign-in session and authentication grant for the user."}),"\n",(0,i.jsxs)(n.li,{children:["The OIDC provider redirects the user back to the client with an authentication code (",(0,i.jsx)(n.a,{href:"https://auth.wiki/authorization-code-flow",children:"Authorization Code flow"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"The client receives the authentication code and exchanges it for tokens to access user information."}),"\n",(0,i.jsx)(n.li,{children:"Grant tokens to the client application."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,i.jsx)(n.h3,{id:"centralized-sign-in-session-managed-by-logto",children:"Centralized sign-in session managed by Logto"}),"\n",(0,i.jsx)(n.p,{children:"IIn the above flow, the centralized sign-in session is managed by Logto. The session is created when the user successfully signs in and is destroyed when the user signs out. The session is also destroyed when the user's session expires."}),"\n",(0,i.jsx)(n.p,{children:"Logto sign-in session is managed using session cookies. The session cookie is set when the user signs in. All the authentication requests are validated against the session cookie. If the session cookie is present and valid the user with be automatically authenticated and directly redirected to the client application with the authorization code. Otherwise, the user will be prompted to sign in."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Shared Logto session cookie\nFor a user who signs in to multiple client applications from the same user agent (e.g., browser), the user will have a shared session cookie under the Logto domain. This means that the user only needs to sign in once and get automatically authenticated for other client applications."}),"\n",(0,i.jsx)(n.mermaid,{value:" flowchart TD\n subgraph User [User agent A]\n   U[User]\n\n   subgraph Layer1 [Client domain A]\n     A[Client Application A]\n   end\n\n   subgraph Layer1 [Client domain B]\n     B[Client Application B]\n   end\n\n   subgraph Layer2 [Logto domain]\n       C{{Logto sign-in session?}}\n       D[sign-in page]\n   end\n end\n\n U --\x3e |Sign-in| A\n A --\x3e |Redirect to Logto| C\n U --\x3e |Sign-in| B\n B --\x3e |Redirect to Logto| C\n C --\x3e |No| D\n D --\x3e |Create session| C"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Isolated Logto session cookie\nFor a user who signs in to different client applications from different devices or browsers, the user will have isolated session cookies under the Logto domain. This means that the user needs to sign in for each client application separately."}),"\n",(0,i.jsx)(n.mermaid,{value:" flowchart TD\n U[User]\n\n subgraph DeviceA [User agent A]\n   subgraph Layer1 [Client domain A]\n     A[Client Application A]\n   end\n\n   subgraph Layer2 [Logto domain]\n       C{{Logto sign-in session?}}\n       D[sign-in page]\n   end\n end\n\n subgraph DeviceB [User agent B]\n   subgraph Layer3 [Client domain B]\n     B[Client Application B]\n   end\n\n   subgraph Layer4 [Logto domain]\n       E{{Logto sign-in session?}}\n       F[sign-in page]\n   end\n end\n\n U --\x3e |Sign-in| A\n A --\x3e |Redirect to Logto| C\n U --\x3e |Sign-in| B\n B --\x3e |Redirect to Logto| E\n C --\x3e |No| D\n E --\x3e |No| F\n D --\x3e |Create session| C\n F --\x3e |Create session| E"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"distributed-authentication-status-managed-by-the-client-applications",children:"Distributed authentication status managed by the client applications"}),"\n",(0,i.jsx)(n.p,{children:"Each client application maintains its own authentication status. Whether a Native, SPA, or Web application, all have their own way of managing the user's authentication status."}),"\n",(0,i.jsxs)(n.p,{children:["Upon successful sign-in, the client application may receive an ",(0,i.jsx)(n.a,{href:"https://auth.wiki/id-token",children:"ID token"})," and ",(0,i.jsx)(n.a,{href:"https://auth.wiki/access-token",children:"access token"}),". The client application can use the ID token to determine the user's identity and the access token to access the user's resources. The user's authentication status is represented by the access token's expiration time."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Native and SPA applications:\nClient application need to securely store and manage these tokens in order to maintain the user's authentication status. E.g., store the tokens in local storage or session storage, and clear the tokens when the user signs out."}),"\n",(0,i.jsx)(n.li,{children:"Web applications:\nWeb apps like those built with frameworks like Next.js often manage their own session for logged-in users alongside the tokens issued by Logto. Once the user signs in, and the web app receives the tokens from Logto, it can store the tokens at the client-side just like SPA applications, or it can store the tokens at the server-side and manage the session using cookies or other mechanisms."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sign-out-mechanisms",children:"Sign-out mechanisms"}),"\n",(0,i.jsx)(n.h3,{id:"clear-tokens-and-local-session-at-the-client-side",children:"Clear tokens and local session at the client side"}),"\n",(0,i.jsx)(n.p,{children:"On the client side, a simple sign-out involves clearing the local session and removing tokens (ID token, access token, refresh token) from local storage or session storage. This results in a client-side-only sign-out where the centralized session remains intact. Users sign out in this manner may still be able to access other applications under the same authorization server session until the centralized session expires or is actively destroyed."}),"\n",(0,i.jsx)(n.h3,{id:"clear-sign-in-session-at-logto",children:"Clear sign-in session at Logto"}),"\n",(0,i.jsxs)(n.p,{children:["To explicitly sign out the user and clear the session at Logto, the client application need to redirect the user to the Logto's ",(0,i.jsx)(n.strong,{children:"end session endpoint"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["E.g. ",(0,i.jsx)(n.code,{children:"https://{your-logto-domain}/oidc/session/end"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"end session endpoint"})," is a standard OIDC endpoint that allows the client application to notify the authorization server that the user has signed out. The endpoint will clear the centralized sign-in session at Logto."]}),"\n",(0,i.jsx)(n.p,{children:"Once the session is cleared, any subsequent authorization requests will require the user to sign in again."}),"\n",(0,i.jsxs)(n.p,{children:["If a ",(0,i.jsx)(n.strong,{children:"post-logout redirect URI"})," is provided, the user will be redirected to the specified URI after the session is cleared. Otherwise, the user will be redirected to the default post-logout page hosted by Logto."]}),"\n",(0,i.jsx)(n.h2,{id:"federated-sign-out-back-channel-logout",children:"Federated sign-out: Back-channel logout"}),"\n",(0,i.jsxs)(n.p,{children:["For more consistent sign-out management, Logto supports ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-backchannel-1_0-final.html",children:"back-channel logout"}),". Back-channel logout is a mechanism that allows Logto to notify all the client applications under the same sign-in session when the user signs out."]}),"\n",(0,i.jsx)(n.p,{children:"This is particularly useful in scenarios where the user signs out from one client application and expects to be signed out from all other client applications under the same Logto sign-in session."}),"\n",(0,i.jsx)(n.p,{children:"To enable back-channel logout for your client applications, go to the application details page in the Logto dashboard, and register a back-channel logout URI. Logto will send a logout token to all the registered URI when the user initiates a sign-out request from any client application."}),"\n",(0,i.jsxs)(n.p,{children:["If your client application requires the sign-in session to be included in the logout token, turn on the ",(0,i.jsx)(n.code,{children:"Is session required"})," settings in the back-channel logout configuration. A ",(0,i.jsx)(n.code,{children:"sid"})," claim will be included in the logout token to identify the user's sign-in session at Logto."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"User initiates a sign-out request from one client application."}),"\n",(0,i.jsx)(n.li,{children:"Logto receives the end session request, generates a logout token, and sends the logout token to all registered back-channel logout URIs."}),"\n",(0,i.jsx)(n.li,{children:"Each client application receives the logout token and perform sign-out actions."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Sign-out actions for each client application when receiving the logout token:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Validate the logout token."}),"\n",(0,i.jsx)(n.li,{children:"Clear the local session and remove tokens from local storage or session storage."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sign-out-methods-in-logto-sdks",children:"Sign-out methods in Logto SDKs"}),"\n",(0,i.jsx)(n.p,{children:"If you are integrating Logto with your client application using Logto's SDKs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For SPA and web applications, the ",(0,i.jsx)(n.code,{children:"client.signOut()"})," method will clear the local token storage and redirect the user to the Logto's end session endpoint. You may specify a ",(0,i.jsx)(n.strong,{children:"post-logout redirect URI"})," to redirect the user after the session is cleared."]}),"\n",(0,i.jsxs)(n.li,{children:["For native applications (including hybrid apps like ",(0,i.jsx)(n.strong,{children:"React Native"})," and ",(0,i.jsx)(n.strong,{children:"Flutter"}),"), only the local token storage is cleared. This is because in native application, we use the sessionless webview to handle the sign-in process. No session cookies are stored in the native browser, so there is no need to clear the sign-in session at Logto. Each authentication request is a standalone request that does not carry any session cookies."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["For native applications that does not support sessionless webview or does not recognize the ",(0,i.jsx)(n.code,{children:"emphasized"})," settings(Android app using ",(0,i.jsx)(n.strong,{children:"React Native"})," or ",(0,i.jsx)(n.strong,{children:"Flutter"})," SDK), you may force the user prompt to sign in again by passing the ",(0,i.jsx)(n.code,{children:"prompt=login"})," parameter in the authorization request."]})}),"\n",(0,i.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:" I'm not receiving the back-channel logout notifications."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ensure that the back-channel logout URI is correctly registered in the Logto dashboard."}),"\n",(0,i.jsx)(n.li,{children:"Ensure that your client application has an valid active sign-in session and is the same session as the one that initiated the sign-out request."}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"related-resources",children:"Related resources"}),"\n",(0,i.jsx)(s,{href:"https://blog.logto.io/oidc-back-channel-logout/",children:(0,i.jsx)(n.p,{children:"Understanding OIDC back-channel logout."})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},15658:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(30758);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);