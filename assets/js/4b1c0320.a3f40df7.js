"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[53800],{4851:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"customization/match-your-brand","title":"Match your brand","description":"Omni sign-in experience","source":"@site/docs/customization/match-your-brand.mdx","sourceDirName":"customization","slug":"/customization/match-your-brand","permalink":"/customization/match-your-brand","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/customization/match-your-brand.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Customization","permalink":"/customization/"},"next":{"title":"Custom CSS","permalink":"/customization/custom-css"}}');var t=i(86070),r=i(15658);const a={sidebar_position:1},s="Match your brand",d={},l=[{value:"Omni sign-in experience",id:"omni-sign-in-experience",level:2},{value:"App-specific branding",id:"app-specific-branding",level:2},{value:"Organization-specific branding",id:"organization-specific-branding",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{CloudLink:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"match-your-brand",children:"Match your brand"})}),"\n",(0,t.jsx)(n.h2,{id:"omni-sign-in-experience",children:"Omni sign-in experience"}),"\n",(0,t.jsxs)(n.p,{children:["Customize the look and feel of your sign-in page by navigating to ",(0,t.jsx)(i,{to:"/sign-in-experience/branding",children:"Console > Sign-in experience > Branding"}),". This section allows you to easily adjust key branding elements."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Brand color"})}),"\n",(0,t.jsx)(n.p,{children:"Define the primary color used throughout the sign-in experience, including primary buttons, links, and other components. Replace the default Logto purple color with your brand's color. For dark mode, a separate brand color can be specified."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Company logo"})}),"\n",(0,t.jsx)(n.p,{children:"The logo will be displayed on the sign-in homepage, sign-up home, loading page, and other interfaces with our expansion."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"There are some limitations for images: they must be under 500KB and in SVG, PNG, JPG, JPEG, or ICO format."}),"\n",(0,t.jsx)(n.li,{children:"If you leave the logo field blank, the logo will not display in the interface."}),"\n",(0,t.jsx)(n.li,{children:"A dark mode version of the logo can also be uploaded."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Favicon"})}),"\n",(0,t.jsx)(n.p,{children:"A favicon is a small icon representing a website and is displayed in the browser tab, bookmarks, and other areas of the browser interface."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The image must be under 500KB and in SVG, PNG, JPG, JPEG, or ICO format. Uploading a square image is recommended to ensure a good presentation effect."}),"\n",(0,t.jsx)(n.li,{children:"A dark mode version of the favicon can also be uploaded."}),"\n",(0,t.jsx)(n.li,{children:"Besides, the browser title for different flows (Sign in/Sign up/Forgot password, etc.) is now used instead of a custom title."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Dark mode"})}),"\n",(0,t.jsx)(n.p,{children:"Enable dark mode to automatically adjust the sign-in page's appearance based on the user's system preferences."}),"\n",(0,t.jsx)(n.h2,{id:"app-specific-branding",children:"App-specific branding"}),"\n",(0,t.jsxs)(n.p,{children:["If your multi-app business needs app-level sign-in experiences, you can configure this in the application details page. Navigate to ",(0,t.jsx)(i,{to:"/applications",children:"Console > Applications"}),"."]}),"\n",(0,t.jsx)(n.p,{children:'By switching on "app-level sign-in experience", you can set up specific branding and colors for each app. When a sign-in initiated from an app with app-level branding enabled, the sign-in experience will be customized according to the app-level branding settings; otherwise, it will default to the omni sign-in experience settings.'}),"\n",(0,t.jsx)(n.p,{children:"Both light and dark mode settings are available for app-level branding. Dark mode settings will only take effect when the dark mode is enabled in the omni sign-in experience settings."}),"\n",(0,t.jsx)(n.h2,{id:"organization-specific-branding",children:"Organization-specific branding"}),"\n",(0,t.jsxs)(n.p,{children:["To dynamically show your client\u2019s organization logo in the sign-in experience, you can upload the organization logos in the organization settings page. Navigate to ",(0,t.jsx)(i,{to:"/organizations",children:"Console > Organizations"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Then, when triggering a sign-in, you can pass the organization ID in the ",(0,t.jsx)(n.code,{children:"organization_id"})," parameter to tell Logto which organization logo to display. For example, to show the organization logo for organization ID ",(0,t.jsx)(n.code,{children:"123456"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you are using Logto SDK, you can pass the ",(0,t.jsx)(n.code,{children:"organization_id"})," parameter in the ",(0,t.jsx)(n.code,{children:"extraParams"})," object of the ",(0,t.jsx)(n.code,{children:"signIn"})," method."]}),"\n",(0,t.jsxs)(n.li,{children:["If you are using an OIDC client, you can pass the ",(0,t.jsx)(n.code,{children:"organization_id"})," parameter when requesting the ",(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#AuthorizationEndpoint",children:"authorization endpoint"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Both light and dark mode settings are available for organization-level branding. Dark mode settings will only take effect when the dark mode is enabled in the omni sign-in experience settings."}),"\n",(0,t.jsxs)(n.p,{children:["Here's an example of how to pass the ",(0,t.jsx)(n.code,{children:"organization_id"})," parameter in the ",(0,t.jsx)(n.code,{children:"signIn"})," method using ",(0,t.jsx)(n.a,{href:"/quick-starts/vanilla-js/#implement-sign-in-and-sign-out",children:"Logto browser SDK"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"index.ts"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"logtoClient.signIn({\n  // ...other parameters\n  redirectUri: 'https://your-redirect-uri',\n  extraParams: {\n    organization_id: '123456',\n  },\n});\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["We are gradually rolling out the ",(0,t.jsx)(n.code,{children:"extraParams"})," feature to all Logto SDKs. If you don't see it in your SDK yet, please contact us."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var o=i(30758);const t={},r=o.createContext(t);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);