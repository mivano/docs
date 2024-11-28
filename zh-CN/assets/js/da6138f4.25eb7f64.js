"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[24782],{70992:(e,n,s)=>{s.d(n,{Ay:()=>l,RM:()=>i});var c=s(86070),t=s(15658);const i=[];function r(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.p,{children:["\u5728\u672c\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5bf9 Logto \u8fde\u63a5\u5668 (Connectors) \u6709\u57fa\u672c\u7684\u4e86\u89e3\u3002\u5982\u679c\u6ca1\u6709\uff0c\u8bf7\u67e5\u770b ",(0,c.jsx)(n.a,{href:"/connectors",children:"\u914d\u7f6e\u8fde\u63a5\u5668"})," \u6307\u5357\u4ee5\u5f00\u59cb\u4e86\u89e3\u3002"]})})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(r,{...e})}):r(e)}},83440:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"integrations/sms/tencent-sms/README","title":"\u4f7f\u7528\u817e\u8baf\u77ed\u4fe1\u670d\u52a1\u8bbe\u7f6e\u77ed\u4fe1\u9a8c\u8bc1","description":"\u817e\u8baf\u77ed\u4fe1\u670d\u52a1\u7684 Logto \u5b98\u65b9\u8fde\u63a5\u5668\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrations/sms/tencent-sms/README.mdx","sourceDirName":"integrations/sms/tencent-sms","slug":"/integrations/tencent-sms","permalink":"/zh-CN/integrations/tencent-sms","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/integrations/sms/tencent-sms/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/tencent-sms","sidebar_label":"\u817e\u8baf\u77ed\u4fe1","sidebar_custom_props":{"description":"\u817e\u8baf\u4e3a\u5728\u7ebf\u4e1a\u52a1\u63d0\u4f9b\u4e91\u8ba1\u7b97\u670d\u52a1\u3002","logoFilename":"tencent.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"SMS Aero","permalink":"/zh-CN/integrations/smsaero"},"next":{"title":"Twilio SMS","permalink":"/zh-CN/integrations/twilio-sms"}}');var t=s(86070),i=s(15658),r=s(70992);const l={slug:"/integrations/tencent-sms",sidebar_label:"\u817e\u8baf\u77ed\u4fe1",sidebar_custom_props:{description:"\u817e\u8baf\u4e3a\u5728\u7ebf\u4e1a\u52a1\u63d0\u4f9b\u4e91\u8ba1\u7b97\u670d\u52a1\u3002",logoFilename:"tencent.svg"}},d="\u4f7f\u7528\u817e\u8baf\u77ed\u4fe1\u670d\u52a1\u8bbe\u7f6e\u77ed\u4fe1\u9a8c\u8bc1",o={},h=[...r.RM,{value:"\u5728\u817e\u8baf\u4e91\u77ed\u4fe1\u670d\u52a1\u63a7\u5236\u53f0\u4e2d\u914d\u7f6e\u4e00\u4e2a\u77ed\u4fe1\u670d\u52a1",id:"\u5728\u817e\u8baf\u4e91\u77ed\u4fe1\u670d\u52a1\u63a7\u5236\u53f0\u4e2d\u914d\u7f6e\u4e00\u4e2a\u77ed\u4fe1\u670d\u52a1",level:2},{value:"\u521b\u5efa\u817e\u8baf\u4e91\u8d26\u53f7",id:"\u521b\u5efa\u817e\u8baf\u4e91\u8d26\u53f7",level:3},{value:"\u542f\u7528\u5e76\u914d\u7f6e\u817e\u8baf\u4e91\u77ed\u4fe1\u670d\u52a1",id:"\u542f\u7528\u5e76\u914d\u7f6e\u817e\u8baf\u4e91\u77ed\u4fe1\u670d\u52a1",level:3},{value:"\u7f16\u5199\u8fde\u63a5\u5668\u7684 JSON",id:"\u7f16\u5199\u8fde\u63a5\u5668\u7684-json",level:2},{value:"\u6d4b\u8bd5\u817e\u8baf\u4e91\u77ed\u4fe1\u8fde\u63a5\u5668",id:"\u6d4b\u8bd5\u817e\u8baf\u4e91\u77ed\u4fe1\u8fde\u63a5\u5668",level:3},{value:"\u914d\u7f6e\u7c7b\u578b",id:"\u914d\u7f6e\u7c7b\u578b",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u4f7f\u7528\u817e\u8baf\u77ed\u4fe1\u670d\u52a1\u8bbe\u7f6e\u77ed\u4fe1\u9a8c\u8bc1",children:"\u4f7f\u7528\u817e\u8baf\u77ed\u4fe1\u670d\u52a1\u8bbe\u7f6e\u77ed\u4fe1\u9a8c\u8bc1"})}),"\n",(0,t.jsx)(n.p,{children:"\u817e\u8baf\u77ed\u4fe1\u670d\u52a1\u7684 Logto \u5b98\u65b9\u8fde\u63a5\u5668\u3002"}),"\n",(0,t.jsx)(r.Ay,{}),"\n",(0,t.jsxs)(n.p,{children:["\u817e\u8baf\u4e91\u77ed\u4fe1\u670d\u52a1 Logto \u5b98\u65b9\u8fde\u63a5\u5668 ",(0,t.jsx)(n.a,{href:"#%E8%85%BE%E8%AE%AF%E4%BA%91%E7%9F%AD%E4%BF%A1%E8%BF%9E%E6%8E%A5%E5%99%A8",children:"\u4e2d\u6587\u6587\u6863"})]}),"\n",(0,t.jsx)(n.h1,{id:"\u817e\u8baf\u4e91\u77ed\u4fe1\u8fde\u63a5\u5668",children:"\u817e\u8baf\u4e91\u77ed\u4fe1\u8fde\u63a5\u5668"}),"\n",(0,t.jsx)(n.p,{children:"\u817e\u8baf\u4e91\u662f\u4e9a\u6d32\u5730\u533a\u4e00\u4e2a\u91cd\u8981\u7684\u4e91\u670d\u52a1\u5382\u5546\uff0c\u63d0\u4f9b\u4e86\u5305\u62ec\u77ed\u4fe1\u670d\u52a1\u5728\u5185\u7684\u8bf8\u591a\u4e91\u670d\u52a1\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u8fde\u63a5\u5668\u662f Logto \u5b98\u65b9\u63d0\u4f9b\u7684\u817e\u8baf\u4e91\u77ed\u4fe1\u8fde\u63a5\u5668\uff0c\u5e2e\u52a9\u7ec8\u7aef\u7528\u6237\u901a\u8fc7\u77ed\u4fe1\u9a8c\u8bc1\u7801\u8fdb\u884c\u767b\u5f55\u6ce8\u518c\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5728\u817e\u8baf\u4e91\u77ed\u4fe1\u670d\u52a1\u63a7\u5236\u53f0\u4e2d\u914d\u7f6e\u4e00\u4e2a\u77ed\u4fe1\u670d\u52a1",children:"\u5728\u817e\u8baf\u4e91\u77ed\u4fe1\u670d\u52a1\u63a7\u5236\u53f0\u4e2d\u914d\u7f6e\u4e00\u4e2a\u77ed\u4fe1\u670d\u52a1"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,t.jsx)(n.strong,{children:"\u63d0\u793a"})]}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u8df3\u8fc7\u5df2\u7ecf\u5b8c\u6210\u7684\u90e8\u5206\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u521b\u5efa\u817e\u8baf\u4e91\u8d26\u53f7",children:"\u521b\u5efa\u817e\u8baf\u4e91\u8d26\u53f7"}),"\n",(0,t.jsxs)(n.p,{children:["\u524d\u5f80 ",(0,t.jsx)(n.a,{href:"https://cloud.tencent.com/",children:"\u817e\u8baf\u4e91"})," \u5e76\u5b8c\u6210\u8d26\u53f7\u6ce8\u518c\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u542f\u7528\u5e76\u914d\u7f6e\u817e\u8baf\u4e91\u77ed\u4fe1\u670d\u52a1",children:"\u542f\u7528\u5e76\u914d\u7f6e\u817e\u8baf\u4e91\u77ed\u4fe1\u670d\u52a1"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u7528\u521a\u521a\u5728 ",(0,t.jsx)(n.a,{href:"https://cloud.tencent.com/",children:"\u817e\u8baf\u4e91"}),"\n\u6ce8\u518c\u7684\u8d26\u53f7\u767b\u5f55\u5e76\u524d\u5f80 ",(0,t.jsx)(n.a,{href:"https://cloud.tencent.com/product/sms",children:"\u77ed\u4fe1\u670d\u52a1\u63a7\u5236\u53f0"}),"\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u70b9\u6309\u77ed\u4fe1\u670d\u52a1\u9875\u9762\u5de6\u4e0a\u89d2\u7684\u300c\u514d\u8d39\u8bd5\u7528\u300d\u6309\u94ae\u5e76\u5f00\u59cb\u914d\u7f6e\u7684\u6d41\u7a0b\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u9605\u8bfb\u5e76\u540c\u610f\u300c\u77ed\u4fe1\u670d\u52a1\u5f00\u901a\u6761\u6b3e\u300d\u548c\u300c\u5f00\u901a\u670d\u52a1\u300d\u4ee5\u7ee7\u7eed\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u4f60\u73b0\u5728\u5904\u4e8e\u300c",(0,t.jsx)(n.a,{href:"https://console.cloud.tencent.com/smsv2",children:"\u77ed\u4fe1\u670d\u52a1\u63a7\u5236\u53f0\u6982\u89c8"}),"\u300d\uff0c\u6839\u636e\u4f60\u7684\u7528\u6237\u573a\u666f\uff0c\u70b9\u51fb\u4fa7\u8fb9\u680f\u4e2d\u7684\u300c\u56fd\u5185\u6d88\u606f\u300d\u6216\u8005\u300c\u56fd\u9645 / \u6e2f\u6fb3\u53f0\u6d88\u606f\u300d\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u8ddf\u968f\u6307\u5f15\u6dfb\u52a0\u7b7e\u540d\u548c\u6a21\u677f\uff0c\u5e76\u63d0\u4f9b\u76f8\u5e94\u7684\u6750\u6599\u548c\u4fe1\u606f\u4ee5\u4fbf\u5ba1\u6838\uff1a","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u6ce8\u610f\uff1a\u6dfb\u52a0 ",(0,t.jsx)(n.strong,{children:"\u7b7e\u540d"})," \u65f6\u8981\u5728\u300c\u9002\u7528\u573a\u666f\u300d\u680f\u9009\u62e9\u300c\u9a8c\u8bc1\u7801\u300d\uff0c\u6dfb\u52a0 ",(0,t.jsx)(n.strong,{children:"\u6a21\u677f"}),"\n\u65f6\u300c\u6a21\u677f\u7c7b\u578b\u300d\u4e5f\u8981\u9009\u62e9\u300c\u9a8c\u8bc1\u7801\u300d\uff0c\u56e0\u4e3a\u6211\u4eec\u4f7f\u7528\u8fd9\u4e9b\u7b7e\u540d\u548c\u6a21\u677f\u7684\u76ee\u7684\u5c31\u662f\u53d1\u9001\u9a8c\u8bc1\u7801\u3002\u76ee\u524d\u6682\u4e0d\u652f\u6301\u9664\u53d1\u9001\u9a8c\u8bc1\u7801\u4e4b\u5916\u7684\u5176\u5b83\u7c7b\u578b\u6587\u5b57\u77ed\u4fe1\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u8bf7\u540c\u65f6\u6ce8\u610f\u8981\u5728\u6a21\u677f\u7684\u5185\u5bb9\u4e2d\u52a0\u4e0a ",(0,t.jsx)(n.code,{children:"{1}"})," \u7684\u5360\u4f4d\u7b26\uff0c\u5176\u5728\u5b9e\u9645\u53d1\u51fa\u7684\u77ed\u4fe1\u4e2d\u4f1a\u88ab\u968f\u673a\u751f\u6210\u7684\u9a8c\u8bc1\u7801\u6240\u66ff\u4ee3\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u76ee\u524d\u4e0d\u652f\u6301 ",(0,t.jsx)(n.strong,{children:"\u591a\u4e2a"})," \u5360\u4f4d\u7b26\uff0c\u8bf7\u9009\u62e9\u6216\u521b\u5efa\u4ec5\u6709\u4e00\u4e2a\u5360\u4f4d\u7b26\u7684\u6a21\u677f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u63d0\u4ea4\u4e86\u77ed\u4fe1\u7b7e\u540d\u548c\u6a21\u677f\u7684\u7533\u8bf7\u4e4b\u540e\uff0c\u9700\u8981\u7b49\u5f85\u5b83\u4eec\u751f\u6548\u3002\u8fd9\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u56de\u5230 ",(0,t.jsx)(n.a,{href:"https://console.cloud.tencent.com/smsv2",children:"\u77ed\u4fe1\u670d\u52a1\u63a7\u5236\u53f0\u6982\u89c8"}),"\n\u53d1\u9001\u6d4b\u8bd5\u77ed\u4fe1\u3002\u5982\u679c\u4f60\u7684\u7b7e\u540d\u548c\u6a21\u677f\u90fd\u5df2\u7ecf\u901a\u8fc7\u5ba1\u6838\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5b83\u4eec\u6d4b\u8bd5\uff1b\u5982\u679c\u5b83\u4eec\u8fd8\u6ca1\u6709\u901a\u8fc7\u5ba1\u6838\uff0c\u817e\u8baf\u4e91\u4e5f\u63d0\u4f9b\u4e86\u6d4b\u8bd5\u6a21\u677f\u4f9b\u4f7f\u7528\u3002- \u5728\u53d1\u9001\u6d4b\u8bd5\u77ed\u4fe1\u4e4b\u524d\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u5bf9\u8d26\u6237\u8fdb\u884c\u5c0f\u989d\u7684\u5145\u503c\u3002- \u9700\u8981\u5728\u6d4b\u8bd5\u524d\u63d0\u524d\u7ed1\u5b9a\u6d4b\u8bd5\u6240\u4f7f\u7528\u7684\u624b\u673a\u53f7\u7801\u4ee5\u4fbf\u6210\u529f\u6536\u53d6\u6d4b\u8bd5\u77ed\u4fe1\u3002\u70b9\u51fb ",(0,t.jsx)(n.a,{href:"https://console.cloud.tencent.com/smsv2",children:"\u77ed\u4fe1\u670d\u52a1\u63a7\u5236\u53f0\u6982\u89c8"}),"\n\u9876\u90e8\u680f\u76ee\u4e2d\u7684\u300c\u65b0\u624b\u914d\u7f6e\u6307\u5f15\u300d\u6807\u7b7e\u9875\u4ee5\u4e86\u89e3\u66f4\u591a\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u7f16\u5199\u8fde\u63a5\u5668\u7684-json",children:"\u7f16\u5199\u8fde\u63a5\u5668\u7684 JSON"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u524d\u5f80 ",(0,t.jsx)(n.a,{href:"https://console.cloud.tencent.com/smsv2",children:"\u77ed\u4fe1\u670d\u52a1\u63a7\u5236\u53f0\u6982\u89c8"}),"\n\uff0c\u5c06\u9f20\u6807\u60ac\u505c\u5728\u9875\u9762\u53f3\u4e0a\u89d2\u7684\u5934\u50cf\u5904\uff0c\u8fdb\u5165\u300c\u8bbf\u95ee\u7ba1\u7406\u300d\u5e76\u70b9\u6309\u5de6\u4fa7\u300c\u8bbf\u95ee\u5bc6\u94a5\u300d\u4ee5\u53ca \u300c",(0,t.jsx)(n.a,{href:"https://console.cloud.tencent.com/cam/capi",children:"API \u5bc6\u94a5"}),"\n\u300d\u3002\u5b8c\u6210\u4e86\u5b89\u5168\u9a8c\u8bc1\u4e4b\u540e\uff0c\u4f60\u4f1a\u5f97\u5230\u4e00\u5bf9\u300cAccessKey ID\u300d\u548c\u300cAccessKey Secret\u300d\uff0c\u8bf7\u59a5\u5584\u4fdd\u7ba1\u5b83\u4eec\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u524d\u5f80\u4f60\u4e4b\u524d\u8bbf\u95ee\u8fc7\u7684\u300c\u56fd\u5185\u6d88\u606f\u300d\u6216\u300c\u56fd\u9645 / \u6e2f\u6fb3\u53f0\u6d88\u606f\u300d\u6807\u7b7e\u9875\uff0c\u53ef\u4ee5\u5f88\u5feb\u627e\u5230\u300c\u7b7e\u540d\u540d\u79f0\u300d\u548c\u300c\u6a21\u677f CODE\u300d\u3002","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u6d4b\u8bd5\u4e13\u7528\u7684\u7b7e\u540d\u6a21\u677f, \u5219\u524d\u5f80\u300c\u5feb\u901f\u5f00\u59cb\u300d\u6807\u7b7e\u9875\uff0c\u4f60\u5c31\u80fd\u5728\u300c\u6d4b\u8bd5\u4e13\u7528\u7b7e\u540d\u6a21\u7248\u300d\u4e0b\u65b9\u627e\u5230\u5b83\u4eec\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5b8c\u6210\u817e\u8baf\u4e91\u77ed\u4fe1\u670d\u52a1\u8fde\u63a5\u5668\u7684\u8bbe\u7f6e\uff1a","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u7528\u4f60\u5728\u6b65\u9aa4 1 \u4e2d\u62ff\u5230\u7684\u4e00\u5bf9\u300cAccessKey ID\u300d\u548c\u300cAccessKey Secret\u300d\u6765\u5206\u522b\u586b\u5165 ",(0,t.jsx)(n.code,{children:"accessKeyId"})," \u548c ",(0,t.jsx)(n.code,{children:"accessKeySecret"}),"\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u7528\u4f60\u5728\u6b65\u9aa4 2 \u4e2d\u62ff\u5230\u7684\u300c\u7b7e\u540d\u540d\u79f0\u300d\u586b\u5165 ",(0,t.jsx)(n.code,{children:"signName"})," \u680f\u3002\u6240\u6709\u7684\u6a21\u677f\u90fd\u4f1a\u5171\u7528\u8fd9\u4e2a\u7b7e\u540d\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u4f60\u53ef\u4ee5\u6dfb\u52a0\u591a\u4e2a\u77ed\u4fe1\u670d\u52a1\u6a21\u677f\u4ee5\u5e94\u5bf9\u4e0d\u540c\u7684\u7528\u6237\u573a\u666f\u3002\u8fd9\u91cc\u5c55\u793a\u586b\u5199\u5355\u4e2a\u6a21\u677f\u7684\u4f8b\u5b50\uff1a","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"templateCode"})," \u680f\u662f\u4f60\u53ef\u4ee5\u7528\u6765\u63a7\u5236\u6240\u53d1\u9001\u77ed\u4fe1\u5185\u5bb9\u7684\u5c5e\u6027\u3002\u5b83\u4eec\u7684\u503c\u4ece\u6b65\u9aa4 2 \u4e2d\u7684\u300c\u6a21\u677f CODE\u300d\u83b7\u53d6\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"usageType"})," \u680f\u586b\u5199 ",(0,t.jsx)(n.code,{children:"Register"}),"\uff0c",(0,t.jsx)(n.code,{children:"SignIn"}),"\uff0c",(0,t.jsx)(n.code,{children:"ForgotPassword"})," \u6216\u8005 ",(0,t.jsx)(n.code,{children:"Generic"})," \u5176\u4e2d\u4e4b\u4e00\u4ee5\u5206\u522b\u5bf9\u5e94 ",(0,t.jsx)(n.em,{children:"\u6ce8\u518c"}),"\uff0c\n",(0,t.jsx)(n.em,{children:"\u767b\u5f55"}),"\uff0c",(0,t.jsx)(n.em,{children:"\u5fd8\u8bb0\u5bc6\u7801"}),"\uff0c",(0,t.jsx)(n.em,{children:"\u901a\u7528"})," \u7684\u4e0d\u540c\u573a\u666f\u3002\uff08",(0,t.jsx)(n.code,{children:"usageType"})," \u662f Logto \u7684\u5c5e\u6027\uff0c\u7528\u6765\u786e\u5b9a\u4f7f\u7528\u573a\u666f\u3002\uff09\u4e3a\u4e86\u80fd\u591f\u4f7f\u7528\u5b8c\u6210\u7684\u6d41\u7a0b\uff0c\u9700\u8981\u914d\u7f6e ",(0,t.jsx)(n.code,{children:"usageType"})," \u4e3a ",(0,t.jsx)(n.code,{children:"Register"}),"\uff0c",(0,t.jsx)(n.code,{children:"SignIn"}),", ",(0,t.jsx)(n.code,{children:"ForgotPassword"})," \u4ee5\u53ca ",(0,t.jsx)(n.code,{children:"Generic"})," \u7684\u6a21\u677f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5728 ",(0,t.jsx)(n.a,{href:"https://console.cloud.tencent.com/smsv2/app-manage",children:"\u5e94\u7528\u7ba1\u7406"})," \u83b7\u53d6\u5e94\u7528 ID \u586b\u5199\u5165 ",(0,t.jsx)(n.code,{children:"sdkAppId"})," \u680f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5728 ",(0,t.jsx)(n.a,{href:"https://cloud.tencent.com/document/api/382/52071#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8",children:"\u53d1\u9001\u6587\u6863"}),"\n\u53ef\u4ee5\u83b7\u53d6\u77ed\u4fe1\u4ea7\u54c1\u652f\u6301\u7684\u5730\u57df\uff0c\u586b\u5199\u5165 ",(0,t.jsx)(n.code,{children:"region"})," \u680f\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u6d4b\u8bd5\u817e\u8baf\u4e91\u77ed\u4fe1\u8fde\u63a5\u5668",children:"\u6d4b\u8bd5\u817e\u8baf\u4e91\u77ed\u4fe1\u8fde\u63a5\u5668"}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u5728\u300c\u4fdd\u5b58\u5e76\u5b8c\u6210\u300d\u4e4b\u524d\u8f93\u5165\u4e00\u4e2a\u624b\u673a\u53f7\u7801\u5e76\u70b9\u6309\u300c\u53d1\u9001\u300d\u6765\u6d4b\u8bd5\u914d\u7f6e\u662f\u5426\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5927\u529f\u544a\u6210\uff01\u5feb\u53bb ",(0,t.jsx)(n.a,{href:"/connectors/sms-connectors/#enable-phone-number-sign-up-or-sign-in",children:"\u542f\u7528\u77ed\u4fe1\u9a8c\u8bc1\u7801\u767b\u5f55"}),"\n\u5427\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u914d\u7f6e\u7c7b\u578b",children:"\u914d\u7f6e\u7c7b\u578b"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u7c7b\u578b"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessKeyId"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accessKeySecret"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"signName"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"region"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sdkAppId"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"templates"}),(0,t.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"| \u6a21\u677f\u5c5e\u6027     | \u7c7b\u578b        | \u679a\u4e3e\u503c        |\n| ------------ | ----------- | ------------- | ----------------------------------------- |\n| templateCode | string      | N/A           |\n| usageType    | enum string | 'Register' \\  | 'SignIn' | 'ForgotPassword' | 'Generic' |"}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://cloud.tencent.com/document/product/382/43070",children:"\u817e\u8baf\u4e91 \u5982\u4f55\u5b9e\u73b0\u77ed\u4fe1\u9a8c\u8bc1\u7801\u529f\u80fd"})}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},15658:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var c=s(30758);const t={},i=c.createContext(t);function r(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);