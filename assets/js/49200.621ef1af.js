"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[49200],{68200:(e,t,n)=>{n.d(t,{A:()=>c,G:()=>d});var a=n(30758),o=n(53998),i=n(86070);const s=Symbol("EmptyContext"),r=a.createContext(s);function c(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),s=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,i.jsx)(r.Provider,{value:s,children:t})}function d(){const e=(0,a.useContext)(r);if(e===s)throw new o.dV("DocSidebarItemsExpandedStateProvider");return e}},49200:(e,t,n)=>{n.r(t),n.d(t,{default:()=>X});var a=n(30758),o=n(13526),i=n(5450),s=n(8389),r=n(1166),c=n(99427),d=n(86590),l=n(97822),u=n(9360);const h={backToTopButton:"backToTopButton_xja3",backToTopButtonShow:"backToTopButtonShow_DvQI"};var m=n(86070);function b(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:r}=(0,l.gk)();return(0,l.Mq)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(r(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.$)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,m.jsx)("button",{"aria-label":(0,d.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",s.G.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var p=n(22675),x=n(25557),j=n(26895),f=n(17860),A=n(39966);function g(e){return(0,m.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,m.jsxs)("g",{fill:"#7a7a7a",children:[(0,m.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,m.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const v="collapseSidebarButton_ZhUJ",_="collapseSidebarButtonIcon_Gk3K";function S(e){let{onClick:t}=e;return(0,m.jsx)("button",{type:"button",title:(0,d.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,d.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",v),onClick:t,children:(0,m.jsx)(g,{className:_})})}var T=n(99283),k=n(57115);const C="menu_gjNb",N="menuWithAnnouncementBar_DP0p";function I(e){let{path:t,sidebar:n,className:i}=e;const r=function(){const{isActive:e}=(0,T.M)(),[t,n]=(0,a.useState)(e);return(0,l.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,m.jsx)("nav",{"aria-label":(0,d.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",C,r&&N,i),children:(0,m.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(k.A,{items:n,activePath:t,level:1})})})}const w="sidebar_F9hq",B="sidebarWithHideableNavbar_lPat",y="sidebarHidden_speY",L="sidebarLogo_q_bl";function E(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:r}}}=(0,f.p)();return(0,m.jsxs)("div",{className:(0,o.A)(w,s&&B,i&&y),children:[s&&(0,m.jsx)(A.A,{tabIndex:-1,className:L}),(0,m.jsx)(I,{path:t,sidebar:n}),r&&(0,m.jsx)(S,{onClick:a})]})}const H=a.memo(E);var M=n(70910),G=n(99715);const P=e=>{let{sidebar:t,path:n}=e;const a=(0,G.M)();return(0,m.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(k.A,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function R(e){return(0,m.jsx)(M.GX,{component:P,props:e})}const W=a.memo(R);function F(e){const t=(0,j.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)(H,{...e}),a&&(0,m.jsx)(W,{...e})]})}const D={expandButton:"expandButton_mH4c",expandButtonIcon:"expandButtonIcon_iEz2"};function V(e){let{toggleSidebar:t}=e;return(0,m.jsx)("div",{className:D.expandButton,title:(0,d.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,d.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,m.jsx)(g,{className:D.expandButtonIcon})})}const Y={docSidebarContainer:"docSidebarContainer_RDGt",docSidebarContainerHidden:"docSidebarContainerHidden_IwF2",sidebarViewport:"sidebarViewport_yKR0"};function q(e){let{children:t}=e;const n=(0,c.t)();return(0,m.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function z(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:r}=(0,x.zy)(),[c,d]=(0,a.useState)(!1),l=(0,a.useCallback)((()=>{c&&d(!1),!c&&(0,p.O)()&&d(!0),i((e=>!e))}),[i,c]);return(0,m.jsx)("aside",{className:(0,o.A)(s.G.docs.docSidebarContainer,Y.docSidebarContainer,n&&Y.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(Y.docSidebarContainer)&&n&&d(!0)},children:(0,m.jsx)(q,{children:(0,m.jsxs)("div",{className:(0,o.A)(Y.sidebarViewport,c&&Y.sidebarViewportHidden),children:[(0,m.jsx)(F,{sidebar:t,path:r,onCollapse:l,isHidden:c}),c&&(0,m.jsx)(V,{toggleSidebar:l})]})})})}const K={docMainContainer:"docMainContainer_a_G6",docMainContainerEnhanced:"docMainContainerEnhanced_oNF2",docItemWrapperEnhanced:"docItemWrapperEnhanced_StLK"};function U(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.t)();return(0,m.jsx)("main",{className:(0,o.A)(K.docMainContainer,(t||!a)&&K.docMainContainerEnhanced),children:(0,m.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",K.docItemWrapper,t&&K.docItemWrapperEnhanced),children:n})})}const O={docRoot:"docRoot_Oag3",docsWrapper:"docsWrapper_cply"};function J(e){let{children:t}=e;const n=(0,c.t)(),[o,i]=(0,a.useState)(!1);return(0,m.jsxs)("div",{className:O.docsWrapper,children:[(0,m.jsx)(b,{}),(0,m.jsxs)("div",{className:O.docRoot,children:[n&&(0,m.jsx)(z,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,m.jsx)(U,{hiddenSidebarContainer:o,children:t})]})]})}var Q=n(83116);function X(e){const t=(0,r.B5)(e);if(!t)return(0,m.jsx)(Q.A,{});const{docElement:n,sidebarName:a,sidebarItems:d}=t;return(0,m.jsx)(i.e3,{className:(0,o.A)(s.G.page.docsDocPage),children:(0,m.jsx)(c.V,{name:a,items:d,children:(0,m.jsx)(J,{children:n})})})}},57115:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(30758),o=n(1166),i=n(68200),s=n(13139),r=n(13526),c=n(8389),d=n(24506),l=n(55170),u=n(46055);const h="menuExternalLink_mwEu";var m=n(86070);function b(e){let{item:t,onItemClick:n,activePath:a,level:i,index:s,...b}=e;const{href:p,label:x,className:j,autoAddBaseUrl:f}=t,A=(0,o.w8)(t,a),g=(0,l.A)(p);return(0,m.jsx)("li",{className:(0,r.A)(c.G.docs.docSidebarItemLink,c.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",j),children:(0,m.jsxs)(d.A,{className:(0,r.A)("menu__link",!g&&h,{"menu__link--active":A}),autoAddBaseUrl:f,"aria-current":A?"page":void 0,to:p,...g&&{onClick:n?()=>n(t):void 0},...b,children:[x,!g&&(0,m.jsx)(u.A,{})]})},x)}const p="menuHtmlItem_T2a3";function x(e){let{item:t,level:n,index:a}=e;const{value:o,defaultStyle:i,className:s}=t;return(0,m.jsx)("li",{className:(0,r.A)(c.G.docs.docSidebarItemLink,c.G.docs.docSidebarItemLinkLevel(n),i&&[p,"menu__list-item"],s),dangerouslySetInnerHTML:{__html:o}},a)}function j(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,m.jsx)(s.A,{item:t,...n});case"html":return(0,m.jsx)(x,{item:t,...n});default:return(0,m.jsx)(b,{item:t,...n})}}function f(e){let{items:t,...n}=e;const a=(0,o.Y)(t,n.activePath);return(0,m.jsx)(i.A,{children:a.map(((e,t)=>(0,m.jsx)(j,{item:e,index:t,...n},t)))})}const A=(0,a.memo)(f)},83116:(e,t,n)=>{n.d(t,{A:()=>r});n(30758);var a=n(13526),o=n(86590),i=n(82422),s=n(86070);function r(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.A,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);