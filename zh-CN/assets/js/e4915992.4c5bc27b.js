"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6981],{85214:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"logto-oss/translate-cli","title":"\u4f7f\u7528 CLI \u8fdb\u884c\u56fd\u9645\u5316\u7ffb\u8bd1","description":"Logto translate CLI \u662f\u4e00\u4e2a\u4e3a\u5f00\u53d1\u8005\u8bbe\u8ba1\u7684\u5f3a\u5927\u5de5\u5177\uff0c\u65e8\u5728\u5e2e\u52a9\u4ed6\u4eec\u4e3a Logto \u7684\u56fd\u9645\u5316\u5de5\u4f5c\u505a\u51fa\u8d21\u732e\u3002\u4f7f\u7528\u8fd9\u4e2a CLI\uff0c\u4f60\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u7528\u82f1\u8bed\u7f16\u5199\u5185\u5bb9\uff0c\u7136\u540e\u8f7b\u677e\u5730\u5c06\u5176\u7ffb\u8bd1\u6210\u6240\u6709\u652f\u6301\u7684\u8bed\u8a00\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/logto-oss/translate-cli.mdx","sourceDirName":"logto-oss","slug":"/logto-oss/translate-cli","permalink":"/zh-CN/logto-oss/translate-cli","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/logto-oss/translate-cli.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_label":"Translate CLI","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"\u8f6e\u6362\u7b7e\u540d\u5bc6\u94a5 (OSS)","permalink":"/zh-CN/logto-oss/using-cli/rotate-signing-keys"},"next":{"title":"\u4e2d\u592e\u7f13\u5b58","permalink":"/zh-CN/logto-oss/central-cache"}}');var c=s(86070),o=s(15658);const t={sidebar_label:"Translate CLI",sidebar_position:4},r="\u4f7f\u7528 CLI \u8fdb\u884c\u56fd\u9645\u5316\u7ffb\u8bd1",i={},a=[{value:"\u4ece <code>@logto/cli</code> \u8fc1\u79fb",id:"\u4ece-logtocli-\u8fc1\u79fb",level:2},{value:"\u540c\u6b65\u952e",id:"\u540c\u6b65\u952e",level:2},{value:"\u4f7f\u7528 ChatGPT \u7ffb\u8bd1\u952e",id:"\u4f7f\u7528-chatgpt-\u7ffb\u8bd1\u952e",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u4f7f\u7528-cli-\u8fdb\u884c\u56fd\u9645\u5316\u7ffb\u8bd1",children:"\u4f7f\u7528 CLI \u8fdb\u884c\u56fd\u9645\u5316\u7ffb\u8bd1"})}),"\n",(0,c.jsx)(n.p,{children:"Logto translate CLI \u662f\u4e00\u4e2a\u4e3a\u5f00\u53d1\u8005\u8bbe\u8ba1\u7684\u5f3a\u5927\u5de5\u5177\uff0c\u65e8\u5728\u5e2e\u52a9\u4ed6\u4eec\u4e3a Logto \u7684\u56fd\u9645\u5316\u5de5\u4f5c\u505a\u51fa\u8d21\u732e\u3002\u4f7f\u7528\u8fd9\u4e2a CLI\uff0c\u4f60\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u7528\u82f1\u8bed\u7f16\u5199\u5185\u5bb9\uff0c\u7136\u540e\u8f7b\u677e\u5730\u5c06\u5176\u7ffb\u8bd1\u6210\u6240\u6709\u652f\u6301\u7684\u8bed\u8a00\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5bf9\u4e8e\u5e0c\u671b\u8fdb\u884c\u81ea\u5b9a\u4e49\u7ffb\u8bd1\u4f46\u4e0d\u60f3\u53c2\u4e0e\u9879\u76ee\u7684\u666e\u901a Logto \u7528\u6237\uff0c\u8bf7\u53c2\u8003\u6211\u4eec\u7684 ",(0,c.jsx)(n.a,{href:"/customization/localized-languages/",children:"\u672c\u5730\u5316\u6307\u5357"}),"\u3002"]}),"\n",(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsxs)(n.p,{children:["\u4ece v1.20.0 \u5f00\u59cb\uff0c\u7ffb\u8bd1\u547d\u4ee4\u5df2\u4ece ",(0,c.jsx)(n.code,{children:"@logto/cli"})," \u4e2d\u79fb\u9664\uff0c\u5e76\u4f5c\u4e3a logto monorepo \u4e2d\u7684\u72ec\u7acb ",(0,c.jsx)(n.code,{children:"@logto/translation"})," \u5305\u8fdb\u884c\u7ef4\u62a4\u3002\u56e0\u6b64\uff0c\u6267\u884c\u65b9\u5f0f\u7565\u6709\u4e0d\u540c\u3002"]})}),"\n",(0,c.jsxs)(n.h2,{id:"\u4ece-logtocli-\u8fc1\u79fb",children:["\u4ece ",(0,c.jsx)(n.code,{children:"@logto/cli"})," \u8fc1\u79fb"]}),"\n",(0,c.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u65e7\u7684\u548c\u65b0\u7684 CLI \u6267\u884c\u65b9\u6cd5\u7684\u6bd4\u8f83\uff1a"}),"\n",(0,c.jsx)(n.p,{children:"\u65e7\u65b9\u6cd5\uff08v1.20.0 \u4e4b\u524d\uff09\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"pnpm cli translate <command> [options]\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u65b0\u65b9\u6cd5\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"pnpm translate <command> [options]\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u540c\u6b65\u952e",children:"\u540c\u6b65\u952e"}),"\n",(0,c.jsxs)(n.p,{children:["\u5047\u8bbe\u6211\u4eec\u5bf9 ",(0,c.jsx)(n.code,{children:"phrases"})," \u5305\u7684 ",(0,c.jsx)(n.code,{children:"en"})," \u6587\u4ef6\u5939\u4e2d\u7684\u7ffb\u8bd1\u952e\u8fdb\u884c\u4e86\u4e00\u4e9b\u66f4\u6539\u3002\u6211\u4eec\u5e0c\u671b\u5c06\u8fd9\u4e9b\u66f4\u6539\u540c\u6b65\u5230 ",(0,c.jsx)(n.code,{children:"pt-BR"})," \u6587\u4ef6\u5939\u3002\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u540c\u6b65\u7ffb\u8bd1\u952e\u548c\u6587\u4ef6\u7ed3\u6784\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"pnpm translate sync-keys --target pt-BR\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u5c06\u4ece\u6e90\u8bed\u8a00\u6587\u4ef6\u5939\uff08\u9ed8\u8ba4\u4e3a ",(0,c.jsx)(n.code,{children:"en"}),"\uff09\u8bfb\u53d6\u6240\u6709\u7ffb\u8bd1\u952e\uff0c\u5e76\u5c06\u5176\u540c\u6b65\u5230\u76ee\u6807\u8bed\u8a00\u6587\u4ef6\u5939\uff08\u5728\u6b64\u793a\u4f8b\u4e2d\u4e3a ",(0,c.jsx)(n.code,{children:"pt-BR"}),"\uff09\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u5982\u679c\u76ee\u6807\u8bed\u8a00\u6587\u4ef6\u5939\u4e0d\u5b58\u5728\uff0c\u5c06\u81ea\u52a8\u521b\u5efa\uff1b"}),"\n",(0,c.jsx)(n.li,{children:"\u5982\u679c\u76ee\u6807\u8bed\u8a00\u6587\u4ef6\u5939\u5df2\u5b58\u5728\uff0c\u5c06\u66f4\u65b0\u65b0\u952e\u5e76\u79fb\u9664\u8fc7\u65f6\u7684\u952e\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u5bf9\u4e8e\u6bcf\u4e2a\u7ffb\u8bd1\u952e\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u5982\u679c\u76ee\u6807\u4e2d\u7f3a\u5c11\u67d0\u4e2a\u952e\uff0c\u5c06\u6dfb\u52a0\u8be5\u952e\uff0c\u5e76\u9644\u4e0a\u6ce8\u91ca\u4ee5\u6307\u793a\u8be5\u77ed\u8bed\u672a\u7ffb\u8bd1\uff08\u6807\u8bb0\u4e3a ",(0,c.jsx)(n.code,{children:"/** UNTRANSLATED */"}),"\uff09\uff1b"]}),"\n",(0,c.jsx)(n.li,{children:"\u5982\u679c\u57fa\u7ebf\u4e2d\u7f3a\u5c11\u67d0\u4e2a\u952e\uff0c\u5c06\u4ece\u76ee\u6807\u4e2d\u79fb\u9664\u8be5\u952e\uff1b"}),"\n",(0,c.jsx)(n.li,{children:"\u5982\u679c\u57fa\u7ebf\u548c\u76ee\u6807\u4e2d\u90fd\u5b58\u5728\u67d0\u4e2a\u952e\uff0c\u5c06\u4f7f\u7528\u76ee\u6807\u7684\u503c\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8981\u540c\u6b65 ",(0,c.jsx)(n.code,{children:"phrases"})," \u5305\u4e2d\u6240\u6709\u8bed\u8a00\u7684\u952e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"pnpm translate sync-keys --target all\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u66f4\u65b0\u6e90\u8bed\u8a00\u6587\u4ef6\u5939\u4e2d\u7684\u7ffb\u8bd1\u952e\uff0c\u5176\u4ed6\u8bed\u8a00\u7684\u7ffb\u8bd1\u952e\u5c06\u81ea\u52a8\u66f4\u65b0\u3002"}),"\n",(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u9ed8\u8ba4\u5bf9 ",(0,c.jsx)(n.code,{children:"phrases"})," \u5305\u6267\u884c\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,c.jsx)(n.code,{children:"--package"})," \u9009\u9879\u6307\u5b9a\u5305\u540d\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"--package phrases-experience"})," \u6765\u540c\u6b65 ",(0,c.jsx)(n.code,{children:"phrases-experience"})," \u5305\u7684\u952e\u3002"]})}),"\n",(0,c.jsx)(n.p,{children:"\u540c\u6b65\u952e\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ChatGPT API \u7ffb\u8bd1\u8fd9\u4e9b\u952e\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u4f7f\u7528-chatgpt-\u7ffb\u8bd1\u952e",children:"\u4f7f\u7528 ChatGPT \u7ffb\u8bd1\u952e"}),"\n",(0,c.jsx)(n.p,{children:"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u4f7f\u7528 ChatGPT \u7ffb\u8bd1\u952e\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"pnpm translate sync\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u5c06\u7ffb\u8bd1 ",(0,c.jsx)(n.code,{children:"phrases"})," \u548c ",(0,c.jsx)(n.code,{children:"phrases-experience"})," \u5305\u4e2d\u6240\u6709\u672a\u7ffb\u8bd1\u7684\u952e\uff08\u6807\u8bb0\u4e3a ",(0,c.jsx)(n.code,{children:"/** UNTRANSLATED */"}),"\uff09\u3002\u6ce8\u610f\uff0c\u8fd0\u884c\u6b64\u547d\u4ee4\u9700\u8981\u73af\u5883\u53d8\u91cf ",(0,c.jsx)(n.code,{children:"OPENAI_API_KEY"}),"\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},15658:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var l=s(30758);const c={},o=l.createContext(c);function t(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);