"use strict";(self.webpackChunkdocusaurus_v2=self.webpackChunkdocusaurus_v2||[]).push([[6535],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(o),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return o?n.createElement(f,a(a({ref:t},u),{},{components:o})):n.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1171:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(4137));const i={sidebar_position:1},a="About Docs",s={unversionedId:"about",id:"about",title:"About Docs",description:"Intention",source:"@site/docs/about.md",sourceDirName:".",slug:"/about",permalink:"/docusaurus.v2/docs/about",draft:!1,editUrl:"https://github.com/joey-ma/docusaurus.v2/tree/main/docs/about.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"AWS",permalink:"/docusaurus.v2/docs/category/aws"}},l={},c=[{value:"Intention",id:"intention",level:2},{value:"Disclaimer",id:"disclaimer",level:2},{value:"Story Time: Confronting Imperfection",id:"story-time-confronting-imperfection",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about-docs"},"About Docs"),(0,r.kt)("h2",{id:"intention"},"Intention"),(0,r.kt)("p",null,"While I can't memorize everything I've learned, I'd like be able to reference useful information on demand."),(0,r.kt)("p",null,"The intention of these Docs were to serve me as my personal collection of notes and references: clear and concise, but I've decided to make these notes public in case someone else might also find them helpful."),(0,r.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,r.kt)("p",null,"As technologies are always evolving, official documentations should always include the most up-to-date information. "),(0,r.kt)("p",null,"That is until you find that the official docs are lacking in one way or another. Or, sometimes it's just hard (harder) to find the specific info you're looking for, whether it's from the official docs or a Stack Overflow article. This is where my docs can be helpful. "),(0,r.kt)("p",null,"I may prefer to organize and jot down some notes that I find useful, in a way that's clear to me. If you find any of these notes helpful, I'll be super happy that I've saved you some amount of time or helped you understand something better."),(0,r.kt)("p",null,"Even though the articles contents may includes random issues and solutions and may be out-of-context, I do think they might be helpful to others. ",(0,r.kt)("em",{parentName:"p"},"When I have time"),", I'd be happy to update and improve my notes."),(0,r.kt)("h2",{id:"story-time-confronting-imperfection"},"Story Time: Confronting Imperfection"),(0,r.kt)("p",null,"Recognizing that creating good documentation is a meaningful but tedious task and documenting a lesson learned (concisely) requires patience and time to process and summarize the experience, I took some time to document some of my lessons learned and saved most of my notes without having them posted."),(0,r.kt)("p",null,"After a while though, I realized that these notes do not exist online. I'd reference my files, make small edits, and the notes are saved locally. This defeats the purpose of this Docs section of my site though. The perfectionist in me will require me to either (1) remove the Docs section because it will never be perfect, (2) have 2 somewhat helpful articles for a year (they are incomplete anyways, the intention is not to replace the official docs), or (3) post these random, incomplete notes, but I can still refer back to them, and they ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"might"))," possibly be helpful to someone."),(0,r.kt)("p",null,"So, I hope this can be helpful to you! If you would like to contribute, please feel free to create an issue on my GitHub repo so I can review it. You are also welcome to submit a PR to make it better! ",(0,r.kt)("em",{parentName:"p"},"Please reach out or create an issue before you spend a huge amount of time on a PR.")," Here's a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/joey-ma/joey-ma.github.io/blob/main/docs/CONTRIBUTING.md"},"Contributing Guide"),". "),(0,r.kt)("p",null,":)"))}p.isMDXComponent=!0}}]);