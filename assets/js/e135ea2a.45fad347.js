"use strict";(self.webpackChunkdocusaurus_v2=self.webpackChunkdocusaurus_v2||[]).push([[5211],{4137:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(o),d=r,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||a;return o?n.createElement(m,l(l({ref:t},p),{},{components:o})):n.createElement(m,l({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<a;i++)l[i]=o[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},500:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=o(7462),r=(o(7294),o(4137));const a={},l="GCP",c={unversionedId:"gcp/gcp",id:"gcp/gcp",title:"GCP",description:"Google Cloud CLI",source:"@site/docs/gcp/gcp.md",sourceDirName:"gcp",slug:"/gcp/",permalink:"/docusaurus.v2/docs/gcp/",draft:!1,editUrl:"https://github.com/joey-ma/docusaurus.v2/tree/main/docs/gcp/gcp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Environment Variables",permalink:"/docusaurus.v2/docs/env/environment-variables"},next:{title:"Firebase",permalink:"/docusaurus.v2/docs/gcp/firebase"}},s={},i=[{value:"Google Cloud CLI",id:"google-cloud-cli",level:2},{value:"Firebase",id:"firebase",level:2}],p={toc:i},u="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gcp"},"GCP"),(0,r.kt)("h2",{id:"google-cloud-cli"},"Google Cloud CLI"),(0,r.kt)("p",null,"Follow instructions here to get set up."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install-sdk#mac"},"https://cloud.google.com/sdk/docs/install-sdk#mac")),(0,r.kt)("p",null,"For reference, here is a screen shot:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot 1",src:o(7810).Z,width:"780",height:"1214"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gcloud --version")," let's us confirm that it is installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"~ % gcloud --version\nGoogle Cloud SDK 415.0.0\nbq 2.0.84\ncore 2023.01.20\ngcloud-crc32c 1.0.0\ngsutil 5.18\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gcloud auth login")," allows us to use the web browser to login securely."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"% gcloud auth login\nYour browser has been opened to visit:\n\n    https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=32555940559.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8085%2F&scope=openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fappengine.admin+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fsqlservice.login+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcompute+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Faccounts.reauth&state=5bLfnoz83eK7zMCnnUfz7MLxDvkYEJ&access_type=offline&code_challenge=kL64OouyVwk9rzqkLGrc-3cqA5twEfVkCLrFB5sJpJ8&code_challenge_method=S256\n\nYou are now logged in as [joeyma@gmail.com].\nYour current project is [None].  You can change this setting by running:\n  $ gcloud config set project PROJECT_ID\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gcloud oath login",src:o(9448).Z,width:"459",height:"935"})),(0,r.kt)("p",null,"Let's config our project to use the correct PROJECT_ID. (In your app ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," directory, most likely backend ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," directory)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set project todo-app-88a44\n")),(0,r.kt)("p",null,"I am seeing: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Updated property [core/project].\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gcloud app deploy")," will begin uploading all of your files. "),(0,r.kt)("h2",{id:"firebase"},"Firebase"),(0,r.kt)("p",null,"Firebase"))}g.isMDXComponent=!0},9448:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gcloud-sdk-login-fa9d96a559ae68c10bc98da116b4b0b6.png"},7810:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/terminal_screenshot-1-a16089a7f11ead017088101a9b1f237d.png"}}]);