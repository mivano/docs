"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6996],{50676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"customization/bring-your-ui/debug-and-test-your-custom-ui-locally","title":"\u5728\u672c\u5730\u8c03\u8bd5\u548c\u6d4b\u8bd5\u4f60\u7684\u81ea\u5b9a\u4e49 UI","description":"\u5bf9\u4e8e Logto Cloud \u7528\u6237\uff0c\u6211\u4eec\u8ba9\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u5c06\u201c\u81ea\u5b9a\u4e49 UI\u201d\u5f15\u5165 Logto\u3002Cloud \u7528\u6237\u73b0\u5728\u53ef\u4ee5\u4e0a\u4f20\u4e00\u4e2a\u5305\u542b\u81ea\u5b9a\u4e49 UI \u8d44\u6e90\u7684 zip \u6587\u4ef6\u5230 \u63a7\u5236\u53f0 > \u767b\u5f55\u4f53\u9a8c > \u54c1\u724c > \u5f15\u5165\u4f60\u7684 UI\uff08\u67e5\u770b \u5f15\u5165\u4f60\u7684 UI \u9875\u9762\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\uff09\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/customization/bring-your-ui/debug-and-test-your-custom-ui-locally.mdx","sourceDirName":"customization/bring-your-ui","slug":"/customization/bring-your-ui/debug-and-test-your-custom-ui-locally","permalink":"/zh-CN/customization/bring-your-ui/debug-and-test-your-custom-ui-locally","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/customization/bring-your-ui/debug-and-test-your-custom-ui-locally.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"\u81ea\u5b9a\u4e49\u4f60\u7684 UI","permalink":"/zh-CN/customization/bring-your-ui/"},"next":{"title":"\u4f7f\u7528 CLI \u4e0a\u4f20\u81ea\u5b9a\u4e49 UI \u8d44\u6e90","permalink":"/zh-CN/customization/bring-your-ui/upload-custom-ui-assets-using-cli"}}');var r=t(86070),a=t(15658),l=t(78551),i=t(77501);const s={sidebar_position:1},u="\u5728\u672c\u5730\u8c03\u8bd5\u548c\u6d4b\u8bd5\u4f60\u7684\u81ea\u5b9a\u4e49 UI",c={},d=[{value:"\u4e3a\u4ec0\u4e48\u6211\u9700\u8981\u8fd9\u4e2a\uff1f",id:"\u4e3a\u4ec0\u4e48\u6211\u9700\u8981\u8fd9\u4e2a",level:2},{value:"\u6307\u5bfc",id:"\u6307\u5bfc",level:2},{value:"\u6b65\u9aa4 1\uff1a\u6267\u884c\u547d\u4ee4",id:"\u6b65\u9aa4-1\u6267\u884c\u547d\u4ee4",level:3},{value:"\u6b65\u9aa4 2\uff1a\u66f4\u65b0\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u7aef\u70b9 URI",id:"\u6b65\u9aa4-2\u66f4\u65b0\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u7aef\u70b9-uri",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",mermaid:"mermaid",p:"p",pre:"pre",...(0,a.R)(),...e.components},{CloudLink:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u5728\u672c\u5730\u8c03\u8bd5\u548c\u6d4b\u8bd5\u4f60\u7684\u81ea\u5b9a\u4e49-ui",children:"\u5728\u672c\u5730\u8c03\u8bd5\u548c\u6d4b\u8bd5\u4f60\u7684\u81ea\u5b9a\u4e49 UI"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e Logto Cloud \u7528\u6237\uff0c\u6211\u4eec\u8ba9\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u5c06\u201c\u81ea\u5b9a\u4e49 UI\u201d\u5f15\u5165 Logto\u3002Cloud \u7528\u6237\u73b0\u5728\u53ef\u4ee5\u4e0a\u4f20\u4e00\u4e2a\u5305\u542b\u81ea\u5b9a\u4e49 UI \u8d44\u6e90\u7684 zip \u6587\u4ef6\u5230 ",(0,r.jsx)(t,{to:"/sign-in-experience/branding",children:"\u63a7\u5236\u53f0 > \u767b\u5f55\u4f53\u9a8c > \u54c1\u724c > \u5f15\u5165\u4f60\u7684 UI"}),"\uff08\u67e5\u770b ",(0,r.jsx)(n.a,{href:"/customization/bring-your-ui",children:"\u5f15\u5165\u4f60\u7684 UI"})," \u9875\u9762\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\uff09\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u800c\uff0c\u5728\u5f00\u53d1\u8fd9\u6837\u7684\u81ea\u5b9a\u4e49 UI \u9875\u9762\u65f6\uff0c\u7528\u6237\u5e0c\u671b\u5728\u4e0a\u4f20\u5230 Logto Cloud \u4e4b\u524d\u5728\u672c\u5730\u6d4b\u8bd5\u548c\u8c03\u8bd5\u4ee3\u7801\u3002\u8fd9\u4e2a CLI \u547d\u4ee4\u5e2e\u52a9\u4f60\u8bbe\u7f6e\u4e00\u4e2a\u672c\u5730\u96a7\u9053\uff0c\u5e76\u5c06\u4ee5\u4e0b\u4e09\u4e2a\u5b9e\u4f53\u8fde\u63a5\u5728\u4e00\u8d77\uff1a\u4f60\u7684 Logto Cloud \u8ba4\u8bc1\u7aef\u70b9\u3001\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u548c\u4f60\u7684\u81ea\u5b9a\u4e49\u767b\u5f55 UI\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u6211\u9700\u8981\u8fd9\u4e2a",children:"\u4e3a\u4ec0\u4e48\u6211\u9700\u8981\u8fd9\u4e2a\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53\u4f60\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u70b9\u51fb\u201c\u767b\u5f55\u201d\u6309\u94ae\u65f6\uff0c\u4f60\u5c06\u88ab\u5bfc\u822a\u5230\u5728 Logto \u7aef\u70b9\u914d\u7f6e\u7684\u767b\u5f55\u9875\u9762\u3002\u6210\u529f\u7684\u767b\u5f55\u6d41\u7a0b\u53ef\u4ee5\u5982\u4e0b\u56fe\u6240\u793a\uff1a"}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    box Local machine\n    participant A as \u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\n    end\n    box Logto Cloud\n    participant B as Logto Cloud \u8ba4\u8bc1\u7aef\u70b9\n    participant C as Logto \u767b\u5f55\u9875\u9762\n    end\n    A ->> B: \u7528\u6237\u53d1\u8d77\u201c\u767b\u5f55\u201d\u64cd\u4f5c\u5e76\u8bf7\u6c42\u8ba4\u8bc1\n    B --\x3e> A: \u8fd4\u56de\u8ba4\u8bc1\u54cd\u5e94\u5e76\u544a\u8bc9\u5ba2\u6237\u7aef<br/>\u91cd\u5b9a\u5411\u5230 Logto \u767b\u5f55\u9875\u9762\n    A ->> C: \u91cd\u5b9a\u5411\u5230 Logto \u767b\u5f55\u9875\u9762\n    C ->> B: \u63d0\u4ea4\u767b\u5f55\u8868\u5355\u5e76<br/>\u8bf7\u6c42\u4f53\u9a8c API \u8fdb\u884c\u8ba4\u8bc1\n    B --\x3e> C: \u54cd\u5e94\u767b\u5f55\u8bf7\u6c42\u5e76<br/>\u544a\u8bc9\u5ba2\u6237\u7aef\u91cd\u5b9a\u5411\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\n    C --\x3e> A: \u91cd\u5b9a\u5411\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\n    A --\x3e A: \u5904\u7406\u767b\u5f55\u56de\u8c03\u5e76<br/>\u7528\u6237\u73b0\u5728\u5df2\u8ba4\u8bc1"}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u73b0\u5728\u7531\u4e8e\u4f60\u6b63\u5728\u5f00\u53d1\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u767b\u5f55 UI\uff0c\u4f60\u9700\u8981\u4e00\u79cd\u65b9\u5f0f\u5bfc\u822a\u5230\u8fd0\u884c\u5728\u672c\u5730\u673a\u5668\u4e0a\u7684\u81ea\u5b9a\u4e49\u767b\u5f55 UI \u9875\u9762\u3002\u8fd9\u9700\u8981\u4e00\u4e2a\u672c\u5730\u96a7\u9053\u670d\u52a1\u6765\u62e6\u622a\u6765\u81ea\u5e94\u7528\u7a0b\u5e8f\u7684\u5916\u53d1\u8bf7\u6c42\uff0c\u5e76\u5c06\u5b83\u4eec\u91cd\u5b9a\u5411\u5230\u4f60\u7684\u81ea\u5b9a\u4e49\u767b\u5f55 UI \u9875\u9762\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u5916\uff0c\u4f60\u9700\u8981\u4e0e Logto \u7684\u4f53\u9a8c API \u4ea4\u4e92\u4ee5\u8ba4\u8bc1\u7528\u6237\u548c\u7ba1\u7406\u4f1a\u8bdd\u3002\u6b64\u670d\u52a1\u8fd8\u5c06\u5e2e\u52a9\u8f6c\u53d1\u8fd9\u4e9b\u4f53\u9a8c API \u8bf7\u6c42\u5230 Logto Cloud\uff0c\u4ee5\u907f\u514d CORS \u95ee\u9898\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0b\u56fe\u7684\u5e8f\u5217\u56fe\u5c55\u793a\u4e86\u5728\u4f60\u7684\u81ea\u5b9a\u4e49 UI \u548c\u96a7\u9053\u670d\u52a1\u5230\u4f4d\u7684\u60c5\u51b5\u4e0b\uff0c\u6210\u529f\u7684\u201c\u767b\u5f55\u201d\u6d41\u7a0b\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1a"}),"\n",(0,r.jsx)(n.mermaid,{value:"sequenceDiagram\n    box Local machine\n    participant A as \u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\n    participant B as \u4f60\u7684\u81ea\u5b9a\u4e49\u767b\u5f55 UI\n    participant C as \u96a7\u9053\n    end\n    box Logto Cloud\n    participant D as Logto Cloud \u8ba4\u8bc1\u7aef\u70b9\n    participant E as Logto \u767b\u5f55\u9875\u9762\n    end\n    A ->> C: \u7528\u6237\u53d1\u8d77\u201c\u767b\u5f55\u201d\u64cd\u4f5c\u5e76\u8bf7\u6c42\u8ba4\u8bc1\n    C ->> D: \u8f6c\u53d1\u8ba4\u8bc1\u8bf7\u6c42\u5230 Logto Cloud \u7aef\u70b9\n    D --\x3e> C: \u8fd4\u56de\u8ba4\u8bc1\u54cd\u5e94\u5e76\u544a\u8bc9\u5ba2\u6237\u7aef<br/>\u91cd\u5b9a\u5411\u5230 Logto \u767b\u5f55\u9875\u9762\n    C ->> B: \u62e6\u622a\u91cd\u5b9a\u5411\u5e76<br/>\u91cd\u5b9a\u5411\u5230\u4f60\u7684\u81ea\u5b9a\u4e49\u767b\u5f55\u9875\u9762\n    B ->> C: \u63d0\u4ea4\u767b\u5f55\u8868\u5355\u5e76<br/>\u8bf7\u6c42\u4f53\u9a8c API \u8fdb\u884c\u8ba4\u8bc1\n    C ->> D: \u8f6c\u53d1\u4f53\u9a8c API \u8bf7\u6c42\u5230 Logto Cloud\n    D --\x3e> C: \u8ba4\u8bc1\u767b\u5f55\u8bf7\u6c42\u5e76<br/>\u544a\u8bc9\u5ba2\u6237\u7aef\u91cd\u5b9a\u5411\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\n    C --\x3e> A: \u91cd\u5b9a\u5411\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\n    A --\x3e A: \u5904\u7406\u767b\u5f55\u56de\u8c03\u5e76<br/>\u7528\u6237\u73b0\u5728\u5df2\u8ba4\u8bc1"}),"\n",(0,r.jsx)(n.p,{children:"\u6709\u4e86\u96a7\u9053\u670d\u52a1\uff0c\u4f60\u73b0\u5728\u53ef\u4ee5\u5728\u672c\u5730\u5f00\u53d1\u548c\u6d4b\u8bd5\u4f60\u7684\u81ea\u5b9a\u4e49\u767b\u5f55 UI\uff0c\u800c\u65e0\u9700\u6bcf\u6b21\u66f4\u6539\u65f6\u90fd\u5c06\u8d44\u6e90\u4e0a\u4f20\u5230 Logto Cloud\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6307\u5bfc",children:"\u6307\u5bfc"}),"\n",(0,r.jsx)(n.h3,{id:"\u6b65\u9aa4-1\u6267\u884c\u547d\u4ee4",children:"\u6b65\u9aa4 1\uff1a\u6267\u884c\u547d\u4ee4"}),"\n",(0,r.jsxs)(n.p,{children:["\u5047\u8bbe\u4f60\u7684 Cloud \u79df\u6237 ID \u662f ",(0,r.jsx)(n.code,{children:"foobar"}),"\uff0c\u5e76\u4e14\u4f60\u6709\u4e00\u4e2a\u81ea\u5b9a\u4e49\u767b\u5f55\u9875\u9762\u5728\u672c\u5730\u5f00\u53d1\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\uff0c\u5730\u5740\u4e3a ",(0,r.jsx)(n.code,{children:"http://localhost:4000"}),"\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u8fd9\u6837\u6267\u884c\u547d\u4ee4\uff1a"]}),"\n",(0,r.jsxs)(i.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto-tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://foobar.logto.app/\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://foobar.logto.app/\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u5728 Logto \u4e2d\u914d\u7f6e\u4e86\u81ea\u5b9a\u4e49\u57df\u540d\uff0c\u4e5f\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a"}),"\n",(0,r.jsxs)(i.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto-tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://your.custom.domain/\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://your.custom.domain/\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u6216\u8005\uff0c\u8be5\u547d\u4ee4\u4e5f\u652f\u6301\u9759\u6001 html \u8d44\u6e90\uff0c\u65e0\u9700\u5148\u5728\u5f00\u53d1\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u3002\u53ea\u9700\u786e\u4fdd\u5728\u4f60\u6307\u5b9a\u7684\u8def\u5f84\u4e2d\u6709\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"index.html"}),"\u3002"]}),"\n",(0,r.jsxs)(i.A,{groupId:"cmd",children:[(0,r.jsx)(l.A,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto-tunnel -p 9000 --experience-path /path/to/your/static/files --endpoint https://foobar.logto.app/\n"})})}),(0,r.jsx)(l.A,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel -p 9000 --experience-path /path/to/your/static/files --endpoint https://foobar.logto.app/\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u6b65\u9aa4-2\u66f4\u65b0\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u7aef\u70b9-uri",children:"\u6b65\u9aa4 2\uff1a\u66f4\u65b0\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u7aef\u70b9 URI"}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u540e\uff0c\u8fd0\u884c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u5e76\u5c06\u5176 Logto \u7aef\u70b9\u8bbe\u7f6e\u4e3a\u96a7\u9053\u670d\u52a1\u5730\u5740 ",(0,r.jsx)(n.code,{children:"http://localhost:9000/"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5 React \u5e94\u7528\u7a0b\u5e8f\u4e3a\u4f8b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:"title=App.tsx",children:"import { LogtoProvider, LogtoConfig } from '@logto/react';\n\nconst config: LogtoConfig = {\n  // endpoint: 'https://foobar.logto.app/', // \u539f\u59cb Logto Cloud \u7aef\u70b9\n  endpoint: 'http://localhost:9000/', // \u96a7\u9053\u670d\u52a1\u5730\u5740\n  appId: '<your-application-id>',\n};\n\nconst App = () => (\n  <LogtoProvider config={config}>\n    <YourAppContent />\n  </LogtoProvider>\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528\u793e\u4ea4\u767b\u5f55\uff0c\u4f60\u8fd8\u9700\u8981\u5728\u793e\u4ea4\u63d0\u4f9b\u5546\u8bbe\u7f6e\u4e2d\u5c06\u91cd\u5b9a\u5411 URI \u66f4\u65b0\u4e3a\u96a7\u9053\u670d\u52a1\u5730\u5740\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"http://localhost:9000/callback/<connector-id>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4e00\u5207\u8bbe\u7f6e\u6b63\u786e\uff0c\u5f53\u4f60\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u70b9\u51fb\u201c\u767b\u5f55\u201d\u6309\u94ae\u65f6\uff0c\u4f60\u5e94\u8be5\u4f1a\u88ab\u5bfc\u822a\u5230\u4f60\u7684\u81ea\u5b9a\u4e49\u767b\u5f55\u9875\u9762\uff0c\u800c\u4e0d\u662f Logto \u7684\u5185\u7f6e UI\uff0c\u5e76\u4e14\u62e5\u6709\u6709\u6548\u7684\u4f1a\u8bdd\uff08cookies\uff09\uff0c\u8fd9\u5141\u8bb8\u4f60\u8fdb\u4e00\u6b65\u4e0e Logto \u4f53\u9a8c API \u4ea4\u4e92\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7f16\u7801\u6109\u5feb\uff01"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},78551:(e,n,t)=>{t.d(n,{A:()=>l});t(30758);var o=t(13526);const r={tabItem:"tabItem_PGP0"};var a=t(86070);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,l),hidden:t,children:n})}},77501:(e,n,t)=>{t.d(n,{A:()=>C});var o=t(30758),r=t(13526),a=t(65052),l=t(25557),i=t(77469),s=t(50873),u=t(62230),c=t(60196);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=p(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:a}))),[u,d]=g({queryString:t,groupId:r}),[b,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,c.Dv)(t);return[r,(0,o.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),x=(()=>{const e=u??b;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&s(x)}),[x]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=t(13887);const x={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var f=t(86070);function j(e){let{className:n,block:t,selectedValue:o,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),r=i[t].value;r!==o&&(u(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function I(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function C(e){const n=(0,m.A)();return(0,f.jsx)(I,{...e,children:d(e.children)},String(n))}},15658:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var o=t(30758);const r={},a=o.createContext(r);function l(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);