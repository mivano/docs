"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[34134],{67585:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(25710);const r=[{value:"Sign in with Hugging Face account",id:"sign-in-with-hugging-face-account",level:2},{value:"Create an OAuth app in the Hugging Face",id:"create-an-oauth-app-in-the-hugging-face",level:2},{value:"Managing Hugging Face OAuth apps",id:"managing-hugging-face-oauth-apps",level:2},{value:"Configure your connector",id:"configure-your-connector",level:2},{value:"Config types",id:"config-types",level:3}];function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"sign-in-with-hugging-face-account",children:"Sign in with Hugging Face account"}),"\n",(0,o.jsxs)(n.p,{children:["Go to the ",(0,o.jsx)(n.a,{href:"https://huggingface.co/",children:"Hugging Face website"})," and sign in with your Hugging Face account. You may register a new account if you don't have one."]}),"\n",(0,o.jsx)(n.h2,{id:"create-an-oauth-app-in-the-hugging-face",children:"Create an OAuth app in the Hugging Face"}),"\n",(0,o.jsxs)(n.p,{children:["Follow the ",(0,o.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#creating-an-oauth-app",children:"Creating an oauth app"})," guide, and register a new application."]}),"\n",(0,o.jsx)(n.p,{children:"In the creation process, you will need to provide the following information:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Application Name"}),": The name of your application."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Homepage URL"}),": The URL of your application's homepage or landing page."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Logo URL"}),": The URL of your application's logo."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Scopes"}),": The scopes allowed for the OAuth app. For Hugging Face connector, usually use ",(0,o.jsx)(n.code,{children:"profile"})," to get the user's profile information and ",(0,o.jsx)(n.code,{children:"email"})," to get the user's email address. Ensure these scopes are allowed in your Hugging Face OAuth app if you want to use them."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Redirect URI"}),": The URL to redirect the user to after they have authenticated. You can find the redirect URI in the Logto Admin Console when you're creating a Hugging Face connector or in the created Hugging Face connector details page."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"managing-hugging-face-oauth-apps",children:"Managing Hugging Face OAuth apps"}),"\n",(0,o.jsxs)(n.p,{children:["Go to the ",(0,o.jsx)(n.a,{href:"https://huggingface.co/settings/connected-applications",children:"Connected Applications"})," page, you can add, edit or delete existing OAuth apps.\nYou can also find ",(0,o.jsx)(n.code,{children:"Client ID"})," and generate ",(0,o.jsx)(n.code,{children:"App secrets"})," in corresponding OAuth app settings pages."]}),"\n",(0,o.jsx)(n.h2,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,o.jsxs)(n.p,{children:["Go back to Logto Admin Console And Fill out the ",(0,o.jsx)(n.code,{children:"clientId"})," and ",(0,o.jsx)(n.code,{children:"clientSecret"})," field with ",(0,o.jsx)(n.em,{children:"Client ID"})," and ",(0,o.jsx)(n.em,{children:"App Secret"})," you've got from OAuth app detail pages mentioned in the previous section."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"scope"})," is a space-delimited list of ",(0,o.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#currently-supported-scopes",children:"Hugging Face supported scopes"}),". If not provided, scope defaults to be ",(0,o.jsx)(n.code,{children:"profile"}),". For Hugging Face connector, the scope you may want to use is ",(0,o.jsx)(n.code,{children:"profile"})," and ",(0,o.jsx)(n.code,{children:"email"}),". ",(0,o.jsx)(n.code,{children:"profile"})," scope is required to get the user's profile information, and ",(0,o.jsx)(n.code,{children:"email"})," scope is required to get the user's email address. Ensure you have allowed these scopes in your Hugging Face OAuth app (configured in ",(0,o.jsx)(n.a,{href:"#create-an-oauth-app-in-the-hugging-face",children:"Create an OAuth app in the Hugging Face"})," section)."]}),"\n",(0,o.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"scope"}),(0,o.jsx)(n.td,{children:"string"})]})]})]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},29679:(e,n,t)=>{t.d(n,{Ay:()=>p,RM:()=>d});var o=t(86070),i=t(25710),r=t(81742),s=t(93500),c=t(10388),a=t(60537),l=t(93511);const d=[...r.RM,{value:"Installation",id:"installation",level:3},...s.RM,...c.RM,{value:"Update Razor pages",id:"update-razor-pages",level:3},...a.RM,...l.RM];function h(e){const n={h3:"h3",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(s.Ay,{}),"\n",(0,o.jsx)(c.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"update-razor-pages",children:"Update Razor pages"}),"\n",(0,o.jsx)(a.Ay,{}),"\n",(0,o.jsx)(l.Ay,{sdk:".NET Core (Blazor Server)"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},43497:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(25710);const r=[];function s(e){const n={img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Connector tab",src:t(76588).A+"",width:"3352",height:"1226"})}),"\n",(0,o.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,o.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,o.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},69935:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var o=t(86070),i=t(25710);const r=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",s=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function c(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Get Started",src:t(3525).A+"",width:"2354",height:"588"})}),"\n",(0,o.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,o.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,o.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Framework List",src:t(61980).A+"",width:"3626",height:"2804"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,o.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,o.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},89647:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(25710);const r=[];function s(e){const n={admonition:"admonition",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(52450).A+"",width:"3502",height:"1794"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Save changes",src:t(11618).A+"",width:"2474",height:"188"})}),"\n",(0,o.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},26092:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(25710);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n",(0,o.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,o.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,o.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,o.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,o.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["Basic knowledge of ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},65286:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(25710);const r=[];function s(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},93511:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(25710);const r=[];function s(e){const n={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,o.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},48452:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(25710);const r=[];function s(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},60269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,connector:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(86070),i=t(25710);t(26092),t(69935),t(43497),t(65286),t(89647),t(48452),t(29679),t(67585);const r={slug:"how-to-build-hugging-face-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","hugging-face","dotnet-core-blazor-webassembly","c#","social-sign-in","sign-in","login"],title:"How to build Hugging Face sign-in with .NET Core (Blazor WebAssembly) and Logto"},s=void 0,c={permalink:"/tutorial/how-to-build-hugging-face-sign-in-with-dotnet-core-blazor-webassembly-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-blazor-webassembly-hugging-face.mdx",title:"How to build Hugging Face sign-in with .NET Core (Blazor WebAssembly) and Logto",description:"\x3c!--",date:"2024-06-01T07:56:51.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"hugging-face",permalink:"/tutorial/tags/hugging-face"},{inline:!0,label:"dotnet-core-blazor-webassembly",permalink:"/tutorial/tags/dotnet-core-blazor-webassembly"},{inline:!0,label:"c#",permalink:"/tutorial/tags/c"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.355,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-hugging-face-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","hugging-face","dotnet-core-blazor-webassembly","c#","social-sign-in","sign-in","login"],title:"How to build Hugging Face sign-in with .NET Core (Blazor WebAssembly) and Logto"},unlisted:!1,prevItem:{title:"How to build Google sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-google-sign-in-with-dotnet-core-blazor-webassembly-and-logto"},nextItem:{title:"How to build Kakao sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-kakao-sign-in-with-dotnet-core-blazor-webassembly-and-logto"}},a={authorsImageUrls:[void 0]},l="Hugging Face",d=[];function h(e){return(0,o.jsx)(o.Fragment,{})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h()}},81742:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(25710);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The following demonstration is built on .NET Core 8.0 and ",(0,o.jsx)(n.a,{href:"https://github.com/WildGums/Blorc.OpenIdConnect",children:"Blorc.OpenIdConnect"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},93500:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(25710);const r=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"dotnet add package Blorc.OpenIdConnect\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},10388:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(25710);const r=[{value:"Add script references",id:"add-script-references",level:3},{value:"Register services",id:"register-services",level:3},{value:"Configure application",id:"configure-application",level:3}];function s(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"add-script-references",children:"Add script references"}),"\n",(0,o.jsxs)(n.p,{children:["Include ",(0,o.jsx)(n.code,{children:"Blorc.Core/injector.js"})," the ",(0,o.jsx)(n.code,{children:"index.html"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<head>\n  \x3c!-- ... --\x3e\n  <script src="_content/Blorc.Core/injector.js"><\/script>\n  \x3c!-- ... --\x3e\n</head>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"register-services",children:"Register services"}),"\n",(0,o.jsxs)(n.p,{children:["Add the following code to the ",(0,o.jsx)(n.code,{children:"Program.cs"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:'using Blorc.OpenIdConnect;\nusing Blorc.Services;\n\nbuilder.Services.AddBlorcCore();\nbuilder.Services.AddAuthorizationCore();\nbuilder.Services.AddBlorcOpenIdConnect(\n    options =>\n    {\n        builder.Configuration.Bind("IdentityServer", options);\n    });\n\nvar webAssemblyHost = builder.Build();\n\nawait webAssemblyHost\n    .ConfigureDocumentAsync(async documentService =>\n    {\n        await documentService.InjectBlorcCoreJsAsync();\n        await documentService.InjectOpenIdConnectAsync();\n    });\n\nawait webAssemblyHost.RunAsync();\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["There's no need to use the ",(0,o.jsx)(n.code,{children:"Microsoft.AspNetCore.Components.WebAssembly.Authentication"})," package. The ",(0,o.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package will take care of the authentication process."]})}),"\n",(0,o.jsx)(n.h3,{id:"configure-application",children:"Configure application"}),"\n",(0,o.jsxs)(n.p,{children:["Add the following code to the ",(0,o.jsx)(n.code,{children:"appsettings.json"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json5",children:"{\n  // ...\n  IdentityServer: {\n    Authority: 'https://<your-logto-endpoint>/oidc',\n    ClientId: '<your-logto-app-id>',\n    PostLogoutRedirectUri: '<your-app-url>',\n    RedirectUri: '<your-app-url>',\n    ResponseType: 'code',\n    Scope: 'openid profile', // Add more scopes if needed\n  },\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Remember to add the ",(0,o.jsx)(n.code,{children:"RedirectUri"})," and ",(0,o.jsx)(n.code,{children:"PostLogoutRedirectUri"})," to the list of allowed redirect URIs in the Logto application settings. They are both the URL of your WASM application."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},60537:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(25710);const r=[{value:"Add <code>AuthorizeView</code> component",id:"add-authorizeview-component",level:3},{value:"Set up authentication",id:"set-up-authentication",level:3},{value:"Display user information",id:"display-user-information",level:3}];function s(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h3,{id:"add-authorizeview-component",children:["Add ",(0,o.jsx)(n.code,{children:"AuthorizeView"})," component"]}),"\n",(0,o.jsxs)(n.p,{children:["In the Razor pages that require authentication, add the ",(0,o.jsx)(n.code,{children:"AuthorizeView"})," component. Let's assume it's the ",(0,o.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cshtml",children:'@using Microsoft.AspNetCore.Components.Authorization\n@page "/"\n\n<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        <button @onclick="OnLogoutButtonClickAsync">\n            Sign out\n        </button>\n    </Authorized>\n    <NotAuthorized>\n        @* Unauthenticated view *@\n        <button @onclick="OnLoginButtonClickAsync">\n            Sign in\n        </button>\n    </NotAuthorized>\n</AuthorizeView>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"set-up-authentication",children:"Set up authentication"}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"Home.razor.cs"})," file (create it if it doesn't exist), add the following code:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",children:"using Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Components;\nusing Microsoft.AspNetCore.Components.Web;\nusing Blorc.OpenIdConnect;\nusing Microsoft.AspNetCore.Components.Authorization;\n\n[Authorize]\npublic partial class Home : ComponentBase\n{\n    [Inject]\n    public required IUserManager UserManager { get; set; }\n\n    public User<Profile>? User { get; set; }\n\n    [CascadingParameter]\n    protected Task<AuthenticationState>? AuthenticationStateTask { get; set; }\n\n    protected override async Task OnInitializedAsync()\n    {\n        User = await UserManager.GetUserAsync<User<Profile>>(AuthenticationStateTask!);\n    }\n\n    private async Task OnLoginButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignInRedirectAsync();\n    }\n\n    private async Task OnLogoutButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignOutRedirectAsync();\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once the user is authenticated, the ",(0,o.jsx)(n.code,{children:"User"})," property will be populated with the user information."]}),"\n",(0,o.jsx)(n.h3,{id:"display-user-information",children:"Display user information"}),"\n",(0,o.jsxs)(n.p,{children:["Here are some examples of how to display user information in the ",(0,o.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cshtml",children:'<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        @* ... *@\n        <p>You are signed in as @(@User?.Profile?.Name ?? "(unknown name)").</p>\n    </Authorized>\n    @* ... *@\n</AuthorizeView>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For more properties and claims, check the ",(0,o.jsx)(n.code,{children:"User"})," and ",(0,o.jsx)(n.code,{children:"Profile"})," classes in the ",(0,o.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},76588:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},61980:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},3525:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},11618:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},52450:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},25710:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(30758);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);