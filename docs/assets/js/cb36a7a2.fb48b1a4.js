"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[907],{7522:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var s=n(9901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=s.createContext({}),p=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return s.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?s.createElement(h,o(o({ref:t},l),{},{components:n})):s.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var s=n(7364),r=(n(9901),n(7522));const a={},o="Access Strategies",i={unversionedId:"stores/message-db/access-strategies",id:"stores/message-db/access-strategies",title:"Access Strategies",description:"The first, and likely most used access strategy is the unoptimized one. It'll not apply any optimised reading logic.",source:"@site/docs/stores/message-db/access-strategies.md",sourceDirName:"stores/message-db",slug:"/stores/message-db/access-strategies",permalink:"/equinox-js/docs/stores/message-db/access-strategies",draft:!1,editUrl:"https://github.com/nordfjord/equinox-js/tree/main/apps/docs/docs/stores/message-db/access-strategies.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MessageDB",permalink:"/equinox-js/docs/stores/message-db/"},next:{title:"Caching",permalink:"/equinox-js/docs/stores/message-db/caching"}},c={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"access-strategies"},"Access Strategies"),(0,r.kt)("h1",{id:"unoptimized"},"Unoptimized"),(0,r.kt)("p",null,"The first, and likely most used access strategy is the unoptimized one. It'll not apply any optimised reading logic.\nWhen loading a stream for the first time all of its events will be loaded in batches of ",(0,r.kt)("inlineCode",{parentName:"p"},"batchSize")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"500"),").\nThis turns out to be a sensible default for most aggregates, especially when used in conjunction with the\nbuilt-in caching layer."),(0,r.kt)("h1",{id:"latestknowneventtype"},"LatestKnownEvent(type)"),(0,r.kt)("p",null,'There is a special case of stream whose events are all a "full-replace". An example could be a customer\'s contact\npreferences, or an entity view-data stream. This access strategy will ensure that you only load at most a single event\nwhen transacting or querying such a stream.'),(0,r.kt)("h1",{id:"adjacentsnapshotstype-tosnapshot"},"AdjacentSnapshots(type, toSnapshot)"),(0,r.kt)("p",null,"Generates and stores a snapshot event in an adjacent ",(0,r.kt)("inlineCode",{parentName:"p"},"{category}:snapshot-{stream_id}")," stream.\nThe generation happens every ",(0,r.kt)("inlineCode",{parentName:"p"},"batchSize"),"events.\nIn practise, this means the state of the stream can be reconstructed with exactly 2 round-trips to the database.\nThe first round-trip fetches the most recent event of type ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," from the snapshot stream.\nThe second round-trip fetches ",(0,r.kt)("inlineCode",{parentName:"p"},"batchSize")," events from the position of the snapshot\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"toSnapshot")," function is used to generate the event to store in the snapshot stream.\nIt should return the event case whose name matches ",(0,r.kt)("inlineCode",{parentName:"p"},"type")))}u.isMDXComponent=!0}}]);