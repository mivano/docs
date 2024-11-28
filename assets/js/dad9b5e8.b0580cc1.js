"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6391],{28432:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"authorization/organization-template/configure-organization-template","title":"Configure organization template","description":"We\'ll go through the process of configuring the organization template feature via Logto Console","source":"@site/docs/authorization/organization-template/configure-organization-template.mdx","sourceDirName":"authorization/organization-template","slug":"/authorization/organization-template/configure-organization-template","permalink":"/authorization/organization-template/configure-organization-template","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/authorization/organization-template/configure-organization-template.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Organization template","permalink":"/authorization/organization-template/"},"next":{"title":"Protect organization resources","permalink":"/authorization/organization-template/protect-organization-resources"}}');var t=i(86070),s=i(15658);const a={sidebar_position:1},r="Configure organization template",l={},d=[{value:"Configure via Logto Console",id:"configure-via-logto-console",level:2},{value:"Create organization permission",id:"create-organization-permission",level:3},{value:"Create organization role",id:"create-organization-role",level:3},{value:"Organization permissions only organization roles",id:"organization-permissions-only-organization-roles",level:4},{value:"API permissions only organization roles",id:"api-permissions-only-organization-roles",level:4},{value:"Mixed API and organization permissions in organization roles",id:"mixed-api-and-organization-permissions-in-organization-roles",level:4},{value:"Configure via Logto Management API",id:"configure-via-logto-management-api",level:2},{value:"Handle member permission change",id:"handle-member-permission-change",level:2},{value:"No new permissions introduced into the system",id:"no-new-permissions-introduced-into-the-system",level:4},{value:"New permission is introduced into the system and assigned to a member",id:"new-permission-is-introduced-into-the-system-and-assigned-to-a-member",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{CloudLink:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"configure-organization-template",children:"Configure organization template"})}),"\n",(0,t.jsx)(n.p,{children:"We'll go through the process of configuring the organization template feature via Logto Console"}),"\n",(0,t.jsxs)(n.p,{children:["First, navigate to ",(0,t.jsx)(i,{to:"/organization-template",children:"Console > Organization template"}),". You will see that the organization template includes two parts: Organization Roles and Organization Permissions. An organization template defines shared access control policies (permissions and roles) for multiple organizations."]}),"\n",(0,t.jsx)(n.h2,{id:"configure-via-logto-console",children:"Configure via Logto Console"}),"\n",(0,t.jsx)(n.h3,{id:"create-organization-permission",children:"Create organization permission"}),"\n",(0,t.jsx)(n.p,{children:"Organization permissions are a key part of organization template. These permissions are designed specifically for organizations within your product. Here's how to manage them:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Find the organization permissions tab:"}),' Go to the "Organization permissions" tab to see your existing permissions.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Add, delete, and edit:"})," You can easily add new organization permissions, delete ones you don't need, and edit existing permissions as required."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-organization-role",children:"Create organization role"}),"\n",(0,t.jsx)(n.p,{children:"Logto supports two types of organization roles, this is the same as the user/system-level RBAC:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User"}),": Roles that are assigned to users."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Machine-to-machine"}),": Roles that are assigned to machine-to-machine applications."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Logto lets you define organization roles in a variety of ways to fit your system's structure:"}),"\n",(0,t.jsx)(n.h4,{id:"organization-permissions-only-organization-roles",children:"Organization permissions only organization roles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"When to use:"})," You have separate user/system endpoints and organization endpoints."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Explanation:"})," This is the simplest approach if your product\u2019s technical architecture and API design clearly separate user/system-level resources from organization resources. Your organization roles will only include the permissions you define for the organization."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"api-permissions-only-organization-roles",children:"API permissions only organization roles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"When to use:"})," User/System-level and organization-level access control are handled by the same endpoints."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Explanation:"})," Choose this if you want to manage all permissions through unified API resources."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"mixed-api-and-organization-permissions-in-organization-roles",children:"Mixed API and organization permissions in organization roles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"When to use:"})," You have separate endpoints defined for your product for user/system-level and organization level, but some user roles require a mix of both user-level and organization-level permissions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Explanation:"})," This offers the most flexibility, but can also be the most complex to manage."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configure-via-logto-management-api",children:"Configure via Logto Management API"}),"\n",(0,t.jsx)(n.p,{children:"Everything you can do in Console can also be done through Management API, including: Manage organization template to create, delete, or edit organization permissions and roles."}),"\n",(0,t.jsx)(n.p,{children:"For a complete list of capabilities, please refer to our API reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-updateorganizationrole",children:"Logto Management API - organization role"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-listorganizationscopes",children:"Logto Management API - organization permission"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["With the Logto Management API, you can create custom organization experiences, like allowing org admins to self-serve and create organizations. Check out ",(0,t.jsx)(n.a,{href:"/end-user-flows/organization-experience/",children:"this section"})," to enable more organization-level features and management."]}),"\n",(0,t.jsx)(n.h2,{id:"handle-member-permission-change",children:"Handle member permission change"}),"\n",(0,t.jsx)(n.p,{children:"Similar to API RBAC, member permissions may be altered during a session -- for instance, they may be assigned new roles or have existing role permissions modified."}),"\n",(0,t.jsx)(n.p,{children:"What happens when a member permissions change? There are two cases."}),"\n",(0,t.jsx)(n.h4,{id:"no-new-permissions-introduced-into-the-system",children:"No new permissions introduced into the system"}),"\n",(0,t.jsx)(n.p,{children:"Current organization access tokens (a.k.a. organization token) will remain valid until they expire, even after a user\u2019s organization permissions are changed. However, new permissions will be reflected in subsequent organization tokens, and any revoked permissions will be omitted."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Organization tokens have a fixed expiration time that can\u2019t be changed, unlike generic access tokens."})}),"\n",(0,t.jsxs)(n.p,{children:["Call ",(0,t.jsx)(n.a,{href:"/integrate-logto/interact-with-management-api/",children:"Logto Management API"})," endpoints periodically or establish a long-lived connection (e.g. using WebSocket) to dynamically fetch user\u2019s organization permissions. Upon detecting changes, clear the existing organization token and newly issued tokens will automatically have organization permission scope changes reflected."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl \\\n -X GET https://[tenant_id].logto.app/api/organizations/{id}/users/{userId}/scopes \\\n -H "Authorization: Bearer $ORGANIZATION_TOKEN"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When permission changes detected, clear the organization token from storage first, and then call the SDK method ",(0,t.jsx)(n.code,{children:"getOrganizationToken(organizationId)"})," to acquire a new one. Newly issued organization token should have permission changes reflected."]}),"\n",(0,t.jsx)(n.h4,{id:"new-permission-is-introduced-into-the-system-and-assigned-to-a-member",children:"New permission is introduced into the system and assigned to a member"}),"\n",(0,t.jsx)(n.p,{children:"This happens when new permissions are introduced into your organization template. In this case, you\u2019ll have to first include the newly introduced permission scopes when initializing Logto client. E.g."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"new LogtoClient({\n  appId: 'your-app-id',\n  redirectUrl: 'your-redirect-url',\n  scopes: [\n    'urn:logto:scope:organizations',\n    // ... your other existing organization permission scopes,\n    'new-organization-permission-scope',\n  ],\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"Secondly, each of your client application need to re-consent or re-login the users in order to receive the new permission change. Then the new permission scope will be reflected in new organization tokens."}),"\n",(0,t.jsx)(n.p,{children:"Code example for re-consent:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"signIn({ redirectUrl: 'your-redirect-url', prompt: 'consent' });\n"})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var o=i(30758);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);