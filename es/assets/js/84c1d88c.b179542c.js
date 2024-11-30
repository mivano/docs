"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[15232],{15500:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"integrations/email/sendgrid-email/README","title":"Configura la verificaci\xf3n por correo electr\xf3nico con SendGrid Email","description":"El conector oficial de Logto para el servicio de correo electr\xf3nico SendGrid.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/integrations/email/sendgrid-email/README.mdx","sourceDirName":"integrations/email/sendgrid-email","slug":"/integrations/sendgrid-email","permalink":"/es/integrations/sendgrid-email","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/integrations/email/sendgrid-email/README.mdx","tags":[],"version":"current","frontMatter":{"slug":"/integrations/sendgrid-email","sidebar_label":"SendGrid Email","sidebar_custom_props":{"description":"SendGrid es una plataforma de comunicaci\xf3n para correos electr\xf3nicos transaccionales y de marketing.","logoFilename":"sendgrid.svg"}},"sidebar":"integrationsSidebar","previous":{"title":"Postmark","permalink":"/es/integrations/postmark"},"next":{"title":"SMTP","permalink":"/es/integrations/smtp"}}');var c=r(86070),o=r(15658),s=r(40428);const a={slug:"/integrations/sendgrid-email",sidebar_label:"SendGrid Email",sidebar_custom_props:{description:"SendGrid es una plataforma de comunicaci\xf3n para correos electr\xf3nicos transaccionales y de marketing.",logoFilename:"sendgrid.svg"}},d="Configura la verificaci\xf3n por correo electr\xf3nico con SendGrid Email",t={},l=[...s.RM,{value:"Comenzar",id:"comenzar",level:2},{value:"Registrar cuenta de SendGrid",id:"registrar-cuenta-de-sendgrid",level:2},{value:"Verificar remitentes",id:"verificar-remitentes",level:2},{value:"Crear claves de API",id:"crear-claves-de-api",level:2},{value:"Configura tu conector",id:"configura-tu-conector",level:2},{value:"Probar el conector de correo electr\xf3nico de SendGrid",id:"probar-el-conector-de-correo-electr\xf3nico-de-sendgrid",level:3},{value:"Tipos de configuraci\xf3n",id:"tipos-de-configuraci\xf3n",level:3}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"configura-la-verificaci\xf3n-por-correo-electr\xf3nico-con-sendgrid-email",children:"Configura la verificaci\xf3n por correo electr\xf3nico con SendGrid Email"})}),"\n",(0,c.jsx)(n.p,{children:"El conector oficial de Logto para el servicio de correo electr\xf3nico SendGrid."}),"\n",(0,c.jsx)(s.Ay,{}),"\n",(0,c.jsx)(n.h2,{id:"comenzar",children:"Comenzar"}),"\n",(0,c.jsxs)(n.p,{children:["SendGrid (es decir, Twilio SendGrid) es una plataforma de comunicaci\xf3n para clientes para correos electr\xf3nicos transaccionales y de marketing. Podemos usar su funci\xf3n de env\xedo de correos electr\xf3nicos para enviar un ",(0,c.jsx)(n.em,{children:"c\xf3digo de verificaci\xf3n"}),"."]}),"\n",(0,c.jsx)(n.h2,{id:"registrar-cuenta-de-sendgrid",children:"Registrar cuenta de SendGrid"}),"\n",(0,c.jsxs)(n.p,{children:["Crea una nueva cuenta en el ",(0,c.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"sitio web de SendGrid"}),". Puedes omitir este paso si ya tienes una cuenta."]}),"\n",(0,c.jsx)(n.h2,{id:"verificar-remitentes",children:"Verificar remitentes"}),"\n",(0,c.jsxs)(n.p,{children:["Ve a la ",(0,c.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"p\xe1gina de consola de SendGrid"})," e inicia sesi\xf3n con tu cuenta de SendGrid."]}),"\n",(0,c.jsx)(n.p,{children:"Los remitentes indican las direcciones desde las cuales se enviar\xe1 nuestro correo electr\xf3nico de c\xf3digo de verificaci\xf3n. Para enviar correos electr\xf3nicos a trav\xe9s del servidor de correo de SendGrid, necesitas verificar al menos un remitente."}),"\n",(0,c.jsxs)(n.p,{children:["Comenzando desde la ",(0,c.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"p\xe1gina de consola de SendGrid"}),', ve a "Settings" -> "Sender Authentication" desde la barra lateral.']}),"\n",(0,c.jsx)(n.p,{children:'La autenticaci\xf3n de dominio es recomendada pero no obligatoria. Puedes hacer clic en "Get started" en la tarjeta "Authenticate Your Domain" y seguir la gu\xeda que aparece para vincular y verificar un remitente en SendGrid.'}),"\n",(0,c.jsx)(n.p,{children:'Al hacer clic en el bot\xf3n "Verify a Single Sender" en el panel, ahora te enfocas en un formulario que requiere informaci\xf3n cr\xedtica para crear un remitente. Sigue la gu\xeda, completa todos estos campos y presiona el bot\xf3n "Create".'}),"\n",(0,c.jsx)(n.p,{children:"Despu\xe9s de que se cree el remitente \xfanico, se enviar\xe1 un correo electr\xf3nico con un enlace de verificaci\xf3n a la direcci\xf3n de correo electr\xf3nico de tu remitente. Ve a tu buz\xf3n, encuentra el correo de verificaci\xf3n y termina de verificar el remitente \xfanico haciendo clic en el enlace proporcionado en el correo electr\xf3nico. Ahora puedes enviar correos electr\xf3nicos a trav\xe9s del conector de SendGrid usando el remitente que acabas de verificar."}),"\n",(0,c.jsx)(n.h2,{id:"crear-claves-de-api",children:"Crear claves de API"}),"\n",(0,c.jsxs)(n.p,{children:["Comencemos desde la ",(0,c.jsx)(n.a,{href:"https://app.sendgrid.com/",children:"p\xe1gina de consola de SendGrid"}),', ve a "Settings" -> "API Keys" desde la barra lateral.']}),"\n",(0,c.jsxs)(n.p,{children:['Haz clic en "Create API Key" en la esquina superior derecha de la p\xe1gina de claves de API. Escribe el nombre de la clave de API y personaliza "API Key Permission" seg\xfan tu caso de uso. Se requiere un ',(0,c.jsx)(n.code,{children:"Full Access"})," global o ",(0,c.jsx)(n.code,{children:"Restricted Access"})," con acceso completo a Mail Send antes de enviar correos electr\xf3nicos con esta clave de API."]}),"\n",(0,c.jsxs)(n.p,{children:["La clave de API se te presenta en la pantalla tan pronto como terminas el proceso de ",(0,c.jsx)(n.em,{children:"Create API Key"}),". Debes guardar esta clave de API en un lugar seguro porque esta es la \xfanica oportunidad que tienes para verla."]}),"\n",(0,c.jsx)(n.h2,{id:"configura-tu-conector",children:"Configura tu conector"}),"\n",(0,c.jsxs)(n.p,{children:["Completa el campo ",(0,c.jsx)(n.code,{children:"apiKey"}),' con la clave de API creada en la secci\xf3n "Crear claves de API".']}),"\n",(0,c.jsxs)(n.p,{children:["Completa los campos ",(0,c.jsx)(n.code,{children:"fromEmail"})," y ",(0,c.jsx)(n.code,{children:"fromName"})," con la ",(0,c.jsx)(n.em,{children:"Direcci\xf3n de Remitente"})," y el ",(0,c.jsx)(n.em,{children:"Apodo"})," de los remitentes. Puedes encontrar los detalles del remitente en la ",(0,c.jsx)(n.a,{href:"https://mc.sendgrid.com/senders",children:'p\xe1gina "Sender Management"'}),". ",(0,c.jsx)(n.code,{children:"fromName"})," es OPCIONAL, por lo que puedes omitirlo."]}),"\n",(0,c.jsx)(n.p,{children:"Puedes agregar m\xfaltiples plantillas de conector de correo de SendGrid para diferentes casos. Aqu\xed tienes un ejemplo de c\xf3mo agregar una sola plantilla:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Completa el campo ",(0,c.jsx)(n.code,{children:"subject"}),", que funciona como el t\xedtulo de los correos electr\xf3nicos."]}),"\n",(0,c.jsxs)(n.li,{children:["Completa el campo ",(0,c.jsx)(n.code,{children:"content"})," con contenidos de tipo cadena arbitrarios. No olvides dejar el marcador ",(0,c.jsx)(n.code,{children:"{{code}}"})," para el c\xf3digo de verificaci\xf3n aleatorio."]}),"\n",(0,c.jsxs)(n.li,{children:["Completa el campo ",(0,c.jsx)(n.code,{children:"usageType"})," con ",(0,c.jsx)(n.code,{children:"Register"}),", ",(0,c.jsx)(n.code,{children:"SignIn"}),", ",(0,c.jsx)(n.code,{children:"ForgotPassword"}),", ",(0,c.jsx)(n.code,{children:"Generic"})," para diferentes casos de uso."]}),"\n",(0,c.jsxs)(n.li,{children:["Completa el campo ",(0,c.jsx)(n.code,{children:"type"})," con ",(0,c.jsx)(n.code,{children:"text/plain"})," o ",(0,c.jsx)(n.code,{children:"text/html"})," para diferentes tipos de contenido."]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Para habilitar flujos de usuario completos, se requieren plantillas con ",(0,c.jsx)(n.code,{children:"usageType"})," ",(0,c.jsx)(n.code,{children:"Register"}),", ",(0,c.jsx)(n.code,{children:"SignIn"}),", ",(0,c.jsx)(n.code,{children:"ForgotPassword"})," y ",(0,c.jsx)(n.code,{children:"Generic"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"Aqu\xed tienes un ejemplo de JSON de plantilla de conector de SendGrid."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsonc",children:'[\n  {\n    "subject": "<register-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (register template)>",\n    "usageType": "Register",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<sign-in-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (sign-in template)>",\n    "usageType": "SignIn",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<forgot-password-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (forgot-password template)>",\n    "usageType": "ForgotPassword",\n    "type": "text/plain",\n  },\n  {\n    "subject": "<generic-template-subject>",\n    "content": "<Logto: Your verification code is {{code}}. (generic template)>",\n    "usageType": "Generic",\n    "type": "text/plain",\n  },\n]\n'})}),"\n",(0,c.jsx)(n.h3,{id:"probar-el-conector-de-correo-electr\xf3nico-de-sendgrid",children:"Probar el conector de correo electr\xf3nico de SendGrid"}),"\n",(0,c.jsx)(n.p,{children:'Puedes escribir una direcci\xf3n de correo electr\xf3nico y hacer clic en "Send" para ver si la configuraci\xf3n puede funcionar antes de "Save and Done".'}),"\n",(0,c.jsxs)(n.p,{children:["Eso es todo. No olvides ",(0,c.jsx)(n.a,{href:"/connectors/email-connectors/#enable-email-sign-up-or-sign-in/",children:"Habilitar el conector en la experiencia de inicio de sesi\xf3n"})]}),"\n",(0,c.jsx)(n.h3,{id:"tipos-de-configuraci\xf3n",children:"Tipos de configuraci\xf3n"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Nombre"}),(0,c.jsx)(n.th,{children:"Tipo"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"apiKey"}),(0,c.jsx)(n.td,{children:"string"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"fromEmail"}),(0,c.jsx)(n.td,{children:"string"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"fromName"}),(0,c.jsx)(n.td,{children:"string (OPCIONAL)"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"templates"}),(0,c.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Propiedades de la plantilla"}),(0,c.jsx)(n.th,{children:"Tipo"}),(0,c.jsx)(n.th,{children:"Valores del enum"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"subject"}),(0,c.jsx)(n.td,{children:"string"}),(0,c.jsx)(n.td,{children:"N/A"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"content"}),(0,c.jsx)(n.td,{children:"string"}),(0,c.jsx)(n.td,{children:"N/A"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"usageType"}),(0,c.jsx)(n.td,{children:"enum string"}),(0,c.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"type"}),(0,c.jsx)(n.td,{children:"enum string"}),(0,c.jsx)(n.td,{children:"'text/plain' | 'text/html'"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},40428:(e,n,r)=>{r.d(n,{Ay:()=>a,RM:()=>o});var i=r(86070),c=r(15658);const o=[];function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,c.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["En esta gu\xeda, asumimos que tienes conocimientos b\xe1sicos de los conectores de Logto. Si no los tienes, consulta la gu\xeda ",(0,i.jsx)(n.a,{href:"/connectors",children:"Configurar conectores"})," para comenzar."]})})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},15658:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var i=r(30758);const c={},o=i.createContext(c);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);