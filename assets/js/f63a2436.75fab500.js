"use strict";(self.webpackChunkjoey_ma_github_io=self.webpackChunkjoey_ma_github_io||[]).push([[8782],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,m=u["".concat(l,".").concat(g)]||u[g]||f[g]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(4137));const a={},i="Regex",c={unversionedId:"regex",id:"regex",title:"Regex",description:"To match a string that contains only those characters (or an empty string), try",source:"@site/docs/regex.md",sourceDirName:".",slug:"/regex",permalink:"/docs/regex",draft:!1,editUrl:"https://github.com/joey-ma/joey-ma.github.io/tree/main/docs/regex.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/docs/react/"},next:{title:"shell",permalink:"/docs/category/shell"}},l={},p=[],s={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"regex"},"Regex"),(0,o.kt)("p",null,"To match a string that contains only those characters (or an empty string), try"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"^[a-zA-Z0-9_]*$"\n')),(0,o.kt)("p",null,"This works for .NET regular expressions, and probably a lot of other languages as well."),(0,o.kt)("p",null,"Breaking it down:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"^ : start of string\n[ : beginning of character group\na-z : any lowercase letter\nA-Z : any uppercase letter\n0-9 : any digit\n_ : underscore\n] : end of character group\n* : zero or more of the given characters\n$ : end of string\n")),(0,o.kt)("p",null,"If you don't want to allow empty strings, use ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),"."))}f.isMDXComponent=!0}}]);