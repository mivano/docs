"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[62816],{27358:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>R,contentTitle:()=>P,default:()=>C,frontMatter:()=>w,metadata:()=>o,toc:()=>M});const o=JSON.parse('{"id":"connectors/sms-connectors/sms-connectors","title":"Conectores SMS","description":"Configurar un conector SMS te permite enviar una contrase\xf1a de un solo uso (OTP) al n\xfamero de tel\xe9fono del usuario. Este mecanismo de autenticaci\xf3n sin contrase\xf1a puede ser utilizado en varios escenarios, incluyendo registro, inicio de sesi\xf3n, recuperaci\xf3n de contrase\xf1a y procesos de vinculaci\xf3n de cuentas, para validar la identidad del usuario. Simplifica la autenticaci\xf3n del usuario y mejora la seguridad al minimizar el riesgo de violaciones relacionadas con contrase\xf1as.","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/connectors/sms-connectors/README.mdx","sourceDirName":"connectors/sms-connectors","slug":"/connectors/sms-connectors/","permalink":"/es/connectors/sms-connectors/","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/es/docusaurus-plugin-content-docs/current/connectors/sms-connectors/README.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"sms-connectors","title":"Conectores SMS","sidebar_label":"Conectores SMS","sidebar_position":1},"sidebar":"docsSidebar","previous":{"title":"Plantillas de correo electr\xf3nico","permalink":"/es/connectors/email-connectors/email-templates"},"next":{"title":"Plantillas de SMS","permalink":"/es/connectors/sms-connectors/sms-templates"}}');var r,t=i(86070),a=i(15658),s=i(22211),c=i(30758);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},l.apply(null,arguments)}const d=e=>{let{title:n,titleId:i,...o}=e;return c.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":i},o),n?c.createElement("title",{id:i},n):null,r||(r=c.createElement("path",{fill:"#E31E26",fillRule:"evenodd",d:"M11.982 0C5.376 0 0 5.384 0 12s5.376 12 11.982 12C18.624 24.035 24 18.65 24 12S18.624 0 11.982 0m0 20.868c-4.849 0-8.82-3.977-8.82-8.868 0-4.856 3.971-8.833 8.82-8.833 4.885 0 8.856 3.977 8.856 8.833 0 4.891-3.971 8.868-8.856 8.868m2.989-9.36a2.497 2.497 0 0 0 2.494-2.5 2.497 2.497 0 0 0-2.494-2.498 2.497 2.497 0 0 0-2.495 2.499 2.497 2.497 0 0 0 2.495 2.498m2.494 3.483a2.497 2.497 0 0 1-2.494 2.499 2.497 2.497 0 0 1-2.495-2.499 2.497 2.497 0 0 1 2.495-2.498 2.497 2.497 0 0 1 2.494 2.498M8.997 17.49a2.497 2.497 0 0 0 2.495-2.499 2.497 2.497 0 0 0-2.495-2.498 2.497 2.497 0 0 0-2.494 2.498 2.497 2.497 0 0 0 2.494 2.499m2.495-8.481a2.497 2.497 0 0 1-2.495 2.498A2.497 2.497 0 0 1 6.502 9.01 2.497 2.497 0 0 1 8.996 6.51a2.497 2.497 0 0 1 2.495 2.499",clipRule:"evenodd"})))};var u;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},p.apply(null,arguments)}const m=e=>{let{title:n,titleId:i,...o}=e;return c.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":i},o),n?c.createElement("title",{id:i},n):null,u||(u=c.createElement("image",{xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAvbSURBVHhe7Z3RseQ0E4U3hA2BEAhhQyAEyIBX3shgQ9gQCIEQNgRCoIoE4JyLvJi5mukZu2VL8vdVddX/Lx5b6m51S3LL9wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA0Pz10y+fJL9J/r4R/9uPko/lUoC5kHP/Wpz9kfwp+SL5rvwMYHyKU9cc/pH8Lvmx3AJgTOTEP6+ceov8IXH2ICvAWMhpP0o8rak59hbxWuFTuT1A38hZvbCtOfJecVZwZmHRDP0iB90y939V/IzvyyMB+kGO6YVszWlbyFcJW6nQD3LGaAB4GvO95LMka63AVir0gZww2vv/uVz6hv6/I3hm1mArFc7Dzrdyxpr8Wi79H/r37yTZWcH3IyvAcdjhigPek9/KpVX0372N6kHk+X3t91vEW6k/lEcAtEXO5i3LmiO+SbksRNd6reC5fVZW4AUbtEcOFm2FvhSNdb2zghfPDwfWi0JWgDbYsVaOVpPP5dKX0W9dXZr5roEXbJCLnak41z35Wi7djO7hZ3g6k5kVPLAou4D9yJGiRWzaPFz3csapnTnYKmQF2Iecx1uQNedaJH2vXvf0DpSzQtai2UJWgNeR00TrgIfboXvR/bNfsDkrUHYBz7Nynpr8WS5rip7T4gWbswLFePAYOUkUgQ9zIj2rxQs2ivHgPnKMqC6oWhbRGj13ecFWa9MWISvAe+wQxUHuye7t0D3o+S1esJEV4D/kCNHcuwtHUTuyX7CRFeDNsaL9+a7KEdSeZSuVrAD7kdE9xag5xSJfyqXdobZlv2AjK1wNG7sY/578US7tFrUxeyvVQla4CjJy5DjDlCerrXbazBdsZIXZKQauGX+R/x2THAG12VnB/SIrwGOKUWsGX6RpWURL1PYWL9jICjMhQzpa1gz9TcqlQ6N+ZJ9gs5AVZkAGjLYVp6m4VF9aZQUO+Y+KDBetAzafEusZ9atFVuDTL6Mhg0Xl0aeWRbRG/WtRdkFWGAUZyQ5QM+JaLjHPVT+zyy4sHPLvHRkomhNfKq2rvy2ygu/Fp196REaJjkl2WxbRGvW9VVbgOGcvyBjROqD7sojWSAetsoLvyVbq2ayMck94+VOQLrKL8SzOMmSFs5Dyozqa4coiWiOdtCjRJiucgRQeHZMctiziCKQfSrRHRor2Yq9miG9SLoUHSE8c3BmVlcLvCXPUF5C+7LSUaI+CFBul8CnLIlojvTU7uFMeARlIoV581ZS9yNRlEUcgHbbICpRdZCAlRsckLcxDE5AeW2QFivH2IgVGBqGuJRnplKzQC1JatA64bFlEa6RbssLZWFkr5dXk8mURRyA9kxXOwAoqCnskKPEgpOsWB3ec5ZnK3kPKiV7ikFIPRjpvcZzTdqZE+xYpJCr/pSziRKR/skJLpIhoHXDIH9GAx8gOZIUWuPNFGY+E1/EdYXtIyApZqONRVKE8ukNklyUrZBbjXS8rqLPeMqspYxHWAZ0jG3HIfyvu5KrTNWEdMAiyFYf8X0Uds9JqHV8L64DBkM3ICs+iTkXrgFP+mB7sR7YjK0SoI9E64PdyKQyM7EhWqKEOcEzyQsie3v52BCcrLKw6ck94ezghtqvEUbxm860yXlZQg6OKRKZBEyP7XjsrlIbWOrGWpUMWT5uu88LkQsiu18sKaly4Dnggzh7uoAeGlce26QTIji0O7vSbFVaNzBJvry4Dw6/t+dzKoBT7ZR7csfSVFUqDag3NFkcBK/PbwJBwCH8AZKd5s4IaEH0upbVYqR4YVrDbwjqjY2SbubKCHvzM51LOEivaL3EcKRgYHWFbSObICnpgZieOkPU6gwX4yUj/zgqZB3csx2WF8rBaI0aTd+uM0kU4AOm7xcGd9llBNz97HdBaloGxXmewAG+EdStplRXyg5pu6vlc7YGzCxmjMdJpi6xgm+VmBN3QzlB72BWFgZGMdJidFTyg8tZ+ull2yeyMsh4YLL43Yr1JMrKC7ZEzldWNPDprD0Eei43otQVrihexziR7s0LOwS3d6KrrgCyhcnYH0t/WrJD3PVvf7ObmyGvClGgn0qGzgjNqTb9VKT/dj2720oORd8JiOQnp0gPBa60wKJef7Ec3m/19QGthACQhXXoA2B8PHQDsBO0TapV2Yh1KXqoxKj/dj262d1vqysJn5Xcg/fnt/JaSnJyvGOpGPVeF9ipOz45WRP6NSHfeBt2z+ZJTMKcbMf+/L86M1BIlId15muMF7t4ZR943bHUzG7j2kKuJ9eC1EI6eTNFn1jrTdsqzzc3NZ5d1RHcksmGYxjRAen16N+dJse1yP9+vG9oBag8bXZi6nETRdeauogeQbZhvP93UUbD20FEER+8A67zoPyvaW9qfDNMDsg8utBIr1o7uAftWpizB0U+m2CEz2jugHbO7pod41NYacaa8c/TSXOgE2aRFtHcgPvZ9ih7ouvZaY44QHH0wZKOlarNmzy3iaO/7nVNIqAc71dQalike2Z7L2dE5SDIYspej/d66/Vt5i/aSc6ewpSG1Bm6R24iOow+M7SdxdHaUrtn7VTk32t+ihmyd/zN1mRTZskW0t6/0VyulRj0z/19G7dv2YvkpTIZsm/2lNwdJB8h+XzCqcdH831GAbcaJkX0d7R2ha/bfIg6WYwRKNTTawurnM9aQhuzaItq3eUvbCjU2OgTPH8ueDNnUU95rRvtb1HCnvlqnFskrNYXTkB2X0uMo2z8rnhaPFe1rqAMevbUOLpJbcQeHIvs52md99Liv7csM1JkoIrCHPxiymbcws6O9ZwpzbYSoQ8z/J0L2yi5Gmyva36LOMf8fHNkouxhtvJ2craiTUbTgCwedItu0iPbXesGpDkdRg+OBHSF7EO2zUKej+X/ex0ZhF7JFdjHa9aL9LVKAR35NOYt8KZfCCUj/2cVojvbeGbpetK8hRUR7w8z/T0B6z4727c/SjoiUEimY+f9BSNfZ0d627bsC80ykmOjzh1/LpdAQ6Tk72vdZb98bUlI0//9cLoVkpNsW0d6DiGj/LFJWVAnInDEZ6dS7bpnR3ova+coTjmClxHuCUpOQLu2klB73gpW3UmZNmP/vRDp0tL/WscJRkBKj44/M/zci3WVHexa12Uih0eKL9PoC0ld2tPd9fD+ifTZSqncgakr/JuVSCJCusqP9nDX3PSHlRp8/4Y88P0D6aRHtvajl0NERSNHR/D/nz81PhvSSHe3ZwjwDKZz5/5NIF9nR3sIW5llI8cz/n0B6aBHtr1lz3xMyAPP/O6jvRPvZkTGY/9+gPreI9ryw6hEZJZr/X2InQv1sEe2pue8ZGSea/0//+RP1kWh/VWSkaP4/5edP1C+iPbw5ghdkNWMuMtXnD9Wf7GjvAeSBRLQfERnO6bpm2EWGn/+rDy2ivQcRxWgjIwPaMWrGXWTo+b/an/nxVwvRfiZkSE8HaoZeZLj5v9rsQe0FaJTZXhGi/YzIqNPM/9VWoj28how79Pxf7SPawzZk5Gj+3239j9qW/fFXov3VkLGjz590Vf+j9viFnducGe05aHJVZPRovtxF/Y/a0SLa+34cNLkyxRFqDrLIadWKenb2B6IsRHv4FzlB9PnDU+b/em725wCJ9vAeOURX8389L7s8gWgP95FjnD7/1zNalCcQ7SHmxmlq0mz+r3tnR3vvCnGsEJ5DjhJ9/tCS6ky6X6toz7FCeA05jd+c1hxqkbTvf+peLk8g2kM/yHkih9w1/9fvW5QneM1CtIf93DhWTTY5mn6XXYzmAcSxQshDzhTO/8ulT6HrW0V7jhVCPnKsaP7/1P6/rqP0GMZDDrZ5/q//1qIYze2h9BiO4cb5avJu/u9/k3jLsXb9FlnKE4j2cBxyuKfn//rflB7DXMjxwv1/ia/J3LenGA36QE4YDYBMIdpDX8gZWw8Aoj30ixwzKoHeKkR76B85aHgI5gUh2sN4yGH3LnCJ9jAuclyXLjh615z7nvh6v6Ul2sP42JEljuQ1Z18Lb2lhXuTcXhTfDoRlbs9bWgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAc/jw4R9oEwZlIHea6AAAAABJRU5ErkJggg==",width:24,height:24,preserveAspectRatio:"none"})))};var g,h;function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},f.apply(null,arguments)}const v=e=>{let{title:n,titleId:i,...o}=e;return c.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":i},o),n?c.createElement("title",{id:i},n):null,g||(g=c.createElement("g",{clipPath:"url(#gateway_svg__a)"},c.createElement("path",{fill:"#0025BF",d:"M0 15.631c0 1.137.884 2.084 2.02 2.147h16.23L0 .917z"}),c.createElement("path",{fill:"#0B51FF",d:"M8.083.917H0l18.314 16.924 5.683 5.242V15.63z"}),c.createElement("path",{fill:"#067DFF",d:"m8.083.917 15.914 14.714V8.18L16.167.917z"}),c.createElement("path",{fill:"#03A5FF",d:"M21.976.917h-5.81l7.831 7.262V3.064a2.026 2.026 0 0 0-2.02-2.147"}))),h||(h=c.createElement("defs",null,c.createElement("clipPath",{id:"gateway_svg__a"},c.createElement("path",{fill:"#fff",d:"M0 .917h24v22.166H0z"})))))};var A;function j(){return j=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},j.apply(null,arguments)}const b=e=>{let{title:n,titleId:i,...o}=e;return c.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":i},o),n?c.createElement("title",{id:i},n):null,A||(A=c.createElement("path",{fill:"#FF6A00",d:"M3.263 4.585C2.17 4.81.995 5.684.506 6.642.018 7.599 0 7.835 0 11.866c0 2.15.036 3.923.09 4.2a4.11 4.11 0 0 0 3.245 3.245c.498.09 6.97.136 6.97.036 0-.072-.551-2.242-.579-2.269-.009-.018-1.157-.271-2.55-.57-3.244-.705-3.15-.678-3.416-1.003l-.235-.28V8.662l.235-.285c.27-.326.172-.298 3.417-1.004l2.55-.57c.027-.019.578-2.188.578-2.257 0-.086-6.607-.045-7.042.045zm10.477.013c.01.163.515 2.152.57 2.206.018.027 1.256.308 2.74.624 1.482.316 2.802.637 2.92.705.158.092.292.223.388.38.145.253.163.524.163 3.435s-.018 3.181-.163 3.435a1.2 1.2 0 0 1-.389.38c-.117.063-1.425.379-2.92.704l-2.739.628c-.054.055-.56 2.043-.57 2.206 0 .1.651.117 3.508.09 3.937-.036 3.986-.045 4.99-.723a4.13 4.13 0 0 0 1.554-2.034c.208-.606.208-.66.208-4.683s0-4.077-.208-4.682a4.13 4.13 0 0 0-1.555-2.035c-1.003-.677-1.048-.687-4.99-.722-2.856-.027-3.507-.014-3.507.09zm-4.035 7.164a.65.65 0 0 0-.018.298c.027.15.19.163 2.314.19l2.278.018v-.633h-2.256c-1.89 0-2.278.018-2.314.127z"})))};var x,S;function y(){return y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var o in i)({}).hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},y.apply(null,arguments)}const E=e=>{let{title:n,titleId:i,...o}=e;return c.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24","aria-labelledby":i},o),n?c.createElement("title",{id:i},n):null,x||(x=c.createElement("g",{clipPath:"url(#tencent-sms_svg__a)"},c.createElement("path",{fill:"#00A3FF",d:"M20.743 17.32c-.385.373-1.155.933-2.504.933H9.956c2.505-2.333 4.623-4.293 4.816-4.48.193-.186.674-.653 1.156-1.026.963-.84 1.733-.934 2.407-.934.964 0 1.734.374 2.408.934 1.349 1.213 1.349 3.36 0 4.573m1.638-6.067c-.964-1.026-2.408-1.68-3.95-1.68-1.348 0-2.503.467-3.563 1.214-.385.373-.963.746-1.444 1.306-.386.374-8.668 8.214-8.668 8.214.481.093 1.059.093 1.54.093h10.499c.77 0 1.348 0 1.926-.093a6 6 0 0 0 3.563-1.494 5.21 5.21 0 0 0 .097-7.56"}),c.createElement("path",{fill:"#00C8DC",d:"M8.897 10.693c-1.06-.746-2.119-1.12-3.371-1.12-1.54 0-2.986.654-3.949 1.68-2.119 2.147-2.119 5.507.097 7.654.963.84 1.926 1.306 3.082 1.4l2.215-2.054H5.719c-1.252-.093-2.023-.466-2.504-.933a3.28 3.28 0 0 1-.097-4.667c.674-.653 1.445-.933 2.408-.933.578 0 1.445.093 2.312.933.385.374 1.444 1.12 1.83 1.494h.096l1.444-1.4v-.094c-.674-.653-1.733-1.493-2.311-1.96"}),c.createElement("path",{fill:"#006EFF",d:"M19.01 8.36c-1.06-2.8-3.853-4.76-7.031-4.76-3.756 0-6.742 2.707-7.32 6.067.29 0 .578-.094.963-.094.386 0 .867.094 1.252.094.482-2.334 2.6-4.014 5.105-4.014a5.34 5.34 0 0 1 4.816 2.987s.096.093.096 0c.674-.093 1.445-.28 2.119-.28q0 .14 0 0"}))),S||(S=c.createElement("defs",null,c.createElement("clipPath",{id:"tencent-sms_svg__a"},c.createElement("path",{fill:"#fff",d:"M0 3.6h24v16.8H0z"})))))};const w={id:"sms-connectors",title:"Conectores SMS",sidebar_label:"Conectores SMS",sidebar_position:1},P="Conectores SMS",R={},M=[{value:"Elige tu conector SMS",id:"elige-tu-conector-sms",level:2},{value:"Pasos de configuraci\xf3n",id:"pasos-de-configuraci\xf3n",level:2},{value:"Habilitar registro o inicio de sesi\xf3n con n\xfamero de tel\xe9fono",id:"habilitar-registro-o-inicio-de-sesi\xf3n-con-n\xfamero-de-tel\xe9fono",level:2},{value:"Preguntas frecuentes",id:"preguntas-frecuentes",level:2}];function z(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{CloudLink:i,Details:o}=n;return i||k("CloudLink",!0),o||k("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"conectores-sms",children:"Conectores SMS"})}),"\n",(0,t.jsx)(n.p,{children:"Configurar un conector SMS te permite enviar una contrase\xf1a de un solo uso (OTP) al n\xfamero de tel\xe9fono del usuario. Este mecanismo de autenticaci\xf3n sin contrase\xf1a puede ser utilizado en varios escenarios, incluyendo registro, inicio de sesi\xf3n, recuperaci\xf3n de contrase\xf1a y procesos de vinculaci\xf3n de cuentas, para validar la identidad del usuario. Simplifica la autenticaci\xf3n del usuario y mejora la seguridad al minimizar el riesgo de violaciones relacionadas con contrase\xf1as."}),"\n",(0,t.jsx)(n.h2,{id:"elige-tu-conector-sms",children:"Elige tu conector SMS"}),"\n",(0,t.jsx)(n.p,{children:"Logto tiene algunos conectores SMS integrados que permiten su uso inmediato:"}),"\n","\n",(0,t.jsx)(s.A,{items:[{type:"link",label:"Twilio SMS",href:"/integrations/twilio-sms",description:"El conector oficial de Logto para el servicio de mensajes cortos de Twilio.",customProps:{icon:(0,t.jsx)(d,{})}},{type:"link",label:"SMS Aero",href:"/integrations/smsaero",description:"El conector oficial de Logto para el servicio de mensajes cortos de SMSAero.",customProps:{icon:(0,t.jsx)(m,{})}},{type:"link",label:"GatewayAPI SMS",href:"/integrations/gatewayapi",description:"El conector oficial de Logto para GatewayAPI SMS.",customProps:{icon:(0,t.jsx)(v,{})}},{type:"link",label:"Aliyun SMS",href:"/integrations/aliyun-sms",description:"El conector oficial de Logto para el servicio de mensajes cortos de Aliyun.",customProps:{icon:(0,t.jsx)(b,{})}},{type:"link",label:"Tencent SMS",href:"/integrations/tencent-sms",description:"El conector oficial de Logto para el servicio de mensajes cortos de Tencent.",customProps:{icon:(0,t.jsx)(E,{})}}]}),"\n",(0,t.jsx)(n.h2,{id:"pasos-de-configuraci\xf3n",children:"Pasos de configuraci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"Sigue los pasos a continuaci\xf3n para agregar el conector SMS:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Navega a:"})," ",(0,t.jsx)(i,{to:"/connectors/passwordless",children:"Consola > Conector > Conectores de correo electr\xf3nico y SMS"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Para agregar un nuevo conector SMS:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'Haz clic en el bot\xf3n "Configurar" y selecciona tu proveedor de SMS deseado'}),"\n",(0,t.jsx)(n.li,{children:"Revisa la documentaci\xf3n README para tu proveedor elegido"}),"\n",(0,t.jsx)(n.li,{children:'Completa los campos requeridos en la secci\xf3n "Configuraci\xf3n de par\xe1metros"'}),"\n",(0,t.jsx)(n.li,{children:"Personaliza la plantilla SMS usando el editor JSON"}),"\n",(0,t.jsx)(n.li,{children:'Prueba tu configuraci\xf3n enviando un c\xf3digo de verificaci\xf3n a tu tel\xe9fono usando la plantilla "Gen\xe9rica"'}),"\n",(0,t.jsx)(n.li,{children:'Haz clic en "Guardar y Listo" para finalizar'}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Para cambiar a otro conector SMS:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Accede a la p\xe1gina de detalles del conector y haz clic en "Cambiar conector" en la esquina superior derecha'}),"\n",(0,t.jsx)(n.li,{children:"Alternativamente, elimina el conector existente y crea uno nuevo"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Solo puedes tener UN ",(0,t.jsx)(n.em,{children:"conector SMS"})," activo."]}),(0,t.jsx)(n.p,{children:'Cuando ya tienes un conector de correo electr\xf3nico, solo puedes seleccionar "Cambiar conector de correo electr\xf3nico". Al realizar esta operaci\xf3n en la consola, entra en vigor inmediatamente una vez guardado, as\xed que aseg\xfarate de probar tu configuraci\xf3n antes de guardar.'}),(0,t.jsx)(n.p,{children:'Para garantizar la estabilidad de tu servicio, los usuarios de Cloud pueden crear un inquilino de desarrollo para el entorno de desarrollo. Despu\xe9s de probar la configuraci\xf3n en el entorno de desarrollo, "migrar" la configuraci\xf3n a producci\xf3n y luego guardar la configuraci\xf3n.'})]}),"\n",(0,t.jsx)(n.h2,{id:"habilitar-registro-o-inicio-de-sesi\xf3n-con-n\xfamero-de-tel\xe9fono",children:"Habilitar registro o inicio de sesi\xf3n con n\xfamero de tel\xe9fono"}),"\n",(0,t.jsx)(n.p,{children:"Una vez que agregues con \xe9xito el conector SMS y completes la configuraci\xf3n, puedes habilitar configuraciones de inicio de sesi\xf3n y registro que dependen de tel\xe9fono + c\xf3digo de verificaci\xf3n, de acuerdo con tus necesidades comerciales."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Navega a"}),": ",(0,t.jsx)(i,{to:"/sign-in-experience/sign-up-and-sign-in",children:"Consola > Experiencia de inicio de sesi\xf3n > Registro e inicio de sesi\xf3n"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Establecer m\xe9todos de registro:"}),' Elige "N\xfamero de tel\xe9fono" o "Direcci\xf3n de correo electr\xf3nico o n\xfamero de tel\xe9fono" como el identificador de registro. ',(0,t.jsx)(n.strong,{children:"Nota: La verificaci\xf3n del n\xfamero de tel\xe9fono es actualmente obligatoria durante el registro."})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Establecer m\xe9todos de inicio de sesi\xf3n:"}),' El identificador de registro elegido se convierte autom\xe1ticamente en un m\xe9todo de inicio de sesi\xf3n. Haz clic en "Agregar otro" para opciones adicionales de inicio de sesi\xf3n.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Guardar cambios y probar:"}),' Haz clic en "Guardar cambios" para implementar la nueva experiencia de inicio de sesi\xf3n. Recuerda usar la "Vista previa en vivo" para probar la funcionalidad.']}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsx)(n.p,{children:"Debido a que nuestras configuraciones entran en vigor inmediatamente, eliminar el conector SMS existente puede afectar los procesos normales de inicio de sesi\xf3n y registro de los usuarios finales."}),(0,t.jsx)(n.p,{children:'Por ejemplo, si el identificador de inicio de sesi\xf3n incluye la combinaci\xf3n "n\xfamero de tel\xe9fono + c\xf3digo de verificaci\xf3n", eliminar el conector SMS existente impedir\xe1 que los usuarios reciban c\xf3digos de verificaci\xf3n por correo electr\xf3nico y resultar\xe1 en un error en el flujo de inicio de sesi\xf3n.'}),(0,t.jsx)(n.p,{children:"Por favor, ten en cuenta los riesgos potenciales al operar en conectores."})]}),"\n",(0,t.jsx)(n.h2,{id:"preguntas-frecuentes",children:"Preguntas frecuentes"}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"Logto no tiene el conector SMS que quiero usar. \xbfQu\xe9 debo hacer?"}),(0,t.jsxs)(n.p,{children:["Todav\xeda estamos trabajando en m\xe1s conectores. Si necesitas m\xe1s opciones, solo h\xe1znoslo saber en Discord y presenta una Solicitud de Funci\xf3n en ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/issues",children:"GitHub"}),". Si necesitas m\xe1s ayuda, tambi\xe9n puedes ",(0,t.jsx)(n.a,{href:"mailto:contact@logto.io",children:"contactarnos por correo electr\xf3nico"}),"."]}),(0,t.jsxs)(n.p,{children:["Para los usuarios de Logto de c\xf3digo abierto, proporcionamos un m\xe9todo de creaci\xf3n de conectores f\xe1cil de extender, permiti\xe9ndote ",(0,t.jsx)(n.a,{href:"/logto-oss/develop-your-connector",children:"personalizar tu propio conector"})," basado en tus escenarios espec\xedficos. Siempre eres bienvenido a enviar una solicitud de extracci\xf3n a Logto, para que otros en la comunidad tambi\xe9n puedan beneficiarse de tu trabajo."]})]})]})}function C(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(z,{...e})}):z(e)}function k(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},70885:(e,n,i)=>{i.d(n,{W:()=>l});var o=i(30758),r=i(73658);const t=["zero","one","two","few","many","other"];function a(e){return t.filter((n=>e.includes(n)))}const s={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,o.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:a(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),s}}),[e])}function l(){const e=c();return{selectMessage:(n,i)=>function(e,n,i){const o=e.split("|");if(1===o.length)return o[0];o.length>i.pluralForms.length&&console.error(`For locale=${i.locale}, a maximum of ${i.pluralForms.length} plural forms are expected (${i.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const r=i.select(n),t=i.pluralForms.indexOf(r);return o[Math.min(t,o.length-1)]}(i,n,e)}}},22211:(e,n,i)=>{i.d(n,{A:()=>A});var o=i(36679),r=i(39798),t=i(51074),a=i(7614),s=i(70885),c=i(13526);const l={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=i(86070);function u(e){let{href:n,children:i}=e;return(0,d.jsx)(r.A,{href:n,className:(0,c.A)("card padding--lg",l.cardContainer),children:i})}function p(e){let{href:n,icon:i,title:o,description:r}=e;return(0,d.jsxs)(u,{href:n,children:[i,(0,d.jsx)("label",{className:(0,c.A)("text--truncate",l.cardTitle),title:o,children:o}),r&&(0,d.jsx)("p",{className:l.cardDescription,title:r,children:r})]})}function m(e){let{item:n}=e;const i=(0,o.Nr)(n),r=function(){const{selectMessage:e}=(0,s.W)();return n=>e(n,(0,t.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return i?(0,d.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??r(n.items.length)}):null}function g(e){let{item:n}=e;const i=(0,a.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(n.docId??void 0);return(0,d.jsx)(p,{href:n.href,icon:n.customProps?.icon??i,title:n.label,description:n.description??r?.description})}function h(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(g,{item:n});case"category":return(0,d.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}const f={section:"section_jTJS"};function v(e){let{className:n}=e;const i=(0,o.$S)();return(0,d.jsx)(A,{items:i.items,className:n})}function A(e){const{items:n,className:i}=e;if(!n)return(0,d.jsx)(v,{...e});const r=(0,o.d1)(n);return(0,d.jsx)("section",{className:(0,c.A)(f.section,i),children:r.map(((e,n)=>(0,d.jsx)("article",{className:f.article,children:(0,d.jsx)(h,{item:e})},n)))})}},15658:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var o=i(30758);const r={},t=o.createContext(r);function a(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);