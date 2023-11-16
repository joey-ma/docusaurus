"use strict";(self.webpackChunkdocusaurus_v2=self.webpackChunkdocusaurus_v2||[]).push([[5410],{4137:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>f});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),p=function(e){var o=r.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},c=function(e){var o=p(e.components);return r.createElement(i.Provider,{value:o},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,l(l({ref:o},c),{},{components:t})):r.createElement(f,l({ref:o},c))}));function f(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var i in o)hasOwnProperty.call(o,i)&&(s[i]=o[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1489:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(7462),n=(t(7294),t(4137));const a={},l="Google Chrome DevTools",s={unversionedId:"DevTools/Google Chrome",id:"DevTools/Google Chrome",title:"Google Chrome DevTools",description:"Google Chrome DevTools is super useful and helpful, but from time to time, we like to clean up our tool box.",source:"@site/docs/DevTools/Google Chrome.md",sourceDirName:"DevTools",slug:"/DevTools/Google Chrome",permalink:"/docusaurus/docs/DevTools/Google Chrome",draft:!1,editUrl:"https://github.com/joey-ma/docusaurus.v2/tree/main/docs/DevTools/Google Chrome.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Browser DevTools",permalink:"/docusaurus/docs/category/browser-devtools"},next:{title:"Docker",permalink:"/docusaurus/docs/Docker/"}},i={},p=[{value:"A Source Map Issue",id:"a-source-map-issue",level:2},{value:"Using Webpack",id:"using-webpack",level:2}],c={toc:p},u="wrapper";function m(e){let{components:o,...t}=e;return(0,n.kt)(u,(0,r.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-chrome-devtools"},"Google Chrome DevTools"),(0,n.kt)("p",null,"Google Chrome DevTools is super useful and helpful, but from time to time, we like to clean up our tool box."),(0,n.kt)("p",null,"Why am I getting this error message? "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"[warning] DevTools failed to load source map: Could not load content for file:///Users/joey-ma/Documents/file_path/examine_the_page/bootstrap.bundle.min.js.map: System error: net::ERR_FILE_NOT_FOUND\n[warning] DevTools failed to load source map: Could not load content for file:///Users/joey-ma/Documents/file_path/examine_the_page/bootstrap.min.css.map: System error: net::ERR_FILE_NOT_FOUND\n")),(0,n.kt)("p",null,"A search on Stack Overflow leads to various clues, but I only have a simple ",(0,n.kt)("inlineCode",{parentName:"p"},"index.html")," referencing ",(0,n.kt)("inlineCode",{parentName:"p"},"bootstrap.min.css")," (and ",(0,n.kt)("inlineCode",{parentName:"p"},"bootstrap.bundle.min.js"),")."),(0,n.kt)("p",null,"It turns out, that in this ",(0,n.kt)("inlineCode",{parentName:"p"},"bootstrap.min.css"),", it probably has a line like below as the last line:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},"/*# sourceMappingURL=bootstrap.min.css.map */\n")),(0,n.kt)("p",null,"or "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"//# sourceMappingURL=include.prepload.js.map\n")),(0,n.kt)("h2",{id:"a-source-map-issue"},"A Source Map Issue"),(0,n.kt)("p",null,"This ",(0,n.kt)("inlineCode",{parentName:"p"},"# sourceMappingURL=abc")," is a special comment that can be added to the end of a JavaScript (or CSS) file to tell the browser where to find the source map file for that script. "),(0,n.kt)("p",null,"Source maps are used by developers to map the minified or transpiled code to the original source code, so that they can more easily debug and troubleshoot their code. They provide a way to see the original code in the browser's developer tools, even if the code has been minified or transpiled for performance or security reasons."),(0,n.kt)("p",null,"This warning message means that Google Chrome was not able to find the source map file ",(0,n.kt)("inlineCode",{parentName:"p"},"bootstrap.min.css.map")," at the specified file path."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Delete it and the error will go away.")),(0,n.kt)("p",null,"When the browser sees a # sourceMappingURL comment at the end of a JavaScript file, it will try to fetch the corresponding source map file and use it to map the minified or transpiled code to the original source code. If the source map file cannot be found or is invalid, the browser may show a warning or error message in the console."),(0,n.kt)("p",null,"While it can be a useful tool when developing, it could also cause unnecessary error/warning messages."),(0,n.kt)("p",null,"It's worth noting that not all JavaScript files include a source map directive, and not all browsers support source maps. However, if you're developing JavaScript code and using tools like minifiers, bundlers, or transpilers, adding a source map directive can be very helpful for debugging and troubleshooting your code."),(0,n.kt)("h2",{id:"using-webpack"},"Using Webpack"),(0,n.kt)("p",null,"If you are using webpack, to turn on source map, add this to your ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    devtool: "source-map",\n}\n')),(0,n.kt)("p",null,"Reference:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/67559032/16330123"},'Error message "DevTools failed to load SourceMap: Could not load content')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/21719562/how-can-i-use-javascript-source-maps-map-files"},"How can I use JavaScript source maps?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=fGed9phNkto"},"Webpack Config Basics - 8. Source-maps"))))}m.isMDXComponent=!0}}]);