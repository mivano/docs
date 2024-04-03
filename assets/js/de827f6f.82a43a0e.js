"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[96187],{49068:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>j,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>x,toc:()=>u});var i=r(11527),t=r(17279);const o=[];function s(e){const n={code:"code",li:"li",p:"p",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"You need to have an Access Token that satisfies the following criteria:"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"It's a valid token"}),(0,i.jsx)("li",{children:"It's issued by your Logto instance"}),(0,i.jsx)("li",{children:(0,i.jsxs)(n.p,{children:["Its audience (",(0,i.jsx)(n.code,{children:"aud"}),", i.e. the API identifier) points to"," ","\n",(0,i.jsx)("code",{children:"https://[your-tenant-id].logto.app/api"}),"."]})}),e.children&&(0,i.jsx)(n.li,{children:e.children})]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}const d=[];function l(e){const n={code:"code",p:"p",...(0,t.a)(),...e.components};return(0,i.jsxs)(n.p,{children:["Put that token in the ",(0,i.jsx)(n.code,{children:"Authorization"})," field of HTTP headers with the Bearer format (",(0,i.jsx)(n.code,{children:"Bearer YOUR_TOKEN"}),"), and you are good to go."]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}const a={},p="\ud83e\uddf1 Core Service",x={id:"docs/references/core/README",title:"\ud83e\uddf1 Core Service",description:"Introduction",source:"@site/docs/docs/references/core/README.mdx",sourceDirName:"docs/references/core",slug:"/docs/references/core/",permalink:"/docs/references/core/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/core/README.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udd0c Connectors",permalink:"/docs/references/connectors/"},next:{title:"Configuration",permalink:"/docs/references/core/configuration"}},j={},u=[{value:"Introduction",id:"introduction",level:2},{value:"OIDC Provider",id:"oidc-provider",level:2},{value:"Enabled OpenID features",id:"enabled-openid-features",level:3},{value:"Management API",id:"management-api",level:2},{value:"Authentication",id:"authentication",level:3},...o,...d,{value:"User API",id:"user-api",level:2},{value:"Authentication",id:"authentication-1",level:3},...o,...d,{value:"About refresh token reuse interval",id:"about-refresh-token-reuse-interval",level:3},{value:"Frontend proxies",id:"frontend-proxies",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"-core-service",children:"\ud83e\uddf1 Core Service"}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Core Service"})," is a monolith service for critical Logto duties. The source code is in ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/core",children:(0,i.jsx)(n.code,{children:"/packages/core"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Core Service"})," and ",(0,i.jsx)(n.em,{children:"SDK core"})," are two separate concepts. See ",(0,i.jsx)(n.a,{href:"/docs/references/sdk-convention/",children:"SDK convention"})," for the differences."]})}),"\n",(0,i.jsx)(n.p,{children:"To simplify, we divide Core Service into four major modules:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Name"}),(0,i.jsx)("td",{children:"Description"}),(0,i.jsx)("td",{children:"Mount Path"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"OIDC Provider"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["An"," "]}),(0,i.jsx)("a",{href:"https://openid.net/specs/openid-connect-core-1_0.html",target:"_blank",rel:"noopener",children:(0,i.jsx)(n.p,{children:"OpenID Provider"})}),(0,i.jsx)(n.p,{children:"."})]}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"/oidc"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Management API"}),(0,i.jsx)("td",{children:"APIs for managing Logto. The admin role is required."}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"/api"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Frontend proxies"}),(0,i.jsx)("td",{children:"HTTP proxies or static file serving for frontend projects."}),(0,i.jsx)("td",{children:(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)("a",{href:"#frontend-proxies",children:"Frontend proxies"})," for details."]})})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Backend APIs, including OIDC, are built within the ",(0,i.jsx)(n.code,{children:"core"})," package, while frontend proxies depend on the corresponding sibling packages in the Logto monorepo."]}),"\n",(0,i.jsx)(n.h2,{id:"oidc-provider",children:"OIDC Provider"}),"\n",(0,i.jsxs)(n.p,{children:["Logto uses the amazing certified ",(0,i.jsx)(n.a,{href:"https://openid.net/connect/",children:"OpenID Connect"})," implementation ",(0,i.jsx)(n.a,{href:"https://github.com/panva/node-oidc-provider",children:(0,i.jsx)(n.code,{children:"node-oidc-provider"})})," under the hood. The provider is mounted at ",(0,i.jsx)(n.code,{children:"/oidc"}),", and you can check relative configurations and files in ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/core/src/oidc",children:(0,i.jsx)(n.code,{children:"packages/core/src/oidc"})}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If you want to directly call OIDC APIs, remember to set header ",(0,i.jsx)(n.code,{children:"Content-Type: application/x-www-form-urlencoded"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"enabled-openid-features",children:"Enabled OpenID features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect Core"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-discovery-1_0.html",children:"OpenID Connect Discovery"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-rpinitiated-1_0.html",children:"OpenID Connect RP-Initiated Logout"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc7009.html",children:"OAuth 2.0 Token Revocation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc8707.html",children:"OAuth 2.0 Resource Indicators"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"management-api",children:"Management API"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Management API"})," is a set of APIs that manage and update Logto data. Only users with the ",(0,i.jsx)(n.code,{children:"admin"})," role have access to them."]}),"\n",(0,i.jsxs)(n.p,{children:["It's mounted at ",(0,i.jsx)(n.code,{children:"/api"}),". Head to ",(0,i.jsx)(n.a,{href:"https://openapi.logto.io/",children:"API references"})," to see the details in your browser, or use ",(0,i.jsx)(n.code,{children:"GET /api/swagger.json"})," for a Swagger result in JSON."]}),"\n",(0,i.jsxs)(n.p,{children:["To access the API programmatically, see ",(0,i.jsx)(n.a,{href:"/docs/recipes/interact-with-management-api/",children:"\ud83d\ude9d Interact with Management API"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(n.p,{children:"Admin Console heavily depends on these APIs, while you can also call them manually."}),"\n",(0,i.jsx)(c,{children:(0,i.jsxs)(n.p,{children:["Its ",(0,i.jsx)("code",{children:"scope"})," includes ",(0,i.jsx)("code",{children:'"all"'}),"."]})}),"\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(n.h2,{id:"user-api",children:"User API"}),"\n",(0,i.jsxs)(n.p,{children:["We provide a standard OIDC ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"Userinfo Endpoint"})," mounted at ",(0,i.jsx)(n.code,{children:"/oidc/me"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"authentication-1",children:"Authentication"}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(n.h3,{id:"about-refresh-token-reuse-interval",children:"About refresh token reuse interval"}),"\n",(0,i.jsx)(n.p,{children:"You may notice Refresh Token has a rotation delay (3s). This delay helps avoid concurrency issues when exchanging the rotating refresh token multiple times within a given timeframe."}),"\n",(0,i.jsx)(n.p,{children:"During the leeway window (in seconds), the consumed refresh token will still be considered as valid."}),"\n",(0,i.jsx)(n.p,{children:"This is useful for distributed apps and serverless apps like Next.js, in which there is no shared memory."}),"\n",(0,i.jsx)(n.h2,{id:"frontend-proxies",children:"Frontend proxies"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.em,{children:"frontend proxy"})," is a middleware function that serves a frontend project in an environment-related way:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If it's development, it proxies HTTP requests to the frontend dev server."}),"\n",(0,i.jsx)(n.li,{children:"If it's production, it serves static frontend files directly."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Logto has three frontend proxies:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Name"}),(0,i.jsx)("td",{children:"Frontend Package"}),(0,i.jsx)("td",{children:"Mount Path"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Admin Console proxy"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"/packages/console"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"/console"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Demo app proxy"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"/packages/demo-app"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"/demo-app"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"UI (sign-in experience) proxy"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"/packages/ui"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"/"})})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"You may notice that the UI proxy uses the root path. Unlike other proxies, the UI proxy is a fallback proxy which means it only takes effect when no other proxy is matched."})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},17279:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var i=r(50959);const t={},o=i.createContext(t);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);