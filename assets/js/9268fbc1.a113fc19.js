"use strict";(self.webpackChunkdocusaurus_v2=self.webpackChunkdocusaurus_v2||[]).push([[7698],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||n;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3830:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(7462),o=(a(7294),a(4137));const n={},i="ECR",s={unversionedId:"AWS/ECR",id:"AWS/ECR",title:"ECR",description:"AWS ECR (Elastic Container Registry) is a fully-managed Docker container registry that makes it easy to store, manage, and deploy Docker container images. It integrates seamlessly with other AWS services, such as Amazon Elastic Container Service (ECS), Amazon Elastic Kubernetes Service (EKS), and AWS Fargate, to provide a complete solution for building, deploying, and managing containerized applications. With ECR, users can securely store and manage Docker images, control access and permissions, and easily deploy Docker containers to their production environments.",source:"@site/docs/AWS/ECR.md",sourceDirName:"AWS",slug:"/AWS/ECR",permalink:"/docusaurus/docs/AWS/ECR",draft:!1,editUrl:"https://github.com/joey-ma/docusaurus.v2/tree/main/docs/AWS/ECR.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS",permalink:"/docusaurus/docs/category/aws"},next:{title:"ECS",permalink:"/docusaurus/docs/AWS/ECS"}},l={},c=[{value:"Pushing a Docker image to ECR.",id:"pushing-a-docker-image-to-ecr",level:2},{value:"macOS/Linux",id:"macoslinux",level:3},{value:"Windows",id:"windows",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ecr"},"ECR"),(0,o.kt)("p",null,"AWS ECR (Elastic Container Registry) is a fully-managed Docker container registry that makes it easy to store, manage, and deploy Docker container images. It integrates seamlessly with other AWS services, such as Amazon Elastic Container Service (ECS), Amazon Elastic Kubernetes Service (EKS), and AWS Fargate, to provide a complete solution for building, deploying, and managing containerized applications. With ECR, users can securely store and manage Docker images, control access and permissions, and easily deploy Docker containers to their production environments."),(0,o.kt)("h2",{id:"pushing-a-docker-image-to-ecr"},"Pushing a Docker image to ECR."),(0,o.kt)("p",null,'You can find these instructions by clicking on "View push commands" at the upper right corner in your ECR.'),(0,o.kt)("h3",{id:"macoslinux"},"macOS/Linux"),(0,o.kt)("p",null,"Make sure that you have the latest version of the AWS CLI and Docker installed. For more information, see Getting Started with Amazon ECR."),(0,o.kt)("p",null,"Use the following steps to authenticate and push an image to your repository. For additional registry authentication methods, including the Amazon ECR credential helper, see Registry Authentication."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Retrieve an authentication token and authenticate your Docker client to your registry.",(0,o.kt)("br",{parentName:"li"}),"Use the AWS CLI:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-west-2.amazonaws.com\n")),(0,o.kt)("p",null,"Note: If you receive an error using the AWS CLI, make sure that you have the latest version of the AWS CLI and Docker installed."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Build your Docker image using the following command. For information on building a Docker file from scratch see the instructions here . You can skip this step if your image is already built:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t people-depot-backend-dev .\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"After the build completes, tag your image so you can push the image to this repository:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker tag people-depot-backend-dev:latest 123456789012.dkr.ecr.us-west-2.amazonaws.com/people-depot-backend-dev:latest\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Run the following command to push this image to your newly created AWS repository:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker push 123456789012.dkr.ecr.us-west-2.amazonaws.com/people-depot-backend-dev:latest\n")),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("p",null,"Make sure that you have the latest version of the AWS Tools for PowerShell and Docker installed. For more information, see Getting Started with Amazon ECR."),(0,o.kt)("p",null,"Use the following steps to authenticate and push an image to your repository. For additional registry authentication methods, including the Amazon ECR credential helper, see Registry Authentication."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Retrieve an authentication token and authenticate your Docker client to your registry.",(0,o.kt)("br",{parentName:"li"}),"Use AWS Tools for PowerShell:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(Get-ECRLoginCommand).Password | docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-west-2.amazonaws.com\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Build your Docker image using the following command. For information on building a Docker file from scratch see the instructions here . You can skip this step if your image is already built:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t people-depot-backend-dev .\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"After the build completes, tag your image so you can push the image to this repository:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker tag people-depot-backend-dev:latest 123456789012.dkr.ecr.us-west-2.amazonaws.com/people-depot-backend-dev:latest\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Run the following command to push this image to your newly created AWS repository:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker push 123456789012.dkr.ecr.us-west-2.amazonaws.com/people-depot-backend-dev:latest\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"To build a Docker image for multi-platform or to build for a different platform, see ",(0,o.kt)("a",{parentName:"em",href:"http://localhost:3000/docs/Docker/#building-multi-platform-images"},"here"),".")))}d.isMDXComponent=!0}}]);