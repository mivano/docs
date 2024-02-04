"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[18903],{72027:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h3,{id:"set-up-a-project-in-the-google-api-console",children:"Set up a project in the Google API Console"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Visit the ",(0,o.jsx)(e.a,{href:"https://console.developers.google.com",children:"Google API Console"})," and sign in with your Google account."]}),"\n",(0,o.jsxs)(e.li,{children:["Click the ",(0,o.jsx)(e.strong,{children:"Select a project"})," button on the top menu bar, and click the ",(0,o.jsx)(e.strong,{children:"New Project"})," button to create a project."]}),"\n",(0,o.jsxs)(e.li,{children:["In your newly created project, click the ",(0,o.jsx)(e.strong,{children:"APIs & Services"})," to enter the ",(0,o.jsx)(e.strong,{children:"APIs & Services"})," menu."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"configure-your-consent-screen",children:"Configure your consent screen"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["On the left ",(0,o.jsx)(e.strong,{children:"APIs & Services"})," menu, click the ",(0,o.jsx)(e.strong,{children:"OAuth consent screen"})," button."]}),"\n",(0,o.jsxs)(e.li,{children:["Choose the ",(0,o.jsx)(e.strong,{children:"User Type"})," you want, and click the ",(0,o.jsx)(e.strong,{children:"Create"})," button. (Note: If you select ",(0,o.jsx)(e.strong,{children:"External"})," as your ",(0,o.jsx)(e.strong,{children:"User Type"}),", you will need to add test users later.)"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["Now you will be on the ",(0,o.jsx)(e.strong,{children:"Edit app registration"})," page."]}),"\n",(0,o.jsx)(e.h3,{id:"config-oauth-consent-screen",children:"Config OAuth consent screen"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Follow the instructions to fill out the ",(0,o.jsx)(e.strong,{children:"OAuth consent screen"})," form."]}),"\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"config-scopes",children:"Config scopes"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"ADD OR REMOVE SCOPES"})," and select ",(0,o.jsx)(e.code,{children:"../auth/userinfo.email"}),", ",(0,o.jsx)(e.code,{children:"../auth/userinfo.profile"})," and ",(0,o.jsx)(e.code,{children:"openid"})," in the popup drawer, and click ",(0,o.jsx)(e.strong,{children:"UPDATE"})," to finish."]}),"\n",(0,o.jsx)(e.li,{children:"Fill out the form as you need."}),"\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"add-test-users-external-user-type-only",children:"Add test users (External user type only)"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"ADD USERS"})," and add test users to allow these users to access your application while testing."]}),"\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"SAVE AND CONTINUE"})," to continue."]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Now you should have the Google OAuth 2.0 consent screen configured."}),"\n",(0,o.jsx)(e.h3,{id:"obtain-oauth-20-credentials",children:"Obtain OAuth 2.0 credentials"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["On the left ",(0,o.jsx)(e.strong,{children:"APIs & Services"})," menu, click the ",(0,o.jsx)(e.strong,{children:"Credentials"})," button."]}),"\n",(0,o.jsxs)(e.li,{children:["On the ",(0,o.jsx)(e.strong,{children:"Credentials"})," page, click the ",(0,o.jsx)(e.strong,{children:"+ CREATE CREDENTIALS"})," button on the top menu bar, and select ",(0,o.jsx)(e.strong,{children:"OAuth client ID"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["On the ",(0,o.jsx)(e.strong,{children:"Create OAuth client ID"})," page, select ",(0,o.jsx)(e.strong,{children:"Web application"})," as the application type."]}),"\n",(0,o.jsx)(e.li,{children:"Fill out the basic information for your application."}),"\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"+ Add URI"})," to add an authorized domain to the ",(0,o.jsx)(e.strong,{children:"Authorized JavaScript origins"})," section. This is the domain that your logto authorization page will be served from. In our case, this will be ",(0,o.jsx)(e.code,{children:"${your_logto_origin}"}),". e.g.",(0,o.jsx)(e.code,{children:"https://logto.dev"}),"."]}),"\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"+ Add URI"})," in the *",(0,o.jsx)(e.strong,{children:"*Authorized redirect URIs**"})," section to set up the *",(0,o.jsx)(e.strong,{children:"*Authorized redirect URIs**"}),", which redirect the user to the application after logging in. In our case, this will be ",(0,o.jsx)(e.code,{children:"${your_logto_endpoint}/callback/${connector_id}"}),". e.g. ",(0,o.jsx)(e.code,{children:"https://logto.dev/callback/${connector_id}"}),". The ",(0,o.jsx)(e.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"Create"})," to finish and then you will get the ",(0,o.jsx)(e.strong,{children:"Client ID"})," and ",(0,o.jsx)(e.strong,{children:"Client Secret"}),"."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"references",children:"References"}),"\n",(0,o.jsx)(e.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Name"}),(0,o.jsx)(e.th,{children:"Type"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"clientId"}),(0,o.jsx)(e.td,{children:"string"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"clientSecret"}),(0,o.jsx)(e.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(e.h4,{id:"google-developer-docs",children:"Google developer docs"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://developers.google.com/identity/protocols/oauth2/openid-connect#appsetup",children:"Google Identity: Setting up OAuth 2.0"})})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},38645:function(n,e,t){t.d(e,{ZP:function(){return d}});var o=t(11527),i=t(17279),r=t(53063),s=t(90695),c=t(85978),l=t(13994);function a(n){const e={h3:"h3",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h3,{id:"add-logto-sdk-as-a-dependency",children:"Add Logto SDK as a dependency"}),"\n",(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(e.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,o.jsx)(c.ZP,{}),"\n",(0,o.jsx)(e.h3,{id:"sign-in",children:"Sign in"}),"\n",(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(l.ZP,{sdk:"flutter"})]})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},55458:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={img:"img",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Connector tab",src:t(10766).Z+"",width:"3352",height:"1226"})}),"\n",(0,o.jsxs)("p",{children:['In the openning modal, select "',n.connector,'" and click "Next".']}),"\n",(0,o.jsx)(e.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,o.jsx)(e.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},32778:function(n,e,t){t.d(e,{ZP:function(){return c}});var o=t(11527),i=t(17279),r=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png";function s(n){const e={code:"code",h3:"h3",img:"img",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Get Started",src:t(50554).Z+"",width:"2354",height:"588"})}),"\n",(0,o.jsxs)(e.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,o.jsx)(e.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,o.jsx)(e.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Framework List",src:t(3108).Z+"",width:"3626",height:"2804"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['In the opening modal, scroll to the "',n.type,'" section or filter all the available "\n',n.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Click the"," ","\n",n.framework.split("/").map((n=>`"${n.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,o.jsx)(e.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,o.jsx)(e.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,o.jsx)(e.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(s,{...n})}):s(n)}},81057:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={admonition:"admonition",img:"img",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Sign-in Experience tab",src:t(65266).Z+"",width:"3502",height:"1794"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',n.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',n.connector,'". Then\nyou should be able to see a button with text "Continue with ',n.connector,'" in the preview\nsection.']})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Save changes",src:t(79120).Z+"",width:"2474",height:"188"})}),"\n",(0,o.jsx)(e.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},10444:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n",(0,o.jsx)(e.admonition,{title:"For our new friends",type:"info",children:(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://logto.io",children:"Logto"})," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["In this article, we will go through the steps to quickly build the ",n.connector," sign-in\nexperience (user authentication) with ",(0,o.jsx)("a",{href:n.link,target:"_blank",rel:"noopener",children:n.sdk})," and\xa0\n",(0,o.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Prerequisites"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["A running Logto instance. Check out the ",(0,o.jsx)(e.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)("span",{children:["Basic knowledge of ",(0,o.jsx)("a",{href:n.link,target:"_blank",rel:"noopener",children:n.sdk}),"."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)("span",{children:["A usable ",n.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},69441:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."]})})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},13994:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={admonition:"admonition",p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)(e.admonition,{title:"Test your integration",type:"info",children:(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},93974:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"]})})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},11121:function(n,e,t){t.r(e),t.d(e,{assets:function(){return l},connector:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return a}});var o=t(11527),i=t(17279);t(10444),t(32778),t(55458),t(69441),t(81057),t(93974),t(38645),t(72027);const r={slug:"how-to-build-google-sign-in-with-flutter-and-logto",authors:"logto",tags:["authentication","google","flutter","dart","social-sign-in","sign-in","login"],title:"How to build Google sign-in with Flutter and Logto"},s=void 0,c={permalink:"/tutorial/how-to-build-google-sign-in-with-flutter-and-logto",source:"@site/tutorial/build-with-logto/generated-flutter-google.mdx",title:"How to build Google sign-in with Flutter and Logto",description:"\x3c!--",date:"2024-02-04T04:04:05.000Z",formattedDate:"February 4, 2024",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"google",permalink:"/tutorial/tags/google"},{label:"flutter",permalink:"/tutorial/tags/flutter"},{label:"dart",permalink:"/tutorial/tags/dart"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.285,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-google-sign-in-with-flutter-and-logto",authors:"logto",tags:["authentication","google","flutter","dart","social-sign-in","sign-in","login"],title:"How to build Google sign-in with Flutter and Logto"},unlisted:!1,prevItem:{title:"How to build GitHub sign-in with Flutter and Logto",permalink:"/tutorial/how-to-build-github-sign-in-with-flutter-and-logto"},nextItem:{title:"How to build Kakao sign-in with Flutter and Logto",permalink:"/tutorial/how-to-build-kakao-sign-in-with-flutter-and-logto"}},l={authorsImageUrls:[void 0]},a=[],d="Google";function h(n){return(0,o.jsx)(o.Fragment,{})}function u(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h()}},33437:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={a:"a",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Let's switch to the Application details page of Admin Console in this section. Add a Redirect\nURI ",(0,o.jsx)("code",{children:n.redirectUri}),' and click "Save Changes".']})}),"\n",(0,o.jsx)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},38256:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={admonition:"admonition",p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Before calling ",(0,o.jsx)("code",{children:n.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},53063:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["Our flutter SDK package is published on ",(0,o.jsx)(e.a,{href:"https://pub.dev/packages/logto_dart_sdk",children:"pub.dev"}),"."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"flutter pub get logto_dart_sdk\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Or you may directly get your own copy of the SDK from ",(0,o.jsx)(e.a,{href:"https://github.com/logto-io/dart",children:"github"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/logto-io/dart\n"})})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},90695:function(n,e,t){t.d(e,{ZP:function(){return a}});var o=t(11527),i=t(17279),r=t(84482),s=t(33437),c=t(38256);function l(n){const e={code:"code",h3:"h3",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h3,{id:"configure-redirect-uri",children:"Configure Redirect URI"}),"\n",(0,o.jsx)(s.ZP,{figureSrc:r.Z,redirectUri:"io.logto://callback"}),"\n",(0,o.jsx)(c.ZP,{calling:".signIn(redirectUri)"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-dart",children:"void signIn() async {\n  await logtoClient.signIn(redirectUri);\n}\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},85978:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={code:"code",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-dart",children:"import 'package:logto_dart_sdk/logto_dart_sdk.dart';\nimport 'package:http/http.dart' as http;\n\n// ...\nlate LogtoClient logtoClient;\n\n// LogtoConfig\nfinal logtoConfig = const LogtoConfig(\n  endpoint: \"<your-logto-endpoint>\", // E.g. http://localhost:3001\n  appId: \"<your-app-id>\"\n  ...\n);\n\nvoid _init() async  {\n  logtoClient = LogtoClient(\n    config: logtoConfig,\n    httpClient: http.Client(), // Optional http client\n  );\n}\n\n"})})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},84482:function(n,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABPQAAAEECAMAAACYzZrjAAAAn1BMVEX////JxdDEx8cZHB1dNPJ0d3iMjY42ODmpqqvi4uJvcXHx8fEnKitSVVXu7u7WzPzr5v7U1dXLzM1xTfTc3d6FZ/Z+gICumvmagPeam5zCs/qXmZpnQfPi4+P4+PhER0e4uLiFiIlSVFVgY2P18v7Cs/vm5uZ8f4C5p/rh2f26u7zMwPt7WvWxs7OgoaK5u7ykjfiQdPfs7u6jjfikjfehUAtzAAASkUlEQVR42uzUAQ0AAAiAMO1fWnvwjwzMAoSYHpAyH0CE6QEppgekmB6QYnpAiukBKaYHpJgekGJ6QIrpASmmB6SYHpBiekCK6QEppgekmB6QYnpAiukBKaYHpJgekGJ6QIrpASmmB6SYHpBiekCK6QEppgekmB6QYnpAiukBKaYHpJgekGJ6QIrpASmmB6SYHpBiekCK6QEppgekmB6QYnpAiukBKaYHpJgekGJ6QIrpASmmd+zcbaubMBjG8RuDMT5UUEQoMqvngIVCW9j3/3C7bRKjc1LnNpjH6/diNtW0vvoTpz0AcCiIHgAcCqIHAIeC6AHAoSB6AHAoiB4AHAqiBwCHgugBwKH8P9ELQwIAmPlq0YujqCRWCuERAHxdaSU7WumpcnL+/+ipk/F5DumNb0IExIQQ0d/4YjkeqIWziU6njABgvboyHl5K29x8/0ErVb4i5/+PnhSOXBm9kxBqwyJx9sXReCAXzibAshLg96S+c6NNct+/f+HoJUFPsHJd9MJzQ6u5qW+iNz8bRA9gY/Qet57aXr0spy8cPUm98FNwXtaW619Eb342iB7Atujl5lXr+zVt8/WjR3QaLfXiMCbNjhejF8YLcygMN0bPnc00eiF/AwCsjh4Vvu/RHKKnnYX40PWSgeBInYeayUSIJAptucogyHjTBEEZR7xrNEfG7t6EYCdF+sh+ZxCEK6PnzsZFL+y/SlzO6B7A6ujR1RYpr67+VaVk1LfW96ucuqrq3/Oqu01Ylel7IR3Ra2/HE2/E0jtPke7eSME7WpXuOXqKk0IsDIRmGmXHgWeiF+kOKc7Wq2yzOfoYrdRHar8RPfVT9JrEfgMeEgRYHb1WFymV0xsbaWuGhe/3FVN+RRrP1R9R6IVicTWzcn7Ra031nnpYdjuO3mhtdTk3535jLjR5h5QfIphFLxFJFH3qOYGeE8TESp4TKdWn70yUSR4nUsp480ovTLifXtbw8EQAsC56tbkLy817dmlRmavduuX3i7RQ/uNd9OT1mRXd6502T7u89duaWG7Hpdxt9GLuiTJLrHj0ZEojeKsPnUVPRPGwSLRzZJ8o3tUQyzh28Yb/0zNn46KnzOExxw8XuAAro/fU8cpfG/bwyz5ZHsfP7H8XPbuws7FL+WLXjFOzZtxf9Mqw513MlWNgr0I9vaiKhjqdZtGzIbvYOdnPc6IgyFZGb342NnpmDwHA70Qvvfs6ZtJXk13t0LjqXfT6kX5V2I6W0z07jN4gaXS2PkgLXouqi64Oa2bR+6SXmBd6sznbHllxEo9G0Wv4DYUlHsCq6Dltqi9yM9Kkf58uBd9Fr7M/0ShJK14z7jw2rvuN3kdm1nfJSUte6zfeE0/LFY2vOBfnbI+eOxsXPd6yU9kgfACro3d91qZTldJa/+FaxrJ30UvJXhcr7cEF7cfVjh9Z+VQsMW3hlDk2YGQsR2/M03M2Rs+dzTR6YWQWgLjKBXgbvXvBKr9M7eLMqVzLWLEyepU/kvPYRU/tL3o2N4G9hj2pQawD9m6lN5mzbqV3HkevtGfhtpdp9FiooosQuHsL8D56udk+bNm83Mo2Re/hy3yQ7n2lJ+1d0TOxbOiNq05m2rYUvW+zOe//T0+N55z0l8/OZvZRoRT4WRrAuujRXadLJ2x6QEaatzJ6d78lbTZudxq9/kUSE0vM1vq0R1C0FD36+TmScpgjTydz9zahiW+jeoX29fxsXPTc6SgCgBXRq6+mZeYxE4vH95/u3tqGdQvRy3/6EW8+dDTd4d1bSXZxJU2wSpuiwNw3zUi/WIqeNC/tHM/OCU0OY6G3I6fJTz6ChbOx0TsFgWej1xAAvI2ee0yPt2Wqd8k210tA97996bDgY2oePdvPB714bVsPPWWP3UZPL65Mbz6bMJO8VeYhPBE1TSmSxejFnKZLk7k5nKZEet45sQXt555VTE72+kFv4zX9JOEtnM3oOb2Ap4clbwkAVkWP09Tabd5HTOpnWFIz9q5Xzpqum+Rtfb8uRK/PouqPuJnfeDzNWPk7fGRFunCVpkaGnPz2NvEWo0dZMJ0TX+z4MnwPC2mkScTgPDsbk0sbPfeBCf6QMsDb6LlU3Yh1HLNr2//TmatTPW5zk7U7v9G2PHEheu4Iv6qp9zDj215vZDBlqmSfDvnwiA3jj3Dp7u14TkOGDARLpBu76Lk52ke2dDY2euysP/ATf28A4Hf+4EBZE0uVz66P1B4jfValQ9ae136/R4vRo7zVj/6R8WxfM3Z39/bXYs/z4uk4pnf0HCfzvEmg4jCef89ZnpuY1uEPzPBsMsA2dVF0NTkpDydZ4/3valoUKY10w9DZa/QA4Bhe0ftvIXoAgOgBACB6AACrdG2L6AEA/B8QPQA4FEQPAA4F0QOAQ0H0AOBQED0AOBREDwAOBdEDgENB9ADgUBA9ADgURA8ADuXfRa/+luUeAMAmedbV9LKT6NWZBwDwR4qa2D6i1+VeXnyvCX6wY8eoEcNAGIWHf8DZyJWFCaSQsqTQAXz/w8UhCel22bUKmXlfo0oqH5oB8JS6rVJutjtD9Iq0UDwAh9RVKvt5gug1qRkAHFSkdobo1axiAHBYU64niN6q1QCgg0XL+NGrEvs8AH1k1eGj1/joAehlVRk+eos2A4AuNi3DRy8z3QLopSoPHz3JAGDQohA9AEMjegBCIXoAQiF6AEIhegBCIXoAQiF6AEIhegBCIXoAQiF6AEIhegBCIXoAQiF6AEI5dfTePya7YU7p1Tqa0tW+LSnZPdf0Zjul9HtjtkekROmBf0Tvx+zut1pS3GX9zH/PTf55P5D+YruLu+3k/lh+3S+GL3bOZldtGIjCIx/JY8f2whtLWSUi7/+Opf7JJCSoVK0qoc63uZgcT7ibT8MYUJSKSm8nMJj+ivRW+4FjDECVhKLSU5Rv5ZulR96FvyO9CQ/6JWWEAKPSU5Rv5aulJ/wL6SXY0fEFlZ6ifCsqvY+lN6rNWEilpyjfyldLryRLlWAZiJN5Jz0zMbDIWa4vDCRHJiUiSikippR6qbq6OEcavIRySG4jKRvvpRdsu+ceX2S3rM1Zei6llRRFUek1EqaWiGjYe+lZNGIXSI493pyETtUho7GEZp3Ins5nthHrKVnouvEqPcOnuvnlJWepdpBeBiwpivJEpXeQno/g2XuzAfZOehZ4GJ8dA7nno33mJ2xAvcGGxRjT1BVt/nkJrfFbgELS4EnH57kX6QFZ2lvppVF364pk116yaWvZLtLLUZ2nKB2V3kF6Cb0bK4C/Ss930ZDnZrIJyHsHeJ7plcMl12rD3Y30pEgBQtXa2kvxrfRgRtq0533/F7ZebfwLMTTpqfMU5YhKT6Tndy+FCHuV3ryr0NUnAjBRg1+lx/ul1ATprbsd6UmR8HisJDjgRnqSju3RoNScB8pezTTpqfMUZUeld5LeLB8h2bBcpZeG0SgAczXQqFhepJflklQd60VGelJEeCs9SUsnWJHcCuTX01t1nqI0VHqv0itgUUi8So9RiA6NnBOduRfpra0plIdCQhle9M2J9EJ2tkwT30tv3FI2mvkZ37jm7Gs1oEQkUhSlotI7SW86Sg9X6QH2sEFMd5GerG9auYhVOr4bTZkFjVvpXW45R3RY0gIq+qMDitJQ6d10eu+lxyK9BdOph5uv0vMivXz3Kb0Nk+wUPBDL7FYzf9TpOYCLe8ZLl168SG9mRE+Koqj0fmum103XibD1aTsKfDDTu4707t/9cvhopleq3xgbkeTc6Wa9O/URHEhRFJXeUXpnozCmF+nJp0AkmUYL5SDSk+Pfqz+lwaPcZRfEnNbmQzt53+lJmrHVV+ZGXaa6nvdqfnxkZQUmUhSFSKV3kh7x8JPt+jPOH6RngDKEw11BbIiCjQycj1S34cPctRTcehrpuZY8mzPLaYnne+mN9FzrhiE5j5ZLh+u79MjqFzIUZUelJ9JbgeSJggWm3SQiPdoA64lyAtyQIyIDS3cSlV1CsfqQ1vHWcgKcNHjS8VHuSRex1VytYBjvpFc9O++S41zjUTyc2/WJdunRpocZitJQ6Yn0DhLD4rtpEA7SCwsAZkjf5BhAtGFIz+AnY2/kCHCTHAPlONLjaqNr0jMQlwi272Z68VjXoMWXnqNZqh2kF/QwQ1EqKj2RXsUtaBajropy/pUVy3jyOBQKJofmpMq6oD/0Uy1VPHUZRX8d6bXkY9xUVg//7iDDjwBVTNeuBV+qifT0MENRGiq9C8EYLytPr2RjAl2YEfcCPkipLNkQ7kZ6kjyt3vtJRDvw+0r2a1enKLeo9P6MiTcaLeGDPkAavAkbKYryzfyP0nPAlvuXKDJ9gDR4rL9orChfzv8oPbJ4wnhi6QNkpOeBTIqifDP/pfTItVODx6eVE7v6d+WFlB/s3LFtxDAMQFGCXZBKglqr1ADef7gYyE1wdmGB7w3xIZEAYWs1o3f5abYGUFHZ6AE1iR5QiugBpYgeUIroAaWIHlCK6AGliB5QiugBpWwQvZ4zAB7xm/310Wt5BsAjzmyvj96RIwAeMXK9PnqR3f8WeMTMnO+PXktH7IBHjBzx/ujNnisAbjuyzw2iFyvzCID7LVkRG0QvjsxhrgfcMtv/+2mH6MXqmePUPeBL8xw9+4rLFtGLORLgljbjskn0IuZqPQG+0tvxSd420QN4IdEDShE9/tipAwEAAAAAQf7Wg1wQwYr0gBXpASvSA1akB6xID1iRHrAiPWBFesCK9IAV6QEr0gNWpAexa8csjsNAGIan+HoJhkHCTCmDhF3YXP7/b7usNVlfnBRLOJKQnacbLFndi23sfpU3il7Oga6kPNJ/c8oTOefcK6I3iQS6BRwaJ8h0FEUqPYKRyDnnXhE9Af48Gr0BUPq5mFL06DnnXhq9CEDLg9ETAIF+LADBo+ece2n0BrBifCx6ERCIR885937Ri8NEdzHqAnksegskQItHzzn3dtELYLqnATEAe7gGUcw57tELouAc70WPMZKi2lREWkkMzCOZkkSha5+rzMAsMln06teYyr8Ha259GGWlQYBGzrlP9vzoZQiRIu3zhuMlegkbbbfRC0Ck/TExAhNjYysbw+ay3xpjj97JTipWTHTJTuWKs0DOuU/2/OgxRqIEsfEESIit6mzRGwAeYhtYZ+TbYFr5LtETrTEGtr2Roek8517BFipQQyjbsYzUtku9coJtXoHao6c812mK5Jz7ZE+P3gRE+9Zm3VrpS1MLF4OLBewmenp5aCPbbP0r2iOabaYEhOM3PVSLnVpbRwuplr5jJefcx3t69HLPk9ivegsQaZN6habvTIWb6A19cYJa9L5XLNthZd+hWI/Rk6ubyGVp6ecmwB/ynPsFnh29/uVuD5dArq8sUDJ6jJ5gtZXhsmWiTQV64hp1C/QQPausvR0X23rW36ITmNxf9u6YtWEYCMNwhm+3QAgZc+MFYuyhof//v9Xx2TlU213amFB971CaNpW2h5MaEsb+f69Ar0PR99+pzVemkSAXL1kxBV2jPTBtTHT9bFmjr9inRC87evPX1FoRiegxVk1no5cgaQ6GGxy9aOi5dPZtsW6aixDdQy8X6IWf0fOIHmMV9Qr0NDzqEMNcOax5ovuT3v0IvQjv+vtJ79atDUSPsWo6+U7vA9ItATc/wvrhtUU8uNPrgdxZI9IGPR/v/M7wCD2/DrSIHmPVdDJ60R1LSKagPt262rTWP5Fz9EoOb4DuoKcGqa9+jN5F8En0GKuwU9EzgxwuO2Z+2KAXDT0V3Fe30B6AqUDeoDeVENUFtQ2HffQyJNhaY8xEj7FqOhU9H9ZMt2y0ZZ2ePcbFqQy0YQLtDinQG0w4H+R20GuA2E9L32TZKABj2EVPBfH6eDhCAtFjrJrORa9gLEGWCQ8xQvoFPR3tB8gJ7S6YhlyzQc/GR0gUIIZ1k6nrBr2pXpanysDjLWP19Dr0tBv8gVO1OeuGFlOp93dZybODQ/nf21AcdlXwuUVvKszKSdb1z9oD9NaNJQXe6TFWUe/wwUDaNOFS1Dfh71YLx2s1Ta8XxlhNvQN6jDF2FNFj7IudOhAAAAAAEORvPcgFEUgPQHoA0gPmpAesSA9YkR6wIj1gRXrAivSAFekBK9IDVqQHsVMHAgAAAACC/K0HuSBiRXrAivSAFekBK9IDVqQHrEgPWJEesCI9YEV6wIr0gBXpASvSA1akB6xID1iRHrAiPWBFesCK9IAV6QEr0gNWpAesSA9YkR6wIj2onTqgAQAAQBjUv7UzxyEEpEgPSJEekCI9IEV6QIr0gBTpASnSA1KkB6RID0iRHpAiPSBFekCK9IAU6QEp0gNSpAekSA9IeXoAIdIDUgZFt1R7PR+BeQAAAABJRU5ErkJggg=="},10766:function(n,e,t){e.Z=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},3108:function(n,e,t){e.Z=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},50554:function(n,e,t){e.Z=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},79120:function(n,e,t){e.Z=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},65266:function(n,e,t){e.Z=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return s}});var o=t(50959);const i={},r=o.createContext(i);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);