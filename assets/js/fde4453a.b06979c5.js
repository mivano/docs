"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[44631],{57467:(e,n,t)=>{t.d(n,{Ay:()=>s,RM:()=>a});var i=t(86070),o=t(15658);const a=[{value:"Sign in with Hugging Face account",id:"sign-in-with-hugging-face-account",level:2},{value:"Create an OAuth app in the Hugging Face",id:"create-an-oauth-app-in-the-hugging-face",level:2},{value:"Managing Hugging Face OAuth apps",id:"managing-hugging-face-oauth-apps",level:2},{value:"Configure your connector",id:"configure-your-connector",level:2},{value:"Config types",id:"config-types",level:3}];function r(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"sign-in-with-hugging-face-account",children:"Sign in with Hugging Face account"}),"\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://huggingface.co/",children:"Hugging Face website"})," and sign in with your Hugging Face account. You may register a new account if you don't have one."]}),"\n",(0,i.jsx)(n.h2,{id:"create-an-oauth-app-in-the-hugging-face",children:"Create an OAuth app in the Hugging Face"}),"\n",(0,i.jsxs)(n.p,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#creating-an-oauth-app",children:"Creating an oauth app"})," guide, and register a new application."]}),"\n",(0,i.jsx)(n.p,{children:"In the creation process, you will need to provide the following information:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Application Name"}),": The name of your application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Homepage URL"}),": The URL of your application's homepage or landing page."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Logo URL"}),": The URL of your application's logo."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scopes"}),": The scopes allowed for the OAuth app. For Hugging Face connector, usually use ",(0,i.jsx)(n.code,{children:"profile"})," to get the user's profile information and ",(0,i.jsx)(n.code,{children:"email"})," to get the user's email address. Ensure these scopes are allowed in your Hugging Face OAuth app if you want to use them."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Redirect URI"}),": The URL to redirect the user to after they have authenticated. You can find the redirect URI in the Logto Admin Console when you're creating a Hugging Face connector or in the created Hugging Face connector details page."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"managing-hugging-face-oauth-apps",children:"Managing Hugging Face OAuth apps"}),"\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://huggingface.co/settings/connected-applications",children:"Connected Applications"})," page, you can add, edit or delete existing OAuth apps.\nYou can also find ",(0,i.jsx)(n.code,{children:"Client ID"})," and generate ",(0,i.jsx)(n.code,{children:"App secrets"})," in corresponding OAuth app settings pages."]}),"\n",(0,i.jsx)(n.h2,{id:"configure-your-connector",children:"Configure your connector"}),"\n",(0,i.jsxs)(n.p,{children:["Go back to Logto Admin Console And Fill out the ",(0,i.jsx)(n.code,{children:"clientId"})," and ",(0,i.jsx)(n.code,{children:"clientSecret"})," field with ",(0,i.jsx)(n.em,{children:"Client ID"})," and ",(0,i.jsx)(n.em,{children:"App Secret"})," you've got from OAuth app detail pages mentioned in the previous section."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"scope"})," is a space-delimited list of ",(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/oauth#currently-supported-scopes",children:"Hugging Face supported scopes"}),". If not provided, scope defaults to be ",(0,i.jsx)(n.code,{children:"profile"}),". For Hugging Face connector, the scope you may want to use is ",(0,i.jsx)(n.code,{children:"profile"})," and ",(0,i.jsx)(n.code,{children:"email"}),". ",(0,i.jsx)(n.code,{children:"profile"})," scope is required to get the user's profile information, and ",(0,i.jsx)(n.code,{children:"email"})," scope is required to get the user's email address. Ensure you have allowed these scopes in your Hugging Face OAuth app (configured in ",(0,i.jsx)(n.a,{href:"#create-an-oauth-app-in-the-hugging-face",children:"Create an OAuth app in the Hugging Face"})," section)."]}),"\n",(0,i.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientSecret"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"scope"}),(0,i.jsx)(n.td,{children:"string"})]})]})]})]})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},86253:(e,n,t)=>{t.d(n,{Ay:()=>b,RM:()=>f});var i=t(86070),o=t(15658),a=t(97538);function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In Logto SDK, we can use ",(0,i.jsx)(n.code,{children:"logtoClient.isAuthenticated"})," to check the authentication status, if the user is signed in, the value will be ",(0,i.jsx)(n.code,{children:"true"}),", otherwise, the value will be ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Now, let's add a live data to ",(0,i.jsx)(n.code,{children:"LogtoViewModel.kt"})," to observe the authentication status, and update the status when the user signed in or signed out:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n\n    // Add a live data to observe the authentication status\n    private val _authenticated = MutableLiveData(logtoClient.isAuthenticated)\n    val authenticated: LiveData<Boolean>\n        get() = _authenticated\n\n    fun signIn(context: Activity) {\n        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->\n            logtoException?.let { println(it) }\n            // Update the live data\n            _authenticated.postValue(logtoClient.isAuthenticated)\n        }\n    }\n\n    fun signOut() {\n        logtoClient.signOut { logtoException ->\n            logtoException?.let { println(it) }\n            // Update the live data\n            _authenticated.postValue(logtoClient.isAuthenticated)\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then, we observe the ",(0,i.jsx)(n.code,{children:"authenticated"})," live data in ",(0,i.jsx)(n.code,{children:"MainActivity.kt"}),", when the user is signed in, we hide the sign-in button and show the sign-out button and vice versa:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    //...other codes\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n        val signInButton = findViewById<Button>(R.id.sign_in_button)\n        val signOutButton = findViewById<Button>(R.id.sign_out_button)\n        // ...handle button click codes\n\n        // Observe the authentication status\n        logtoViewModel.authenticated.observe(this) { authenticated ->\n            if (authenticated) {\n                // The user is authenticated\n                signInButton.visibility = View.GONE\n                signOutButton.visibility = View.VISIBLE\n            } else {\n                // The user is not authenticated\n                signInButton.visibility = View.VISIBLE\n                signOutButton.visibility = View.GONE\n            }\n        }\n    }\n}\n"})})]})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}var l=t(3957),c=t(69043);const d=[...c.RM];function u(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Before starting, you need to add a redirect URI in the Admin Console for your application."}),"\n",(0,i.jsxs)(n.p,{children:["In Android, the redirect URI follows the pattern: ",(0,i.jsx)(n.code,{children:"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"LOGTO_REDIRECT_SCHEME"})," should be a custom scheme in the reverse domain format."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"YOUR_APP_PACKAGE"})," is your app package name."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Assuming you treat ",(0,i.jsx)(n.code,{children:"io.logto.android"})," as the custom ",(0,i.jsx)(n.code,{children:"LOGTO_REDIRECT_SCHEME"}),", and ",(0,i.jsx)(n.code,{children:"io.logto.sample"})," is your app package name, the Redirect URI should be ",(0,i.jsx)(n.code,{children:"io.logto.android://io.logto.sample/callback"}),"."]}),"\n",(0,i.jsx)(c.Ay,{figureSrc:l.A,redirectUri:"io.logto.android://io.logto.sample/callback"}),"\n",(0,i.jsxs)(n.p,{children:["After the redirect URI is configured, we add a ",(0,i.jsx)(n.code,{children:"signIn"})," method to your ",(0,i.jsx)(n.code,{children:"LogtoViewModel.kt"}),", which will call ",(0,i.jsx)(n.code,{children:"logtoClient.signIn"})," API to invoke the Logto sign-in page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n    fun signIn(context: Activity) {\n        logtoClient.signIn(context, "io.logto.android://io.logto.sample/callback") { logtoException ->\n            logtoException?.let { println(it) }\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now setup on-click listener for the sign-in button in your ",(0,i.jsx)(n.code,{children:"MainActivity.kt"})," to call the ",(0,i.jsx)(n.code,{children:"signIn"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n\n        // Assume you have a button with id `sign_in_button` in your layout\n        val signInButton = findViewById<Button>(R.id.sign_in_button)\n        signInButton.setOnClickListener {\n            logtoViewModel.signIn(this)\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"When you click the button, the Logto SDK will navigate to the Logto sign-in page."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function p(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Similar to sign-in, we add a ",(0,i.jsx)(n.code,{children:"signOut"})," method to ",(0,i.jsx)(n.code,{children:"LogtoViewModel.kt"})," to call ",(0,i.jsx)(n.code,{children:"logtoClient.signOut"})," API:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    // ...other codes\n    fun signOut() {\n        logtoClient.signOut { logtoException ->\n            logtoException?.let { println(it) }\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After you signed out, the Logto SDK will clear all local credentials even though Logto exceptions occurred when calling ",(0,i.jsx)(n.code,{children:"logtoClient.signOut"})," API."]}),"\n",(0,i.jsxs)(n.p,{children:["Then, we can add a button to call the ",(0,i.jsx)(n.code,{children:"signOut"})," method in ",(0,i.jsx)(n.code,{children:"MainActivity.kt"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    //...other codes\n    override fun onCreate(savedInstanceState: Bundle?) {\n        //...other codes\n        //...sign-in button codes\n\n        // Assume you have a button with id `sign_out_button` in your layout\n        val signOutButton = findViewById<Button>(R.id.sign_out_button)\n        signOutButton.setOnClickListener {\n            logtoViewModel.signOut()\n        }\n    }\n}\n"})})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}var x=t(50778),m=t(80264),j=t(92409);const f=[...a.RM,{value:"Installation",id:"installation",level:3},...m.RM,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...x.RM,{value:"Implement sign-in",id:"implement-sign-in",level:3},...d,{value:"Implement sign-out",id:"implement-sign-out",level:3},{value:"Handle authentication status",id:"handle-authentication-status",level:3},...j.RM];function v(e){const n={h3:"h3",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(m.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,i.jsx)(x.Ay,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-in",children:"Implement sign-in"}),"\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-out",children:"Implement sign-out"}),"\n",(0,i.jsx)(g,{}),"\n",(0,i.jsx)(n.h3,{id:"handle-authentication-status",children:"Handle authentication status"}),"\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(j.Ay,{sdk:"Android"})]})}function b(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(v,{...e})}):v(e)}},37391:(e,n,t)=>{t.d(n,{Ay:()=>s,RM:()=>a});var i=t(86070),o=t(15658);const a=[];function r(e){const n={img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(28084).A+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},23471:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>r});var i=t(86070),o=t(15658);const a=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function s(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(13885).A+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:a,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},42969:(e,n,t)=>{t.d(n,{Ay:()=>s,RM:()=>a});var i=t(86070),o=t(15658);const a=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(3466).A+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},4914:(e,n,t)=>{t.d(n,{Ay:()=>s,RM:()=>a});var i=t(86070),o=t(15658);const a=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/introduction",children:"introduction page"})," to get started."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},37448:(e,n,t)=>{t.d(n,{Ay:()=>s,RM:()=>a});var i=t(86070),o=t(15658);const a=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},92409:(e,n,t)=>{t.d(n,{Ay:()=>s,RM:()=>a});var i=t(86070),o=t(15658);const a=[];function r(e){const n={admonition:"admonition",p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},52878:(e,n,t)=>{t.d(n,{Ay:()=>s,RM:()=>a});var i=t(86070),o=t(15658);const a=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},11808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,connector:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var i=t(55071),o=t(86070),a=t(15658);t(4914),t(23471),t(37391),t(37448),t(42969),t(52878),t(86253),t(57467);const r={slug:"how-to-build-hugging-face-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","hugging-face","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Hugging Face sign-in with Android and Logto"},s=void 0,l={authorsImageUrls:[void 0]},c="Hugging Face",d=[];function u(e){return(0,o.jsx)(o.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u()}},69043:(e,n,t)=>{t.d(n,{Ay:()=>s,RM:()=>a});var i=t(86070),o=t(15658);const a=[];function r(e){const n={p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Let's switch to the Application details page of Logto Console. Add a Redirect URI ",(0,i.jsx)("code",{children:e.redirectUri}),' and click "Save changes".']}),"\n",(0,i.jsx)("img",{alt:"Redirect URI in Logto Console",src:e.figureSrc,width:"600px"})]})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},97538:(e,n,t)=>{t.d(n,{Ay:()=>s,RM:()=>a});var i=t(86070),o=t(15658);const a=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The example is based on ",(0,i.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/View",children:"View system"})," and ",(0,i.jsx)(n.a,{href:"https://developer.android.com/topic/libraries/architecture/viewmodel",children:"View Model"}),", but the concepts are the same when using ",(0,i.jsx)(n.a,{href:"https://developer.android.com/jetpack/compose",children:"Jetpack Compose"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"The example is written in Kotlin, but the concepts are the same for Java."}),"\n",(0,i.jsxs)(n.li,{children:["Both ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/kotlin/tree/master/android-sample-kotlin",children:"Kotlin"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/kotlin/tree/master/android-sample-java",children:"Java"})," sample projects are available on our ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/kotlin",children:"SDK repository"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The tutorial video is available on our ",(0,i.jsx)(n.a,{href:"https://youtu.be/_GSiYqTLnak",children:"YouTube channel"}),"."]}),"\n"]})})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},50778:(e,n,t)=>{t.d(n,{Ay:()=>s,RM:()=>a});var i=t(86070),o=t(15658);const a=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"LogtoViewModel.kt"})," and init ",(0,i.jsx)(n.code,{children:"LogtoClient"})," in this view model:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="LogtoViewModel.kt"',children:'//...with other imports\nimport io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\n\nclass LogtoViewModel(application: Application) : AndroidViewModel(application) {\n    private val logtoConfig = LogtoConfig(\n          endpoint = "<your-logto-endpoint>",\n          appId = "<your-app-id>",\n          scopes = null,\n          resources = null,\n          usingPersistStorage = true,\n    )\n\n    private val logtoClient = LogtoClient(logtoConfig, application)\n\n    companion object {\n        val Factory: ViewModelProvider.Factory = object : ViewModelProvider.Factory {\n            @Suppress("UNCHECKED_CAST")\n            override fun <T : ViewModel> create(\n                modelClass: Class<T>,\n                extras: CreationExtras\n            ): T {\n                // Get the Application object from extras\n                val application = checkNotNull(extras[APPLICATION_KEY])\n                return LogtoViewModel(application) as T\n            }\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["then, create a ",(0,i.jsx)(n.code,{children:"LogtoViewModel"})," for your ",(0,i.jsx)(n.code,{children:"MainActivity.kt"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="MainActivity.kt"',children:"//...with other imports\nclass MainActivity : AppCompatActivity() {\n    private val logtoViewModel: LogtoViewModel by viewModels { LogtoViewModel.Factory }\n    //...other codes\n}\n"})})]})}function s(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},80264:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var i=t(86070),o=t(15658),a=t(78551),r=t(77501);const s=[];function l(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The minimum supported Android API level of Logto Android SDK is level 24."})}),"\n",(0,i.jsxs)(n.p,{children:["Before you install Logto Android SDK, ensure ",(0,i.jsx)(n.code,{children:"mavenCentral()"})," is added to your repository configuration in the Gradle project build file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="settings.gradle.kts"',children:"dependencyResolutionManagement {\n  repositories {\n    mavenCentral()\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add Logto Android SDK to your dependencies:"}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="build.gradle.kts"',children:'dependencies {\n  implementation("io.logto.sdk:android:1.1.3")\n}\n'})})}),(0,i.jsx)(a.A,{value:"groovy",label:"Groovy",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",metastring:'title="build.gradle"',children:"dependencies {\n  implementation 'io.logto.sdk:android:1.1.3'\n}\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Since the SDK needs internet access, you need to add the following permission to your ",(0,i.jsx)(n.code,{children:"AndroidManifest.xml"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",metastring:'title="AndroidManifest.xml"',children:'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n  xmlns:tools="http://schemas.android.com/tools">\n\n  \x3c!-- add internet permission --\x3e\n  <uses-permission android:name="android.permission.INTERNET" />\n\n  \x3c!-- other configurations... --\x3e\n</manifest>\n'})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},78551:(e,n,t)=>{t.d(n,{A:()=>r});t(30758);var i=t(13526);const o={tabItem:"tabItem_PGP0"};var a=t(86070);function r(e){let{children:n,hidden:t,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,r),hidden:t,children:n})}},77501:(e,n,t)=>{t.d(n,{A:()=>y});var i=t(30758),o=t(13526),a=t(65052),r=t(25557),s=t(77469),l=t(50873),c=t(62230),d=t(60196);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=h(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,u]=g({queryString:t,groupId:o}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,d.Dv)(t);return[o,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),j=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{j&&l(j)}),[j]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=t(13887);const j={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var f=t(86070);function v(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==i&&(c(n),r(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,o.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(n))}},3957:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png"},28084:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},81684:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},15658:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(30758);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}},55071:e=>{e.exports=JSON.parse('{"permalink":"/tutorial/how-to-build-hugging-face-sign-in-with-android-and-logto","source":"@site/tutorial/build-with-logto/generated-android-hugging-face.mdx","title":"How to build Hugging Face sign-in with Android and Logto","description":"{/*","date":"2024-11-28T08:28:29.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/tutorial/tags/authentication"},{"inline":true,"label":"hugging-face","permalink":"/tutorial/tags/hugging-face"},{"inline":true,"label":"android","permalink":"/tutorial/tags/android"},{"inline":true,"label":"kotlin/java","permalink":"/tutorial/tags/kotlin-java"},{"inline":true,"label":"social-sign-in","permalink":"/tutorial/tags/social-sign-in"},{"inline":true,"label":"sign-in","permalink":"/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/tutorial/tags/login"}],"readingTime":1.305,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-hugging-face-sign-in-with-android-and-logto","authors":"logto","tags":["authentication","hugging-face","android","kotlin/java","social-sign-in","sign-in","login"],"title":"How to build Hugging Face sign-in with Android and Logto"},"unlisted":false,"prevItem":{"title":"How to build Google sign-in with Android and Logto","permalink":"/tutorial/how-to-build-google-sign-in-with-android-and-logto"},"nextItem":{"title":"How to build Kakao sign-in with Android and Logto","permalink":"/tutorial/how-to-build-kakao-sign-in-with-android-and-logto"}}')}}]);