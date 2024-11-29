"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[36832],{82415:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(15658);const r=[{value:"Set up a project in the Kakao Devlopers Console",id:"set-up-a-project-in-the-kakao-devlopers-console",level:3},{value:"Configure Kakao Login",id:"configure-kakao-login",level:3},{value:"Activate Kakao Login",id:"activate-kakao-login",level:4},{value:"Privacy Setting",id:"privacy-setting",level:4},{value:"Security Setting (Optional)",id:"security-setting-optional",level:4},{value:"Configure Logto",id:"configure-logto",level:3},{value:"Config types",id:"config-types",level:4},{value:"clientId",id:"clientid",level:4},{value:"clientSeceret",id:"clientseceret",level:4}];function s(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"set-up-a-project-in-the-kakao-devlopers-console",children:"Set up a project in the Kakao Devlopers Console"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://developers.kakao.com/console/app",children:"Kakao Developers Console"})," and sign in with your Kakao account."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Add an application"})," to create new project or choose exist project."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configure-kakao-login",children:"Configure Kakao Login"}),"\n",(0,o.jsx)(n.h4,{id:"activate-kakao-login",children:"Activate Kakao Login"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Product Settings -> Kakao Login"})," from the menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Turn on ",(0,o.jsx)(n.code,{children:"Kakao Login Activation"})]}),"\n",(0,o.jsxs)(n.li,{children:["Add below URL into ",(0,o.jsx)(n.code,{children:"Redirect URI"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"http(s)://YOUR_URL/callback/${connector_id}"})," (The ",(0,o.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page.)"]}),"\n",(0,o.jsxs)(n.li,{children:["(Please replace ",(0,o.jsx)(n.code,{children:"YOUR_URL"})," with your ",(0,o.jsx)(n.code,{children:"Logto"})," URL, and choose ",(0,o.jsx)(n.code,{children:"http"})," or ",(0,o.jsx)(n.code,{children:"https"})," on your situation.)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"privacy-setting",children:"Privacy Setting"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Product Settings -> Kakao Login -> Consent Item"})," from the menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Change state of ",(0,o.jsx)(n.code,{children:"Nickname"}),", ",(0,o.jsx)(n.code,{children:"Profile image"}),", and ",(0,o.jsx)(n.code,{children:"Email"})," to ",(0,o.jsx)(n.strong,{children:"Required consent"})," (You might not able to change ",(0,o.jsx)(n.code,{children:"Email"})," to ",(0,o.jsx)(n.strong,{children:"Required consent"})," because of your project setting.)"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"security-setting-optional",children:"Security Setting (Optional)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Product Settings -> Kakao Login -> Security"})," from the menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.code,{children:"Client secret code"})," to generate secret code."]}),"\n",(0,o.jsxs)(n.li,{children:["Change ",(0,o.jsx)(n.code,{children:"Activation state"})," to Enable. (If you enable it, ",(0,o.jsx)(n.code,{children:"secret code"})," is necessary.)"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configure-logto",children:"Configure Logto"}),"\n",(0,o.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string?"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"clientid",children:"clientId"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"clientId"})," is ",(0,o.jsx)(n.code,{children:"REST API key"})," of your project.\n(You can find it from ",(0,o.jsx)(n.code,{children:"summary"})," of your project from Kakao developers console.)"]}),"\n",(0,o.jsx)(n.h4,{id:"clientseceret",children:"clientSeceret"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"clientSecret"})," is ",(0,o.jsx)(n.code,{children:"Secret Code"})," of your project.\n(Please check ",(0,o.jsx)(n.a,{href:"#security-setting-optional",children:"Security Setting (Optional)"}),")"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},85398:(e,n,t)=>{t.d(n,{Ay:()=>w,RM:()=>m});var o=t(86070),i=t(15658);function r(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Since Blazor Server uses SignalR to communicate between the server and the client, this means methods that directly manipulate the HTTP context (like issuing challenges or redirects) don't work as expected when called from a Blazor component."}),"\n",(0,o.jsx)(n.p,{children:"To make it right, we need to explicitly add two endpoints for sign-in and sign-out redirects:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:'app.MapGet("/SignIn", async context =>\n{\n    if (!(context.User?.Identity?.IsAuthenticated ?? false))\n    {\n        await context.ChallengeAsync(new AuthenticationProperties { RedirectUri = "/" });\n    } else {\n        context.Response.Redirect("/");\n    }\n});\n\napp.MapGet("/SignOut", async context =>\n{\n    if (context.User?.Identity?.IsAuthenticated ?? false)\n    {\n        await context.SignOutAsync(new AuthenticationProperties { RedirectUri = "/" });\n    } else {\n        context.Response.Redirect("/");\n    }\n});\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now we can redirect to these endpoints to trigger sign-in and sign-out."})]})}function s(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}function c(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Alternatively, you can use the ",(0,o.jsx)(n.code,{children:"AuthorizeView"})," component to conditionally render content based on the user's authentication state. This component is useful when you want to show different content to authenticated and unauthenticated users."]}),"\n",(0,o.jsx)(n.p,{children:"In your Razor component, add the following code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cshtml",metastring:'title="Components/Pages/Index.razor"',children:"@using Microsoft.AspNetCore.Components.Authorization\n\n@* ... *@\n\n<AuthorizeView>\n    <Authorized>\n        <p>Name: @User?.Identity?.Name</p>\n        @* Content for authenticated users *@\n    </Authorized>\n    <NotAuthorized>\n        @* Content for unauthenticated users *@\n    </NotAuthorized>\n</AuthorizeView>\n\n@* ... *@\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"AuthorizeView"})," component requires a cascading parameter of type ",(0,o.jsx)(n.code,{children:"Task<AuthenticationState>"}),". A direct way to get this parameter is to add the ",(0,o.jsx)(n.code,{children:"<CascadingAuthenticationState>"})," component. However, due to the nature of Blazor Server, we cannot simply add the component to the layout or the root component (it may not work as expected). Instead, we can add the following code to the builder (",(0,o.jsx)(n.code,{children:"Program.cs"})," or ",(0,o.jsx)(n.code,{children:"Startup.cs"}),") to provide the cascading parameter:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:"builder.Services.AddCascadingAuthenticationState();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then you can use the ",(0,o.jsx)(n.code,{children:"AuthorizeView"})," component in every component that needs it."]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}function l(e){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In the Razor component, add the following code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cshtml",metastring:'title="Components/Pages/Index.razor"',children:'@using Microsoft.AspNetCore.Components.Authorization\n@using System.Security.Claims\n@inject AuthenticationStateProvider AuthenticationStateProvider\n@inject NavigationManager NavigationManager\n\n@* ... *@\n\n<p>Is authenticated: @User.Identity?.IsAuthenticated</p>\n@if (User.Identity?.IsAuthenticated == true)\n{\n    <button @onclick="SignOut">Sign out</button>\n}\nelse\n{\n    <button @onclick="SignIn">Sign in</button>\n}\n\n@* ... *@\n\n@code {\n    private ClaimsPrincipal? User { get; set; }\n\n    protected override async Task OnInitializedAsync()\n    {\n        var authState = await AuthenticationStateProvider.GetAuthenticationStateAsync();\n        User = authState.User;\n    }\n\n    private void SignIn()\n    {\n        NavigationManager.NavigateTo("/SignIn", forceLoad: true);\n    }\n\n    private void SignOut()\n    {\n        NavigationManager.NavigateTo("/SignOut", forceLoad: true);\n    }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Explanation"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The injected ",(0,o.jsx)(n.code,{children:"AuthenticationStateProvider"})," is used to get the current user's authentication state, and populate the ",(0,o.jsx)(n.code,{children:"User"})," property."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"SignIn"})," and ",(0,o.jsx)(n.code,{children:"SignOut"})," methods are used to redirect the user to the sign-in and sign-out endpoints respectively. Since the nature of Blazor Server, we need to use ",(0,o.jsx)(n.code,{children:"NavigationManager"})," with force load to trigger the redirection."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'The page will show the "Sign in" button if the user is not authenticated, and show the "Sign out" button if the user is authenticated.'})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}var h=t(59946),p=t(43141),u=t(35254),g=t(98420),x=t(53178),j=t(92409);const m=[...u.RM,{value:"Installation",id:"installation",level:3},...g.RM,{value:"Add Logto authentication",id:"add-logto-authentication",level:3},...h.RM,{value:"Sign-in and sign-out flows",id:"sign-in-and-sign-out-flows",level:3},...x.RM,{value:"Configure redirect URIs",id:"configure-redirect-uris",level:3},...p.RM,{value:"Add routes",id:"add-routes",level:3},{value:"Implement sign-in/sign-out buttons",id:"implement-sign-insign-out-buttons",level:3},{value:"The <code>&lt;AuthorizeView /&gt;</code> component",id:"the-authorizeview--component",level:3},...j.RM];function f(e){const n={code:"code",h3:"h3",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(g.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"add-logto-authentication",children:"Add Logto authentication"}),"\n",(0,o.jsx)(h.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"sign-in-and-sign-out-flows",children:"Sign-in and sign-out flows"}),"\n",(0,o.jsx)(x.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"configure-redirect-uris",children:"Configure redirect URIs"}),"\n",(0,o.jsx)(p.Ay,{}),"\n",(0,o.jsx)(n.h3,{id:"add-routes",children:"Add routes"}),"\n",(0,o.jsx)(s,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-insign-out-buttons",children:"Implement sign-in/sign-out buttons"}),"\n",(0,o.jsx)(d,{}),"\n",(0,o.jsxs)(n.h3,{id:"the-authorizeview--component",children:["The ",(0,o.jsx)(n.code,{children:"<AuthorizeView />"})," component"]}),"\n",(0,o.jsx)(a,{}),"\n",(0,o.jsx)(j.Ay,{sdk:".NET Core (Blazor Server)"})]})}function w(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},37391:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(15658);const r=[];function s(e){const n={img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Connector tab",src:t(28084).A+"",width:"3352",height:"1226"})}),"\n",(0,o.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,o.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,o.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},23471:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var o=t(86070),i=t(15658);const r=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",s=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function c(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Get Started",src:t(13885).A+"",width:"2354",height:"588"})}),"\n",(0,o.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,o.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,o.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Framework List",src:t(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,o.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,o.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},42969:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(15658);const r=[];function s(e){const n={admonition:"admonition",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Save changes",src:t(3466).A+"",width:"2474",height:"188"})}),"\n",(0,o.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},4914:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(15658);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n",(0,o.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,o.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,o.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,o.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,o.jsx)(n.a,{href:"/introduction",children:"introduction page"})," to get started."]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["Basic knowledge of ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},37448:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(15658);const r=[];function s(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},92409:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(15658);const r=[];function s(e){const n={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,o.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},52878:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(15658);const r=[];function s(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},80198:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,connector:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var o=t(87331),i=t(86070),r=t(15658);t(4914),t(23471),t(37391),t(37448),t(42969),t(52878),t(85398),t(82415);const s={slug:"how-to-build-kakao-sign-in-with-dotnet-core-blazor-server-and-logto",authors:"logto",tags:["authentication","kakao","dotnet-core-blazor-server","c#","social-sign-in","sign-in","login"],title:"How to build Kakao sign-in with .NET Core (Blazor Server) and Logto"},c=void 0,a={authorsImageUrls:[void 0]},l="Kakao",d=[];function h(e){return(0,i.jsx)(i.Fragment,{})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h()}},68347:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(15658);const r=[];function s(e){const n={a:"a",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Regarding redirect-based sign-in"}),(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["This authentication process follows the ",(0,o.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html",children:"OpenID Connect (OIDC)"})," protocol, and Logto enforces strict security measures to protect user sign-in."]}),"\n",(0,o.jsx)(n.li,{children:"If you have multiple apps, you can use the same identity provider (Logto). Once the user signs in to one app, Logto will automatically complete the sign-in process when the user accesses another app."}),"\n"]}),(0,o.jsxs)(n.p,{children:["To learn more about the rationale and benefits of redirect-based sign-in, see ",(0,o.jsx)(n.a,{href:"/concepts/sign-in-experience",children:"Logto sign-in experience explained"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},36083:(e,n,t)=>{t.d(n,{Ay:()=>a,Ip:()=>r,RM:()=>s});var o=t(86070),i=t(15658);const r="http://localhost:3000/",s=[];function c(e){const n={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["In the following code snippets, we assume your app is running on ",(0,o.jsx)("code",{children:r}),"."]})})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},59946:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(15658);const r=[];function s(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Open ",(0,o.jsx)(n.code,{children:"Startup.cs"})," (or ",(0,o.jsx)(n.code,{children:"Program.cs"}),") and add the following code to register Logto authentication services:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:'using Logto.AspNetCore.Authentication;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddLogtoAuthentication(options =>\n{\n  options.Endpoint = builder.Configuration["Logto:Endpoint"]!;\n  options.AppId = builder.Configuration["Logto:AppId"]!;\n  options.AppSecret = builder.Configuration["Logto:AppSecret"];\n});\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"AddLogtoAuthentication"})," method will do the following things:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Set the default authentication scheme to ",(0,o.jsx)(n.code,{children:"LogtoDefaults.CookieScheme"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Set the default challenge scheme to ",(0,o.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Set the default sign-out scheme to ",(0,o.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Add cookie and OpenID Connect authentication handlers to the authentication scheme."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},43141:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>c});var o=t(86070),i=t(15658),r=t(8899),s=t(36083);const c=[...s.RM,{value:"Change the default paths",id:"change-the-default-paths",level:4}];function a(e){const n={code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Ay,{}),"\n",(0,o.jsxs)(n.p,{children:["First, let's configure the ",(0,o.jsx)(n.strong,{children:"Logto redirect URI"}),'. Add the following URI to the "Redirect URIs" list in the Logto application details page:']}),"\n",(0,o.jsx)(r.A,{children:`http://${s.Ip}/Callback`}),"\n",(0,o.jsxs)(n.p,{children:["To configure the ",(0,o.jsx)(n.strong,{children:"Logto post sign-out redirect URI"}),', add the following URI to the "Post sign-out redirect URIs" list in the Logto application details page:']}),"\n",(0,o.jsx)(r.A,{children:`http://${s.Ip}/SignedOutCallback`}),"\n",(0,o.jsx)(n.h4,{id:"change-the-default-paths",children:"Change the default paths"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Logto redirect URI"})," has a default path of ",(0,o.jsx)(n.code,{children:"/Callback"}),", and the ",(0,o.jsx)(n.strong,{children:"Logto post sign-out redirect URI"})," has a default path of ",(0,o.jsx)(n.code,{children:"/SignedOutCallback"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You can leave them as are if there's no special requirement. If you want to change it, you can set the ",(0,o.jsx)(n.code,{children:"CallbackPath"})," and ",(0,o.jsx)(n.code,{children:"SignedOutCallbackPath"})," property for ",(0,o.jsx)(n.code,{children:"LogtoOptions"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-csharp",metastring:'title="Program.cs"',children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  // Other configurations...\n  // highlight-start\n  options.CallbackPath = "/Foo";\n  options.SignedOutCallbackPath = "/Bar";\n  // highlight-end\n});\n'})}),"\n",(0,o.jsx)(n.p,{children:"Remember to update the value in the Logto application details page accordingly."})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},35254:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(15658);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The following demonstration is built on .NET Core 8.0. The SDK is compatible with .NET 6.0 or higher."}),"\n",(0,o.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},98420:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(15658);const r=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"dotnet add package Logto.AspNetCore.Authentication\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},53178:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>s});var o=t(86070),i=t(15658),r=t(68347);const s=[...r.RM];function c(e){const n={li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Before we proceed, there are two confusing terms in the .NET Core authentication middleware that we need to clarify:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"CallbackPath"}),': The URI that Logto will redirect the user back to after the user has signed in (the "redirect URI" in Logto)']}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"RedirectUri"}),": The URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The sign-in process can be illustrated as follows:"}),"\n",(0,o.jsx)(n.mermaid,{value:"graph LR\n  subgraph Your app\n    A\n    C\n    D\n  end\n  subgraph Logto\n    B\n  end\n  A(Sign-in path) --\x3e|Redirect to| B(Logto)\n  B --\x3e|Redirect to| C(CallbackPath)\n  C --\x3e|Redirect to| D(RedirectUri)"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, .NET Core also has ",(0,o.jsx)(n.strong,{children:"SignedOutCallbackPath"})," and ",(0,o.jsx)(n.strong,{children:"RedirectUri"})," for the sign-out flow."]}),"\n",(0,o.jsx)(n.p,{children:"For the sack of clarity, we'll refer them as follows:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Term we use"}),(0,o.jsx)(n.th,{children:".NET Core term"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Logto redirect URI"}),(0,o.jsx)(n.td,{children:"CallbackPath"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Logto post sign-out redirect URI"}),(0,o.jsx)(n.td,{children:"SignedOutCallbackPath"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Application redirect URI"}),(0,o.jsx)(n.td,{children:"RedirectUri"})]})]})]}),"\n",(0,o.jsx)(r.Ay,{})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28084:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},81684:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},87331:e=>{e.exports=JSON.parse('{"permalink":"/fr/tutorial/how-to-build-kakao-sign-in-with-dotnet-core-blazor-server-and-logto","source":"@site/tutorial/build-with-logto/generated-dotnet-core-blazor-server-kakao.mdx","title":"How to build Kakao sign-in with .NET Core (Blazor Server) and Logto","description":"{/*","date":"2024-11-29T01:01:32.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/fr/tutorial/tags/authentication"},{"inline":true,"label":"kakao","permalink":"/fr/tutorial/tags/kakao"},{"inline":true,"label":"dotnet-core-blazor-server","permalink":"/fr/tutorial/tags/dotnet-core-blazor-server"},{"inline":true,"label":"c#","permalink":"/fr/tutorial/tags/c"},{"inline":true,"label":"social-sign-in","permalink":"/fr/tutorial/tags/social-sign-in"},{"inline":true,"label":"sign-in","permalink":"/fr/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/fr/tutorial/tags/login"}],"readingTime":1.305,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-kakao-sign-in-with-dotnet-core-blazor-server-and-logto","authors":"logto","tags":["authentication","kakao","dotnet-core-blazor-server","c#","social-sign-in","sign-in","login"],"title":"How to build Kakao sign-in with .NET Core (Blazor Server) and Logto"},"unlisted":false,"prevItem":{"title":"How to build Hugging Face sign-in with .NET Core (Blazor Server) and Logto","permalink":"/fr/tutorial/how-to-build-hugging-face-sign-in-with-dotnet-core-blazor-server-and-logto"},"nextItem":{"title":"How to build Naver sign-in with .NET Core (Blazor Server) and Logto","permalink":"/fr/tutorial/how-to-build-naver-sign-in-with-dotnet-core-blazor-server-and-logto"}}')}}]);