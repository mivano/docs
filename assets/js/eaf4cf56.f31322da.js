"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[7121],{67585:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>r});var t=i(86070),o=i(25710);const r=[{value:"Sign in with Hugging Face account",id:"sign-in-with-hugging-face-account",level:2},{value:"Create an OAuth app in the Hugging Face",id:"create-an-oauth-app-in-the-hugging-face",level:2},{value:"Managing Hugging Face OAuth apps",id:"managing-hugging-face-oauth-apps",level:2},{value:"Configure your connector",id:"configure-your-connector",level:2},{value:"Config types",id:"config-types",level:3}];function s(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"sign-in-with-hugging-face-account",children:"Sign in with Hugging Face account"}),"\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://huggingface.co/",children:"Hugging Face website"})," and sign in with your Hugging Face account. You may register a new account if you don't have one."]}),"\n",(0,t.jsx)(n.h2,{id:"create-an-oauth-app-in-the-hugging-face",children:"Create an OAuth app in the Hugging Face"}),"\n",(0,t.jsxs)(n.p,{children:["Follow the ",(0,t.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#creating-an-oauth-app",children:"Creating an oauth app"})," guide, and register a new application."]}),"\n",(0,t.jsx)(n.p,{children:"In the creation process, you will need to provide the following information:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Application Name"}),": The name of your application."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Homepage URL"}),": The URL of your application's homepage or landing page."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Logo URL"}),": The URL of your application's logo."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Scopes"}),": The scopes allowed for the OAuth app. For Hugging Face connector, usually use ",(0,t.jsx)(n.code,{children:"profile"})," to get the user's profile information and ",(0,t.jsx)(n.code,{children:"email"})," to get the user's email address. Ensure these scopes are allowed in your Hugging Face OAuth app if you want to use them."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Redirect URI"}),": The URL to redirect the user to after they have authenticated. You can find the redirect URI in the Logto Admin Console when you're creating a Hugging Face connector or in the created Hugging Face connector details page."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"managing-hugging-face-oauth-apps",children:"Managing Hugging Face OAuth apps"}),"\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://huggingface.co/settings/connected-applications",children:"Connected Applications"})," page, you can add, edit or delete existing OAuth apps.\nYou can also find ",(0,t.jsx)(n.code,{children:"Client ID"})," and generate ",(0,t.jsx)(n.code,{children:"App secrets"})," in corresponding OAuth app settings pages."]}),"\n",(0,t.jsx)(n.h2,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,t.jsxs)(n.p,{children:["Go back to Logto Admin Console And Fill out the ",(0,t.jsx)(n.code,{children:"clientId"})," and ",(0,t.jsx)(n.code,{children:"clientSecret"})," field with ",(0,t.jsx)(n.em,{children:"Client ID"})," and ",(0,t.jsx)(n.em,{children:"App Secret"})," you've got from OAuth app detail pages mentioned in the previous section."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"scope"})," is a space-delimited list of ",(0,t.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#currently-supported-scopes",children:"Hugging Face supported scopes"}),". If not provided, scope defaults to be ",(0,t.jsx)(n.code,{children:"profile"}),". For Hugging Face connector, the scope you may want to use is ",(0,t.jsx)(n.code,{children:"profile"})," and ",(0,t.jsx)(n.code,{children:"email"}),". ",(0,t.jsx)(n.code,{children:"profile"})," scope is required to get the user's profile information, and ",(0,t.jsx)(n.code,{children:"email"})," scope is required to get the user's email address. Ensure you have allowed these scopes in your Hugging Face OAuth app (configured in ",(0,t.jsx)(n.a,{href:"#create-an-oauth-app-in-the-hugging-face",children:"Create an OAuth app in the Hugging Face"})," section)."]}),"\n",(0,t.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientId"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientSecret"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scope"}),(0,t.jsx)(n.td,{children:"string"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},59380:(e,n,i)=>{i.d(n,{Ay:()=>h,RM:()=>l});var t=i(86070),o=i(25710),r=i(5813),s=i(85162),a=i(22041),c=i(93511);const l=[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:3},...r.RM,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...a.RM,{value:"Sign in",id:"sign-in",level:3},...s.RM,...c.RM];function d(e){const n={h3:"h3",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"add-logto-sdk-as-a-dependency",children:"Add Logto SDK as a dependency"}),"\n",(0,t.jsx)(r.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,t.jsx)(a.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"sign-in",children:"Sign in"}),"\n",(0,t.jsx)(s.Ay,{}),"\n",(0,t.jsx)(c.Ay,{sdk:"iOS"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},43497:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>r});var t=i(86070),o=i(25710);const r=[];function s(e){const n={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Connector tab",src:i(76588).A+"",width:"3352",height:"1226"})}),"\n",(0,t.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,t.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,t.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},69935:(e,n,i)=>{i.d(n,{Ay:()=>c,RM:()=>s});var t=i(86070),o=i(25710);const r=i.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",s=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Get Started",src:i(3525).A+"",width:"2354",height:"588"})}),"\n",(0,t.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,t.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,t.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Framework List",src:i(61980).A+"",width:"3626",height:"2804"})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,t.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,t.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,t.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},89647:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>r});var t=i(86070),o=i(25710);const r=[];function s(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sign-in Experience tab",src:i(52450).A+"",width:"3502",height:"1794"})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Save changes",src:i(11618).A+"",width:"2474",height:"188"})}),"\n",(0,t.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},26092:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>r});var t=i(86070),o=i(25710);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:["\n","\n",(0,t.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,t.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,t.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,t.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,t.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)("span",{children:["Basic knowledge of ",(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},65286:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>r});var t=i(86070),o=i(25710);const r=[];function s(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},93511:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>r});var t=i(86070),o=i(25710);const r=[];function s(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,t.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},48452:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>r});var t=i(86070),o=i(25710);const r=[];function s(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},75786:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>f,connector:()=>x,contentTitle:()=>u,default:()=>w,frontMatter:()=>p,metadata:()=>j,toc:()=>A});var t=i(86070),o=i(25710),r=i(26092),s=i(69935),a=i(43497),c=i(65286),l=i(89647),d=i(48452),h=i(59380),g=i(67585);const p={slug:"how-to-build-hugging-face-sign-in-with-ios-swift-and-logto",authors:"logto",tags:["authentication","hugging-face","ios-swift","swift","social-sign-in","sign-in","login"],title:"How to build Hugging Face sign-in with iOS Swift and Logto"},u=void 0,j={permalink:"/tutorial/how-to-build-hugging-face-sign-in-with-ios-swift-and-logto",source:"@site/tutorial/build-with-logto/generated-ios-swift-hugging-face.mdx",title:"How to build Hugging Face sign-in with iOS Swift and Logto",description:"\x3c!--",date:"2024-06-01T07:56:51.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"hugging-face",permalink:"/tutorial/tags/hugging-face"},{inline:!0,label:"ios-swift",permalink:"/tutorial/tags/ios-swift"},{inline:!0,label:"swift",permalink:"/tutorial/tags/swift"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.32,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-hugging-face-sign-in-with-ios-swift-and-logto",authors:"logto",tags:["authentication","hugging-face","ios-swift","swift","social-sign-in","sign-in","login"],title:"How to build Hugging Face sign-in with iOS Swift and Logto"},unlisted:!1,prevItem:{title:"How to build Google sign-in with iOS Swift and Logto",permalink:"/tutorial/how-to-build-google-sign-in-with-ios-swift-and-logto"},nextItem:{title:"How to build Kakao sign-in with iOS Swift and Logto",permalink:"/tutorial/how-to-build-kakao-sign-in-with-ios-swift-and-logto"}},f={authorsImageUrls:[void 0]},x="Hugging Face",A=[...r.RM,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...s.RM,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...h.RM,{value:"Add Hugging Face connector",id:"add-hugging-face-connector",level:2},...a.RM,{value:"Set up Hugging Face OAuth app",id:"set-up-hugging-face-oauth-app",level:2},...g.RM,{value:"Save your configuration",id:"save-your-configuration",level:2},...c.RM,{value:"Enable Hugging Face connector in Sign-in Experience",id:"enable-hugging-face-connector-in-sign-in-experience",level:2},...l.RM,{value:"Testing and Validation",id:"testing-and-validation",level:2},...d.RM,{value:"Further readings",id:"further-readings",level:2}];function m(e){const n={a:"a",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.Ay,{connector:x,sdk:"iOS Swift",link:"https://developer.apple.com/ios/ "}),"\n",(0,t.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,t.jsx)(s.Ay,{type:"Native app",framework:"iOS(Swift)"}),"\n",(0,t.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,t.jsx)(h.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"add-hugging-face-connector",children:"Add Hugging Face connector"}),"\n",(0,t.jsx)(a.Ay,{connector:x}),"\n",(0,t.jsx)(n.h2,{id:"set-up-hugging-face-oauth-app",children:"Set up Hugging Face OAuth app"}),"\n",(0,t.jsx)(g.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,t.jsx)(c.Ay,{connector:x}),"\n",(0,t.jsx)(n.h2,{id:"enable-hugging-face-connector-in-sign-in-experience",children:"Enable Hugging Face connector in Sign-in Experience"}),"\n",(0,t.jsx)(l.Ay,{connector:x}),"\n",(0,t.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,t.jsx)(d.Ay,{connector:x,sdk:"iOS Swift"}),"\n",(0,t.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,t.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,t.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,t.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function w(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},39308:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>r});var t=i(86070),o=i(25710);const r=[];function s(e){const n={a:"a",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Let's switch to the Application details page of Logto Console. Add a Redirect URI"," ","\n",(0,t.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,t.jsx)("img",{alt:"Redirect URI in Logto Console",src:e.figureSrc,width:"600px"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},63378:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>r});var t=i(86070),o=i(25710);const r=[];function s(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Before calling ",(0,t.jsx)("code",{children:e.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},5813:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>r});var t=i(86070),o=i(25710);const r=[];function s(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Use the following URL to add Logto SDK as a dependency in Swift Package Manager."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"https://github.com/logto-io/swift.git\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Since Xcode 11, you can ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app",children:"directly import a Swift package"})," w/o any additional tool."]}),"\n",(0,t.jsxs)(n.p,{children:["We do not support ",(0,t.jsx)(n.strong,{children:"Carthage"})," and ",(0,t.jsx)(n.strong,{children:"CocoaPods"})," at the time due to some technical issues."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Carthage"}),(0,t.jsxs)(n.p,{children:["Carthage ",(0,t.jsxs)(n.a,{href:"https://github.com/Carthage/Carthage/issues/1226#issuecomment-290931385",children:["needs a ",(0,t.jsx)(n.code,{children:"xcodeproj"})," file to build"]}),", but ",(0,t.jsx)(n.code,{children:"swift package generate-xcodeproj"})," will report a failure since we are using binary targets\nfor native social plugins. We will try to find a workaround later."]})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"CocoaPods"}),(0,t.jsxs)(n.p,{children:["CocoaPods ",(0,t.jsx)(n.a,{href:"https://github.com/CocoaPods/CocoaPods/issues/3276",children:"does not support local dependency"})," and monorepo, thus it's hard to create a ",(0,t.jsx)(n.code,{children:".podspec"})," for this repo."]})]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},85162:(e,n,i)=>{i.d(n,{Ay:()=>d,RM:()=>c});var t=i(86070),o=i(25710),r=i(7795),s=i(39308),a=i(63378);const c=[{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},...s.RM,{value:"Sign in with browser",id:"sign-in-with-browser",level:3},...a.RM];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"configure-redirect-uri",children:"Configure Redirect URI"}),"\n",(0,t.jsx)(s.Ay,{figureSrc:r.A,redirectUri:"io.logto://callback"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The Redirect URI in iOS SDK is only for internal use. There's ",(0,t.jsx)(n.em,{children:"NO NEED"})," to add a ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app",children:"Custom URL Scheme"})," until a connector asks."]})}),"\n",(0,t.jsx)(n.h3,{id:"sign-in-with-browser",children:"Sign in with browser"}),"\n",(0,t.jsx)(a.Ay,{calling:".signInWithBrowser(redirectUri:)"}),"\n",(0,t.jsx)(n.p,{children:"Go back to Xcode, use the following code to implement sign-in:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'do {\n  try await client.signInWithBrowser(redirectUri: "io.logto://callback")\n  print(client.isAuthenticated) // true\n} catch let error as LogtoClientErrors.SignIn {\n  // error occured during sign in\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},22041:(e,n,i)=>{i.d(n,{Ay:()=>a,RM:()=>r});var t=i(86070),o=i(25710);const r=[];function s(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'import Logto\nimport LogtoClient\n\nlet config = try? LogtoConfig(\n  endpoint: "<your-logto-endpoint>", // E.g. http://localhost:3001\n  appId: "<your-app-id>"\n)\nlet client = LogtoClient(useConfig: config)\n'})}),"\n",(0,t.jsx)(n.p,{children:"By default, we store credentials like ID Token and Refresh Token in the Keychain. Thus the user doesn't need to sign in again when he returns."}),"\n",(0,t.jsxs)(n.p,{children:["To turn off this behavior, set ",(0,t.jsx)(n.code,{children:"usingPersistStorage"})," to ",(0,t.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"let config = try? LogtoConfig(\n  // ...\n  usingPersistStorage: false\n)\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},7795:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,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"},76588:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},61980:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},3525:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},11618:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},52450:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},25710:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(30758);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);