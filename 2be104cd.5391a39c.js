(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,p=b["".concat(i,".").concat(m)]||b[m]||u[m]||s;return n?r.a.createElement(p,o(o({ref:t},c),{},{components:n})):r.a.createElement(p,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},120:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var a=n(121),r=n(122);function s(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:s=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=s();return n(e,t)}},121:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){const e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},122:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},123:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},124:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(47),i=n.n(s),o=n(120);t.a=function({children:e,minHeight:t,backgroundColor:n,url:a,src:s}){return s&&(e=r.a.createElement("iframe",{src:Object(o.a)(s),frameBorder:"0",style:{minHeight:t}})),r.a.createElement("div",{className:i.a.browserWindow},r.a.createElement("div",{className:i.a.browserWindowHeader},r.a.createElement("div",{className:i.a.buttons},r.a.createElement("span",{className:i.a.dot,style:{background:"#f25f58"}}),r.a.createElement("span",{className:i.a.dot,style:{background:"#fbbe3c"}}),r.a.createElement("span",{className:i.a.dot,style:{background:"#58cb42"}})),r.a.createElement("div",{className:i.a.browserWindowAddressBar},r.a.createElement("input",{disabled:!0,type:"text",value:a,readOnly:!0})),r.a.createElement("div",{className:i.a.browserWindowMenuIcon},r.a.createElement("div",null,r.a.createElement("span",{className:i.a.bar}),r.a.createElement("span",{className:i.a.bar}),r.a.createElement("span",{className:i.a.bar})))),r.a.createElement("div",{className:i.a.browserWindowBody,style:{backgroundColor:n}},e))}},125:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},126:function(e,t,n){"use strict";var a=n(0),r=n(125);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},127:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(126),i=n(123),o=n(48),l=n.n(o);const c=37,d=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:b,groupId:u}=e,{tabGroupChoices:m,setTabGroupChoices:p}=Object(s.a)(),[g,h]=Object(a.useState)(o),[f,v]=Object(a.useState)(!1);if(null!=u){const e=m[u];null!=e&&e!==g&&b.some(t=>t.value===e)&&h(e)}const O=e=>{h(e),null!=u&&p(u,e)},j=[],x=e=>{e.metaKey||e.altKey||e.ctrlKey||v(!0)},y=()=>{v(!1)};return Object(a.useEffect)(()=>{window.addEventListener("keydown",x),window.addEventListener("mousedown",y)},[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===e}),style:f?{}:{outline:"none"},key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case d:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),x(e)},onFocus:()=>O(e),onClick:()=>{O(e),v(!1)},onPointerDown:()=>v(!1)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===g)[0]))}},128:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),s=(n(0),n(119)),i=n(124),o=n(120),l=n(127),c=n(128),d={id:"box-model",title:"Mod\xe8le de bo\xeete",sidebar_label:"Mod\xe8le de bo\xeete"},b={unversionedId:"programming/css/box-model",id:"programming/css/box-model",isDocsHomePage:!1,title:"Mod\xe8le de bo\xeete",description:"Le mod\xe8le de bo\xeete d\xe9signe la mani\xe8re dont le navigateur g\xe8re l'affichage des blocs de contenu (\xe9l\xe9ments affich\xe9s en `display",source:"@site/docs/programming/css/box-model.md",slug:"/programming/css/box-model",permalink:"/ecal-web/docs/programming/css/box-model",editUrl:"https://github.com/harkle/ecal-web/docs/programming/css/box-model.md",version:"current",sidebar_label:"Mod\xe8le de bo\xeete",sidebar:"programming",previous:{title:"Flux du contenu",permalink:"/ecal-web/docs/programming/css/flow"},next:{title:"Image de fond",permalink:"/ecal-web/docs/programming/css/background-images"}},u=[{value:"Marges ext\xe9rieures",id:"marges-ext\xe9rieures",children:[]},{value:"Bordures",id:"bordures",children:[]},{value:"Marges int\xe9rieures",id:"marges-int\xe9rieures",children:[]},{value:"Dimensions",id:"dimensions",children:[{value:"box-sizing",id:"box-sizing",children:[]}]}],m={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Le ",Object(s.b)("em",{parentName:"p"},"mod\xe8le de bo\xeete")," d\xe9signe la mani\xe8re dont le navigateur g\xe8re l'affichage des blocs de contenu (\xe9l\xe9ments affich\xe9s en ",Object(s.b)("inlineCode",{parentName:"p"},"display:block"),"). Il permet de d\xe9finir:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"les marges ext\xe9rieures (utilis\xe9es pour espacer les \xe9l\xe9ments entre eux);"),Object(s.b)("li",{parentName:"ul"},"la bordure qui entour l'\xe9l\xe9ment;"),Object(s.b)("li",{parentName:"ul"},"les marges int\xe9rieures (utilis\xe9es pour espacer le contenu du bord du bloc);"),Object(s.b)("li",{parentName:"ul"},"les dimensions du contenu.")),Object(s.b)("br",null),Object(s.b)("img",{alt:"",src:Object(o.a)("img/programming/css/box-model.svg"),class:"w-75"}),Object(s.b)("br",null),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Les propri\xe9t\xe9s ",Object(s.b)("inlineCode",{parentName:"p"},"margin"),", ",Object(s.b)("inlineCode",{parentName:"p"},"border")," et ",Object(s.b)("inlineCode",{parentName:"p"},"padding")," peuvent \xeatre d\xe9finie ",Object(s.b)("strong",{parentName:"p"},"de mani\xe8re globale")," pour les quatre c\xf4t\xe9s de la bo\xeete ",Object(s.b)("strong",{parentName:"p"},"ou s\xe9par\xe9ment pour chaque c\xf4t\xe9")," (haut, droite, bas, gauche)."))),Object(s.b)("h2",{id:"marges-ext\xe9rieures"},"Marges ext\xe9rieures"),Object(s.b)("p",null,"Les marges ext\xe9rieures permettent d'espacer des blocs entre eux. Par d\xe9faut, certains \xe9l\xe9ments HTML comme les paragraphes ou les titres ont des marges verticales pr\xe9d\xe9finies. Vous pouvez modifier ces valeurs en cr\xe9ant une r\xe8gle CSS ad\xe9quate."),Object(s.b)("p",null,"Attention, les marges de deux \xe9l\xe9ments cons\xe9cutifs, verticalement ou horizontalement, se superposent. Dans le cas d'\xe9l\xe9ments qui ont des marges pr\xe9d\xe9finies, assurez-vous d'avoir d\xe9fini les espacements de tous les \xe9l\xe9ments."),Object(s.b)(l.a,{defaultValue:"css",values:[{label:"CSS",value:"css"},{label:"HTML",value:"html"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"css",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".m-0 {\n  margin: 0;\n}\n\n.m-25 {\n  margin: 25px;\n}\n\n.mx-25 {\n  margin-right: 25px;\n  margin-left: 25px;\n}\n\n.ml-25 {\n  margin-left: 25px;\n}\n"))),Object(s.b)(c.a,{value:"html",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<h3>Blocs</h3>\n<div>Bloc 1<br>(sans marges)</div>\n<div class="m-25">Bloc 2<br>(avec marges identiques)</div>\n<div class="mx-25">Bloc 3<br>(avec marges horizontales)</div>\n<div class="ml-25">Bloc 3<br>(avec marge \xe0 gauche)</div>\n\n<h3>Paragraphe par d\xe9faut</h3>\n<p>Paragraphes 1</p>\n<p>Paragraphes 2</p>\n<p>Paragraphes 3</p>\n\n<h3>Paragraphe sans marges</h3>\n<p class="m-0">Paragraphes 1</p>\n<p class="m-0">Paragraphes 2</p>\n<p class="m-0">Paragraphes 3</p>\n')))),Object(s.b)(i.a,{minHeight:"525px",url:"index.html",src:"/examples/css/margin.html",mdxType:"BrowserWindow"}),Object(s.b)("h2",{id:"bordures"},"Bordures"),Object(s.b)("p",null,"Le param\xe8tre ``border``` permet de d\xe9finir le style de la bordure qui entour le bloc. Il est compos\xe9 de trois valeurs:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"l'\xe9paisseur de la bordure;"),Object(s.b)("li",{parentName:"ul"},"son style (solide, traitill\xe9, pointill\xe9);"),Object(s.b)("li",{parentName:"ul"},"sa couleur.")),Object(s.b)(l.a,{defaultValue:"css",values:[{label:"CSS",value:"css"},{label:"HTML",value:"html"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"css",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".b-red {\n  border: 1px solid red;\n}\n\n.b-fat-red {\n  border: 5px solid red;\n}\n\n.b-dot-red {\n  border: 1px dotted red;\n}\n\n.bb-red {\n  border-bottom: 1px solid red;\n}\n"))),Object(s.b)(c.a,{value:"html",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<p class="b-red">Bordure rouge</p>\n<p class="b-fat-red">Bordure \xe9paisse</p>\n<p class="b-dot-red">Bordure pointill\xe9e</p>\n<p class="bb-red">Bordure en bas uniquement</p>\n')))),Object(s.b)(i.a,{minHeight:"575px",url:"index.html",src:"/examples/css/border.html",mdxType:"BrowserWindow"}),Object(s.b)("h2",{id:"marges-int\xe9rieures"},"Marges int\xe9rieures"),Object(s.b)("p",null,"Les marges int\xe9rieures d\xe9finissent l'espacement entre la bordure et le contenu."),Object(s.b)(l.a,{defaultValue:"css",values:[{label:"CSS",value:"css"},{label:"HTML",value:"html"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"css",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".b-red {\n  border: 1px solid red;\n}\n\n.p-25 {\n  margin: 25px;\n}\n\n.px-25 {\n  margin-right: 25px;\n  margin-left: 25px;\n}\n\n.pl-25 {\n  margin-left: 25px;\n}\n"))),Object(s.b)(c.a,{value:"html",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"<div class=\"b-red\">Good evening, I'm Doctor Emmett Brown. I'm standing on the parking lot of Twin Pines Mall. It's Saturday morning, October 26, 1985, 1:18 a.m. and this is temporal experiment number one. C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get down, that's it. Watch it, Goldie. What kind of date? I don't know, what do kids do in the fifties? Look, George, I'm telling you George, if you do not ask Lorraine to that dance, I'm gonna regret it for the rest of my life. Just turn around, McFly, and walk away. Are you deaf, McFly? Close the door and beat it.</div>\n<div class=\"p-25 b-red\">Alright, take it up, go. Doc. Look me up when you get there, guess I'll be about 47. My name's Lorraine, Lorraine Baines. He's absolutely right, Marty. the last thing you need is headaches. Ah, where're my pants?</div>\n<div class=\"px-25 b-red\">C'mon, open up, let me out of here, Yo. Oh, what I meant to day was- Time machine, I haven't invented any time machine. Evening, Doctor Brown, what's with the wire? That's a big bruise you have there.</div>\n<div class=\"pl-25 b-red\">You got a real attitude problem, McFly. You're a slacker. You remind me of you father when he went her, he was a slacker too. We never would have fallen in love. C'mon, open up, let me out of here, Yo. Thank you. In about thirty years. I'm sure that in 1985, plutonium is available at every corner drug store, but in 1955, it's a little hard to come by. Marty, I'm sorry, but I'm afraid you're stuck here.</div>\n")))),Object(s.b)(i.a,{minHeight:"350px",url:"index.html",src:"/examples/css/padding.html",mdxType:"BrowserWindow"}),Object(s.b)("h2",{id:"dimensions"},"Dimensions"),Object(s.b)("p",null,"Les dimensions du contenu du bloc peuvent \xeatre d\xe9finies gr\xe2ce aux attributs ",Object(s.b)("inlineCode",{parentName:"p"},"width")," et ",Object(s.b)("inlineCode",{parentName:"p"},"height"),". Par d\xe9faut, la largeur d'un bloc est toujours de ",Object(s.b)("inlineCode",{parentName:"p"},"100%")," et sa hauteur automatiquement d\xe9finie en fonction de son contenu."),Object(s.b)("div",{className:"admonition admonition-important alert alert--info"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Sauf dans le cas d'\xe9l\xe9ments dont la hauteur est pr\xe9cis\xe9ment d\xe9finie dans la maquette, on laissera g\xe9n\xe9ralement le param\xe8tre ",Object(s.b)("inlineCode",{parentName:"p"},"height")," au mode automatique afin d'\xe9viter les d\xe9bordements de contenu."))),Object(s.b)(l.a,{defaultValue:"css",values:[{label:"CSS",value:"css"},{label:"HTML",value:"html"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"css",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),".b-red {\n  border: 1px solid red;\n}\n\n.w-50 {\n  width: 50%;\n}\n\n.w-50px {\n  width: 50px;\n}\n\n.h-50px {\n  height: 50px;\n}\n"))),Object(s.b)(c.a,{value:"html",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<div class="b-red">Bloc par d\xe9faut</div>\n<div class="w-50 b-red">Bloc \xe0 50% de largeur</div>\n<div class="w-50px b-red">Bloc \xe0 50 pixels de largeur</div>\n<div class="h-50px b-red">Bloc \xe0 50 pixels de hauteur</div>\n<div class="w-50px h-50px b-red">Bloc \xe0 50 pixels de largeur et de hauteur</div>\n')))),Object(s.b)(i.a,{minHeight:"350px",url:"index.html",src:"/examples/css/dimensions.html",mdxType:"BrowserWindow"}),Object(s.b)("h3",{id:"box-sizing"},"box-sizing"),Object(s.b)("p",null,"Par d\xe9faut, les param\xe8tres de largeur et de hauteur d\xe9finissent les dimensions ",Object(s.b)("strong",{parentName:"p"},"du contenu")," d'un bloc et non pas de son pourtour. Les marges int\xe9rieures et les bordures vont venir s'ajouter \xe0 la valeur d\xe9finie. Cela peut causer des probl\xe8mes de mise en page, par exemple dans le cas d'un \xe9l\xe9ment dont la largeur est d\xe9finie \xe0 100%."),Object(s.b)("p",null,"Le probl\xe8me est mis en \xe9vidence dans l'exemple ci-dessous:"),Object(s.b)(i.a,{minHeight:"350px",url:"index.html",mdxType:"BrowserWindow"},Object(s.b)("p",{style:{border:"1px solid red",width:"100%",boxSizing:"content-box"}},"box-sizing: content-box (valeur par d\xe9faut)",Object(s.b)("br",null),"width: 100%",Object(s.b)("br",null),"padding: 0;"),Object(s.b)("p",{style:{border:"1px solid red",width:"100%",padding:"25px",boxSizing:"content-box"}},"box-sizing: content-box (valeur par d\xe9faut)",Object(s.b)("br",null),"width: 100%",Object(s.b)("br",null),"padding: 25px;"),Object(s.b)("p",{style:{border:"1px solid red",width:"100%",padding:"25px"}},"box-sizing: border-box (valeur par d\xe9faut)",Object(s.b)("br",null),"width: 100%",Object(s.b)("br",null),"padding: 25px;")),Object(s.b)("p",null,"Afin de pallier \xe0 cette situation et pour simplifier la gestion de la dimension des blocs, il est recommand\xe9 de modifier le comportement par d\xe9faut de tous les blocs de votre site afin que les param\xe8tres ",Object(s.b)("inlineCode",{parentName:"p"},"width")," et ",Object(s.b)("inlineCode",{parentName:"p"},"height")," incluent les bordures et les marges int\xe9rieures. Pour ce faire, il faut ajouter la r\xe8gle suivante dans votre fichier CSS (si possible au tout d\xe9but du fichier)."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-css"}),"* {\n  box-sizing: border-box;\n}\n")))}p.isMDXComponent=!0}}]);