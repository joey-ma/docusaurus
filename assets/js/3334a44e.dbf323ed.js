"use strict";(self.webpackChunkdocusaurus_v2=self.webpackChunkdocusaurus_v2||[]).push([[2673],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=s,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5135:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),s=(a(7294),a(4137));const o={},r="What do you know?",i={unversionedId:"JavaScript/about",id:"JavaScript/about",title:"What do you know?",description:"Here some interesting notes about JavaScript.",source:"@site/docs/JavaScript/about.mdx",sourceDirName:"JavaScript",slug:"/JavaScript/about",permalink:"/docusaurus/docs/JavaScript/about",draft:!1,editUrl:"https://github.com/joey-ma/docusaurus.v2/tree/main/docs/JavaScript/about.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JavaScript",permalink:"/docusaurus/docs/category/javascript"},next:{title:"Package.json",permalink:"/docusaurus/docs/JavaScript/package.json"}},l={},c=[{value:"Destructuring assignment syntax",id:"destructuring-assignment-syntax",level:2},{value:"Trick questions",id:"trick-questions",level:2},{value:"Working with arrays",id:"working-with-arrays",level:3},{value:"Which line could you add to this code to print &quot;jaguar&quot; to the console?",id:"which-line-could-you-add-to-this-code-to-print-jaguar-to-the-console",level:3},{value:"What is the value of dessert.type after executing this code?",id:"what-is-the-value-of-desserttype-after-executing-this-code",level:3},{value:"What value is printed to the console after this code executes?",id:"what-value-is-printed-to-the-console-after-this-code-executes",level:3},{value:"What is wrong with this code?",id:"what-is-wrong-with-this-code",level:3},{value:"localStorage",id:"localstorage",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,s.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"what-do-you-know"},"What do you know?"),(0,s.kt)("p",null,"Here some interesting notes about JavaScript."),(0,s.kt)("h2",{id:"destructuring-assignment-syntax"},"Destructuring assignment syntax"),(0,s.kt)("p",null,"Reference ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"},"here")," with an interest example below for ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#binding_and_assignment"},"binding and assignment"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"    const {\n      data: { response }\n      //cached\n    } = await axios.get('https://cicero.azavea.com/v3.1/official', {\n      params,\n      paramsSerializer: (params) =>\n      qs.stringify(params, { arrayFormat: 'repeat' }),\n      \n      cache: {\n        // TODO: we are disabling the cache to test results first\n        ttl: 1000 * 60 * 60 * 24 * 7 // the time until the cached value is expired in milliseconds: set to 1 week\n      }\n    }).catch((err) => {\n      // error handling for not receiving a response\n      // -> TypeError: Cannot read properties of undefined (reading 'data')\n      console.error({\n        message: 'request to get representative failed',\n        code: err.code,\n        cache: err.cache,\n        data: err.data\n      })\n    })\n\n    console.log(`\ud83d\ude80 -> file: representatives.js:117 -> router.get -> data`, response);\n\n    // if you want to check if response was cached, uncomment: this is a way to track the issue\n    // console.log('isCached:', cached)\n\n    const { errors, results } = response\n    if (errors.length > 0) {\n      throw new Error(errors.join(','))\n    }\n    if (\n      !results ||\n      !Array.isArray(results.candidates) ||\n      results.candidates.length === 0\n    ) {\n      throw new Error('No matches found for the search criteria')\n    }\n")),(0,s.kt)("h2",{id:"trick-questions"},"Trick questions"),(0,s.kt)("p",null,"Are these questions testing your JavaScript skills?"),(0,s.kt)("h3",{id:"working-with-arrays"},"Working with arrays"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const a = ['a', 'b', 'c'];\n\na[100] = 'fox'\n\nconsole.log(a.length) // prints: 101\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"array_slice",src:a(6341).Z,width:"476",height:"231"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let animals = [{ type: \"lion\" }, \"tiger\"];\nlet clones = animals.slice();\n\nclones[0].type = \"bear\";\nclones[1] = \"sheep\";\n\nconsole.log(animals[0].type, clones[0].type); // prints: 'bear' 'bear'\nconsole.log(animals[1], clones[1]); // prints: 'tiger' 'sheep'\n")),(0,s.kt)("h3",{id:"which-line-could-you-add-to-this-code-to-print-jaguar-to-the-console"},'Which line could you add to this code to print "jaguar" to the console?'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'let animals = ["jaguar", "eagle"];\n\n// Missing Line\n\nconsole.log(animals.pop()); // prints: jaguar\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"array_behaviors",src:a(5605).Z,width:"639",height:"478"})),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","animals.shift(); ",(0,s.kt)("code",{lang:"js",style:{color:"green"}},'// "eagle"')),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'animals.filter(e => e === "jaguar"); ',(0,s.kt)("code",{lang:"js",style:{color:"green"}},'// "eagle"')," "),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","animals.reverse(); ",(0,s.kt)("code",{lang:"js",style:{color:"green"}},'// "jaguar"'),"  "),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","animals.pop(); ",(0,s.kt)("code",{lang:"js",style:{color:"green"}},'// "jaguar"'))),(0,s.kt)("p",null,"Note: ",(0,s.kt)("inlineCode",{parentName:"p"},"shift()"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"reverse()"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"pop()")," are methods that modify the original array, while ",(0,s.kt)("inlineCode",{parentName:"p"},"filter()")," does not."),(0,s.kt)("p",null,"Unfortunately, this question did not accept multiple answers... Seems like the multiple choices were flawed. Am I wrong?\n",(0,s.kt)("em",{parentName:"p"},"#CoughCough #LinkedInJavaScriptAssessment")),(0,s.kt)("h3",{id:"what-is-the-value-of-desserttype-after-executing-this-code"},"What is the value of dessert.type after executing this code?"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const dessert = { type: 'pie' };\ndessert.type = 'pudding';\n\nconst seconds = dessert;\nseconds.type = 'fruit';\n")),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","fruit"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","undefined"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","pudding"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","pie")),(0,s.kt)("p",null,"Note: Not only ",(0,s.kt)("inlineCode",{parentName:"p"},"seconds.type")," has the value ",(0,s.kt)("inlineCode",{parentName:"p"},"fruit"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"seconds")," is actually referencing ",(0,s.kt)("inlineCode",{parentName:"p"},"dessert")," by address because it is an object type."),(0,s.kt)("p",null,"While ",(0,s.kt)("inlineCode",{parentName:"p"},"Object.assign")," inherits ",(0,s.kt)("inlineCode",{parentName:"p"},"dessert"),"'s properties, it does create a new object (if used correctly)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const dessert = { type: 'pie' };\ndessert.type = 'pudding';\ndessert.flavor = 'banana';\n\nconst seconds = Object.assign({}, dessert);\nseconds.type = 'fruit';\n\nconsole.log(dessert); // prints: { type: 'pudding', flavor: 'banana' }\nconsole.log(seconds); // prints: { type: 'fruit', flavor: 'banana' }\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"reference_by_type",src:a(5545).Z,width:"539",height:"467"})),(0,s.kt)("h3",{id:""}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"\nconst myObj = {\n  myMethod(params) {\n    console.log('myMethod works:', params)\n    // ...do something here\n  },\n  myOtherMethod(params) {\n    // ...do something here\n    console.log('myOtherMethod works:', params)\n  },\n  nestedObj: {\n    myNestedMethod(params) {\n      // ...do something here\n      console.log('myNestedMethod works:', params)\n    }\n  },\n  oneMoreMethod(params) {\n    console.log('This also works:', params)\n  },\n  ES6Method1: (params) => {\n    console.log('This works in ES6:', params)\n  }\n};\n\nmyObj.myMethod(true);\nmyObj.myOtherMethod(true);\nmyObj.nestedObj.myNestedMethod(true);\nmyObj.oneMoreMethod(true);\nmyObj.ES6Method1(true); \n")),(0,s.kt)("h3",{id:"what-value-is-printed-to-the-console-after-this-code-executes"},"What value is printed to the console after this code executes?"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'let cat = Object.create({ type: "lion" });\ncat.size = "large";\n\nlet copyCat = { ...cat };\ncat.type = "tiger";\n\nconsole.log(copyCat.type, copyCat.size); // prints: undefined, \'large\'\n')),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","lion undefined"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","undefined large"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","tiger large"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","lion large")),(0,s.kt)("p",null,"In this case, I just misread the assignment of ",(0,s.kt)("inlineCode",{parentName:"p"},'cat.type = "tiger"')," as ",(0,s.kt)("inlineCode",{parentName:"p"},'copyCat.type = "tiger"'),".\nThis is now more of a trick question than an assessment of JavaScript skills. This is especially tricky because people who are skilled at JavaScript typically don't practice this type of unclear code style. I fully accept that I just missed the detail though."),(0,s.kt)("h3",{id:"what-is-wrong-with-this-code"},"What is wrong with this code?"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const foo = {\n  bar() {\n    console.log("Hello, world!");\n  },\n  name: "Albert", \n  age: 26,\n}\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"function declarations in obj",src:a(3312).Z,width:"602",height:"515"})),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Functions cannot be declared as properties of objects."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","The function bar needs to be defined as a key/value pair."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Nothing. There are no errors."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Trailing commas are not allowed in JavaScript.")),(0,s.kt)("p",null,"This is tricky because usually when something works, I'd typically go with it. Since there are multiple ways of declaring functions within an object, I'd choose what I prefer and keep using that syntax / style consistently. I definitely forgot about a the traditional methods of declaring functions within an object. (I got used to method #4 as I felt it was more declarative \ud83d\ude04)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function method2(params) {\n  console.log('method2 works:', params)\n}\n\nconst obj = {\n  // traditional way: declaring a named function, \n  // which has the same key as the function name \n  // paired with the value of the function definition\n  method1(params) {\n    console.log('method1 works:', params)\n  },\n  // separating the function to outside of obj\n  method2, \n  // nested function declaration works the same\n  nestedObj: {\n    myNestedMethod(params) { \n      console.log('myNestedMethod works:', params, '(though technically not another method)')\n    }\n  },\n  // assigning the key method3 the value of an anonymous function\n  method3: function (params) { \n    console.log('method3 also works:', params)\n  },\n  method4: function myOtherMethod(params) {\n    console.log('method4 also works:', params)\n  },\n  // assigning the key method5 the value of an anonymous (arrow) function\n  method5: (params) => {\n    console.log('method5 works in ES6:', params)\n  },\n};\n\nobj.method1(true); // prints: 'method1 works:' true\nobj.method2(true); // prints: 'method2 works:' true\nobj.nestedObj.myNestedMethod(true); \n// prints: 'myNestedMethod (technically not another method) works:' true\nobj.method3(true); // prints: 'method3 also works:' true\nobj.method4(true); // prints: 'method4 also works:' true\nobj.method5(true); // prints: 'method5 works in ES6:' true\n")),(0,s.kt)("h3",{id:"localstorage"},"localStorage"),(0,s.kt)("p",null,"Web Storage API gives us access to ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"},"sessionStorage")," and ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," (among other things)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function populateStorage() {\n  localStorage.setItem('bgcolor', 'red');\n  localStorage.setItem('font', 'Helvetica');\n  localStorage.setItem('image', 'myCat.png');\n}\n")))}u.isMDXComponent=!0},5605:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/array_behaviors-706cedbcb8d8f8da5f7aef084b55487b.png"},6341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/array_slice-836a5a5b7d210737bcbc0a29ce25b9e0.png"},3312:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/function_declaration_in_obj-e4312d4ff35d9efcefab14b589e199ef.png"},5545:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/reference_by_type-50455dbb23f7cbc7586186f2c96202ae.png"}}]);