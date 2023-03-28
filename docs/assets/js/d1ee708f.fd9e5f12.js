"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[898],{7522:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(9901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||s;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(7364),o=(r(9901),r(7522));const s={},a="MessageDB",i={unversionedId:"stores/message-db/index",id:"stores/message-db/index",title:"MessageDB",description:"MessageDB is a fully-featured event store and message store implemented in PostgreSQL for Pub/Sub, Event Sourcing,",source:"@site/docs/stores/message-db/index.md",sourceDirName:"stores/message-db",slug:"/stores/message-db/",permalink:"/equinox-js/docs/stores/message-db/",draft:!1,editUrl:"https://github.com/nordfjord/equinox-js/tree/main/apps/docs/docs/stores/message-db/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Invoice",permalink:"/equinox-js/docs/examples/invoice"},next:{title:"Access Strategies",permalink:"/equinox-js/docs/stores/message-db/access-strategies"}},c={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"messagedb"},"MessageDB"),(0,o.kt)("p",null,"MessageDB is a fully-featured event store and message store implemented in PostgreSQL for Pub/Sub, Event Sourcing,\nMessaging, and Evented Microservices applications. It was extracted from\nthe ",(0,o.kt)("a",{parentName:"p",href:"http://docs.eventide-project.org/"},"Eventide Project")," to make it easier for users to write clients in the language\nof their choosing."))}d.isMDXComponent=!0}}]);