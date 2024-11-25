"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[53412],{76123:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>r});var o=t(86070),i=t(15658);const r=[];function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In this guide, we assume you have basic knowledge of Logto Connectors. If you don't, check out the ",(0,o.jsx)(n.a,{href:"/docs/recipes/configure-connectors/",children:"Configure connectors"})," guide to get started."]}),"\n"]})})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},7376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"integrations/social/wecom/README","title":"README","description":"The custom connector for WeCom (maybe called WXwork) social sign-in.","source":"@site/docs/integrations/social/wecom/README.mdx","sourceDirName":"integrations/social/wecom","slug":"/integrations/wecom","permalink":"/integrations/wecom","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/integrations/social/wecom/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/wecom","sidebar_label":"WeCom","sidebar_custom_props":{"description":"WeCom is a cross-platform instant messaging app for team. It is the enterprise version of WeChat."}},"sidebar":"integrationsSidebar","previous":{"title":"WeChat (Web)","permalink":"/integrations/wechat-web"},"next":{"title":"Aliyun Direct Mail","permalink":"/integrations/aliyun-dm"}}');var i=t(86070),r=t(15658),s=t(76123);const c={slug:"/integrations/wecom",sidebar_label:"WeCom",sidebar_custom_props:{description:"WeCom is a cross-platform instant messaging app for team. It is the enterprise version of WeChat."}},a="WeCom OAuth2 connector",l={},d=[...s.RM,{value:"Get started",id:"get-started",level:2},{value:"Website info",id:"website-info",level:3},{value:"Corp ID",id:"corp-id",level:3},{value:"Configure the connector",id:"configure-the-connector",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"wecom-oauth2-connector",children:"WeCom OAuth2 connector"})}),"\n",(0,i.jsx)(n.p,{children:"The custom connector for WeCom (maybe called WXwork) social sign-in."}),"\n",(0,i.jsx)(n.h2,{id:"get-started",children:"Get started"}),"\n",(0,i.jsxs)(n.p,{children:["Sign in to ",(0,i.jsx)(n.a,{href:"https://work.weixin.qq.com/",children:"WeCom WebUI"})," with an admin account or click ",(0,i.jsx)(n.strong,{children:"Manage the enterprise(\u7ba1\u7406\u4f01\u4e1a)"})," from the WeCom app."]}),"\n",(0,i.jsx)(n.p,{children:'In the "App Management" tab, scroll the page down and click "Create an app".'}),"\n",(0,i.jsx)(n.p,{children:"Fill in the appropriate information according to your app. Then create."}),"\n",(0,i.jsx)(n.p,{children:"Now we have the Agent ID (NOT APPID) and Secret."}),"\n",(0,i.jsx)(n.h3,{id:"website-info",children:"Website info"}),"\n",(0,i.jsx)(n.p,{children:"Set the things you need on this page. It would be like:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Allowed users: ",(0,i.jsx)(n.em,{children:"who can see this app"})]}),"\n",(0,i.jsxs)(n.li,{children:["App Homepage: ",(0,i.jsxs)(n.em,{children:["Your app homepage. E.g., ",(0,i.jsx)(n.code,{children:"logto.io/demo-app"})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important"}),'\nThere are three items on this page regarding the "Developer API(\u5f00\u53d1\u8005\u63a5\u53e3)".']}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Web Authorization and JS-SDK;"}),"\n",(0,i.jsx)(n.li,{children:"Log in to via authorization by WeCom;"}),"\n",(0,i.jsx)(n.li,{children:"Enterprise Trusted IP;"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Fill them according to the guide of WeCom."}),"\n",(0,i.jsx)(n.h3,{id:"corp-id",children:"Corp ID"}),"\n",(0,i.jsx)(n.p,{children:"If you are familiar with WeChat development, you may notice that the use of Corp ID is the same as APP ID."}),"\n",(0,i.jsxs)(n.p,{children:['You can find the Corp ID at the bottom of the "My Enterprise(\u6211\u7684\u4f01\u4e1a)" tab page. It seems like ',(0,i.jsx)(n.strong,{children:"ww****"})," ."]}),"\n",(0,i.jsx)(n.h2,{id:"configure-the-connector",children:"Configure the connector"}),"\n",(0,i.jsx)(n.p,{children:"So we have the Agent ID, Secret, and Corp ID."}),"\n",(0,i.jsx)(n.p,{children:"Let's complete the form for the connector."}),"\n",(0,i.jsxs)(n.p,{children:["You can leave the ",(0,i.jsx)(n.code,{children:"Scope"})," field blank as it is optional. Alternatively, you can fill in ",(0,i.jsx)(n.code,{children:"snsapi_base"})," or ",(0,i.jsx)(n.code,{children:"snsapi_privateinfo"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Save and done"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},15658:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(30758);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);