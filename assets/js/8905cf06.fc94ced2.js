"use strict";(self.webpackChunkbotwithuswiki=self.webpackChunkbotwithuswiki||[]).push([[4496],{9792:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>h,toc:()=>d});var t=n(7624),o=n(2172),s=(n(1504),n(9188)),r=n(9080);const l={title:"Wiki Contriutions",description:"How to contribute to our wiki.",slug:"/contributing-to-wiki"},c=void 0,h={id:"Guides/03contributingToWiki",title:"Wiki Contriutions",description:"How to contribute to our wiki.",source:"@site/docs/Guides/03contributingToWiki.md",sourceDirName:"Guides",slug:"/contributing-to-wiki",permalink:"/contributing-to-wiki",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Wiki Contriutions",description:"How to contribute to our wiki.",slug:"/contributing-to-wiki"},sidebar:"guideSidebar",previous:{title:"Frequently Asked Questions",permalink:"/frequently-asked-questions"}},a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Getting setup",id:"getting-setup",level:2},{value:"Making your changes live",id:"making-your-changes-live",level:2}];function u(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.admonition,{type:"hidden",children:(0,t.jsx)(i.h2,{id:"introduction",children:"Introduction"})}),"\n",(0,t.jsx)(s.c,{title:"Introduction",children:(0,t.jsxs)(r.c,{url:"https://github.com/BotWithUs/BwuWiki",children:[(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Our wiki is completely open source, you can find the code ",(0,t.jsx)("u",{children:(0,t.jsx)(i.a,{href:"https://github.com/BotWithUs/BwuWiki",children:(0,t.jsx)(i.strong,{children:"here"})})}),"."]}),"\n",(0,t.jsx)(i.li,{children:"This wiki is a NodeJS project, which means you can run the code locally yourself, all while it updates in real time in your local browser once you save files."}),"\n",(0,t.jsx)(i.li,{children:"The minimum supported NodeJS Version is 18"}),"\n",(0,t.jsxs)(i.li,{children:["All wiki pages are ",(0,t.jsx)(i.a,{href:"https://commonmark.org/",children:(0,t.jsx)(i.strong,{children:"Markdown"})})," files, and are all found in the docs/ folder of the github repo."]}),"\n",(0,t.jsxs)(i.li,{children:["Docusaurus leverages the ",(0,t.jsx)(i.a,{href:"https://mdxjs.com/",children:(0,t.jsx)(i.strong,{children:"MDX Compiler"})})," to transform markdown syntax into ",(0,t.jsx)(i.a,{href:"https://react.dev/",children:(0,t.jsx)(i.strong,{children:"React"})})," components, amazing!"]}),"\n",(0,t.jsxs)(i.li,{children:["See ",(0,t.jsx)(i.a,{href:"https://docusaurus.io/docs/markdown-features",children:(0,t.jsx)(i.strong,{children:"Docussaurus Markdown Features"})})," to become a pro at making beautiful pages."]}),"\n"]}),(0,t.jsx)(i.admonition,{title:"You can help!",type:"info",children:(0,t.jsxs)(i.p,{children:["If you'd like to contriubute, you can by making a ",(0,t.jsx)(i.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",children:(0,t.jsx)(i.strong,{children:"pull request"})})," to our ",(0,t.jsx)(i.a,{href:"https://github.com/BotWithUs/BwuWiki",children:(0,t.jsx)(i.strong,{children:"master branch"})}),"!"]})})]})}),"\n",(0,t.jsx)(i.admonition,{type:"hidden",children:(0,t.jsx)(i.h2,{id:"getting-setup",children:"Getting setup"})}),"\n",(0,t.jsxs)(s.c,{title:"Getting setup",children:[(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["First, let's make sure that you have ",(0,t.jsx)(i.a,{href:"https://nodejs.org/en/download",children:(0,t.jsx)(i.strong,{children:"NodeJS 18+"})})," installed."]}),"\n",(0,t.jsx)(i.li,{children:"Then, install yarn, the package manager for this project:"}),"\n"]}),"\n"]}),(0,t.jsx)(i.admonition,{title:"Install yarn package manager",type:"info",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"npm install --global yarn\n"})})}),(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Next, you'll need to make sure that you have ",(0,t.jsx)(i.a,{href:"https://git-scm.com/downloads",children:(0,t.jsx)(i.strong,{children:"Git"})})," or ",(0,t.jsx)(i.a,{href:"https://desktop.github.com/",children:(0,t.jsx)(i.strong,{children:"GitHub Desktop"})})," installed."]}),"\n",(0,t.jsx)(i.li,{children:"Then, clone our code using GitHub Desktop, or run the following commands:"}),"\n"]}),"\n"]}),(0,t.jsx)(i.admonition,{title:"Clone the Wiki repository",type:"info",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"git clone https://github.com/BotWithUs/BwuWiki\ncd BwuWiki\n"})})}),(0,t.jsx)(i.admonition,{title:"Before proceeding",type:"warning",children:(0,t.jsx)(i.p,{children:"You should make a new branch as you cannot commit changes to master. Or you can fork the repository. If you make a bunch of changes to the locally checked out master branch, you wont be able to push them to the repo."})}),(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Next, inside of the BwuWiki folder, run the following command to install dependencies:"}),"\n"]}),"\n"]}),(0,t.jsx)(i.admonition,{title:"Install project dependencies",type:"info",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"yarn\n"})})}),(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Now you are all set to run the project locally!"}),"\n",(0,t.jsx)(i.li,{children:"The following command will launch the project locally and connect you to it via your browser."}),"\n"]}),"\n"]}),(0,t.jsx)(i.admonition,{title:"Its local dev time baby!",type:"info",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"yarn start\n"})})}),(0,t.jsx)(i.admonition,{title:"Changes reflect instantly!",type:"warning",children:(0,t.jsx)(i.p,{children:"While the server is running, any changes you make to files and save, should reflect live in your local browser."})})]}),"\n",(0,t.jsx)(i.admonition,{type:"hidden",children:(0,t.jsx)(i.h2,{id:"making-your-changes-live",children:"Making your changes live"})}),"\n",(0,t.jsx)(s.c,{title:"Making your changes live",children:(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Once you've finished your contributions, commit and push them back to your side branch or forked repo."}),"\n",(0,t.jsxs)(i.li,{children:["Then, they need to be merged into the master branch of ",(0,t.jsx)(i.a,{href:"https://github.com/BotWithUs/BwuWiki",children:(0,t.jsx)(i.strong,{children:"BwuWiki"})})," in order to be live on ",(0,t.jsx)(i.a,{href:"https://wiki.botwithus.net",children:(0,t.jsx)(i.strong,{children:"https://wiki.botwithus.net"})})]}),"\n",(0,t.jsxs)(i.li,{children:["While you do not have permission to commit to the protected master branch, you can submit a ",(0,t.jsx)(i.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",children:(0,t.jsx)(i.strong,{children:"pull request"})})," to our ",(0,t.jsx)(i.a,{href:"https://github.com/BotWithUs/BwuWiki/pulls",children:(0,t.jsx)(i.strong,{children:"repository pull requests"})})]}),"\n",(0,t.jsxs)(i.li,{children:["Once your PR is approved and merged by staff, changes will be live on ",(0,t.jsx)(i.a,{href:"https://wiki.botwithus.net",children:(0,t.jsx)(i.strong,{children:"https://wiki.botwithus.net"})})," within minutes."]}),"\n"]})})]})}function p(e={}){const{wrapper:i}={...(0,o.M)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);