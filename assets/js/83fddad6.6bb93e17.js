"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[19237],{65124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>h,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(86070),s=n(25710),a=n(93128),i=n(53754);const r={slug:"logto-x-hasura",authors:"gao",tags:["graphql","hasura","api"]},h="Logto x Hasura: How to use open-source auth + GraphQL solution to boost your project",l={permalink:"/blog/logto-x-hasura",source:"@site/blog/2022-08-20-logto-x-hasura/index.mdx",title:"Logto x Hasura: How to use open-source auth + GraphQL solution to boost your project",description:"Intro",date:"2022-08-20T00:00:00.000Z",tags:[{inline:!0,label:"graphql",permalink:"/blog/tags/graphql"},{inline:!0,label:"hasura",permalink:"/blog/tags/hasura"},{inline:!0,label:"api",permalink:"/blog/tags/api"}],readingTime:5.165,hasTruncateMarker:!0,authors:[{name:"Gao",title:"Founder of Silverhand",url:"https://github.com/gao-sun",imageURL:"https://github.com/gao-sun.png",key:"gao"}],frontMatter:{slug:"logto-x-hasura",authors:"gao",tags:["graphql","hasura","api"]},unlisted:!1,prevItem:{title:"The design considerations for a seamless sign-in experience (First Chapter)",permalink:"/blog/design-for-seamless-sie-1"},nextItem:{title:"TypeScript all-in-one: Monorepo with its pains and gains",permalink:"/blog/typescript-all-in-one"}},c={authorsImageUrls:[void 0]},d=[{value:"Intro",id:"intro",level:2},{value:"Get started",id:"get-started",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Set up API in Logto",id:"set-up-api-in-logto",level:3},{value:"Enable webhook authentication in Hasura",id:"enable-webhook-authentication-in-hasura",level:3},{value:"Send secured GraphQL requests",id:"send-secured-graphql-requests",level:2},{value:"Summary",id:"summary",level:3},{value:"Set default roles in Logto",id:"set-default-roles-in-logto",level:3},{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:3},{value:"Send requests",id:"send-requests",level:3},{value:"Recap",id:"recap",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,o.jsx)(t.p,{children:"When it comes to a new project, you usually cannot skip several things: APIs, authentication + authorization, identity, and end-user sign-in flow. It used to be hard to kick off these things because there are many concepts and technologies that spread widely: RESTful/GraphQL, web frontend, native client, connect clients with APIs, auth best practices to balance security and user experience, etc."}),"\n",(0,o.jsx)(t.p,{children:"Also, most of the works are \u201crepeating\u201d. I mean, they are needed and similar for almost every project, with some tweaks."}),"\n",(0,o.jsx)(t.p,{children:"Sounds scary and tedious? Don\u2019t panic. Today we have open source. With the two open-source projects below, things become not tricky :"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/logto-io/logto",children:"Logto"}),": Helps you build the sign-in, auth, and user identity within minutes."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/hasura/graphql-engine",children:"Hasura"}),": Blazing fast, instant real-time GraphQL APIs on your DB with fine-grained access control."]}),"\n"]}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{alt:"Logto x Hasura",src:a.A,width:"480"})}),"\n",(0,o.jsx)(t.p,{children:"In this article, we\u2019ll focus on connecting Logto and Hasura, which enables you to implement authentication, authorization, and GraphQL APIs without friction. Thus you can quickly jump into your business without rocket-science learning."}),"\n",(0,o.jsx)(t.h2,{id:"get-started",children:"Get started"}),"\n",(0,o.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(t.p,{children:["Since both ",(0,o.jsx)(t.a,{href:"https://docs.logto.io/docs/tutorials/get-started/",children:"Logto"})," and ",(0,o.jsx)(t.a,{href:"https://hasura.io/docs/latest/getting-started/index/",children:"Hasura"})," have a decent get-started guide, we assume you have read them and have a basic feeling. Access to a running instance of both is needed."]}),"\n",(0,o.jsx)(t.p,{children:"We assume the accessible endpoints are:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Logto: ",(0,o.jsx)(t.code,{children:"http://localhost:3001"})]}),"\n",(0,o.jsxs)(t.li,{children:["Hasura: ",(0,o.jsx)(t.code,{children:"http://localhost:8080"})]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["If you are using Docker/Docker Compose, for accessing of your machine(host)\u2019s ",(0,o.jsx)(t.code,{children:"localhost"}),", you can use the Docker magic string ",(0,o.jsx)(t.code,{children:"host.docker.internal"}),". In this case, the Logto endpoint will be ",(0,o.jsx)(t.code,{children:"http://host.docker.internal:3001"}),"."]})}),"\n",(0,o.jsx)(t.p,{children:"Also, we assume you have a preferred platform and framework to build the client app, say React or Next.js."}),"\n",(0,o.jsx)(t.h3,{id:"set-up-api-in-logto",children:"Set up API in Logto"}),"\n",(0,o.jsx)(t.p,{children:"In the left navigation sidebar of your Logto Admin Console, click \u201cAPI Resources\u201d, and you\u2019ll see the API Resource management page."}),"\n",(0,o.jsxs)(t.p,{children:["Then click the huge \u201c+ Create API Resource\u201d button in the top-right corner. In the opening modal, enter ",(0,o.jsx)(t.code,{children:"Hasura"})," for API name and ",(0,o.jsx)(t.code,{children:"https://hasura.api"})," for API identifier."]}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{alt:"Create API modal",src:i.A,width:"540"})}),"\n",(0,o.jsx)(t.p,{children:"We\u2019ll use this API identifier for the rest of our article. But feel free to change the values based on your preference."}),"\n",(0,o.jsx)(t.p,{children:"Click \u201cCreate API Resource\u201d, and it will show a message that indicates the resource has been successfully created. That\u2019s all we need in Logto for now."}),"\n",(0,o.jsx)(t.h3,{id:"enable-webhook-authentication-in-hasura",children:"Enable webhook authentication in Hasura"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://hasura.io/docs/latest/auth/index/",children:"Hasura uses role-based access management"}),", which handles authorization. So, we only need to figure out authentication. It supports two methods: Webhook and JWT. We choose ",(0,o.jsx)(t.a,{href:"https://hasura.io/docs/latest/auth/authentication/webhook/",children:"webhook"})," since it\u2019s more flexible."]}),"\n",(0,o.jsx)(t.p,{children:"To enable webhook authentication, you must set the admin secret and auth hook endpoint."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The admin secret is the key to having Hasura admin access when sending requests. It is required before enabling webhook authentication. Remember to keep it somewhere safe, and don\u2019t use it in production."}),"\n",(0,o.jsx)(t.li,{children:"The auth hook endpoint is a URL to send authentication requests."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["You can set them via ",(0,o.jsx)(t.a,{href:"https://hasura.io/docs/latest/auth/authentication/webhook/#configuring-webhook-mode",children:"environment variables"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"HASURA_GRAPHQL_ADMIN_SECRET: myadminsecretkey # Replace with your own secret\nHASURA_GRAPHQL_AUTH_HOOK: http://localhost:3001/api/authn/hasura?resource=https://hasura.api\n"})}),"\n",(0,o.jsx)(t.p,{children:"You may notice we use the API identifier filled in Logto to build the auth hook endpoint. It ensures that the user is passing the correct bearer token instead of a random one that may from malicious."}),"\n",(0,o.jsxs)(t.p,{children:["You need to update the auth hook endpoint if you have a different Logto endpoint or API indicator. Say you have ",(0,o.jsx)(t.code,{children:"https://logto.domain.com"})," as the Logto endpoint and ",(0,o.jsx)(t.code,{children:"https://graphql.domain.com"})," as the API identifier, then it will be:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"HASURA_GRAPHQL_AUTH_HOOK: https://logto.domain.com/api/authn/hasura?resource=https://graphql.domain.com\n"})}),"\n",(0,o.jsx)(t.p,{children:"From now, for every GraphQL request, Hasura will bring all request headers to the Logto auth hook endpoint, and Logto will respond properly."}),"\n",(0,o.jsx)(t.h2,{id:"send-secured-graphql-requests",children:"Send secured GraphQL requests"}),"\n",(0,o.jsx)(t.h3,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(t.p,{children:"Since we won\u2019t use the Hasura admin secret in production, every GraphQL request is secured by the following headers:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Authorization"})," The standard bearer token that Logto generates."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Expected-Role"})," The role you want Logto to show in the auth hook response."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["If the user that the ",(0,o.jsx)(t.code,{children:"Authorization"})," header indicates doesn\u2019t have the ",(0,o.jsx)(t.code,{children:"Expected-Role"}),", Logto will respond with ",(0,o.jsx)(t.code,{children:"401 Unauthorized"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Authorization"})," header requires a valid Access Token in JWT format with the Hasura API indicator for audience. Hold on - it\u2019s quite hard to remember and compose all these things. Fortunately we get Logto SDKs to simplify the geeky part."]}),"\n",(0,o.jsx)(t.h3,{id:"set-default-roles-in-logto",children:"Set default roles in Logto"}),"\n",(0,o.jsxs)(t.p,{children:["By default, only the first user will have an ",(0,o.jsx)(t.code,{children:"admin"})," role name. After that, Logto will NOT assign any role names to new users. But for Hasura, it is necessary to have a role to perform an authed request."]}),"\n",(0,o.jsxs)(t.p,{children:["While access control is still an under-the-hood feature of Logto, we don\u2019t want you to manually add the default role names. You can set an environment variable ",(0,o.jsx)(t.code,{children:"USER_DEFAULT_ROLE_NAMES"})," with a comma-separated string ",(0,o.jsx)(t.a,{href:"https://docs.logto.io/docs/references/core/configuration",children:"for Logto"}),". E.g.:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"USER_DEFAULT_ROLE_NAMES: user,good_user\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Then two roles ",(0,o.jsx)(t.code,{children:"user"})," and ",(0,o.jsx)(t.code,{children:"good_user"})," will be automatically added to newly created users. It will reflect in both ",(0,o.jsx)(t.code,{children:"users"})," table and Access Tokens."]}),"\n",(0,o.jsx)(t.h3,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,o.jsxs)(t.p,{children:["Follow the ",(0,o.jsx)(t.a,{href:"https://docs.logto.io/docs/recipes/integrate-logto/",children:"integration guide"})," to integrate a Logto SDK in your client app. It enables not only the ability to generate a valid Access Token for GraphQL requests, but also a smooth sign-in experience for your end-users."]}),"\n",(0,o.jsxs)(t.p,{children:["Once you finish the guide, we need one tiny modification to the ",(0,o.jsx)(t.code,{children:"LogtoConfig"}),": Add the API indicator you created in Logto Admin Console to ",(0,o.jsx)(t.code,{children:"resources"}),". Taking React SDK as an example:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"const config: LogtoConfig = {\n  endpoint: 'http://localhost:3001',\n  appId: '<your-application-id>',\n  resources: ['https://hasura.api'], // Add this line\n};\n"})}),"\n",(0,o.jsx)(t.h3,{id:"send-requests",children:"Send requests"}),"\n",(0,o.jsxs)(t.p,{children:["Finally! After the user is signed in, use ",(0,o.jsx)(t.code,{children:"getAccessToken()"})," in Logto SDK to fetch the Access Token for Hasura GraphQL requests:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"const accessToken = await logto.getAccessToken('https://hasura.api');\n\n// Before sending the request\nrequest.headers.set('Authorization', `Bearer ${accessToken}`);\nrequest.headers.set('Expected-Role', 'user');\n"})}),"\n",(0,o.jsx)(t.h2,{id:"recap",children:"Recap"}),"\n",(0,o.jsx)(t.p,{children:"With the effort above, we successfully implemented all the non-skippable things in the intro:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"A database-schema-driven GraphQL API endpoint"}),"\n",(0,o.jsx)(t.li,{children:"An auth and identity service on top of OIDC protocol"}),"\n",(0,o.jsx)(t.li,{children:"The complete end-user sign-in flow and auth state management"}),"\n",(0,o.jsx)(t.li,{children:"Secured API access based on user identity and roles"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Not that hard, right? If you meet any issues, feel free to join the ",(0,o.jsx)(t.a,{href:"https://discord.gg/vRvwuwgpVX",children:"Logto"})," or ",(0,o.jsx)(t.a,{href:"https://discord.gg/hasura",children:"Hasura"})," discord server to have a live chat with the team."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},53754:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/create-api-c5c6e125bce972eb32323f2d4e27b436.png"},93128:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/logos-3fc88b5045a437c285845ee9fe4b015c.png"},25710:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(30758);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);