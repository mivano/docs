"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[88456],{98533:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"docs/recipes/organizations/integration","title":"Integrate organizations with your app","description":"This document assumes you have already integrated Logto with your app.","source":"@site/docs/docs/recipes/organizations/integration.mdx","sourceDirName":"docs/recipes/organizations","slug":"/docs/recipes/organizations/integration","permalink":"/docs/recipes/organizations/integration","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/organizations/integration.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Impact on end-user sign-in experience","permalink":"/docs/recipes/organizations/impact-on-end-users"},"next":{"title":"Implement organization invitation","permalink":"/docs/recipes/organizations/organization-invitations"}}');var i=o(86070),a=o(15658),s=o(10763),r=o(39280),c=o(69708);const l={sidebar_position:4},d="Integrate organizations with your app",h={},u=[{value:"Get organization IDs of the current user",id:"get-organization-ids-of-the-current-user",level:2},{value:"Get organization roles",id:"get-organization-roles",level:3},{value:"Fetch organization access token for a user",id:"fetch-organization-access-token-for-a-user",level:2},{value:"Step 1: Add parameters to the authentication request",id:"step-1-add-parameters-to-the-authentication-request",level:3},{value:"Step 2: Fetch the organization token",id:"step-2-fetch-the-organization-token",level:3},{value:"Example",id:"example",level:3},{value:"Fetch organization token for a machine-to-machine application",id:"fetch-organization-token-for-a-machine-to-machine-application",level:2},{value:"Verify organization tokens",id:"verify-organization-tokens",level:2},{value:"Fetch organization-scoped access token for an API resource",id:"fetch-organization-scoped-access-token-for-an-api-resource",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"integrate-organizations-with-your-app",children:"Integrate organizations with your app"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This document assumes you have already ",(0,i.jsx)(n.a,{href:"/docs/recipes/integrate-logto/",children:"integrated Logto with your app"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"In your app, you may want to show a list of organizations that the user is a member of, and perform actions in the context of an organization. Let's see how to do that."}),"\n",(0,i.jsx)(n.h2,{id:"get-organization-ids-of-the-current-user",children:"Get organization IDs of the current user"}),"\n",(0,i.jsxs)(n.p,{children:["Logto extends the standard ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect"})," protocol to allow your app to get the organization info from the user. There are two ways to do that:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you are using a Logto SDK with Organizations support, you can add the ",(0,i.jsx)(n.code,{children:"urn:logto:scope:organizations"})," scope to ",(0,i.jsx)(n.code,{children:"scopes"})," parameter of the configuration object. Usually the SDK will have an enum for this scope, e.g. ",(0,i.jsx)(n.code,{children:"UserScope.Organizations"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/js",children:"Logto JS SDKs"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["For other cases, you need to add the ",(0,i.jsx)(n.code,{children:"urn:logto:scope:organizations"})," scope to the ",(0,i.jsx)(n.code,{children:"scope"})," parameter of the SDK config (or auth request)."]}),"\n"]}),"\n",(0,i.jsxs)(c.A,{groupId:"sdk",children:[(0,i.jsx)(r.A,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import { LogtoClient, UserScope } from '@logto/browser'; // or @logto/node, @logto/client\n\nconst logto = new LogtoClient({\n  // ...\n  scopes: [UserScope.Organizations],\n});\n"})})}),(0,i.jsx)(r.A,{value:"react",label:"React",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { LogtoProvider, UserScope } from '@logto/react';\n\nconst App = () => (\n  <LogtoProvider\n    config={{\n      // ...\n      scopes: [UserScope.Organizations],\n    }}\n  >\n    {/* ... */}\n  </LogtoProvider>\n);\n"})})}),(0,i.jsx)(r.A,{value:"python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from logto import UserInfoScope\n\nclient = LogtoClient(\n    LogtoConfig(\n        # ...\n        scopes=[UserInfoScope.organizations],\n    )\n)\n"})})}),(0,i.jsx)(r.A,{value:"php",label:"PHP",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"use Logto\\Sdk\\Constants\\UserScope;\n\n$client = new LogtoClient(\n  new LogtoConfig(\n    // ...\n    scopes: [UserScope::organizations],\n  )\n);\n"})})}),(0,i.jsx)(r.A,{value:"swift",label:"Swift",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"import Logto\nimport LogtoClient\n\nlet config = try? LogtoConfig(\n    // ...\n    scopes: [\n        UserScope.organizations.rawValue,\n    ],\n    // ...\n)\nlet client = LogtoClient(useConfig: config)\n"})})}),(0,i.jsx)(r.A,{value:"others",label:"Others",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const config = {\n  // ...\n  scope: 'openid offline_access urn:logto:scope:organizations',\n};\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Once the user finishes the authentication flow, you can get the organization info from the ",(0,i.jsx)(n.code,{children:"idToken"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Use JavaScript as an example\nconst idToken = await logto.getIdTokenClaims();\n\nconsole.log(idToken.organizations); // A string array of organization IDs\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"organizations"})," field (claim) will also be included in response from the ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"UserInfo endpoint"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"get-organization-roles",children:"Get organization roles"}),"\n",(0,i.jsx)(n.p,{children:"To get all organization roles of the current user:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you are using a Logto SDK with Organizations support, you can add the ",(0,i.jsx)(n.code,{children:"urn:logto:scope:organization_roles"})," scope to ",(0,i.jsx)(n.code,{children:"scopes"})," parameter of the configuration object. Usually the SDK will have an enum for this scope, e.g. ",(0,i.jsx)(n.code,{children:"UserScope.OrganizationRoles"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/js",children:"Logto JS SDKs"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["For other cases, you need to add the ",(0,i.jsx)(n.code,{children:"urn:logto:scope:organization_roles"})," scope to the ",(0,i.jsx)(n.code,{children:"scope"})," parameter of the SDK config (or auth request)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Then you can get the organization roles from the ",(0,i.jsx)(n.code,{children:"idToken"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Use JavaScript as an example\nconst idToken = await logto.getIdTokenClaims();\n\nconsole.log(idToken.organization_roles); // A string array of organization roles\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each string in the array is in the format of ",(0,i.jsx)(n.code,{children:"organization_id:role_id"}),", e.g. ",(0,i.jsx)(n.code,{children:"org_123:admin"})," means the user has the ",(0,i.jsx)(n.code,{children:"admin"})," role in the organization with ID ",(0,i.jsx)(n.code,{children:"org_123"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"organization_roles"})," field (claim) will also be included in response from the ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo",children:"UserInfo endpoint"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"fetch-organization-access-token-for-a-user",children:"Fetch organization access token for a user"}),"\n",(0,i.jsx)(n.p,{children:"To perform actions in the context of an organization, the user needs to be granted an access token for that organization (organization token). The organization token is a JWT token that contains the organization ID and the user's permissions (scopes) in the organization."}),"\n",(0,i.jsx)(n.h3,{id:"step-1-add-parameters-to-the-authentication-request",children:"Step 1: Add parameters to the authentication request"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you are using a Logto SDK with Organizations support, you can add the ",(0,i.jsx)(n.code,{children:"urn:logto:scope:organizations"})," scope to ",(0,i.jsx)(n.code,{children:"scopes"})," parameter of the configuration object, the same way as ",(0,i.jsx)(n.a,{href:"#get-organization-ids-of-the-current-user",children:"Get organization IDs of the current user"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Logto SDK with Organizations support will automatically handle the rest of the configuration."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["For other cases, you need to add the ",(0,i.jsx)(n.code,{children:"offline_access"})," and ",(0,i.jsx)(n.code,{children:"urn:logto:scope:organizations"})," scopes to the ",(0,i.jsx)(n.code,{children:"scope"})," parameter and the ",(0,i.jsx)(n.code,{children:"urn:logto:resource:organizations"})," resource to the ",(0,i.jsx)(n.code,{children:"resource"})," parameter of the SDK config (or auth request).","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Note: ",(0,i.jsx)(n.code,{children:"offline_access"})," is required to get the ",(0,i.jsx)(n.code,{children:"refresh_token"})," that can be used to fetch organization tokens."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Only for other cases. For Logto SDKs, see above.\nconst config = {\n  // ...\n  scope: 'openid offline_access urn:logto:scope:organizations',\n  resource: 'urn:logto:resource:organizations',\n};\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"urn:logto:resource:organizations"})," resource is a special resource that represents the organization template."]})}),"\n",(0,i.jsx)(n.h3,{id:"step-2-fetch-the-organization-token",children:"Step 2: Fetch the organization token"}),"\n",(0,i.jsxs)(n.p,{children:["Logto extends the standard ",(0,i.jsx)(n.code,{children:"refresh_token"})," grant type to allow your app to fetch organization tokens."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you are using a Logto SDK with Organizations support, you can call the ",(0,i.jsx)(n.code,{children:"getOrganizationToken()"})," method (or ",(0,i.jsx)(n.code,{children:"getOrganizationTokenClaims()"})," method) of the SDK."]}),"\n",(0,i.jsxs)(n.li,{children:["For other cases, you need to call the token endpoint with the following parameters:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"grant_type"}),": ",(0,i.jsx)(n.code,{children:"refresh_token"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"client_id"}),": The app ID the user used to authenticate."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"refresh_token"}),": The ",(0,i.jsx)(n.code,{children:"refresh_token"})," you got from the authentication flow."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"organization_id"}),": The ID of the organization you want to get the token for."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"scope"})," (optional): The scopes you want to grant to the user in the organization. If not specified, the authorization server will try to grant the same scopes as the authentication flow."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(c.A,{groupId:"sdk",children:[(0,i.jsx)(r.A,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const token = await logto.getOrganizationToken('<organization-id>');\n"})})}),(0,i.jsx)(r.A,{value:"react",label:"React",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const App = () => {\n  const { getOrganizationToken } = useLogto();\n\n  const getToken = async () => {\n    const token = await getOrganizationToken('<organization-id>');\n  };\n\n  return <button onClick={getToken}>Get organization token</button>;\n};\n"})})}),(0,i.jsx)(r.A,{value:"python",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'token = await client.getOrganizationToken("<organization-id>")\n# or\nclaims = await client.getOrganizationTokenClaims("<organization-id>")\n'})})}),(0,i.jsx)(r.A,{value:"php",label:"PHP",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"$token = $client->getOrganizationToken('<organization-id>');\n// or\n$claims = $client->getOrganizationTokenClaims('<organization-id>');\n"})})}),(0,i.jsx)(r.A,{value:"swift",label:"Swift",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'let token = try await client.getOrganizationToken(forId: "<organization-id>")\n'})})}),(0,i.jsx)(r.A,{value:"others",label:"Others",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Use JavaScript as an example\n\nconst params = new URLSearchParams();\n\nparams.append('grant_type', 'refresh_token');\nparams.append('client_id', 'YOUR_CLIENT_ID');\nparams.append('refresh_token', 'REFRESH_TOKEN');\nparams.append('organization_id', 'org_123');\n\nconst response = await fetch('https://YOUR_LOGTO_ENDPOINT/oidc/token', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/x-www-form-urlencoded',\n  },\n  body: params,\n});\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["The response will be in the same format as the ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#TokenEndpoint",children:"standard token endpoint"}),", and the ",(0,i.jsx)(n.code,{children:"access_token"})," is the organization token in JWT format."]}),"\n",(0,i.jsx)(n.p,{children:"Besides regular claims of an access token, the organization token also contains the following claims:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aud"}),": The audience of the organization token is ",(0,i.jsx)(n.code,{children:"urn:logto:organization:{organization_id}"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"scope"}),": The scopes granted to the user in the organization with space as delimiter."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"A good example can beat a thousand words. Assume our organization template has the following setup:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Permissions: ",(0,i.jsx)(n.code,{children:"read:logs"}),", ",(0,i.jsx)(n.code,{children:"write:logs"}),", ",(0,i.jsx)(n.code,{children:"read:users"}),", ",(0,i.jsx)(n.code,{children:"write:users"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Roles: ",(0,i.jsx)(n.code,{children:"admin"}),", ",(0,i.jsx)(n.code,{children:"member"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"admin"})," role has all permissions."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"member"})," role has ",(0,i.jsx)(n.code,{children:"read:logs"})," and ",(0,i.jsx)(n.code,{children:"read:users"})," permissions."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"And the user has the following setup:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Organization IDs: ",(0,i.jsx)(n.code,{children:"org_1"}),", ",(0,i.jsx)(n.code,{children:"org_2"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Organization roles: ",(0,i.jsx)(n.code,{children:"org_1:admin"}),", ",(0,i.jsx)(n.code,{children:"org_2:member"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In the Logto SDK config (or auth request), we set up other things properly, and added the following scopes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"urn:logto:scope:organizations"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"openid"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"offline_access"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"read:logs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"write:logs"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Now, when the user finishes the authentication flow, we can get the organization IDs from the ",(0,i.jsx)(n.code,{children:"idToken"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Use JavaScript as an example\nconst idToken = await logto.getIdTokenClaims();\n\nconsole.log(idToken.organizations); // ['org_1', 'org_2']\n"})}),"\n",(0,i.jsx)(n.p,{children:"If we want to get the organization tokens:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Use JavaScript as an example\nconst org1Token = await logto.getOrganizationTokenClaims('org_1');\nconst org2Token = await logto.getOrganizationTokenClaims('org_2');\n\nconsole.log(org1Token.aud); // 'urn:logto:organization:org_1'\nconsole.log(org1Token.scope); // 'read:logs write:logs'\nconsole.log(org2Token.aud); // 'urn:logto:organization:org_2'\nconsole.log(org2Token.scope); // 'read:logs'\n\nconst org3Token = await logto.getOrganizationTokenClaims('org_3'); // Error: User is not a member of the organization\n"})}),"\n",(0,i.jsx)(n.p,{children:"Explanation:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.code,{children:"org_1"}),", the user has the ",(0,i.jsx)(n.code,{children:"admin"})," role, so the organization token should have all available permissions (scopes)."]}),"\n",(0,i.jsxs)(n.li,{children:["For ",(0,i.jsx)(n.code,{children:"org_2"}),", the user has the ",(0,i.jsx)(n.code,{children:"member"})," role, so the organization token should have ",(0,i.jsx)(n.code,{children:"read:logs"})," and ",(0,i.jsx)(n.code,{children:"read:users"})," permissions (scopes)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Since we only requested ",(0,i.jsx)(n.code,{children:"read:logs"})," and ",(0,i.jsx)(n.code,{children:"write:logs"}),' scopes in the authentication flow, the organization tokens have been "downscoped" accordingly, resulting in the intersection of the requested scopes and the available scopes.']}),"\n",(0,i.jsx)(n.h2,{id:"fetch-organization-token-for-a-machine-to-machine-application",children:"Fetch organization token for a machine-to-machine application"}),"\n",(0,i.jsx)(s.A,{cloud:!0,oss:{major:1,minor:18}}),"\n",(0,i.jsxs)(n.p,{children:["Similar to fetching organization tokens for users, you can also fetch organization tokens for machine-to-machine applications. The only difference is that you need to use the ",(0,i.jsx)(n.code,{children:"client_credentials"})," grant type instead of the ",(0,i.jsx)(n.code,{children:"refresh_token"})," grant type."]}),"\n",(0,i.jsxs)(n.p,{children:["To learn more about machine-to-machine applications, see ",(0,i.jsx)(n.a,{href:"/quick-starts/m2m",children:"Machine-to-machine: Auth with Logto"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"verify-organization-tokens",children:"Verify organization tokens"}),"\n",(0,i.jsxs)(n.p,{children:["Once the app gets an organization token, it can use the token in the same way as a regular access token, e.g. call the APIs with the token in the ",(0,i.jsx)(n.code,{children:"Authorization"})," header in the format of ",(0,i.jsx)(n.code,{children:"Bearer {token}"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In your API, you can verify the organization token which is similar to ",(0,i.jsx)(n.a,{href:"/docs/recipes/protect-your-api/#validate-the-authorization-token",children:"Proctect your API"}),". Main differences:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Unlike access tokens for API resources, a user CANNOT get an organization token if the user is not a member of the organization."}),"\n",(0,i.jsxs)(n.li,{children:["The audience of the organization token is ",(0,i.jsx)(n.code,{children:"urn:logto:organization:{organization_id}"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["For certain permissions (scopes), you need to check the ",(0,i.jsx)(n.code,{children:"scope"})," claim of the organization token by splitting the string with space as delimiter."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fetch-organization-scoped-access-token-for-an-api-resource",children:"Fetch organization-scoped access token for an API resource"}),"\n",(0,i.jsx)(n.p,{children:"In addition to orgnization scopes, organization role can be also assgined with API resource scopes. By default, like RBAC roles, all the scopes inherited from the organization role will be included in the access token."}),"\n",(0,i.jsxs)(n.p,{children:["You may want to narrow down the scopes to specific organization's roles, for example, to access an API resource that is only available to the organization. You can add ",(0,i.jsx)(n.code,{children:"organization_id"})," to the token request, if you are using Logto's SDK, you can add ",(0,i.jsx)(n.code,{children:"organization_id"})," as the second parameter of the ",(0,i.jsx)(n.code,{children:"getAccessToken"})," method."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Use JavaScript as an example\nconst accessToken = await logto.getAccessToken('https://my-resource.com/api', 'org_1');\n\n// Or getting claims directly\nconst accessTokenClaims = await logto.getAccessTokenClaims('https://my-resource.com/api', 'org_1');\nconsole.log(accessTokenClaims.organization_id); // 'org_1'\nconsole.log(accessTokenClaims.aud); // 'https://my-resource.com/api'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then only the scopes inherited from this organization's roles will be included in the access token. And an additional claim ",(0,i.jsx)(n.code,{children:"organization_id"})," will be included in the access token, this is helpful to identify the organization the user is acting on behalf of."]}),"\n",(0,i.jsxs)(n.p,{children:["And the recommended way to verify the access token is to check both the ",(0,i.jsx)(n.code,{children:"scope"})," and ",(0,i.jsx)(n.code,{children:"organization_id"})," claims."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},39280:(e,n,o)=>{o.d(n,{A:()=>s});o(30758);var t=o(13526);const i={tabItem:"tabItem_WK0d"};var a=o(86070);function s(e){let{children:n,hidden:o,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,s),hidden:o,children:n})}},69708:(e,n,o)=>{o.d(n,{A:()=>y});var t=o(30758),i=o(13526),a=o(97822),s=o(25557),r=o(96601),c=o(787),l=o(25744),d=o(57450);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:o}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:o,attributes:t,default:i}}=e;return{value:n,label:o,attributes:t,default:i}}))}(o);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function g(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:o}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,c.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function x(e){const{defaultValue:n,queryString:o=!1,groupId:i}=e,a=u(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=o.find((e=>e.default))??o[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[l,h]=p({queryString:o,groupId:i}),[x,m]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,d.Dv)(o);return[i,(0,t.useCallback)((e=>{o&&a.set(e)}),[o,a])]}({groupId:i}),f=(()=>{const e=l??x;return g({value:e,tabValues:a})?e:null})();(0,r.A)((()=>{f&&c(f)}),[f]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=o(28827);const f={tabList:"tabList_D2ZI",tabItem:"tabItem_JkB6"};var j=o(86070);function z(e){let{className:n,block:o,selectedValue:t,selectValue:s,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),d=e=>{const n=e.currentTarget,o=c.indexOf(n),i=r[o].value;i!==t&&(l(n),s(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=c.indexOf(e.currentTarget)+1;n=c[o]??c[0];break}case"ArrowLeft":{const o=c.indexOf(e.currentTarget)-1;n=c[o]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":o},n),children:r.map((e=>{let{value:n,label:o,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...a,className:(0,i.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===n}),children:o??n},n)}))})}function k(e){let{lazy:n,children:o,selectedValue:a}=e;const s=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function b(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,j.jsx)(z,{...n,...e}),(0,j.jsx)(k,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,j.jsx)(b,{...e,children:h(e.children)},String(n))}},10763:(e,n,o)=>{o.d(n,{A:()=>s});const t="availability_kRMk";var i=o(86070);const a=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`,s=e=>{let{cloud:n,oss:o}=e;return(0,i.jsxs)("div",{className:t,children:[(0,i.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${a(n)}`}),(0,i.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${a(o)}`})]})}},15658:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>r});var t=o(30758);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);