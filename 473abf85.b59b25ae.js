(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{133:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(r),p=n,m=b["".concat(o,".").concat(p)]||b[p]||d[p]||i;return r?a.a.createElement(m,u(u({ref:t},s),{},{components:r})):a.a.createElement(m,u({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},134:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return o}));var n=r(22),a=r(135);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,u=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(u)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},135:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(133)),o=r(134),u={id:"how-to-work",title:"M\xe9thode de travail",sidebar_label:"M\xe9thode"},c={unversionedId:"programming/basics/how-to-work",id:"programming/basics/how-to-work",isDocsHomePage:!1,title:"M\xe9thode de travail",description:"Travailler sur un projet web n\xe9cessite une m\xe9thodologie particuli\xe8re. Contrairement aux logiciels classiques de CAO, le r\xe9sultat n\u2019est pas visible en temps r\xe9el: vous \xe9crivez du code dans un \xe9diteur de texte qui ne vous montre aucun aper\xe7u. Pour visualiser votre page, vous devez l\u2019ouvrir dans un navigateur.",source:"@site/docs/programming/basics/how-to-work.md",slug:"/programming/basics/how-to-work",permalink:"/ecal-web/docs/programming/basics/how-to-work",editUrl:"https://github.com/harkle/ecal-web/docs/programming/basics/how-to-work.md",version:"current",sidebar_label:"M\xe9thode",sidebar:"programming",previous:{title:"Organisation d\u2019un site",permalink:"/ecal-web/docs/programming/basics/organisation"},next:{title:"Exercice",permalink:"/ecal-web/docs/programming/basics/exercice"}},s=[],l={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Travailler sur un projet web n\xe9cessite une m\xe9thodologie particuli\xe8re. Contrairement aux logiciels classiques de CAO, le r\xe9sultat n\u2019est pas visible en temps r\xe9el: vous \xe9crivez du code dans un \xe9diteur de texte qui ne vous montre aucun aper\xe7u. Pour visualiser votre page, vous devez l\u2019ouvrir dans un navigateur."),Object(i.b)("p",null,"Vous aurez donc toujours besoin d\u2019ouvrir ces deux logiciels quand vous cr\xe9ez votre site."),Object(i.b)("p",null,"La d\xe9marche est la suivante:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Lancez l\u2019\xe9diteur de texte \xe0 la racine de votre projet. S\u2019il dispose d\u2019un gestionnaire de fichiers, tous les documents du site s\u2019afficheront;"),Object(i.b)("li",{parentName:"ol"},"Dans l\u2019\xe9diteur, ouvrez la page sur laquelle vous voulez travailler;"),Object(i.b)("li",{parentName:"ol"},"Lancez un navigateur web;"),Object(i.b)("li",{parentName:"ol"},"Dans le navigateur, ouvrez la page en question.")),Object(i.b)("img",{alt:"",src:Object(o.a)("img/programming/basics/method-1.png")}),Object(i.b)("p",null,"Lorsque vous faites des modifications dans le code du site, vous devez les enregistrer pour qu\u2019elles soient visibles dans le navigateur web. Le navigateur lui-m\xeame ne tient pas automatiquement compte de vos modifications, vous devrez encore lui demander de rafra\xeechir la page."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Attention, si vous avez modifi\xe9 plusieurs fichiers (page HTML, feuille de style CSS, fichier JavaScript), il est important de ",Object(i.b)("strong",{parentName:"p"},"tous les sauvegarder")," avant de passer sur votre navigateur web."))),Object(i.b)("p",null,"La d\xe9marche est la suivante:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Enregistrer les modifications dans l\u2019\xe9diteur de texte. ",Object(i.b)("em",{parentName:"li"},"Raccourci: ",Object(i.b)("kbd",null,"CTRL")," + ",Object(i.b)("kbd",null,"S")," ou ",Object(i.b)("kbd",null,"\u2318")," + ",Object(i.b)("kbd",null,"S"))),Object(i.b)("li",{parentName:"ul"},"Basculer sur votre navigateur web. ",Object(i.b)("em",{parentName:"li"},"Raccourci: ",Object(i.b)("kbd",null,"ALT")," + ",Object(i.b)("kbd",null,"TAB")," ou ",Object(i.b)("kbd",null,"\u2318")," + ",Object(i.b)("kbd",null,"TAB"))),Object(i.b)("li",{parentName:"ul"},"Rafra\xeechir la page. ",Object(i.b)("em",{parentName:"li"},"Raccourci: ",Object(i.b)("kbd",null,"CTRL")," + ",Object(i.b)("kbd",null,"R")," ou ",Object(i.b)("kbd",null,"\u2318")," + ",Object(i.b)("kbd",null,"R")))),Object(i.b)("img",{alt:"",src:Object(o.a)("img/programming/basics/method-2.gif")}))}b.isMDXComponent=!0}}]);