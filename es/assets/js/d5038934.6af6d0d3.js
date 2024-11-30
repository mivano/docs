"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[31577],{40074:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"customization/bring-your-ui/debug-and-test-your-custom-ui-locally","title":"Depura y prueba tu UI personalizada localmente","description":"Para los usuarios de Logto Cloud, hemos facilitado que puedas \\"Traer tu propia UI\\" a Logto. Los usuarios de Cloud ahora pueden subir un archivo zip que contenga los activos de la UI personalizada en Consola > Experiencia de inicio de sesi\xf3n > Branding > Trae tu UI (Consulta la p\xe1gina Trae tu UI para m\xe1s detalles).","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/customization/bring-your-ui/debug-and-test-your-custom-ui-locally.mdx","sourceDirName":"customization/bring-your-ui","slug":"/customization/bring-your-ui/debug-and-test-your-custom-ui-locally","permalink":"/es/customization/bring-your-ui/debug-and-test-your-custom-ui-locally","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/customization/bring-your-ui/debug-and-test-your-custom-ui-locally.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Trae tu propia interfaz de usuario","permalink":"/es/customization/bring-your-ui/"},"next":{"title":"Cargar activos de UI personalizados usando CLI","permalink":"/es/customization/bring-your-ui/upload-custom-ui-assets-using-cli"}}');var o=a(86070),t=a(15658),r=a(78551),s=a(77501);const l={sidebar_position:1},c="Depura y prueba tu UI personalizada localmente",u={},d=[{value:"\xbfPor qu\xe9 necesito esto?",id:"por-qu\xe9-necesito-esto",level:2},{value:"Instrucciones",id:"instrucciones",level:2},{value:"Paso 1: Ejecuta el comando",id:"paso-1-ejecuta-el-comando",level:3},{value:"Paso 2: Actualiza el URI del endpoint en tu aplicaci\xf3n",id:"paso-2-actualiza-el-uri-del-endpoint-en-tu-aplicaci\xf3n",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",mermaid:"mermaid",p:"p",pre:"pre",...(0,t.R)(),...e.components},{CloudLink:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("CloudLink",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"depura-y-prueba-tu-ui-personalizada-localmente",children:"Depura y prueba tu UI personalizada localmente"})}),"\n",(0,o.jsxs)(n.p,{children:['Para los usuarios de Logto Cloud, hemos facilitado que puedas "Traer tu propia UI" a Logto. Los usuarios de Cloud ahora pueden subir un archivo zip que contenga los activos de la UI personalizada en ',(0,o.jsx)(a,{to:"/sign-in-experience/branding",children:"Consola > Experiencia de inicio de sesi\xf3n > Branding > Trae tu UI"})," (Consulta la p\xe1gina ",(0,o.jsx)(n.a,{href:"/customization/bring-your-ui",children:"Trae tu UI"})," para m\xe1s detalles)."]}),"\n",(0,o.jsx)(n.p,{children:"Sin embargo, al desarrollar dichas p\xe1ginas de UI personalizadas, los usuarios quieren probar y depurar el c\xf3digo localmente antes de subirlo a Logto Cloud. Este comando de CLI te ayuda a configurar un t\xfanel local y conectar las siguientes 3 entidades juntas: tu endpoint de autenticaci\xf3n de Logto Cloud, tu aplicaci\xf3n y tu UI de inicio de sesi\xf3n personalizada."}),"\n",(0,o.jsx)(n.h2,{id:"por-qu\xe9-necesito-esto",children:"\xbfPor qu\xe9 necesito esto?"}),"\n",(0,o.jsx)(n.p,{children:'Por defecto, cuando haces clic en el bot\xf3n "iniciar sesi\xf3n" en tu aplicaci\xf3n, ser\xe1s dirigido a la p\xe1gina de inicio de sesi\xf3n configurada en el endpoint de Logto. Un flujo de inicio de sesi\xf3n exitoso se puede ilustrar de la siguiente manera:'}),"\n",(0,o.jsx)(n.mermaid,{value:'sequenceDiagram\n    box M\xe1quina local\n    participant A as Tu aplicaci\xf3n\n    end\n    box Logto Cloud\n    participant B as Endpoint de autenticaci\xf3n de Logto Cloud\n    participant C as P\xe1gina de inicio de sesi\xf3n de Logto\n    end\n    A ->> B: El usuario inicia la acci\xf3n de "iniciar sesi\xf3n" y solicita autenticaci\xf3n\n    B --\x3e> A: Devuelve la respuesta de autenticaci\xf3n y le dice al cliente<br/>que redirija a la p\xe1gina de inicio de sesi\xf3n de Logto\n    A ->> C: Redirige a la p\xe1gina de inicio de sesi\xf3n de Logto\n    C ->> B: Env\xeda el formulario de inicio de sesi\xf3n y<br/>solicita a la Experience API autenticar\n    B --\x3e> C: Responde a la solicitud de inicio de sesi\xf3n y<br/>le dice al cliente que redirija a tu aplicaci\xf3n\n    C --\x3e> A: Redirige a tu aplicaci\xf3n\n    A --\x3e A: Maneja la devoluci\xf3n de llamada de inicio de sesi\xf3n y<br/>el usuario ahora est\xe1 autenticado'}),"\n",(0,o.jsx)(n.p,{children:"Pero ahora, dado que est\xe1s desarrollando tu propia UI de inicio de sesi\xf3n personalizada, necesitas una manera de navegar a las p\xe1ginas de UI de inicio de sesi\xf3n personalizadas que se ejecutan en tu m\xe1quina local.\nEsto requiere un servicio de t\xfanel local para interceptar las solicitudes salientes de tu aplicaci\xf3n y redirigirlas a tus p\xe1ginas de UI de inicio de sesi\xf3n personalizadas."}),"\n",(0,o.jsx)(n.p,{children:"Adem\xe1s, necesitas interactuar con la Experience API de Logto para autenticar usuarios y gestionar sesiones.\nEste servicio tambi\xe9n ayudar\xe1 a reenviar estas solicitudes de Experience API a Logto Cloud para evitar problemas de CORS."}),"\n",(0,o.jsx)(n.p,{children:'El siguiente diagrama de secuencia ilustra c\xf3mo funciona un flujo de "inicio de sesi\xf3n" exitoso con tu UI personalizada y el servicio de t\xfanel en su lugar:'}),"\n",(0,o.jsx)(n.mermaid,{value:'sequenceDiagram\n    box M\xe1quina local\n    participant A as Tu aplicaci\xf3n\n    participant B as Tu UI de inicio de sesi\xf3n personalizada\n    participant C as T\xfanel\n    end\n    box Logto Cloud\n    participant D as Endpoint de autenticaci\xf3n de Logto Cloud\n    participant E as P\xe1gina de inicio de sesi\xf3n de Logto\n    end\n    A ->> C: El usuario inicia la acci\xf3n de "iniciar sesi\xf3n" y solicita autenticaci\xf3n\n    C ->> D: Reenv\xeda la solicitud de autenticaci\xf3n al endpoint de Logto Cloud\n    D --\x3e> C: Devuelve la respuesta de autenticaci\xf3n y le dice al cliente<br/>que redirija a la p\xe1gina de inicio de sesi\xf3n de Logto\n    C ->> B: Intercepta la redirecci\xf3n y<br/>redirige a tu p\xe1gina de inicio de sesi\xf3n personalizada\n    B ->> C: Env\xeda el formulario de inicio de sesi\xf3n y<br/>solicita a la Experience API autenticar\n    C ->> D: Reenv\xeda las solicitudes de Experience API a Logto Cloud\n    D --\x3e> C: Autentica la solicitud de inicio de sesi\xf3n y<br/>le dice al cliente que redirija a tu aplicaci\xf3n\n    C --\x3e> A: Redirige a tu aplicaci\xf3n\n    A --\x3e A: Maneja la devoluci\xf3n de llamada de inicio de sesi\xf3n y<br/>el usuario ahora est\xe1 autenticado'}),"\n",(0,o.jsx)(n.p,{children:"Con el servicio de t\xfanel en su lugar, ahora puedes desarrollar y probar tu UI de inicio de sesi\xf3n personalizada localmente, sin necesidad de subir los activos a Logto Cloud cada vez que realices un cambio."}),"\n",(0,o.jsx)(n.h2,{id:"instrucciones",children:"Instrucciones"}),"\n",(0,o.jsx)(n.h3,{id:"paso-1-ejecuta-el-comando",children:"Paso 1: Ejecuta el comando"}),"\n",(0,o.jsxs)(n.p,{children:["Suponiendo que tu ID de inquilino de Cloud es ",(0,o.jsx)(n.code,{children:"foobar"}),", y tienes una p\xe1gina de inicio de sesi\xf3n personalizada ejecut\xe1ndose en tu servidor de desarrollo local en ",(0,o.jsx)(n.code,{children:"http://localhost:4000"}),", entonces puedes ejecutar el comando de esta manera:"]}),"\n",(0,o.jsxs)(s.A,{groupId:"cmd",children:[(0,o.jsx)(r.A,{value:"cli",label:"CLI",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"logto-tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://foobar.logto.app/\n"})})}),(0,o.jsx)(r.A,{value:"npx",label:"npx",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://foobar.logto.app/\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Tambi\xe9n funciona si tienes un dominio personalizado configurado en Logto:"}),"\n",(0,o.jsxs)(s.A,{groupId:"cmd",children:[(0,o.jsx)(r.A,{value:"cli",label:"CLI",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"logto-tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://your.custom.domain/\n"})})}),(0,o.jsx)(r.A,{value:"npx",label:"npx",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel -p 9000 --experience-uri http://localhost:4000/ --endpoint https://your.custom.domain/\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Alternativamente, el comando tambi\xe9n admite activos HTML est\xe1ticos sin necesidad de ejecutarlos primero en un servidor de desarrollo. Solo aseg\xfarate de que haya un ",(0,o.jsx)(n.code,{children:"index.html"})," en la ruta que especificaste."]}),"\n",(0,o.jsxs)(s.A,{groupId:"cmd",children:[(0,o.jsx)(r.A,{value:"cli",label:"CLI",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"logto-tunnel -p 9000 --experience-path /path/to/your/static/files --endpoint https://foobar.logto.app/\n"})})}),(0,o.jsx)(r.A,{value:"npx",label:"npx",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npx @logto/tunnel -p 9000 --experience-path /path/to/your/static/files --endpoint https://foobar.logto.app/\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"paso-2-actualiza-el-uri-del-endpoint-en-tu-aplicaci\xf3n",children:"Paso 2: Actualiza el URI del endpoint en tu aplicaci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["Finalmente, ejecuta tu aplicaci\xf3n y configura su endpoint de Logto a la direcci\xf3n del servicio de t\xfanel ",(0,o.jsx)(n.code,{children:"http://localhost:9000/"})," en su lugar."]}),"\n",(0,o.jsx)(n.p,{children:"Tomemos una aplicaci\xf3n React como ejemplo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:"title=App.tsx",children:"import { LogtoProvider, LogtoConfig } from '@logto/react';\n\nconst config: LogtoConfig = {\n  // endpoint: 'https://foobar.logto.app/', // endpoint original de Logto Cloud\n  endpoint: 'http://localhost:9000/', // direcci\xf3n del servicio de t\xfanel\n  appId: '<your-application-id>',\n};\n\nconst App = () => (\n  <LogtoProvider config={config}>\n    <YourAppContent />\n  </LogtoProvider>\n);\n"})}),"\n",(0,o.jsx)(n.p,{children:"Si est\xe1s utilizando inicio de sesi\xf3n social, tambi\xe9n necesitas actualizar el URI de redirecci\xf3n en la configuraci\xf3n de tu proveedor social a la direcci\xf3n del servicio de t\xfanel."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"http://localhost:9000/callback/<connector-id>\n"})}),"\n",(0,o.jsx)(n.p,{children:'Si todo est\xe1 configurado correctamente, cuando hagas clic en el bot\xf3n "iniciar sesi\xf3n" en tu aplicaci\xf3n, deber\xedas ser dirigido a tu p\xe1gina de inicio de sesi\xf3n personalizada en lugar de la UI integrada de Logto, junto con una sesi\xf3n v\xe1lida (cookies) que te permita interactuar m\xe1s con la Experience API de Logto.'}),"\n",(0,o.jsx)(n.p,{children:"\xa1Feliz codificaci\xf3n!"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},78551:(e,n,a)=>{a.d(n,{A:()=>r});a(30758);var i=a(13526);const o={tabItem:"tabItem_PGP0"};var t=a(86070);function r(e){let{children:n,hidden:a,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,r),hidden:a,children:n})}},77501:(e,n,a)=>{a.d(n,{A:()=>I});var i=a(30758),o=a(13526),t=a(65052),r=a(25557),s=a(77469),l=a(50873),c=a(62230),u=a(60196);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:i,default:o}}=e;return{value:n,label:a,attributes:i,default:o}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:a}=e;const o=(0,r.W6)(),t=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(t),(0,i.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(o.location.search);n.set(t,e),o.replace({...o.location,search:n.toString()})}),[t,o])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:o}=e,t=p(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:t}))),[c,d]=g({queryString:a,groupId:o}),[m,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,t]=(0,u.Dv)(a);return[o,(0,i.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:o}),x=(()=>{const e=c??m;return h({value:e,tabValues:t})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,t]),tabValues:t}}var b=a(13887);const x={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var f=a(86070);function v(e){let{className:n,block:a,selectedValue:i,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),u=e=>{const n=e.currentTarget,a=l.indexOf(n),o=s[a].value;o!==i&&(c(n),r(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...t,className:(0,o.A)("tabs__item",x.tabItem,t?.className,{"tabs__item--active":i===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:t}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(j,{...n,...e})]})}function I(e){const n=(0,b.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},15658:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>s});var i=a(30758);const o={},t=i.createContext(o);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);