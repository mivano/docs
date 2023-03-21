"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[24665],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82418:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l}});var r=n(665),o=n(40151),i=(n(59496),n(49613)),a=["components"],u={},c=void 0,s={unversionedId:"sdk/JavaScript/vue/functions/useLogto",id:"sdk/JavaScript/vue/functions/useLogto",title:"useLogto",description:"useLogto(): Logto",source:"@site/docs/sdk/JavaScript/vue/functions/useLogto.md",sourceDirName:"sdk/JavaScript/vue/functions",slug:"/sdk/JavaScript/vue/functions/useLogto",permalink:"/sdk/JavaScript/vue/functions/useLogto",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/JavaScript/vue/functions/useLogto.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"useHandleSignInCallback",permalink:"/sdk/JavaScript/vue/functions/useHandleSignInCallback"},next:{title:"IdTokenClaims",permalink:"/sdk/JavaScript/vue/types/IdTokenClaims"}},p={},l=[{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],d={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"useLogto"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Logto")),(0,i.kt)("p",null,"A Vue composable method that provides the Logto reactive refs and auth methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { useLogto } from '@logto/vue';\n\nexport default {\n  setup() {\n    const { isAuthenticated, signIn } = useLogto();\n\n    return {\n      isAuthenticated,\n      onClickSignIn: () => {\n        signIn('<your-redirect-uri>');\n      },\n    };\n  },\n};\n")),(0,i.kt)("p",null,"Use this composable in the setup script of your Vue component to make sure the injection works"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Logto")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/logto-io/js/blob/5254dee/packages/vue/src/index.ts#L90"},"packages/vue/src/index.ts:90")))}f.isMDXComponent=!0}}]);