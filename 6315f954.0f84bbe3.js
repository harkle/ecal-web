(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{133:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,p=m["".concat(o,".").concat(d)]||m[d]||f[d]||i;return t?a.a.createElement(p,s(s({ref:n},u),{},{components:t})):a.a.createElement(p,s({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},134:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return o}));var r=t(22),a=t(135);function i(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,c=i.absolute,u=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(s)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+l:l}(i,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},135:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))},136:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},137:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(55),o=t.n(i),s=t(134);n.a=function(e){var n=e.children,t=e.minHeight,r=e.backgroundColor,i=e.url,c=e.src;return c&&(n=a.a.createElement("iframe",{src:Object(s.a)(c),frameBorder:"0",style:{minHeight:t}})),a.a.createElement("div",{className:o.a.browserWindow},a.a.createElement("div",{className:o.a.browserWindowHeader},a.a.createElement("div",{className:o.a.buttons},a.a.createElement("span",{className:o.a.dot,style:{background:"#f25f58"}}),a.a.createElement("span",{className:o.a.dot,style:{background:"#fbbe3c"}}),a.a.createElement("span",{className:o.a.dot,style:{background:"#58cb42"}})),a.a.createElement("div",{className:o.a.browserWindowAddressBar},a.a.createElement("input",{disabled:!0,type:"text",value:i,readOnly:!0})),a.a.createElement("div",{className:o.a.browserWindowMenuIcon},a.a.createElement("div",null,a.a.createElement("span",{className:o.a.bar}),a.a.createElement("span",{className:o.a.bar}),a.a.createElement("span",{className:o.a.bar})))),a.a.createElement("div",{className:o.a.browserWindowBody,style:{backgroundColor:r}},n))}},140:function(e,n,t){"use strict";var r=t(0),a=t(141);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},141:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},142:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(140),o=t(136),s=t(56),c=t.n(s),u=37,l=39;n.a=function(e){var n=e.lazy,t=e.block,s=e.defaultValue,m=e.values,f=e.groupId,d=e.className,p=Object(i.a)(),b=p.tabGroupChoices,v=p.setTabGroupChoices,g=Object(r.useState)(s),w=g[0],y=g[1],h=r.Children.toArray(e.children);if(null!=f){var O=b[f];null!=O&&O!==w&&m.some((function(e){return e.value===O}))&&y(O)}var j=function(e){y(e),null!=f&&v(f,e)},E=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},d)},m.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===n,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":w===n}),key:n,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case l:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(E,e.target,e)},onFocus:function(){return j(n)},onClick:function(){j(n)}},t)}))),n?Object(r.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}},143:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},94:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),i=(t(0),t(133)),o=(t(137),t(134),t(142),t(143),{id:"transition-animation",title:"Transitions & animations (brouillon)",sidebar_label:"Transitions & animations (brouillon)"}),s={unversionedId:"programming/css/transition-animation",id:"programming/css/transition-animation",isDocsHomePage:!1,title:"Transitions & animations (brouillon)",description:"Transition",source:"@site/docs/programming/css/transition-animation.md",slug:"/programming/css/transition-animation",permalink:"/ecal-web/docs/programming/css/transition-animation",editUrl:"https://github.com/harkle/ecal-web/docs/programming/css/transition-animation.md",version:"current",sidebar_label:"Transitions & animations (brouillon)",sidebar:"programming",previous:{title:"Transformations (brouillon)",permalink:"/ecal-web/docs/programming/css/transformations"},next:{title:"Mise en forme du code",permalink:"/ecal-web/docs/programming/miscellaneous/formating"}},c=[{value:"Transition",id:"transition",children:[]},{value:"Animation",id:"animation",children:[]}],u={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"transition"},"Transition"),Object(i.b)("p",null,"Les transition CSS perment d'animer le changement d'\xe9tat d'une propri\xe9t\xe9 CSS. Pour plus d'informations, r\xe9f\xe9rez-vous \xe0 la page suivante: ",Object(i.b)("a",{parentName:"p",href:"https://www.w3schools.com/css/css3_transitions.asp"},"https://www.w3schools.com/css/css3_transitions.asp")),Object(i.b)("h2",{id:"animation"},"Animation"),Object(i.b)("p",null,"Les animations CSS perment d'animer une propri\xe9t\xe9 CSS au moyen d'images cl\xe9s. Pour plus d'informations, r\xe9f\xe9rez-vous \xe0 la page suivante: ",Object(i.b)("a",{parentName:"p",href:"https://www.w3schools.com/css/css3_animations.asp"},"https://www.w3schools.com/css/css3_animations.asp")))}l.isMDXComponent=!0}}]);