"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[72609],{31260:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=i(86070),s=i(15658);const r={sidebar_position:7.1},t="\ud83d\udc64 User profiles",a={id:"docs/recipes/user-profile/README",title:"\ud83d\udc64 User profiles",description:"In previous sections, we demonstrated how to manage your users using Console, or through Management API. This is a straightforward process for those in the role of administrator. However, it is also important for the regular users to update their profiles on their own.",source:"@site/docs/docs/recipes/user-profile/README.md",sourceDirName:"docs/recipes/user-profile",slug:"/docs/recipes/user-profile/",permalink:"/docs/recipes/user-profile/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/user-profile/README.md",tags:[],version:"current",sidebarPosition:7.1,frontMatter:{sidebar_position:7.1},sidebar:"docsSidebar",previous:{title:"idp-initiated-sso",permalink:"/docs/recipes/single-sign-on/idp-initiated-sso"},next:{title:"\ud83d\udcdc Inspect audit logs",permalink:"/docs/recipes/inspect-audit-logs/"}},d={},c=[{value:"Get Started",id:"get-started",level:2},{value:"Bring your own backend service",id:"bring-your-own-backend-service",level:3},{value:"Implement a user profile page",id:"implement-a-user-profile-page",level:3},{value:"Submit profile data",id:"submit-profile-data",level:3},{value:"Basic user information",id:"basic-user-information",level:4},{value:"Verify and reset password",id:"verify-and-reset-password",level:4},{value:"Extend your business model with custom data",id:"extend-your-business-model-with-custom-data",level:4},{value:"(Optional) Validate verification code",id:"optional-validate-verification-code",level:3},{value:"Recap",id:"recap",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"-user-profiles",children:"\ud83d\udc64 User profiles"})}),"\n",(0,o.jsxs)(n.p,{children:["In previous sections, we demonstrated how to manage your users ",(0,o.jsx)(n.a,{href:"/docs/recipes/manage-users/admin-console",children:"using Console"}),", or through ",(0,o.jsx)(n.a,{href:"/docs/recipes/manage-users/management-api",children:"Management API"}),". This is a straightforward process for those in the role of administrator. However, it is also important for the regular users to update their profiles on their own."]}),"\n",(0,o.jsx)(n.p,{children:"To enable this, you will need to create your own profile page with the help of the Management APIs."}),"\n",(0,o.jsx)(n.h2,{id:"get-started",children:"Get Started"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"In order to call Logto Management APIs, a backend service is required for your app."}),"\n",(0,o.jsxs)(n.li,{children:["Make sure your backend service has acquired a pair of API key and API secret through the ",(0,o.jsx)(n.a,{href:"/quick-starts/m2m",children:"machine-to-machine"})," process."]}),"\n"]})}),"\n",(0,o.jsx)(n.p,{children:"Assuming that your application has both frontend and backend, and your backend connects to Logto service through the M2M mechanism."}),"\n",(0,o.jsxs)(n.p,{children:["On your app's frontend, create a profile page for the user to input their profile information, such as their ",(0,o.jsx)(n.em,{children:"name and email address"}),". Usually it also consists of your own business model, such as ",(0,o.jsx)(n.em,{children:"age, gender, social security number, mailing address, payment methods, etc"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Then in most cases your overall flow would be like this:"}),"\n",(0,o.jsx)(n.mermaid,{value:"graph LR\n  subgraph App Frontend\n    UPP(User Profile Page)\n  end\n\n  subgraph App Backend\n    direction LR\n    S1(Fetch Profile API)\n    S2(Submit Profile API)\n\n    M1(OIDC User Model)\n    M2(Business Data Model)\n\n    S1 <---\x3e M1\n    S1 <---\x3e M2\n    S2 ---\x3e M1\n    S2 ---\x3e M2\n  end\n\n  subgraph App DB\n    DB[(Your own DB)]\n  end\n\n  subgraph Logto\n    direction LR\n    MA(Management APIs)\n\n    LD[(Logto DB)]\n\n    MA <---\x3e LD\n  end\n\n  UPP <---\x3e S1\n  UPP ---\x3e S2\n  M2 <---\x3e DB\n  M1 <---\x3e|Machine To Machine| MA"}),"\n",(0,o.jsx)(n.p,{children:"Now let's consolidate the steps:"}),"\n",(0,o.jsx)(n.h3,{id:"bring-your-own-backend-service",children:"Bring your own backend service"}),"\n",(0,o.jsxs)(n.p,{children:["Implement your own backend API services for your application, and protect your user requests with Logto. (See ",(0,o.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"protect your API"})," for details)"]}),"\n",(0,o.jsx)(n.h3,{id:"implement-a-user-profile-page",children:"Implement a user profile page"}),"\n",(0,o.jsxs)(n.p,{children:["In your client application, create a new page for the user's profile. This can be done using a variety of front-end development frameworks. Check our ",(0,o.jsx)(n.a,{href:"/docs/recipes/integrate-logto/",children:"SDK integration guide"})," and choose your favorite language to get started."]}),"\n",(0,o.jsx)(n.p,{children:"It is always recommended to fetch the profile data in prior, and pre-fill the form fields. You can do it by calling these two functions from your client app (with integration of Logto SDK):"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["SDK function ",(0,o.jsx)(n.code,{children:"getIdTokenClaims"})," to decode basic user claims cached in ID Token on client side"]}),"\n",(0,o.jsxs)(n.li,{children:["SDK function ",(0,o.jsx)(n.code,{children:"fetchUserInfo"})," to fetch user data from Logto service"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, you can also call the Management API ",(0,o.jsx)(n.code,{children:"GET /api/users/:userId"})," from your backend service, through the M2M mechanism."]}),"\n",(0,o.jsx)(n.h3,{id:"submit-profile-data",children:"Submit profile data"}),"\n",(0,o.jsx)(n.p,{children:"After the user has finished editing the form on their profile page, the new changes need to be saved."}),"\n",(0,o.jsx)(n.p,{children:"Typically, your app client will call your backend service and send the new data in its request body. Your backend service should then dispatch the new data to either Logto or your own database, depending on your business model."}),"\n",(0,o.jsx)(n.h4,{id:"basic-user-information",children:"Basic user information"}),"\n",(0,o.jsxs)(n.p,{children:["For basic user information, such as user name, email address, phone number, etc., you can use the ",(0,o.jsx)(n.code,{children:"PATCH /api/users/:userId"})," API to update the user information in Logto. This API should be called from your backend service through M2M."]}),"\n",(0,o.jsx)(n.h4,{id:"verify-and-reset-password",children:"Verify and reset password"}),"\n",(0,o.jsxs)(n.p,{children:["Before allowing the user to update their password, you should verify their identity. To do this, call ",(0,o.jsx)(n.code,{children:"POST /api/users/:userId/password/verify"})," to check if the user knows their current password. If the user has forgotten their current password, they can use a verification code to help with identity verification."]}),"\n",(0,o.jsxs)(n.p,{children:["To update the user's password, simply call ",(0,o.jsx)(n.code,{children:"PATCH /api/users/:userId/password"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You might also want to check if the user has a password set up already. To do this, use the ",(0,o.jsx)(n.code,{children:"GET /api/users/:userId/has-password API"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"extend-your-business-model-with-custom-data",children:"Extend your business model with custom data"}),"\n",(0,o.jsx)(n.p,{children:"In real-world scenarios, you might have specific business models associated with the user profile, such as age, gender, ethnicity, mailing address, payment methods, etc. Usually, sensitive information should be stored in your own database for security reasons. However, if no sensitive data is concerned, you can alternatively store the data in Logto using the custom data feature."}),"\n",(0,o.jsxs)(n.p,{children:["To fetch and update custom data, use the ",(0,o.jsx)(n.code,{children:"GET /api/users/:userId/custom-data"})," and ",(0,o.jsx)(n.code,{children:"PATCH /api/users/:userId/custom-data"})," APIs."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Check the ",(0,o.jsx)(n.a,{href:"/docs/references/users/custom-data",children:"Custom Data"})," section for more details."]})}),"\n",(0,o.jsx)(n.h3,{id:"optional-validate-verification-code",children:"(Optional) Validate verification code"}),"\n",(0,o.jsx)(n.p,{children:"If your user wants to change either email address or phone number, you may want to validate them before submitting the entire form, as this ensures all emails and phone numbers are verified in your system, which plays a vital part if you want to enable passwordless sign-in methods (e.g. email and verification code) in your application."}),"\n",(0,o.jsx)(n.p,{children:"In order to do this, you only have to:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Configure an email or phone connector in Admin Console"}),"\n",(0,o.jsxs)(n.li,{children:["Make sure to add a message template with ",(0,o.jsx)(n.code,{children:"Generic"})," usage type in the config of the above connector"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Then, from your backend service, you can call the following Logto Management APIs to send and validate the code:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"POST /api/verification-code"})," to send verification code to a given email or phone"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"POST /api/verification-code/verify"})," to verify the code against a given email or phone"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Check the ",(0,o.jsx)(n.a,{href:"https://openapi.logto.io/group/endpoint-verification-codes",children:"API references"})," for more details."]})}),"\n",(0,o.jsx)(n.h2,{id:"recap",children:"Recap"}),"\n",(0,o.jsx)(n.p,{children:"Implementing a user profile can be a complex task. While we initially considered providing an out-of-the-box solution, we abandoned this approach after thorough consideration. User profiles typically consist of a combination of standard OpenID Connect (OIDC) user claims and the unique requirements of your business model. As a result, the best approach is to create your own custom profile page and backend services and then connect them to Logto via our Management APIs."}),"\n",(0,o.jsx)(n.p,{children:"To summarize:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Develop your own custom frontend profile page and backend service."}),"\n",(0,o.jsx)(n.li,{children:"Connect your backend service to Logto through Machine-to-Machine (M2M) communication."}),"\n",(0,o.jsx)(n.li,{children:"Utilize Logto's Management APIs for interaction with Logto."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var o=i(30758);const s={},r=o.createContext(s);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);