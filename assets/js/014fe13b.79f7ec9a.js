"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[47973],{42235:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"docs/recipes/interact-with-account-api/README","title":"\ud83d\udc64 Interact with Account API","description":"What is Logto Account API","source":"@site/docs/docs/recipes/interact-with-account-api/README.mdx","sourceDirName":"docs/recipes/interact-with-account-api","slug":"/docs/recipes/interact-with-account-api/","permalink":"/docs/recipes/interact-with-account-api/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/interact-with-account-api/README.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"docsSidebar","previous":{"title":"\ud83d\ude9d Interact with Management API","permalink":"/docs/recipes/interact-with-management-api/"},"next":{"title":"\ud83e\uddd1\u200d\ud83d\ude80 Manage users","permalink":"/docs/recipes/manage-users/"}}');var a=i(86070),o=i(15658);const c={sidebar_position:7},r="\ud83d\udc64 Interact with Account API",s={},d=[{value:"What is Logto Account API",id:"what-is-logto-account-api",level:2},{value:"How to enable Acount API",id:"how-to-enable-acount-api",level:2},{value:"How to access Account API",id:"how-to-access-account-api",level:2},{value:"Fetch an access token",id:"fetch-an-access-token",level:3},{value:"Access Account API using access token",id:"access-account-api-using-access-token",level:3},{value:"Manage basic account information",id:"manage-basic-account-information",level:2},{value:"Retrieve user account information",id:"retrieve-user-account-information",level:3},{value:"Update basic account information",id:"update-basic-account-information",level:3},{value:"Manage identifiers and other sensitive information",id:"manage-identifiers-and-other-sensitive-information",level:2},{value:"Get a verification record id",id:"get-a-verification-record-id",level:3},{value:"Verify the user&#39;s password",id:"verify-the-users-password",level:4},{value:"Verify by sending a verification code to the user&#39;s email or phone",id:"verify-by-sending-a-verification-code-to-the-users-email-or-phone",level:4},{value:"Send request with verification record id",id:"send-request-with-verification-record-id",level:3},{value:"Update or link new email",id:"update-or-link-new-email",level:3},{value:"Remove the user&#39;s email",id:"remove-the-users-email",level:3},{value:"Manage phone",id:"manage-phone",level:3},{value:"Link a new social connection",id:"link-a-new-social-connection",level:3},{value:"Remove a social connection",id:"remove-a-social-connection",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"-interact-with-account-api",children:"\ud83d\udc64 Interact with Account API"})}),"\n",(0,a.jsx)(n.h2,{id:"what-is-logto-account-api",children:"What is Logto Account API"}),"\n",(0,a.jsx)(n.p,{children:"The Logto Acount API is a comprehensive set of APIs that gives the end users direct API access without needing to go through the Management API, here is the highlights:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Direct access: The Account API empowers end users to directly access and manage their own account profile without requiring the relay of Management API."}),"\n",(0,a.jsx)(n.li,{children:"User profile and identities management: Users can fully manage their profiles and security settings, including the ability to update identity information like email, phone, and password, as well as manage social connections. MFA and SSO support are coming soon."}),"\n",(0,a.jsx)(n.li,{children:"Global access control: Admin has full, global control over access settings, can customize each fields."}),"\n",(0,a.jsxs)(n.li,{children:["Seamless authorization: Authorizing is easier than ever! Simply use ",(0,a.jsx)(n.code,{children:"client.getAccessToken()"})," to obtain an opaque access token for OP (Logto), and attach it to the Authorization header as ",(0,a.jsx)(n.code,{children:"Bearer <access_token>"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"With the Logto Account API, you can build a custom account management system like a profile page that is fully integrated with Logto."}),"\n",(0,a.jsx)(n.p,{children:"Some frequently usage are listed below:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Retrieve user profile"}),"\n",(0,a.jsx)(n.li,{children:"Update user profile"}),"\n",(0,a.jsx)(n.li,{children:"Update user password"}),"\n",(0,a.jsx)(n.li,{children:"Update user identities including email, phone, and social connections"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To learn more about the APIs that are available, please visit ",(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-getprofile",children:"Logto Account API Reference"})," and ",(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-createverificationbypassword",children:"Logto Verification API Reference"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-enable-acount-api",children:"How to enable Acount API"}),"\n",(0,a.jsxs)(n.p,{children:["By default, the Account API is disabled. To enable it, you need to use the ",(0,a.jsx)(n.a,{href:"/docs/recipes/interact-with-management-api/",children:"Management API"})," to update the global settings."]}),"\n",(0,a.jsxs)(n.p,{children:["The API endpoint ",(0,a.jsx)(n.code,{children:"/api/account-center"})," can be used to retrieve and update the account center settings, you can use it to enable or disable the Account API, and customize the fields."]}),"\n",(0,a.jsx)(n.p,{children:"Example request:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH https://[tenant-id].logto.app/api/account-center \\\n  -H \'authorization: Bearer <access_token for Logto Management API>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"enabled":true,"fields":{"username":"Edit"}}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"enabled"})," field is used to enable or disable the Account API, and the ",(0,a.jsx)(n.code,{children:"fields"})," field is used to customize the fields, the value can be ",(0,a.jsx)(n.code,{children:"Off"}),", ",(0,a.jsx)(n.code,{children:"Edit"}),", ",(0,a.jsx)(n.code,{children:"ReadOnly"}),". The default value is ",(0,a.jsx)(n.code,{children:"Off"}),". The list of fields:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"name"}),": The name field."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"avatar"}),": The avatar field."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"profile"}),": The profile field, including its sub fields."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"username"}),": The username field."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"email"}),": The email field."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"phone"}),": The phone field."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"password"}),": The password field, when getting, it will return ",(0,a.jsx)(n.code,{children:"true"})," if the user has set a password, otherwise ",(0,a.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"social"}),": Social connections."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Learn more about the API details in [Logto Management API Reference](",(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-getaccountcentersettings",children:"https://openapi.logto.io/operation/operation-getaccountcentersettings"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"how-to-access-account-api",children:"How to access Account API"}),"\n",(0,a.jsx)(n.h3,{id:"fetch-an-access-token",children:"Fetch an access token"}),"\n",(0,a.jsxs)(n.p,{children:["After setting up the SDK in your application, you can use the ",(0,a.jsx)(n.code,{children:"client.getAccessToken()"})," method to fetch an access token. This token is an opaque token that can be used to access the Account API."]}),"\n",(0,a.jsxs)(n.p,{children:["If you are not using the official SDK, you should set the ",(0,a.jsx)(n.code,{children:"resource"})," to empty for the access token grant request to ",(0,a.jsx)(n.code,{children:"/oidc/token"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"access-account-api-using-access-token",children:"Access Account API using access token"}),"\n",(0,a.jsxs)(n.p,{children:["You should put the access token in the ",(0,a.jsx)(n.code,{children:"Authorization"})," field of HTTP headers with the Bearer format (",(0,a.jsx)(n.code,{children:"Bearer YOUR_TOKEN"}),") when you're interacting with the Account API."]}),"\n",(0,a.jsx)(n.p,{children:"And example to get the user account information:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl https://[tenant-id].logto.app/api/my-account \\\n  -H 'authorization: Bearer <access_token>'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"manage-basic-account-information",children:"Manage basic account information"}),"\n",(0,a.jsx)(n.h3,{id:"retrieve-user-account-information",children:"Retrieve user account information"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl https://[tenant-id].logto.app/api/my-account \\\n  -H 'authorization: Bearer <access_token>'\n"})}),"\n",(0,a.jsx)(n.p,{children:"The response body would be like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "id": "...",\n  "username": "...",\n  "name": "...",\n  "avatar": "..."\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"The response fields may vary depending on the account center settings."}),"\n",(0,a.jsx)(n.h3,{id:"update-basic-account-information",children:"Update basic account information"}),"\n",(0,a.jsx)(n.p,{children:"Basic account information includes the username, name, avatar, and profile."}),"\n",(0,a.jsxs)(n.p,{children:["To update username, name, and avatar, you can use the ",(0,a.jsx)(n.code,{children:"PATCH /api/my-account"})," endpoint."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH https://[tenant-id].logto.app/api/my-account \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"username":"...","name":"...","avatar":"..."}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["To update profile, you can use the ",(0,a.jsx)(n.code,{children:"PATCH /api/my-account/profile"})," endpoint."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH https://[tenant-id].logto.app/api/my-account/profile \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"familyName":"...","givenName":"..."}\'\n'})}),"\n",(0,a.jsx)(n.h2,{id:"manage-identifiers-and-other-sensitive-information",children:"Manage identifiers and other sensitive information"}),"\n",(0,a.jsx)(n.p,{children:"For security reasons, the Account API requires another layer of authorization for the operations that involve identifiers and other sensitive information."}),"\n",(0,a.jsx)(n.h3,{id:"get-a-verification-record-id",children:"Get a verification record id"}),"\n",(0,a.jsx)(n.p,{children:"First, you need to get a verification record id, this can be used to verify the user's identity when updating identifiers."}),"\n",(0,a.jsx)(n.p,{children:"To get a verification record id, you can verify the user's password or send a verification code to the user's email or phone."}),"\n",(0,a.jsx)(n.h4,{id:"verify-the-users-password",children:"Verify the user's password"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X POST https://[tenant-id].logto.app/api/verifications/password \\\n  -H 'authorization: Bearer <access_token>' \\\n  -H 'content-type: application/json' \\\n  --data-raw '{\"password\":\"...\"}'\n"})}),"\n",(0,a.jsx)(n.p,{children:"The response body would be like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "verificationRecordId": "...",\n  "expiresAt": "..."\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"verify-by-sending-a-verification-code-to-the-users-email-or-phone",children:"Verify by sending a verification code to the user's email or phone"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["To use this method, you need to ",(0,a.jsx)(n.a,{href:"/docs/recipes/configure-connectors/email-connector/configure-popular-email-service",children:"configure the email connector"})," or ",(0,a.jsx)(n.a,{href:"/docs/recipes/configure-connectors/sms-connector/configure-sms-connector",children:"SMS connector"}),", and make sure the ",(0,a.jsx)(n.code,{children:"UserPermissionValidation"})," template is configured."]})}),"\n",(0,a.jsx)(n.p,{children:"Take email as an example, request a new verification code and get the verification record id:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST https://[tenant-id].logto.app/api/verifications/verification-code \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"identifier":{"type":"email","value":"..."}}\'\n'})}),"\n",(0,a.jsx)(n.p,{children:"The response body would be like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "verificationRecordId": "...",\n  "expiresAt": "..."\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Upon receiving the verification code, you can use it to update the verification status of the verification record."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH https://[tenant-id].logto.app/api/verifications/verification-code/verify \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"identifier":{"type":"email","value":"..."},"verificationId":"...","code":"123456"}\'\n'})}),"\n",(0,a.jsx)(n.p,{children:"After verifying the code, you can now use the verification record id to update the user's identifier."}),"\n",(0,a.jsx)(n.h3,{id:"send-request-with-verification-record-id",children:"Send request with verification record id"}),"\n",(0,a.jsxs)(n.p,{children:["When sending a request to update the user's identifier, you need to attach the verification record id to the request header with the ",(0,a.jsx)(n.code,{children:"logto-verification-id"})," field."]}),"\n",(0,a.jsx)(n.h3,{id:"update-or-link-new-email",children:"Update or link new email"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["To use this method, you need to ",(0,a.jsx)(n.a,{href:"/docs/recipes/configure-connectors/email-connector/configure-popular-email-service",children:"configure the email connector"}),", and make sure the ",(0,a.jsx)(n.code,{children:"BindNewIdentifier"})," template is configured."]})}),"\n",(0,a.jsx)(n.p,{children:"To update or link a new email, you should first prove the ownership of the email."}),"\n",(0,a.jsxs)(n.p,{children:["Call the ",(0,a.jsx)(n.code,{children:"POST /api/verifications/verification-code"})," endpoint to request a verification code."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST https://[tenant-id].logto.app/api/verifications/verification-code \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"identifier":{"type":"email","value":"..."}}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You will find a ",(0,a.jsx)(n.code,{children:"verificationId"})," in the response, and receive a verification code in the email, use it to verify the email."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X PATCH https://[tenant-id].logto.app/api/verifications/verification-code/verify \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"identifier":{"type":"email","value":"..."},"verificationId":"...","code":"..."}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["After verifying the code, you can now update the user's email, set the ",(0,a.jsx)(n.code,{children:"verificationId"})," to the request body as ",(0,a.jsx)(n.code,{children:"newIdentifierVerificationRecordId"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X PATCH https://[tenant-id].logto.app/api/my-account/primary-email \\\n  -H 'authorization: Bearer <access_token>' \\\n  -H 'logto-verification-id: <verification_record_id>' \\\n  -H 'content-type: application/json' \\\n  --data-raw '{\"email\":\"...\",\"newIdentifierVerificationRecordId\":\"...\"}'\n"})}),"\n",(0,a.jsx)(n.h3,{id:"remove-the-users-email",children:"Remove the user's email"}),"\n",(0,a.jsxs)(n.p,{children:["To remove the user's email, you can use the ",(0,a.jsx)(n.code,{children:"DELETE /api/my-account/primary-email"})," endpoint."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X DELETE https://[tenant-id].logto.app/api/my-account/primary-email \\\n  -H 'authorization: Bearer <access_token>' \\\n  -H 'logto-verification-id: <verification_record_id>'\n"})}),"\n",(0,a.jsx)(n.h3,{id:"manage-phone",children:"Manage phone"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["To use this method, you need to ",(0,a.jsx)(n.a,{href:"/docs/recipes/configure-connectors/sms-connector/configure-sms-connector",children:"configure the SMS connector"}),", and make sure the ",(0,a.jsx)(n.code,{children:"BindNewIdentifier"})," template is configured."]})}),"\n",(0,a.jsxs)(n.p,{children:["Similar to updating email, you can use the ",(0,a.jsx)(n.code,{children:"PATCH /api/my-account/primary-phone"})," endpoint to update or link a new phone. And use the ",(0,a.jsx)(n.code,{children:"DELETE /api/my-account/primary-phone"})," endpoint to remove the user's phone."]}),"\n",(0,a.jsx)(n.h3,{id:"link-a-new-social-connection",children:"Link a new social connection"}),"\n",(0,a.jsx)(n.p,{children:"To link a new social connection, first you should request an authorization URL:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST https://[tenant-id].logto.app/api/verifications/social \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"connectorId":"...","redirectUri":"...","state":"..."}\'\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"connectorId"}),": The ID of the ",(0,a.jsx)(n.a,{href:"../configure-connectors",children:"social connector"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"redirectUri"}),": The redirect URI after the user authorizes the application, you should host a web page at this URL and capture the callback."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"state"}),": The state to be returned after the user authorizes the application, it is a random string that is used to prevent CSRF attacks."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["In the response, you will find a ",(0,a.jsx)(n.code,{children:"verificationRecordId"}),", keep it for later use."]}),"\n",(0,a.jsxs)(n.p,{children:["After the user authorizes the application, you will receive a callback at the ",(0,a.jsx)(n.code,{children:"redirectUri"})," with the ",(0,a.jsx)(n.code,{children:"state"})," parameter. Then you can use the ",(0,a.jsx)(n.code,{children:"POST /api/verifications/social/verify"})," endpoint to verify the social connection."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST https://[tenant-id].logto.app/api/verifications/social/verify \\\n  -H \'authorization: Bearer <access_token>\' \\\n  -H \'content-type: application/json\' \\\n  --data-raw \'{"connectorData":"...","verificationRecordId":"..."}\'\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"connectorData"})," is the data returned by the social connector after the user authorizes the application, you need to parse and get the query parameters from the ",(0,a.jsx)(n.code,{children:"redirectUri"})," in your callback page, and wrap them as a JSON as the value of the ",(0,a.jsx)(n.code,{children:"connectorData"})," field."]}),"\n",(0,a.jsxs)(n.p,{children:["Finally, you can use the ",(0,a.jsx)(n.code,{children:"PATCH /api/my-account/identities"})," endpoint to link the social connection."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X PATCH https://[tenant-id].logto.app/api/my-account/identities \\\n  -H 'authorization: Bearer <access_token>' \\\n  -H 'logto-verification-id: <verification_record_id>' \\\n  -H 'content-type: application/json' \\\n  --data-raw '{\"newIdentifierVerificationRecordId\":\"...\"}'\n"})}),"\n",(0,a.jsx)(n.h3,{id:"remove-a-social-connection",children:"Remove a social connection"}),"\n",(0,a.jsxs)(n.p,{children:["To remove a social connection, you can use the ",(0,a.jsx)(n.code,{children:"DELETE /api/my-account/identities"})," endpoint."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -X DELETE https://[tenant-id].logto.app/api/my-account/identities/[connector_target_id] \\\n  -H 'authorization: Bearer <access_token>' \\\n  -H 'logto-verification-id: <verification_record_id>'\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var t=i(30758);const a={},o=t.createContext(a);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);