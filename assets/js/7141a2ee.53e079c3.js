"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[72621],{72990:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"create-social-idps-account-and-register-saml-application-idp",children:"Create social IdP's account and register SAML application (IdP)"}),"\n",(0,i.jsx)(n.p,{children:"Let's go through configurations of SAML connector."}),"\n",(0,i.jsx)(n.p,{children:"Before we kicking off, you can go to a social identity provider which supports SAML protocol and create your own account. Okta, OneLogin, Salesforce and some other platforms support authentication based on SAML protocol."}),"\n",(0,i.jsx)(n.p,{children:"If your IdP mandate the encryption of SAML assertion and receiving of signed authentication requests, you should generate your private key and corresponding certificate using RSA algorithm. Keep the private key for your SP use and upload the certificate to IdP."}),"\n",(0,i.jsxs)(n.p,{children:["You also need to configure the ACS (Assertion Consumer Service) URL as ",(0,i.jsx)(n.code,{children:"${your_logto_origin}/api/authn/saml/${connector_id}"})," to handle IdP's SAML assertion. Where you can find your ",(0,i.jsx)(n.code,{children:"connectorId"})," at SAML connector's details page in Logto's Admin Console."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsx)(n.p,{children:"Per current Logto's design, we only support Redirect-binding for sending authentication request and POST-binding for receiving SAML assertion. Although this sounds not cool, but we believe that the current design can handle most of your use cases. If you have any problems, feel free to reach out!"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-saml-connector-sp",children:"Configure SAML connector (SP)"}),"\n",(0,i.jsx)(n.p,{children:"In this section, we will introduce each attribute in detail."}),"\n",(0,i.jsxs)(n.h4,{id:"entityid-required",children:["entityID ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"entityID"})," (i.e. ",(0,i.jsx)(n.code,{children:"issuer"}),") is Entity identifier. It is used to identify your entity (SAML SP entity), and match the equivalence in each SAML request/response."]}),"\n",(0,i.jsxs)(n.h4,{id:"signinendpoint-required",children:["signInEndpoint ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsxs)(n.p,{children:["The IdP's endpoint that you send SAML authentication requests to. Usually, you can find this value in IdP details page (i.e. IdP's ",(0,i.jsx)(n.code,{children:"SSO URL"})," or ",(0,i.jsx)(n.code,{children:"Login URL"}),")."]}),"\n",(0,i.jsxs)(n.h4,{id:"x509certificate-required",children:["x509Certificate ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsx)(n.p,{children:"The x509 certificate generated from IdPs private key, IdP is expected to have this value available."}),"\n",(0,i.jsxs)(n.p,{children:["The content of the certificate comes with ",(0,i.jsx)(n.code,{children:"-----BEGIN CERTIFICATE-----"})," header and ",(0,i.jsx)(n.code,{children:"-----END CERTIFICATE-----"})," tail."]}),"\n",(0,i.jsxs)(n.h4,{id:"idpmetadataxml-required",children:["idpMetadataXml ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsx)(n.p,{children:"The field is used to place contents from your IdP metadata XML file."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["The XML parser we are using does not support customized namespace.\nIf the IdP metadata comes with namespace, you should manually remove them.\nFor namespace of XML file, see ",(0,i.jsx)(n.a,{href:"http://www.xmlmaster.org/en/article/d01/c10/",children:"reference"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"assertionconsumerserviceurl-required",children:["assertionConsumerServiceUrl ",(0,i.jsx)(n.code,{children:"Required"})]}),"\n",(0,i.jsxs)(n.p,{children:["The assertion consumer service (ACS) URL is the SP's endpoint to receive IdP's SAML Assertion POST requests. As we mentioned in previous part, it is usually configured at IdP settings but some IdP get this value from SAML authentication requests, we hence also add this value as a REQUIRED field. It's value should look like ",(0,i.jsx)(n.code,{children:"${your_logto_origin}/api/authn/saml/${connector_id}"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"signauthnrequest",children:"signAuthnRequest"}),"\n",(0,i.jsxs)(n.p,{children:["The boolean value that controls whether SAML authentication request should be signed, whose default value is ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"encryptassertion",children:"encryptAssertion"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"encryptAssertion"})," is a boolean value that indicates if IdP will encrypt SAML assertion, with default value ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"signAuthnRequest"})," and ",(0,i.jsx)(n.code,{children:"encryptAssertion"})," attributes should align with corresponding parameters of IdP setting, otherwise error will be thrown to show that configuration does not match.\nAll SAML responses need to be signed."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"requestsignaturealgorithm",children:"requestSignatureAlgorithm"}),"\n",(0,i.jsxs)(n.p,{children:["This should be aligned with the signature algorithms of IdP so that Logto can verify the signature of the SAML assertion. Its value should be either ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2000/09/xmldsig#rsa-sha1"}),", ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"})," or ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha512"})," and the default value is ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"messagesigningorder",children:"messageSigningOrder"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"messageSigningOrder"})," indicates the signing and encrypting order of IdP, it's value should be either ",(0,i.jsx)(n.code,{children:"sign-then-encrypt"})," or ",(0,i.jsx)(n.code,{children:"encrypt-then-sign"})," and the default value is ",(0,i.jsx)(n.code,{children:"sign-then-encrypt"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"privatekey-and-privatekeypass",children:"privateKey and privateKeyPass"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"privateKey"})," is an OPTIONAL value and is required when ",(0,i.jsx)(n.code,{children:"signAuthnRequest"})," is ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"privateKeyPass"})," is the password you've set when creating ",(0,i.jsx)(n.code,{children:"privateKey"}),", required when necessary."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"signAuthnRequest"})," is ",(0,i.jsx)(n.code,{children:"true"}),", the corresponding certificate generated from ",(0,i.jsx)(n.code,{children:"privateKey"})," is required by IdP for checking the signature."]}),"\n",(0,i.jsx)(n.h4,{id:"encprivatekey-and-encprivatekeypass",children:"encPrivateKey and encPrivateKeyPass"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"encPrivateKey"})," is an OPTIONAL value and is required when ",(0,i.jsx)(n.code,{children:"encryptAssertion"})," is ",(0,i.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"encPrivateKeyPass"})," is the password you've set when creating ",(0,i.jsx)(n.code,{children:"encPrivateKey"}),", required when necessary."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.code,{children:"encryptAssertion"})," is ",(0,i.jsx)(n.code,{children:"true"}),", the corresponding certificate generated from ",(0,i.jsx)(n.code,{children:"encPrivateKey"})," is required by IdP for encrypting SAML assertion."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,i.jsx)(n.strong,{children:"Note"})]}),"\n",(0,i.jsxs)(n.p,{children:["For keys and certificates generation, ",(0,i.jsx)(n.code,{children:"openssl"})," is a wonderful tool. Here is sample command line that might be helpful:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl genrsa -passout pass:${privateKeyPassword} -out ${encryptPrivateKeyFilename}.pem 4096\nopenssl req -new -x509 -key ${encryptPrivateKeyFilename}.pem -out ${encryptionCertificateFilename}.cer -days 3650\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"privateKey"})," and ",(0,i.jsx)(n.code,{children:"encPrivateKey"})," files are enforced to be encoded in ",(0,i.jsx)(n.code,{children:"pkcs1"})," scheme as pem string, which means the private key files should start with ",(0,i.jsx)(n.code,{children:"-----BEGIN RSA PRIVATE KEY-----"})," and end with ",(0,i.jsx)(n.code,{children:"-----END RSA PRIVATE KEY-----"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"nameidformat",children:"nameIDFormat"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"nameIDFormat"})," is an OPTIONAL attribute that declares the name id format that would respond. The value can be among ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"}),", ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"}),", ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName"}),", ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"})," and ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:transient"}),", and the default value is ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:unspecified"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"timeout",children:"timeout"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"timeout"})," is the time tolerance for time validation, since the time between your SP entity and IdP entity could be different and network connection may also bring some delay. The unit is in millisecond, and the default value is 5000 (i.e. 5s)."]}),"\n",(0,i.jsx)(n.h4,{id:"profilemap",children:"profileMap"}),"\n",(0,i.jsxs)(n.p,{children:["Logto also provide a ",(0,i.jsx)(n.code,{children:"profileMap"})," field that users can customize the mapping from the social vendors' profiles which are usually not standard. Each ",(0,i.jsx)(n.code,{children:"profileMap"})," keys is Logto's standard user profile field name and corresponding value should be social profiles field name. In current stage, Logto only concern 'id', 'name', 'avatar', 'email' and 'phone' from social profile, only 'id' is REQUIRED and others are optional fields."]}),"\n",(0,i.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"signInEndpoint"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"x509certificate"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"idpMetadataXml"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"entityID"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"assertionConsumerServiceUrl"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"true"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"messageSigningOrder"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"encrypt-then-sign"})," | ",(0,i.jsx)(n.code,{children:"sign-then-encrypt"})]}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"sign-then-encrypt"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"requestSignatureAlgorithm"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"http://www.w3.org/2000/09/xmldsig#rsa-sha1"})," | ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"})," | ",(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha512"})]}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"signAuthnRequest"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"encryptAssertion"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"privateKey"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"privateKeyPass"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nameIDFormat"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"})," | ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"})," | ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName"})," | ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"})," | ",(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:transient"})]}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"timeout"}),(0,i.jsx)(n.td,{children:"number"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"5000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"profileMap"}),(0,i.jsx)(n.td,{children:"ProfileMap"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"ProfileMap fields"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Default value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"id"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"avatar"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"avatar"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"email"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"email"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"phone"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"false"}),(0,i.jsx)(n.td,{children:"phone"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"http://docs.oasis-open.org/security/saml/v2.0/saml-profiles-2.0-os.pdf",children:"Profiles for the OASIS Security Assertion Markup Language (SAML) V2.0"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/tngan/samlify",children:"samlify - Highly configuarable Node.js SAML 2.0 library for Single Sign On"})}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},74982:function(e,n,t){t.d(n,{ZP:function(){return p}});var i=t(11527),r=t(17279),s=t(88517),o=t(11577),c=t(96534),d=t(7320),a=t(82755),l=t(76162),h=t(13994);function u(e){const n={h3:"h3",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"add-logto-authentication-middleware",children:"Add Logto authentication middleware"}),"\n",(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"add-sign-in",children:"Add sign-in"}),"\n",(0,i.jsx)(o.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"add-sign-out",children:"Add sign-out"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"implement-sign-insign-out-buttons",children:"Implement sign-in/sign-out buttons"}),"\n",(0,i.jsx)(d.ZP,{}),"\n",(0,i.jsx)(h.ZP,{sdk:".NET Core (MVC)"})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},55458:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={img:"img",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(10766).Z+"",width:"3352",height:"1226"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},32778:function(e,n,t){t.d(n,{ZP:function(){return c}});var i=t(11527),r=t(17279),s=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png";function o(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(50554).Z+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(3108).Z+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},81057:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={admonition:"admonition",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(65266).Z+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(79120).Z+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},10444:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},69441:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={p:"p",...(0,r.a)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},13994:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={admonition:"admonition",p:"p",...(0,r.a)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},93974:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={p:"p",...(0,r.a)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},15602:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},connector:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return a}});var i=t(11527),r=t(17279);t(10444),t(32778),t(55458),t(69441),t(81057),t(93974),t(74982),t(72990);const s={slug:"how-to-build-saml-sign-in-with-dotnet-core-mvc-and-logto",authors:"logto",tags:["authentication","saml","dotnet-core-mvc","c#","social-sign-in","sign-in","login"],title:"How to build SAML sign-in with .NET Core (MVC) and Logto"},o=void 0,c={permalink:"/tutorial/how-to-build-saml-sign-in-with-dotnet-core-mvc-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-mvc-saml.mdx",title:"How to build SAML sign-in with .NET Core (MVC) and Logto",description:"\x3c!--",date:"2024-02-04T04:04:05.000Z",formattedDate:"February 4, 2024",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"saml",permalink:"/tutorial/tags/saml"},{label:"dotnet-core-mvc",permalink:"/tutorial/tags/dotnet-core-mvc"},{label:"c#",permalink:"/tutorial/tags/c"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.315,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-saml-sign-in-with-dotnet-core-mvc-and-logto",authors:"logto",tags:["authentication","saml","dotnet-core-mvc","c#","social-sign-in","sign-in","login"],title:"How to build SAML sign-in with .NET Core (MVC) and Logto"},unlisted:!1,prevItem:{title:"How to build OIDC sign-in with .NET Core (MVC) and Logto",permalink:"/tutorial/how-to-build-oidc-sign-in-with-dotnet-core-mvc-and-logto"},nextItem:{title:"How to build SendGrid Email passwordless sign-in with .NET Core (MVC) and Logto",permalink:"/tutorial/how-to-build-sendgrid-sign-in-with-dotnet-core-mvc-and-logto"}},d={authorsImageUrls:[void 0]},a=[],l="SAML";function h(e){return(0,i.jsx)(i.Fragment,{})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h()}},88517:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Open ",(0,i.jsx)(n.code,{children:"Startup.cs"})," (or ",(0,i.jsx)(n.code,{children:"Program.cs"}),") and add the following code to register Logto authentication middleware:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'using Logto.AspNetCore.Authentication;\n\nvar builder = WebApplication.CreateBuilder(args);\n\nbuilder.Services.AddLogtoAuthentication(options =>\n{\n  options.Endpoint = builder.Configuration["Logto:Endpoint"]!;\n  options.AppId = builder.Configuration["Logto:AppId"]!;\n  options.AppSecret = builder.Configuration["Logto:AppSecret"];\n});\n\napp.UseAuthentication();\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"AddLogtoAuthentication"})," method will do the following things:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set the default authentication scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.CookieScheme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the default challenge scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Set the default sign-out scheme to ",(0,i.jsx)(n.code,{children:"LogtoDefaults.AuthenticationScheme"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Add cookie and OpenID Connect authentication handlers to the authentication scheme."}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},11577:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Add the following URI to the ",(0,i.jsx)(n.code,{children:"Redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http://<your-web-app-uri>/Callback\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To sign-in with Logto, you can use the ",(0,i.jsx)(n.code,{children:"ChallengeAsync"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'await HttpContext.ChallengeAsync(new AuthenticationProperties\n{\n  RedirectUri = "/"\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ChallengeAsync"})," method will redirect the user to the Logto sign-in page."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after authentication. Note it is different from the redirect URI you configured in the Logto application details page:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed in."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the redirect URI in the Logto application details page the ",(0,i.jsx)(n.strong,{children:"Logto redirect URI"})," and the ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property the ",(0,i.jsx)(n.strong,{children:"application redirect URI"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Logto redirect URI"})," has a default value of ",(0,i.jsx)(n.code,{children:"/Callback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(n.code,{children:"CallbackPath"})," property for ",(0,i.jsx)(n.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  options.CallbackPath = "/SomeOtherCallbackPath";\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["No need to set the ",(0,i.jsx)(n.strong,{children:"application redirect URI"})," in the Logto application details page."]})})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},96534:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Add the following URI to the ",(0,i.jsx)(n.code,{children:"Post sign-out redirect URIs"})," list in the Logto application details page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http://<your-web-app-uri>/SignedOutCallback\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To sign-out with Logto, you can use the ",(0,i.jsx)(n.code,{children:"SignOutAsync"})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'await HttpContext.SignOutAsync(new AuthenticationProperties\n{\n  RedirectUri = "/"\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"SignOutAsync"})," method will clear the authentication cookie and redirect the user to the Logto sign-out page."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is used to redirect the user back to your web application after sign-out. Note it is different from the post sign-out redirect URI you configured in the Logto application details page:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The post sign-out redirect URI in the Logto application details page is the URI that Logto will redirect the user back to after the user has signed out."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property is the URI that will be redirected to after necessary actions have been taken in the Logto authentication middleware."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The order of the actions is 1 -> 2. For clarity, let's call the post sign-out redirect URI in the Logto application details page the ",(0,i.jsx)(n.strong,{children:"Logto post sign-out redirect URI"})," and the ",(0,i.jsx)(n.code,{children:"RedirectUri"})," property the ",(0,i.jsx)(n.strong,{children:"application post sign-out redirect URI"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Logto post sign-out redirect URI"})," has a default value of ",(0,i.jsx)(n.code,{children:"/SignedOutCallback"}),", which you can leave it as is if there's no special requirement. If you want to change it, you can set the ",(0,i.jsx)(n.code,{children:"SignedOutCallbackPath"})," property for ",(0,i.jsx)(n.code,{children:"LogtoOptions"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'builder.Services.AddLogtoAuthentication(options =>\n{\n  options.SignedOutCallbackPath = "/SomeOtherSignedOutCallbackPath";\n});\n'})}),"\n",(0,i.jsx)(n.p,{children:"Remember to update the value in the Logto application details page accordingly."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["No need to set the ",(0,i.jsx)(n.strong,{children:"application post sign-out redirect URI"})," in the Logto application details page."]})})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},7320:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["First, add actions methods to your ",(0,i.jsx)(n.code,{children:"Controller"}),", for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'public class HomeController : Controller\n{\n  public IActionResult SignIn()\n  {\n    return Challenge(new AuthenticationProperties { RedirectUri = "/" });\n  }\n\n  // Use the `new` keyword to avoid conflict with the `ControllerBase.SignOut` method\n  new public IActionResult SignOut()\n  {\n    return SignOut(new AuthenticationProperties { RedirectUri = "/" });\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then, add the links to your View:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cshtml",children:'<p>Is authenticated: @User.Identity?.IsAuthenticated</p>\n@if (User.Identity?.IsAuthenticated == true) {\n  <a asp-controller="Home" asp-action="SignOut">Sign out</a>\n} else {\n  <a asp-controller="Home" asp-action="SignIn">Sign in</a>\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'It will show the "Sign in" link if the user is not authenticated, and show the "Sign out" link if the user is authenticated.'})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},82755:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dotnet add package Logto.AspNetCore.Authentication\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},76162:function(e,n,t){t.d(n,{ZP:function(){return o}});var i=t(11527),r=t(17279);function s(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The following demonstration is built on .NET Core 8.0. The SDK is compatible with .NET 6.0 or higher."}),"\n",(0,i.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},10766:function(e,n,t){n.Z=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},3108:function(e,n,t){n.Z=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},50554:function(e,n,t){n.Z=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},79120:function(e,n,t){n.Z=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},65266:function(e,n,t){n.Z=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var i=t(50959);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);