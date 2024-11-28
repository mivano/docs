"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[19630],{17518:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"user-management/user-data","title":"\u7528\u6237\u6570\u636e\u7ed3\u6784","description":"\u7528\u6237\u662f\u8eab\u4efd\u670d\u52a1\u4e2d\u7684\u6838\u5fc3\u5b9e\u4f53\u3002\u5728 Logto \u4e2d\uff0c\u5b83\u4eec\u5305\u62ec\u57fa\u4e8e OpenID Connect \u534f\u8bae\u7684\u57fa\u672c\u8ba4\u8bc1\u6570\u636e\u4ee5\u53ca\u81ea\u5b9a\u4e49\u6570\u636e\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-management/user-data.mdx","sourceDirName":"user-management","slug":"/user-management/user-data","permalink":"/zh-CN/user-management/user-data","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-management/user-data.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"\u7528\u6237\u7ba1\u7406","permalink":"/zh-CN/user-management/"},"next":{"title":"\u7ba1\u7406\u7528\u6237","permalink":"/zh-CN/user-management/manage-users"}}');var i=s(86070),d=s(15658);const l={sidebar_position:1},t="\u7528\u6237\u6570\u636e\u7ed3\u6784",c={},a=[{value:"\u7528\u6237\u8d44\u6599",id:"\u7528\u6237\u8d44\u6599",level:2},{value:"\u57fa\u672c\u6570\u636e",id:"\u57fa\u672c\u6570\u636e",level:2},{value:"id",id:"id",level:3},{value:"username",id:"username",level:3},{value:"primary_email",id:"primary_email",level:3},{value:"primary_phone",id:"primary_phone",level:3},{value:"name",id:"name",level:3},{value:"avatar",id:"avatar",level:3},{value:"profile",id:"profile",level:3},{value:"application_id",id:"application_id",level:3},{value:"last_signed_in_at",id:"last_signed_in_at",level:3},{value:"password_encrypted",id:"password_encrypted",level:3},{value:"password_encryption_method",id:"password_encryption_method",level:3},{value:"is_suspended",id:"is_suspended",level:3},{value:"\u5c5e\u6027\u53c2\u8003",id:"\u5c5e\u6027\u53c2\u8003",level:2},{value:"\u793e\u4ea4\u8eab\u4efd",id:"\u793e\u4ea4\u8eab\u4efd",level:2},{value:"\u81ea\u5b9a\u4e49\u6570\u636e",id:"\u81ea\u5b9a\u4e49\u6570\u636e",level:2},{value:"\u76f8\u5173\u8d44\u6e90",id:"\u76f8\u5173\u8d44\u6e90",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components},{CloudLink:s,Url:r}=n;return s||x("CloudLink",!0),r||x("Url",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u7528\u6237\u6570\u636e\u7ed3\u6784",children:"\u7528\u6237\u6570\u636e\u7ed3\u6784"})}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u6237\u662f\u8eab\u4efd\u670d\u52a1\u4e2d\u7684\u6838\u5fc3\u5b9e\u4f53\u3002\u5728 Logto \u4e2d\uff0c\u5b83\u4eec\u5305\u62ec\u57fa\u4e8e OpenID Connect \u534f\u8bae\u7684\u57fa\u672c\u8ba4\u8bc1\u6570\u636e\u4ee5\u53ca\u81ea\u5b9a\u4e49\u6570\u636e\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7528\u6237\u8d44\u6599",children:"\u7528\u6237\u8d44\u6599"}),"\n",(0,i.jsxs)(n.p,{children:["\u6bcf\u4e2a\u7528\u6237\u90fd\u6709\u4e00\u4e2a\u5305\u542b ",(0,i.jsx)(n.a,{href:"./#property-reference",children:"\u6240\u6709\u7528\u6237\u4fe1\u606f"})," \u7684\u8d44\u6599\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5b83\u7531\u4ee5\u4e0b\u7c7b\u578b\u7684\u6570\u636e\u7ec4\u6210\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"./#basic-data",children:"\u57fa\u672c\u6570\u636e"}),"\uff1a\u662f\u7528\u6237\u8d44\u6599\u4e2d\u7684\u57fa\u672c\u4fe1\u606f\u3002\u5b83\u5b58\u50a8\u6240\u6709\u5176\u4ed6 ",(0,i.jsx)(n.em,{children:"\u7528\u6237"})," \u7684\u5c5e\u6027\uff0c\u9664\u4e86\u793e\u4ea4 ",(0,i.jsx)(n.code,{children:"identities"})," \u548c ",(0,i.jsx)(n.code,{children:"custom_data"}),"\uff0c\u4f8b\u5982\u7528\u6237 ID\u3001\u7528\u6237\u540d\u3001\u7535\u5b50\u90ae\u4ef6\u3001\u7535\u8bdd\u53f7\u7801\u4ee5\u53ca\u7528\u6237\u4e0a\u6b21\u767b\u5f55\u7684\u65f6\u95f4\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"./#social-identities",children:"\u793e\u4ea4\u8eab\u4efd"}),"\uff1a\u5b58\u50a8\u4ece\u793e\u4ea4\u767b\u5f55\uff08\u5373\u4f7f\u7528\u793e\u4ea4\u8fde\u63a5\u5668\u767b\u5f55\uff09\u4e2d\u68c0\u7d22\u5230\u7684\u7528\u6237\u4fe1\u606f\uff0c\u4f8b\u5982 Facebook\u3001GitHub \u548c\u5fae\u4fe1\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"./#custom-data",children:"\u81ea\u5b9a\u4e49\u6570\u636e"}),"\uff1a\u5b58\u50a8\u672a\u5217\u5728\u9884\u5b9a\u4e49\u7528\u6237\u5c5e\u6027\u4e2d\u7684\u5176\u4ed6\u7528\u6237\u4fe1\u606f\uff0c\u4f8b\u5982\u7528\u6237\u504f\u597d\u7684\u989c\u8272\u548c\u8bed\u8a00\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4ece Facebook \u767b\u5f55\u4e2d\u68c0\u7d22\u5230\u7684\u7528\u6237\u6570\u636e\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "iHXPuSb9eMzt",\n  "username": null,\n  "primaryEmail": null,\n  "primaryPhone": null,\n  "name": "John Doe",\n  "avatar": "https://example.com/avatar.png",\n  "customData": {\n    "preferences": {\n      "language": "en",\n      "color": "#f236c9"\n    }\n  },\n  "identities": {\n    "facebook": {\n      "userId": "106077000000000",\n      "details": {\n        "id": "106077000000000",\n        "name": "John Doe",\n        "email": "johndoe@logto.io",\n        "avatar": "https://example.com/avatar.png"\n      }\n    }\n  },\n  "lastSignInAt": 1655799453171,\n  "applicationId": "admin_console"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(s,{to:"/users",children:"Logto Console"})," \u6216 Logto Management API \u67e5\u8be2\u7528\u6237\u8d44\u6599\uff0c\u4f8b\u5982 ",(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:(0,i.jsx)(n.code,{children:"GET /api/users/:userId"})}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u57fa\u672c\u6570\u636e",children:"\u57fa\u672c\u6570\u636e"}),"\n",(0,i.jsxs)(n.p,{children:["\u8ba9\u6211\u4eec\u9010\u6b65\u4e86\u89e3\u7528\u6237 ",(0,i.jsx)(n.em,{children:"\u57fa\u672c\u6570\u636e"})," \u4e2d\u7684\u6240\u6709\u5c5e\u6027\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"id",children:"id"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"id"})," \u662f\u4e00\u4e2a\u552f\u4e00\u7684\u81ea\u52a8\u751f\u6210\u7684\u952e\uff0c\u7528\u4e8e\u5728 Logto \u4e2d\u6807\u8bc6\u7528\u6237\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"username",children:"username"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"username"})," \u7528\u4e8e\u4f7f\u7528 ",(0,i.jsx)(n.em,{children:"username"})," \u548c\u5bc6\u7801\u767b\u5f55\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u503c\u6765\u81ea\u7528\u6237\u9996\u6b21\u6ce8\u518c\u65f6\u7684\u7528\u6237\u540d\u3002\u5b83\u53ef\u80fd\u4e3a ",(0,i.jsx)(n.code,{children:"null"}),"\u3002\u5176\u975e\u7a7a\u503c\u4e0d\u5e94\u8d85\u8fc7 128 \u4e2a\u5b57\u7b26\uff0c\u53ea\u80fd\u5305\u542b\u5b57\u6bcd\u3001\u6570\u5b57\u548c\u4e0b\u5212\u7ebf (",(0,i.jsx)(n.code,{children:"_"}),")\uff0c\u4e14\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"primary_email",children:"primary_email"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"primary_email"})," \u662f\u7528\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u7528\u4e8e\u4f7f\u7528\u7535\u5b50\u90ae\u4ef6\u548c\u9a8c\u8bc1\u7801\u767b\u5f55\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u503c\u901a\u5e38\u6765\u81ea\u7528\u6237\u9996\u6b21\u6ce8\u518c\u65f6\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002\u5b83\u53ef\u80fd\u4e3a ",(0,i.jsx)(n.code,{children:"null"}),"\u3002\u5176\u6700\u5927\u957f\u5ea6\u4e3a 128\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"primary_phone",children:"primary_phone"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"primary_phone"})," \u662f\u7528\u6237\u7684\u7535\u8bdd\u53f7\u7801\uff0c\u7528\u4e8e\u4f7f\u7528\u7535\u8bdd\u53f7\u7801\u548c\u6765\u81ea\u77ed\u4fe1\u7684\u9a8c\u8bc1\u7801\u767b\u5f55\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u503c\u901a\u5e38\u6765\u81ea\u7528\u6237\u9996\u6b21\u6ce8\u518c\u65f6\u7684\u7535\u8bdd\u53f7\u7801\u3002\u5b83\u53ef\u80fd\u4e3a ",(0,i.jsx)(n.code,{children:"null"}),"\u3002\u5176\u975e\u7a7a\u503c\u5e94\u5305\u542b\u4ee5 ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_country_calling_codes",children:"\u56fd\u5bb6\u533a\u53f7"})," \u4e3a\u524d\u7f00\u7684\u6570\u5b57\uff08\u4e0d\u5305\u62ec\u52a0\u53f7 ",(0,i.jsx)(n.code,{children:"+"}),"\uff09\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"name"})," \u662f\u7528\u6237\u7684\u5168\u540d\u3002\u5176\u6700\u5927\u957f\u5ea6\u4e3a 128\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"avatar",children:"avatar"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"avatar"})," \u662f\u6307\u5411\u7528\u6237\u5934\u50cf\u56fe\u50cf\u7684 URL\u3002\u5176\u6700\u5927\u957f\u5ea6\u4e3a 2048\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u7528\u6237\u4f7f\u7528 Google \u548c Facebook \u7b49\u793e\u4ea4\u8fde\u63a5\u5668\u6ce8\u518c\uff0c\u5176\u503c\u53ef\u80fd\u4f1a\u4ece\u793e\u4ea4\u7528\u6237\u4fe1\u606f\u4e2d\u68c0\u7d22\u5230\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["\u6b64\u5c5e\u6027\u6620\u5c04\u5230 ",(0,i.jsx)(n.a,{href:"https://openid.net/connect/",children:"OpenID Connect"})," \u6807\u51c6\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"picture"})," \u58f0\u660e\u3002"]})}),"\n",(0,i.jsx)(n.h3,{id:"profile",children:"profile"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"profile"})," \u5b58\u50a8\u5176\u4ed6 OpenID Connect ",(0,i.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims",children:"\u6807\u51c6\u58f0\u660e"}),"\uff0c\u8fd9\u4e9b\u58f0\u660e\u672a\u5305\u542b\u5728\u7528\u6237\u5c5e\u6027\u4e2d\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u7c7b\u578b\u5b9a\u4e49\u53ef\u4ee5\u5728 ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/logto/blob/HEAD/packages/schemas/src/foundations/jsonb-types/users.ts#L6",children:"\u6b64\u6587\u4ef6"})," \u4e2d\u627e\u5230\u3002\u4ee5\u4e0b\u662f\u7c7b\u578b\u5b9a\u4e49\u7684\u526f\u672c\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"type UserProfile = Partial<{\n  familyName: string;\n  givenName: string;\n  middleName: string;\n  nickname: string;\n  preferredUsername: string;\n  profile: string;\n  website: string;\n  gender: string;\n  birthdate: string;\n  zoneinfo: string;\n  locale: string;\n  address: Partial<{\n    formatted: string;\n    streetAddress: string;\n    locality: string;\n    region: string;\n    postalCode: string;\n    country: string;\n  }>;\n}>;\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Partial"})," \u610f\u5473\u7740\u6240\u6709\u5c5e\u6027\u90fd\u662f\u53ef\u9009\u7684\u3002"]})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0e\u5176\u4ed6\u6807\u51c6\u58f0\u660e\u76f8\u6bd4\u7684\u4e00\u4e2a\u533a\u522b\u662f\uff0c",(0,i.jsx)(n.code,{children:"profile"})," \u4e2d\u7684\u5c5e\u6027\u53ea\u6709\u5728\u5176\u503c\u4e0d\u4e3a\u7a7a\u65f6\u624d\u4f1a\u5305\u542b\u5728 ID \u4ee4\u724c\u6216\u7528\u6237\u4fe1\u606f\u7aef\u70b9\u54cd\u5e94\u4e2d\uff0c\u800c\u5176\u4ed6\u6807\u51c6\u58f0\u660e\u5728\u503c\u4e3a\u7a7a\u65f6\u5c06\u8fd4\u56de ",(0,i.jsx)(n.code,{children:"null"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"application_id",children:"application_id"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"application_id"})," \u7684\u503c\u6765\u81ea\u7528\u6237\u9996\u6b21\u767b\u5f55\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u5b83\u53ef\u80fd\u4e3a ",(0,i.jsx)(n.code,{children:"null"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"last_signed_in_at",children:"last_signed_in_at"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"last_signed_in_at"})," \u662f\u7528\u6237\u4e0a\u6b21\u767b\u5f55\u65f6\u7684\u5e26\u65f6\u533a\u7684\u65f6\u95f4\u6233\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"password_encrypted",children:"password_encrypted"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"password_encrypted"})," \u7528\u4e8e\u5b58\u50a8\u7528\u6237\u7684\u52a0\u5bc6\u5bc6\u7801\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u503c\u6765\u81ea\u7528\u6237\u9996\u6b21\u6ce8\u518c\u65f6\u7684\u5bc6\u7801\u3002\u5b83\u53ef\u80fd\u4e3a ",(0,i.jsx)(n.code,{children:"null"}),"\u3002\u5982\u679c\u5176\u503c\u4e3a\u975e\u7a7a\uff0c\u5219\u52a0\u5bc6\u524d\u7684\u539f\u59cb\u5185\u5bb9\u5e94\u81f3\u5c11\u4e3a\u516d\u4e2a\u5b57\u7b26\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"password_encryption_method",children:"password_encryption_method"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"password_encryption_method"})," \u7528\u4e8e\u52a0\u5bc6\u7528\u6237\u7684\u5bc6\u7801\u3002\u5176\u503c\u5728\u7528\u6237\u4f7f\u7528\u7528\u6237\u540d\u548c\u5bc6\u7801\u6ce8\u518c\u65f6\u521d\u59cb\u5316\u3002\u5b83\u53ef\u80fd\u4e3a ",(0,i.jsx)(n.code,{children:"null"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["Logto \u9ed8\u8ba4\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Argon2",children:"Argon2"})," \u7684\u5b9e\u73b0 ",(0,i.jsx)(n.a,{href:"https://github.com/ranisalt/node-argon2",children:"node-argon2"})," \u4f5c\u4e3a\u52a0\u5bc6\u65b9\u6cd5\uff1b\u5982\u679c\u4f60\u611f\u5174\u8da3\uff0c\u8bf7\u53c2\u9605\u53c2\u8003\u8d44\u6599\u4ee5\u83b7\u53d6\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ece\u5bc6\u7801\u4e3a ",(0,i.jsx)(n.code,{children:"123456"})," \u7684\u7528\u6237\u4e2d\u62bd\u6837\u4e00\u4e2a ",(0,i.jsx)(n.em,{children:"password_encrypted"})," \u548c ",(0,i.jsx)(n.em,{children:"password_encryption_method"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "password_encryption_method": "Argon2i",\n  "password_encrypted": "$argon2i$v=19$m=4096,t=10,p=1$aZzrqpSX45DOo+9uEW6XVw$O4MdirF0mtuWWWz68eyNAt2u1FzzV3m3g00oIxmEr0U"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"is_suspended",children:"is_suspended"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"is_suspended"})," \u662f\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u6307\u793a\u7528\u6237\u662f\u5426\u88ab\u6682\u505c\u3002\u8be5\u503c\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-updateuserissuspended",children:"Logto Management API"})," \u6216\u4f7f\u7528\u7ba1\u7406\u63a7\u5236\u53f0\u8fdb\u884c\u7ba1\u7406\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u65e6\u7528\u6237\u88ab\u6682\u505c\uff0c\u9884\u5148\u6388\u4e88\u7684\u5237\u65b0\u4ee4\u724c\u5c06\u7acb\u5373\u88ab\u64a4\u9500\uff0c\u7528\u6237\u5c06\u65e0\u6cd5\u518d\u901a\u8fc7 Logto \u8fdb\u884c\u8ba4\u8bc1\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5c5e\u6027\u53c2\u8003",children:"\u5c5e\u6027\u53c2\u8003"}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5c5e\u6027\uff08\u9664\u4e86 ",(0,i.jsx)(n.em,{children:"password_encrypted"})," \u548c ",(0,i.jsx)(n.em,{children:"password_encryption_method"}),"\uff09\u5728\u7528\u6237\u8d44\u6599\u4e2d\u53ef\u89c1\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:"Management API"})," \u67e5\u8be2\u5b83\u4eec\u3002"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u540d\u79f0"}),(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,i.jsx)(n.th,{children:"\u552f\u4e00"}),(0,i.jsx)(n.th,{children:"\u5fc5\u9700"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./#id",children:"id"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"\u552f\u4e00\u6807\u8bc6\u7b26"}),(0,i.jsx)(n.td,{children:"\u2705"}),(0,i.jsx)(n.td,{children:"\u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./#username",children:"username"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"\u767b\u5f55\u7528\u7684\u7528\u6237\u540d"}),(0,i.jsx)(n.td,{children:"\u2705"}),(0,i.jsx)(n.td,{children:"\u274c"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./#primary_email",children:"primary_email"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"\u4e3b\u7535\u5b50\u90ae\u4ef6"}),(0,i.jsx)(n.td,{children:"\u2705"}),(0,i.jsx)(n.td,{children:"\u274c"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./#primary_phone",children:"primary_phone"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"\u4e3b\u7535\u8bdd\u53f7\u7801"}),(0,i.jsx)(n.td,{children:"\u2705"}),(0,i.jsx)(n.td,{children:"\u274c"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./#name",children:"name"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"\u5168\u540d"}),(0,i.jsx)(n.td,{children:"\u274c"}),(0,i.jsx)(n.td,{children:"\u274c"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./#avatar",children:"avatar"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"\u6307\u5411\u7528\u6237\u5934\u50cf\u56fe\u50cf\u7684 URL"}),(0,i.jsx)(n.td,{children:"\u274c"}),(0,i.jsx)(n.td,{children:"\u274c"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./#social-identities",children:"identities"})}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"\u4ece\u793e\u4ea4\u767b\u5f55\u4e2d\u68c0\u7d22\u5230\u7684\u7528\u6237\u4fe1\u606f"}),(0,i.jsx)(n.td,{children:"\u274c"}),(0,i.jsx)(n.td,{children:"\u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./#custom-data",children:"custom_data"})}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"\u53ef\u81ea\u5b9a\u4e49\u5c5e\u6027\u4e2d\u7684\u9644\u52a0\u4fe1\u606f"}),(0,i.jsx)(n.td,{children:"\u274c"}),(0,i.jsx)(n.td,{children:"\u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./#application_id",children:"application_id"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"\u7528\u6237\u9996\u6b21\u6ce8\u518c\u7684\u5e94\u7528\u7a0b\u5e8f ID"}),(0,i.jsx)(n.td,{children:"\u274c"}),(0,i.jsx)(n.td,{children:"\u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./#last_signed_in_at",children:"last_sign_in_at"})}),(0,i.jsx)(n.td,{children:"date time"}),(0,i.jsx)(n.td,{children:"\u7528\u6237\u4e0a\u6b21\u767b\u5f55\u65f6\u7684\u65f6\u95f4\u6233"}),(0,i.jsx)(n.td,{children:"\u274c"}),(0,i.jsx)(n.td,{children:"\u2705"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./#password_encrypted",children:"password_encrypted"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"\u52a0\u5bc6\u5bc6\u7801"}),(0,i.jsx)(n.td,{children:"\u274c"}),(0,i.jsx)(n.td,{children:"\u274c"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./#password_encryption_method",children:"password_encryption_method"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"\u5bc6\u7801\u52a0\u5bc6\u65b9\u6cd5"}),(0,i.jsx)(n.td,{children:"\u274c"}),(0,i.jsx)(n.td,{children:"\u274c"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"./#is_suspended",children:"is_suspended"})}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"\u7528\u6237\u6682\u505c\u6807\u8bb0"}),(0,i.jsx)(n.td,{children:"\u274c"}),(0,i.jsx)(n.td,{children:"\u2705"})]})]})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u552f\u4e00"}),"\uff1a\u786e\u4fdd\u8f93\u5165\u5230\u6570\u636e\u5e93\u8868\u5c5e\u6027\u4e2d\u7684\u503c\u7684 ",(0,i.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS",children:"\u552f\u4e00\u6027"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5fc5\u9700"}),"\uff1a\u786e\u4fdd\u8f93\u5165\u5230\u6570\u636e\u5e93\u8868\u5c5e\u6027\u4e2d\u7684\u503c\u4e0d\u80fd\u4e3a ",(0,i.jsx)(n.code,{children:"null"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793e\u4ea4\u8eab\u4efd",children:"\u793e\u4ea4\u8eab\u4efd"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"identities"})," \u5305\u542b\u4ece\u793e\u4ea4\u767b\u5f55\uff08\u5373\u4f7f\u7528\u793e\u4ea4\u8fde\u63a5\u5668\u767b\u5f55\uff09\u4e2d\u68c0\u7d22\u5230\u7684\u7528\u6237\u4fe1\u606f\u3002\u6bcf\u4e2a\u7528\u6237\u7684 ",(0,i.jsx)(n.em,{children:"identities"})," \u5b58\u50a8\u5728\u4e00\u4e2a\u5355\u72ec\u7684 JSON \u5bf9\u8c61\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u6237\u4fe1\u606f\u56e0\u793e\u4ea4\u8eab\u4efd\u63d0\u4f9b\u5546\uff08\u5373\u793e\u4ea4\u7f51\u7edc\u5e73\u53f0\uff09\u800c\u5f02\uff0c\u901a\u5e38\u5305\u62ec\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8eab\u4efd\u63d0\u4f9b\u5546\u7684 ",(0,i.jsx)(n.em,{children:"target"}),'\uff0c\u4f8b\u5982 "facebook" \u6216 "google"']}),"\n",(0,i.jsx)(n.li,{children:"\u7528\u6237\u5728\u6b64\u63d0\u4f9b\u5546\u7684\u552f\u4e00\u6807\u8bc6\u7b26"}),"\n",(0,i.jsx)(n.li,{children:"\u7528\u6237\u7684\u59d3\u540d"}),"\n",(0,i.jsx)(n.li,{children:"\u7528\u6237\u7684\u5df2\u9a8c\u8bc1\u7535\u5b50\u90ae\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u7528\u6237\u7684\u5934\u50cf"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u6237\u7684\u5e10\u6237\u53ef\u4ee5\u901a\u8fc7\u793e\u4ea4\u767b\u5f55\u94fe\u63a5\u5230\u591a\u4e2a\u793e\u4ea4\u8eab\u4efd\u63d0\u4f9b\u5546\uff1b\u4ece\u8fd9\u4e9b\u63d0\u4f9b\u5546\u68c0\u7d22\u5230\u7684\u76f8\u5e94\u7528\u6237\u4fe1\u606f\u5c06\u5b58\u50a8\u5728 ",(0,i.jsx)(n.em,{children:"identities"})," \u5bf9\u8c61\u4e2d\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ece\u4e00\u4e2a\u4f7f\u7528 Google \u548c Facebook \u767b\u5f55\u7684\u7528\u6237\u4e2d\u62bd\u6837 ",(0,i.jsx)(n.em,{children:"identities"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "facebook": {\n    "userId": "5110888888888888",\n    "details": {\n      "id": "5110888888888888",\n      "name": "John Doe",\n      "email": "johndoe@logto.io",\n      "avatar": "https://example.com/avatar.png"\n    }\n  },\n  "google": {\n    "userId": "111000000000000000000",\n    "details": {\n      "id": "111000000000000000000",\n      "name": "John Doe",\n      "email": "johndoe@gmail.com",\n      "avatar": "https://example.com/avatar.png"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u6570\u636e",children:"\u81ea\u5b9a\u4e49\u6570\u636e"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"custom_data"})," \u5b58\u50a8\u672a\u5217\u5728\u9884\u5b9a\u4e49\u7528\u6237\u5c5e\u6027\u4e2d\u7684\u5176\u4ed6\u7528\u6237\u4fe1\u606f\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.em,{children:"custom_data"})," \u505a\u4ee5\u4e0b\u4e8b\u60c5\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8bb0\u5f55\u7528\u6237\u662f\u5426\u5df2\u5b8c\u6210\u7279\u5b9a\u64cd\u4f5c\uff0c\u4f8b\u5982\u662f\u5426\u5df2\u67e5\u770b\u6b22\u8fce\u9875\u9762\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5728\u7528\u6237\u8d44\u6599\u4e2d\u5b58\u50a8\u5e94\u7528\u7a0b\u5e8f\u7279\u5b9a\u7684\u6570\u636e\uff0c\u4f8b\u5982\u7528\u6237\u6bcf\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u9996\u9009\u8bed\u8a00\u548c\u5916\u89c2\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u7ef4\u62a4\u4e0e\u7528\u6237\u76f8\u5173\u7684\u5176\u4ed6\u4efb\u610f\u6570\u636e\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ece Logto \u4e2d\u7684\u7ba1\u7406\u5458\u7528\u6237\u4e2d\u62bd\u6837 ",(0,i.jsx)(n.em,{children:"custom_data"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "adminConsolePreferences": {\n    "language": "en",\n    "appearanceMode": "system",\n    "experienceNoticeConfirmed": true\n  },\n  "customDataFoo": {\n    "foo": "foo"\n  },\n  "customDataBar": {\n    "bar": "bar"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6bcf\u4e2a\u7528\u6237\u7684 ",(0,i.jsx)(n.em,{children:"custom_data"})," \u5b58\u50a8\u5728\u4e00\u4e2a\u5355\u72ec\u7684 JSON \u5bf9\u8c61\u4e2d\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e0d\u8981\u5c06\u654f\u611f\u6570\u636e\u653e\u5165 ",(0,i.jsx)(n.em,{children:"custom_data"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f60\u53ef\u80fd\u4f1a\u4f7f\u7528 Management API \u83b7\u53d6\u5305\u542b ",(0,i.jsx)(n.em,{children:"custom_data"})," \u7684\u7528\u6237\u8d44\u6599\uff0c\u5e76\u5c06\u5176\u53d1\u9001\u5230\u524d\u7aef\u5e94\u7528\u7a0b\u5e8f\u6216\u5916\u90e8\u540e\u7aef\u670d\u52a1\u3002\u56e0\u6b64\uff0c\u5c06\u654f\u611f\u4fe1\u606f\u653e\u5165 ",(0,i.jsx)(n.em,{children:"custom_data"})," \u53ef\u80fd\u4f1a\u5bfc\u81f4\u6570\u636e\u6cc4\u9732\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4ecd\u7136\u60f3\u5c06\u654f\u611f\u4fe1\u606f\u653e\u5165 ",(0,i.jsx)(n.em,{children:"custom_data"}),"\uff0c\u6211\u4eec\u5efa\u8bae\u5148\u5bf9\u5176\u8fdb\u884c\u52a0\u5bc6\u3002\u4ec5\u5728\u53d7\u4fe1\u4efb\u7684\u65b9\uff08\u5982\u4f60\u7684\u540e\u7aef\u670d\u52a1\uff09\u4e2d\u8fdb\u884c\u52a0\u5bc6/\u89e3\u5bc6\uff0c\u907f\u514d\u5728\u524d\u7aef\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8fdb\u884c\u3002\u8fd9\u4e9b\u63aa\u65bd\u5c06\u6700\u5927\u9650\u5ea6\u5730\u51cf\u5c11\u7528\u6237\u7684 ",(0,i.jsx)(n.em,{children:"custom_data"})," \u56e0\u610f\u5916\u6cc4\u9732\u800c\u9020\u6210\u7684\u635f\u5931\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"/user-management/manage-users/#view-and-update-the-user-profile",children:"Admin Console"})," \u6216 ",(0,i.jsx)(n.a,{href:"/user-management/manage-users/#manage-via-logto-management-api",children:"Logto Management API"})," \u66f4\u65b0\u7528\u6237\u7684 ",(0,i.jsx)(n.em,{children:"custom_data"}),"\uff0c\u4f8b\u5982 ",(0,i.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-patch-api-users-parameter",children:(0,i.jsx)(n.code,{children:"PATCH /api/users/:userId"})}),"\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u8c28\u614e\u66f4\u65b0"}),"\n",(0,i.jsxs)(n.p,{children:["\u66f4\u65b0\u7528\u6237\u7684 ",(0,i.jsx)(n.em,{children:"custom_data"})," \u5c06\u5b8c\u5168\u8986\u76d6\u5b58\u50a8\u4e2d\u7684\u539f\u59cb\u5185\u5bb9\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u8c03\u7528\u66f4\u65b0 ",(0,i.jsx)(n.em,{children:"custom_data"})," API \u7684\u8f93\u5165\u5982\u4e0b\uff08\u5047\u8bbe\u539f\u59cb ",(0,i.jsx)(n.em,{children:"custom_data"})," \u662f\u4e4b\u524d\u663e\u793a\u7684\u793a\u4f8b\u6570\u636e\uff09\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "customDataBaz": {\n    "baz": "baz"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u90a3\u4e48\u66f4\u65b0\u540e\u7684 ",(0,i.jsx)(n.em,{children:"custom_data"})," \u503c\u5e94\u4e3a\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "customDataBaz": {\n    "baz": "baz"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4e5f\u5c31\u662f\u8bf4\uff0c\u66f4\u65b0\u540e\u7684\u5b57\u6bb5\u503c\u4e0e\u4e4b\u524d\u7684\u503c\u65e0\u5173\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u76f8\u5173\u8d44\u6e90",children:"\u76f8\u5173\u8d44\u6e90"}),"\n",(0,i.jsx)(r,{href:"https://blog.logto.io/secure-hub-for-user-data/",children:"\u7528\u6237\u6570\u636e\u79fb\u52a8\u7684\u5b89\u5168\u4e2d\u5fc3"})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},15658:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var r=s(30758);const i={},d=r.createContext(i);function l(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);