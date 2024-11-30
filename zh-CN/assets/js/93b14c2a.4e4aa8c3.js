"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5592],{51691:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/cloud-preview","metadata":{"permalink":"/zh-CN/about/cloud-preview","source":"@site/about/cloud-preview.mdx","title":"cloud-preview","description":"{/ truncate /}","date":"2024-11-30T06:00:15.000Z","tags":[],"hasTruncateMarker":true,"authors":[],"frontMatter":{},"unlisted":false},"content":"import \'./common.scss\';\\n\\n{/* truncate */}\\n\\n# About Logto Cloud (Preview)\\n\\nThank you for joining us in Logto Cloud (Preview), giving you a sneak peek into our current progress. Logto Cloud is built on top of Logto OSS, providing a seamless upgrade path without incurring heavy overhead.\\n\\nPlease note that this version is still in preivew, and as we continue developing the production version, some of the features and details showcased here may be subject to change.\\n\\n**TL;DR**\\n\\n- Logto Cloud (Preview) is currently available for free. The preview stage will end in summer 2023.\\n- We are in the process of finalizing our pricing plans, which will offer discounts based on your user engagement levels.\\n  - Typically, the monthly cost will be under $100 for 10,000 users and under $1,000 for 100,000 users.\\n- Our team treats Logto Cloud (Preview) as a production environment, ensuring a reliable and robust experience.\\n- All of your data, except for Audit logs, will be retained.\\n\\n## Terms\\n\\n**Logto OSS** is the open-source distribution of Logto, the source code can be found on GitHub.\\n\\n**Logto Cloud** is the official managed service from Logto team. It uses Logto OSS as the foundation, with some built-in connector and resource operations, which enable an operation-free experience when using Logto.\\n\\n**Logto Cloud (Preview)** indicates a free preview version of Logto Cloud with certain resource limitations.\\n\\nFunctionally, there are not much differences between Logto Cloud (Preview) and OSS.\\n\\n## Limitations\\n\\nLogto Cloud is free during the preview stage, but it comes with certain limitations:\\n\\n- Each account should have only one tenant, and there is no team collaboration.\\n- Audit logs will be cleaned up every three days.\\n- The built-in Logto email and SMS connector both have a maximum of 100 sending quotas.\\n  - If you want more or you want to unlock this feature once Logto Cloud goes into production, please send an email to [contact@logto.io](mailto:contact@logto.io).\\n\\nThese limitations may not apply to the production version of Logto Cloud. Please stay tuned by [joining our Discord server](https://discord.gg/UEPaF3j5e6) or [subscribing to our newsletter](https://logto.io/subscribe).\\n\\n## Disclaimer\\n\\nWe are sharing this cloud preview with you to give you an idea of what the product will be able to do. It is also a significant signal and milestone that we are continuing to develop features in a mature manner and meet enterprise needs. Please keep in mind that this is not the final product. The preview is just a demonstration of our progress and should not be used instead of professional advice.\\n\\n- Please be aware that we cannot guarantee the reliability of the feature shown in the preview.\\n- We have taken all necessary precautions to ensure its safety, but we cannot be held liable for any issues that may arise while using it.\\n- We may interrupt our service for maintenance, or when we recognize our service is under attack.\\n- We will try our best to persist your data, but we may clean up for security or resource usage issues.\\n\\n## Is my data secure on the cloud?\\n\\nWe value security and are committed to protecting the privacy and security of our users\' data. Here are some details:\\n\\n- The communication between any public party to Logto Cloud is enforced by TLS.\\n- The Logto Cloud database stays in a private network in the Azure West Europe region, with no direct access to the public internet.\\n- Every tenant has a dedicated database role and every business table has enforced Row-Level Security to ensure you data is isolated in the database.\\n- Logto will not store password in plain text. All password are encrypted by the Argon2 algorithm.\\n\\nHowever, we cannot guarantee that unauthorized third parties will never be able to breach our security measures. By using our cloud products, you acknowledge that you understand and accept the inherent security risks. You are responsible for keeping your account information and password confidential and for restricting access to your computer.\\n\\nFor more details, please refer to our [Terms of Use](/terms/of-use/cloud/) and [Privacy Policy](/terms/privacy-policy/).\\n\\n## Frequently Asked Questions\\n\\n### **What is the pricing model?**\\n\\nWe are still finalizing our pricing model, but rest assured that we are working hard to make our product much more affordable than similar offerings currently on the market. We believe it should be more usage-based, rather than charging per seat for a customer-facing scenario.\\n\\nLogto Cloud will remain free while in preview. We would love to explore the appropriate and sustainable pricing model with you. Feel free to send us an email or schedule a meeting with us.\\n\\n### **Will you keep data when the preview ends?**\\n\\nYes. Your tenant will seamlessly transition to Logto Cloud once the preview period ends. You can also request to have your data physically removed at any time if needed. See our Terms of Use for more details.\\n\\n### **Will you stop open-source?**\\n\\nNo! Open-source is the core of our product and we believe it always will be. We will try our best to align between OSS and Cloud, and make sure you have full confidence that Logto OSS is backing you up."}]}}')}}]);