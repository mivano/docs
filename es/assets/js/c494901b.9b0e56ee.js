"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[12191],{64046:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"user-management/user-data","title":"Estructura de datos del usuario","description":"Los usuarios son las entidades centrales en el servicio de identidad. En Logto, incluyen datos b\xe1sicos de autenticaci\xf3n basados en el protocolo OpenID Connect, junto con datos personalizados.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/user-management/user-data.mdx","sourceDirName":"user-management","slug":"/user-management/user-data","permalink":"/es/user-management/user-data","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/user-management/user-data.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Gesti\xf3n de usuarios","permalink":"/es/user-management/"},"next":{"title":"Gestionar usuarios","permalink":"/es/user-management/manage-users"}}');var a=s(86070),r=s(15658);const d={sidebar_position:1},o="Estructura de datos del usuario",l={},c=[{value:"Perfil del usuario",id:"perfil-del-usuario",level:2},{value:"Datos b\xe1sicos",id:"datos-b\xe1sicos",level:2},{value:"id",id:"id",level:3},{value:"username",id:"username",level:3},{value:"primary_email",id:"primary_email",level:3},{value:"primary_phone",id:"primary_phone",level:3},{value:"name",id:"name",level:3},{value:"avatar",id:"avatar",level:3},{value:"profile",id:"profile",level:3},{value:"application_id",id:"application_id",level:3},{value:"last_signed_in_at",id:"last_signed_in_at",level:3},{value:"password_encrypted",id:"password_encrypted",level:3},{value:"password_encryption_method",id:"password_encryption_method",level:3},{value:"is_suspended",id:"is_suspended",level:3},{value:"Referencia de propiedades",id:"referencia-de-propiedades",level:2},{value:"Identidades sociales",id:"identidades-sociales",level:2},{value:"Datos personalizados",id:"datos-personalizados",level:2},{value:"Recursos relacionados",id:"recursos-relacionados",level:2}];function t(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{CloudLink:s,Url:i}=n;return s||p("CloudLink",!0),i||p("Url",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"estructura-de-datos-del-usuario",children:"Estructura de datos del usuario"})}),"\n",(0,a.jsx)(n.p,{children:"Los usuarios son las entidades centrales en el servicio de identidad. En Logto, incluyen datos b\xe1sicos de autenticaci\xf3n basados en el protocolo OpenID Connect, junto con datos personalizados."}),"\n",(0,a.jsx)(n.h2,{id:"perfil-del-usuario",children:"Perfil del usuario"}),"\n",(0,a.jsxs)(n.p,{children:["Cada usuario tiene un perfil que contiene ",(0,a.jsx)(n.a,{href:"./#property-reference",children:"toda la informaci\xf3n del usuario"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Consiste en los siguientes tipos de datos:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"./#basic-data",children:"Datos b\xe1sicos"}),": es la informaci\xf3n b\xe1sica del perfil del usuario. Almacena todas las dem\xe1s propiedades del ",(0,a.jsx)(n.em,{children:"usuario"})," excepto las ",(0,a.jsx)(n.code,{children:"identidades"})," sociales y ",(0,a.jsx)(n.code,{children:"custom_data"}),", como el id del usuario, nombre de usuario, correo electr\xf3nico, n\xfamero de tel\xe9fono y cu\xe1ndo fue la \xfaltima vez que el usuario inici\xf3 sesi\xf3n."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"./#social-identities",children:"Identidades sociales"}),": almacena la informaci\xf3n del usuario obtenida del inicio de sesi\xf3n social (es decir, inicio de sesi\xf3n con un conector social), como Facebook, GitHub y WeChat."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"./#custom-data",children:"Datos personalizados"}),": almacena informaci\xf3n adicional del usuario no listada en las propiedades predefinidas del usuario, como el color y el idioma preferidos por el usuario."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Aqu\xed tienes un ejemplo de los datos de un usuario que se obtienen de un inicio de sesi\xf3n en Facebook:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "id": "iHXPuSb9eMzt",\n  "username": null,\n  "primaryEmail": null,\n  "primaryPhone": null,\n  "name": "John Doe",\n  "avatar": "https://example.com/avatar.png",\n  "customData": {\n    "preferences": {\n      "language": "en",\n      "color": "#f236c9"\n    }\n  },\n  "identities": {\n    "facebook": {\n      "userId": "106077000000000",\n      "details": {\n        "id": "106077000000000",\n        "name": "John Doe",\n        "email": "johndoe@logto.io",\n        "avatar": "https://example.com/avatar.png"\n      }\n    }\n  },\n  "lastSignInAt": 1655799453171,\n  "applicationId": "admin_console"\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Puedes consultar el perfil del usuario usando ",(0,a.jsx)(s,{to:"/users",children:"Logto Console"})," o Logto Management API, como ",(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:(0,a.jsx)(n.code,{children:"GET /api/users/:userId"})}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"datos-b\xe1sicos",children:"Datos b\xe1sicos"}),"\n",(0,a.jsxs)(n.p,{children:["Vamos a recorrer todas las propiedades de los ",(0,a.jsx)(n.em,{children:"datos b\xe1sicos"})," del usuario."]}),"\n",(0,a.jsx)(n.h3,{id:"id",children:"id"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"id"})," es una clave \xfanica generada autom\xe1ticamente para identificar al usuario en Logto."]}),"\n",(0,a.jsx)(n.h3,{id:"username",children:"username"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"username"})," se utiliza para iniciar sesi\xf3n con ",(0,a.jsx)(n.em,{children:"username"})," y contrase\xf1a."]}),"\n",(0,a.jsxs)(n.p,{children:["Su valor proviene del nombre de usuario con el que el usuario se registr\xf3 por primera vez. Puede ser ",(0,a.jsx)(n.code,{children:"null"}),". Su valor no nulo no debe tener m\xe1s de 128 caracteres, solo contener letras, n\xfameros y guiones bajos (",(0,a.jsx)(n.code,{children:"_"}),"), y NO comenzar con un n\xfamero."]}),"\n",(0,a.jsx)(n.h3,{id:"primary_email",children:"primary_email"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"primary_email"})," es la direcci\xf3n de correo electr\xf3nico del usuario, utilizada para iniciar sesi\xf3n con el correo electr\xf3nico y el c\xf3digo de acceso."]}),"\n",(0,a.jsxs)(n.p,{children:["Su valor generalmente proviene de la direcci\xf3n de correo electr\xf3nico con la que el usuario se registr\xf3 por primera vez. Puede ser ",(0,a.jsx)(n.code,{children:"null"}),". Su longitud m\xe1xima es de 128."]}),"\n",(0,a.jsx)(n.h3,{id:"primary_phone",children:"primary_phone"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"primary_phone"})," es el n\xfamero de tel\xe9fono del usuario, utilizado para iniciar sesi\xf3n con el n\xfamero de tel\xe9fono y el c\xf3digo de acceso de SMS."]}),"\n",(0,a.jsxs)(n.p,{children:["Su valor generalmente proviene del n\xfamero de tel\xe9fono con el que el usuario se registr\xf3 por primera vez. Puede ser ",(0,a.jsx)(n.code,{children:"null"}),". Su valor no nulo debe contener n\xfameros precedidos por el ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_country_calling_codes",children:"c\xf3digo de llamada del pa\xeds"})," (excluyendo el signo m\xe1s ",(0,a.jsx)(n.code,{children:"+"}),")."]}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"name"})," es el nombre completo del usuario. Su longitud m\xe1xima es de 128."]}),"\n",(0,a.jsx)(n.h3,{id:"avatar",children:"avatar"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"avatar"})," es la URL que apunta a la imagen del avatar del usuario. Su longitud m\xe1xima es de 2048."]}),"\n",(0,a.jsx)(n.p,{children:"Si el usuario se registra con un conector social como Google y Facebook, su valor puede obtenerse de la informaci\xf3n del usuario social."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Esta propiedad se asigna al reclamo ",(0,a.jsx)(n.code,{children:"picture"})," en el est\xe1ndar ",(0,a.jsx)(n.a,{href:"https://openid.net/connect/",children:"OpenID Connect"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"profile",children:"profile"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"profile"})," almacena reclamos est\xe1ndar adicionales de OpenID Connect ",(0,a.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims",children:"reclamos est\xe1ndar"})," que no est\xe1n incluidos en las propiedades del usuario."]}),"\n",(0,a.jsxs)(n.p,{children:["Su definici\xf3n de tipo se puede encontrar en ",(0,a.jsx)(n.a,{href:"https://github.com/logto-io/logto/blob/HEAD/packages/schemas/src/foundations/jsonb-types/users.ts#L6",children:"este archivo"}),". Aqu\xed tienes una copia de la definici\xf3n de tipo:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"type UserProfile = Partial<{\n  familyName: string;\n  givenName: string;\n  middleName: string;\n  nickname: string;\n  preferredUsername: string;\n  profile: string;\n  website: string;\n  gender: string;\n  birthdate: string;\n  zoneinfo: string;\n  locale: string;\n  address: Partial<{\n    formatted: string;\n    streetAddress: string;\n    locality: string;\n    region: string;\n    postalCode: string;\n    country: string;\n  }>;\n}>;\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Partial"})," significa que todas las propiedades son opcionales."]})}),"\n",(0,a.jsxs)(n.p,{children:["Una diferencia en comparaci\xf3n con los otros reclamos est\xe1ndar es que las propiedades en ",(0,a.jsx)(n.code,{children:"profile"})," solo se incluir\xe1n en el Token de ID o en la respuesta del endpoint de informaci\xf3n del usuario cuando sus valores no est\xe9n vac\xedos, mientras que otros reclamos est\xe1ndar devolver\xe1n ",(0,a.jsx)(n.code,{children:"null"})," si los valores est\xe1n vac\xedos."]}),"\n",(0,a.jsx)(n.h3,{id:"application_id",children:"application_id"}),"\n",(0,a.jsxs)(n.p,{children:["El valor de ",(0,a.jsx)(n.em,{children:"application_id"})," proviene de la aplicaci\xf3n en la que el usuario inici\xf3 sesi\xf3n por primera vez. Puede ser ",(0,a.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"last_signed_in_at",children:"last_signed_in_at"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"last_signed_in_at"})," es la marca de tiempo con la zona horaria cuando el usuario inici\xf3 sesi\xf3n por \xfaltima vez."]}),"\n",(0,a.jsx)(n.h3,{id:"password_encrypted",children:"password_encrypted"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"password_encrypted"})," se utiliza para almacenar la contrase\xf1a encriptada del usuario."]}),"\n",(0,a.jsxs)(n.p,{children:["Su valor proviene de la contrase\xf1a con la que el usuario se registr\xf3 por primera vez. Puede ser ",(0,a.jsx)(n.code,{children:"null"}),". Si su valor no es nulo, su contenido original antes de la encriptaci\xf3n debe tener al menos seis caracteres."]}),"\n",(0,a.jsx)(n.h3,{id:"password_encryption_method",children:"password_encryption_method"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"password_encryption_method"})," se utiliza para encriptar la contrase\xf1a del usuario. Su valor se inicializa cuando el usuario se registra con el nombre de usuario y la contrase\xf1a. Puede ser ",(0,a.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Logto utiliza la implementaci\xf3n de ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Argon2",children:"Argon2"})," ",(0,a.jsx)(n.a,{href:"https://github.com/ranisalt/node-argon2",children:"node-argon2"})," como m\xe9todo de encriptaci\xf3n por defecto; consulta la referencia para m\xe1s detalles si est\xe1s interesado."]}),"\n",(0,a.jsxs)(n.p,{children:["Ejemplo de un ",(0,a.jsx)(n.em,{children:"password_encrypted"})," y ",(0,a.jsx)(n.em,{children:"password_encryption_method"})," de un usuario cuya contrase\xf1a es ",(0,a.jsx)(n.code,{children:"123456"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "password_encryption_method": "Argon2i",\n  "password_encrypted": "$argon2i$v=19$m=4096,t=10,p=1$aZzrqpSX45DOo+9uEW6XVw$O4MdirF0mtuWWWz68eyNAt2u1FzzV3m3g00oIxmEr0U"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"is_suspended",children:"is_suspended"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"is_suspended"})," es un valor booleano que indica si un usuario est\xe1 suspendido o no. El valor se puede gestionar llamando a la ",(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-updateuserissuspended",children:"Logto Management API"})," o usando Admin Console."]}),"\n",(0,a.jsx)(n.p,{children:"Una vez que un usuario est\xe1 suspendido, los tokens de actualizaci\xf3n pre-otorgados se revocar\xe1n inmediatamente y el usuario no podr\xe1 ser autenticado por Logto m\xe1s."}),"\n",(0,a.jsx)(n.h2,{id:"referencia-de-propiedades",children:"Referencia de propiedades"}),"\n",(0,a.jsxs)(n.p,{children:["Las siguientes propiedades (excepto ",(0,a.jsx)(n.em,{children:"password_encrypted"})," y ",(0,a.jsx)(n.em,{children:"password_encryption_method"}),") son visibles en el perfil del usuario, lo que significa que puedes consultarlas usando ",(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-getuser",children:"Management API"}),"."]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Nombre"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"}),(0,a.jsx)(n.th,{children:"\xdanico"}),(0,a.jsx)(n.th,{children:"Requerido"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"./#id",children:"id"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"Identificador \xfanico"}),(0,a.jsx)(n.td,{children:"\u2705"}),(0,a.jsx)(n.td,{children:"\u2705"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"./#username",children:"username"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"Nombre de usuario para iniciar sesi\xf3n"}),(0,a.jsx)(n.td,{children:"\u2705"}),(0,a.jsx)(n.td,{children:"\u274c"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"./#primary_email",children:"primary_email"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"Correo electr\xf3nico principal"}),(0,a.jsx)(n.td,{children:"\u2705"}),(0,a.jsx)(n.td,{children:"\u274c"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"./#primary_phone",children:"primary_phone"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"N\xfamero de tel\xe9fono principal"}),(0,a.jsx)(n.td,{children:"\u2705"}),(0,a.jsx)(n.td,{children:"\u274c"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"./#name",children:"name"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"Nombre completo"}),(0,a.jsx)(n.td,{children:"\u274c"}),(0,a.jsx)(n.td,{children:"\u274c"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"./#avatar",children:"avatar"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"URL que apunta a la imagen del avatar del usuario"}),(0,a.jsx)(n.td,{children:"\u274c"}),(0,a.jsx)(n.td,{children:"\u274c"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"./#social-identities",children:"identities"})}),(0,a.jsx)(n.td,{children:"object"}),(0,a.jsx)(n.td,{children:"Informaci\xf3n del usuario obtenida del inicio de sesi\xf3n social"}),(0,a.jsx)(n.td,{children:"\u274c"}),(0,a.jsx)(n.td,{children:"\u2705"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"./#custom-data",children:"custom_data"})}),(0,a.jsx)(n.td,{children:"object"}),(0,a.jsx)(n.td,{children:"Informaci\xf3n adicional en propiedades personalizables"}),(0,a.jsx)(n.td,{children:"\u274c"}),(0,a.jsx)(n.td,{children:"\u2705"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"./#application_id",children:"application_id"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"ID de la aplicaci\xf3n en la que el usuario se registr\xf3 por primera vez"}),(0,a.jsx)(n.td,{children:"\u274c"}),(0,a.jsx)(n.td,{children:"\u2705"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"./#last_signed_in_at",children:"last_sign_in_at"})}),(0,a.jsx)(n.td,{children:"date time"}),(0,a.jsx)(n.td,{children:"Marca de tiempo cuando el usuario inici\xf3 sesi\xf3n por \xfaltima vez"}),(0,a.jsx)(n.td,{children:"\u274c"}),(0,a.jsx)(n.td,{children:"\u2705"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"./#password_encrypted",children:"password_encrypted"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"Contrase\xf1a encriptada"}),(0,a.jsx)(n.td,{children:"\u274c"}),(0,a.jsx)(n.td,{children:"\u274c"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"./#password_encryption_method",children:"password_encryption_method"})}),(0,a.jsx)(n.td,{children:"string"}),(0,a.jsx)(n.td,{children:"M\xe9todo de encriptaci\xf3n de la contrase\xf1a"}),(0,a.jsx)(n.td,{children:"\u274c"}),(0,a.jsx)(n.td,{children:"\u274c"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"./#is_suspended",children:"is_suspended"})}),(0,a.jsx)(n.td,{children:"bool"}),(0,a.jsx)(n.td,{children:"Marca de suspensi\xf3n del usuario"}),(0,a.jsx)(n.td,{children:"\u274c"}),(0,a.jsx)(n.td,{children:"\u2705"})]})]})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"\xdanico"}),": Asegura la ",(0,a.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS",children:"unicidad"})," de los valores ingresados en una propiedad de una tabla de base de datos."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Requerido"}),": Asegura que los valores ingresados en una propiedad de una tabla de base de datos NO puedan ser ",(0,a.jsx)(n.code,{children:"null"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"identidades-sociales",children:"Identidades sociales"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"identities"})," contiene la informaci\xf3n del usuario obtenida del inicio de sesi\xf3n social (es decir, inicio de sesi\xf3n con un conector social). Cada ",(0,a.jsx)(n.em,{children:"identities"})," de usuario se almacena en un objeto JSON individual."]}),"\n",(0,a.jsx)(n.p,{children:"La informaci\xf3n del usuario var\xeda seg\xfan el proveedor de identidad social (es decir, plataforma de red social), y generalmente incluye lo siguiente:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"target"}),' del proveedor de identidad, como "facebook" o "google"']}),"\n",(0,a.jsx)(n.li,{children:"Identificador \xfanico del usuario para este proveedor"}),"\n",(0,a.jsx)(n.li,{children:"Nombre del usuario"}),"\n",(0,a.jsx)(n.li,{children:"Correo electr\xf3nico verificado del usuario"}),"\n",(0,a.jsx)(n.li,{children:"Avatar del usuario"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["La cuenta del usuario puede estar vinculada a m\xfaltiples proveedores de identidad social a trav\xe9s del inicio de sesi\xf3n social; la informaci\xf3n del usuario correspondiente obtenida de estos proveedores se almacenar\xe1 en el objeto ",(0,a.jsx)(n.em,{children:"identities"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Ejemplo de ",(0,a.jsx)(n.em,{children:"identities"})," de un usuario que inici\xf3 sesi\xf3n con Google y Facebook:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "facebook": {\n    "userId": "5110888888888888",\n    "details": {\n      "id": "5110888888888888",\n      "name": "John Doe",\n      "email": "johndoe@logto.io",\n      "avatar": "https://example.com/avatar.png"\n    }\n  },\n  "google": {\n    "userId": "111000000000000000000",\n    "details": {\n      "id": "111000000000000000000",\n      "name": "John Doe",\n      "email": "johndoe@gmail.com",\n      "avatar": "https://example.com/avatar.png"\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"datos-personalizados",children:"Datos personalizados"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"custom_data"})," almacena informaci\xf3n adicional del usuario no listada en las propiedades predefinidas del usuario."]}),"\n",(0,a.jsxs)(n.p,{children:["Puedes usar ",(0,a.jsx)(n.em,{children:"custom_data"})," para hacer lo siguiente:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Registrar si se han realizado acciones espec\xedficas por parte del usuario, como haber visto la p\xe1gina de bienvenida."}),"\n",(0,a.jsx)(n.li,{children:"Almacenar datos espec\xedficos de la aplicaci\xf3n en el perfil del usuario, como el idioma y la apariencia preferidos por el usuario por aplicaci\xf3n."}),"\n",(0,a.jsx)(n.li,{children:"Mantener otros datos arbitrarios relacionados con el usuario."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Ejemplo de ",(0,a.jsx)(n.em,{children:"custom_data"})," de un usuario administrador en Logto:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "adminConsolePreferences": {\n    "language": "en",\n    "appearanceMode": "system",\n    "experienceNoticeConfirmed": true\n  },\n  "customDataFoo": {\n    "foo": "foo"\n  },\n  "customDataBar": {\n    "bar": "bar"\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Cada ",(0,a.jsx)(n.em,{children:"custom_data"})," de usuario se almacena en un objeto JSON individual."]}),"\n",(0,a.jsxs)(n.p,{children:["NO pongas datos sensibles en ",(0,a.jsx)(n.em,{children:"custom_data"})]}),"\n",(0,a.jsxs)(n.p,{children:["Puedes obtener un perfil de usuario que contenga ",(0,a.jsx)(n.em,{children:"custom_data"})," usando Management API y enviarlo a las aplicaciones frontend o servicios backend externos. Por lo tanto, poner informaci\xf3n sensible en ",(0,a.jsx)(n.em,{children:"custom_data"})," puede causar filtraciones de datos."]}),"\n",(0,a.jsxs)(n.p,{children:["Si a\xfan deseas poner la informaci\xf3n sensible en ",(0,a.jsx)(n.em,{children:"custom_data"}),", recomendamos encriptarla primero. Solo encripta / desencripta en una parte confiable como tus servicios backend, y evita hacerlo en las aplicaciones frontend. Esto minimizar\xe1 la p\xe9rdida si el ",(0,a.jsx)(n.em,{children:"custom_data"})," de tus usuarios se filtra por error."]}),"\n",(0,a.jsxs)(n.p,{children:["Puedes actualizar el ",(0,a.jsx)(n.em,{children:"custom_data"})," del usuario usando ",(0,a.jsx)(n.a,{href:"/user-management/manage-users/#view-and-update-the-user-profile",children:"Admin Console"})," o ",(0,a.jsx)(n.a,{href:"/user-management/manage-users/#manage-via-logto-management-api",children:"Logto Management API"}),", como ",(0,a.jsx)(n.a,{href:"https://openapi.logto.io/operation/operation-patch-api-users-parameter",children:(0,a.jsx)(n.code,{children:"PATCH /api/users/:userId"})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Actualiza con cuidado"}),"\n",(0,a.jsxs)(n.p,{children:["Actualizar el ",(0,a.jsx)(n.em,{children:"custom_data"})," de un usuario sobrescribir\xe1 completamente su contenido original en el almacenamiento."]}),"\n",(0,a.jsxs)(n.p,{children:["Por ejemplo, si tu entrada al llamar a la API de actualizaci\xf3n de ",(0,a.jsx)(n.em,{children:"custom_data"})," se ve as\xed (supongamos que el ",(0,a.jsx)(n.em,{children:"custom_data"})," original es el ejemplo de datos mostrado anteriormente):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "customDataBaz": {\n    "baz": "baz"\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["entonces el nuevo valor de ",(0,a.jsx)(n.em,{children:"custom_data"})," despu\xe9s de la actualizaci\xf3n deber\xeda ser:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "customDataBaz": {\n    "baz": "baz"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Es decir, el valor del campo actualizado no tiene nada que ver con el valor anterior."}),"\n",(0,a.jsx)(n.h2,{id:"recursos-relacionados",children:"Recursos relacionados"}),"\n",(0,a.jsx)(i,{href:"https://blog.logto.io/secure-hub-for-user-data/",children:(0,a.jsx)(n.p,{children:"Centro seguro para datos de usuario en movimiento"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},15658:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var i=s(30758);const a={},r=i.createContext(a);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);