"use strict";(self.webpackChunkdocusaurus_v2=self.webpackChunkdocusaurus_v2||[]).push([[7080],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4916:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(4137));const o={},s="macOS Hacks",i={unversionedId:"macOS/macOS Hacks",id:"macOS/macOS Hacks",title:"macOS Hacks",description:"Hacks for Good",source:"@site/docs/macOS/macOS Hacks.md",sourceDirName:"macOS",slug:"/macOS/macOS Hacks",permalink:"/docusaurus/docs/macOS/macOS Hacks",draft:!1,editUrl:"https://github.com/joey-ma/docusaurus.v2/tree/main/docs/macOS/macOS Hacks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Homebrew",permalink:"/docusaurus/docs/homebrew"},next:{title:"MongoDB",permalink:"/docusaurus/docs/mongodb/"}},l={},c=[{value:"Hacks for Good",id:"hacks-for-good",level:3},{value:"OneDrive alias",id:"onedrive-alias",level:2},{value:"Solution",id:"solution",level:3},{value:"Explanation",id:"explanation",level:3},{value:"Screen Saver Settings",id:"screen-saver-settings",level:2},{value:"References:",id:"references",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"macos-hacks"},"macOS Hacks"),(0,r.kt)("h3",{id:"hacks-for-good"},"Hacks for Good"),(0,r.kt)("p",null,"Here's to documenting my notes / learnings."),(0,r.kt)("h2",{id:"onedrive-alias"},"OneDrive alias"),(0,r.kt)("p",null,"For those in the Mac community and using OneDrive, they may have encountered this issue that ",(0,r.kt)("a",{parentName:"p",href:"https://answers.microsoft.com/en-us/msoffice/forum/all/onedrive-creates-an-alias-on-mac-by-default-under/1c88cfaf-a99a-43ae-bb5d-dbd3a9913771?page=1"},"Onedrive creates an alias automatically within the OneDrive folder"),". According to some users, apparently initially it was a real folder and as a result, the system drive gets full and my computer stops working properly. For me, it is just super unintuitive and annoys me."),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("p",null,"Summary:"),(0,r.kt)("p",null,"Find your file path, and Enter this in your Terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"chflags -h hidden /path/to/OneDrive-alias-folder\n")),(0,r.kt)("h3",{id:"explanation"},"Explanation"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"chflags")," utility modifies the file flags of the listed files as specified by the flags operand."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-h"),' flag means "If the file is a symbolic link, change the file flags of the link itself rather than the file to which it points." Otherwise, ',(0,r.kt)("inlineCode",{parentName:"p"},"chflags hidden /path/to/OneDrive-alias-folder")," would actually hide the original ",(0,r.kt)("inlineCode",{parentName:"p"},"/Users/joeymaaaa/Library/CloudStorage/OneDrive-Personal/")," and is not what we want to do."),(0,r.kt)("p",null,"I like the ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," verbose flag to provide some clue after command execution. "),(0,r.kt)("p",null,"Be sure you are referencing the alias within the folder, for example, your file path might look like this ",(0,r.kt)("inlineCode",{parentName:"p"},"/Users/your_username/Library/CloudStorage/OneDrive-Personal/OneDrive"),", so the following is what worked for me."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"chflags -h -v hidden /Users/joeymaaa/Library/CloudStorage/OneDrive-Personal/OneDrive\n")),(0,r.kt)("p",null,"And if you want to reveal a hidden file or folder, you can enter ",(0,r.kt)("inlineCode",{parentName:"p"},"chflags nohidden file_name")," or, in this case: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"chflags -h -v nohidden /path/to/OneDrive-alias-folder\n")),(0,r.kt)("p",null,"You can read more about ",(0,r.kt)("inlineCode",{parentName:"p"},"chflags")," by entering ",(0,r.kt)("inlineCode",{parentName:"p"},"man chflags")," into the Terminal. Type ",(0,r.kt)("inlineCode",{parentName:"p"},"q")," to quit the vim (Vi IMproved) text editor environment."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"man")," is short for manual and the ",(0,r.kt)("inlineCode",{parentName:"p"},"man")," utility finds and displays online manual documentation pages. If ",(0,r.kt)("inlineCode",{parentName:"p"},"mansect")," is provided, man restricts the search to the specific section of the manual. You can read more about ",(0,r.kt)("inlineCode",{parentName:"p"},"man")," by entering ",(0,r.kt)("inlineCode",{parentName:"p"},"man man"),". "),(0,r.kt)("h2",{id:"screen-saver-settings"},"Screen Saver Settings"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Unfortunately, I haven't figured this one out yet.")),(0,r.kt)("p",null,"For many Mac users, we would like to customize how our screen saver looks. I enjoy seeing my favorite pictures as a slideshow when my screen saver is on, and now my daughter does, too. However, there is no way to customize the duration for each slide (among other features). This lack of feature has been discovered for a long time, except there has always been some way to hack it. I hope Apple adds this as an official feature someday."),(0,r.kt)("p",null,"First we can check your current duration setting (usually it is set for 3 seconds)"),(0,r.kt)("p",null,"Paste this in your Terminal (and provide password)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"sudo /usr/libexec/PlistBuddy -c \"print ':JustASlide:mainDuration'\" /System/Library/PrivateFrameworks/Slideshows.framework/Versions/A/Resources/Content/EffectDescriptions.plist\n")),(0,r.kt)("p",null,"It will show you the current number in seconds, mine shows 3, which is too short for my preference."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"Joeys-MacBook-Pro ~ %  sudo /usr/libexec/PlistBuddy -c \"print ':JustASlide:mainDuration'\" /System/Library/PrivateFrameworks/Slideshows.framework/Versions/A/Resources/Content/EffectDescriptions.plist\n\nPassword: # your_password\n3\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This used to work: paste following in to your Terminal to change it to let say 10 seconds (or any number you like)."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"sudo /usr/libexec/PlistBuddy -c \"set ':JustASlide:mainDuration' 10\" /System/Library/PrivateFrameworks/Slideshows.framework/Versions/A/Resources/Content/EffectDescriptions.plist\n")),(0,r.kt)("p",{parentName:"admonition"},"However, this solution no longer works as of August 9, 2016. The time setting is readable, but is no longer settable by the terminal command.")),(0,r.kt)("p",null,"It turns out, to display the current settings of the screensaver for the current host, you can also run this command in the Terminal app. It will display a list of settings, including the screensaver's timeout, whether it requires a password to unlock, and the currently selected screensaver module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"defaults -currentHost read com.apple.screensaver\n")),(0,r.kt)("p",null,"In my case, here is my experience."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},'Joeys-MacBook-Pro ~ % defaults -currentHost read com.apple.screensaver\n{\n    CleanExit = YES;\n    PrefsVersion = 100;\n    idleTime = 1200;\n    lastDelayTime = 1200;\n    moduleDict =     {\n        moduleName = iLifeSlideshows;\n        path = "/System/Library/Frameworks/ScreenSaver.framework/PlugIns/iLifeSlideshows.appex";\n        type = 0;\n    };\n    showClock = 1;\n    tokenRemovalAction = 0;\n}\n')),(0,r.kt)("p",null,"I then tried reading the settings of ",(0,r.kt)("inlineCode",{parentName:"p"},"moduleName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"iLifeSlideshows"),", but it only has one key/value pair, indicating that the ",(0,r.kt)("inlineCode",{parentName:"p"},"styleKey")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"KenBurns"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"joeyma@Joeys-MacBook-Pro ~ % defaults -currentHost read com.apple.screensaver.iLifeSlideshows\n{\n    styleKey = KenBurns;\n}\n")),(0,r.kt)("p",null,"Some context: "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NSUserDefaults")," is a simple way to store and retrieve preference values for an application using key-value pairs. It is often used to store user preferences for an app, such as default font size, language preference, or color scheme. However, some preferences may not be available through this interface."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CFPreferences")," is a more advanced and lower-level API that provides greater control over preferences. It allows you to access and modify preferences at a more granular level, including preferences that may not be exposed through ",(0,r.kt)("inlineCode",{parentName:"p"},"NSUserDefaults"),"."),(0,r.kt)("p",null,"So, in short, if you need to access a setting that is not available through ",(0,r.kt)("inlineCode",{parentName:"p"},"NSUserDefaults"),", you may need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CFPreferences")," API instead."),(0,r.kt)("p",null,"To set the duration of each slide to 10 seconds, I tried the following, but it ",(0,r.kt)("em",{parentName:"p"},"does not work.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"defaults write com.apple.screensaver 'slideDuration' -float 10\n")),(0,r.kt)("p",null,"To apply the changes, enter the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"killall cfprefsd\n")),(0,r.kt)("p",null,"This will restart the preferences daemon, which will cause the changes to take effect."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This does not work.")),(0,r.kt)("p",null,"Note: "),(0,r.kt)("p",null,"Not all screen savers may support this feature, and some may have different preferences available. You can check the available preferences for a particular screen saver by using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"defaults read /Library/Preferences/com.apple.screensaver.<module-name>\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<module-name>"),' with the name of the screen saver module you want to check, without the ".plist" extension. This will display a list of preferences for that screen saver module, which you can modify using the defaults write command as described above.'),(0,r.kt)("h4",{id:"references"},"References:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://hints.macworld.com/article.php?story=20130215183522445"},"Change screensaver slide duration")," seemed to have a working solution since of February 18, 2013, but it stopped working at some point."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apple.stackexchange.com/questions/135766/os-x-mavericks-screensaver-changes-pictures-too-quickly-how-do-i-slow-it-down"},"Ask Different")," seemed to have a working solution since of February 18, 2013, but stopped working at some point."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/28789120/programmatically-change-screen-saver-settings"},"Programmatically change screen saver settings"))))}d.isMDXComponent=!0}}]);