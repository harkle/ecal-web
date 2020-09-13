(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=b(a),u=r,d=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return a?n.a.createElement(d,o(o({ref:t},s),{},{components:a})):n.a.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},120:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l}));var r=a(121),n=a(122);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const l=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+l:l}(t,e,a,r)}}function l(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},121:function(e,t,a){"use strict";var r=a(0),n=a(20);t.a=function(){const e=Object(r.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},122:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return m}));var r=a(2),n=a(6),i=(a(0),a(119)),l=a(120),o={id:"images",title:"Pr\xe9paration des images",sidebar_label:"Images"},c={unversionedId:"programming/miscellaneous/images",id:"programming/miscellaneous/images",isDocsHomePage:!1,title:"Pr\xe9paration des images",description:"Formats de fichiers",source:"@site/docs/programming/miscellaneous/images.md",slug:"/programming/miscellaneous/images",permalink:"/ecal-web/docs/programming/miscellaneous/images",editUrl:"https://github.com/harkle/ecal-web/docs/programming/miscellaneous/images.md",version:"current",sidebar_label:"Images",sidebar:"programming",previous:{title:"Mise en forme du code",permalink:"/ecal-web/docs/programming/miscellaneous/formating"},next:{title:"Mise en ligne",permalink:"/ecal-web/docs/programming/miscellaneous/publish"}},s=[{value:"Formats de fichiers",id:"formats-de-fichiers",children:[{value:"JPEG",id:"jpeg",children:[]},{value:"PNG",id:"png",children:[]},{value:"GIF",id:"gif",children:[]},{value:"SVG",id:"svg",children:[]}]},{value:"\xc0 quelle taille cr\xe9er vos images",id:"\xe0-quelle-taille-cr\xe9er-vos-images",children:[{value:"Images \xe0 taille fixe",id:"images-\xe0-taille-fixe",children:[]},{value:"Images fluides",id:"images-fluides",children:[]},{value:"Le poids id\xe9al",id:"le-poids-id\xe9al",children:[]},{value:"Exportation depuis Adobe Photoshop",id:"exportation-depuis-adobe-photoshop",children:[]}]}],b={rightToc:s};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"formats-de-fichiers"},"Formats de fichiers"),Object(i.b)("p",null,"Les navigateurs web prennent en charge un nombre limit\xe9 de formats de fichier quand il s'agit d'afficher des images. Voici les principaux formats et leur usage."),Object(i.b)("h3",{id:"jpeg"},"JPEG"),Object(i.b)("p",null,"Le ",Object(i.b)("em",{parentName:"p"},"JPEG")," est un format destructif qui permet de r\xe9duire fortement la taille d'un fichier. Plus le taux de compression est \xe9lev\xe9, plus le poids du fichier est petit, mais plus d'images pr\xe9senteront des artefacts."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Le format JPEG est id\xe9al pour l'affichage de photographies.")),Object(i.b)("img",{alt:"",src:Object(l.a)("img/programming/miscellaneous/image-jpg.jpg"),class:"w-100"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"\xc0 gauche, l'image originale qui p\xe8se 22Mo. \xc0 droite, la version compress\xe9e ne p\xe8se que 275Ko, soit environ cent fois moins.")),Object(i.b)("h3",{id:"png"},"PNG"),Object(i.b)("p",null,"Le ",Object(i.b)("em",{parentName:"p"},"PNG")," est un format non destructif qui compresse les images de fa\xe7on moins efficace que le JPG, mais garde leur qualit\xe9. Il permet en outre d'utiliser un canal de transparence de 8 bits."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Le format PNG est id\xe9al pour l'affichage d'images monochromes, d'illustrations non vectorielles ou si l'on a besoin de transparence.")),Object(i.b)("img",{alt:"",src:Object(l.a)("img/programming/miscellaneous/image-png.png"),class:"w-100"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Les fichiers PNG supportent la transparence progressive.")),Object(i.b)("h3",{id:"gif"},"GIF"),Object(i.b)("p",null,"Le ",Object(i.b)("em",{parentName:"p"},"GIF")," est un ancien format utilis\xe9 pour animer des images. Il est \xe0 \xe9viter, car:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"la palette de couleur est limit\xe9e \xe0 256 nuances;"),Object(i.b)("li",{parentName:"ul"},"il n'est pas compress\xe9 et peut vite devenir tr\xe8s lourd.")),Object(i.b)("img",{alt:"",src:Object(l.a)("img/placeholder-image.gif")}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Dans l'animation ci-dessus, on remarque tr\xe8s bien la palette de couleur limit\xe9e, notamment dans les arri\xe8re-plans")),Object(i.b)("p",null,"Pour cr\xe9er des animations, il faut privil\xe9gier les animations CSS, le ",Object(i.b)("inlineCode",{parentName:"p"},"<canvas>"),", le format APNG (animated PNG) ou des fichiers vid\xe9o."),Object(i.b)("h3",{id:"svg"},"SVG"),Object(i.b)("p",null,"Le ",Object(i.b)("em",{parentName:"p"},"SVG")," est un format vectoriel. Contrairement aux formats d\xe9crits pr\xe9c\xe9demment, il ne travaille pas \xe0 base de pixels me de points et de trac\xe9s. Une image ",Object(i.b)("em",{parentName:"p"},"SVG")," peut \xeatre r\xe9duite ou agrandie sans perte de qualit\xe9 et sans effet d'escalier."),Object(i.b)("img",{alt:"",src:Object(l.a)("img/programming/miscellaneous/image-svg.png"),class:"w-100"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"La ligne du haut montre l'agrandissement d'une image au format PNG. Un effet d'escalier se forme sur le pourtour du cercle. La ligne du bas montre le m\xeame cercle au format SVG.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Le format SVG est id\xe9al pour toute image vectorielle type logo, ic\xf4ne, etc.")),Object(i.b)("h2",{id:"\xe0-quelle-taille-cr\xe9er-vos-images"},"\xc0 quelle taille cr\xe9er vos images"),Object(i.b)("p",null,"Seule la taille de pixel est importante. Les DPI et la largeur en centim\xe8tre ou toute autre unit\xe9 n'ont ",Object(i.b)("strong",{parentName:"p"},"aucune importance"),". Une image mesurant 100 pixels de large sera affich\xe9e \xe0 100 pixels de large dans votre navigateur (peu importe que vous le mettiez \xe0 72, 144 ou 288 DPI.)."),Object(i.b)("p",null,"D\xe9finir la taille d'une image est une t\xe2che complexe qui d\xe9pend de nombreux param\xe8tres. Votre maquette graphique doit vous servir de guide."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Cet article ",Object(i.b)("strong",{parentName:"p"},"n'aborde pas")," la notion d'image Retina."))),Object(i.b)("h3",{id:"images-\xe0-taille-fixe"},"Images \xe0 taille fixe"),Object(i.b)("p",null,"Si votre image est affich\xe9e \xe0 une taille fixe dans votre maquette, il vous suffit de regarder les valeurs de largeur et de hauteur en pixel dans votre maquette graphique et pr\xe9parez votre fichier cons\xe9quence."),Object(i.b)("h3",{id:"images-fluides"},"Images fluides"),Object(i.b)("p",null,"Si la taille de votre image est variable en fonction de son conteneur, il faut estimer la largeur maximale de celle-ci."),Object(i.b)("img",{alt:"",src:Object(l.a)("img/programming/miscellaneous/image-size.svg"),class:"w-75"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Fen\xeatre du navigateur"),": taille d\xe9finie par l'utilisateur. On consid\xe8re en g\xe9n\xe9ral que 2560 pixels est la largeur maximale d'un \xe9cran;"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Largeur du site"),": 100% de la fen\xeatre, limit\xe9e \xe0 1400 pixels de large (responsive design);"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Colonne de contenu"),": dans ce design, la colonne mesure 50% de largeur du site.")),Object(i.b)("p",null,"En cons\xe9quence, il faudra pr\xe9parer l'image \xe0 ",Object(i.b)("inlineCode",{parentName:"p"},"700px")," de largeur (1400 / 2). Si la largeur du site n'avait pas \xe9t\xe9 bloqu\xe9e \xe0 1400 pixels, elle aurait occup\xe9 toute la largeur de la fen\xeatre, soit un maximum de 2560 pixels. On aura alors pr\xe9par\xe9 l'image \xe0 ",Object(i.b)("inlineCode",{parentName:"p"},"1280px")," de large."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Si votre image appr\xeat plusieurs fois sur votre site \xe0 des tailles diff\xe9rentes. Par exemple dans le cas d'une vignette qui permet d'afficher une image en plein \xe9cran, ",Object(i.b)("strong",{parentName:"p"},"il faudra pr\xe9parer deux fichiers diff\xe9rents!"),". L'un \xe0 la taille de la vignette et l'autre de l'image en grand."),Object(i.b)("p",{parentName:"div"},"Ainsi, pour une photo appel\xe9e chaton.jpg, vous aurez par exemple dans votre dossier image"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"\u251c\u2500\u2500 images\n\u2502   \u251c\u2500\u2500 chaton-large.jpg\n\u2502   \u2514\u2500\u2500 chaton-small.jpg\n")))),Object(i.b)("h3",{id:"le-poids-id\xe9al"},"Le poids id\xe9al"),Object(i.b)("p",null,"Le poids de votre image est variable en fonction du format de fichier utilis\xe9, de la taille de l'image et de sa complexit\xe9. Le tableau ci-dessous vous donne quelques rep\xe8res quant \xe0 la taille moyenne de fichier."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Vignette (~300px)"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Image moyenne (~1000px)"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Image large (",">","2000px)"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JPEG"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"10-20Ko"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"100-200Ko"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"400-600Ko")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PNG"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"90Ko"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"500"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"2Mo")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GIF"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"30Ko"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"300Ko"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1Mo")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"SVG"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"< 10Ko"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"< 10Ko"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"< 10Ko")))),Object(i.b)("h3",{id:"exportation-depuis-adobe-photoshop"},"Exportation depuis Adobe Photoshop"),Object(i.b)("p",null,"Adobe Photoshop propose un outil d'exportation qui permet d'optimiser facilement la taille de vos images et de comparer la compression selon les formats. Vous pouvez y acc\xe9der en utilisant ",Object(i.b)("em",{parentName:"p"},"Fichier")," \u2192 ",Object(i.b)("em",{parentName:"p"},"Export")," \u2192 ",Object(i.b)("em",{parentName:"p"},"Enregistrer pour le web (h\xe9rit\xe9)")," ou via le raccourci clavier ",Object(i.b)("kbd",null,"\u2325")," + ",Object(i.b)("kbd",null,"\u21e7")," + ",Object(i.b)("kbd",null,"\u2318")," + ",Object(i.b)("kbd",null,"S")," ou ",Object(i.b)("kbd",null,"CTRL")," + ",Object(i.b)("kbd",null,"ALT")," + ",Object(i.b)("kbd",null,"\u21e7")," + ",Object(i.b)("kbd",null,"S"),"."),Object(i.b)("img",{alt:"",src:Object(l.a)("img/programming/miscellaneous/ps-export.png"),class:"w-100"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Image originale;"),Object(i.b)("li",{parentName:"ol"},"Image optimis\xe9e;"),Object(i.b)("li",{parentName:"ol"},"R\xe9glage de la taille. Id\xe9al pour v\xe9rifier les artefacts;"),Object(i.b)("li",{parentName:"ol"},"Choix du format de fichier;"),Object(i.b)("li",{parentName:"ol"},"R\xe9glage de la qualit\xe9 d'image;"),Object(i.b)("li",{parentName:"ol"},"Poids du fichier optimis\xe9.")))}m.isMDXComponent=!0}}]);