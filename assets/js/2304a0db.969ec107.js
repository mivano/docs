"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[50507],{6260:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>h,default:()=>u,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"docs/recipes/webhooks/configure-webhooks-in-console","title":"Configure webhooks in Console","description":"Configure webhooks in Logto Console to achieve seamless integration and receive real-time event notifications for your application. Enjoy easy configuration, enhanced security, and convenient health monitoring options.","source":"@site/docs/docs/recipes/webhooks/configure-webhooks-in-console.md","sourceDirName":"docs/recipes/webhooks","slug":"/docs/recipes/webhooks/configure-webhooks-in-console","permalink":"/docs/recipes/webhooks/configure-webhooks-in-console","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/webhooks/configure-webhooks-in-console.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Configure in Console","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"\ud83e\ude9d Webhooks","permalink":"/docs/recipes/webhooks/"},"next":{"title":"Configure via Management API","permalink":"/docs/recipes/webhooks/management-api"}}');var s=n(86070),i=n(15658),r=n(10763);const a={sidebar_label:"Configure in Console",sidebar_position:1},h="Configure webhooks in Console",l={},c=[{value:"Create a webhook",id:"create-a-webhook",level:2},{value:"Secure webhook",id:"secure-webhook",level:2},{value:"Test webhook",id:"test-webhook",level:2},{value:"Monitor webhook health",id:"monitor-webhook-health",level:2}];function d(e){const o={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"configure-webhooks-in-console",children:"Configure webhooks in Console"})}),"\n",(0,s.jsx)(r.A,{cloud:!0,oss:{major:1,minor:5}}),"\n",(0,s.jsx)(o.p,{children:"Configure webhooks in Logto Console to achieve seamless integration and receive real-time event notifications for your application. Enjoy easy configuration, enhanced security, and convenient health monitoring options."}),"\n",(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsxs)(o.p,{children:["Alternatively, you also can choose ",(0,s.jsx)(o.a,{href:"/docs/recipes/webhooks/management-api",children:"Management API"})," to build a webhook."]})}),"\n",(0,s.jsx)(o.h2,{id:"create-a-webhook",children:"Create a webhook"}),"\n",(0,s.jsx)(o.p,{children:"Firstly, create a webhook endpoint that will be called by the Logto Agent. This endpoint should be implemented on your server and capable of receiving HTTP requests."}),"\n",(0,s.jsx)(o.p,{children:"To create a new webhook in the Logto Console, follow these steps:"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:'Navigate to the "Webhooks" tab and click on the "Create webhook" button.'}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Name"}),"\nProvide a name for the webhook. This name is for your own reference to define the usage scenario."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Endpoint URL"}),'\nEnter the Endpoint URL, which is the URL of your server that will receive the webhook POST requests when the event occurs. For security reasons, the URL must be publicly accessible via HTTPS and should not be a local host URL. Your server should respond to the Logto webhook requests with an HTTP 200 ("OK") response.']}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Event"}),"\nIn the modal that appears, select the desired events that will trigger this webhook. It is recommended to choose a smaller number of events that meet your requirements to avoid overwhelming the server reception. You can change the selected events at any time after creating the webhook."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Disable / Reactive"}),'\nBy default, the webhook is activated immediately after creation. If you want to suspend the webhook temporarily, you can disable or reactivate it using the "Three-Dots" menu located in the top-right corner of the header after creating it.']}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Create a webhook",src:n(51059).A+"",width:"2000",height:"1319"})}),"\n",(0,s.jsx)(o.h2,{id:"secure-webhook",children:"Secure webhook"}),"\n",(0,s.jsx)(o.p,{children:"After creating a new webhook, you have options to enhance its security:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Signing key"}),"\nLogto generates a unique hash signature, known as the Signing Key, for each webhook. You can include this key as a request header in your endpoint implementation. Verifying the signing key ensures that the webhook payload originates from Logto and has not been tampered with by unauthorized sources. Read ",(0,s.jsx)(o.a,{href:"/docs/recipes/webhooks/securing-your-webhooks",children:"Securing your webhooks"})," to learn more about the code."]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Custom header"}),"\nYou have the option to include custom headers in the webhook payload to provide additional context or metadata. This feature allows you to add relevant information that can assist in processing the webhook data effectively."]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"By utilizing the Signing Key and considering the inclusion of Custom Headers, you can enhance the security of your webhooks and ensure the integrity and authenticity of the received payloads."}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Webhook settings",src:n(82037).A+"",width:"2000",height:"2049"})}),"\n",(0,s.jsx)(o.h2,{id:"test-webhook",children:"Test webhook"}),"\n",(0,s.jsx)(o.p,{children:'To test the connection between Logto and your services, simply click the "Send test payload" button. Logto will then send a sample payload for each selected event to your endpoint URL. These test requests contain anonymous data and are not logged in the recent request history.'}),"\n",(0,s.jsx)(o.p,{children:"This test ensures that your webhook is properly set up to receive and process payloads from Logto. It allows you to validate the integration before deploying the webhook in a live environment."}),"\n",(0,s.jsx)(o.h2,{id:"monitor-webhook-health",children:"Monitor webhook health"}),"\n",(0,s.jsx)(o.p,{children:"Logto provides convenient tools to monitor the health status of your webhooks and investigate any potential issues in detail:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Health status"}),(0,s.jsx)(o.br,{}),"\n","The webhook list in Logto displays the health status of each webhook, including the success rate and total number of requests made in the past 24 hours. This information gives you an overview of the webhook's performance."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Webhook list",src:n(27560).A+"",width:"2880",height:"796"})}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Independent request logs"}),(0,s.jsx)(o.br,{}),"\n",'In the "Recent Requests" section of each webhook, you can access the request logs for the past 24 hours. Each request is logged individually, allowing you to view the details of each request and investigate any potential errors or anomalies.']}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Webhook logs",src:n(21535).A+"",width:"2880",height:"1874"})}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Auto-retry"}),(0,s.jsx)(o.br,{}),"\n","In the event of a failed delivery (when the webhook response status is greater than or equal to 500), Logto automatically retries the delivery up to three times. Rest assured that multiple retries of the same request will only generate a single log entry, avoiding unnecessary duplication."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"By leveraging these monitoring features, you can effectively track the health of your webhooks, examine request logs, and ensure the reliability and performance of your webhook integrations."})]})}function u(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},10763:(e,o,n)=>{n.d(o,{A:()=>r});const t="availability_kRMk";var s=n(86070);const i=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`,r=e=>{let{cloud:o,oss:n}=e;return(0,s.jsxs)("div",{className:t,children:[(0,s.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${i(o)}`}),(0,s.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${i(n)}`})]})}},51059:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/add-webhook-4ee7946318c896c48c2e8e42ed84dbb2.webp"},27560:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/list-webhook-336a33095b2e8f4a176b41d48f4a4f40.webp"},21535:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/webhook-logs-593ebc13808d32b6a3d1c1bc8c03216c.webp"},82037:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/webhook-settings-aa77aef6320bfed9c4c86a02a0cc505f.webp"},15658:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>a});var t=n(30758);const s={},i=t.createContext(s);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);