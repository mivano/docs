"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3874],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67245:function(e,t,n){n.d(t,{Z:function(){return i}});n(59496);var o=n(45924),r="tabItem_wP3Q",a=n(4637);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n,children:t})}},31614:function(e,t,n){n.d(t,{Z:function(){return N}});var o=n(59496),r=n(45924),a=n(43226),i=n(59630),l=n(84534),s=n(27995);function u(e){return function(e){return o.Children.map(e,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,a.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:r});return[(0,i._X)(s),(0,o.useCallback)((function(e){if(s){var t=new URLSearchParams(l.location.search);t.set(s,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[s,l])]}function m(e){var t,n,r,a,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,m=e.groupId,h=c(e),g=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:h})})),f=g[0],k=g[1],b=d({queryString:u,groupId:m}),v=b[0],y=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),n=(0,s.Nk)(t),r=n[0],a=n[1],[r,(0,o.useCallback)((function(e){t&&a.set(e)}),[t,a])]),N=w[0],C=w[1],T=function(){var e=null!=v?v:N;return p({value:e,tabValues:h})?e:null}();return(0,o.useLayoutEffect)((function(){T&&k(T)}),[T]),{selectedValue:f,selectValue:(0,o.useCallback)((function(e){if(!p({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),C(e)}),[y,C,h]),tabValues:h}}var h=n(80274),g=n(45605),f="tabList_npZo",k="tabItem_InYg",b=n(4637);function v(e){var t=e.className,n=e.block,o=e.selectedValue,a=e.selectValue,i=e.tabValues,l=[],s=(0,h.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==o&&(s(t),a(r))},c=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var o,r=l.indexOf(e.currentTarget)+1;n=null!=(o=l[r])?o:l[0];break;case"ArrowLeft":var a,i=l.indexOf(e.currentTarget)-1;n=null!=(a=l[i])?a:l[l.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:function(e){return l.push(e)},onKeyDown:c,onClick:u},a,{className:(0,r.Z)("tabs__item",k,null==a?void 0:a.className,{"tabs__item--active":o===t}),children:null!=n?n:t}),t)}))})}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var a=n.find((function(e){return e.props.value===r}));return a?(0,o.cloneElement)(a,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function w(e){var t=m(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",f),children:[(0,b.jsx)(v,Object.assign({},e,t)),(0,b.jsx)(y,Object.assign({},e,t))]})}function N(e){var t=(0,g.Z)();return(0,b.jsx)(w,Object.assign({},e),String(t))}},79814:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=n(67245),l=n(31614),s=n.p+"assets/images/gitpod-running-9ccf680a2482a3146703b6097d62f0a5.png",u=["components"],c={},p="\u26a1 Get started",d={unversionedId:"docs/tutorials/get-started/README",id:"docs/tutorials/get-started/README",title:"\u26a1 Get started",description:"There are some nuanced differences in accessing the admin console between the Open-source and Cloud Preview versions.",source:"@site/docs/docs/tutorials/get-started/README.mdx",sourceDirName:"docs/tutorials/get-started",slug:"/docs/tutorials/get-started/",permalink:"/docs/tutorials/get-started/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/get-started/README.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udc81 Introduction",permalink:"/"},next:{title:"Check out the live preview",permalink:"/docs/tutorials/get-started/check-out-the-live-preview"}},m={},h=[{value:"Cloud preview",id:"cloud-preview",level:2},{value:"Opensource",id:"opensource",level:2},{value:"Launch Logto",id:"launch-logto",level:3},{value:"Local",id:"local",level:3},{value:"Quick troubleshooting",id:"quick-troubleshooting",level:3},{value:"Create an account",id:"create-an-account",level:3},{value:"Get started",id:"get-started",level:2}],g={toc:h};function f(e){var t=e.components,c=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,o.Z)({},g,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-get-started"},"\u26a1 Get started"),(0,a.kt)("p",null,"There are some nuanced differences in accessing the admin console between the Open-source and Cloud Preview versions."),(0,a.kt)("h2",{id:"cloud-preview"},"Cloud preview"),(0,a.kt)("p",null,"Cloud Preview is a Software-as-a-Service (SaaS) version of Logto. It offers users more options for account creation and basic cloud operations than the open-source version."),(0,a.kt)("p",null,"Users can sign up and sign in using Google, GitHub, email with a password, or a verification code. Once you've entered the cloud, you can manage your resources and profile information within the platform."),(0,a.kt)("p",null,"During sign-up, you'll go through an onboarding flow that helps Logto understand your needs and preferences to personalize your experience. Although it only takes a few steps, the onboarding flow can be incredibly helpful in quickly getting started and successfully building authentication and authorization."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Get started",src:n(48210).Z,width:"2880",height:"1800"})),(0,a.kt)("h2",{id:"opensource"},"Opensource"),(0,a.kt)("h3",{id:"launch-logto"},"Launch Logto"),(0,a.kt)("p",null,(0,a.kt)("a",{href:"https://gitpod.io/#https://github.com/logto-io/demo",target:"_blank",rel:"noopener"},"Click here"),"\xa0",(0,a.kt)("span",null,"to start a GitPod workspace for Logto. Wait a few moment, you'll see the message like:")),(0,a.kt)("p",null,(0,a.kt)("img",{src:s,alt:"Gitpod is running",width:"720px"})),(0,a.kt)("p",null,"Logto uses port ",(0,a.kt)("inlineCode",{parentName:"p"},"3001")," for its core service and port ",(0,a.kt)("inlineCode",{parentName:"p"},"3002")," for the interactive Admin Console by default."),(0,a.kt)("p",null,"To continue your Logto journey, press Ctrl (or Cmd) and click the link that starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"https://3002-..."),". Enjoy!"),(0,a.kt)("h3",{id:"local"},"Local"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"docker-compose",label:"Docker Compose",mdxType:"TabItem"},(0,a.kt)("p",null,"Docker Compose CLI usually comes with ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Do not use our docker compose command for production! Since we currently have a built-in Postgres database bundled together with the Logto app in ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),",\nevery time you re-execute the command a new database instance will be created, and any data persisted previously will be lost.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Before the first stable version is available, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"prerelease")," tag for the Docker image.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/docker-compose.yml | TAG=prerelease docker compose -p logto -f - up\n")),(0,a.kt)("p",null,"After a successful composition, you will see the message like:")),(0,a.kt)(i.Z,{value:"docker",label:"Docker",mdxType:"TabItem"},(0,a.kt)("h3",null,"Step 1"),(0,a.kt)("p",null,"Prepare a ",(0,a.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL"),"@^14.0 instance, and using ",(0,a.kt)("a",{href:"/docs/tutorials/using-cli/"},"Logto CLI")," to seed a database for Logto:"),(0,a.kt)(l.Z,{groupId:"cmd",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"logto db seed\n"))),(0,a.kt)(i.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db seed\n")))),(0,a.kt)("h3",null,"Step 2"),(0,a.kt)("p",null,"Pull the image:"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Before the first stable version is available, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"prerelease")," tag for the Docker image.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# ghcr\ndocker pull ghcr.io/logto-io/logto:prerelease\n# DockerHub\ndocker pull svhd/logto:prerelease\n")),(0,a.kt)("h3",null,"Step 3"),(0,a.kt)("p",null,"Map the container ports to Logto core and admin app, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"3001:3001")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"3002:3002"),"; and set the following environment variables to the container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"TRUST_PROXY_HEADER: 1 # Set to 1 if you have an HTTPS proxy (e.g. Nginx) in front of Logto\nENDPOINT: https://<your-logto-domain> # (Optional) Replace with your Logto endpoint URL if you are using a custom domain\nADMIN_ENDPOINT: https://<your-logto-admin-domain> # (Optional) Replace with your Logto admin URL if you are using a custom domain\nDB_URL: postgres://username:password@your_postgres_url:port/db_name # Replace with your Postgres DSN\n")),(0,a.kt)("p",null,"Run the container with all the environment variables above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run \\\n  --name logto \\\n  -p 3001:3001 \\\n  -p 3002:3002 \\\n  -e TRUST_PROXY_HEADER=1 \\\n  -e ENDPOINT=https://<your-logto-domain> \\\n  -e ADMIN_ENDPOINT=https://<your-logto-admin-domain> \\\n  -e DB_URL=postgres://username:password@your_postgres_url:port/db_name \\\n  ghcr.io/logto-io/logto:prerelease\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"If you are using Docker Hub, use ",(0,a.kt)("inlineCode",{parentName:"li"},"svhd/logto:prerelease")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"ghcr.io/logto-io/logto:prerelease"),"."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"host.docker.internal")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"172.17.0.1")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"DB_URL")," to refer to the host IP."))),(0,a.kt)("p",null,"Finally, you will see the message like:")),(0,a.kt)(i.Z,{value:"npm",label:"npm-init",mdxType:"TabItem"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prerequisites")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," ",(0,a.kt)("inlineCode",{parentName:"li"},"^18.12.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://postgresql.org/"},"PostgreSQL")," ",(0,a.kt)("inlineCode",{parentName:"li"},"^14.0"))),(0,a.kt)("p",null,"Higher versions usually work but are not guaranteed."),(0,a.kt)("p",null,"We recommend using a new empty database which is dedicated for Logto, while it","'","s not a hard requirement."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Download and start")),(0,a.kt)("p",null,"In your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init @logto@latest\n")),(0,a.kt)("p",null,"Once you complete the init process and start Logto, you will see the message like:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Core app is running at http://localhost:3001\nCore app is running at https://your-domain-url\nAdmin app is running at http://localhost:3002\nAdmin app is running at https://your-admin-domain-url\n")),(0,a.kt)("p",null,"Heading to ",(0,a.kt)("a",{target:"_blank",href:"http://localhost:3002/",rel:"noopener"},"http://localhost:3002/")," to continue your Logto journey. Enjoy!"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Configuration (optional)"),(0,a.kt)("p",null,"Logto uses environment variables for configuration, along with ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file support. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/core/configuration"},"Configuration")," for detailed usage and full variable list.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Check out ",(0,a.kt)("a",{parentName:"em",href:"/docs/references/core/"},"Core Service")," if you want more advanced controls or programmatic access to Logto.")),(0,a.kt)("h3",{id:"quick-troubleshooting"},"Quick troubleshooting"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"My browser cannot load Admin Console (showing error ",(0,a.kt)("code",null,"Crypto.subtle is unavailable..."),")"),(0,a.kt)("p",null,"Admin Console uses ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API"},"Web Crypto API"),", which requires ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts"},"secure contexts"),", i.e. HTTPS or HTTP with ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),"."),(0,a.kt)("p",null,"If you use HTTP with an IP address or custom domain, then the browser cannot load Admin Console.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"I'm using a custom domain, but my browser cannot load Admin Console (showing error"," ",(0,a.kt)("code",null,'"code": "oidc.invalid_redirect_uri"'),")"),(0,a.kt)("p",null,"If you are using a custom domain rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost"),", you need to set the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"ENDPOINT")," to the Logto URL. It is because of the strict requirement of Redirect URI in OIDC. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/core/configuration#general"},"Configuration")," for details.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"I'm using an HTTPS proxy (e.g., Nginx) in front of Logto, but I failed on sign-in (showing error"," ",(0,a.kt)("code",null,"TypeError: Failed to fetch"),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, make sure you have set the node environment variable ",(0,a.kt)("inlineCode",{parentName:"li"},"TRUST_PROXY_HEADER")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),". See ",(0,a.kt)("a",{parentName:"li",href:"/docs/references/core/configuration#using-a-https-proxy"},"Configuration")," for details."),(0,a.kt)("li",{parentName:"ul"},"Also, you need to set ",(0,a.kt)("inlineCode",{parentName:"li"},"X-Forwarded-Proto")," header to ",(0,a.kt)("inlineCode",{parentName:"li"},"https")," in your proxy config. See ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies"},"Trusting TLS offloading proxies")," for details."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"I'm facing CORS issues."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT")," is not specified, ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:[admin-port]")," will be allowed to perform Cross-Origin Resource Sharing (CORS) in Logto."),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT")," is specified, only requests from the origin of ",(0,a.kt)("inlineCode",{parentName:"li"},"ADMIN_ENDPOINT")," will be allowed."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What is this again? Error: Invalid id token"),(0,a.kt)("p",null,"If you are not messing up with your tokens, then in most cases this is caused by a mismatch of your server time and client time. Sync the time on both your server and client and try again.")),(0,a.kt)("h3",{id:"create-an-account"},"Create an account"),(0,a.kt)("p",null,'Once you have successfully hosted Logto on your server, click on "Create Account" on the welcome page. Keep in mind that the open-source version of Logto only allows for one account creation during the initial launch and does not support multiple accounts. The account creation process is limited to username and password combinations.'),(0,a.kt)("h2",{id:"get-started"},"Get started"),(0,a.kt)("p",null,'After creating your account, you will be automatically redirected to the "Get Started" tab, which provides a quick overview of what Logto can do. The onboarding items provided include both actionable resources that can be immediately utilized, as well as those that may require some level of preparation beforehand.'),(0,a.kt)("p",null,'Our doc tutorial will follow the same order as what you see in the "Get Started" tab. Overall, these items are meant to be explored and leveraged to help you achieve success.'),(0,a.kt)("p",null,"Depending on whether you are an open-source user, an individual developer, or an enterprise user, you may see different recommendations and guiding content. It's important to note that these recommendations are not feature differentiations between segments but rather suggestions to help you navigate and make the most of Logto."),(0,a.kt)("p",null,"One of our goals is to ensure that the features are available to everyone, regardless of whether they are using the open-source or cloud version."),(0,a.kt)("p",null,"Let's review each item and explore what you can do in Logto!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Get started",src:n(29703).Z,width:"2880",height:"1800"})))}f.isMDXComponent=!0},48210:function(e,t,n){t.Z=n.p+"assets/images/create-account-db1359ac0d641d2ae0cc78f2bf15393e.png"},29703:function(e,t,n){t.Z=n.p+"assets/images/get-started-6eb7e93247b08651506e34f62ae8a28c.png"}}]);