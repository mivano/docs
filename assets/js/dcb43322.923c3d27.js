"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[59472],{35774:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>o});var i=t(86070),r=t(15658);const o=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In this guide, we assume you have basic knowledge of Logto Connectors. If you don't, check out the ",(0,i.jsx)(n.a,{href:"/docs/recipes/configure-connectors/",children:"Configure connectors"})," guide to get started."]}),"\n"]})})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},23345:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"integrations/social/azuread/README","title":"README","description":"The Microsoft Azure AD connector provides a succinct way for your application to use Azure\u2019s OAuth 2.0 authentication system.","source":"@site/docs/integrations/social/azuread/README.mdx","sourceDirName":"integrations/social/azuread","slug":"/integrations/azuread","permalink":"/integrations/azuread","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrations/social/azuread/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/azuread","sidebar_label":"Microsoft","sidebar_custom_props":{"description":"Microsoft Azure Active Directory is a leading AD provider."}},"sidebar":"integrationsSidebar","previous":{"title":"Apple","permalink":"/integrations/apple"},"next":{"title":"Discord","permalink":"/integrations/discord"}}');var r=t(86070),o=t(15658),s=t(35774);const c={slug:"/integrations/azuread",sidebar_label:"Microsoft",sidebar_custom_props:{description:"Microsoft Azure Active Directory is a leading AD provider."}},l="Microsoft Azure AD connector",a={},d=[...s.RM,{value:"Set up Microsoft Azure AD in the Azure Portal",id:"set-up-microsoft-azure-ad-in-the-azure-portal",level:2},{value:"Fill in the configuration in Logto",id:"fill-in-the-configuration-in-logto",level:2},{value:"Client ID",id:"client-id",level:3},{value:"Client Secret",id:"client-secret",level:3},{value:"Cloud Instance",id:"cloud-instance",level:3},{value:"Tenant ID",id:"tenant-id",level:3},{value:"References",id:"references",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Ay,{}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"microsoft-azure-ad-connector",children:"Microsoft Azure AD connector"})}),"\n",(0,r.jsx)(n.p,{children:"The Microsoft Azure AD connector provides a succinct way for your application to use Azure\u2019s OAuth 2.0 authentication system."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Table of contents"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#microsoft-azure-ad-connector",children:"Microsoft Azure AD connector"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#set-up-microsoft-azure-ad-in-the-azure-portal",children:"Set up Microsoft Azure AD in the Azure Portal"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#fill-in-the-configuration",children:"Fill in the configuration"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#configure-your-client-secret",children:"Configure your client secret"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#config-types",children:"Config types"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#references",children:"References"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"set-up-microsoft-azure-ad-in-the-azure-portal",children:"Set up Microsoft Azure AD in the Azure Portal"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Visit the ",(0,r.jsx)(n.a,{href:"https://portal.azure.com/#home",children:"Azure Portal"})," and sign in with your Azure account. You need to have an active subscription to access Microsoft Azure AD."]}),"\n",(0,r.jsxs)(n.li,{children:["Click the ",(0,r.jsx)(n.strong,{children:"Azure Active Directory"})," from the services they offer, and click the ",(0,r.jsx)(n.strong,{children:"App Registrations"})," from the left menu."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"New Registration"})," at the top, enter a description, select your ",(0,r.jsx)(n.strong,{children:"access type"})," and add your ",(0,r.jsx)(n.strong,{children:"Redirect URI"}),", which will redirect the user to the application after logging in. In our case, this will be ",(0,r.jsx)(n.code,{children:"${your_logto_endpoint}/callback/${connector_id}"}),". e.g. ",(0,r.jsx)(n.code,{children:"https://foo.logto.app/callback/${connector_id}"}),". (The ",(0,r.jsx)(n.code,{children:"connector_id"})," can be also found on the top bar of the Logto Admin Console connector details page)","\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["You can copy the ",(0,r.jsx)(n.code,{children:"Callback URI"})," in the configuration section."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Select Web as Platform."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fill-in-the-configuration-in-logto",children:"Fill in the configuration in Logto"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientId"}),(0,r.jsx)(n.td,{children:"string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientSecret"}),(0,r.jsx)(n.td,{children:"string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tenantId"}),(0,r.jsx)(n.td,{children:"string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cloudInstance"}),(0,r.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"client-id",children:"Client ID"}),"\n",(0,r.jsxs)(n.p,{children:["You may find the ",(0,r.jsx)(n.strong,{children:"Application (client) ID"})," in the ",(0,r.jsx)(n.strong,{children:"Overview"})," section of your newly created application in the Azure Portal."]}),"\n",(0,r.jsx)(n.h3,{id:"client-secret",children:"Client Secret"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In your newly created application, click the ",(0,r.jsx)(n.strong,{children:"Certificates & Secrets"})," to get a client secret, and click the ",(0,r.jsx)(n.strong,{children:"New client secret"})," from the top."]}),"\n",(0,r.jsx)(n.li,{children:"Enter a description and an expiration."}),"\n",(0,r.jsxs)(n.li,{children:["This will only show your client secret once. Fill the ",(0,r.jsx)(n.strong,{children:"value"})," to the Logto connector configuration and save it to a secure location."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"cloud-instance",children:"Cloud Instance"}),"\n",(0,r.jsxs)(n.p,{children:["Usually, it is ",(0,r.jsx)(n.code,{children:"https://login.microsoftonline.com/"}),". See ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/authentication-national-cloud#azure-ad-authentication-endpoints",children:"Azure AD authentication endpoints"})," for more information."]}),"\n",(0,r.jsx)(n.h3,{id:"tenant-id",children:"Tenant ID"}),"\n",(0,r.jsxs)(n.p,{children:["Logto will use this field to construct the authorization endpoints. This value is dependent on the ",(0,r.jsx)(n.strong,{children:"access type"})," you selected when creating the application in the Azure Portal."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you select ",(0,r.jsx)(n.strong,{children:"Accounts in this organizational directory only"})," for access type then you need to enter your ",(0,r.jsx)(n.strong,{children:"{TenantID}"}),". You can find the tenant ID in the ",(0,r.jsx)(n.strong,{children:"Overview"})," section of your Azure Active Directory."]}),"\n",(0,r.jsxs)(n.li,{children:["If you select ",(0,r.jsx)(n.strong,{children:"Accounts in any organizational directory"})," for access type then you need to enter ",(0,r.jsx)(n.strong,{children:"organizations"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If you select ",(0,r.jsx)(n.strong,{children:"Accounts in any organizational directory or personal Microsoft accounts"})," for access type then you need to enter ",(0,r.jsx)(n.strong,{children:"common"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If you select ",(0,r.jsx)(n.strong,{children:"Personal Microsoft accounts only"})," for access type then you need to enter ",(0,r.jsx)(n.strong,{children:"consumers"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-app-sign-user-overview",children:"Web app that signs in users"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},15658:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(30758);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);