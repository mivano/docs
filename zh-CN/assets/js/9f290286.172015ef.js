"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[90385],{56372:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"authorization/api-resources/spring-boot","title":"\u6307\u5357\uff1aSpring Boot","description":"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u5ba2\u6237\u7aef\u5df2\u7ecf\u83b7\u5f97\u4e86\u4e00\u4e2a\u6709\u6548\u7684 access_token \u5e76\u5c06\u5176\u9644\u52a0\u5230\u8bf7\u6c42\u5934\u4e2d\u4f5c\u4e3a Authorization: Bearer","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/authorization/api-resources/spring-boot.mdx","sourceDirName":"authorization/api-resources","slug":"/authorization/api-resources/spring-boot","permalink":"/zh-CN/authorization/api-resources/spring-boot","draft":false,"unlisted":false,"editUrl":"https://github.com/logto-io/docs/tree/master/i18n/zh-CN/docusaurus-plugin-content-docs/current/authorization/api-resources/spring-boot.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docsSidebar","previous":{"title":"\u6307\u5357\uff1aNode (Express)","permalink":"/zh-CN/authorization/api-resources/node-express"},"next":{"title":"\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236","permalink":"/zh-CN/authorization/role-based-access-control/"}}');var i=n(86070),o=n(15658),s=n(78551),a=n(77501);const c={sidebar_position:4},l="\u6307\u5357\uff1aSpring Boot",u={},d=[{value:"\u542f\u52a8\u4e00\u4e2a Spring Boot \u9879\u76ee",id:"\u542f\u52a8\u4e00\u4e2a-spring-boot-\u9879\u76ee",level:2},{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",level:2},{value:"\u83b7\u53d6\u53d1\u884c\u8005\u548c JWKS URI",id:"\u83b7\u53d6\u53d1\u884c\u8005\u548c-jwks-uri",level:2},{value:"\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f",id:"\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"\u63d0\u4f9b\u53d7\u4f17\u9a8c\u8bc1\u5668",id:"\u63d0\u4f9b\u53d7\u4f17\u9a8c\u8bc1\u5668",level:2},{value:"\u914d\u7f6e Spring Security",id:"\u914d\u7f6e-spring-security",level:2},{value:"\u6dfb\u52a0 API",id:"\u6dfb\u52a0-api",level:2},{value:"\u8bbf\u95ee\u53d7\u4fdd\u62a4\u7684 API",id:"\u8bbf\u95ee\u53d7\u4fdd\u62a4\u7684-api",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"\u6307\u5357spring-boot",children:"\u6307\u5357\uff1aSpring Boot"})}),"\n",(0,i.jsxs)(r.p,{children:["\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u5ba2\u6237\u7aef\u5df2\u7ecf\u83b7\u5f97\u4e86\u4e00\u4e2a\u6709\u6548\u7684 ",(0,i.jsx)(r.code,{children:"access_token"})," \u5e76\u5c06\u5176\u9644\u52a0\u5230\u8bf7\u6c42\u5934\u4e2d\u4f5c\u4e3a ",(0,i.jsx)(r.code,{children:"Authorization: Bearer <access_token>"})]}),"\n",(0,i.jsx)(r.p,{children:"\u4f60\u7684 Web \u5e94\u7528\u7a0b\u5e8f\u53ef\u80fd\u5728\u670d\u52a1\u5668\u7aef\u4f7f\u7528 Spring Boot \u6846\u67b6\u8fd0\u884c\u3002\u73b0\u5728\uff0c\u4f60\u9700\u8981\u5728 Spring Boot \u4e2d\u624b\u52a8\u96c6\u6210 Logto\u3002\u672c\u6587\u5c06\u6307\u5bfc\u4f60\u5982\u4f55\u4e00\u6b65\u6b65\u5b8c\u6210\u5b83\u3002\u6211\u4eec\u4f7f\u7528 Gradle\u3001Java \u548c Spring Security \u4f5c\u4e3a\u793a\u4f8b\u3002"}),"\n",(0,i.jsx)(r.h2,{id:"\u542f\u52a8\u4e00\u4e2a-spring-boot-\u9879\u76ee",children:"\u542f\u52a8\u4e00\u4e2a Spring Boot \u9879\u76ee"}),"\n",(0,i.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(r.a,{href:"https://start.spring.io/",children:"Spring Initializr"}),"\uff0c\u4f60\u53ef\u4ee5\u5feb\u901f\u542f\u52a8\u4e00\u4e2a Spring Boot \u9879\u76ee\u3002\u4f7f\u7528\u4ee5\u4e0b\u9009\u9879\uff1a"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Gradle Project"}),"\n",(0,i.jsx)(r.li,{children:"Language: Java"}),"\n",(0,i.jsx)(r.li,{children:"Spring Boot: 2.7.2"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"\u751f\u6210\u5e76\u6253\u5f00\u9879\u76ee\u3002"}),"\n",(0,i.jsx)(r.h2,{id:"\u6dfb\u52a0\u4f9d\u8d56",children:"\u6dfb\u52a0\u4f9d\u8d56"}),"\n",(0,i.jsxs)(r.p,{children:["\u5c06\u4f9d\u8d56\u9879\u6dfb\u52a0\u5230\u4f60\u7684 Gradle \u9879\u76ee\u6784\u5efa\u6587\u4ef6 ",(0,i.jsx)(r.code,{children:"build.gradle"})," \u4e2d\uff1a"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-groovy",children:"dependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-web'\n    implementation 'org.springframework.boot:spring-boot-starter-oauth2-resource-server'\n}\n"})}),"\n",(0,i.jsxs)(r.admonition,{type:"note",children:[(0,i.jsx)(r.p,{children:"\u7531\u4e8e Spring Boot \u548c Spring Security \u5bf9 OAuth2 \u8d44\u6e90\u670d\u52a1\u5668\u548c JWT \u9a8c\u8bc1\u90fd\u6709\u5185\u7f6e\u652f\u6301\uff0c\u4f60\u4e0d\u9700\u8981\u6dfb\u52a0\u6765\u81ea Logto \u7684\u989d\u5916\u5e93\u6765\u8fdb\u884c\u96c6\u6210\u3002"}),(0,i.jsxs)(r.p,{children:["\u67e5\u770b ",(0,i.jsx)(r.a,{href:"https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/index.html",children:"Spring Security OAuth 2.0 Resource Server"})," \u548c ",(0,i.jsx)(r.a,{href:"https://spring.io/guides/topicals/spring-security-architecture",children:"Spring Security Architecture"})," \u4ee5\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"]})]}),"\n",(0,i.jsx)(r.h2,{id:"\u83b7\u53d6\u53d1\u884c\u8005\u548c-jwks-uri",children:"\u83b7\u53d6\u53d1\u884c\u8005\u548c JWKS URI"}),"\n",(0,i.jsxs)(r.p,{children:["\u6240\u6709\u4ee4\u724c\u90fd\u7531 ",(0,i.jsx)(r.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier",children:"\u53d1\u884c\u8005"})," \u53d1\u884c\uff0c\u5e76\u4f7f\u7528 ",(0,i.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc7517",children:"JWK"})," \u7b7e\u540d\uff08\u53c2\u89c1 ",(0,i.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/html/rfc7515",children:"JWS"})," \u4ee5\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff09\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:["\u5728\u7ee7\u7eed\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u83b7\u53d6\u4e00\u4e2a\u53d1\u884c\u8005\u548c\u4e00\u4e2a JWKS URI \u6765\u9a8c\u8bc1\u53d1\u884c\u8005\u548c Bearer Token (",(0,i.jsx)(r.code,{children:"access_token"}),") \u7684\u7b7e\u540d\u3002"]}),"\n",(0,i.jsxs)(r.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f60\u7684 Logto \u7684\u53d1\u884c\u8005\u548c JWKS URI \u662f ",(0,i.jsx)(r.code,{children:"https://<your-logto-domain>/oidc"})," \u548c ",(0,i.jsx)(r.code,{children:"https://<your-logto-domain>/oidc/jwks"})]}),"\n",(0,i.jsxs)(r.p,{children:["\u6240\u6709\u6700\u65b0\u7684 Logto \u6388\u6743\u670d\u52a1\u5668\u914d\u7f6e\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(r.code,{children:"https://<your-logto-domain>/oidc/.well-known/openid-configuration"})," \u627e\u5230\uff0c\u5305\u62ec ",(0,i.jsx)(r.strong,{children:"issuer"}),"\u3001",(0,i.jsx)(r.strong,{children:"jwks_uri"})," \u548c\u5176\u4ed6\u6388\u6743\u914d\u7f6e\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-json",children:'{\n  // ...\n  "issuer": "https://<your-logto-domain>/oidc",\n  "jwks_uri": "https://<your-logto-domain>/oidc/jwks"\n  // ...\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f",children:"\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,i.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(r.code,{children:"application.yml"})," \u6587\u4ef6\uff08\u800c\u4e0d\u662f\u9ed8\u8ba4\u7684 ",(0,i.jsx)(r.code,{children:"application.properties"}),"\uff09\u6765\u914d\u7f6e\u670d\u52a1\u5668\u7aef\u53e3\u3001\u53d7\u4f17\u548c OAuth2 \u8d44\u6e90\u670d\u52a1\u5668\u3002"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:"# path/to/project/src/main/resources/application.yaml\nserver:\n  port: 3000\n\nlogto:\n  audience: http://localhost:3000/\n\nspring:\n  security:\n    oauth2:\n      resourceserver:\n        jwt:\n          issuer-uri: <your-logto-issuer-uri>\n          jwk-set-uri: <your-logto-jwks-uri>\n"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"audience"}),"\uff1a\u53d7\u4fdd\u62a4\u7684 API \u8d44\u6e90\u7684\u552f\u4e00 API \u6807\u8bc6\u7b26\uff08\u5373 API \u6307\u793a\u5668\uff09\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"spring.security.oauth2.resourceserver.jwt.issuer-uri"}),"\uff1aLogto \u53d1\u884c\u7684 JWT \u4e2d\u7684 ",(0,i.jsx)(r.code,{children:"iss"})," \u58f0\u660e\u503c\u548c\u53d1\u884c\u8005 URI\u3002\u586b\u5199\u4e0a\u4e00\u8282\u4e2d\u7684 ",(0,i.jsx)(r.code,{children:"issuer"})," \u503c\u3002"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"spring.security.oauth2.resourceserver.jwt.jwk-set-uri"}),"\uff1aSpring Security \u4f7f\u7528\u6b64 URI \u83b7\u53d6\u6388\u6743\u670d\u52a1\u5668\u7684\u516c\u94a5\u4ee5\u9a8c\u8bc1 JWT \u7b7e\u540d\u3002\u586b\u5199\u4e0a\u4e00\u8282\u4e2d\u7684 ",(0,i.jsx)(r.code,{children:"jwks_uri"})," \u503c\u3002"]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"\u63d0\u4f9b\u53d7\u4f17\u9a8c\u8bc1\u5668",children:"\u63d0\u4f9b\u53d7\u4f17\u9a8c\u8bc1\u5668"}),"\n",(0,i.jsxs)(r.p,{children:["\u63d0\u4f9b\u4f60\u81ea\u5df1\u7684 ",(0,i.jsx)(r.code,{children:"AudienceValidator"})," \u7c7b\uff0c\u8be5\u7c7b\u5b9e\u73b0 ",(0,i.jsx)(r.code,{children:"OAuth2TokenValidator"})," \u63a5\u53e3\uff0c\u4ee5\u9a8c\u8bc1 JWT \u4e2d\u662f\u5426\u5b58\u5728\u6240\u9700\u7684\u53d7\u4f17\u3002"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'// path/to/project/src/main/java/io/logto/springboot/sample/validator/AudienceValidator.java\npackage io.logto.springboot.sample.validator;\n\nimport org.springframework.security.oauth2.core.OAuth2Error;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidator;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidatorResult;\nimport org.springframework.security.oauth2.jwt.Jwt;\n\npublic class AudienceValidator implements OAuth2TokenValidator<Jwt> {\n\n    private final String audience;\n\n    public AudienceValidator(String audience) {\n        this.audience = audience;\n    }\n\n    @Override\n    public OAuth2TokenValidatorResult validate(Jwt jwt) {\n        if (!jwt.getAudience().contains(audience)) {\n            return OAuth2TokenValidatorResult.failure(new OAuth2Error("invalid_token", "Required audience not found", null));\n        }\n\n\t      // \u53ef\u9009\uff1a\u5bf9\u4e8e RBAC \u9a8c\u8bc1 JWT \u7684\u6743\u9650\u3002\n\t      String scopes = jwt.getClaimAsString("scope");\n\t      if (scopes == null || !scopes.contains("read:profile")) {\n\t          return OAuth2TokenValidatorResult.failure(new OAuth2Error("invalid_token", "Insufficient permission", null));\n\t      }\n\n        return OAuth2TokenValidatorResult.success();\n    }\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"\u914d\u7f6e-spring-security",children:"\u914d\u7f6e Spring Security"}),"\n",(0,i.jsx)(r.p,{children:"Spring Security \u4f7f\u5f97\u5c06\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u4e3a\u8d44\u6e90\u670d\u52a1\u5668\u5e76\u9a8c\u8bc1\u8bf7\u6c42\u5934\u4e2d\u7684 Bearer Token \u7684 JWT \u53d8\u5f97\u7b80\u5355\u3002"}),"\n",(0,i.jsxs)(r.p,{children:["\u4f60\u9700\u8981\u63d0\u4f9b ",(0,i.jsx)(r.code,{children:"JwtDecoder"})," \u548c ",(0,i.jsx)(r.code,{children:"SecurityFilterChain"})," \u7684\u5b9e\u4f8b\uff08\u4f5c\u4e3a Spring bean\uff09\uff0c\u5e76\u6dfb\u52a0 ",(0,i.jsx)(r.code,{children:"@EnableWebSecurity"})," \u6ce8\u89e3\u3002"]}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsxs)(r.p,{children:["Logto \u9ed8\u8ba4\u4f7f\u7528 ",(0,i.jsx)(r.code,{children:"ES384"})," \u7b97\u6cd5\u6765\u7b7e\u7f72 JWT\u3002\u8981\u89e3\u7801 JWT\uff0c\u4f60\u9700\u8981\u5c06 ",(0,i.jsx)(r.code,{children:"jwsAlgorithm"})," \u663e\u5f0f\u8bbe\u7f6e\u4e3a ",(0,i.jsx)(r.code,{children:"ES384"}),"\u3002\u5982\u679c\u4f60\u66f4\u559c\u6b22\u4f7f\u7528 ",(0,i.jsx)(r.code,{children:"RSA"}),"\uff0c\u53ef\u4ee5\u5728 Logto \u7ba1\u7406\u63a7\u5236\u53f0\u4e2d\u81ea\u7531\u65cb\u8f6c\u7b7e\u540d\u7b97\u6cd5\u3002\u8bf7\u53c2\u9605 ",(0,i.jsx)(r.a,{href:"/developers/signing-keys",children:"Signing keys"})," \u4ee5\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"]})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'// path/to/project/src/main/java/io/logto/springboot/sample/configuration/SecurityConfiguration.java\npackage io.logto.springboot.sample.configuration;\n\nimport com.nimbusds.jose.JOSEObjectType;\nimport com.nimbusds.jose.proc.DefaultJOSEObjectTypeVerifier;\nimport com.nimbusds.jose.proc.SecurityContext;\nimport io.logto.springboot.sample.validator.AudienceValidator;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.security.config.Customizer;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;\nimport org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidator;\nimport org.springframework.security.oauth2.jwt.JwtDecoder;\nimport org.springframework.security.oauth2.jwt.JwtValidators;\nimport org.springframework.security.oauth2.jwt.NimbusJwtDecoder;\nimport org.springframework.security.oauth2.jose.jws.SignatureAlgorithm;\nimport org.springframework.security.web.DefaultSecurityFilterChain;\n\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfiguration {\n\n    @Value("${logto.audience}")\n    private String audience;\n\n    @Value("${spring.security.oauth2.resourceserver.jwt.issuer-uri}")\n    private String issuer;\n\n    @Value("${spring.security.oauth2.resourceserver.jwt.jwk-set-uri}")\n    private String jwksUri;\n\n    @Bean\n    public JwtDecoder jwtDecoder() {\n        NimbusJwtDecoder jwtDecoder = NimbusJwtDecoder.withJwkSetUri(jwksUri)\n                // Logto \u9ed8\u8ba4\u4f7f\u7528 ES384 \u7b97\u6cd5\u6765\u7b7e\u7f72 JWT\u3002\n                .jwsAlgorithm(ES384)\n                // \u89e3\u7801\u5668\u5e94\u652f\u6301\u4ee4\u724c\u7c7b\u578b\uff1a\u8bbf\u95ee\u4ee4\u724c + JWT\u3002\n                .jwtProcessorCustomizer(customizer -> customizer.setJWSTypeVerifier(\n                        new DefaultJOSEObjectTypeVerifier<SecurityContext>(new JOSEObjectType("at+jwt"))))\n                .build();\n\n        jwtDecoder.setJwtValidator(new DelegatingOAuth2TokenValidator<>(\n                new AudienceValidator(audience),\n                new JwtIssuerValidator(issuer),\n                new JwtTimestampValidator()));\n\n        return jwtDecoder;\n    }\n\n    @Bean\n    public DefaultSecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n         http\n          .securityMatcher("/api/**")\n          .oauth2ResourceServer(oauth2 -> oauth2\n              .jwt(Customizer.withDefaults()))\n          .authorizeHttpRequests(requests -> requests\n              // \u5141\u8bb8\u6240\u6709\u8bf7\u6c42\u8bbf\u95ee\u516c\u5171 API\u3002\n              .requestMatchers("/api/.wellknown/**").permitAll()\n              // \u9700\u8981\u5bf9\u53d7\u4fdd\u62a4\u7684 API \u8fdb\u884c jwt \u4ee4\u724c\u9a8c\u8bc1\u3002\n              .anyRequest().authenticated());\n\n        return http.build();\n    }\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"\u6dfb\u52a0-api",children:"\u6dfb\u52a0 API"}),"\n",(0,i.jsx)(r.p,{children:"\u6dfb\u52a0\u4e00\u4e2a\u63a7\u5236\u5668\u6765\u63d0\u4f9b\u53d7\u4fdd\u62a4\u548c\u516c\u5171 API\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-java",children:'// path/to/project/src/main/java/io/logto/springboot/sample/controller/ProtectedController.java\npackage io.logto.springboot.sample.controller;\n\nimport org.springframework.web.bind.annotation.CrossOrigin;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n// \u4ec5\u5141\u8bb8\u6240\u6709\u6765\u6e90\u7528\u4e8e\u793a\u4f8b\u3002\n// \uff08\u751f\u4ea7\u5e94\u7528\u7a0b\u5e8f\u5e94\u4ed4\u7ec6\u914d\u7f6e CORS\u3002\uff09\n@CrossOrigin(origins = "*")\n@RestController\npublic class ProtectedController {\n    @GetMapping("/api/profile")\n    public String protectedProfile() {\n        return "Protected profile.";\n    }\n\n    @GetMapping("/api/.wellknown/config.json")\n    public String publicConfig() {\n        return "Public config.";\n    }\n}\n\n'})}),"\n",(0,i.jsx)(r.h2,{id:"\u8bbf\u95ee\u53d7\u4fdd\u62a4\u7684-api",children:"\u8bbf\u95ee\u53d7\u4fdd\u62a4\u7684 API"}),"\n",(0,i.jsxs)(r.p,{children:["\u6784\u5efa\u5e76\u8fd0\u884c\u4f60\u7684 Spring Boot Web \u5e94\u7528\u7a0b\u5e8f\uff0c\u4f8b\u5982\u6267\u884c ",(0,i.jsx)(r.code,{children:"bootRun"})," Gradle \u4efb\u52a1\u3002"]}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(s.A,{value:"linux-or-macos",label:"Linux \u6216 macOS",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"./gradlew bootRun\n"})})}),(0,i.jsx)(s.A,{value:"windows",label:"Windows",children:(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"gradlew.bat bootRun\n"})})})]}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsxs)(r.p,{children:["\u672c\u6559\u7a0b\u5047\u8bbe\u4f60\u5728\u53d1\u51fa\u8bf7\u6c42\u4e4b\u524d\u5df2\u7ecf\u62e5\u6709 API \u8d44\u6e90 ",(0,i.jsx)(r.code,{children:"http://localhost:3000/"})," \u7684\u8bbf\u95ee\u4ee4\u724c\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u51c6\u5907\u597d\uff0c\u8bf7\u5728\u7ee7\u7eed\u4e4b\u524d ",(0,i.jsx)(r.a,{href:"/authorization/api-resources/protect-your-api",children:"\u9605\u8bfb\u6b64\u5185\u5bb9"}),"\u3002"]})}),"\n",(0,i.jsxs)(r.p,{children:["\u4f7f\u7528\u8bbf\u95ee\u4ee4\u724c\u4f5c\u4e3a Authorization \u5934\u4e2d\u7684 Bearer \u4ee4\u724c\u8bf7\u6c42\u4f60\u7684\u53d7\u4fdd\u62a4 API\uff0c\u4f8b\u5982\u6267\u884c ",(0,i.jsx)(r.code,{children:"curl"})," \u547d\u4ee4\u3002"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"curl --include 'http://localhost:3000/api/profile' --header 'Authorization: Bearer <your-access-token>'\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u5982\u679c\u6210\u529f\uff0c\u4f60\u5c06\u6536\u5230\u4e00\u4e2a\u72b6\u6001\u4e3a 200 \u7684\u54cd\u5e94\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"HTTP/1.1 200\n...\n"})}),"\n",(0,i.jsx)(r.p,{children:"\u5426\u5219\uff0c\u4f60\u5c06\u6536\u5230\u4e00\u4e2a\u72b6\u6001\u4e3a 401 \u7684\u54cd\u5e94\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{children:'HTTP/1.1 401\n...\nWWW-Authenticate: Bearer error="invalid_token", error_description="An error occurred while attempting to decode the Jwt: Signed JWT rejected: Invalid signature", error_uri="https://tools.ietf.org/html/rfc6750#section-3.1"\n...\n'})})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},78551:(e,r,n)=>{n.d(r,{A:()=>s});n(30758);var t=n(13526);const i={tabItem:"tabItem_PGP0"};var o=n(86070);function s(e){let{children:r,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,s),hidden:n,children:r})}},77501:(e,r,n)=>{n.d(r,{A:()=>y});var t=n(30758),i=n(13526),o=n(65052),s=n(25557),a=n(77469),c=n(50873),l=n(62230),u=n(60196);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:i}}=e;return{value:r,label:n,attributes:t,default:i}}))}(n);return function(e){const r=(0,l.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function h(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function g(e){let{queryString:r=!1,groupId:n}=e;const i=(0,s.W6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,c.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(i.location.search);r.set(o,e),i.replace({...i.location,search:r.toString()})}),[o,i])]}function m(e){const{defaultValue:r,queryString:n=!1,groupId:i}=e,o=p(e),[s,c]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:o}))),[l,d]=g({queryString:n,groupId:i}),[m,j]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[i,o]=(0,u.Dv)(n);return[i,(0,t.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:i}),f=(()=>{const e=l??m;return h({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{f&&c(f)}),[f]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,o]),tabValues:o}}var j=n(13887);const f={tabList:"tabList_CGfx",tabItem:"tabItem_JX1E"};var b=n(86070);function x(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const r=e.currentTarget,n=c.indexOf(r),i=a[n].value;i!==t&&(l(r),s(i))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;r=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;r=c[n]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},r),children:a.map((e=>{let{value:r,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,i.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function w(e){let{lazy:r,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function v(e){const r=m(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...r,...e}),(0,b.jsx)(w,{...r,...e})]})}function y(e){const r=(0,j.A)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(r))}},15658:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var t=n(30758);const i={},o=t.createContext(i);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);