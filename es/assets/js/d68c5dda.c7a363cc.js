"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[39652],{81982:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"developers/custom-token-claims/common-use-cases","title":"Casos de uso comunes","description":"En esta secci\xf3n, proporcionaremos algunos ejemplos para ayudarte a entender algunos escenarios donde las reclamaciones de tokens personalizados pueden ser \xfatiles, ofreci\xe9ndote algunas referencias. De esta manera, cuando encuentres dificultades en la gesti\xf3n de acceso, podr\xe1s evaluar si las reclamaciones de tokens personalizados pueden brindarte conveniencia.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/developers/custom-token-claims/common-use-cases.mdx","sourceDirName":"developers/custom-token-claims","slug":"/developers/custom-token-claims/common-use-cases","permalink":"/es/developers/custom-token-claims/common-use-cases","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/developers/custom-token-claims/common-use-cases.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"common-use-cases","title":"Casos de uso comunes","sidebar_label":"Casos de uso comunes","sidebar_position":2},"sidebar":"docsSidebar","previous":{"title":"Reclamos personalizados de tokens","permalink":"/es/developers/custom-token-claims/"},"next":{"title":"Crear un script de reclamos personalizados de token","permalink":"/es/developers/custom-token-claims/create-script"}}');var n=s(86070),r=s(15658);const c={id:"common-use-cases",title:"Casos de uso comunes",sidebar_label:"Casos de uso comunes",sidebar_position:2},i="Casos de uso comunes",t={},l=[{value:"Hacer posible el control de acceso basado en atributos (ABAC)",id:"hacer-posible-el-control-de-acceso-basado-en-atributos-abac",level:2},{value:"Bloquear manualmente la emisi\xf3n de tokens",id:"bloquear-manualmente-la-emisi\xf3n-de-tokens",level:2}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"casos-de-uso-comunes",children:"Casos de uso comunes"})}),"\n",(0,n.jsx)(a.p,{children:"En esta secci\xf3n, proporcionaremos algunos ejemplos para ayudarte a entender algunos escenarios donde las reclamaciones de tokens personalizados pueden ser \xfatiles, ofreci\xe9ndote algunas referencias. De esta manera, cuando encuentres dificultades en la gesti\xf3n de acceso, podr\xe1s evaluar si las reclamaciones de tokens personalizados pueden brindarte conveniencia."}),"\n",(0,n.jsx)(a.h2,{id:"hacer-posible-el-control-de-acceso-basado-en-atributos-abac",children:"Hacer posible el control de acceso basado en atributos (ABAC)"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://auth.wiki/abac",children:"Control de acceso basado en atributos (ABAC)"})," es un modelo de control de acceso que utiliza atributos (como roles de usuario, propiedades de recursos y condiciones ambientales) para tomar decisiones de control de acceso. Es una forma flexible y din\xe1mica de gestionar el acceso a recursos protegidos."]}),"\n",(0,n.jsx)(a.p,{children:"Supongamos que est\xe1s construyendo una aplicaci\xf3n, y el lanzamiento de la aplicaci\xf3n se divide en dos fases: beta p\xfablica y lanzamiento oficial. Incluso despu\xe9s de que la aplicaci\xf3n se lance oficialmente, deseas que los usuarios antiguos que participaron en la beta p\xfablica contin\xfaen usando las funciones de pago."}),"\n",(0,n.jsxs)(a.p,{children:["Despu\xe9s de que la aplicaci\xf3n se lance oficialmente, utilizas la funci\xf3n de ",(0,n.jsx)(a.a,{href:"https://auth.wiki/rbac",children:"control de acceso basado en roles (RBAC)"})," de Logto para implementar el control de acceso para el uso de funciones de pago. Para verificar f\xe1cilmente si un usuario ya estaba usando la aplicaci\xf3n durante la fase beta p\xfablica, puedes usar el m\xe9todo ",(0,n.jsx)(a.code,{children:"getCustomJwtClaims()"})," para agregar una reclamaci\xf3n ",(0,n.jsx)(a.code,{children:"createdAt"})," en la carga \xfatil del token."]}),"\n",(0,n.jsx)(a.p,{children:"Luego, al hacer el control de acceso en tus APIs protegidas, necesitas permitir tokens de acceso que cumplan con cualquiera de las siguientes condiciones:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"Con el contexto de RBAC, teniendo el alcance para acceder a recursos de pago."}),"\n",(0,n.jsxs)(a.li,{children:["El ",(0,n.jsx)(a.code,{children:"createdAt"})," es anterior al tiempo de finalizaci\xf3n de la fase beta p\xfablica."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Si no existe la funci\xf3n de reclamaciones de tokens personalizados, al verificar permisos para recursos de API protegidos, es necesario llamar a la Management API de Logto para verificar si el usuario con el token de acceso actual tiene los permisos correspondientes al rol requerido por un recurso de API determinado."}),"\n",(0,n.jsx)(a.p,{children:"En un escenario similar, supongamos que tu aplicaci\xf3n muestra deseos de cumplea\xf1os en la p\xe1gina de inicio de sesi\xf3n si se acerca el cumplea\xf1os del usuario. Puedes usar reclamaciones de tokens personalizados para agregar un campo de cumplea\xf1os a la carga \xfatil del token, que se puede usar para determinar si mostrar un mensaje espec\xedfico."}),"\n",(0,n.jsx)(a.h2,{id:"bloquear-manualmente-la-emisi\xf3n-de-tokens",children:"Bloquear manualmente la emisi\xf3n de tokens"}),"\n",(0,n.jsxs)(a.p,{children:["Supongamos que Joe est\xe1 ejecutando un juego en l\xednea y utiliza Logto como un sistema de ",(0,n.jsx)(a.a,{href:"https://auth.wiki/iam",children:"gesti\xf3n de identidad y acceso (IAM)"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"Supongamos que este juego requiere recargas para comprar tiempo de juego. Joe registra el saldo de cada usuario en su servicio de juego y deduce continuamente del saldo a medida que se acumula el tiempo de juego. Joe quiere forzar a los jugadores a cerrar sesi\xf3n cuando su saldo de cuenta se agote para alentarlos a recargar."}),"\n",(0,n.jsx)(a.p,{children:"En este punto, Joe tambi\xe9n puede usar la funci\xf3n de reclamaciones de tokens personalizados proporcionada por Logto para lograr esto:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["En el script, se puede usar una llamada a una API externa ",(0,n.jsx)(a.a,{href:"/developers/custom-token-claims/create-script/#step-3-fetch-external-data",children:"obtener datos externos"})," para recuperar el saldo actual del jugador desde el servidor de juegos de Joe."]}),"\n",(0,n.jsxs)(a.li,{children:["Si el saldo es menor o igual a 0, se puede usar el m\xe9todo ",(0,n.jsx)(a.a,{href:"/developers/custom-token-claims/create-script/#api",children:(0,n.jsx)(a.code,{children:"api.denyAccess()"})})," para bloquear la emisi\xf3n de tokens."]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"En este momento, dado que no se puede obtener un nuevo token de acceso v\xe1lido, el jugador ser\xe1 forzado a cerrar sesi\xf3n del juego."})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},15658:(e,a,s)=>{s.d(a,{R:()=>c,x:()=>i});var o=s(30758);const n={},r=o.createContext(n);function c(e){const a=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(r.Provider,{value:a},e.children)}}}]);