"use strict";(self.webpackChunkdocusaurus_v2=self.webpackChunkdocusaurus_v2||[]).push([[2675],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const s={},a="Redis",i={unversionedId:"Redis/redis",id:"Redis/redis",title:"Redis",description:"I know this is poorly written. I'm just jotting down notes real quick even if they are not coherent. Hope to come back to this soon!",source:"@site/docs/Redis/redis.md",sourceDirName:"Redis",slug:"/Redis/",permalink:"/docusaurus/docs/Redis/",draft:!1,editUrl:"https://github.com/joey-ma/docusaurus.v2/tree/main/docs/Redis/redis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Package.json",permalink:"/docusaurus/docs/JavaScript/package.json"},next:{title:"Behavioral",permalink:"/docusaurus/docs/category/behavioral"}},l={},c=[{value:"Getting started",id:"getting-started",level:2},{value:"Using HGET",id:"using-hget",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"redis"},"Redis"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"I know this is poorly written. I'm just jotting down notes real quick even if they are not coherent. Hope to come back to this soon!"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const sorry = "excuse my mess"\n'))),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"There's some basic instructions on how to get started with Redis in Node.js ",(0,o.kt)("a",{parentName:"p",href:"https://redis.io/docs/clients/nodejs/"},"here"),", but I feel like the documentation can be improved."),(0,o.kt)("p",null,"You definitely need to experiment to be able to use the API correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'await client.hSet(\'user-session:123\', {\n    name: \'John\',\n    surname: \'Smith\',\n    company: \'Redis\',\n    age: 29\n})\n\nlet userSession = await client.hGetAll(\'user-session:123\');\nconsole.log(JSON.stringify(userSession, null, 2));\n/*\n{\n  "surname": "Smith",\n  "name": "John",\n  "company": "Redis",\n  "age": "29"\n}\n */\n')),(0,o.kt)("h3",{id:"using-hget"},"Using HGET"),(0,o.kt)("p",null,"The doc's ",(0,o.kt)("a",{parentName:"p",href:"https://redis.js.org/#node-redis-usage-redis-commands"},"examples")," use HSET, HGETALL, but why not HGET?"),(0,o.kt)("p",null,"Turns out I'm not the only one who ran into this ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/71501392/can-set-data-in-redis-server-but-cant-get-it"},"problem"),"."),(0,o.kt)("p",null,"The problem remains unanswered, and this ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/33217688/nodejs-redis-hset-hget-insert-to-dataset-error"},"SO question")," is also unanswered."),(0,o.kt)("p",null,"These are all different questions, but they all hint at the much needed clarity from the official docs. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/48945428/redis-node-get-from-hash-not-inserting-into-array"},"Redis Node - Get from hash - Not inserting into array")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Doc on Redis command ",(0,o.kt)("a",{parentName:"li",href:"https://redis.io/commands/hget/"},"HGET"))),(0,o.kt)("p",null,"Maybe this would be the solution?\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redis/node-redis/issues/1783#issuecomment-1004426704"},"https://github.com/redis/node-redis/issues/1783#issuecomment-1004426704")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  // HGET/HSET work as expected\n  client.HSET(h, f, "foo", (_, resp) => { console.log("HSET:", resp) }); // 0\n  client.HGET(h, f,        (_, resp) => { console.log("HGET:", resp) }); // foo\n  client.hSet(h, f, "foo", (_, resp) => { console.log("hSet:", resp) }); // 0\n  client.hGet(h, f,        (_, resp) => { console.log("hGet:", resp) }); // foo\n')))}d.isMDXComponent=!0}}]);