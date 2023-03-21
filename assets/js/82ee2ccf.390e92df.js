"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[29036],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,m=h["".concat(s,".").concat(p)]||h[p]||c[p]||i;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50116:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={slug:"do-you-need-to-build-auth",authors:"gao",tags:["auth","dev","authentication","authorization"]},s="Do you need to build your own auth for apps?",u={permalink:"/blog/do-you-need-to-build-auth",source:"@site/blog/2023-02-16-do-you-need-to-build-auth/index.md",title:"Do you need to build your own auth for apps?",description:"Although article is inspired from personal dev experience and I tried my best to keep things objective, it's still non-negligible that I'm one of the creators of Logto (an auth product).",date:"2023-02-16T00:00:00.000Z",formattedDate:"February 16, 2023",tags:[{label:"auth",permalink:"/blog/tags/auth"},{label:"dev",permalink:"/blog/tags/dev"},{label:"authentication",permalink:"/blog/tags/authentication"},{label:"authorization",permalink:"/blog/tags/authorization"}],readingTime:6.18,hasTruncateMarker:!0,authors:[{name:"Gao",title:"Founder of Silverhand",url:"https://github.com/gao-sun",imageURL:"https://github.com/gao-sun.png",key:"gao"}],frontMatter:{slug:"do-you-need-to-build-auth",authors:"gao",tags:["auth","dev","authentication","authorization"]},prevItem:{title:"Logto 2023 February Update (Extended)",permalink:"/blog/releases/2023-feb-extended"},nextItem:{title:"CIAM 102: Authorization & Role-based Access Control",permalink:"/blog/ciam-102-authz-and-rbac"}},d={authorsImageUrls:[void 0]},c=[{value:"Intro",id:"intro",level:2},{value:"Example: An online bookstore",id:"example-an-online-bookstore",level:2},{value:"Choose authentication methods",id:"choose-authentication-methods",level:3},{value:"Design and implement sign-in experience",id:"design-and-implement-sign-in-experience",level:3},{value:"Security and token exchange",id:"security-and-token-exchange",level:3},{value:"Authorization model",id:"authorization-model",level:3},{value:"Make the decision",id:"make-the-decision",level:2}],h={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Prologue",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Although article is inspired from personal dev experience and I tried my best to keep things objective, it's still non-negligible that I'm one of the creators of Logto (an auth product)."),(0,i.kt)("p",{parentName:"admonition"},"I would like to point out this first for a better reading experience.")),(0,i.kt)("p",null,'I\u2019ve seen a lot of developers asking questions like \u201cShould I build my own auth for my app?\u201d. While the answer cannot be a simple "Yes" or "No", I\u2019d like to write an article to breakdown the implementation and demonstrate the pros and cons to help you decide.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"TL;DR")," If you're still learning, auth will be a good challenge. If you want full control, it's worth building your own auth system. Otherwise, it's necessary to find an existing solution that fits your needs.")),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"As a developer, I have built many applications during my career. Regardless of the programming language, there is a common foundation I always need to construct: user auth."),(0,i.kt)("p",null,"It was a negligible part since everything was straightforward going back to 20 years ago:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implement a registration and sign-in system with username and password."),(0,i.kt)("li",{parentName:"ul"},"Create a mechanism to maintain a user's session."),(0,i.kt)("li",{parentName:"ul"},"About security? MD5 is the answer.")),(0,i.kt)("p",null,'That\u2019s it. Then I could focus on \u201cthe real business\u201d. Didn\'t hear about MD5? You missed out on the "good times" of software development. Nowadays, developers face more challenges when building sign-in/up.'),(0,i.kt)("p",null,"It sounds alarmist, but let me go through with an example."),(0,i.kt)("h2",{id:"example-an-online-bookstore"},"Example: An online bookstore"),(0,i.kt)("p",null,"Let\u2019s say you are trying to build an online bookstore with an API service and a web frontend app."),(0,i.kt)("p",null,"First, the scope of \u201cauth\u201d should be defined. Auth can be explained as authentication and authorization, and they have totally different definitions and use cases:"),(0,i.kt)("admonition",{title:"\ud83e\udd14 About Auth",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Authentication (AuthN) answers the question \u201cWhich identity do you own?\u201d"),(0,i.kt)("li",{parentName:"ul"},"Authorization (AuthZ) answers the question \u201cWhat can you do?\u201d"))),(0,i.kt)("p",null,"I wrote an article ",(0,i.kt)("a",{parentName:"p",href:"/blog/ciam-101-intro-authn-sso"},"CIAM 101: Authentication, Identity, SSO")," to discuss these concepts in detail."),(0,i.kt)("h3",{id:"choose-authentication-methods"},"Choose authentication methods"),(0,i.kt)("p",null,"Let\u2019s start with \u201cauthentication\u201d, which is user sign-in in our example. Besides the username-and-password method, here are some trending methods people are adopting for a better user conversion and security:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Passwordless, i.e. dynamic verification code (via email or sms)"),(0,i.kt)("li",{parentName:"ul"},"Social sign-in (Google, Facebook, etc.)")),(0,i.kt)("p",null,"The choice of method depends on the business decision, while we can take a look on the tech effort:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For passwordless, you need to find a vendor to send verification codes via email or sms; then integrate with your API service (new APIs may needed)."),(0,i.kt)("li",{parentName:"ul"},"For social sign-in, you must adhere to the integration guidelines of the social identity provider(s) you wish to use. Additionally, you must create a mapping between your bookstore's user IDs and the identity provider's.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example, when a user signs in with a Gmail account ",(0,i.kt)("inlineCode",{parentName:"li"},"foo@gmail.com"),", you can link this email address to the user ",(0,i.kt)("inlineCode",{parentName:"li"},"foo")," in the bookstore. This process helps you to build a unified identity system and allows the user to modify or unlink their social identity in the future.")))),(0,i.kt)("h3",{id:"design-and-implement-sign-in-experience"},"Design and implement sign-in experience"),(0,i.kt)("p",null,"After you decide authentication methods, a graceful and smooth sign-in experience for your end-users is the next target. The conversion here is fundamental but crucial to the business since it's a natural way to leave the persisted customer data."),(0,i.kt)("p",null,"When I was working for Airbnb, there was a whole team dedicated to optimize the sign-in experience for multiple platforms. They conducted numerous A/B tests to determine which combination had the highest conversion rate."),(0,i.kt)("p",null,"It\u2019s not practical to do so when a business is getting started. But we still need to try our best to make every piece right. Which platforms would you like to run the bookstore? You may start with mobile, web, or both. The exact design will depend on the authentication methods you choose:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Username and password: The easiest one, just several input boxes and buttons."),(0,i.kt)("li",{parentName:"ul"},"Passwordless: Enter phone / email, then send and verify a dynamic code."),(0,i.kt)("li",{parentName:"ul"},"Social sign-in: Read the docs from the chosen social identity provider, follow the visual guideline, handle the redirect logic, and finally link the social identity with the bookstore identity.")),(0,i.kt)("p",null,"More things to consider to make it better:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do you need to combine the sign-in and registration process for a specific method?"),(0,i.kt)("li",{parentName:"ul"},"Do you need a \u201cforgot password\u201d flow to allow customers to reset their passwords independently?")),(0,i.kt)("p",null,"If you opt for native development, the workload will almost double for one additional platform."),(0,i.kt)("h3",{id:"security-and-token-exchange"},"Security and token exchange"),(0,i.kt)("p",null,"Security can be a hidden iceberg. It\u2019ll be great if you are familiar with OpenID Connect or OAuth 2.0, since they are widely used and battle-tested. OpenID Connect is relatively new but is designed for \u201cuser authentication\u201d, which is a great fit for an online bookstore."),(0,i.kt)("p",null,"Without delving into the details of the standards, there are still some things to consider:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Which encryption method should be used for passwords?"),(0,i.kt)("li",{parentName:"ul"},"What is the process for standard authentication and authorization?"),(0,i.kt)("li",{parentName:"ul"},"How does token exchange work (Access Token, Refresh Token, ID Token, etc.)?"),(0,i.kt)("li",{parentName:"ul"},"How can signing keys be used in tokens and how can the signature be validated to protect resources?"),(0,i.kt)("li",{parentName:"ul"},"How can client and server attacks be prevented?")),(0,i.kt)("p",null,"Finally, you can land a good sign-in experience and deliver it to your customers."),(0,i.kt)("h3",{id:"authorization-model"},"Authorization model"),(0,i.kt)("p",null,"As a bookstore, you need to separate resources for customers and sellers. For example, customers can browse all books, while sellers can manage their on-sale books. It's OK to start with simple if-else checks; however, as the business grows, you may need to leverage a more flexible model such as Role-based Access Control (RBAC) or Attribute-based Access Control (ABAC)."),(0,i.kt)("p",null,"I also wrote an article ",(0,i.kt)("a",{parentName:"p",href:"/blog/ciam-102-authz-and-rbac"},"CIAM 102: Authorization & Role-based Access Control")," to demonstrate basic authorization concepts and the RBAC model."),(0,i.kt)("h2",{id:"make-the-decision"},"Make the decision"),(0,i.kt)("p",null,"You can see auth is not an \u201call or nothing\u201d problem, since it involves multiple technical components and you or your team may have different tech expertise in these areas. It's important to break it down into smaller parts to gain a better understanding of the status quo."),(0,i.kt)("p",null,"To make the decision, I'll ask myself the following questions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How urgent is the project?"),(0,i.kt)("li",{parentName:"ul"},"How much effort do I expect to put into auth versus the business?"),(0,i.kt)("li",{parentName:"ul"},"What\u2019s the priority of user experience, security, and maintainability?"),(0,i.kt)("li",{parentName:"ul"},"Which part(s) do I need full control of? How familiar should I become with them?"),(0,i.kt)("li",{parentName:"ul"},"If I go with some frameworks / solutions, are they good enough for customization or extension?"),(0,i.kt)("li",{parentName:"ul"},"If the business grows, will I need to introduce a new authentication model?"),(0,i.kt)("li",{parentName:"ul"},"If I find a suitable vendor, is it safe enough to use? Do I need a withdrawal plan if anything happens to the vendor?")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"On the other hand, if you're still learning or honing your programming skills, auth can be a great stepping stone on the path to becoming a full-stack developer. It covers almost all components needed for an app.")),(0,i.kt)("p",null,"With the questions in mind, I discovered two facts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Crafting a reliable authentication system is highly complex."),(0,i.kt)("li",{parentName:"ul"},"Existing vendors cannot meet all the necessary criteria.")),(0,i.kt)("p",null,"So I decided to start a dedicated project (Logto) for auth, and embrace the open-source community from day one."),(0,i.kt)("p",null,"Hope this article helps."))}p.isMDXComponent=!0}}]);