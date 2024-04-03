"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[67707],{51509:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=o(11527),c=o(17279);const s={sidebar_position:2},i="Custom social connector with standard protocols",r={id:"docs/recipes/configure-connectors/social-connector/custom-social-connector-with-standard-protocols",title:"Custom social connector with standard protocols",description:"Logto supports standard connectors such as OAuth2.0, OIDC, and SAML, which are widely used for authentication and authorization in many applications and services. With these standard protocols, you can easily configure your specific social connectors to connect external identity providers.",source:"@site/docs/docs/recipes/configure-connectors/social-connector/custom-social-connector-with-standard-protocols.md",sourceDirName:"docs/recipes/configure-connectors/social-connector",slug:"/docs/recipes/configure-connectors/social-connector/custom-social-connector-with-standard-protocols",permalink:"/docs/recipes/configure-connectors/social-connector/custom-social-connector-with-standard-protocols",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/configure-connectors/social-connector/custom-social-connector-with-standard-protocols.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Configure popular social connector",permalink:"/docs/recipes/configure-connectors/social-connector/configure-popular-social-connector"},next:{title:"Enable social sign-in",permalink:"/docs/recipes/configure-connectors/social-connector/enable-social-sign-in"}},a={},d=[{value:"Configure steps",id:"configure-steps",level:2},{value:"Related readings",id:"related-readings",level:2}];function l(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"custom-social-connector-with-standard-protocols",children:"Custom social connector with standard protocols"}),"\n",(0,t.jsx)(n.p,{children:"Logto supports standard connectors such as OAuth2.0, OIDC, and SAML, which are widely used for authentication and authorization in many applications and services. With these standard protocols, you can easily configure your specific social connectors to connect external identity providers."}),"\n",(0,t.jsx)(n.p,{children:"Follow the README to compose the connector config with little effort."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-oauth2",children:"OAuth 2.0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-oidc",children:"OIDC"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-saml",children:"SAML"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["We highly recommend using Logto's preinstalled social connectors, including Google, Apple, Facebook, GitHub, Discord, Wechat, Alipay, Kakao, Naver, and Microsoft Azure AD, as they are simple to configure and highly stable.\nOur standard connectors can meet most custom requirements, but if you need a specific connector beyond these, feel free to contact us. For those using the Logto Open-Source Version, you can even ",(0,t.jsx)(n.a,{href:"/docs/recipes/configure-connectors/create-your-connector/",children:"Write your connector"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"configure-steps",children:"Configure steps"}),"\n",(0,t.jsxs)(n.p,{children:["To add a new standard connector in Logto Console, navigate to \u201c",(0,t.jsx)(n.strong,{children:"Connector > Social connectors"}),"\u201d and click the \u201c",(0,t.jsx)(n.strong,{children:"Add social connector"}),"\u201d button. Then Select the desired social connector type in the Modal that appears and click the \u201c",(0,t.jsx)(n.strong,{children:"Next"}),"\u201d button."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Each standard connector can create multiple social connectors!"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Add OIDC connector",src:o(33175).Z+"",width:"2816",height:"1556"})}),"\n",(0,t.jsx)(n.p,{children:"When customizing a standard connector, you will need to configure more general settings, such as the social sign-in button name and logo, and the IdP name."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Name for social sign-in button"}),': The name of the connector button will be displayed as "Continue with {{name}}." Be mindful of the naming length in case it gets too long.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Logo for social sign-in button"}),": Logto also supports adding different logo images for light and dark modes, with the dark mode logo taking effect after enabling Dark Mode in the Sign-in Experience tab of the Console."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Identity provider (IdP) name"}),": IdP name is a unique identifier for each social connector and cannot be changed after it's built.","\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'When configuring a new Standard connector with a new Identity Provider, you just need to enter a unique "IdP name" that hasn\'t been used before. This will allow you to distinguish the new social connector from others that have been created.'}),"\n",(0,t.jsx)(n.li,{children:"If you need to replace an existing social connector with the same identity provider, you must delete the old one and create a new one with the same \u201cIdP name\u201d."}),"\n",(0,t.jsxs)(n.li,{children:["You can learn more about usage cases of IdP name by visiting the \u201c",(0,t.jsx)(n.a,{href:"/docs/references/connectors/",children:"Recipe: IdP name"}),"\u201d."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Standard Connector also can choose how to \u201c",(0,t.jsx)(n.strong,{children:"sync user profiles"}),"\u201d (such as avatars and usernames). The default setting is to only sync at registration. Still, you can also choose to always sync at each sign-in, but be careful that this may overwrite customized information in your application at user each social sign-in."]}),"\n",(0,t.jsxs)(n.li,{children:["Finally, note that different standard connectors require different configuration parameters. You can refer to the left ",(0,t.jsx)(n.strong,{children:"README"})," for guidance on filling out the forms."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configure OIDC connector",src:o(5657).Z+"",width:"2506",height:"2562"})}),"\n",(0,t.jsx)(n.h2,{id:"related-readings",children:"Related readings"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["See ",(0,t.jsx)(n.a,{href:"/docs/recipes/customize-sie/configure-sign-in-methods",children:"Configure sign-in method"})," by adding connectors to bring your social connector into use."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},33175:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/configure-add-oidc-connector-aff7489675acb56350086f3f0941ee99.png"},5657:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/configure-oidc-connector-1b13b7f3290ccd1346945196595126e6.png"},17279:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>i});var t=o(50959);const c={},s=t.createContext(c);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);