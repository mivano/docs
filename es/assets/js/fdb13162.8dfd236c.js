"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[10090],{91887:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>p});const o=JSON.parse('{"id":"organizations/just-in-time-provisioning","title":"Aprovisionamiento Just-in-Time","description":"En Logto, el aprovisionamiento Just-in-Time (JIT) es un proceso utilizado para asignar membres\xedas y roles de organizaci\xf3n a los usuarios sobre la marcha a medida que inician sesi\xf3n en el sistema por primera vez. En lugar de aprovisionar cuentas para los usuarios por adelantado, el aprovisionamiento JIT configura las cuentas de usuario necesarias de manera din\xe1mica cuando un usuario se autentica.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/organizations/just-in-time-provisioning.mdx","sourceDirName":"organizations","slug":"/organizations/just-in-time-provisioning","permalink":"/es/organizations/just-in-time-provisioning","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/organizations/just-in-time-provisioning.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Gestionar organizaci\xf3n","permalink":"/es/organizations/organization-management"},"next":{"title":"Organizaciones","permalink":"/es/organizations/"}}');var a=n(86070),r=n(15658);const s=n.p+"assets/images/jit-conflict-20c8c47ff22e7c515772821ffeea1c7d.webp",c=n.p+"assets/images/jit-email-95f7b7cc852ed195e3e970376e758b73.webp",d=n.p+"assets/images/jit-sso-5538460b969a9895cd94f89f4235126d.webp",t={sidebar_position:4},l="Aprovisionamiento Just-in-Time",u={},p=[{value:"C\xf3mo funciona",id:"c\xf3mo-funciona",level:2},{value:"Beneficios del aprovisionamiento JIT",id:"beneficios-del-aprovisionamiento-jit",level:3},{value:"Diferencias entre JIT y sincronizaci\xf3n de directorio",id:"diferencias-entre-jit-y-sincronizaci\xf3n-de-directorio",level:3},{value:"Aprovisionamiento just-in-time en Logto",id:"aprovisionamiento-just-in-time-en-logto",level:2},{value:"Aprovisionamiento SSO empresarial",id:"aprovisionamiento-sso-empresarial",level:3},{value:"Aprovisionamiento de dominio de correo electr\xf3nico",id:"aprovisionamiento-de-dominio-de-correo-electr\xf3nico",level:3},{value:"Experiencia de inicio de sesi\xf3n por correo electr\xf3nico cuando el aprovisionamiento de dominio de correo electr\xf3nico est\xe1 habilitado",id:"experiencia-de-inicio-de-sesi\xf3n-por-correo-electr\xf3nico-cuando-el-aprovisionamiento-de-dominio-de-correo-electr\xf3nico-est\xe1-habilitado",level:4},{value:"Experiencia de inicio de sesi\xf3n social cuando el aprovisionamiento de dominio de correo electr\xf3nico est\xe1 habilitado",id:"experiencia-de-inicio-de-sesi\xf3n-social-cuando-el-aprovisionamiento-de-dominio-de-correo-electr\xf3nico-est\xe1-habilitado",level:4},{value:"Manejo del posible conflicto entre m\xe9todos de aprovisionamiento JIT",id:"manejo-del-posible-conflicto-entre-m\xe9todos-de-aprovisionamiento-jit",level:3},{value:"Roles predeterminados de la organizaci\xf3n",id:"roles-predeterminados-de-la-organizaci\xf3n",level:2}];function m(e){const i={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"aprovisionamiento-just-in-time",children:"Aprovisionamiento Just-in-Time"})}),"\n",(0,a.jsx)(i.p,{children:"En Logto, el aprovisionamiento Just-in-Time (JIT) es un proceso utilizado para asignar membres\xedas y roles de organizaci\xf3n a los usuarios sobre la marcha a medida que inician sesi\xf3n en el sistema por primera vez. En lugar de aprovisionar cuentas para los usuarios por adelantado, el aprovisionamiento JIT configura las cuentas de usuario necesarias de manera din\xe1mica cuando un usuario se autentica."}),"\n",(0,a.jsx)(i.h2,{id:"c\xf3mo-funciona",children:"C\xf3mo funciona"}),"\n",(0,a.jsx)(i.p,{children:"Aqu\xed tienes una visi\xf3n general del proceso de aprovisionamiento JIT:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Autenticaci\xf3n del usuario"}),": El usuario intenta iniciar sesi\xf3n en una aplicaci\xf3n o servicio, y el proveedor de identidad (Logto) autentica al usuario."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Inicio de sesi\xf3n o creaci\xf3n de cuenta"}),": Dependiendo del estado del usuario, Logto inicia sesi\xf3n al usuario, crea una nueva cuenta o a\xf1ade una nueva identidad a una cuenta existente."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Aprovisionamiento"}),": Si el usuario o su identidad es nuevo, Logto desencadena el proceso de aprovisionamiento."]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"Aqu\xed tienes un diagrama de flujo detallado del aprovisionamiento JIT:"}),"\n",(0,a.jsx)(i.p,{children:"El aprovisionamiento JIT es una caracter\xedstica \xfatil para productos B2B y de multi-tenancy. Facilita la incorporaci\xf3n de miembros de inquilinos y no requiere intervenci\xf3n administrativa."}),"\n",(0,a.jsx)(i.p,{children:"Por ejemplo, si has incorporado un negocio y deseas que sus empleados inicien sesi\xf3n de manera segura en tu producto y se unan a la organizaci\xf3n con el acceso correcto de roles, hay varias formas de lograrlo. Exploremos las posibles soluciones que Logto proporciona y c\xf3mo JIT puede ayudar."}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Escenario"}),(0,a.jsx)(i.th,{children:"Tipos de usuario"}),(0,a.jsx)(i.th,{children:"Automatizado"}),(0,a.jsx)(i.th,{children:"Comportamiento"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Invitaci\xf3n de administrador"}),(0,a.jsx)(i.td,{children:"Nuevos y existentes"}),(0,a.jsx)(i.td,{}),(0,a.jsx)(i.td,{children:"Los usuarios pueden recibir una invitaci\xf3n por correo electr\xf3nico para unirse a la organizaci\xf3n."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Creaci\xf3n o importaci\xf3n de usuario de Management API"}),(0,a.jsx)(i.td,{children:"Nuevos y existentes"}),(0,a.jsx)(i.td,{}),(0,a.jsx)(i.td,{children:"Los usuarios pueden usar una cuenta de usuario pre-creada para unirse a la organizaci\xf3n."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Aprovisionamiento just-in-time SSO"}),(0,a.jsx)(i.td,{children:"Nuevos y existentes"}),(0,a.jsx)(i.td,{children:"\u2705"}),(0,a.jsx)(i.td,{children:"Los usuarios que inician sesi\xf3n con SSO por primera vez pueden unirse a la organizaci\xf3n."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Aprovisionamiento just-in-time de dominio de correo electr\xf3nico"}),(0,a.jsx)(i.td,{children:"Nuevos"}),(0,a.jsx)(i.td,{children:"\u2705"}),(0,a.jsx)(i.td,{children:"Los usuarios con dominios verificados espec\xedficos que inician sesi\xf3n por primera vez pueden unirse a la organizaci\xf3n."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"Sincronizaci\xf3n de directorio"}),(0,a.jsx)(i.td,{children:"Nuevos y existentes"}),(0,a.jsx)(i.td,{children:"\u2705"}),(0,a.jsx)(i.td,{children:"Usa la funcionalidad de sincronizaci\xf3n de directorio del IdP para preaprovisionar usuarios en la aplicaci\xf3n por adelantado."})]})]})]}),"\n",(0,a.jsxs)(i.p,{children:["Actualmente, Logto admite ",(0,a.jsx)(i.strong,{children:"aprovisionamiento just-in-time SSO"})," y ",(0,a.jsx)(i.strong,{children:"aprovisionamiento just-in-time de dominio de correo electr\xf3nico"}),"."]}),"\n",(0,a.jsx)(i.h3,{id:"beneficios-del-aprovisionamiento-jit",children:"Beneficios del aprovisionamiento JIT"}),"\n",(0,a.jsx)(i.p,{children:"El aprovisionamiento JIT ofrece varios beneficios:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Eficiencia"}),": Reduce la carga administrativa de crear y gestionar cuentas de usuario manualmente."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Escalabilidad"}),": Maneja autom\xe1ticamente la creaci\xf3n de cuentas para un gran n\xfamero de usuarios sin configuraci\xf3n previa."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"En tiempo real"}),": Asegura que los usuarios puedan acceder a los recursos tan pronto como se autentiquen, sin demoras."]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"Hemos implementado las caracter\xedsticas JIT en su nivel m\xe1s escalable y seguro para simplificar y acelerar el proceso de aprovisionamiento para ti. Sin embargo, dado que los sistemas de aprovisionamiento pueden ser complejos y adaptados a las necesidades espec\xedficas de tus clientes, es esencial combinar las caracter\xedsticas JIT preconstruidas de Logto, tu dise\xf1o cuidadoso del sistema y el Logto Management API. Este enfoque integrado te ayudar\xe1 a construir un sistema de aprovisionamiento robusto y eficiente."}),"\n",(0,a.jsx)(i.h3,{id:"diferencias-entre-jit-y-sincronizaci\xf3n-de-directorio",children:"Diferencias entre JIT y sincronizaci\xf3n de directorio"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["El ",(0,a.jsx)(i.strong,{children:"aprovisionamiento JIT"})," se activa por acciones iniciadas por el usuario, mientras que la ",(0,a.jsx)(i.strong,{children:"sincronizaci\xf3n de directorio"})," puede ser tanto iniciada por el usuario como por el sistema (programada o en tiempo real)."]}),"\n",(0,a.jsxs)(i.li,{children:["El ",(0,a.jsx)(i.strong,{children:"aprovisionamiento JIT"})," no impone la asignaci\xf3n de membres\xeda o roles, mientras que la ",(0,a.jsx)(i.strong,{children:"sincronizaci\xf3n de directorio"})," puede imponerlas."]}),"\n",(0,a.jsxs)(i.li,{children:["El ",(0,a.jsx)(i.strong,{children:"aprovisionamiento JIT"})," es m\xe1s adecuado para la incorporaci\xf3n de nuevos usuarios independientemente de la fuente de identidad del usuario, mientras que la ",(0,a.jsx)(i.strong,{children:"sincronizaci\xf3n de directorio"})," es m\xe1s adecuada para cuentas de usuario gestionadas."]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"En resumen, el aprovisionamiento JIT es un enfoque m\xe1s flexible y amigable para el usuario para la incorporaci\xf3n de usuarios, ya que puede dar a los usuarios la libertad de unirse o abandonar organizaciones y te permite manejar los usuarios existentes a tu discreci\xf3n."}),"\n",(0,a.jsx)(i.h2,{id:"aprovisionamiento-just-in-time-en-logto",children:"Aprovisionamiento just-in-time en Logto"}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"El aprovisionamiento just-in-time (JIT) solo se activa para acciones iniciadas por el usuario y no afecta las interacciones con el Logto Management API."})}),"\n",(0,a.jsx)(i.h3,{id:"aprovisionamiento-sso-empresarial",children:"Aprovisionamiento SSO empresarial"}),"\n",(0,a.jsx)(i.p,{children:"Si tienes configurado el SSO empresarial en Logto, puedes seleccionar tu SSO empresarial de organizaci\xf3n para habilitar el aprovisionamiento just-in-time."}),"\n",(0,a.jsx)(i.p,{children:"Cuando se cumple una de las siguientes condiciones:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Nuevos usuarios inician sesi\xf3n a trav\xe9s de SSO empresarial;"}),"\n",(0,a.jsx)(i.li,{children:"Usuarios existentes inician sesi\xf3n a trav\xe9s de SSO empresarial por primera vez."}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"Autom\xe1ticamente se unir\xe1n a la organizaci\xf3n y obtendr\xe1n roles predeterminados de la organizaci\xf3n."}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:d,width:"100%",alt:"JIT SSO"})}),"\n",(0,a.jsx)(i.h3,{id:"aprovisionamiento-de-dominio-de-correo-electr\xf3nico",children:"Aprovisionamiento de dominio de correo electr\xf3nico"}),"\n",(0,a.jsx)(i.p,{children:"Si tu cliente no tiene un SSO empresarial dedicado, a\xfan puedes usar dominios de correo electr\xf3nico para el aprovisionamiento just-in-time."}),"\n",(0,a.jsx)(i.p,{children:"Cuando un usuario se registra, si su direcci\xf3n de correo electr\xf3nico verificada coincide con los dominios de correo electr\xf3nico JIT configurados a nivel de la organizaci\xf3n, ser\xe1n aprovisionados a las organizaciones correspondientes con los roles correspondientes."}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:c,width:"100%",alt:"JIT email"})}),"\n",(0,a.jsx)(i.p,{children:"La coincidencia de direcciones puede reconocer la direcci\xf3n de correo electr\xf3nico verificada de todas las fuentes de identidad que no son SSO empresarial, incluyendo:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsx)(i.li,{children:"Autenticaci\xf3n de registro por correo electr\xf3nico"}),"\n",(0,a.jsx)(i.li,{children:"Autenticaci\xf3n de registro social"}),"\n"]}),"\n",(0,a.jsxs)(i.admonition,{type:"note",children:[(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"\xbfPor qu\xe9 el aprovisionamiento de dominio de correo electr\xf3nico no se aplica al proceso de inicio de sesi\xf3n de usuarios existentes?"})}),(0,a.jsx)(i.p,{children:"El inicio de sesi\xf3n de usuarios existentes requiere un control adicional para determinar si pueden ser aprovisionados a una organizaci\xf3n espec\xedfica o se les puede otorgar un rol. Este proceso es din\xe1mico y depende de casos de uso espec\xedficos y necesidades comerciales, como la frecuencia de inicio de sesi\xf3n y las pol\xedticas a nivel de organizaci\xf3n."}),(0,a.jsx)(i.p,{children:'Por ejemplo, si habilitas el aprovisionamiento de dominio de correo electr\xf3nico para un usuario existente y luego deseas incorporar a otro grupo de usuarios con un rol diferente, \xbfdeber\xeda el usuario previamente incorporado recibir el nuevo rol que configuraste? Esto crea un escenario complejo para "actualizaciones just-in-time". El comportamiento exacto a menudo depende de c\xf3mo se configuran la aplicaci\xf3n y la integraci\xf3n del IdP. Te damos este control, permiti\xe9ndote dise\xf1ar tu sistema de aprovisionamiento libremente y manejar los escenarios m\xe1s frecuentes para la creaci\xf3n de nuevas cuentas y la incorporaci\xf3n a organizaciones.'})]}),"\n",(0,a.jsx)(i.h4,{id:"experiencia-de-inicio-de-sesi\xf3n-por-correo-electr\xf3nico-cuando-el-aprovisionamiento-de-dominio-de-correo-electr\xf3nico-est\xe1-habilitado",children:"Experiencia de inicio de sesi\xf3n por correo electr\xf3nico cuando el aprovisionamiento de dominio de correo electr\xf3nico est\xe1 habilitado"}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Estado del usuario"}),(0,a.jsx)(i.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"El usuario no existe y se registra con correo electr\xf3nico"}),(0,a.jsx)(i.td,{children:"El usuario es creado y se une autom\xe1ticamente a la organizaci\xf3n correspondiente con roles apropiados."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"El usuario existe con la misma direcci\xf3n de correo electr\xf3nico verificada que los dominios de correo electr\xf3nico aprovisionados"}),(0,a.jsx)(i.td,{children:"Experiencia normal de inicio de sesi\xf3n por correo electr\xf3nico."})]})]})]}),"\n",(0,a.jsx)(i.h4,{id:"experiencia-de-inicio-de-sesi\xf3n-social-cuando-el-aprovisionamiento-de-dominio-de-correo-electr\xf3nico-est\xe1-habilitado",children:"Experiencia de inicio de sesi\xf3n social cuando el aprovisionamiento de dominio de correo electr\xf3nico est\xe1 habilitado"}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Estado del usuario"}),(0,a.jsx)(i.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"El usuario no existe, se registra con una cuenta social usando un correo electr\xf3nico verificado"}),(0,a.jsx)(i.td,{children:"El usuario es creado y se une autom\xe1ticamente a la organizaci\xf3n correspondiente con roles apropiados."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"El usuario no existe, se registra con una cuenta social usando un correo electr\xf3nico no verificado o sin correo electr\xf3nico"}),(0,a.jsx)(i.td,{children:"Experiencia normal de registro social."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"El usuario existe con la misma direcci\xf3n de correo electr\xf3nico verificada que los dominios de correo electr\xf3nico aprovisionados, inicia sesi\xf3n a trav\xe9s de una nueva identidad social"}),(0,a.jsx)(i.td,{children:"Experiencia normal de inicio de sesi\xf3n social."})]})]})]}),"\n",(0,a.jsx)(i.h3,{id:"manejo-del-posible-conflicto-entre-m\xe9todos-de-aprovisionamiento-jit",children:"Manejo del posible conflicto entre m\xe9todos de aprovisionamiento JIT"}),"\n",(0,a.jsx)(i.p,{children:"Si inicialmente configuras el aprovisionamiento de dominio de correo electr\xf3nico y luego configuras un SSO empresarial con el mismo dominio de correo electr\xf3nico, esto es lo que sucede:"}),"\n",(0,a.jsx)(i.p,{children:"Cuando un usuario ingresa su direcci\xf3n de correo electr\xf3nico, ser\xe1 redirigido al proveedor de identidad SSO, omitiendo la autenticaci\xf3n por correo electr\xf3nico. Esto significa que el aprovisionamiento de dominio de correo electr\xf3nico no se activar\xe1."}),"\n",(0,a.jsx)(i.p,{children:"Para abordar esto, mostraremos un mensaje de advertencia al configurar. Aseg\xfarate de manejar este caso seleccionando el conector SSO correcto para habilitar el aprovisionamiento SSO empresarial y no depender del aprovisionamiento de dominio de correo electr\xf3nico."}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:s,width:"100%",alt:"JIT conflict"})}),"\n",(0,a.jsx)(i.h2,{id:"roles-predeterminados-de-la-organizaci\xf3n",children:"Roles predeterminados de la organizaci\xf3n"}),"\n",(0,a.jsx)(i.p,{children:"Al aprovisionar usuarios en una organizaci\xf3n, puedes establecer sus roles predeterminados de la organizaci\xf3n. La lista de roles proviene de la plantilla de la organizaci\xf3n, y puedes elegir un rol o dejarlo vac\xedo."})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},15658:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>c});var o=n(30758);const a={},r=o.createContext(a);function s(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);