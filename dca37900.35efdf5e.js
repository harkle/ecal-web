/*! For license information please see dca37900.35efdf5e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{185:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(1),r=t(9),i=(t(0),t(197)),o=t(204),c=(t(198),t(207),t(206),{id:"background-images",title:"Image de fond",sidebar_label:"Image de fond"}),l={id:"programming/css/background-images",title:"Image de fond",description:"import BrowserWindow from '@site/src/components/BrowserWindow';",source:"@site/docs/programming/css/background-image.md",permalink:"/ecal-web/docs/programming/css/background-images",sidebar_label:"Image de fond",sidebar:"programming",previous:{title:"Mod\xe8le de bo\xeete",permalink:"/ecal-web/docs/programming/css/box-model"},next:{title:"Positionnement",permalink:"/ecal-web/docs/programming/css/positioning"}},s=[{value:"Syntaxe de base",id:"syntaxe-de-base",children:[{value:"R\xe9p\xe9tition",id:"r\xe9p\xe9tition",children:[]},{value:"Placement",id:"placement",children:[]}]},{value:"Dimensionnement",id:"dimensionnement",children:[{value:"Cover",id:"cover",children:[]},{value:"Contain",id:"contain",children:[]}]}],u={rightToc:s};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Outre la balise ",Object(i.b)("inlineCode",{parentName:"p"},"<img>"),", vous avez la possibilit\xe9 d'ins\xe9rer dans le fond d'un bloc. Cette technique diminue la qualit\xe9 du r\xe9f\xe9rencement par rapport aux images, mais offre plus de flexibilit\xe9 quant \xe0 la mise en forme et au redimensionnement des images."),Object(i.b)("h2",{id:"syntaxe-de-base"},"Syntaxe de base"),Object(i.b)("p",null,"N'importe quel \xe9l\xe9ment affich\xe9 en ",Object(i.b)("inlineCode",{parentName:"p"},"display: block;")," peut contenir une image de fond. Celle-ci s'affichera toujours derri\xe8re le contenu du bloc."),Object(i.b)("p",null,"Voici la syntaxe de base pour afficher une image en fond. La mention ",Object(i.b)("inlineCode",{parentName:"p"},"height: 100px")," et la bordure ne sont pas n\xe9cessaires, elles figurent dans l'exemple pour mieux visualiser le r\xe9sultat."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".funny-background {\n  height: 100px;\n  border: 1px solid red;\n  background-image: url('img/placeholder-image.gif');\n}\n")),Object(i.b)(o.a,{minHeight:"100px",url:"index.html",src:"/examples/css/background-image-1.html",mdxType:"BrowserWindow"}),Object(i.b)("h3",{id:"r\xe9p\xe9tition"},"R\xe9p\xe9tition"),Object(i.b)("p",null,"Par d\xe9faut et selon sa taille de base, l'image est r\xe9p\xe9t\xe9e horizontalement et verticalement pour remplir tout le bloc. Vous pouvez modifier ce comportement en utilisant la propri\xe9t\xe9 ",Object(i.b)("inlineCode",{parentName:"p"},"background-repeat")," et les valeurs suivantes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"repeat")," ",Object(i.b)("em",{parentName:"li"},"(par d\xe9faut)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"repeat-x")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"repeat-y")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"no-repeat"))),Object(i.b)("p",null,"Dans l'exemple ci-dessous, la r\xe9p\xe9tition est annul\xe9e."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".funny-background {\n  height: 100px;\n  border: 1px solid red;\n  background-image: url('img/placeholder-image.gif');\n  background-repeat: no-repeat;\n}\n")),Object(i.b)(o.a,{minHeight:"100px",url:"index.html",src:"/examples/css/background-image-2.html",mdxType:"BrowserWindow"}),Object(i.b)("h3",{id:"placement"},"Placement"),Object(i.b)("p",null,"Par d\xe9faut, l'image est align\xe9e en haut \xe0 gauche du bloc. Vous pouvez modifier ce comportement gr\xe2ce \xe0 la propri\xe9t\xe9 ",Object(i.b)("inlineCode",{parentName:"p"},"background-position")," et les valeurs suivantes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"des valeurs en pixels"),Object(i.b)("li",{parentName:"ul"},"des valeurs en pourcent"),Object(i.b)("li",{parentName:"ul"},"les mots cl\xe9s ",Object(i.b)("inlineCode",{parentName:"li"},"top"),", ",Object(i.b)("inlineCode",{parentName:"li"},"bottom"),", ",Object(i.b)("inlineCode",{parentName:"li"},"left"),", ",Object(i.b)("inlineCode",{parentName:"li"},"right"),", ",Object(i.b)("inlineCode",{parentName:"li"},"center"))),Object(i.b)("p",null,"Si vous pr\xe9cisez deux valeurs, la premi\xe8re indique le placement horizontal et la seconde le placement vertical."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".funny-background {\n  height: 100px;\n  border: 1px solid red;\n  background-image: url('img/placeholder-image.gif');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n")),Object(i.b)(o.a,{minHeight:"100px",url:"index.html",src:"/examples/css/background-image-3.html",mdxType:"BrowserWindow"}),Object(i.b)("h2",{id:"dimensionnement"},"Dimensionnement"),Object(i.b)("p",null,"La propri\xe9t\xe9 ",Object(i.b)("inlineCode",{parentName:"p"},"background-size")," permet de modifier la taille de l'image via les valeurs suivantes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"des valeurs en pixels"),Object(i.b)("li",{parentName:"ul"},"des valeurs en pourcent"),Object(i.b)("li",{parentName:"ul"},"les mots cl\xe9s ",Object(i.b)("inlineCode",{parentName:"li"},"cover")," ou ",Object(i.b)("inlineCode",{parentName:"li"},"contain"))),Object(i.b)("p",null,"On n'utilise rarement des valeurs fixes en pixel ou en pour cent, car cela n'offre que peu de flexibilit\xe9 dans le redimensionnement, surtout quand on parle de responsive design."),Object(i.b)("h3",{id:"cover"},"Cover"),Object(i.b)("p",null,"Le mode ",Object(i.b)("inlineCode",{parentName:"p"},"background-size: cover;")," d\xe9finis que l'image couvre toujours l'ensemble du bloc, peu importe la diff\xe9rence de taille."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Le redimensionnement est g\xe9r\xe9 automatiquement par le navigateur web. Si la taille du bloc est flexible, vous ne ma\xeetrisez plus le cadrage de votre image. Il faut dont privil\xe9gier des sujets centr\xe9s avec de l'espace autour."))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".funny-background {\n  height: 100px;\n  border: 1px solid red;\n  background-image: url('img/placeholder-image.gif');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover\n}\n")),Object(i.b)(o.a,{minHeight:"650px",url:"index.html",src:"/examples/css/background-image-4.html",mdxType:"BrowserWindow"}),Object(i.b)("h3",{id:"contain"},"Contain"),Object(i.b)("p",null,"Le mode ",Object(i.b)("inlineCode",{parentName:"p"},"background-size: contain;")," d\xe9finis que l'image est toujours affich\xe9e en entier dans le bloc, peu importe la diff\xe9rence de taille. Un espace vide entoure l'image, selon le format."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".funny-background {\n  height: 100px;\n  background-image: url('img/placeholder-image.gif');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n")),Object(i.b)(o.a,{minHeight:"650px",url:"index.html",src:"/examples/css/background-image-5.html",mdxType:"BrowserWindow"}))}b.isMDXComponent=!0},197:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(t),p=a,m=b["".concat(o,".").concat(p)]||b[p]||d[p]||i;return t?r.a.createElement(m,c({ref:n},s,{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},198:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));t(200);var a=t(199);function r(e){var n=(Object(a.a)().siteConfig||{}).baseUrl,t=void 0===n?"/":n;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?t+e.slice(1):t+e}},199:function(e,n,t){"use strict";var a=t(0),r=t(52);n.a=function(){return Object(a.useContext)(r.a)}},200:function(e,n,t){"use strict";var a=t(12),r=t(24),i=t(201),o="".startsWith;a(a.P+a.F*t(202)("startsWith"),"String",{startsWith:function(e){var n=i(this,e,"startsWith"),t=r(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),a=String(e);return o?o.call(n,a,t):n.slice(t,t+a.length)===a}})},201:function(e,n,t){var a=t(75),r=t(25);e.exports=function(e,n,t){if(a(n))throw TypeError("String#"+t+" doesn't accept regex!");return String(r(e))}},202:function(e,n,t){var a=t(2)("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[a]=!1,!"/./"[e](n)}catch(r){}}return!0}},203:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var c in a)t.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(n,[]))||(e.exports=a)}()},204:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(131),o=t.n(i),c=t(198);n.a=function({children:e,minHeight:n,backgroundColor:t,url:a,src:i}){return i&&(e=r.a.createElement("iframe",{src:Object(c.a)(i),frameBorder:"0",style:{minHeight:n}})),r.a.createElement("div",{className:o.a.browserWindow},r.a.createElement("div",{className:o.a.browserWindowHeader},r.a.createElement("div",{className:o.a.buttons},r.a.createElement("span",{className:o.a.dot,style:{background:"#f25f58"}}),r.a.createElement("span",{className:o.a.dot,style:{background:"#fbbe3c"}}),r.a.createElement("span",{className:o.a.dot,style:{background:"#58cb42"}})),r.a.createElement("div",{className:o.a.browserWindowAddressBar},r.a.createElement("input",{disabled:!0,type:"text",value:a,readOnly:!0})),r.a.createElement("div",{className:o.a.browserWindowMenuIcon},r.a.createElement("div",null,r.a.createElement("span",{className:o.a.bar}),r.a.createElement("span",{className:o.a.bar}),r.a.createElement("span",{className:o.a.bar})))),r.a.createElement("div",{className:o.a.browserWindowBody,style:{backgroundColor:t}},e))}},205:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});n.a=r},206:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){return r.a.createElement("div",null,e.children)}},207:function(e,n,t){"use strict";t(26),t(19),t(20);var a=t(0),r=t.n(a),i=t(205);var o=function(){return Object(a.useContext)(i.a)},c=t(203),l=t.n(c),s=t(132),u=t.n(s),b=37,d=39;n.a=function(e){var n=e.block,t=e.children,i=e.defaultValue,c=e.values,s=e.groupId,p=o(),m=p.tabGroupChoices,g=p.setTabGroupChoices,f=Object(a.useState)(i),v=f[0],O=f[1];if(null!=s){var j=m[s];null!=j&&j!==v&&O(j)}var h=function(e){O(e),null!=s&&g(s,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":n})},c.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===n,className:l()("tab-item",u.a.tabItem,{"tab-item--active":v===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:function(e){return function(e,n,t){switch(t.keyCode){case d:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case b:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(x,e.target,e)},onFocus:function(){return h(n)},onClick:function(){return h(n)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(t).filter((function(e){return e.props.value===v}))[0]))}}}]);