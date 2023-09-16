"use strict";(self.webpackChunkjoey_ma_github_io=self.webpackChunkjoey_ma_github_io||[]).push([[7125],{4137:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>p});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),m=d(t),g=a,p=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return t?i.createElement(p,s(s({ref:n},l),{},{components:t})):i.createElement(p,s({ref:n},l))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=g;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[m]="string"==typeof e?e:a,s[1]=r;for(var d=2;d<o;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},407:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=t(7462),a=(t(7294),t(4137));const o={},s="MongoDB",r={unversionedId:"mongodb/mongodb",id:"mongodb/mongodb",title:"MongoDB",description:'Use the --version to check what is your current mongodb ("mongod") version.',source:"@site/docs/mongodb/mongodb.md",sourceDirName:"mongodb",slug:"/mongodb/",permalink:"/docs/mongodb/",draft:!1,editUrl:"https://github.com/joey-ma/joey-ma.github.io/tree/main/docs/mongodb/mongodb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"macOS Hacks",permalink:"/docs/macOS/macOS Hacks"},next:{title:"npm",permalink:"/docs/npm/about"}},c={},d=[{value:"Using Mongo Shell",id:"using-mongo-shell",level:3}],l={toc:d},m="wrapper";function u(e){let{components:n,...o}=e;return(0,a.kt)(m,(0,i.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb"},"MongoDB"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--version"),' to check what is your current mongodb ("',(0,a.kt)("inlineCode",{parentName:"p"},"mongod"),'") version.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ mongod --version\ndb version v5.0.4\nBuild Info: {\n    "version": "5.0.4",\n    "gitVersion": "62a84ede3cc9a334e8bc82160714df71e7d3a29e",\n    "modules": [],\n    "allocator": "system",\n    "environment": {\n        "distarch": "x86_64",\n        "target_arch": "x86_64"\n    }\n}\n')),(0,a.kt)("p",null,"There are several Quickstart guides ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/developer/quickstarts/"},"here"),"."),(0,a.kt)("p",null,"Inside your backend root directory, you can set up your MongoDB server by doing: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ mongod --dbpath ./db # specifying the location of the db path\n{"t":{"$date":"2023-01-28T09:37:05.601-08:00"},"s":"I",  "c":"CONTROL",  "id":23285,   "ctx":"thread2","msg":"Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols \'none\'"}\n{"t":{"$date":"2023-01-28T09:37:05.605-08:00"},"s":"I",  "c":"NETWORK",  "id":4915701, "ctx":"thread2","msg":"Initialized wire specification","attr":{"spec":{"incomingExternalClient":{"minWireVersion":0,"maxWireVersion":17},"incomingInternalClient":{"minWireVersion":0,"maxWireVersion":17},"outgoing":{"minWireVersion":6,"maxWireVersion":17},"isInternalClient":true}}}\n{"t":{"$date":"2023-01-28T09:37:05.605-08:00"},"s":"I",  "c":"NETWORK",  "id":4648602, "ctx":"thread2","msg":"Implicit TCP FastOpen in use."}\n{"t":{"$date":"2023-01-28T09:37:05.606-08:00"},"s":"I",  "c":"REPL",     "id":5123008, "ctx":"thread2","msg":"Successfully registered PrimaryOnlyService","attr":{"service":"TenantMigrationDonorService","namespace":"config.tenantMigrationDonors"}}\n{"t":{"$date":"2023-01-28T09:37:05.606-08:00"},"s":"I",  "c":"REPL",     "id":5123008, "ctx":"thread2","msg":"Successfully registered PrimaryOnlyService","attr":{"service":"TenantMigrationRecipientService","namespace":"config.tenantMigrationRecipients"}}\n{"t":{"$date":"2023-01-28T09:37:05.606-08:00"},"s":"I",  "c":"REPL",     "id":5123008, "ctx":"thread2","msg":"Successfully registered PrimaryOnlyService","attr":{"service":"ShardSplitDonorService","namespace":"config.tenantSplitDonors"}}\n{"t":{"$date":"2023-01-28T09:37:05.606-08:00"},"s":"I",  "c":"CONTROL",  "id":5945603, "ctx":"thread2","msg":"Multi threading initialized"}\n{"t":{"$date":"2023-01-28T09:37:05.606-08:00"},"s":"I",  "c":"CONTROL",  "id":4615611, "ctx":"initandlisten","msg":"MongoDB starting","attr":{"pid":6520,"port":27017,"dbPath":"./db","architecture":"64-bit","host":"Joeys-MacBook-Pro.local"}}\n{"t":{"$date":"2023-01-28T09:37:05.606-08:00"},"s":"I",  "c":"CONTROL",  "id":23352,   "ctx":"initandlisten","msg":"Unable to resolve sysctl {sysctlName} (number) ","attr":{"sysctlName":"hw.cpufrequency"}}\n{"t":{"$date":"2023-01-28T09:37:05.606-08:00"},"s":"I",  "c":"CONTROL",  "id":23351,   "ctx":"initandlisten","msg":"{sysctlName} unavailable","attr":{"sysctlName":"machdep.cpu.features"}}\n{"t":{"$date":"2023-01-28T09:37:05.606-08:00"},"s":"I",  "c":"CONTROL",  "id":23403,   "ctx":"initandlisten","msg":"Build Info","attr":{"buildInfo":{"version":"6.0.4","gitVersion":"44ff59461c1353638a71e710f385a566bcd2f547","modules":[],"allocator":"system","environment":{"distarch":"aarch64","target_arch":"aarch64"}}}}\n{"t":{"$date":"2023-01-28T09:37:05.606-08:00"},"s":"I",  "c":"CONTROL",  "id":51765,   "ctx":"initandlisten","msg":"Operating System","attr":{"os":{"name":"Mac OS X","version":"21.6.0"}}}\n{"t":{"$date":"2023-01-28T09:37:05.606-08:00"},"s":"I",  "c":"CONTROL",  "id":21951,   "ctx":"initandlisten","msg":"Options set by command line","attr":{"options":{"storage":{"dbPath":"./db"}}}}\n{"t":{"$date":"2023-01-28T09:37:05.608-08:00"},"s":"I",  "c":"NETWORK",  "id":5693100, "ctx":"initandlisten","msg":"Asio socket.set_option failed with std::system_error","attr":{"note":"acceptor TCP fast open","option":{"level":6,"name":261,"data":"00 04 00 00"},"error":{"what":"set_option: Invalid argument","message":"Invalid argument","category":"asio.system","value":22}}}\n{"t":{"$date":"2023-01-28T09:37:05.609-08:00"},"s":"I",  "c":"STORAGE",  "id":22315,   "ctx":"initandlisten","msg":"Opening WiredTiger","attr":{"config":"create,cache_size=7680M,session_max=33000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,remove=true,path=journal,compressor=snappy),builtin_extension_config=(zstd=(compression_level=6)),file_manager=(close_idle_time=600,close_scan_interval=10,close_handle_minimum=2000),statistics_log=(wait=0),json_output=(error,message),verbose=[recovery_progress:1,checkpoint_progress:1,compact_progress:1,backup:0,checkpoint:0,compact:0,evict:0,history_store:0,recovery:0,rts:0,salvage:0,tiered:0,timestamp:0,transaction:0,verify:0,log:0],"}}\n{"t":{"$date":"2023-01-28T09:37:06.280-08:00"},"s":"I",  "c":"STORAGE",  "id":4795906, "ctx":"initandlisten","msg":"WiredTiger opened","attr":{"durationMillis":671}}\n{"t":{"$date":"2023-01-28T09:37:06.280-08:00"},"s":"I",  "c":"RECOVERY", "id":23987,   "ctx":"initandlisten","msg":"WiredTiger recoveryTimestamp","attr":{"recoveryTimestamp":{"$timestamp":{"t":0,"i":0}}}}\n{"t":{"$date":"2023-01-28T09:37:06.319-08:00"},"s":"W",  "c":"CONTROL",  "id":22120,   "ctx":"initandlisten","msg":"Access control is not enabled for the database. Read and write access to data and configuration is unrestricted","tags":["startupWarnings"]}\n{"t":{"$date":"2023-01-28T09:37:06.319-08:00"},"s":"W",  "c":"CONTROL",  "id":22140,   "ctx":"initandlisten","msg":"This server is bound to localhost. Remote systems will be unable to connect to this server. Start the server with --bind_ip <address> to specify which IP addresses it should serve responses from, or with --bind_ip_all to bind to all interfaces. If this behavior is desired, start the server with --bind_ip 127.0.0.1 to disable this warning","tags":["startupWarnings"]}\n{"t":{"$date":"2023-01-28T09:37:06.319-08:00"},"s":"I",  "c":"STORAGE",  "id":20320,   "ctx":"initandlisten","msg":"createCollection","attr":{"namespace":"admin.system.version","uuidDisposition":"provided","uuid":{"uuid":{"$uuid":"e89dcc14-9e9d-4eb4-807d-37836090ecc4"}},"options":{"uuid":{"$uuid":"e89dcc14-9e9d-4eb4-807d-37836090ecc4"}}}}\n{"t":{"$date":"2023-01-28T09:37:06.342-08:00"},"s":"I",  "c":"INDEX",    "id":20345,   "ctx":"initandlisten","msg":"Index build: done building","attr":{"buildUUID":null,"collectionUUID":{"uuid":{"$uuid":"e89dcc14-9e9d-4eb4-807d-37836090ecc4"}},"namespace":"admin.system.version","index":"_id_","ident":"index-1-7804448206449301513","collectionIdent":"collection-0-7804448206449301513","commitTimestamp":null}}\n{"t":{"$date":"2023-01-28T09:37:06.342-08:00"},"s":"I",  "c":"REPL",     "id":20459,   "ctx":"initandlisten","msg":"Setting featureCompatibilityVersion","attr":{"newVersion":"6.0"}}\n{"t":{"$date":"2023-01-28T09:37:06.342-08:00"},"s":"I",  "c":"REPL",     "id":5853300, "ctx":"initandlisten","msg":"current featureCompatibilityVersion value","attr":{"featureCompatibilityVersion":"6.0","context":"setFCV"}}\n{"t":{"$date":"2023-01-28T09:37:06.342-08:00"},"s":"I",  "c":"NETWORK",  "id":4915702, "ctx":"initandlisten","msg":"Updated wire specification","attr":{"oldSpec":{"incomingExternalClient":{"minWireVersion":0,"maxWireVersion":17},"incomingInternalClient":{"minWireVersion":0,"maxWireVersion":17},"outgoing":{"minWireVersion":6,"maxWireVersion":17},"isInternalClient":true},"newSpec":{"incomingExternalClient":{"minWireVersion":0,"maxWireVersion":17},"incomingInternalClient":{"minWireVersion":17,"maxWireVersion":17},"outgoing":{"minWireVersion":17,"maxWireVersion":17},"isInternalClient":true}}}\n{"t":{"$date":"2023-01-28T09:37:06.342-08:00"},"s":"I",  "c":"NETWORK",  "id":4915702, "ctx":"initandlisten","msg":"Updated wire specification","attr":{"oldSpec":{"incomingExternalClient":{"minWireVersion":0,"maxWireVersion":17},"incomingInternalClient":{"minWireVersion":17,"maxWireVersion":17},"outgoing":{"minWireVersion":17,"maxWireVersion":17},"isInternalClient":true},"newSpec":{"incomingExternalClient":{"minWireVersion":0,"maxWireVersion":17},"incomingInternalClient":{"minWireVersion":17,"maxWireVersion":17},"outgoing":{"minWireVersion":17,"maxWireVersion":17},"isInternalClient":true}}}\n{"t":{"$date":"2023-01-28T09:37:06.342-08:00"},"s":"I",  "c":"REPL",     "id":5853300, "ctx":"initandlisten","msg":"current featureCompatibilityVersion value","attr":{"featureCompatibilityVersion":"6.0","context":"startup"}}\n{"t":{"$date":"2023-01-28T09:37:06.342-08:00"},"s":"I",  "c":"STORAGE",  "id":5071100, "ctx":"initandlisten","msg":"Clearing temp directory"}\n{"t":{"$date":"2023-01-28T09:37:06.342-08:00"},"s":"I",  "c":"CONTROL",  "id":20536,   "ctx":"initandlisten","msg":"Flow Control is enabled on this deployment"}\n{"t":{"$date":"2023-01-28T09:37:06.342-08:00"},"s":"I",  "c":"FTDC",     "id":20625,   "ctx":"initandlisten","msg":"Initializing full-time diagnostic data capture","attr":{"dataDirectory":"./db/diagnostic.data"}}\n{"t":{"$date":"2023-01-28T09:37:06.343-08:00"},"s":"I",  "c":"STORAGE",  "id":20320,   "ctx":"initandlisten","msg":"createCollection","attr":{"namespace":"local.startup_log","uuidDisposition":"generated","uuid":{"uuid":{"$uuid":"d56f660e-a4d4-476f-8415-13f048a130ec"}},"options":{"capped":true,"size":10485760}}}\n{"t":{"$date":"2023-01-28T09:37:06.368-08:00"},"s":"I",  "c":"INDEX",    "id":20345,   "ctx":"initandlisten","msg":"Index build: done building","attr":{"buildUUID":null,"collectionUUID":{"uuid":{"$uuid":"d56f660e-a4d4-476f-8415-13f048a130ec"}},"namespace":"local.startup_log","index":"_id_","ident":"index-3-7804448206449301513","collectionIdent":"collection-2-7804448206449301513","commitTimestamp":null}}\n{"t":{"$date":"2023-01-28T09:37:06.368-08:00"},"s":"I",  "c":"REPL",     "id":6015317, "ctx":"initandlisten","msg":"Setting new configuration state","attr":{"newState":"ConfigReplicationDisabled","oldState":"ConfigPreStart"}}\n{"t":{"$date":"2023-01-28T09:37:06.368-08:00"},"s":"I",  "c":"STORAGE",  "id":22262,   "ctx":"initandlisten","msg":"Timestamp monitor starting"}\n{"t":{"$date":"2023-01-28T09:37:06.368-08:00"},"s":"I",  "c":"NETWORK",  "id":23015,   "ctx":"listener","msg":"Listening on","attr":{"address":"/tmp/mongodb-27017.sock"}}\n{"t":{"$date":"2023-01-28T09:37:06.368-08:00"},"s":"I",  "c":"NETWORK",  "id":23015,   "ctx":"listener","msg":"Listening on","attr":{"address":"127.0.0.1"}}\n{"t":{"$date":"2023-01-28T09:37:06.368-08:00"},"s":"I",  "c":"NETWORK",  "id":23016,   "ctx":"listener","msg":"Waiting for connections","attr":{"port":27017,"ssl":"off"}}\n{"t":{"$date":"2023-01-28T09:37:06.369-08:00"},"s":"I",  "c":"CONTROL",  "id":20712,   "ctx":"LogicalSessionCacheReap","msg":"Sessions collection is not set up; waiting until next sessions reap interval","attr":{"error":"NamespaceNotFound: config.system.sessions does not exist"}}\n{"t":{"$date":"2023-01-28T09:37:06.369-08:00"},"s":"I",  "c":"STORAGE",  "id":20320,   "ctx":"LogicalSessionCacheRefresh","msg":"createCollection","attr":{"namespace":"config.system.sessions","uuidDisposition":"generated","uuid":{"uuid":{"$uuid":"be2d45b6-6e19-4815-bfd2-b4ce5e5a6a93"}},"options":{}}}\n{"t":{"$date":"2023-01-28T09:37:06.403-08:00"},"s":"I",  "c":"INDEX",    "id":20345,   "ctx":"LogicalSessionCacheRefresh","msg":"Index build: done building","attr":{"buildUUID":null,"collectionUUID":{"uuid":{"$uuid":"be2d45b6-6e19-4815-bfd2-b4ce5e5a6a93"}},"namespace":"config.system.sessions","index":"_id_","ident":"index-5-7804448206449301513","collectionIdent":"collection-4-7804448206449301513","commitTimestamp":null}}\n{"t":{"$date":"2023-01-28T09:37:06.403-08:00"},"s":"I",  "c":"INDEX",    "id":20345,   "ctx":"LogicalSessionCacheRefresh","msg":"Index build: done building","attr":{"buildUUID":null,"collectionUUID":{"uuid":{"$uuid":"be2d45b6-6e19-4815-bfd2-b4ce5e5a6a93"}},"namespace":"config.system.sessions","index":"lsidTTLIndex","ident":"index-6-7804448206449301513","collectionIdent":"collection-4-7804448206449301513","commitTimestamp":null}}\n')),(0,a.kt)("h3",{id:"using-mongo-shell"},"Using Mongo Shell"),(0,a.kt)("p",null,"Entering ",(0,a.kt)("inlineCode",{parentName:"p"},"mongosh")," opens up the mongo shell, where you can enter MongoDB commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ mongosh\nCurrent Mongosh Log ID: 63d55f807066198a76aa069a\nConnecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2\nUsing MongoDB:          6.0.4\nUsing Mongosh:          1.6.2\n\nFor mongosh info see: https://docs.mongodb.com/mongodb-shell/\n\n\nTo help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).\nYou can opt-out by running the disableTelemetry() command.\n\n------\n   The server generated these startup warnings when booting\n   2023-01-28T09:37:06.319-08:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted\n   2023-01-28T09:37:06.319-08:00: This server is bound to localhost. Remote systems will be unable to connect to this server. Start the server with --bind_ip <address> to specify which IP addresses it should serve responses from, or with --bind_ip_all to bind to all interfaces. If this behavior is desired, start the server with --bind_ip 127.0.0.1 to disable this warning\n------\n\n------\n   Enable MongoDB's free cloud-based monitoring service, which will then receive and display\n   metrics about your deployment (disk utilization, CPU, operation statistics, etc).\n   \n   The monitoring data will be available on a MongoDB website with a unique URL accessible to you\n   and anyone you share the URL with. MongoDB may use this information to make product\n   improvements and to suggest MongoDB products and deployment options to you.\n   \n   To enable free monitoring, run the following command: db.enableFreeMonitoring()\n   To permanently disable this reminder, run the following command: db.disableFreeMonitoring()\n------\n\ntest> # <-- this is your current db\n\ntest> use blog-MERN-db # <-- the keyword `use` allows you to switch database \nswitched to db blog-MERN-db\nblog-MERN-db> \n")),(0,a.kt)("p",null,"To insert some sample data, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"insertMany")," command. "),(0,a.kt)("p",null,"When you copy and past your data (array of objects below), the ... indicates a new line in your command and you can also add a new line by using ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift + Enter"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ blog-MERN-db> db.articles.insertMany([\n...   {\n...     name: 'learn-react',\n...     comments: [],\n...     upvotes: 0\n...   },\n...   {\n...     name: 'learn-node',\n...     comments: [],\n...     upvotes: 0\n...   },\n...   {\n...     name: 'learn-mongodb',\n...     comments: [],\n...     upvotes: 0\n...   }\n... ])\n")),(0,a.kt)("p",null,"You'll see the following as confirmation that your inserts were successful."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"{\n  acknowledged: true,\n  insertedIds: {\n    '0': ObjectId(\"63d560e87066198a76aa069b\"),\n    '1': ObjectId(\"63d560e87066198a76aa069c\"),\n    '2': ObjectId(\"63d560e87066198a76aa069d\")\n  }\n}\n")),(0,a.kt)("p",null,"To retreive all data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ blog-MERN-db> db.articles.find({}).pretty()\n")),(0,a.kt)("p",null,"You'll see something similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[\n  { _id: 1, message: 'Hello World!', author: 'MongoDB', comments: [] },\n  {\n    _id: ObjectId(\"63d560e87066198a76aa069b\"),\n    name: 'learn-react',\n    comments: [],\n    upvotes: 0\n  },\n  {\n    _id: ObjectId(\"63d560e87066198a76aa069c\"),\n    name: 'learn-node',\n    comments: [],\n    upvotes: 0\n  },\n  {\n    _id: ObjectId(\"63d560e87066198a76aa069d\"),\n    name: 'learn-mongodb',\n    comments: [],\n    upvotes: 0\n  }\n]\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"find")," function accepts an object, where you can enter your specific query. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ blog-MERN-db> db.articles.find({ name: 'learn-mongodb' }).pretty()\n")),(0,a.kt)("p",null,"The return value would be an array of objects matching your query. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[\n  {\n    _id: ObjectId(\"63d560e87066198a76aa069d\"),\n    name: 'learn-mongodb',\n    comments: [],\n    upvotes: 0\n  }\n]\n")),(0,a.kt)("p",null,"At this point you probably have multiple Terminal windows opened."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"terminals",src:t(2580).Z,width:"332",height:"200"})),(0,a.kt)("p",null,"A simple get query: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  const article = await db.collection('articles').findOne({ name: article_id });\n")),(0,a.kt)("p",null,"You can use MongoDB operators in your queries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"  const article = await db.collection('articles').updateOne({ name: article_id }, { $inc: { upvotes: 1 } });\n")))}u.isMDXComponent=!0},2580:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/terminals-c2df4983578428e0c3617388af80bf29.png"}}]);