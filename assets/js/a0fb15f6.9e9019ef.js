"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2854],{28512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(11527),i=t(17279);const s={sidebar_position:1},r="Deploy to Cloud",a={id:"docs/references/tunnel-cli/deploy",title:"Deploy to Cloud",description:"After developing your custom sign-in UI, you can deploy it to Logto Cloud to server your tenant users.",source:"@site/docs/docs/references/tunnel-cli/deploy.mdx",sourceDirName:"docs/references/tunnel-cli",slug:"/docs/references/tunnel-cli/deploy",permalink:"/docs/references/tunnel-cli/deploy",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/tunnel-cli/deploy.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83e\udd16 Using Logto Tunnel CLI",permalink:"/docs/references/tunnel-cli/"}},d={},l=[{value:"Instructions",id:"instructions",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Command options",id:"command-options",level:3},{value:"Run the command",id:"run-the-command",level:3},{value:"Supported environment variables",id:"supported-environment-variables",level:3},{value:"Use environment variables",id:"use-environment-variables",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"deploy-to-cloud",children:"Deploy to Cloud"}),"\n",(0,o.jsxs)(n.p,{children:["After developing your custom sign-in UI, you can deploy it to Logto Cloud to server your tenant users.\nAs we've already introduced in the \"",(0,o.jsx)(n.a,{href:"/docs/recipes/customize-sie/bring-your-ui/",children:"Bring your UI"}),'" documentation, you can achieve this by uploading the zipped UI assets in Logto Console.']}),"\n",(0,o.jsx)(n.p,{children:"Here we provide another option to deploy your UI assets to Cloud using the CLI command, which will be useful when you want to integrate the deployment process into an NPM script or CI/CD pipeline."}),"\n",(0,o.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Assuming you have your custom sign-in UI assets built in the ",(0,o.jsx)(n.code,{children:"/path/to/your/custom/ui/dist"})," directory."]})}),"\n",(0,o.jsx)(n.p,{children:"The deploy command will automatically zip your UI assets, upload them to Logto Cloud, and set the custom UI as the sign-in experience for your tenant users."}),"\n",(0,o.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["Since this command interacts with the Logto Management API, a machine-to-machine app is required to authenticate the request.\nRefer to ",(0,o.jsx)(n.a,{href:"/docs/recipes/interact-with-management-api/",children:"this documentation"})," to learn what Logto Management API is and how to create a machine-to-machine app with required permissions."]}),"\n",(0,o.jsx)(n.h3,{id:"command-options",children:"Command options"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"--help                                 Show help\n--version                              Print CLI version\n--auth                                 Auth credentials of your Logto M2M a pplication. E.g.: <app-id>:<app-secret>\n--endpoint                             Logto endpoint URI that points to your Logto Cloud instance. E.g.: https://<tenant-id>.logto.app/\n--path, --experience-path              The local folder path of your custom sign-in experience assets.\n--resource, --management-api-resource  Logto Management API resource indicator. Required if using custom domain.\n--verbose                              Show verbose output. [default: false]\n"})}),"\n",(0,o.jsx)(n.h3,{id:"run-the-command",children:"Run the command"}),"\n",(0,o.jsxs)(n.p,{children:["Assuming your app ID is ",(0,o.jsx)(n.code,{children:"foo"}),", app secret is ",(0,o.jsx)(n.code,{children:"bar"}),", and your tenant ID is ",(0,o.jsx)(n.code,{children:"baz"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel deploy --auth foo:bar --endpoint https://baz.logto.app --experience-path /path/to/your/custom/ui/dist\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you are using custom domain for your Logto endpoint, an additional option ",(0,o.jsx)(n.code,{children:"--management-api-resource"})," (or ",(0,o.jsx)(n.code,{children:"--resource"}),") must be specified."]}),"\n",(0,o.jsxs)(n.p,{children:["Given the fact that Logto Management API resource is always fixed to ",(0,o.jsx)(n.code,{children:"https://<tenant-id>.logto.app/api"}),". You can run the command as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel deploy --resource https://baz.logto.app/api --auth foo:bar --endpoint https://your.custom.domain --experience-path /path/to/your/custom/ui/dist\n"})}),"\n",(0,o.jsx)(n.p,{children:"Note:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"This option can be omitted when using the default Logto domain, since the CLI can infer the resource automatically."}),"\n",(0,o.jsx)(n.li,{children:"Using either custom domain or default Logto domain as the endpoint will yield identical results."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, if you have an existing zip and prefer to use it directly, you can specify the ",(0,o.jsx)(n.code,{children:"--zip-path"})," option."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel deploy --auth foo:bar --endpoint https://baz.logto.app --zip-path /path/to/your/custom/ui/dist.zip\n"})}),"\n",(0,o.jsx)(n.h3,{id:"supported-environment-variables",children:"Supported environment variables"}),"\n",(0,o.jsx)(n.p,{children:"The deploy command also supports environment variables and will automatically map them to the corresponding options."}),"\n",(0,o.jsxs)(n.p,{children:["All supported environment variables are listed below, prefixed with ",(0,o.jsx)(n.code,{children:"LOGTO_"}),"."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Environment variable"}),(0,o.jsx)(n.th,{children:"CLI option"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"LOGTO_AUTH"}),(0,o.jsx)(n.td,{children:"--auth"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"LOGTO_ENDPOINT"}),(0,o.jsx)(n.td,{children:"--endpoint"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"LOGTO_EXPERIENCE_PATH"}),(0,o.jsx)(n.td,{children:"--experience-path"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"LOGTO_PATH"}),(0,o.jsx)(n.td,{children:"--path"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"LOGTO_MANAGEMENT_API_RESOURCE"}),(0,o.jsx)(n.td,{children:"--management-api-resource"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"LOGTO_RESOURCE"}),(0,o.jsx)(n.td,{children:"--resource"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"LOGTO_ZIP_PATH"}),(0,o.jsx)(n.td,{children:"--zip-path"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"use-environment-variables",children:"Use environment variables"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["You can create a ",(0,o.jsx)(n.code,{children:".env"})," file in the CLI root directory, or any parent directory where the CLI is located."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title=".env"',children:"LOGTO_AUTH=foo:bar\nLOGTO_ENDPOINT=https://your.custom.domain\nLOGTO_EXPERIENCE_PATH=/path/to/your/custom/ui/dist\nLOGTO_RESOURCE=https://baz.logto.app/api\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then run the command without specifying the options."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel deploy\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Alternatively, specify these environment variables directly when running the command."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"LOGTO_AUTH=foo:bar LOGTO_ENDPOINT=https://your.custom.domain LOGTO_EXPERIENCE_PATH=/path/to/your/custom/ui/dist LOGTO_RESOURCE=https://baz.logto.app/api npx @logto/tunnel deploy\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},17279:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(50959);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);