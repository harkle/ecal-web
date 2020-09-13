(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(s,".").concat(m)]||b[m]||p[m]||a;return n?i.a.createElement(d,o(o({ref:t},l),{},{components:n})):i.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},120:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=n(121),i=n(122);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(r)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+s:s}(t,e,n,r)}}function s(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},121:function(e,t,n){"use strict";var r=n(0),i=n(20);t.a=function(){const e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},122:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),i=n(6),a=(n(0),n(119)),s=n(120),o={id:"publish",title:"Mise en ligne",sidebar_label:"Mise en ligne"},c={unversionedId:"programming/miscellaneous/publish",id:"programming/miscellaneous/publish",isDocsHomePage:!1,title:"Mise en ligne",description:"H\xe9bergement web",source:"@site/docs/programming/miscellaneous/publish.md",slug:"/programming/miscellaneous/publish",permalink:"/ecal-web/docs/programming/miscellaneous/publish",editUrl:"https://github.com/harkle/ecal-web/docs/programming/miscellaneous/publish.md",version:"current",sidebar_label:"Mise en ligne",sidebar:"programming",previous:{title:"Pr\xe9paration des images",permalink:"/ecal-web/docs/programming/miscellaneous/images"}},l=[{value:"H\xe9bergement web",id:"h\xe9bergement-web",children:[]},{value:"Publication du site",id:"publication-du-site",children:[{value:"Dans le cadre du cours",id:"dans-le-cadre-du-cours",children:[]},{value:"Probl\xe8mes courants",id:"probl\xe8mes-courants",children:[]}]}],u={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"h\xe9bergement-web"},"H\xe9bergement web"),Object(a.b)("p",null,"Pour \xeatre visible sur le web, un site doit \xeatre publi\xe9 sur un serveur accessible publiquement. Vous devez aussi poss\xe9der un nom de domaine pour permettre au visiteur de consulter votre site. Il existe de nombreux service d'h\xe9bergement qui propose des solutions incluant un nom de domaine, une adresse e-mail et un espace de stockage pour votre site."),Object(a.b)("p",null,"De mani\xe8re g\xe9n\xe9rale, \xe9vitez les solutions gratuites et privil\xe9giez des prestataires Suisse ou Europ\xe9ens. (h\xe9berger votre page web au \xc9tats-Unis peut ralentir le chargement jusqu'\xe0 une demi seconde par page!)"),Object(a.b)("p",null,"Voici, par exemple, deux service Suisse que vous pouvez utiliser sans autre:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:"https://infomanika.com/",target:"_blank"},"infomaniak.com")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:"https://kreativmedia.ch/fr/home",target:"_blank"},"kreativmedia.ch"))),Object(a.b)("h2",{id:"publication-du-site"},"Publication du site"),Object(a.b)("p",null,"La mise en ligne du contenu se fait g\xe9n\xe9ralement via le syst\xe8me de transfert de fichier FTP. Pour des raisons de s\xe9curit\xe9, on privil\xe8giera aujourd'hui un acc\xe8s s\xe9curis\xe9 via SFTP."),Object(a.b)("p",null,"Le logiciel ",Object(a.b)("a",{href:"https://cyberduck.io/",target:"_blank"},"cyberduck")," vous permet de vous connecter \xe0 un serveur web et d'y d\xe9poser vos fichiers"),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Avant de publiez votre site, assurez-vous que vous avez lu et respect\xe9 le chapitre ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../basics/organisation#g%C3%A9rer-les-fichiers"}),"G\xe9rer-les-fichiers")))),Object(a.b)("h3",{id:"dans-le-cadre-du-cours"},"Dans le cadre du cours"),Object(a.b)("p",null,"Pour les \xe9valutions, un serveur web est mis \xe0 votre disposition afin que vous puissiez publier votre projet."),Object(a.b)("h4",{id:"1--connexion-au-serveur"},"1 \u2013 Connexion au serveur"),Object(a.b)("p",null,'Ouvrez Cyberduck puis cliquez sur le bouton "Open connection" siut\xe9 en haut \xe0 gauche du programme. Dans la fen\xeatre qui s\'ouvre, s\xe9lectionnez "FTP (File Transfer Protocol)" et entrez les informations suivantes dans les diff\xe9rents champs'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Server:")," adct.ftp.infomaniak.com;"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Username:")," adct_ecal;"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Password:")," le mot de passe qui vous a \xe9t\xe9 communiqu\xe9 par e-mail.")),Object(a.b)("img",{alt:"",src:Object(s.a)("img/programming/miscellaneous/publish-cyberduck.png"),class:"w-75"}),Object(a.b)("br",null),Object(a.b)("p",null,"Cliquez ensuite sur le bouton ",Object(a.b)("em",{parentName:"p"},"Connect"),". Vous devriez maintenant voir une liste de dossier et de fichier."),Object(a.b)("h4",{id:"2--d\xe9poser-vos-fichier"},"2 \u2013 D\xe9poser vos fichier"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Cr\xe9ez ensuite un nouveau dossier (clique-droit \u2192  New folder...);"),Object(a.b)("li",{parentName:"ol"},"Comme nom de dossier, entrez votre nom, suivit d'un tiret puis votre pr\xe9nom.",Object(a.b)("br",null),"Par exemple ",Object(a.b)("inlineCode",{parentName:"li"},"tardy-lionel"),".")),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Inscrivez votre nom suivi de votre pr\xe9nom en ",Object(a.b)("strong",{parentName:"p"},"minuscules, sans accent et sans espace"),"."))),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Apr\xe8s avoir cr\xe9e le dossier cr\xe9e, double-cliquez dessus;"),Object(a.b)("li",{parentName:"ol"},"Glissez ensuite le ",Object(a.b)("strong",{parentName:"li"},"contenu")," du dossier local dans lequel vous avez d\xe9velopp\xe9 votre site.")),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Attention \xe0 ne pas d\xe9poser le dossier local mais bien ",Object(a.b)("strong",{parentName:"p"},"son contenu"),"!"))),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},"Vous pouvez maintenant acc\xe9der \xe0 votre site via l'adresse ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://ecal.lionel.me/nom-prenom/"}),"https://ecal.lionel.me/nom-prenom/"))),Object(a.b)("h3",{id:"probl\xe8mes-courants"},"Probl\xe8mes courants"),Object(a.b)("h4",{id:"access-forbidden"},"Access forbidden!"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"V\xe9rifiez que le fichier de votre page d'accueil est bien nomm\xe9e ",Object(a.b)("inlineCode",{parentName:"li"},"index.html"),";"),Object(a.b)("li",{parentName:"ul"},"V\xe9rifiez que vous avez bien d\xe9pos\xe9 le contenu de votre dossier sur le serveur et qu'il ne se trouve pas \xe0 l'int\xe9rieur d'un sous-dossier.")),Object(a.b)("h4",{id:"mes-liens-ne-fonctionnent-pas"},"Mes liens ne fonctionnent pas"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"V\xe9rifiez l'attribut ",Object(a.b)("inlineCode",{parentName:"li"},"href")," de vos liens. Les noms de fichiers sont-il correctement \xe9crits?\n\u2013 Le fichier vers lequel vous pointez se trouve-t-il bien sur le serveur?")),Object(a.b)("h4",{id:"mes-images-ne-saffichent-pas"},"Mes images ne s'affichent pas"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"V\xe9rifiez l'attribut ",Object(a.b)("inlineCode",{parentName:"li"},"src")," de vos liens. Les noms de fichiers sont-il correctement \xe9crits?\n\u2013 Vos images sont-elle bien sur le serveur?")))}b.isMDXComponent=!0}}]);