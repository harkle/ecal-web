(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),o=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=o(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=o(n),d=r,p=b["".concat(i,".").concat(d)]||b[d]||m[d]||l;return n?a.a.createElement(p,c(c({ref:t},s),{},{components:n})):a.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<l;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},120:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return i}));var r=n(121),a=n(122);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:l=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=l();return n(e,t)}},121:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},122:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},124:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(47),i=n.n(l),c=n(120);t.a=function({children:e,minHeight:t,backgroundColor:n,url:r,src:l}){return l&&(e=a.a.createElement("iframe",{src:Object(c.a)(l),frameBorder:"0",style:{minHeight:t}})),a.a.createElement("div",{className:i.a.browserWindow},a.a.createElement("div",{className:i.a.browserWindowHeader},a.a.createElement("div",{className:i.a.buttons},a.a.createElement("span",{className:i.a.dot,style:{background:"#f25f58"}}),a.a.createElement("span",{className:i.a.dot,style:{background:"#fbbe3c"}}),a.a.createElement("span",{className:i.a.dot,style:{background:"#58cb42"}})),a.a.createElement("div",{className:i.a.browserWindowAddressBar},a.a.createElement("input",{disabled:!0,type:"text",value:r,readOnly:!0})),a.a.createElement("div",{className:i.a.browserWindowMenuIcon},a.a.createElement("div",null,a.a.createElement("span",{className:i.a.bar}),a.a.createElement("span",{className:i.a.bar}),a.a.createElement("span",{className:i.a.bar})))),a.a.createElement("div",{className:i.a.browserWindowBody,style:{backgroundColor:n}},e))}},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return m}));var r=n(2),a=n(6),l=(n(0),n(119)),i=n(120),c=n(124),u={id:"structure",title:"Structure de la page",sidebar_label:"Structure"},s={unversionedId:"programming/html/structure",id:"programming/html/structure",isDocsHomePage:!1,title:"Structure de la page",description:"Programmer une page web ne se r\xe9sume pas \xe0 placer des contenus textes et image \xe0 la suite. Il faut les regrouper au sein d'\xe9l\xe9ments HTML afin de d\xe9finir leur r\xf4le et la structure de la page. Pour cela, il faut:",source:"@site/docs/programming/html/structure.md",slug:"/programming/html/structure",permalink:"/ecal-web/docs/programming/html/structure",editUrl:"https://github.com/harkle/ecal-web/docs/programming/html/structure.md",version:"current",sidebar_label:"Structure",sidebar:"programming",previous:{title:"Balises",permalink:"/ecal-web/docs/programming/html/tags"},next:{title:"Exercice",permalink:"/ecal-web/docs/programming/html/exercice"}},o=[{value:"Exemple de structure",id:"exemple-de-structure",children:[]},{value:"Balises HTML5 ou <code>&lt;div&gt;</code>",id:"balises-html5-ou-div",children:[]}],b={rightToc:o};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Programmer une page web ne se r\xe9sume pas \xe0 placer des contenus textes et image \xe0 la suite. Il faut les regrouper au sein d'\xe9l\xe9ments HTML afin de d\xe9finir leur r\xf4le et la structure de la page. Pour cela, il faut:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"utiliser les \xe9l\xe9ments HTML ad\xe9quats;"),Object(l.b)("li",{parentName:"ul"},"imbriquer les \xe9l\xe9ments de bas niveau dans des \xe9l\xe9ments ",Object(l.b)("em",{parentName:"li"},"conteneurs")," afin de les grouper.")),Object(l.b)("p",null,"Le but est de mettre en place une structure, bas\xe9e sur la maquette graphique, qui permette ensuite de d\xe9finir le style d\u2019\xe9l\xe9ment de mani\xe8re simple."),Object(l.b)("h2",{id:"exemple-de-structure"},"Exemple de structure"),Object(l.b)("p",null,"En consid\xe9rant le croquis ci-dessous, voici la mani\xe8re dont les contenus peuvent \xeatre structur\xe9s."),Object(l.b)("br",null),Object(l.b)("img",{alt:"",src:Object(i.a)("img/programming/html/structure.png"),class:"w-75"}),Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Page web"),": il s'agit de l'\xe9l\xe9ment ",Object(l.b)("inlineCode",{parentName:"li"},"<body>"),";"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"En-t\xeate"),": la balise ",Object(l.b)("inlineCode",{parentName:"li"},"<header>")," est utilis\xe9e pour regrouper les \xe9l\xe9ments figurants dans l'en-t\xeate;"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Contenu du site"),": le contenu principal de la page peut \xeatre ins\xe9r\xe9 dans une balise ",Object(l.b)("inlineCode",{parentName:"li"},"<section>"),", ",Object(l.b)("inlineCode",{parentName:"li"},'<div id="content">')," ou plac\xe9 directement \xe0 la suite de l'en-t\xeate, sans balise enveloppante;"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Pied de page"),": la balise ",Object(l.b)("inlineCode",{parentName:"li"},"<footer>")," est utilis\xe9e pour regrouper les \xe9l\xe9ments figurants dans le pied de page;"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Menu"),": la balise ",Object(l.b)("inlineCode",{parentName:"li"},"<menu>")," permet de d\xe9limiter les \xe9l\xe9ments d'un menu;"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Articles"),": la page regroupe plusieurs rubriques. La balise ",Object(l.b)("inlineCode",{parentName:"li"},"<article>")," permet de les d\xe9finir.")),Object(l.b)("p",null,"Voici le code de cette page web et le r\xe9sultat visible dans un navigateur."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>Titre du site</title>\n</head>\n<body>\n  <header>\n    <h1>Titre du Site</h1>\n    <menu>\n      <a href="index.html">Accueil</a>\n      <a href="news.html">News</a>\n      <a href="contact.html">Contact</a>\n    </menu>\n  </header>\n  <section>\n    <article>\n      <h2>Bienvenue!</h2>\n      <p>Ceci est un site d\'exemple</p>\n    </article>\n    <article>\n      <h2>\xc0 propos</h2>\n      <p>Text explicatif</p>\n      <img src="images/placeholder-image.gif">\n    </article>\n  </section>\n  <footer>\n    <p>\xa9 ECAL 2020</p>\n  </footer>\n</body>\n</html>\n')),Object(l.b)(c.a,{minHeight:"250px",url:"index.html",mdxType:"BrowserWindow"},Object(l.b)("header",null,Object(l.b)("h1",null,"Titre du Site"),Object(l.b)("menu",null,Object(l.b)("a",{href:"index.html"},"Accueil"),"\xa0",Object(l.b)("a",{href:"news.html"},"News"),"\xa0",Object(l.b)("a",{href:"contact.html"},"Contact"),"\xa0")),Object(l.b)("section",null,Object(l.b)("article",null,Object(l.b)("h2",null,"Bienvenue!"),Object(l.b)("p",null,"Ceci est un site d'exemple")),Object(l.b)("article",null,Object(l.b)("h2",null,"\xc0 propos"),Object(l.b)("p",null,"Text explicatif"),Object(l.b)("img",{alt:"",src:Object(i.a)("img/placeholder-image.gif")}))),Object(l.b)("footer",null,Object(l.b)("p",null,"\xa9 ECAL 2020"))),Object(l.b)("br",null),Object(l.b)("p",null,"Vous remarquerez que:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"le menu a un retrait sur la gauche. Il s'agit du style par d\xe9faut de la balise ",Object(l.b)("inlineCode",{parentName:"li"},"<menu>"),";"),Object(l.b)("li",{parentName:"ul"},"le pied de page est coll\xe9 au contenu, contrairement \xe0 la maquette.")),Object(l.b)("p",null,"Ces \xe9l\xe9ments pourront \xeatre corrig\xe9s ult\xe9rieurement en utilisant des r\xe8gles CSS."),Object(l.b)("h2",{id:"balises-html5-ou-div"},"Balises HTML5 ou ",Object(l.b)("inlineCode",{parentName:"h2"},"<div>")),Object(l.b)("p",null,"Avant l'arriv\xe9e de la norme HTML5, seul la balise ",Object(l.b)("inlineCode",{parentName:"p"},"<div>")," permettant de d\xe9limiter des \xe9l\xe9ments. Aujourd'hui, il existe un grand nombre de balises qui permette de mieux caract\xe9riser le contenu. Utiliser des ",Object(l.b)("inlineCode",{parentName:"p"},"<div>")," conjointement avec des identifiants n'est pas faux, mais c'est une pratique qui devrait \xeatre \xe9vit\xe9e si une existe pour le contenu que vous cherchez \xe0 qualifier."),Object(l.b)("p",null,"Ainsi, plut\xf4t que d'\xe9crire"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<div id="header">\n  <div id="mainMenu"></div>\n</div>\n<div id="content">\n  <div class="article"></div>\n  <div class="article"></div>\n</div>\n<div id="footer">\n</div>\n')),Object(l.b)("p",null,"on pr\xe9f\xe9rera \xe9crire comme suite. Le r\xe9sultat est plus simple et respecte la notion de ",Object(l.b)("a",{href:"https://fr.wikipedia.org/wiki/HTML_s%C3%A9mantique",target:"_blank"},"HTML s\xe9mantique"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<header>\n  <menu></menu>\n</header>\n<section>\n  <article></article>\n  <article></article>\n</section>\n<footer>\n</footer>\n")))}m.isMDXComponent=!0}}]);