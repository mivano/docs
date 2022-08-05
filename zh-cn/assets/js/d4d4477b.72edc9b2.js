"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[429],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return A}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),A=o,m=d["".concat(s,".").concat(A)]||d[A]||c[A]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function A(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28482:function(e,t,n){n.d(t,{Z:function(){return l}});n(59496);var r=n(45924),o="tabItem_G5LH",a=n(4637);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n,children:t})}},38142:function(e,t,n){n.d(t,{Z:function(){return A}});var r=n(59496),o=n(45924),a=n(46971),l=n(21),i=n(73962),s=n(15469),p="tabList_A7qg",u="tabItem_Keco",c=n(4637);function d(e){var t,n,a=e.lazy,d=e.block,A=e.defaultValue,m=e.values,g=e.groupId,f=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===A?A:null!=(t=null!=A?A:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,i.U)(),x=y.tabGroupChoices,N=y.setTabGroupChoices,C=(0,r.useState)(b),w=C[0],P=C[1],S=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var B=x[g];null!=B&&B!==w&&h.some((function(e){return e.value===B}))&&P(B)}var O=function(e){var t=e.currentTarget,n=S.indexOf(t),r=h[n].value;r!==w&&(D(t),P(r),null!=g&&N(g,String(r)))},U=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,o=S.indexOf(e.currentTarget)+1;n=null!=(r=S[o])?r:S[0];break;case"ArrowLeft":var a,l=S.indexOf(e.currentTarget)-1;n=null!=(a=S[l])?a:S[S.length-1]}null==(t=n)||t.focus()};return(0,c.jsxs)("div",{className:(0,o.Z)("tabs-container",p),children:[(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f),children:h.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,c.jsx)("li",Object.assign({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,ref:function(e){return S.push(e)},onKeyDown:U,onFocus:O,onClick:O},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":w===t}),children:null!=n?n:t}),t)}))}),a?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):(0,c.jsx)("div",{className:"margin-top--md",children:k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))})]})}function A(e){var t=(0,a.Z)();return(0,c.jsx)(d,Object.assign({},e),String(t))}},87460:function(e,t,n){n.d(t,{ZP:function(){return s}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"\u672c\u7bc7\u6559\u7a0b\u9ed8\u8ba4\u4f60\u5df2\u7ecf\u5728\u7ba1\u7406\u754c\u9762\u4e2d\u6210\u529f\u521b\u5efa\u4e86\u4e00\u4e2a\u300c",n.type,"\u300d\u7c7b\u578b\u7684\u5e94\u7528\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b8c\u6210\u8fd9\u4e00\u6b65\u64cd\u4f5c\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{href:"../../tutorials/get-started/create-and-integrate-the-first-app"},"\u8fd9\u7bc7\u6559\u7a0b"),"\uff0c\u521b\u5efa\u5e94\u7528\u4e4b\u540e\u518d\u7ee7\u7eed\u3002")))}s.isMDXComponent=!0},32595:function(e,t,n){n.d(t,{ZP:function(){return s}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u5728\u8fd9\u91cc\u5207\u6362\u5230\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u7684\u5e94\u7528\u8be6\u60c5\u9875\u3002\u6dfb\u52a0\u4e00\u4e2a\u503c\u4e3a ",(0,a.kt)("code",null,n.redirectUri)," \u7684 Redirect URI \u5e76\u70b9\u6309\u300c\u4fdd\u5b58\u53d8\u66f4\u300d\u3002"),(0,a.kt)("img",{alt:"\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u4e2d\u7684 Redirect URI",src:n.figureSrc,width:"600px"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," \u662f\u4e00\u4e2a OAuth 2.0 \u7684\u6982\u5ff5\uff0c\u7528\u4e8e\u8868\u660e\u5728 authentication \u540e\u91cd\u5b9a\u5411\u81f3\u7684\u4f4d\u7f6e\u3002"))}s.isMDXComponent=!0},95557:function(e,t,n){n.d(t,{ZP:function(){return s}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/recipes/customize-sie/"},"\u81ea\u5b9a\u4e49\u767b\u5f55\u4f53\u9a8c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-passcode-sign-in"},"\u542f\u7528\u77ed\u4fe1\u6216\u90ae\u4ef6\u9a8c\u8bc1\u7801\u767b\u5f55")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-social-sign-in"},"\u542f\u7528\u793e\u4ea4\u767b\u5f55")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/recipes/protect-your-api/"},"\u4fdd\u62a4\u4f60\u7684 API"))))}s.isMDXComponent=!0},95448:function(e,t,n){n.d(t,{ZP:function(){return p}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=n.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",i=["components"],s={toc:[]};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",null,'\u4f60\u53ef\u4ee5\u5728\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u7684\u5e94\u7528\u8be6\u60c5\u9875\u627e\u5230\u5e76\u590d\u5236 "App Secret"\uff1a'),(0,a.kt)("img",{alt:"App Secret",src:l,width:"586px"})))}p.isMDXComponent=!0},54484:function(e,t,n){n.d(t,{ZP:function(){return s}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u767b\u5f55\u6d41\u7a0b\u53ef\u4ee5\u88ab\u7b80\u5316\u4e3a\uff1a"),(0,a.kt)("img",{alt:"Web \u767b\u5f55\u6d41\u7a0b",src:"data:image/png;base64,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",width:"700pt"}))}s.isMDXComponent=!0},23184:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return v},default:function(){return C},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return x}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=n(28482),i=n(38142),s=n.p+"assets/images/next-redirect-uri-c2f31d62bd10bcf31b4eb138ed194ffe.png",p=n(87460),u=n(32595),c=n(95557),d=n(95448),A=["components"],m={toc:[]};function g(e){var t=e.components,n=(0,o.Z)(e,A);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u5982\u4e0b\u4ee3\u7801\u793a\u4f8b\u4e2d, \u6211\u4eec\u5747\u5148\u5047\u8bbe\u4f60\u7684 Next \u5e94\u7528\u8fd0\u884c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," \u4e0a\u3002")))}g.isMDXComponent=!0;var f=n(54484),k=["components"],h={sidebar_label:"Next.js"},v="Next.js: \u96c6\u6210 `@logto/next`",b={unversionedId:"docs/recipes/integrate-logto/next-js",id:"docs/recipes/integrate-logto/next-js",title:"Next.js: \u96c6\u6210 `@logto/next`",description:"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/next-js.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/next-js",permalink:"/zh-cn/docs/recipes/integrate-logto/next-js",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/next-js.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Next.js"},sidebar:"docsSidebar",previous:{title:"iOS",permalink:"/zh-cn/docs/recipes/integrate-logto/ios"},next:{title:"React",permalink:"/zh-cn/docs/recipes/integrate-logto/react"}},y={},x=[{value:"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56",id:"\u5c06-logto-sdk-\u6dfb\u52a0\u81f3\u4f9d\u8d56",level:2},{value:"\u521d\u59cb\u5316 LogtoClient",id:"\u521d\u59cb\u5316-logtoclient",level:2},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:2},{value:"\u914d\u7f6e Redirect URI",id:"\u914d\u7f6e-redirect-uri",level:3},{value:"\u51c6\u5907 API \u8def\u7531",id:"\u51c6\u5907-api-\u8def\u7531",level:3},{value:"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae",id:"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae",level:3},{value:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f",id:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f",level:2},{value:"\u901a\u8fc7\u524d\u7aef\u53d1\u9001 API \u8bf7\u6c42\u83b7\u53d6",id:"\u901a\u8fc7\u524d\u7aef\u53d1\u9001-api-\u8bf7\u6c42\u83b7\u53d6",level:3},{value:"\u901a\u8fc7\u540e\u7aef <code>getServerSideProps</code> \u65b9\u6cd5\u83b7\u53d6",id:"\u901a\u8fc7\u540e\u7aef-getserversideprops-\u65b9\u6cd5\u83b7\u53d6",level:3},{value:"\u4fdd\u62a4 API \u548c\u9875\u9762\u8d44\u6e90",id:"\u4fdd\u62a4-api-\u548c\u9875\u9762\u8d44\u6e90",level:2},{value:"\u4fdd\u62a4 API \u8def\u7531",id:"\u4fdd\u62a4-api-\u8def\u7531",level:3},{value:"\u4fdd\u62a4\u9875\u9762",id:"\u4fdd\u62a4\u9875\u9762",level:3},{value:"\u9000\u51fa\u767b\u5f55",id:"\u9000\u51fa\u767b\u5f55",level:2},{value:"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae",id:"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae",level:3},{value:"\u5ef6\u5c55\u9605\u8bfb",id:"\u5ef6\u5c55\u9605\u8bfb",level:2}],N={toc:x};function C(e){var t=e.components,n=(0,o.Z)(e,k);return(0,a.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nextjs-\u96c6\u6210-logtonext"},"Next.js: \u96c6\u6210 ",(0,a.kt)("inlineCode",{parentName:"h1"},"@logto/next")),(0,a.kt)(p.ZP,{type:"\u4f20\u7edf web",mdxType:"AppNote"}),(0,a.kt)("h2",{id:"\u5c06-logto-sdk-\u6dfb\u52a0\u81f3\u4f9d\u8d56"},"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/next\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/next\n"))),(0,a.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/next\n")))),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316-logtoclient"},"\u521d\u59cb\u5316 LogtoClient"),(0,a.kt)(g,{mdxType:"AssumingUrl"}),(0,a.kt)(d.ZP,{mdxType:"GetAppSecret"}),(0,a.kt)("p",null,"\u5f15\u5165\u5e76\u5b9e\u4f8b\u5316 LogtoClient\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// libraries/logto.js\nimport LogtoClient from '@logto/next';\n\nexport const logtoClient = new LogtoClient({\n  appId: '<your-application-id>',\n  appSecret: '<your-application-secret>',\n  endpoint: '<your-logto-endpoint>', // \u5982\uff1ahttp://localhost:3001\n  baseUrl: '<your-nextjs-app-base-url>', // \u5982\uff1ahttp://localhost:3000\n  cookieSecret: 'complex_password_at_least_32_characters_long', // 32 \u4f4d\u5b57\u7b26\u7684\u5bc6\u94a5\n  cookieSecure: process.env.NODE_ENV === 'production',\n});\n")),(0,a.kt)("h2",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,a.kt)(f.ZP,{mdxType:"SignInFlowSummary"}),(0,a.kt)("h3",{id:"\u914d\u7f6e-redirect-uri"},"\u914d\u7f6e Redirect URI"),(0,a.kt)(u.ZP,{figureSrc:s,redirectUri:"http://localhost:3000/api/logto/sign-in-callback",mdxType:"ConfigureRedirectUri"}),(0,a.kt)("h3",{id:"\u51c6\u5907-api-\u8def\u7531"},"\u51c6\u5907 API \u8def\u7531"),(0,a.kt)("p",null,"\u5b9e\u73b0\u4e0e Logto \u540e\u53f0\u4ea4\u4e92\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-routes/introduction"},"API \u8def\u7531"),"\u3002"),(0,a.kt)("p",null,"\u8fd4\u56de\u4f60\u7684 IDE \u6216\u7f16\u8f91\u5668\uff0c\u9996\u5148\u8ba9\u6211\u4eec\u4f7f\u7528\u5982\u4e0b\u4ee3\u7801\u6765\u5b9e\u73b0\u4e00\u7ec4 API \u8def\u7531\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// pages/api/logto/[action].ts\nimport { logtoClient } from '../../../libraries/logto';\n\nexport default logtoClient.handleAuthRoutes();\n")),(0,a.kt)("p",null,"\u8fd9\u5c06\u4e3a\u4f60\u81ea\u52a8\u521b\u5efa\u597d 4 \u4e2a\u8def\u7531\uff0c\u5206\u522b\u662f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-in"),"\uff1a\u767b\u5f55"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-in-callback"),"\uff1a\u5904\u7406\u767b\u5f55\u91cd\u5b9a\u5411"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-out"),"\uff1a\u767b\u51fa"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/logto/user"),"\uff1a\u68c0\u67e5\u7528\u6237\u662f\u5426\u5df2\u901a\u8fc7 Logto \u83b7\u5f97\u6388\u6743\u3002\u5982\u679c\u662f\uff0c\u5219\u8fd4\u56de\u7528\u6237\u4fe1\u606f\u3002")),(0,a.kt)("h3",{id:"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae"},"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae"),(0,a.kt)("p",null,"\u9a6c\u4e0a\u5c31\u8981\u5927\u529f\u544a\u6210\uff01\u5728\u8fd9\u6700\u540e\u4e00\u6b65\uff0c\u6211\u4eec\u5c06\u7528\u5982\u4e0b\u4ee3\u7801\u5b9e\u73b0\u4e00\u4e2a\u767b\u5f55\u6309\u94ae\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRouter } from 'next/router';\n\nconst { push } = useRouter();\n\n<button onClick={() => push('/api/logto/sign-in')}>\u767b\u5f55</button>;\n")),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u70b9\u51fb\u767b\u5f55\u6309\u94ae\u4e86\uff0c\u70b9\u51fb\u4e4b\u540e\u9875\u9762\u4f1a\u8df3\u8f6c\u5230 Logto \u7684\u767b\u5f55\u754c\u9762\u3002"),(0,a.kt)("h2",{id:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f"},"\u83b7\u53d6\u7528\u6237\u4fe1\u606f"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u6765\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"\u901a\u8fc7\u524d\u7aef\u53d1\u9001-api-\u8bf7\u6c42\u83b7\u53d6"},"\u901a\u8fc7\u524d\u7aef\u53d1\u9001 API \u8bf7\u6c42\u83b7\u53d6"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/logto/user")," \u63a5\u53e3\u6765\u83b7\u53d6\u7528\u6237\u4fe1\u606f\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LogtoUser } from '@logto/next';\nimport useSWR from 'swr';\n\nconst Home = () => {\n  const { data } = useSWR<LogtoUser>('/api/logto/user');\n\n  return <div>\u7528\u6237 ID\uff1a{data?.claims?.sub}</div>;\n};\n\nexport default Profile;\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://swr.vercel.app/docs/getting-started"},"\u8fd9\u7bc7\u6559\u7a0b")," \u6765\u4e86\u89e3\u6709\u5173 ",(0,a.kt)("inlineCode",{parentName:"p"},"useSWR")," \u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"\u901a\u8fc7\u540e\u7aef-getserversideprops-\u65b9\u6cd5\u83b7\u53d6"},"\u901a\u8fc7\u540e\u7aef ",(0,a.kt)("inlineCode",{parentName:"h3"},"getServerSideProps")," \u65b9\u6cd5\u83b7\u53d6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LogtoUser } from '@logto/next';\nimport { logtoClient } from '../libraries/logto';\n\ntype Props = {\n  user: LogtoUser;\n};\n\nconst Profile = ({ user }: Props) => {\n  return <div>\u7528\u6237 ID\uff1a{user.claims?.sub}</div>;\n};\n\nexport default Profile;\n\nexport const getServerSideProps = logtoClient.withLogtoSsr(async function ({ request }) {\n  const { user } = request;\n\n  return {\n    props: { user },\n  };\n});\n")),(0,a.kt)("p",null,"\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"},"Next.js \u5b98\u65b9\u6587\u6863")," \u6765\u4e86\u89e3\u6709\u5173 ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps")," \u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u4fdd\u62a4-api-\u548c\u9875\u9762\u8d44\u6e90"},"\u4fdd\u62a4 API \u548c\u9875\u9762\u8d44\u6e90"),(0,a.kt)("h3",{id:"\u4fdd\u62a4-api-\u8def\u7531"},"\u4fdd\u62a4 API \u8def\u7531"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"logtoClient.withLogtoApiRoute")," \u6765\u5305\u88f9 API \u903b\u8f91\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// pages/api/protected-resource.ts\nimport { logtoClient } from '../../libraries/logto';\n\nexport default logtoClient.withLogtoApiRoute((request, response) => {\n  if (!request.user.isAuthenticated) {\n    response.status(401).json({ message: '\u672a\u6388\u6743' });\n\n    return;\n  }\n\n  response.json({\n    data: '\u8fd9\u662f\u53d7\u4fdd\u62a4\u7684 API \u8d44\u6e90',\n  });\n});\n")),(0,a.kt)("h3",{id:"\u4fdd\u62a4\u9875\u9762"},"\u4fdd\u62a4\u9875\u9762"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u60f3\u533f\u540d\u7528\u6237\u8bbf\u95ee\u4f60\u7684\u67d0\u4e2a\u9875\u9762\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"logtoClient.withLogtoSsr")," \u6765\u83b7\u53d6\u767b\u5f55\u8ba4\u8bc1\u72b6\u6001\uff0c\u5982\u672a\u767b\u5f55\u5219\u81ea\u52a8\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const getServerSideProps = logtoClient.withLogtoSsr(async function ({ req, res }) {\n  const { user } = req;\n\n  if (!user.isAuthenticated) {\n    res.setHeader('location', '/api/logto/sign-in');\n    res.statusCode = 302;\n    res.end();\n  }\n\n  return {\n    props: { user },\n  };\n});\n")),(0,a.kt)("h2",{id:"\u9000\u51fa\u767b\u5f55"},"\u9000\u51fa\u767b\u5f55"),(0,a.kt)("p",null,"\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/logto/sign-out")," \u5c06\u6e05\u7406\u5185\u5b58\u4e0e cookies \u4e2d\u7684\u6240\u6709 Logto \u6570\u636e\uff08\u5982\u679c\u6709\uff09\u3002"),(0,a.kt)("p",null,"\u5728\u9000\u51fa\u767b\u5f55\u540e\uff0c\u8ba9\u4f60\u7684\u7528\u6237\u91cd\u65b0\u56de\u5230\u4f60\u7684\u7f51\u7ad9\u662f\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002\u8ba9\u6211\u4eec\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," \u6dfb\u52a0\u81f3\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u91cc\u7684 Post Sign-out URIs \u4e2d\uff08\u4f4d\u4e8e Redirect URIs \u4e0b\u65b9\uff09\u3002"),(0,a.kt)("h3",{id:"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae"},"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<button onClick={() => push('/api/logto/sign-out')}>\u9000\u51fa\u767b\u5f55</button>\n")),(0,a.kt)("h2",{id:"\u5ef6\u5c55\u9605\u8bfb"},"\u5ef6\u5c55\u9605\u8bfb"),(0,a.kt)(c.ZP,{mdxType:"FurtherReadings"}))}C.isMDXComponent=!0}}]);