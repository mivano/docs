"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[72405],{57041:(e,t,i)=>{i.d(t,{Ay:()=>a,RM:()=>o});var n=i(86070),s=i(15658);const o=[];function r(e){const t={a:"a",admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["For more information about SSO and how to configure SSO in Logto, please check out the ",(0,n.jsx)(t.a,{href:"/connectors/enterprise-connectors",children:"Enterprise SSO (SAML & OIDC)"})," documentation to get started."]})})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},34642:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"integrations/sso/entra-id-saml/README","title":"Set up Single Sign-On with Microsoft Entra ID (SAML)","description":"With minimal configuration efforts, this connector allows integration with Microsoft Entra ID (formerly Azure AD) for enterprise SSO.","source":"@site/docs/integrations/sso/entra-id-saml/README.mdx","sourceDirName":"integrations/sso/entra-id-saml","slug":"/integrations/entra-id-saml","permalink":"/integrations/entra-id-saml","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrations/sso/entra-id-saml/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/entra-id-saml","sidebar_label":"Microsoft Entra ID (SAML)","sidebar_custom_props":{"description":"Formerly Azure AD, a comprehensive cloud-based identity management service.","logoFilename":"entra-id.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Microsoft Entra ID (OIDC)","permalink":"/integrations/entra-id-oidc"},"next":{"title":"Google Workspace","permalink":"/integrations/google-workspace"}}');var s=i(86070),o=i(15658),r=i(57041);const a={slug:"/integrations/entra-id-saml",sidebar_label:"Microsoft Entra ID (SAML)",sidebar_custom_props:{description:"Formerly Azure AD, a comprehensive cloud-based identity management service.",logoFilename:"entra-id.svg"}},c="Set up Single Sign-On with Microsoft Entra ID (SAML)",d={},l=[...r.RM,{value:"Step 1: Create an Azure AD SSO application",id:"step-1-create-an-azure-ad-sso-application",level:2},{value:"Step 2: Configure SAML SSO at Logto",id:"step-2-configure-saml-sso-at-logto",level:2},{value:"Step 3: Configure user attributes mapping",id:"step-3-configure-user-attributes-mapping",level:2},{value:"Step 4: Assign users to the Azure AD SSO application",id:"step-4-assign-users-to-the-azure-ad-sso-application",level:2},{value:"Step 5: Set email domains and enable the SSO connector",id:"step-5-set-email-domains-and-enable-the-sso-connector",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"set-up-single-sign-on-with-microsoft-entra-id-saml",children:"Set up Single Sign-On with Microsoft Entra ID (SAML)"})}),"\n",(0,s.jsx)(t.p,{children:"With minimal configuration efforts, this connector allows integration with Microsoft Entra ID (formerly Azure AD) for enterprise SSO."}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(t.h2,{id:"step-1-create-an-azure-ad-sso-application",children:"Step 1: Create an Azure AD SSO application"}),"\n",(0,s.jsx)(t.p,{children:"Initiate the Azure AD SSO integration by creating an SSO application on the Azure AD side."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Go to the ",(0,s.jsx)(t.a,{href:"https://portal.azure.com/",children:"Azure portal"})," and sign in as an administrator."]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.code,{children:"Microsoft Entra ID"})," service."]}),"\n",(0,s.jsxs)(t.li,{children:["Navigate to the ",(0,s.jsx)(t.code,{children:"Enterprise applications"})," using the side menu. Click ",(0,s.jsx)(t.code,{children:"New application"}),", and select ",(0,s.jsx)(t.code,{children:"Create your own application"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Azure AD create application.webp",src:i(34027).A+"",width:"2084",height:"1463"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Enter the application name and select ",(0,s.jsx)(t.code,{children:"Integrate any other application you don't find in the gallery (Non-gallery)"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Select ",(0,s.jsx)(t.code,{children:"Setup single sign-on"})," > ",(0,s.jsx)(t.code,{children:"SAML"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Azure AD set up SSO.webp",src:i(65875).A+"",width:"2084",height:"1462"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Follow the instructions, as the first step, you will need to fill in the basic SAML configuration using the following information provided by Logto."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Azure AD SP config",src:i(25988).A+"",width:"2084",height:"1461"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Audience URI(SP Entity ID)"}),": It represents as a globally unique identifier for your Logto service, functioning as the EntityId for SP during authentication requests to the IdP. This identifier is pivotal for the secure exchange of SAML assertions and other authentication-related data between the IdP and Logto."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"ACS URL"}),": The Assertion Consumer Service (ACS) URL is the location where the SAML assertion is sent with a POST request. This URL is used by the IdP to send the SAML assertion to Logto. It acts as a callback URL where Logto expects to receive and consume the SAML response containing the user's identity information."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.code,{children:"Save"})," to continue."]}),"\n",(0,s.jsx)(t.h2,{id:"step-2-configure-saml-sso-at-logto",children:"Step 2: Configure SAML SSO at Logto"}),"\n",(0,s.jsxs)(t.p,{children:["To make the SAML SSO integration work, you will need to provide the IdP metadata back to Logto. Let's switch back to the Logto side, and navigate to the ",(0,s.jsx)(t.code,{children:"Connection"})," tab of your Azure AD SSO connector."]}),"\n",(0,s.jsxs)(t.p,{children:["Logto provides three different ways to configure the IdP metadata. The easiest way is by providing the ",(0,s.jsx)(t.code,{children:"metadata URL"})," of the Azure AD SSO application."]}),"\n",(0,s.jsxs)(t.p,{children:["Copy the ",(0,s.jsx)(t.code,{children:"App Federation Metadata Url"})," from your Azure AD SSO application's ",(0,s.jsx)(t.code,{children:"SAML Certificates section"})," and paste it into the ",(0,s.jsx)(t.code,{children:"Metadata URL"})," field in Logto."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Azure AD Metadata URL.webp",src:i(29981).A+"",width:"2084",height:"1462"})}),"\n",(0,s.jsx)(t.p,{children:"Logto will fetch the metadata from the URL and configure the SAML SSO integration automatically."}),"\n",(0,s.jsx)(t.h2,{id:"step-3-configure-user-attributes-mapping",children:"Step 3: Configure user attributes mapping"}),"\n",(0,s.jsx)(t.p,{children:"Logto provides a flexible way to map the user attributes returned from IdP to the user attributes in Logto. Logto will sync the following user attributes from IdP by default:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["id: The unique identifier of the user. Logto will read the ",(0,s.jsx)(t.code,{children:"nameID"})," claim from the SAML response as the user SSO identity id."]}),"\n",(0,s.jsxs)(t.li,{children:["email: The email address of the user. Logto will read the ",(0,s.jsx)(t.code,{children:"email"})," claim from the SAML response as the user primary email by default."]}),"\n",(0,s.jsx)(t.li,{children:"name: The name of the user."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You may manage the user attributes mapping logic either on the Azure AD side or Logto side."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Map the AzureAD user attributes to Logto user attributes on Logto side."}),"\n",(0,s.jsxs)(t.p,{children:["Visit the ",(0,s.jsx)(t.code,{children:"Attributes & Claims"})," section of your Azure AD SSO application."]}),"\n",(0,s.jsx)(t.p,{children:"Copy the following attribute names (with namespace prefix) and paste them into the corresponding fields in Logto."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"})," (Recommendation: update this attribute value map to ",(0,s.jsx)(t.code,{children:"user.displayname"})," for better user experience)a"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Azure AD default attribute mapping.webp",src:i(44769).A+"",width:"6252",height:"3504"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Map the AzureAD user attributes to Logto user attributes at the AzureAD side."}),"\n",(0,s.jsxs)(t.p,{children:["Visit the ",(0,s.jsx)(t.code,{children:"Attributes & Claims"})," section of your Azure AD SSO application."]}),"\n",(0,s.jsxs)(t.p,{children:["Click on ",(0,s.jsx)(t.code,{children:"Edit"}),", and update the ",(0,s.jsx)(t.code,{children:"Additional claims"})," fields based on the Logto user attributes settings:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"update the claim name value based on the Logto user attributes settings."}),"\n",(0,s.jsx)(t.li,{children:"remove the namespace prefix."}),"\n",(0,s.jsxs)(t.li,{children:["click ",(0,s.jsx)(t.code,{children:"Save"})," to continue."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Should end up with the following settings:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Azure AD_Logto attribute mapping.webp",src:i(97559).A+"",width:"6252",height:"3162"})}),"\n",(0,s.jsxs)(t.p,{children:["You may also specify additional user attributes on the Azure AD side. Logto will keep a record of the original user attributes returned from IdP under the user's ",(0,s.jsx)(t.code,{children:"sso_identity"})," field."]}),"\n",(0,s.jsx)(t.h2,{id:"step-4-assign-users-to-the-azure-ad-sso-application",children:"Step 4: Assign users to the Azure AD SSO application"}),"\n",(0,s.jsxs)(t.p,{children:["Visit the ",(0,s.jsx)(t.code,{children:"Users and groups"})," section of your Azure AD SSO application. Click on ",(0,s.jsx)(t.code,{children:"Add user/group"})," to assign users to the Azure AD SSO application. Only users assigned to your Azure AD SSO application will be able to authenticate through the Azure AD SSO connector."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Azure AD assign users.webp",src:i(56788).A+"",width:"6705",height:"2931"})}),"\n",(0,s.jsx)(t.h2,{id:"step-5-set-email-domains-and-enable-the-sso-connector",children:"Step 5: Set email domains and enable the SSO connector"}),"\n",(0,s.jsxs)(t.p,{children:["Provide the ",(0,s.jsx)(t.code,{children:"email domains"})," of your organization at Logto's connector ",(0,s.jsx)(t.code,{children:"SSO experience"})," tab. This will enable the SSO connector as an authentication method for those users."]}),"\n",(0,s.jsx)(t.p,{children:"Users with email addresses in the specified domains will be redirected to use the SAML SSO connector as their only authentication method."}),"\n",(0,s.jsxs)(t.p,{children:["Please check Azure AD's official ",(0,s.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/add-application-portal-setup-sso",children:"documentation"})," for more details about the Azure AD SSO integration."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},56788:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/azure_ad_assign_users-8997b6906f1d43ddd66069d053cc429d.webp"},34027:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/azure_ad_create_application-53a2881e548a2da0b8da4aa413fffaf6.webp"},44769:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/azure_ad_default_attribute_mapping-ef77c6b868372f41ae3a35d0f0e78e1b.webp"},97559:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/azure_ad_logto_attribute_mapping-06c15edd5383d728d128338558e0c63b.webp"},29981:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/azure_ad_metadata_url-a2a6ca0844e0c42a80f36a0fc6c115b9.webp"},65875:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/azure_ad_set_up_single_sign_on-43a54d9878b88ef6473961b222377b47.webp"},25988:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/azure_ad_sp_config-fceb6b9a77f55d69d13b6ae94a9fc773.webp"},15658:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(30758);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);