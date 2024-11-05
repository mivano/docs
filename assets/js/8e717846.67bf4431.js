"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[90401],{65167:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"quick-starts/database/supabase/README","title":"Integrate Logto with Supabase","description":"Supabase basics","source":"@site/docs/quick-starts/database/supabase/README.mdx","sourceDirName":"quick-starts/database/supabase","slug":"/quick-starts/supabase","permalink":"/quick-starts/supabase","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/quick-starts/database/supabase/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/quick-starts/supabase","sidebar_label":"Supabase","sidebar_custom_props":{"description":"Integrate Logto with Supabase.","logoFilename":"supabase.svg"}},"sidebar":"quickStartSidebar","previous":{"title":"Hasura","permalink":"/quick-starts/hasura"}}');var n=s(86070),i=s(15658);const o={slug:"/quick-starts/supabase",sidebar_label:"Supabase",sidebar_custom_props:{description:"Integrate Logto with Supabase.",logoFilename:"supabase.svg"}},r="Integrate Logto with Supabase",c={},d=[{value:"Supabase basics",id:"supabase-basics",level:2},{value:"Add user data to the Supabase requests",id:"add-user-data-to-the-supabase-requests",level:3},{value:"Create Row-Level Security policy",id:"create-row-level-security-policy",level:3},{value:"Basic integration process with Logto",id:"basic-integration-process-with-logto",level:3},{value:"Logto integration",id:"logto-integration",level:2},{value:"Native app or SPA",id:"native-app-or-spa",level:3},{value:"Traditional web app",id:"traditional-web-app",level:3},{value:"Machine-to-machine app",id:"machine-to-machine-app",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"integrate-logto-with-supabase",children:"Integrate Logto with Supabase"})}),"\n",(0,n.jsx)(t.h2,{id:"supabase-basics",children:"Supabase basics"}),"\n",(0,n.jsxs)(t.p,{children:["Supabase utilizes ",(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/current/ddl-rowsecurity.html",children:"Postgres's Row-Level Security"})," to control data access permissions. In simple terms, by creating Row Level Security policies for tables in the database, we can restrict and manage who can read, write, and update data in a table."]}),"\n",(0,n.jsx)(t.p,{children:'Let\'s assume you have a table named "posts" in your database, with the following content:'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Posts table",src:s(44072).A+"",width:"2000",height:"339"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"user_id"})," field in the table represents the user to whom each post data belongs. You can restrict each user to only access their own post data based on the ",(0,n.jsx)(t.code,{children:"user_id"})," field."]}),"\n",(0,n.jsx)(t.p,{children:"However, before this can be implemented, Supabase needs to be able to identify the current user accessing the database."}),"\n",(0,n.jsx)(t.h3,{id:"add-user-data-to-the-supabase-requests",children:"Add user data to the Supabase requests"}),"\n",(0,n.jsx)(t.p,{children:"Thanks to Supabase's support for JWT, when our application interacts with Supabase, we can generate a JWT containing user data using the JWT secret provided by Supabase. We then use this JWT as the Authentication header when making requests. Upon receiving the request, Supabase automatically verifies the validity of the JWT and allows access to the data contained within it throughout subsequent processes."}),"\n",(0,n.jsx)(t.p,{children:"Firstly, we can obtain the JWT secret provided by Supabase from the \u201cProject Settings\u201d in the Supabase dashboard:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Supabase API settings page",src:s(21125).A+"",width:"2000",height:"1018"})}),"\n",(0,n.jsx)(t.p,{children:"Then, when we use the Supabase SDK to make requests to Supabase, we utilize this secret to generate our JWT and attach it as the Authentication header to the request. (Please note that this process occurs within your application's backend service, and the JWT secret should never be exposed to third parties)."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import { createClient } from '@supabase/supabase-js';\nimport { sign } from 'jsonwebtoken';\n\n/\n * Note:\n * You can find the SUPABASE_URL, SUPABASE_ANON_KEY in the same place where you find the JWT Secret.\n */\nconst SUPABASE_URL = process.env.SUPABASE_URL;\nconst SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;\n\nconst SUPABASE_JWT_SECRET = process.env.SUPABASE_JWT_SECRET;\n\nexport const getSupabaseClient = (userId) => {\n  const jwtPayload = {\n    userId,\n  };\n\n  const jwt = sign(jwtPayload, SUPABASE_JWT_SECRET, {\n    expiresIn: '1h', // Just for demonstration\n  });\n\n  const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {\n    global: {\n      headers: {\n        Authorization: `Bearer ${jwt}`,\n      },\n    },\n  });\n\n  return client;\n};\n"})}),"\n",(0,n.jsx)(t.p,{children:"Next, navigate to the SQL Editor in the Supabase dashboard and create a function to retrieve the userId carried in the request:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Create get user ID function",src:s(51996).A+"",width:"2000",height:"1054"})}),"\n",(0,n.jsx)(t.p,{children:"The code used in the image is as follows:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"create or replace function auth.user_id() returns text as $$\n  select nullif(current_setting('request.jwt.claims', true)::json->>'userId', '')::text;\n$$ language sql stable;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["As the code shows, in Supabase, you can retrieve the payload of the JWT we generate by calling ",(0,n.jsx)(t.code,{children:"request.jwt.claims"}),". The ",(0,n.jsx)(t.code,{children:"userId"})," field inside the payload is the value we have set."]}),"\n",(0,n.jsx)(t.p,{children:"With this function, Supabase can determine the user who is currently accessing the database."}),"\n",(0,n.jsx)(t.h3,{id:"create-row-level-security-policy",children:"Create Row-Level Security policy"}),"\n",(0,n.jsxs)(t.p,{children:["Next, we can create a Row-Level Security policy to restrict each user to only access their own post data based on the ",(0,n.jsx)(t.code,{children:"user_id"})," field in the posts table."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Navigate to the Table Editor page in the Supabase dashboard and select the posts table."}),"\n",(0,n.jsx)(t.li,{children:'Click on "Add RLS Policy" at the top of the table.'}),"\n",(0,n.jsx)(t.li,{children:'In the prompted window, click "Create policy".'}),"\n",(0,n.jsx)(t.li,{children:"Input a Policy Name and choose the SELECT Policy command."}),"\n",(0,n.jsxs)(t.li,{children:["In the ",(0,n.jsx)(t.code,{children:"using"})," block of the code below, enter:"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"auth.user_id() = user_id\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Create RLS policy",src:s(35917).A+"",width:"2000",height:"2330"})}),"\n",(0,n.jsx)(t.p,{children:"By leveraging such policies, data access control within Supabase is achieved."}),"\n",(0,n.jsxs)(t.p,{children:["In real-world applications, you would create various policies to restrict user actions such as data insertion and modification. However, this is beyond the scope of this article. For more information on Row-Level Security (RLS), please refer to ",(0,n.jsx)(t.a,{href:"https://supabase.com/docs/guides/database/postgres/row-level-security",children:"Secure your data using Postgres Row Level Security"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"basic-integration-process-with-logto",children:"Basic integration process with Logto"}),"\n",(0,n.jsx)(t.p,{children:"As mentioned earlier, because Supabase utilizes RLS for its access control, the key to integrating with Logto (or any other authentication service) lies in obtaining the user id of the authorized user and sending it to Supabase. The entire process is illustrated in the diagram below:"}),"\n",(0,n.jsx)(t.mermaid,{value:"sequenceDiagram\n\tParticipant U as End user\n\tParticipant Logto\n\tParticipant B as App backend service\n\tParticipant Supabase\n\n\tU->>Logto: Sign in with Logto\n\tLogto--\x3e>U: `access_token`\n\tU->>B: Request data with `access_token`\n\tB->>B: Retrieve `user_id` from `access_token`\n\tB->>B: Generate jwt by `user_id` & `Supabase JWT secret`\n\tB->>Supabase: Request data with jwt\n\tSupabase--\x3e>B: Responded data\n\tB--\x3e>U: Responded data"}),"\n",(0,n.jsx)(t.p,{children:"Next, we will explain how to integrate Logto with Supabase based on this process diagram."}),"\n",(0,n.jsx)(t.h2,{id:"logto-integration",children:"Logto integration"}),"\n",(0,n.jsx)(t.p,{children:"Logto offers integration guides for various frameworks and programming languages."}),"\n",(0,n.jsxs)(t.p,{children:["Generally, apps built with these frameworks and languages fall into categories such as Native apps, SPA (single-page apps), traditional web apps, and M2M (machine-to-machine) apps. You can visit the ",(0,n.jsx)(t.a,{href:"../../quick-starts",children:"Logto quick starts"})," page to integrate Logto into your application based on the tech stack you are using. Afterward, follow the instructions below to integrate Logto into your project based on the type of your application."]}),"\n",(0,n.jsx)(t.h3,{id:"native-app-or-spa",children:"Native app or SPA"}),"\n",(0,n.jsx)(t.p,{children:"Both native apps and SPAs run on your device, and the credentials (access token) obtained after login are stored locally on your device."}),"\n",(0,n.jsx)(t.p,{children:"Therefore, when integrating your app with Supabase, you need to interact with Supabase through your backend service because you cannot expose sensitive information (like Supabase JWT secret) on each user's device."}),"\n",(0,n.jsxs)(t.p,{children:["Let's assume you're building your SPA using React and Express. You've successfully integrated Logto into your application by following the ",(0,n.jsx)(t.a,{href:"../../quick-starts/react/",children:"Logto React SDK Guide"})," (you can refer to the code in our ",(0,n.jsx)(t.a,{href:"https://github.com/logto-io/js/tree/master/packages/react-sample",children:"react sample"}),"). Additionally, you've added Logto access token validation to your backend server according to the ",(0,n.jsx)(t.a,{href:"../../../docs/recipes/protect-your-api/node/",children:"Protect your API on Node (Express)"})," documentation."]}),"\n",(0,n.jsx)(t.p,{children:"Next, you'll use the access token obtained from Logto to request user data from your backend server:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import { useLogto } from '@logto/react';\nimport { useState, useEffect } from 'react';\nimport PostList from './PostList';\n\nconst endpoint = '<https://www.mysite.com/api/posts>';\nconst resource = '<https://www.mysite.com/api>';\n\nfunction PostPage() {\n  const { isAuthenticated, getAccessToken } = useLogto();\n  const [posts, setPosts] = useState();\n\n  useEffect(() => {\n    const fetchPosts = async () => {\n      const response = await fetch(endpoint, {\n        headers: {\n          Authorization: `Bearer ${await getAccessToken(resource)}`,\n        },\n      });\n      setPosts(response.json());\n    };\n\n    if (isAuthenticated) {\n      void fetchPosts();\n    }\n  }, [isAuthenticated, getAccessToken]);\n\n  return <PostList posts={posts} />;\n}\n\nexport default PostPage;\n"})}),"\n",(0,n.jsx)(t.p,{children:"In your backend server, you've already extracted the logged-in user's id from the access token using middleware:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"// auth-middleware.ts\nimport { createRemoteJWKSet, jwtVerify } from 'jose';\n\n//...\n\nexport const verifyAuthFromRequest = async (ctx, next) => {\n  // Extract the token\n  const token = extractBearerTokenFromHeaders(ctx.request.headers);\n\n  const { payload } = await jwtVerify(\n    token, // The raw Bearer Token extracted from the request header\n    createRemoteJWKSet(new URL('https://<your-logto-domain>/oidc/jwks')), // generate a jwks using jwks_uri inquired from Logto server\n    {\n      // expected issuer of the token, should be issued by the Logto server\n      issuer: 'https://<your-logto-domain>/oidc',\n      // expected audience token, should be the resource indicator of the current API\n      audience: '<your request listener resource indicator>',\n    }\n  );\n\n  // if you are using RBAC\n  assert(payload.scope.includes('some_scope'));\n\n  // custom payload logic\n  ctx.auth = {\n    userId: payload.sub,\n  };\n\n  return next();\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Now, you can use the ",(0,n.jsx)(t.code,{children:"getSupabaseClient"})," described above to attach the ",(0,n.jsx)(t.code,{children:"userId"})," to the JWT used in subsequent requests to Supabase. Alternatively, you can create a middleware to create a Supabase client for requests that need to interact with Supabase:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"export const withSupabaseClient = async (ctx, next) => {\n  ctx.supabase = getSupabaseClient(ctx.auth.userId);\n\n  return next();\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:["In the subsequent processing flow, you can directly call ",(0,n.jsx)(t.code,{children:"ctx.supabase"})," to interact with Supabase:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"const fetchPosts = async (ctx) => {\n\tcosnt { data } = await ctx.supabase.from('posts').select('*');\n\n\treturn data;\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"In this code, Supabase will return only the post data belonging to the current user based on the previously set policies."}),"\n",(0,n.jsx)(t.h3,{id:"traditional-web-app",children:"Traditional web app"}),"\n",(0,n.jsx)(t.p,{children:"The main difference between a traditional web app and a Native app or SPA is that a traditional web app renders and updates pages solely on the web server. Therefore, user credentials are managed directly by the web server, while in Native apps and SPAs, they reside on the user's device."}),"\n",(0,n.jsx)(t.p,{children:"When integrating Logto with a traditional web app in Supabase, you can directly retrieve the logged-in user's id from the backend."}),"\n",(0,n.jsxs)(t.p,{children:["Taking a Next.js project as an example, after you integrate Logto with your project following the ",(0,n.jsx)(t.a,{href:"../../quick-starts/next-app-router/",children:"Next.js SDK Guide"}),", you can use the Logto SDK to retrieve user information and construct the corresponding JWT for interacting with Supabase."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import { getLogtoContext } from '@logto/next-server-actions';\nimport { logtoConfig } from '@/logto';\nimport { getSupabaseClient } from '@/utils';\nimport PostList from './PostList';\n\nexport default async function PostPage() {\n  const { cliams } = await getLogtoContext(logtoConfig);\n\n  // `sub` value in `cliams` is user id.\n  const supabase = getSupabaseClient(cliams.sub);\n\n  const { data: posts } = await supabase.from('posts').select('*');\n\n  return <PostList posts={posts} />;\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"machine-to-machine-app",children:"Machine-to-machine app"}),"\n",(0,n.jsx)(t.p,{children:"Machine-to-machine (M2M) is often used when your app needs to communicate directly with resource servers, such as a static service that pulls daily posts, etc."}),"\n",(0,n.jsxs)(t.p,{children:["You can use the ",(0,n.jsx)(t.a,{href:"../../quick-starts/m2m/",children:"Machine-to-machine: Auth with Logto"}),' guide for machine-to-machine app authentication. The integration between Supabase and Machine-to-machine apps is similar to that of Native apps and SPAs (as described in the "',(0,n.jsx)(t.a,{href:"#native-app-or-spa",children:"Native app or SPA"}),'" section). It involves obtaining an access token from Logto and then validating it through a protected backend API.']}),"\n",(0,n.jsxs)(t.p,{children:["However, it's important to note that Native apps and SPAs are typically designed for end-users, so the user id obtained represents the user itself. However, the access token for machine-to-machine apps represents the application itself, and the ",(0,n.jsx)(t.code,{children:"sub"})," field in the access token payload is the client id of the M2M app, not a specific user. Therefore, during development, it's crucial to distinguish which data is intended for M2M apps."]}),"\n",(0,n.jsxs)(t.p,{children:["Further more, if you want a specific M2M app to access Supabase on behalf of the entire service to bypass RLS restrictions, you can use Supabase's ",(0,n.jsx)(t.code,{children:"service_role"})," secret to create a Supabase client. It\u2019s useful when you want to make some administrative or automated tasks that require access to all data without being restricted by the Row-Level Security policies set up for individual users."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"service_role"})," secret can be found on the same page as the JWT secret:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Service role secret",src:s(47167).A+"",width:"2000",height:"948"})}),"\n",(0,n.jsxs)(t.p,{children:["When creating a Supabase client, use the ",(0,n.jsx)(t.code,{children:"service_role"})," secret, then this client can access all data in the database:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import { createClient } from '@supabase/supabase-js';\n\n// ...\nconst SUPABASE_SERVICE_ROLE_SCRET = process.env.SUPABASE_SERVICE_ROLE_SCRET;\n\nconst client = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_SCRET, {\n  // ...options\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},51996:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/create-get-user-id-function-a82403fda6b70a5ee944d2ddc6058fdd.webp"},35917:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/create-rls-policy-d25a9bcf6966e995cd80e49dbd1a5739.webp"},44072:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/posts-table-d61708b17c77e0f3e3c23edad626b553.webp"},47167:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/service-role-secret-b671423defc58517bd481227b24da422.webp"},21125:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/supabase-api-settings-b81e56237542563029e32cffc158bead.webp"},15658:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>r});var a=s(30758);const n={},i=a.createContext(n);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);