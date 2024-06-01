"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[65437],{82808:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=n(86070),o=n(25710),i=n(42648),s=n(8625);const a={sidebar_label:"Spring Boot"},c="Protect your API on Spring Boot",l={id:"docs/recipes/protect-your-api/spring-boot",title:"Protect your API on Spring Boot",description:"This tutorial assumes you have created an API Resource http3000/ in Admin Console.",source:"@site/docs/docs/recipes/protect-your-api/spring-boot.mdx",sourceDirName:"docs/recipes/protect-your-api",slug:"/docs/recipes/protect-your-api/spring-boot",permalink:"/docs/recipes/protect-your-api/spring-boot",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/protect-your-api/spring-boot.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Spring Boot"},sidebar:"docsSidebar",previous:{title:"Python",permalink:"/docs/recipes/protect-your-api/python"},next:{title:"\ud83c\udfa8 Customize sign-in experience",permalink:"/docs/recipes/customize-sie/"}},u={},d=[{value:"Start a Spring Boot project",id:"start-a-spring-boot-project",level:2},{value:"Add dependencies",id:"add-dependencies",level:2},{value:"Get issuer and JWKS URI",id:"get-issuer-and-jwks-uri",level:2},{value:"Configure application",id:"configure-application",level:2},{value:"Provide audience validator",id:"provide-audience-validator",level:2},{value:"Configure Spring Security",id:"configure-spring-security",level:2},{value:"Add APIs",id:"add-apis",level:2},{value:"Access protected API",id:"access-protected-api",level:2},{value:"Further readings",id:"further-readings",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"protect-your-api-on-spring-boot",children:"Protect your API on Spring Boot"}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["This tutorial assumes you have created an API Resource ",(0,t.jsx)(r.code,{children:"http://localhost:3000/"})," in Admin Console.\nIf you are not ready, ",(0,t.jsx)(r.a,{href:"/docs/recipes/protect-your-api/#register-the-api-resources-using-logto-admin-console",children:"read this"})," before continuing."]})}),"\n",(0,t.jsx)(r.p,{children:"Your web application may run on the server-side using Spring Boot framework.\nFor now, you need to integrate Logto in Spring Boot manually.\nThis article guides you on how to finish it step by step.\nAnd we use Gradle, Java, and Spring Security to take the example."}),"\n",(0,t.jsx)(r.h2,{id:"start-a-spring-boot-project",children:"Start a Spring Boot project"}),"\n",(0,t.jsxs)(r.p,{children:["With ",(0,t.jsx)(r.a,{href:"https://start.spring.io/",children:"Spring Initializr"}),", you can quickly start a Spring Boot project.\nUse the following options:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Gradle Project"}),"\n",(0,t.jsx)(r.li,{children:"Language: Java"}),"\n",(0,t.jsx)(r.li,{children:"Spring Boot: 2.7.2"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Generate and open the project."}),"\n",(0,t.jsx)(r.h2,{id:"add-dependencies",children:"Add dependencies"}),"\n",(0,t.jsxs)(r.p,{children:["Add the dependencies to your Gradle project build file ",(0,t.jsx)(r.code,{children:"build.gradle"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-groovy",children:"dependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-web'\n    implementation 'org.springframework.boot:spring-boot-starter-oauth2-resource-server'\n}\n"})}),"\n",(0,t.jsxs)(r.admonition,{type:"note",children:[(0,t.jsx)(r.p,{children:"Since Spring Boot and Spring Security have built-in support for both OAuth2 resource server and JWT validation,\nyou DO NOT need to add additional libraries from Logto to integrate."}),(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/index.html",children:"Spring Security OAuth 2.0 Resource Server"}),"\nand ",(0,t.jsx)(r.a,{href:"https://spring.io/guides/topicals/spring-security-architecture",children:"Spring Security Architecture"}),"\nfor more details."]})]}),"\n",(0,t.jsx)(r.h2,{id:"get-issuer-and-jwks-uri",children:"Get issuer and JWKS URI"}),"\n",(0,t.jsxs)(r.p,{children:["All tokens are issued by the ",(0,t.jsx)(r.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier",children:"issuer"}),",\nand signed with ",(0,t.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc7517",children:"JWK"}),"\n(See ",(0,t.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515",children:"JWS"})," for more details)."]}),"\n",(0,t.jsxs)(r.p,{children:["Before moving on, you will need to get an issuer and a JWKS URI to verify the issuer and the signature of the Bearer Token (",(0,t.jsx)(r.code,{children:"access_token"}),")."]}),"\n",(0,t.jsxs)(r.p,{children:["By default, your Logto's issuer and JWKS URI are ",(0,t.jsx)(r.code,{children:"https://<your-logto-domain>/oidc"})," and ",(0,t.jsx)(r.code,{children:"https://<your-logto-domain>/oidc/jwks"}),"\n(e.g. ",(0,t.jsx)(r.code,{children:"http://localhost:3001/oidc"})," and ",(0,t.jsx)(r.code,{children:"http://localhost:3001/oidc/jwks"})," in the local development environment)."]}),"\n",(0,t.jsxs)(r.admonition,{type:"note",children:[(0,t.jsxs)(r.p,{children:["All the latest Logto Authorization Server Configurations can be found by ",(0,t.jsx)(r.code,{children:"https://<your-logto-domain>/oidc/.well-known/openid-configuration"}),"\n(e.g. ",(0,t.jsx)(r.code,{children:"http://localhost:3001/oidc/.well-known/openid-configuration"})," in the local development environment),\nincluding the ",(0,t.jsx)(r.strong,{children:"issuer"}),", ",(0,t.jsx)(r.strong,{children:"jwks_uri"})," and other authorization configs.\nFor example:"]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  // ...\n  "issuer": "https://<your-logto-domain>/oidc",\n  "jwks_uri": "https://<your-logto-domain>/oidc/jwks"\n  // ...\n}\n'})})]}),"\n",(0,t.jsx)(r.h2,{id:"configure-application",children:"Configure application"}),"\n",(0,t.jsxs)(r.p,{children:["Use an ",(0,t.jsx)(r.code,{children:"application.yml"})," file (instead of the default ",(0,t.jsx)(r.code,{children:"application.properties"}),")\nto configure the server port, audience, and OAuth2 resource server."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"# path/to/project/src/main/resources/application.yaml\nserver:\n  port: 3000\n\nlogto:\n  audience: http://localhost:3000/\n\nspring:\n  security:\n    oauth2:\n      resourceserver:\n        jwt:\n          issuer-uri: <your-logto-issuer-uri> # e.g. http://localhost:3001/oidc\n          jwk-set-uri: <your-logto-jwks-uri> # e.g. http://localhost:3001/oidc/jwks\n"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"audience"}),":\nThe unique API identifier (i.e. API indicator) of your protected API resource."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"spring.security.oauth2.resourceserver.jwt.issuer-uri"}),":\nThe ",(0,t.jsx)(r.code,{children:"iss"})," claim value and the issuer URI in the JWT issued by Logto.\nFill out the ",(0,t.jsx)(r.code,{children:"issuer"})," value from the previous section."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"spring.security.oauth2.resourceserver.jwt.jwk-set-uri"}),":\nSpring Security uses this URI to get the authorization server's public keys to validate JWT signatures.\nFill out the ",(0,t.jsx)(r.code,{children:"jwks_uri"})," value from the previous section."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"provide-audience-validator",children:"Provide audience validator"}),"\n",(0,t.jsxs)(r.p,{children:["Provide your own ",(0,t.jsx)(r.code,{children:"AudienceValidator"})," class that implements the ",(0,t.jsx)(r.code,{children:"OAuth2TokenValidator"})," interface\nto validate whether the required audience is present in the JWT."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'// path/to/project/src/main/java/io/logto/springboot/sample/validator/AudienceValidator.java\npackage io.logto.springboot.sample.validator;\n\nimport org.springframework.security.oauth2.core.OAuth2Error;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidator;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidatorResult;\nimport org.springframework.security.oauth2.jwt.Jwt;\n\npublic class AudienceValidator implements OAuth2TokenValidator<Jwt> {\n\n    private final String audience;\n\n    public AudienceValidator(String audience) {\n        this.audience = audience;\n    }\n\n    @Override\n    public OAuth2TokenValidatorResult validate(Jwt jwt) {\n        if (!jwt.getAudience().contains(audience)) {\n            return OAuth2TokenValidatorResult.failure(new OAuth2Error("invalid_token", "Required audience not found", null));\n        }\n\n      // Optional: For RBAC validate the scopes of the JWT.\n      String scopes = jwt.getClaimAsString("scope");\n      if (scopes == null || !scopes.contains("read:profile")) {\n          return OAuth2TokenValidatorResult.failure(new OAuth2Error("invalid_token", "Insufficient permission", null));\n      }\n\n\n        return OAuth2TokenValidatorResult.success();\n    }\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"configure-spring-security",children:"Configure Spring Security"}),"\n",(0,t.jsx)(r.p,{children:"Spring Security makes it easy to configure your application as a Resource Server\nand validate the JWT from the Bearer Token in the request header."}),"\n",(0,t.jsxs)(r.p,{children:["You need to provide instances of ",(0,t.jsx)(r.code,{children:"JwtDecoder"})," and ",(0,t.jsx)(r.code,{children:"SecurityFilterChain"})," (as Spring beans), and add the ",(0,t.jsx)(r.code,{children:"@EnableWebSecurity"})," annotation."]}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["Logto uses the ",(0,t.jsx)(r.code,{children:"ES384"})," algorithm to sign the JWTs by default. To decode the JWTs, you need to set the ",(0,t.jsx)(r.code,{children:"jwsAlgorithm"})," to ",(0,t.jsx)(r.code,{children:"ES384"})," explicitly.\nIf you prefer to use ",(0,t.jsx)(r.code,{children:"RSA"}),", feel free to rotate the signing algorithm in the Logto Admin Console. Please refer to ",(0,t.jsx)(r.a,{href:"/docs/references/openid-connect/signing-keys-rotation",children:"Signing keys"})," for more details."]})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'// path/to/project/src/main/java/io/logto/springboot/sample/configuration/SecurityConfiguration.java\npackage io.logto.springboot.sample.configuration;\n\nimport com.nimbusds.jose.JOSEObjectType;\nimport com.nimbusds.jose.proc.DefaultJOSEObjectTypeVerifier;\nimport com.nimbusds.jose.proc.SecurityContext;\nimport io.logto.springboot.sample.validator.AudienceValidator;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.security.config.Customizer;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;\nimport org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidator;\nimport org.springframework.security.oauth2.jwt.JwtDecoder;\nimport org.springframework.security.oauth2.jwt.JwtValidators;\nimport org.springframework.security.oauth2.jwt.NimbusJwtDecoder;\nimport org.springframework.security.oauth2.jose.jws.SignatureAlgorithm;\nimport org.springframework.security.web.DefaultSecurityFilterChain;\n\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfiguration {\n\n    @Value("${logto.audience}")\n    private String audience;\n\n    @Value("${spring.security.oauth2.resourceserver.jwt.issuer-uri}")\n    private String issuer;\n\n    @Value("${spring.security.oauth2.resourceserver.jwt.jwk-set-uri}")\n    private String jwksUri;\n\n    @Bean\n    public JwtDecoder jwtDecoder() {\n        NimbusJwtDecoder jwtDecoder = NimbusJwtDecoder.withJwkSetUri(jwksUri)\n                // Logto uses the ES384 algorithm to sign the JWTs by default.\n                .jwsAlgorithm(ES384)\n                // The decoder should support the token type: Access Token + JWT.\n                .jwtProcessorCustomizer(customizer -> customizer.setJWSTypeVerifier(\n                        new DefaultJOSEObjectTypeVerifier<SecurityContext>(new JOSEObjectType("at+jwt"))))\n                .build();\n\n        jwtDecoder.setJwtValidator(new DelegatingOAuth2TokenValidator<>(\n                new AudienceValidator(audience),\n                new JwtIssuerValidator(issuer),\n                new JwtTimestampValidator()));\n\n        return jwtDecoder;\n    }\n\n    @Bean\n    public DefaultSecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n         http\n          .securityMatcher("/api/**")\n          .oauth2ResourceServer(oauth2 -> oauth2\n              .jwt(Customizer.withDefaults()))\n          .authorizeHttpRequests(requests -> requests\n              // Allow all requests to the public APIs.\n              .requestMatchers("/api/.wellknown/**").permitAll()\n              // Require jwt token validation for the protected APIs.\n              .anyRequest().authenticated());\n\n        return http.build();\n    }\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"add-apis",children:"Add APIs"}),"\n",(0,t.jsx)(r.p,{children:"Add a controller to provide the protected and public APIs:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'// path/to/project/src/main/java/io/logto/springboot/sample/controller/ProtectedController.java\npackage io.logto.springboot.sample.controller;\n\nimport org.springframework.web.bind.annotation.CrossOrigin;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n// Only allow all origins for the sample.\n// (Production applications should configure CORS carefully.)\n@CrossOrigin(origins = "*")\n@RestController\npublic class ProtectedController {\n    @GetMapping("/api/profile")\n    public String protectedProfile() {\n        return "Protected profile.";\n    }\n\n    @GetMapping("/api/.wellknown/config.json")\n    public String publicConfig() {\n        return "Public config.";\n    }\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"access-protected-api",children:"Access protected API"}),"\n",(0,t.jsxs)(r.p,{children:["Build and run your Spring Boot web application, e.g. execute the ",(0,t.jsx)(r.code,{children:"bootRun"})," Gradle task."]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"linux-or-macos",label:"Linux or macOS",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"./gradlew bootRun\n"})})}),(0,t.jsx)(i.A,{value:"windows",label:"Windows",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"gradlew.bat bootRun\n"})})})]}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["This tutorial assumes you have the Access Token for an API resource ",(0,t.jsx)(r.code,{children:"http://localhost:3000/"})," before making a request.\nIf you are not ready, ",(0,t.jsx)(r.a,{href:"/docs/recipes/protect-your-api/#integrate-the-resources-authorization-flow-into-your-client-application",children:"read this"})," before continuing."]})}),"\n",(0,t.jsxs)(r.p,{children:["Request your protected API with the Access Token as the Bearer token in the Authorization header,\ne.g. execute the ",(0,t.jsx)(r.code,{children:"curl"})," command."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"curl --include 'http://localhost:3000/api/profile' \\\n--header 'Authorization: Bearer <your-access-token>'\n"})}),"\n",(0,t.jsx)(r.p,{children:"If succeeded, you will get a response with 200 status:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"HTTP/1.1 200\n...\n"})}),"\n",(0,t.jsx)(r.p,{children:"Otherwise, you will get a response with 401 status like this:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'HTTP/1.1 401\n...\nWWW-Authenticate: Bearer error="invalid_token", error_description="An error occurred while attempting to decode the Jwt: Signed JWT rejected: Invalid signature", error_uri="https://tools.ietf.org/html/rfc6750#section-3.1"\n...\n'})}),"\n",(0,t.jsx)(r.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/recipes/protect-your-api/",children:"Protect your API"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/index.html",children:"Spring Security OAuth 2.0 Resource Server"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://spring.io/guides/topicals/spring-security-architecture",children:"Spring Security Architecture"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},42648:(e,r,n)=>{n.d(r,{A:()=>s});n(30758);var t=n(13526);const o={tabItem:"tabItem_CPPL"};var i=n(86070);function s(e){let{children:r,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,s),hidden:n,children:r})}},8625:(e,r,n)=>{n.d(r,{A:()=>v});var t=n(30758),o=n(13526),i=n(42426),s=n(25557),a=n(41917),c=n(37263),l=n(36820),u=n(14256);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:o}}=e;return{value:r,label:n,attributes:t,default:o}}))}(n);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:n}=e;const o=(0,s.W6)(),i=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(o.location.search);r.set(i,e),o.replace({...o.location,search:r.toString()})}),[i,o])]}function m(e){const{defaultValue:r,queryString:n=!1,groupId:o}=e,i=p(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:i}))),[l,d]=g({queryString:n,groupId:o}),[m,f]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,i]=(0,u.Dv)(n);return[o,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:o}),j=(()=>{const e=l??m;return h({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{j&&c(j)}),[j]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=n(83167);const j={tabList:"tabList_sCMz",tabItem:"tabItem_PGoX"};var b=n(86070);function y(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const r=e.currentTarget,n=c.indexOf(r),o=a[n].value;o!==t&&(l(r),s(o))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},r),children:a.map((e=>{let{value:r,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>c.push(e),onKeyDown:d,onClick:u,...i,className:(0,o.A)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function x(e){let{lazy:r,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function w(e){const r=m(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",j.tabList),children:[(0,b.jsx)(y,{...r,...e}),(0,b.jsx)(x,{...r,...e})]})}function v(e){const r=(0,f.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(r))}},25710:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var t=n(30758);const o={},i=t.createContext(o);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);