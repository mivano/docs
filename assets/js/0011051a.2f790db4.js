"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[37578],{30220:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"docs/recipes/rbac/manage-permissions-and-roles","title":"Manage permissions and roles","description":"This page is for managing permissions and roles via Admin Console. For managing them via Logto Management API, please refer to API references and \ud83d\ude9d Interact with Management API.","source":"@site/docs/docs/recipes/rbac/manage-permissions-and-roles.md","sourceDirName":"docs/recipes/rbac","slug":"/docs/recipes/rbac/manage-permissions-and-roles","permalink":"/docs/recipes/rbac/manage-permissions-and-roles","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/rbac/manage-permissions-and-roles.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"\ud83d\udd10 Role-based access control (RBAC)","permalink":"/docs/recipes/rbac/"},"next":{"title":"Protect your API Resource with RBAC","permalink":"/docs/recipes/rbac/protect-resource"}}');var o=n(86070),r=n(15658);const a={},t="Manage permissions and roles",l={},c=[{value:"Manage API resource permissions",id:"manage-api-resource-permissions",level:2},{value:"Manage roles",id:"manage-roles",level:2},{value:"Create and define a new role",id:"create-and-define-a-new-role",level:3},{value:"View or update a role",id:"view-or-update-a-role",level:3},{value:"Manage users or apps in roles",id:"manage-users-or-apps-in-roles",level:3},{value:"Manage role permissions",id:"manage-role-permissions",level:3},{value:"Manage roles from the details page of a user or app",id:"manage-roles-from-the-details-page-of-a-user-or-app",level:2}];function d(e){const s={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"manage-permissions-and-roles",children:"Manage permissions and roles"})}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsxs)(s.p,{children:["This page is for managing permissions and roles via Admin Console. For managing them via Logto Management API, please refer to ",(0,o.jsx)(s.a,{href:"https://openapi.logto.io/",children:"API references"})," and ",(0,o.jsx)(s.a,{href:"/docs/recipes/interact-with-management-api/",children:"\ud83d\ude9d Interact with Management API"}),"."]})}),"\n",(0,o.jsx)(s.h2,{id:"manage-api-resource-permissions",children:"Manage API resource permissions"}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsx)(s.p,{children:"The Logto Management API resource is immutable. A new API Resource is needed if you want to protect your API with a different set of permissions."})}),"\n",(0,o.jsxs)(s.p,{children:["Permissions are set ",(0,o.jsx)(s.strong,{children:"in the API resource level"}),'. Navigate to the "API resources" tab, click the API resource you want to manage, and then go to the "Permissions" tab.']}),"\n",(0,o.jsx)(s.p,{children:'To create a new permission, click the "Create permission" button in the top right corner. It\'s important to provide a name and details for the permission, as it will make it easier to identify and manage permissions. After the creation, you will be directed to the detail page. To delete or edit a permission, click the three dot icon in the very right of the row.'}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Manage permissions",src:n(75452).A+"",width:"2000",height:"756"})}),"\n",(0,o.jsx)(s.h2,{id:"manage-roles",children:"Manage roles"}),"\n",(0,o.jsx)(s.h3,{id:"create-and-define-a-new-role",children:"Create and define a new role"}),"\n",(0,o.jsx)(s.p,{children:"A role is a group of permissions. Navigate to the \"Roles\" tab, and you'll see a list of roles you've defined."}),"\n",(0,o.jsx)(s.p,{children:'To create a new role, click the "Create Role" button in the top right corner. A dialog box will appear, where you can give the role a name and description, and assign one or more permissions to the role.'}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["Keep in mind that while it is technically possible to create a role ",(0,o.jsx)(s.em,{children:"without"})," permissions or users assigned, it is not recommended to create too many empty roles. This will disrupt the harmony of role management and render the RBAC system ineffective."]}),"\n",(0,o.jsx)(s.li,{children:"Permissions are grouped by API in the selector, allowing you to add them in bulk or select them individually. The selected permissions will be displayed on the right side."}),"\n",(0,o.jsxs)(s.li,{children:['A new role has two available types: "User role" or "Machine-to-machine app role".',"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"User role"}),": User role is a type of role only assignable to users. It can include permissions from your own API resources."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"Machine-to-machine role"}),": M2M role is a type of role only assignable to machine-to-machine apps. It can include both your own API permissions and Logto Management API permissions. Machine-to-machine role is usually used to protect your machine-to-machine authentication. Such as accessing Logto Management API or your own API resources."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsx)(s.p,{children:"Machine-to-machine app roles are available since Logto v1.10.0."})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Create role",src:n(54925).A+"",width:"1926",height:"1192"})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Constraints"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"After creating a role, you cannot modify its type."}),"\n",(0,o.jsx)(s.li,{children:"The Logto Management API resource can only be accessed by machine-to-machine application roles."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Depending the type of role you choose, you will be able to assign users or machine-to-machine applications to the role once it is created."}),"\n",(0,o.jsx)(s.h3,{id:"view-or-update-a-role",children:"View or update a role"}),"\n",(0,o.jsx)(s.p,{children:"After completing the role creation and assignment process or click a role name in the roles list, you will be directed to the role details page. The layout and controls on this page are consistent with other entities. To delete the role, click the three dots button."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Role details",src:n(22821).A+"",width:"2000",height:"773"})}),"\n",(0,o.jsx)(s.p,{children:"You can also edit the role name and description, inspect and manage the permissions and users assigned to the role at any time."}),"\n",(0,o.jsx)(s.admonition,{type:"danger",children:(0,o.jsx)(s.p,{children:"Deleting the role will eliminate all the permissions linked to it for the impacted users and delete the connection between roles, users or apps, and permissions."})}),"\n",(0,o.jsx)(s.h3,{id:"manage-users-or-apps-in-roles",children:"Manage users or apps in roles"}),"\n",(0,o.jsx)(s.p,{children:"Depending on the type of role you choose, you will be able to assign or remove users or machine-to-machine applications in the role details page."}),"\n",(0,o.jsx)(s.p,{children:'Click the "Users" or "Machine-to-machine apps" tab to view the users or apps assigned to the role. To add user(s) or app(s) to the role, click the "Assign users" or "Assign applications" button in the top right corner.'}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Manage role users",src:n(56257).A+"",width:"2000",height:"719"})}),"\n",(0,o.jsx)(s.p,{children:"To remove a user or app from the role, click the trash bin icon in the very right of the row."}),"\n",(0,o.jsx)(s.h3,{id:"manage-role-permissions",children:"Manage role permissions"}),"\n",(0,o.jsx)(s.p,{children:"If you need to change the capabilities of a role, you can easily do so by assigning or removing permissions."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'To assign new permissions, simply go to the "Permissions" and click "Assign Permissions." From there, you can select the permissions you want to add to the role.'}),"\n",(0,o.jsx)(s.li,{children:"To remove existing permissions, click on the trash bin icon in the very right of the row."}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{type:"caution",children:(0,o.jsx)(s.p,{children:"If a permission is deleted, users or apps with this role will lose the access granted by this permission."})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Manage role permissions",src:n(22821).A+"",width:"2000",height:"773"})}),"\n",(0,o.jsx)(s.h2,{id:"manage-roles-from-the-details-page-of-a-user-or-app",children:"Manage roles from the details page of a user or app"}),"\n",(0,o.jsx)(s.p,{children:'You can find a "Roles" tab in the details page of a user or app. Click the tab to view and manage the roles assigned to the user or app.'}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Application roles",src:n(61677).A+"",width:"2620",height:"1296"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},61677:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/app-roles-6084df6c23aec9c3f331738031f197b2.webp"},54925:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/create-role-056e6b0093c607d962f4026ff797492e.webp"},75452:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/manage-permissions-b0d2b48364bea75be8e2bc7606bf4dac.webp"},22821:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/manage-role-permissions-60ed8451c3190253c64f9e2043f2e062.webp"},56257:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/manage-role-users-ed9be1c9b698c054d723f2afa17ef2b7.webp"},15658:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>t});var i=n(30758);const o={},r=i.createContext(o);function a(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);