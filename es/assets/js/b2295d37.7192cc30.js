"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[4413],{62415:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>t,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"authorization/organization-template/README","title":"Plantilla de organizaci\xf3n","description":"Una plantilla de organizaci\xf3n es un dise\xf1o de control de acceso para aplicaciones multi-tenant. Se basa en los fundamentos del control de acceso basado en roles (RBAC) pero est\xe1 adaptada para entornos multi-tenant, donde las organizaciones representan negocios, grupos o usuarios.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/authorization/organization-template/README.mdx","sourceDirName":"authorization/organization-template","slug":"/authorization/organization-template/","permalink":"/es/authorization/organization-template/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/authorization/organization-template/README.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"docsSidebar","previous":{"title":"Protege los recursos de API con RBAC","permalink":"/es/authorization/role-based-access-control/protect-api-resources-with-rbac"},"next":{"title":"Configurar plantilla de organizaci\xf3n","permalink":"/es/authorization/organization-template/configure-organization-template"}}');var o=n(86070),r=n(15658);const s=n.p+"assets/images/organization-example-afa2da085d6afd66d90ecece13bedd5c.webp",c="data:image/webp;base64,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",d=n.p+"assets/images/organization-role-ae60e0000282d30a23f9c694c4074d5f.webp",l={sidebar_position:3},t="Plantilla de organizaci\xf3n",p={},u=[{value:"Permiso de organizaci\xf3n",id:"permiso-de-organizaci\xf3n",level:3},{value:"Rol de organizaci\xf3n",id:"rol-de-organizaci\xf3n",level:3},{value:"Plantilla de organizaci\xf3n",id:"plantilla-de-organizaci\xf3n-1",level:2}];function g(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"plantilla-de-organizaci\xf3n",children:"Plantilla de organizaci\xf3n"})}),"\n",(0,o.jsxs)(a.p,{children:["Una ",(0,o.jsx)(a.strong,{children:"plantilla de organizaci\xf3n"})," es un dise\xf1o de control de acceso para aplicaciones multi-tenant. Se basa en los fundamentos del control de acceso basado en roles (RBAC) pero est\xe1 adaptada para entornos multi-tenant, donde las organizaciones representan negocios, grupos o usuarios."]}),"\n",(0,o.jsx)(a.p,{children:"A nivel de organizaci\xf3n, se necesita control de acceso para gestionar permisos para recursos."}),"\n",(0,o.jsx)(a.p,{children:"Aqu\xed tienes un ejemplo usando Notion, una herramienta de colaboraci\xf3n popular y una aplicaci\xf3n t\xedpica multi-tenant. Admite varias caracter\xedsticas para autenticaci\xf3n y autorizaci\xf3n:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Puedes crear y unirte a m\xfaltiples espacios de trabajo con una sola cuenta, en lugar de necesitar cuentas separadas para cada espacio de trabajo."}),"\n",(0,o.jsxs)(a.li,{children:["Notion utiliza el ",(0,o.jsx)(a.strong,{children:"mismo conjunto"}),' de niveles de acceso, como "Propietario del espacio de trabajo" y "Miembro", en todos los espacios de trabajo, aunque podr\xedas esperar diferentes niveles de acceso para cada uno.']}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"En este cap\xedtulo, nos centraremos en la plantilla de organizaci\xf3n, que se refiere al dise\xf1o de autorizaci\xf3n a nivel de organizaci\xf3n."}),"\n",(0,o.jsx)(a.p,{children:"Para configurarlo correctamente, necesitas entender [c\xf3mo funcionan las organizaciones] y las diferentes entidades involucradas. Si a\xfan no lo has revisado, aseg\xfarate de leer esos cap\xedtulos."}),"\n",(0,o.jsx)(a.h1,{id:"entender-la-plantilla-de-organizaci\xf3n",children:"Entender la plantilla de organizaci\xf3n"}),"\n",(0,o.jsx)(a.h3,{id:"permiso-de-organizaci\xf3n",children:"Permiso de organizaci\xf3n"}),"\n",(0,o.jsx)(a.p,{children:"El permiso de organizaci\xf3n se refiere a la autorizaci\xf3n para realizar una acci\xf3n en el contexto de la organizaci\xf3n. Un permiso de organizaci\xf3n debe representarse como una cadena significativa, que tambi\xe9n sirva como nombre e identificador \xfanico."}),"\n",(0,o.jsx)("img",{src:c,width:"100%",alt:"Permisos de Organizaci\xf3n"}),"\n",(0,o.jsxs)(a.p,{children:["Por ejemplo, ",(0,o.jsx)(a.code,{children:"edit:resource"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["Los permisos de organizaci\xf3n no son significativos sin el contexto de una organizaci\xf3n. Por ejemplo, ",(0,o.jsx)(a.code,{children:"edit:resource"})," en el contexto de la organizaci\xf3n ",(0,o.jsx)(a.code,{children:"org1"})," es diferente de ",(0,o.jsx)(a.code,{children:"edit:resource"})," en el contexto de la organizaci\xf3n ",(0,o.jsx)(a.code,{children:"org2"})," porque apuntan a diferentes recursos (",(0,o.jsx)(a.code,{children:"org 1"})," vs ",(0,o.jsx)(a.code,{children:"org 2"}),")."]}),"\n",(0,o.jsx)(a.h3,{id:"rol-de-organizaci\xf3n",children:"Rol de organizaci\xf3n"}),"\n",(0,o.jsx)(a.p,{children:"Un rol de organizaci\xf3n es una colecci\xf3n de permisos de organizaci\xf3n o de API (permisos definidos directamente en recursos de API en Logto Cloud) que se pueden asignar a los usuarios."}),"\n",(0,o.jsx)("img",{src:d,width:"100%",alt:"Roles de Organizaci\xf3n"}),"\n",(0,o.jsxs)(a.p,{children:["Los roles de organizaci\xf3n no son significativos sin el contexto de una organizaci\xf3n. Por ejemplo, ",(0,o.jsx)(a.code,{children:"admin"})," en el contexto de la organizaci\xf3n ",(0,o.jsx)(a.code,{children:"org1"})," es diferente de ",(0,o.jsx)(a.code,{children:"admin"})," en el contexto de la organizaci\xf3n ",(0,o.jsx)(a.code,{children:"org2"}),"."]}),"\n",(0,o.jsxs)(a.admonition,{type:"note",children:[(0,o.jsx)(a.p,{children:(0,o.jsx)(a.strong,{children:"\xbfPuedo asignar permisos definidos a nivel de recurso de API a roles de organizaci\xf3n?"})}),(0,o.jsx)(a.p,{children:"S\xed, puedes asignar permisos de API a roles de organizaci\xf3n, no solo permisos a nivel de organizaci\xf3n."}),(0,o.jsx)(a.p,{children:"Los recursos de API en Logto Cloud protegen principalmente recursos a nivel de usuario / sistema, pero cuando los sistemas y las organizaciones comparten endpoints, Logto te permite asignar permisos de API a roles de organizaci\xf3n para mayor flexibilidad."})]}),"\n",(0,o.jsx)(a.h2,{id:"plantilla-de-organizaci\xf3n-1",children:"Plantilla de organizaci\xf3n"}),"\n",(0,o.jsxs)(a.p,{children:["La plantilla de organizaci\xf3n se refiere a una colecci\xf3n de permisos y roles de organizaci\xf3n que se aplican a cada ",(0,o.jsx)(a.a,{href:"/organizations",children:"organizaci\xf3n."})," Se considera como control de acceso basado en roles a nivel de organizaci\xf3n."]}),"\n",(0,o.jsx)(a.p,{children:'Piensa en una aplicaci\xf3n de colaboraci\xf3n t\xedpica, y naturalmente comparten la misma "plantilla" de control de acceso que define los niveles de acceso y lo que los usuarios pueden hacer en la organizaci\xf3n. Lo llamamos "plantilla de organizaci\xf3n" en Logto.'}),"\n",(0,o.jsx)(a.p,{children:"Tomemos un ejemplo para entender c\xf3mo se conecta todo:"}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"John"}),", ",(0,o.jsx)(a.strong,{children:"Sarah"})," est\xe1n en diferentes organizaciones con diferentes roles en el contexto de diferentes organizaciones."]}),"\n",(0,o.jsx)("img",{src:s,width:"100%",alt:"Plantilla de Organizaci\xf3n"}),"\n",(0,o.jsx)(a.p,{children:"De este diagrama, aqu\xed hay algunas cosas que necesitas saber:"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"John"})," est\xe1 afiliado a dos organizaciones, usando el correo electr\xf3nico ",(0,o.jsx)(a.code,{children:"john@email.com"})," como su identificador \xfanico. Ocupa el puesto de ",(0,o.jsx)(a.code,{children:"admin"})," en ",(0,o.jsx)(a.code,{children:"Organizaci\xf3n A"})," y es un ",(0,o.jsx)(a.code,{children:"invitado"})," en ",(0,o.jsx)(a.code,{children:"Organizaci\xf3n B"}),"."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Sarah"})," est\xe1 asociada con una sola organizaci\xf3n y usa el correo electr\xf3nico ",(0,o.jsx)(a.code,{children:"sarah@email.com"})," como su identificador \xfanico. Ella es la ",(0,o.jsx)(a.code,{children:"admin"})," de ",(0,o.jsx)(a.code,{children:"Organizaci\xf3n B"}),"."]}),"\n",(0,o.jsxs)(a.li,{children:["Los roles de ",(0,o.jsx)(a.code,{children:"Admin"}),", ",(0,o.jsx)(a.code,{children:"Miembro"})," e ",(0,o.jsx)(a.code,{children:"Invitado"})," est\xe1n designados dentro de las organizaciones y estos roles son consistentes en varias organizaciones."]}),"\n",(0,o.jsx)(a.li,{children:"Se pueden crear roles adicionales dentro de la configuraci\xf3n de la plantilla de organizaci\xf3n. Estos roles reci\xe9n creados se aplicar\xe1n y compartir\xe1n en todas las organizaciones."}),"\n"]}),"\n",(0,o.jsxs)(a.admonition,{type:"note",children:[(0,o.jsx)(a.p,{children:"En Logto, la plantilla de organizaci\xf3n es un modelo de control de acceso dise\xf1ado espec\xedficamente para organizaciones. Aunque se basa en el control de acceso basado en roles (RBAC), est\xe1 destinado a diferentes escenarios."}),(0,o.jsx)(a.p,{children:"Usa la plantilla de organizaci\xf3n cuando necesites configurar roles y permisos para una organizaci\xf3n."}),(0,o.jsx)(a.p,{children:"Para una aplicaci\xf3n B2C simple sin un nivel de organizaci\xf3n, utiliza RBAC a nivel de usuario / sistema en su lugar."}),(0,o.jsxs)(a.p,{children:["Puedes usar tanto la plantilla de organizaci\xf3n como el RBAC a nivel de usuario / sistema en Logto, permitiendo un enfoque m\xe1s robusto para satisfacer tus requisitos espec\xedficos de negocio y producto. Para entender RBAC, consulta esta ",(0,o.jsx)(a.a,{href:"/authorization/role-based-access-control/",children:"secci\xf3n"}),"."]})]})]})}function m(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},15658:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>c});var i=n(30758);const o={},r=i.createContext(o);function s(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);