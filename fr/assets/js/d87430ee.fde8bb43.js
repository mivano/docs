"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[39497],{53307:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[{value:"Set up Azure AD in the Azure Portal",id:"set-up-azure-ad-in-the-azure-portal",level:3},{value:"Configure your client secret",id:"configure-your-client-secret",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3},{value:"Config types",id:"config-types",level:4},{value:"References",id:"references",level:3}];function r(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"set-up-azure-ad-in-the-azure-portal",children:"Set up Azure AD in the Azure Portal"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://portal.azure.com/#home",children:"Azure Portal"})," and sign in with your Azure account. You need to have an active subscription to access Azure AD."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Azure Active Directory"})," from the services they offer, and click the ",(0,o.jsx)(n.strong,{children:"App Registrations"})," from the left menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"New Registration"})," at the top and enter a description, select your ",(0,o.jsx)(n.strong,{children:"access type"})," and add your ",(0,o.jsx)(n.strong,{children:"Redirect URI"}),", which redirect the user to the application after logging in. In our case, this will be ",(0,o.jsx)(n.code,{children:"${your_logto_origin}/callback/${connector_id}"}),". e.g. ",(0,o.jsx)(n.code,{children:"https://logto.dev/callback/${connector_id}"}),". You need to select Web as Platform. The ",(0,o.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,o.jsxs)(n.li,{children:["If you select ",(0,o.jsx)(n.strong,{children:"Single Tenant"})," for access type then you need to enter ",(0,o.jsx)(n.strong,{children:"TenantID"}),", else you need to enter ",(0,o.jsx)(n.code,{children:"common"})," as Tenant ID."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configure-your-client-secret",children:"Configure your client secret"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In your newly created project, click the ",(0,o.jsx)(n.strong,{children:"Certificates & Secrets"})," to get a client secret, and click the ",(0,o.jsx)(n.strong,{children:"New client secret"})," from the top."]}),"\n",(0,o.jsx)(n.li,{children:"Enter a description and an expiration."}),"\n",(0,o.jsxs)(n.li,{children:["This will only show your client secret once. Save the ",(0,o.jsx)(n.strong,{children:"value"})," to a secure location."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Add your App Registration's ",(0,o.jsx)(n.strong,{children:"Client ID"})," into logto json."]}),"\n",(0,o.jsxs)(n.li,{children:["Add your ",(0,o.jsx)(n.strong,{children:"Client Secret"})," into logto json."]}),"\n",(0,o.jsxs)(n.li,{children:["Add your App Registration's ",(0,o.jsx)(n.strong,{children:"Tenant ID"})," into logto json."]}),"\n",(0,o.jsxs)(n.li,{children:["Add your Microsoft ",(0,o.jsx)(n.strong,{children:"Login Url"}),' into logto json. This defaults to "',(0,o.jsx)(n.a,{href:"https://login.microsoftonline.com/",children:"https://login.microsoftonline.com/"}),"\" for many applications, but you can set your custom domain if you have one. (Don't forget the trailing slash)"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsonc",children:'{\n  "clientId": "<client-id>",\n  "clientSecret": "<client-secret>",\n  "tenantId": "<tenant-id>", // use "common" if you did\'t select **Single Tenant**\n  "cloudInstance": "https://login.microsoftonline.com/",\n}\n'})}),"\n",(0,o.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"tenantId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"cloudInstance"}),(0,o.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-app-sign-user-overview?tabs=nodejs",children:"Web app that signs in users"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},575:(e,n,t)=>{t.d(n,{Ay:()=>v,RM:()=>S});var o=t(86070),i=t(15658);function s(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In traditional web applications, the user authentication information will be stored in the user session."}),"\n",(0,o.jsxs)(n.p,{children:["Logto SDK provides a ",(0,o.jsx)(n.code,{children:"Storage"})," interface, you can implement a ",(0,o.jsx)(n.code,{children:"Storage"})," adapter based on your web framework so that the Logto SDK can store user authentication information in the session."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"We do NOT recommend using cookie-based sessions, as user authentication information stored by Logto may exceed the cookie size limit.\nIn this example, we use memory-based sessions. You can use Redis, MongoDB, and other technologies in production to store sessions as needed."})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Storage"})," type in the Logto SDK is as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="github.com/logto-io/client/storage.go"',children:"package client\n\ntype Storage interface {\n\tGetItem(key string) string\n\tSetItem(key, value string)\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["We use ",(0,o.jsx)(n.a,{href:"https://github.com/gin-contrib/sessions",children:"github.com/gin-contrib/sessions"})," middleware as an example to demonstrate this process."]}),"\n",(0,o.jsx)(n.p,{children:"Apply the middleware to the application, so that we can get the user session by the user request context in the route handler:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n\t"github.com/gin-contrib/sessions"\n\t"github.com/gin-contrib/sessions/memstore"\n\t"github.com/gin-gonic/gin"\n\t"github.com/logto-io/go/client"\n)\n\nfunc main() {\n\trouter := gin.Default()\n\n\t// We use memory-based session in this example\n\tstore := memstore.NewStore([]byte("your session secret"))\n\trouter.Use(sessions.Sessions("logto-session", store))\n\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// Get user session\n\t\tsession := sessions.Default(ctx)\n\t\t// ...\n\t\tctx.String(200, "Hello Logto!")\n\t})\n\trouter.Run(":3000")\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:"session_storage.go"})," file, define a ",(0,o.jsx)(n.code,{children:"SessionStorage"})," and implement the Logto SDK's ",(0,o.jsx)(n.code,{children:"Storage"})," interfaces:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="session_storage.go"',children:'package main\n\nimport (\n\t"github.com/gin-contrib/sessions"\n)\n\ntype SessionStorage struct {\n\tsession sessions.Session\n}\n\nfunc (storage *SessionStorage) GetItem(key string) string {\n\tvalue := storage.session.Get(key)\n\tif value == nil {\n\t\treturn ""\n\t}\n\treturn value.(string)\n}\n\nfunc (storage *SessionStorage) SetItem(key, value string) {\n\tstorage.session.Set(key, value)\n\tstorage.session.Save()\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now, in the route handler, you can create a session storage for Logto:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",children:"session := sessions.Default(ctx)\nsessionStorage := &SessionStorage{session: session}\n"})})]})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}function c(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The following demonstration is built upon the ",(0,o.jsx)(n.a,{href:"https://gin-gonic.com",children:"Gin Web Framework"}),". You may also integrate Logto into other frameworks by taking the same steps."]}),"\n",(0,o.jsxs)(n.li,{children:["The Go sample project is available on our ",(0,o.jsx)(n.a,{href:"https://github.com/logto-io/go/tree/master/gin-sample",children:"Go SDK repo"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}function l(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"When the user signs in successfully on the Logto sign-in page, Logto will redirect the user to the Redirect URI."}),"\n",(0,o.jsxs)(n.p,{children:["Since the redirect URI is ",(0,o.jsx)(n.code,{children:"http://localhost:3000/callback"}),", we add the ",(0,o.jsx)(n.code,{children:"/callback"})," route to handle the callback after signing in."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\t// Add a route for handling sign-in callback requests\n\trouter.GET("/callback", func(ctx *gin.Context) {\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// The sign-in callback request is handled by Logto\n\t\terr := logtoClient.HandleSignInCallback(ctx.Request)\n\t\tif err != nil {\n\t\t\tctx.String(http.StatusInternalServerError, err.Error())\n\t\t\treturn\n\t\t}\n\n\t\t// Jump to the page specified by the developer.\n\t\t// This example takes the user back to the home page.\n\t\tctx.Redirect(http.StatusTemporaryRedirect, "/")\n\t})\n\n\t// ...\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}function h(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["After the redirect URI is configured, we add a ",(0,o.jsx)(n.code,{children:"sign-in"})," route to handle the sign-in request and also add an sign-in link on the home page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\t// Add a link to perform a sign-in request on the home page\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// ...\n\t\thomePage := `<h1>Hello Logto</h1>` +\n\t\t\t"<div>" + authState + "</div>" +\n\t\t\t// Add link\n\t\t\t`<div><a href="/sign-in">Sign In</a></div>`\n\n\t\tctx.Data(http.StatusOK, "text/html; charset=utf-8", []byte(homePage))\n\t})\n\n\t// Add a route for handling sign-in requests\n\trouter.GET("/sign-in", func(ctx *gin.Context) {\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// The sign-in request is handled by Logto.\n\t\t// The user will be redirected to the Redirect URI on signed in.\n\t\tsignInUri, err := logtoClient.SignIn("http://localhost:3000/callback")\n\t\tif err != nil {\n\t\t\tctx.String(http.StatusInternalServerError, err.Error())\n\t\t\treturn\n\t\t}\n\n\t\t// Redirect the user to the Logto sign-in page.\n\t\tctx.Redirect(http.StatusTemporaryRedirect, signInUri)\n\t})\n\n\t// ...\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Now, when your user visit ",(0,o.jsx)(n.code,{children:"http://localhost:3000/sign-in"}),", the user will be redirected to the Logto sign-in page."]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function u(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Similar to the sign-in flow, when the user signs out, Logto will redirect the user to the post sign-out redirect URI."}),"\n",(0,o.jsxs)(n.p,{children:["Now, let's add the ",(0,o.jsx)(n.code,{children:"sign-out"})," route to handle the sign-out request and also add a sign-out link on the home page:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\t// Add a link to perform a sign-out request on the home page\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// ...\n\t\thomePage := `<h1>Hello Logto</h1>` +\n\t\t\t"<div>" + authState + "</div>" +\n\t\t\t`<div><a href="/sign-in">Sign In</a></div>` +\n\t\t\t// Add link\n\t\t\t`<div><a href="/sign-out">Sign Out</a></div>`\n\n\t\tctx.Data(http.StatusOK, "text/html; charset=utf-8", []byte(homePage))\n\t})\n\n\t// Add a route for handling signing out requests\n\trouter.GET("/sign-out", func(ctx *gin.Context) {\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// The sign-out request is handled by Logto.\n\t\t// The user will be redirected to the Post Sign-out Redirect URI on signed out.\n\t\tsignOutUri, signOutErr := logtoClient.SignOut("http://localhost:3000")\n\n\t\tif signOutErr != nil {\n\t\t\tctx.String(http.StatusOK, signOutErr.Error())\n\t\t\treturn\n\t\t}\n\n\t\tctx.Redirect(http.StatusTemporaryRedirect, signOutUri)\n\t})\n\n\t// ...\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"After the user makes a signing-out request, Logto will clear all user authentication information in the session."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}var m=t(8670);const x=[...m.RM];function j(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"First, create a Logto config:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\tlogtoConfig := &client.LogtoConfig{\n\t\tEndpoint:  "<your-logto-endpoint>", // E.g. http://localhost:3001\n\t\tAppId:     "<your-application-id>",\n\t\tAppSecret: "<your-application-secret>",\n\t}\n\t// ...\n}\n'})}),"\n",(0,o.jsx)(m.Ay,{}),"\n",(0,o.jsxs)(n.p,{children:["Then, you can create a ",(0,o.jsx)(n.code,{children:"LogtoClient"})," for each user request with the Logto config above:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'func main() {\n\t// ...\n\n\trouter.GET("/", func(ctx *gin.Context) {\n\t\t// Create LogtoClient\n\t\tsession := sessions.Default(ctx)\n\t\tlogtoClient := client.NewLogtoClient(\n\t\t\tlogtoConfig,\n\t\t\t&SessionStorage{session: session},\n\t\t)\n\n\t\t// Use Logto to control the content of the home page\n\t\tauthState := "You are not logged in to this website. :("\n\n\t\tif logtoClient.IsAuthenticated() {\n\t\t\tauthState = "You are logged in to this website! :)"\n\t\t}\n\n\t\thomePage := `<h1>Hello Logto</h1>` +\n\t\t\t"<div>" + authState + "</div>"\n\n\t\tctx.Data(http.StatusOK, "text/html; charset=utf-8", []byte(homePage))\n\t})\n\n\t// ...\n}\n'})})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}function b(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Execute in the project root directory:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go get github.com/logto-io/go\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Add the ",(0,o.jsx)(n.code,{children:"github.com/logto-io/go/client"})," package to your application code:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-go",metastring:'title="main.go"',children:'// main.go\npackage main\n\nimport (\n\t"github.com/gin-gonic/gin"\n\t// Add dependency\n\t"github.com/logto-io/go/client"\n)\n\nfunc main() {\n\trouter := gin.Default()\n\trouter.GET("/", func(c *gin.Context) {\n\t\tc.String(200, "Hello Logto!")\n\t})\n\trouter.Run(":3000")\n}\n'})})]})}function y(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(b,{...e})}):b(e)}var w=t(92409);const S=[{value:"Installation",id:"installation",level:3},{value:"Create a session storage",id:"create-a-session-storage",level:3},{value:"Init LogtoClient",id:"init-logtoclient",level:3},...x,{value:"Implement sign-in route",id:"implement-sign-in-route",level:3},{value:"Implement the callback route",id:"implement-the-callback-route",level:3},{value:"Implement sign-out route",id:"implement-sign-out-route",level:3},...w.RM];function k(e){const n={h3:"h3",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(y,{}),"\n",(0,o.jsx)(n.h3,{id:"create-a-session-storage",children:"Create a session storage"}),"\n",(0,o.jsx)(r,{}),"\n",(0,o.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,o.jsx)(f,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-in-route",children:"Implement sign-in route"}),"\n",(0,o.jsx)(g,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-the-callback-route",children:"Implement the callback route"}),"\n",(0,o.jsx)(d,{}),"\n",(0,o.jsx)(n.h3,{id:"implement-sign-out-route",children:"Implement sign-out route"}),"\n",(0,o.jsx)(p,{}),"\n",(0,o.jsx)(w.Ay,{sdk:"Go"})]})}function v(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(k,{...e})}):k(e)}},37391:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social connectors". From there, click "Add social connector".'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Connector tab",src:t(28084).A+"",width:"3352",height:"1226"})}),"\n",(0,o.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,o.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,o.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},23471:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var o=t(86070),i=t(15658);const s=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function c(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Get Started",src:t(13885).A+"",width:"2354",height:"588"})}),"\n",(0,o.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,o.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,o.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Framework List",src:t(81684).A+"",width:"3626",height:"2804"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,o.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,o.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create application."'}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},42969:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'Switch to the "Sign-in experience" tab, then click the "Sign-up and sign-in" tab.'}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(16906).A+"",width:"3502",height:"1794"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Save changes",src:t(3466).A+"",width:"2474",height:"188"})}),"\n",(0,o.jsx)(n.p,{children:'Finally, click "Save changes" on the bottom right corner.'})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},4914:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:["\n","\n",(0,o.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,o.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,o.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,o.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,o.jsx)(n.a,{href:"/introduction",children:"introduction page"})," to get started."]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["Basic knowledge of ",(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},37448:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save changes") and the ',e.connector," connector should be available now."]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},92409:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,o.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},52878:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>s});var o=t(86070),i=t(15658);const s=[];function r(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},45115:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,connector:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var o=t(26605),i=t(86070),s=t(15658);t(4914),t(23471),t(37391),t(37448),t(42969),t(52878),t(575),t(53307);const r={slug:"how-to-build-azure-ad-sign-in-with-go-and-logto",authors:"logto",tags:["authentication","azure-ad","go","go","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with Go and Logto"},c=void 0,a={authorsImageUrls:[void 0]},l="Azure AD",d=[];function h(e){return(0,i.jsx)(i.Fragment,{})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h()}},8670:(e,n,t)=>{t.d(n,{Ay:()=>a,RM:()=>r});var o=t(86070),i=t(15658);const s=t.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",r=[];function c(e){const n={admonition:"admonition",...(0,i.R)(),...e.components};return(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)("p",{children:'You can find and copy "App Secret" from application details page in Admin Console:'}),(0,o.jsx)("img",{alt:"App Secret",src:s,width:"586px"})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28084:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},81684:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},13885:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},3466:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},16906:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},15658:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(30758);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}},26605:e=>{e.exports=JSON.parse('{"permalink":"/fr/tutorial/how-to-build-azure-ad-sign-in-with-go-and-logto","source":"@site/tutorial/build-with-logto/generated-go-azure-ad.mdx","title":"How to build Azure AD sign-in with Go and Logto","description":"{/*","date":"2024-11-29T01:01:32.000Z","tags":[{"inline":true,"label":"authentication","permalink":"/fr/tutorial/tags/authentication"},{"inline":true,"label":"azure-ad","permalink":"/fr/tutorial/tags/azure-ad"},{"inline":true,"label":"go","permalink":"/fr/tutorial/tags/go"},{"inline":true,"label":"go","permalink":"/fr/tutorial/tags/go"},{"inline":true,"label":"social-sign-in","permalink":"/fr/tutorial/tags/social-sign-in"},{"inline":true,"label":"sign-in","permalink":"/fr/tutorial/tags/sign-in"},{"inline":true,"label":"login","permalink":"/fr/tutorial/tags/login"}],"readingTime":1.275,"hasTruncateMarker":true,"authors":[{"name":"Logto team","title":"The better identity infrastructure for developers","url":"https://logto.io","imageURL":"https://github.com/logto-io.png","key":"logto","page":null}],"frontMatter":{"slug":"how-to-build-azure-ad-sign-in-with-go-and-logto","authors":"logto","tags":["authentication","azure-ad","go","go","social-sign-in","sign-in","login"],"title":"How to build Azure AD sign-in with Go and Logto"},"unlisted":false,"prevItem":{"title":"How to build AWS SES Email passwordless sign-in with Go and Logto","permalink":"/fr/tutorial/how-to-build-aws-ses-sign-in-with-go-and-logto"},"nextItem":{"title":"How to build Discord sign-in with Go and Logto","permalink":"/fr/tutorial/how-to-build-discord-sign-in-with-go-and-logto"}}')}}]);