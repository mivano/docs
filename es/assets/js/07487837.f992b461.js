"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[77807],{51173:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"developers/signing-keys","title":"Claves de firma","description":"Las claves de firma de Logto OIDC, tambi\xe9n conocidas como \\"claves privadas de OIDC\\" y \\"claves de cookies de OIDC\\", son las claves de firma utilizadas para firmar tokens JWT (tokens de acceso y tokens de ID) y cookies del navegador en sesiones de inicio de sesi\xf3n de Logto. Estas claves de firma se generan al sembrar la base de datos de Logto (c\xf3digo abierto) o al crear un nuevo inquilino (Cloud) y se pueden gestionar a trav\xe9s de CLI (c\xf3digo abierto), Management APIs o la interfaz de usuario de la consola.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/developers/signing-keys.mdx","sourceDirName":"developers","slug":"/developers/signing-keys","permalink":"/es/developers/signing-keys","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/developers/signing-keys.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"signing-keys","title":"Claves de firma","sidebar_label":"Claves de firma","sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"Suplantaci\xf3n de usuario","permalink":"/es/developers/user-impersonation"},"next":{"title":"Webhooks","permalink":"/es/developers/webhooks/"}}');var o=i(86070),n=i(15658);const r={id:"signing-keys",title:"Claves de firma",sidebar_label:"Claves de firma",sidebar_position:4},d="Claves de firma",l={},t=[{value:"\xbfC\xf3mo funciona?",id:"c\xf3mo-funciona",level:2},{value:"Rotar claves de firma desde la interfaz de usuario de la consola",id:"rotar-claves-de-firma-desde-la-interfaz-de-usuario-de-la-consola",level:2}];function c(e){const a={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{CloudLink:i}=a;return i||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"claves-de-firma",children:"Claves de firma"})}),"\n",(0,o.jsx)(a.p,{children:'Las claves de firma de Logto OIDC, tambi\xe9n conocidas como "claves privadas de OIDC" y "claves de cookies de OIDC", son las claves de firma utilizadas para firmar tokens JWT (tokens de acceso y tokens de ID) y cookies del navegador en sesiones de inicio de sesi\xf3n de Logto. Estas claves de firma se generan al sembrar la base de datos de Logto (c\xf3digo abierto) o al crear un nuevo inquilino (Cloud) y se pueden gestionar a trav\xe9s de CLI (c\xf3digo abierto), Management APIs o la interfaz de usuario de la consola.'}),"\n",(0,o.jsx)(a.p,{children:"Por defecto, Logto utiliza el algoritmo de curva el\xedptica (EC) para generar firmas digitales. Sin embargo, considerando que los usuarios a menudo necesitan verificar firmas JWT y muchas herramientas antiguas no admiten el algoritmo EC (solo admiten RSA), hemos implementado la funcionalidad para rotar claves privadas y permitir a los usuarios elegir el algoritmo de firma (incluyendo tanto RSA como EC). Esto asegura la compatibilidad con servicios que utilizan herramientas de verificaci\xf3n de firmas obsoletas."}),"\n",(0,o.jsx)(a.admonition,{type:"note",children:(0,o.jsx)(a.p,{children:"Te\xf3ricamente, las claves de firma no deber\xedan filtrarse y no tienen un tiempo de expiraci\xf3n, lo que significa que no hay necesidad de rotarlas. Sin embargo, rotar peri\xf3dicamente la clave de firma despu\xe9s de un cierto per\xedodo puede mejorar la seguridad."})}),"\n",(0,o.jsx)(a.h2,{id:"c\xf3mo-funciona",children:"\xbfC\xf3mo funciona?"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Clave privada de OIDC"}),"\nAl inicializar una instancia de Logto, se genera autom\xe1ticamente un par de clave p\xfablica y clave privada y se registran en el proveedor subyacente de OIDC. Por lo tanto, cuando Logto emite un nuevo token JWT (token de acceso o token de ID), el token se firma con la clave privada. Mientras tanto, cualquier aplicaci\xf3n cliente que reciba un token JWT puede usar la clave p\xfablica emparejada para verificar la firma del token, con el fin de asegurar que el token no sea manipulado por terceros. La clave privada est\xe1 protegida en el servidor de Logto. La clave p\xfablica, sin embargo, como su nombre indica, es p\xfablica para todos y se puede acceder a trav\xe9s de la interfaz ",(0,o.jsx)(a.code,{children:"/oidc/jwks"})," del punto final de OIDC. Se puede especificar un algoritmo de clave de firma al generar la clave privada, y Logto utiliza el algoritmo EC (Curva El\xedptica) por defecto. Los usuarios administradores pueden cambiar el algoritmo predeterminado a RSA (Rivest-Shamir-Adleman) rotando las claves privadas."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Clave de cookie de OIDC"}),'\nCuando el usuario inicia un flujo de inicio de sesi\xf3n o registro, se crear\xe1 una "sesi\xf3n OIDC" en el servidor, as\xed como un conjunto de cookies del navegador. Con estas cookies, el navegador puede solicitar a Logto Experience API realizar una serie de interacciones en nombre del usuario, como iniciar sesi\xf3n, registrarse y restablecer la contrase\xf1a. Sin embargo, a diferencia de los tokens JWT, las cookies solo son firmadas y verificadas por el servicio OIDC de Logto, no se requieren medidas de criptograf\xeda asim\xe9trica. Por lo tanto, no tenemos claves p\xfablicas emparejadas para las claves de firma de cookies, ni algoritmos de cifrado asim\xe9trico.']}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"rotar-claves-de-firma-desde-la-interfaz-de-usuario-de-la-consola",children:"Rotar claves de firma desde la interfaz de usuario de la consola"}),"\n",(0,o.jsx)(a.p,{children:'Logto introduce una funci\xf3n de "Rotaci\xf3n de Claves de Firma", que te permite crear una nueva clave privada de OIDC y una clave de cookie en tu inquilino.'}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsxs)(a.p,{children:["Navega a ",(0,o.jsx)(i,{to:"/signing-keys",children:"Consola > Claves de firma"}),". Desde all\xed, puedes gestionar tanto las claves privadas de OIDC como las claves de cookies de OIDC."]}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsx)(a.p,{children:'Para rotar la clave de firma, haz clic en el bot\xf3n "Rotar claves privadas" o "Rotar claves de cookies". Al rotar las claves privadas, tienes la opci\xf3n de cambiar el algoritmo de firma.'}),"\n"]}),"\n",(0,o.jsxs)(a.li,{children:["\n",(0,o.jsx)(a.p,{children:"Y encontrar\xe1s una tabla que lista todas las claves de firma en uso. Nota: Puedes eliminar la clave anterior, pero no puedes eliminar la actual."}),"\n",(0,o.jsxs)(a.table,{children:[(0,o.jsx)(a.thead,{children:(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.th,{children:"Estado"}),(0,o.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(a.tbody,{children:[(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Actual"}),(0,o.jsx)(a.td,{children:"Esto indica que esta clave est\xe1 actualmente en uso activo dentro de tus aplicaciones y APIs."})]}),(0,o.jsxs)(a.tr,{children:[(0,o.jsx)(a.td,{children:"Anterior"}),(0,o.jsx)(a.td,{children:"Se refiere a una clave que se utiliz\xf3 anteriormente pero ha sido rotada. Los tokens existentes con esta clave de firma siguen siendo v\xe1lidos."})]})]})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"Recuerda que la rotaci\xf3n implica las siguientes tres acciones:"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Crear una nueva clave de firma"}),": Esto requerir\xe1 que todas tus ",(0,o.jsx)(a.strong,{children:"aplicaciones"})," y ",(0,o.jsx)(a.strong,{children:"APIs"})," adopten la nueva clave de firma."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Rotar la clave actual"}),': La clave existente se designar\xe1 como "anterior" despu\xe9s de la rotaci\xf3n y no ser\xe1 utilizada por aplicaciones y APIs reci\xe9n creadas. Sin embargo, los tokens firmados con esta clave seguir\xe1n siendo v\xe1lidos.']}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Eliminar tu clave anterior"}),': Las claves etiquetadas como "anteriores" ser\xe1n revocadas y eliminadas de la tabla.']}),"\n"]}),"\n",(0,o.jsxs)(a.admonition,{type:"warning",children:[(0,o.jsx)(a.p,{children:"Nunca rotar las claves de firma consecutivamente (dos o m\xe1s veces), ya que esto puede invalidar TODOS los tokens emitidos."}),(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Para los usuarios de OSS, despu\xe9s de rotar la clave de firma, se requiere un reinicio de la instancia de Logto para que la nueva clave de firma surta efecto."}),"\n",(0,o.jsx)(a.li,{children:"Para los usuarios de Cloud, la nueva clave de firma surte efecto inmediatamente despu\xe9s de la rotaci\xf3n, pero aseg\xfarate de no rotar la clave de firma varias veces consecutivamente."}),"\n"]})]})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},15658:(e,a,i)=>{i.d(a,{R:()=>r,x:()=>d});var s=i(30758);const o={},n=s.createContext(o);function r(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);