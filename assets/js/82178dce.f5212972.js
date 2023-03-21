"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[13094],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var o=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return n?o.createElement(h,r(r({ref:t},s),{},{components:n})):o.createElement(h,r({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38811:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],p={toc:[{value:"Enable Sign in with Apple for your app",id:"enable-sign-in-with-apple-for-your-app",level:3},{value:"Create an identifier",id:"create-an-identifier",level:3},{value:"Enable Sign in with Apple for your identifier",id:"enable-sign-in-with-apple-for-your-identifier",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3}]};function l(e){var t=e.components,l=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note")),(0,a.kt)("p",{parentName:"blockquote"},"Apple sign-in is required for AppStore if you have other social sign-in methods in your app.\nHaving Apple sign-in on Android devices is great if you also provide an Android app.")),(0,a.kt)("p",null,"You need to enroll ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/programs/"},"Apple Developer Program")," before continuing."),(0,a.kt)("h3",{id:"enable-sign-in-with-apple-for-your-app"},"Enable Sign in with Apple for your app"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Caution")),(0,a.kt)("p",{parentName:"blockquote"},"Even if you want to implement Sign in with Apple on a web app only, you still need to have an existing app that embraces the AppStore ecosystem (i.e., have a valid App ID).")),(0,a.kt)("p",null,"You can do it via Xcode -> Project settings -> Signing & Capabilities, or visit ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/account/resources/identifiers/list/bundleId"},"Certificates, Identifiers & Profiles"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Enable Sign in with Apple",src:n(87456).Z,width:"1220",height:"398"})),(0,a.kt)("p",null,'See the "Enable an App ID" section in ',(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/sign_in_with_apple/configuring_your_environment_for_sign_in_with_apple"},"Apple official docs")," for more info."),(0,a.kt)("h3",{id:"create-an-identifier"},"Create an identifier"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit ",(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/account/resources/identifiers/list/serviceId"},"Certificates, Identifiers & Profiles"),', then click the "+" button next to "Identifier".'),(0,a.kt)("li",{parentName:"ol"},'In the "Register a new identifier" page, choose "Services IDs" and click "Continue".'),(0,a.kt)("li",{parentName:"ol"},'Fill out "Description" and "Identifier" (E.g., ',(0,a.kt)("inlineCode",{parentName:"li"},"Logto Test")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"io.logto.test"),'), then click "Continue".'),(0,a.kt)("li",{parentName:"ol"},'Double-check the info and click "Register".')),(0,a.kt)("h3",{id:"enable-sign-in-with-apple-for-your-identifier"},"Enable Sign in with Apple for your identifier"),(0,a.kt)("p",null,'Click the identifier you just created. Check "Sign in with Apple" on the details page and click "Configure".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Enable Sign in with Apple",src:n(27760).Z,width:"1170",height:"186"})),(0,a.kt)("p",null,"In the opening modal, select the App ID you just enabled Sign in with Apple."),(0,a.kt)("p",null,"Enter the domain of your Logto instance without protocol and port, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"your.logto.domain"),'; then enter the "Return URL" (i.e., Redirect URI), which is the Logto URL with ',(0,a.kt)("inlineCode",{parentName:"p"},"/callback/${connector_id}"),", e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"https://your.logto.domain/callback/apple-universal"),". You can get the randomly generated ",(0,a.kt)("inlineCode",{parentName:"p"},"connector_id")," after creating Apple connector in Admin Console."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"domain-and-url",src:n(31455).Z,width:"988",height:"668"})),(0,a.kt)("p",null,'Click "Next" then "Done" to close the modal. Click "Continue" on the top-right corner, then click "Save" to save your configuration.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Caution")),(0,a.kt)("p",{parentName:"blockquote"},"Apple does NOT allow Return URLs with HTTP protocol and ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," domain."),(0,a.kt)("p",{parentName:"blockquote"},"If you want to test locally, you need to edit ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file to map localhost to a custom domain and set up a local HTTPS environment. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FiloSottile/mkcert"},"mkcert")," can help you for setting up local HTTPS.")),(0,a.kt)("h3",{id:"compose-the-connector-json"},"Compose the connector JSON"),(0,a.kt)("p",null,"You need to use the identifier that fills in the ",(0,a.kt)("a",{parentName:"p",href:"#create-an-identifier"},"Create an identifier")," section to compose the JSON:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "io.logto.test"\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Note")),(0,a.kt)("p",{parentName:"blockquote"},"This connector doesn't support customizing ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," (e.g., name, email) yet since Apple requires ",(0,a.kt)("inlineCode",{parentName:"p"},"form_post")," response mode when ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," is not empty, which is incompatible with the current connector design."),(0,a.kt)("p",{parentName:"blockquote"},"We'll figure out this later.")))}l.isMDXComponent=!0},18823:function(e,t,n){n.d(t,{ZP:function(){return d}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(41180),p=n(1580),l=n(82989),c=n(33228),s=["components"],u={toc:[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:3},{value:"Init LogtoClient",id:"init-logtoclient",level:3},{value:"Sign in",id:"sign-in",level:3}]};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,a.kt)(r.ZP,{mdxType:"AddSdk"}),(0,a.kt)("h3",{id:"init-logtoclient"},"Init LogtoClient"),(0,a.kt)(l.ZP,{mdxType:"InitClient"}),(0,a.kt)("h3",{id:"sign-in"},"Sign in"),(0,a.kt)(p.ZP,{mdxType:"ImplementSignIn"}),(0,a.kt)(c.ZP,{sdk:"iOS",mdxType:"TestYourIntegration"}))}d.isMDXComponent=!0},79896:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],p={toc:[]};function l(e){var t=e.components,l=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connector tab",src:n(63962).Z,width:"3352",height:"1226"})),(0,a.kt)("p",null,'In the openning modal, select "',l.connector,'" and click "Next".'),(0,a.kt)("p",null,"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."),(0,a.kt)("p",null,"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."))}l.isMDXComponent=!0},83796:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png",p=["components"],l={toc:[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}]};function c(e){var t=e.components,c=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In you browser, open a new tab and enter the link of Logto Admin Console."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create application",src:n(16642).Z,width:"2368",height:"226"})),(0,a.kt)("p",null,'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'),(0,a.kt)("h3",{id:"choose-your-application-type"},"Choose your application type"),(0,a.kt)("p",null,'In the opening modal, select the "',c.type,'" option as the application type.'),(0,a.kt)("img",{src:r,alt:"Create Application modal",width:"700"}),(0,a.kt)("h3",{id:"enter-application-name"},"Enter application name"),(0,a.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,a.kt)("p",null,"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."))}c.isMDXComponent=!0},99536:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],p={toc:[]};function l(e){var t=e.components,l=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sign-in Experience tab",src:n(64283).Z,width:"3160",height:"1822"})),(0,a.kt)("p",null,'Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',l.connector," ","sign-in, which may increase your conversion rate."),(0,a.kt)("p",null,'In the "Social sign-in" section, add "Add Social Connector" and choose "',l.connector,'". Then you should be able to see a button with text "Continue with ',l.connector,'" in the preview section.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Save changes",src:n(7276).Z,width:"2474",height:"188"})),(0,a.kt)("p",null,'Finally, click "Save Changes" on the bottom right corner.'))}l.isMDXComponent=!0},90394:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],p={toc:[]};function l(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"For our new friends",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://logto.io"},"Logto")," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control.")),(0,a.kt)("p",null,"In this article, we will go through the steps to quickly build the ",n.connector," sign-in experience (user authentication) with"," ",(0,a.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),(0,a.kt)("span",null," and "),(0,a.kt)("a",{href:"https://logto.io",target:"_blank",rel:"noopener"},"Logto"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prerequisites")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A running Logto instance. Check out the ",(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/"},"get started page")," if you don't have one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",null,"Basic knowledge of"," ",(0,a.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",null,"A usable ",n.connector," account."))))}l.isMDXComponent=!0},85711:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],p={toc:[]};function l(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Double check you have filled out necessary values in the Logto connector configuration area. Click "Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."))}l.isMDXComponent=!0},33228:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],p={toc:[]};function l(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Test your integration",type:"info"},(0,a.kt)("p",null,"Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button, the page should be redirected to a Logto sign-in page, and you should be able to create a new account by entering username and password and complete the sign-in process.')))}l.isMDXComponent=!0},86257:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],p={toc:[]};function l(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"))}l.isMDXComponent=!0},22356:function(e,t,n){n.r(t),n.d(t,{assets:function(){return A},connector:function(){return b},contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return y}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(90394),p=n(83796),l=n(79896),c=n(85711),s=n(99536),u=n(86257),d=n(18823),g=n(38811),h=["components"],m={slug:"how-to-build-apple-sign-in-with-ios-swift-and-logto",authors:"logto",tags:["authentication","apple","ios-swift","swift","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with iOS Swift and Logto"},k=void 0,f={permalink:"/tutorial/how-to-build-apple-sign-in-with-ios-swift-and-logto",source:"@site/tutorial/build-with-logto/generated-ios-swift-apple.mdx",title:"How to build Apple sign-in with iOS Swift and Logto",description:"\x3c!--",date:"2023-03-21T11:35:29.734Z",formattedDate:"March 21, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"apple",permalink:"/tutorial/tags/apple"},{label:"ios-swift",permalink:"/tutorial/tags/ios-swift"},{label:"swift",permalink:"/tutorial/tags/swift"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.3,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-apple-sign-in-with-ios-swift-and-logto",authors:"logto",tags:["authentication","apple","ios-swift","swift","social-sign-in","sign-in","login"],title:"How to build Apple sign-in with iOS Swift and Logto"},nextItem:{title:"How to build Azure AD sign-in with iOS Swift and Logto",permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-ios-swift-and-logto"}},A={authorsImageUrls:[void 0]},y=[{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},{value:"Add Apple connector",id:"add-apple-connector",level:2},{value:"Set up Sign in with Apple",id:"set-up-sign-in-with-apple",level:2},{value:"Save your configuraiton",id:"save-your-configuraiton",level:2},{value:"Enable Apple connector in Sign-in Experience",id:"enable-apple-connector-in-sign-in-experience",level:2},{value:"Testing and Validation",id:"testing-and-validation",level:2},{value:"Further readings",id:"further-readings",level:2}],b="Apple",v={toc:y,connector:b};function w(e){var t=e.components,n=(0,i.Z)(e,h);return(0,a.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.ZP,{connector:b,sdk:"iOS Swift",link:"https://developer.apple.com/ios/ ",mdxType:"Intro"}),(0,a.kt)("h2",{id:"create-an-application-in-logto"},"Create an application in Logto"),(0,a.kt)(p.ZP,{type:"Native App",mdxType:"CreateApplication"}),(0,a.kt)("h2",{id:"integrate-logto-sdk"},"Integrate Logto SDK"),(0,a.kt)(d.ZP,{mdxType:"IntegrateSdk"}),(0,a.kt)("h2",{id:"add-apple-connector"},"Add Apple connector"),(0,a.kt)(l.ZP,{connector:b,mdxType:"AddConnector"}),(0,a.kt)("h2",{id:"set-up-sign-in-with-apple"},"Set up Sign in with Apple"),(0,a.kt)(g.ZP,{mdxType:"ConnectorGuide"}),(0,a.kt)("h2",{id:"save-your-configuraiton"},"Save your configuraiton"),(0,a.kt)(c.ZP,{connector:b,mdxType:"SaveYourConfiguration"}),(0,a.kt)("h2",{id:"enable-apple-connector-in-sign-in-experience"},"Enable Apple connector in Sign-in Experience"),(0,a.kt)(s.ZP,{connector:b,mdxType:"EnableSocialConnector"}),(0,a.kt)("h2",{id:"testing-and-validation"},"Testing and Validation"),(0,a.kt)(u.ZP,{connector:b,sdk:"iOS Swift",mdxType:"TestingAndValidation"}),(0,a.kt)("h2",{id:"further-readings"},"Further readings"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/"},"\u2694\ufe0f Protect your API")," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,a.kt)("br",null),"\nLearn more about identifying who's who and keeping your API secure."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/"},"\ud83e\uddd1\u200d\ud83d\ude80 Manage users")," We know you care about user management and activities, as we also do.",(0,a.kt)("br",null),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/customize-sie/localized-language"},"\ud83c\udf10 Localization")," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,a.kt)("br",null),"\nYou can change current language phrases or add a new language without friction."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/blog/tags/ciam"},"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series")," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."))}w.isMDXComponent=!0},99324:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],p={toc:[]};function l(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,a.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,a.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}l.isMDXComponent=!0},81958:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],p={toc:[]};function l(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"Before calling ",(0,a.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}l.isMDXComponent=!0},41180:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],p={toc:[]};function l(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use the following URL to add Logto SDK as a dependency in Swift Package Manager."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/logto-io/swift.git\n")),(0,a.kt)("p",null,"Since Xcode 11, you can ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app"},"directly import a Swift package")," w/o any additional tool."),(0,a.kt)("p",null,"We do not support ",(0,a.kt)("strong",{parentName:"p"},"Carthage")," and ",(0,a.kt)("strong",{parentName:"p"},"CocoaPods")," at the time due to some technical issues."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Carthage"),(0,a.kt)("p",null,"Carthage ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Carthage/Carthage/issues/1226#issuecomment-290931385"},"needs a ",(0,a.kt)("inlineCode",{parentName:"a"},"xcodeproj")," file to build"),", but ",(0,a.kt)("inlineCode",{parentName:"p"},"swift package generate-xcodeproj")," will report a failure since we are using binary targets\nfor native social plugins. We will try to find a workaround later.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"CocoaPods"),(0,a.kt)("p",null,"CocoaPods ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CocoaPods/CocoaPods/issues/3276"},"does not support local dependency")," and monorepo, thus it","'","s hard to create a ",(0,a.kt)("inlineCode",{parentName:"p"},".podspec")," for this repo.")))}l.isMDXComponent=!0},1580:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=n(99324),p=n(81958),l=["components"],c={toc:[{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Sign in with browser",id:"sign-in-with-browser",level:3}]};function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,a.kt)(r.ZP,{figureSrc:"data:image/png;base64,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",redirectUri:"io.logto://callback",mdxType:"ConfigureRedirectUri"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The Redirect URI in iOS SDK is only for internal use. There's ",(0,a.kt)("em",{parentName:"p"},"NO NEED")," to add a ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app"},"Custom URL Scheme")," until a connector asks.")),(0,a.kt)("h3",{id:"sign-in-with-browser"},"Sign in with browser"),(0,a.kt)(p.ZP,{calling:".signInWithBrowser(redirectUri:)",mdxType:"SignInNote"}),(0,a.kt)("p",null,"Go back to Xcode, use the following code to implement sign-in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'do {\n  try await client.signInWithBrowser(redirectUri: "io.logto://callback")\n  print(client.isAuthenticated) // true\n} catch let error as LogtoClientErrors.SignIn {\n  // error occured during sign in\n}\n')))}s.isMDXComponent=!0},82989:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),i=n(40151),a=(n(59496),n(49613)),r=["components"],p={toc:[]};function l(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'import Logto\nimport LogtoClient\n\nlet config = try? LogtoConfig(\n  endpoint: "<your-logto-endpoint>", // E.g. http://localhost:3001\n  appId: "<your-app-id>"\n)\nlet client = LogtoClient(useConfig: config)\n')),(0,a.kt)("p",null,"By default, we store credentials like ID Token and Refresh Token in the Keychain. Thus the user doesn't need to sign in again when he returns."),(0,a.kt)("p",null,"To turn off this behavior, set ",(0,a.kt)("inlineCode",{parentName:"p"},"usingPersistStorage")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let config = try? LogtoConfig(\n  // ...\n  usingPersistStorage: false\n)\n")))}l.isMDXComponent=!0},63962:function(e,t,n){t.Z=n.p+"assets/images/connector-tab-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},16642:function(e,t,n){t.Z=n.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},31455:function(e,t,n){t.Z=n.p+"assets/images/domain-and-url-f8f432e8a15c2c1cdf9e59b1a2b72049.png"},87456:function(e,t,n){t.Z=n.p+"assets/images/enable-sign-in-with-apple-in-xcode-26680889a51468c3671f3011fd44b5f1.png"},27760:function(e,t,n){t.Z=n.p+"assets/images/enable-sign-in-with-apple-42664e79db1a8966b1fc626a4bb67269.png"},7276:function(e,t,n){t.Z=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},64283:function(e,t,n){t.Z=n.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"}}]);