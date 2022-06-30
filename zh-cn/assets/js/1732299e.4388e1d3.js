"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[7250],{9613:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(n),m=r,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(v,i(i({ref:e},p),{},{components:n})):a.createElement(v,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7508:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a=n(5443),r=n(3010),o=(n(9496),n(9613)),i=n(2610),s=n(7766),c=["components"],l={sidebar_position:5},p="\u542f\u7528\u793e\u4ea4\u767b\u5f55",d={unversionedId:"docs/tutorials/get-started/enable-social-sign-in",id:"docs/tutorials/get-started/enable-social-sign-in",title:"\u542f\u7528\u793e\u4ea4\u767b\u5f55",description:"\u5728\u300c\u5f00\u59cb\u4e0a\u624b\u300d\u6807\u7b7e\u9875\uff0c\u70b9\u51fb\u53f3\u4fa7\u7684\u300c\u6dfb\u52a0\u300d\u6309\u94ae\uff0c\u6d4f\u89c8\u5668\u5c06\u91cd\u5b9a\u5411\u81f3\u300c\u8fde\u63a5\u5668\u300d->\u300c\u793e\u4ea4\u8fde\u63a5\u5668\u300d\u6807\u7b7e\u9875\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/tutorials/get-started/enable-social-sign-in.mdx",sourceDirName:"docs/tutorials/get-started",slug:"/docs/tutorials/get-started/enable-social-sign-in",permalink:"/zh-cn/docs/tutorials/get-started/enable-social-sign-in",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/tutorials/get-started/enable-social-sign-in.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"\u542f\u7528\u77ed\u4fe1\u6216\u90ae\u4ef6\u9a8c\u8bc1\u7801\u767b\u5f55",permalink:"/zh-cn/docs/tutorials/get-started/enable-passcode-sign-in"},next:{title:"\u5ef6\u5c55\u9605\u8bfb",permalink:"/zh-cn/docs/tutorials/get-started/further-readings"}},u={},m=[{value:"\u6dfb\u52a0\u4e00\u4e2a\u793e\u4ea4\u8fde\u63a5\u5668",id:"\u6dfb\u52a0\u4e00\u4e2a\u793e\u4ea4\u8fde\u63a5\u5668",level:2},{value:"\u914d\u7f6e\u793e\u4ea4\u8fde\u63a5\u5668",id:"\u914d\u7f6e\u793e\u4ea4\u8fde\u63a5\u5668",level:2},{value:"\u5728\u767b\u5f55\u4f53\u9a8c\u4e2d\u542f\u7528\u8fde\u63a5\u5668",id:"\u5728\u767b\u5f55\u4f53\u9a8c\u4e2d\u542f\u7528\u8fde\u63a5\u5668",level:2},{value:"\u63a5\u4e0b\u6765",id:"\u63a5\u4e0b\u6765",level:2}],v={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,c);return(0,o.kt)("wrapper",(0,a.Z)({},v,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u542f\u7528\u793e\u4ea4\u767b\u5f55"},"\u542f\u7528\u793e\u4ea4\u767b\u5f55"),(0,o.kt)("p",null,"\u5728\u300c\u5f00\u59cb\u4e0a\u624b\u300d\u6807\u7b7e\u9875\uff0c\u70b9\u51fb\u53f3\u4fa7\u7684\u300c\u6dfb\u52a0\u300d\u6309\u94ae\uff0c\u6d4f\u89c8\u5668\u5c06\u91cd\u5b9a\u5411\u81f3\u300c\u8fde\u63a5\u5668\u300d->\u300c\u793e\u4ea4\u8fde\u63a5\u5668\u300d\u6807\u7b7e\u9875\u3002"),(0,o.kt)(i.ZP,{mdxType:"ConnectorsIntro"}),(0,o.kt)("h2",{id:"\u6dfb\u52a0\u4e00\u4e2a\u793e\u4ea4\u8fde\u63a5\u5668"},"\u6dfb\u52a0\u4e00\u4e2a\u793e\u4ea4\u8fde\u63a5\u5668"),(0,o.kt)("p",null,"\u70b9\u6309\u300c\u6dfb\u52a0\u793e\u4ea4\u8fde\u63a5\u5668\u300d\u6309\u94ae\u4ee5\u5bfb\u627e\u4f60\u60f3\u8981\u7684\u8fde\u63a5\u5668\u3002\u542f\u7528\u7684\u5bf9\u8bdd\u6846\u5c06\u5c55\u793a\u5185\u7f6e\u7684\u3001\u5f00\u7bb1\u5373\u7528\u7684\u8fde\u63a5\u5668\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u652f\u4ed8\u5b9d"),(0,o.kt)("li",{parentName:"ul"},"Apple"),(0,o.kt)("li",{parentName:"ul"},"Facebook"),(0,o.kt)("li",{parentName:"ul"},"GitHub"),(0,o.kt)("li",{parentName:"ul"},"Google"),(0,o.kt)("li",{parentName:"ul"},"\u5fae\u4fe1")),(0,o.kt)(s.ZP,{mdxType:"ConnectorsWip"}),(0,o.kt)("h2",{id:"\u914d\u7f6e\u793e\u4ea4\u8fde\u63a5\u5668"},"\u914d\u7f6e\u793e\u4ea4\u8fde\u63a5\u5668"),(0,o.kt)("p",null,"\u4e00\u4e2a\u5168\u5c4f\u5e55\u7684\u9875\u9762\u5c06\u6307\u5f15\u4f60\u6b63\u786e\u5730\u8fdb\u884c\u8bbe\u7f6e\u3002\u8ddf\u7740\u5982\u4e0b\u6b65\u9aa4\u4ee5\u5b8c\u6210\u8bbe\u7f6e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u901a\u8bfb\u5de6\u4fa7\u7684 README \u6587\u6863\uff0c\u5e76\u8ddf\u7740\u91cc\u9762\u7684\u6307\u793a\u884c\u4e8b\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u53f3\u4fa7\u7684\u7f16\u8f91\u5668\u4e2d\u586b\u5145\u8fde\u63a5\u5668\u9700\u8981\u7684 JSON\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u6309\u300c\u5b8c\u6210\u300d\u4ee5\u7ed3\u675f\u3002")),(0,o.kt)("h2",{id:"\u5728\u767b\u5f55\u4f53\u9a8c\u4e2d\u542f\u7528\u8fde\u63a5\u5668"},"\u5728\u767b\u5f55\u4f53\u9a8c\u4e2d\u542f\u7528\u8fde\u63a5\u5668"),(0,o.kt)("p",null,"\u70b9\u6309\u9875\u9762\u5de6\u4fa7\u8fb9\u680f\u4e2d\u7684\u94fe\u63a5\u4ee5\u5207\u6362\u5230\u300c\u767b\u5f55\u4f53\u9a8c\u300d\u6807\u7b7e\u9875\uff0c\u5e76\u70b9\u6309\u300c\u767b\u5f55\u65b9\u5f0f\u300d\u6807\u7b7e\u9875\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4e4b\u524d\u6ca1\u6709\u6dfb\u52a0\u8fc7\u5176\u4ed6\u7684\u767b\u5f55\u65b9\u5f0f\uff0c\u300c\u542f\u52a8\u4e8c\u7ea7\u767b\u5f55\u300d\u5e94\u8be5\u662f\u5173\u7740\u7684\u3002\u6253\u5f00\u5b83\uff0c\u5e76\u52fe\u9009\u300c\u793e\u4ea4\u767b\u5f55\u300d\u3002"),(0,o.kt)("p",null,"\u5728\u663e\u793a\u7684\u8868\u683c\u5de6\u5217\u300c\u793e\u4ea4\u8fde\u63a5\u5668\u300d\u4e2d\u5bfb\u627e\u4f60\u521a\u6dfb\u52a0\u7684\u8fde\u63a5\u5668\uff0c\u5e76\u70b9\u6309\u53f3\u4fa7\u7684\u52a0\u53f7\u56fe\u6807\u3002"),(0,o.kt)("p",null,"\u73b0\u5728\u4f60\u5e94\u8be5\u80fd\u770b\u5230\uff0c\u5728\u9884\u89c8\u4e2d\u5927\u5927\u7684\u300c\u767b\u5f55\u300d\u6309\u94ae\u4e0b\u9762\uff0c\u663e\u793a\u7740\u4ee3\u8868\u7740\u8be5\u8fde\u63a5\u5668\u8eab\u4efd\u63d0\u4f9b\u5546\u7684 logo\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u542f\u7528\u4e86\u591a\u4e2a\u793e\u4ea4\u8fde\u63a5\u5668\uff08\u663e\u793a\u5728\u53f3\u5217\uff09\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u62d6\u62fd\u5b83\u4eec\u8fdb\u884c\u6392\u5e8f\u3002"),(0,o.kt)("p",null,"\u70b9\u6309\u300c\u4fdd\u5b58\u53d8\u66f4\u300d\u6765\u4e0a\u7ebf\u4f60\u7684\u53d8\u66f4\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u518d\u6b21\u6253\u5f00\u6f14\u793a\u5e94\u7528\u5e76\u5c1d\u8bd5\u65b0\u7684\u767b\u5f55\u65b9\u5f0f\u3002"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/recipes/customize-sie/configure-sign-in-methods"},"\u914d\u7f6e\u767b\u5f55\u65b9\u5f0f")," \u6765\u5168\u9762\u5730\u4e86\u89e3\u5982\u4f55\u7ec4\u5408\u5404\u79cd\u767b\u5f55\u65b9\u5f0f\u3002"))),(0,o.kt)("h2",{id:"\u63a5\u4e0b\u6765"},"\u63a5\u4e0b\u6765"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-passcode-sign-in"},"\u542f\u7528\u77ed\u4fe1\u6216\u90ae\u4ef6\u9a8c\u8bc1\u7801\u767b\u5f55")," \uff08\u5982\u679c\u4f60\u8fd8\u6ca1\u770b\u8fc7\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/further-readings"},"\u5ef6\u5c55\u9605\u8bfb"))))}k.isMDXComponent=!0},2610:function(t,e,n){n.d(e,{ZP:function(){return c}});var a=n(5443),r=n(3010),o=(n(9496),n(9613)),i=["components"],s={toc:[]};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5173\u4e8e\u8fde\u63a5\u5668")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8fde\u63a5\u5668\u662f Logto \u4e0e\u7b2c\u4e09\u65b9\u670d\u52a1\u7684\u6865\u6881\u3002\u6211\u4eec\u6709\u4e09\u79cd\u8fde\u63a5\u5668\u7c7b\u578b\uff1a\u77ed\u4fe1\u3001\u90ae\u4ef6\u548c\u793e\u4ea4\u3002",(0,o.kt)("br",null),"\nLogto \u81ea\u5e26\u4e86\u4e00\u4e9b\u8fde\u63a5\u5668\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u81ea\u5df1\u7684\u3002\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"#"},"\u8fde\u63a5\u5668")," \u4ee5\u4e86\u89e3\u66f4\u591a\u3002"))))}c.isMDXComponent=!0},7766:function(t,e,n){n.d(e,{ZP:function(){return c}});var a=n(5443),r=n(3010),o=(n(9496),n(9613)),i=["components"],s={toc:[]};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6211\u4eec\u4ecd\u5728\u5f00\u53d1\u66f4\u591a\u7684\u8fde\u63a5\u5668\uff01\u5982\u679c\u4f60\u6ca1\u770b\u5230\u60f3\u8981\u7684\u8fde\u63a5\u5668\uff0c\u8ddf\u7740 ",(0,o.kt)("a",{parentName:"p",href:"#"},"\u521b\u5efa\u4f60\u7684\u8fde\u63a5\u5668")," \u4ee5\u6269\u5c55\uff0c\u6216\u8005\u5728 GitHub \u4e0a\u63d0\u4ea4\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"#"},"\u529f\u80fd\u8bf7\u6c42"),"\u3002"))))}c.isMDXComponent=!0}}]);