/*! For license information please see a2c37623.56816449.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return f})),a.d(t,"metadata",(function(){return h})),a.d(t,"rightToc",(function(){return g})),a.d(t,"default",(function(){return x}));var n=a(1),r=a(6),l=a(0),s=a.n(l),i=a(152),c=a(156),o=a(154),u=a(155),b=a.n(u),p=a(131),d=a.n(p);const m=37,O=39;var j=function(e){const{block:t,children:a,defaultValue:n,values:r}=e,[i,c]=Object(l.useState)(n),o=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:b()("tabs",{"tabs--block":t})},r.map(({value:e,label:t})=>s.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":i===e,className:b()("tab-item",d.a.tabItem,{"tab-item--active":i===e}),key:e,ref:e=>o.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case O:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case m:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(o,e.target,e),onFocus:()=>c(e),onClick:()=>c(e)},t))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},l.Children.toArray(a).filter(e=>e.props.value===i)[0]))};var v=function(e){return s.a.createElement("div",null,e.children)},f={id:"introduction",title:"Introduction aux CSS",sidebar_label:"Introduction"},h={id:"programming/css/introduction",title:"Introduction aux CSS",description:"import BrowserWindow from '@site/src/components/BrowserWindow';",source:"@site/docs/programming/css/introduction.md",permalink:"/ecal-web/docs/programming/css/introduction",sidebar_label:"Introduction",sidebar:"programming",previous:{title:"Exercice",permalink:"/ecal-web/docs/programming/html/exercice"},next:{title:"Unit\xe9s",permalink:"/ecal-web/docs/programming/css/units"}},g=[{value:"O\xf9 \xe9crire le CSS ?",id:"o\xf9-\xe9crire-le-css-",children:[]},{value:"Syntaxe",id:"syntaxe",children:[]},{value:"S\xe9lecteurs",id:"s\xe9lecteurs",children:[{value:"\xc9l\xe9ment",id:"\xe9l\xe9ment",children:[]},{value:"Class",id:"class",children:[]},{value:"Identifiant",id:"identifiant",children:[]}]},{value:"S\xe9lecteurs multiples",id:"s\xe9lecteurs-multiples",children:[]},{value:"S\xe9lecteurs avanc\xe9s",id:"s\xe9lecteurs-avanc\xe9s",children:[]},{value:"H\xe9ritage",id:"h\xe9ritage",children:[]},{value:"Exercice",id:"exercice",children:[]}],N={rightToc:g};function x(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},N,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Les feuilles de style (Cascading Style Sheets en anglais) servent \xe0 d\xe9finir l'apparence des \xe9l\xe9ments qui composent votre site. Elles permettent de g\xe9rer les couleurs, les marges, le positionnement, la taille, la police, etc."),Object(i.b)("h2",{id:"o\xf9-\xe9crire-le-css-"},"O\xf9 \xe9crire le CSS ?"),Object(i.b)("p",null,"Pour ajouter une feuille de style \xe0 votre site, il suffit de cr\xe9er un fichier ",Object(i.b)("inlineCode",{parentName:"p"},"style.css")," \xe0 la racine du dossier contenant votre site. C'est dans ce document que vous viendrez \xe9crire les diff\xe9rentes r\xe8gles de style."),Object(i.b)("p",null,"Pour appliquer votre feuille de style \xe0 une page web, vous devez lier la page en question \xe0 votre feuille de style. Pour ce faire, il faut ajouter la ligne ci-dessous \xe0 l'int\xe9rieur de la balise ",Object(i.b)("inlineCode",{parentName:"p"},"<head>"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<link href="styles.css" rel="stylesheet">\n')),Object(i.b)("p",null,"Votre balise ",Object(i.b)("inlineCode",{parentName:"p"},"head")," ressemblera donc \xe0 ceci:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<head>\n  <meta charset="utf-8">\n  <title>Titre de la page</title>\n  <link href="style.css" rel="stylesheet">\n</head>\n')),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Ne cr\xe9ez jamais un fichier CSS par page HTML!")," L'int\xe9r\xeat des feuilles de style est d'avoir un seul fichier qui regroupe tous les param\xe8tres de style du site et d'\xe9viter un maximum les r\xe9p\xe9titions."))),Object(i.b)("h2",{id:"syntaxe"},"Syntaxe"),Object(i.b)("p",null,"Une r\xe8gle CSS est toujours compos\xe9e des \xe9l\xe9ments suivants:"),Object(i.b)("br",null),Object(i.b)("img",{alt:"",src:Object(o.a)("img/programming/css/css-rule.svg"),class:"w-75"}),Object(i.b)("br",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Le s\xe9lecteur d\xe9finit l'\xe9l\xe9ment sur lequel agit la r\xe8gle;\n\u2013 Les accolades d\xe9limitent la r\xe8gle qui s'appliquera \xe0 ce s\xe9lecteur"),Object(i.b)("li",{parentName:"ul"},"Chaque d\xe9claration modifie un param\xe8tre en particulier. Une r\xe8gle CSS peut contenir plusieurs d\xe9clarations. Elles sont s\xe9par\xe9es par un ",Object(i.b)("inlineCode",{parentName:"li"},";")," et un retour \xe0 la ligne;"),Object(i.b)("li",{parentName:"ul"},"Chaque r\xe8gle est compos\xe9e d'une paire ",Object(i.b)("em",{parentName:"li"},"cl\xe9 valeur")," s\xe9par\xe9 par un ",Object(i.b)("inlineCode",{parentName:"li"},":"),".")),Object(i.b)("p",null,"Dans l'exemple ci-dessus, nous avons une r\xe8gle qui modifie ",Object(i.b)("strong",{parentName:"p"},"tous")," les paragraphes du site pour qu'ils s'affichent avec un texte rouge en Arial."),Object(i.b)("h2",{id:"s\xe9lecteurs"},"S\xe9lecteurs"),Object(i.b)("p",null,"Les s\xe9lecteurs permettent de d\xe9finir sur quels \xe9l\xe9ments votre r\xe8gle agira. Il existe trois principaux s\xe9lecteurs."),Object(i.b)("h3",{id:"\xe9l\xe9ment"},"\xc9l\xe9ment"),Object(i.b)("p",null,"Vous pouvez utiliser n'importe quelle balise HTML comme s\xe9lecteur. Votre r\xe8gle s'appliquera alors \xe0 ",Object(i.b)("strong",{parentName:"p"},"toutes")," les occurrences de cette balise dans votre site (donc sur toutes les pages.)."),Object(i.b)("p",null,"Le code ci-dessous modifie la couleur des liens dans toutes les pages du site."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),"a {\n  color: red;\n}\n")),Object(i.b)(c.a,{minHeight:"50px",url:"index.html",src:"/examples/css/selector-element-1.html",mdxType:"BrowserWindow"}),Object(i.b)(c.a,{minHeight:"50px",url:"projets.html",src:"/examples/css/selector-element-2.html",mdxType:"BrowserWindow"}),Object(i.b)("h3",{id:"class"},"Class"),Object(i.b)("p",null,"Les classes permettent de d\xe9finir des r\xe8gles CSS que vous pouvez appliquer librement \xe0 autant d'\xe9l\xe9ments HTML que vous le souhaitez."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Le s\xe9lecteur qui d\xe9crit une classe commence toujours par un ",Object(i.b)("inlineCode",{parentName:"li"},"."),"."),Object(i.b)("li",{parentName:"ul"},"Inscrivez ensuite un nom compos\xe9 uniquement de lettres, de chiffres (pas de chiffres directement apr\xe8s le point) ainsi que des caract\xe8res ",Object(i.b)("inlineCode",{parentName:"li"},"-")," et ",Object(i.b)("inlineCode",{parentName:"li"},"_"),"."),Object(i.b)("li",{parentName:"ul"},"Dans vos pages HTML, chaque \xe9l\xe9ment qui subit la classe doit comporter un attribut ",Object(i.b)("em",{parentName:"li"},"class")," avec le nom de votre classe dans sa valeur."),Object(i.b)("li",{parentName:"ul"},"Un \xe9l\xe9ment HTML peut subir plusieurs classes. On \xe9crit alors ",Object(i.b)("strong",{parentName:"li"},"un seul")," attribut *class** et on met les noms des diff\xe9rentes classes dans sa valeur en les s\xe9parant par un espace.")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Donnez des noms logiques \xe0 vos classes! Optez pour des termes qui d\xe9crivent leurs fonctions (p.ex color-red pour une classe qui sert \xe0 passer la couleur du texte en rouge). \xc9vitez les noms g\xe9n\xe9riques ou abstraits."))),Object(i.b)(j,{defaultValue:"css",values:[{label:"CSS",value:"css"},{label:"HTML",value:"html"}],mdxType:"Tabs"},Object(i.b)(v,{value:"css",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),".color-red {\n  color: red;\n}\n\n.font-arial {\n  font-family: Arial;\n}\n"))),Object(i.b)(v,{value:"html",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<p>Ceci est un paragraphe normal</p>\n\n<p class="color-red">Ceci est un paragraphe rouge</p>\n\n<p class="font-arial">Ceci est un paragraphe en Arial</p>\n\n<p class="color-red font-arial">Ceci est un paragraphe rouge en Arial</p>\n')))),Object(i.b)(c.a,{minHeight:"50px",url:"index.html",src:"/examples/css/selector-class.html",mdxType:"BrowserWindow"}),Object(i.b)("h3",{id:"identifiant"},"Identifiant"),Object(i.b)("p",null,"L'identifiant fonctionne sur le m\xeame principe que la classe. Il a la particularit\xe9 d'\xeatre unique au sein d'une m\xeame page."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Le s\xe9lecteur qui d\xe9crit une classe commence toujours par un ",Object(i.b)("inlineCode",{parentName:"li"},"#"),"."),Object(i.b)("li",{parentName:"ul"},"Inscrivez ensuite un nom compos\xe9 uniquement de lettres, de chiffres (pas de chiffres directement apr\xe8s le point) ainsi que des caract\xe8res ",Object(i.b)("inlineCode",{parentName:"li"},"-")," et ",Object(i.b)("inlineCode",{parentName:"li"},"_"),"."),Object(i.b)("li",{parentName:"ul"},"Dans vos pages HTML, chaque \xe9l\xe9ment qui subit l'identifiant doit comporter un attribut ",Object(i.b)("em",{parentName:"li"},"id")," avec le nom de votre identifiant dans sa valeur."),Object(i.b)("li",{parentName:"ul"},"Un \xe9l\xe9ment HTML ne peut subir qu'un seul identifiant.\n\u2013 Votre identifiant ne doit \xeatre utilis\xe9 qu'une seule fois par page web.")),Object(i.b)(j,{defaultValue:"css",values:[{label:"CSS",value:"css"},{label:"HTML",value:"html"}],mdxType:"Tabs"},Object(i.b)(v,{value:"css",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),"#site-title {\n  font-size: 48px;\n  font-family: Arial;\n}\n"))),Object(i.b)(v,{value:"html",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<h1 id="site-title">Mon site</h1>\n\n\n<h1>Ceci est un titre de niveau 1 normal</h1>\n')))),Object(i.b)(c.a,{minHeight:"50px",url:"index.html",src:"/examples/css/selector-id.html",mdxType:"BrowserWindow"}),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Classe ou identifiant?"),"\nPrivil\xe9giez l'usage des classes! Les identifiants sont surtout utiles pour modifier des composants uniques ou travailler avec du JavaScript."))),Object(i.b)("h2",{id:"s\xe9lecteurs-multiples"},"S\xe9lecteurs multiples"),Object(i.b)("p",null,"Vous avez la possibilit\xe9 de combiner plusieurs s\xe9lecteurs afin de cibler des \xe9l\xe9ments pr\xe9cis. Pour ce faire, il suffit d'\xe9crire les diff\xe9rents \xe9l\xe9ments de votre s\xe9lecteur en les s\xe9parant par un espace."),Object(i.b)("p",null,"La lecture se faite de gauche \xe0 droite, de parent \xe0 enfant."),Object(i.b)("p",null,"Dans l'exemple ci-dessous, on modifie uniquement les liens qui sont \xe0 l'int\xe9rieur de la balise ",Object(i.b)("inlineCode",{parentName:"p"},"menu"),"."),Object(i.b)(j,{defaultValue:"css",values:[{label:"CSS",value:"css"},{label:"HTML",value:"html"}],mdxType:"Tabs"},Object(i.b)(v,{value:"css",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),"menu a {\n  color: red;\n}\n"))),Object(i.b)(v,{value:"html",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<menu class="color-red">\n  <a href="page-1.html">Page 1</a>\n  <a href="page-2.html">Page 2</a>\n</menu>\n<a href="page-3.html">Lien en dehors du menu</a>\n')))),Object(i.b)(c.a,{minHeight:"50px",url:"index.html",src:"/examples/css/selector-multiples.html",mdxType:"BrowserWindow"}),Object(i.b)("h2",{id:"s\xe9lecteurs-avanc\xe9s"},"S\xe9lecteurs avanc\xe9s"),Object(i.b)("p",null,"Il existe de nombreux s\xe9lecteurs CSS qui vous permettent de structurer votre r\xe8gle de fa\xe7on pr\xe9cise. Ces s\xe9lecteurs sont d\xe9crits sur le site ",Object(i.b)("a",{href:"https://www.w3schools.com/cssref/css_selectors.asp",target:"_blank"},"w3schools.com"),"."),Object(i.b)("h2",{id:"h\xe9ritage"},"H\xe9ritage"),Object(i.b)("p",null,"Certains styles (couleurs, police, etc.) vont s'appliquer \xe0 l'\xe9l\xe9ment cibl\xe9 par votre r\xe8gle, ainsi qu'\xe0 ses enfants."),Object(i.b)("p",null,"Par exemple si vous souhaitez modifier la police de votre site, pas besoin d'\xe9crire un r\xe8gle pour chaque balise. Il suffit de d\xe9finir une r\xe8gle pour la balise ",Object(i.b)("inlineCode",{parentName:"p"},"<body>")," et tout le texte de votre site prendra automatiquement cette r\xe8gle."),Object(i.b)(j,{defaultValue:"css",values:[{label:"CSS",value:"css"},{label:"HTML",value:"html"}],mdxType:"Tabs"},Object(i.b)(v,{value:"css",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),"body {\n  font-family: Arial;\n}\n\n.color-red {\n  color: red;\n}\n"))),Object(i.b)(v,{value:"html",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<body>\n  <header class="color-red">\n    <h1>Mon site</h1>\n    <p>Slogan du site</p>  \n  </header>\n  <p>Ceci est un paragraphe de texte</p>\n</body>\n')))),Object(i.b)(c.a,{minHeight:"50px",url:"index.html",src:"/examples/css/selector-cascading.html",mdxType:"BrowserWindow"}),Object(i.b)("h2",{id:"exercice"},"Exercice"),Object(i.b)("p",null,"Pour faire cet exercice, vous pouvez repartir sur la base de ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/ecal-web/docs/programming/html/exercice"}),"l'exercice pr\xe9c\xe9dent"),"."),Object(i.b)("h4",{id:"\xe9tape-1--cr\xe9er-et-lier-une-feuille-css"},"\xc9tape 1 \u2014 Cr\xe9er et lier une feuille CSS"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Dans votre fichier ",Object(i.b)("inlineCode",{parentName:"li"},"index.html"),", renommez le titre ",Object(i.b)("inlineCode",{parentName:"li"},"h1"),' en "Exercice 5"'),Object(i.b)("li",{parentName:"ol"},"Cr\xe9ez un fichier ",Object(i.b)("inlineCode",{parentName:"li"},"style.css")," \xe0 la racine de votre site."),Object(i.b)("li",{parentName:"ol"},"Liez le fichier css avec les trois pages HTML pr\xe9sentes dans le dossier.")),Object(i.b)("h4",{id:"\xe9tape-2--changer-la-police-du-site"},"\xc9tape 2 \u2013 Changer la police du site"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Dans votre feuille de style, cr\xe9er une r\xe8gle qui modifie la police de tout le site. D\xe9finissez l'Arial comme font par d\xe9faut."),Object(i.b)("li",{parentName:"ol"},"Dans la r\xe8gle que vous venez de cr\xe9er, modifiez la taille de la police avec la cl\xe9 ",Object(i.b)("inlineCode",{parentName:"li"},"font-size")," et la valeur 16px;")),Object(i.b)("h4",{id:"\xe9tape-3--modifiez-la-couleur-des-liens-du-site"},"\xc9tape 3 \u2013 Modifiez la couleur des liens du site"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Dans votre veuille de style, cr\xe9ez une nouvelle r\xe8gle qui modifie la couleur par d\xe9faut des liens en magenta."),Object(i.b)("li",{parentName:"ol"},"D\xe9finissez une couleur (cyan) pour les liens lorsqu'ils sont survol\xe9s par la souris (la solution ne se trouve pas directement dans cette page ;-)")),Object(i.b)("h4",{id:"\xe9tape-4--cr\xe9ez-une-classe"},"\xc9tape 4 \u2013 Cr\xe9ez une classe"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Dans votre feuille de style, cr\xe9er une r\xe8gle utilisant une classe dont le but est de modifier la couleur du texte en rouge."),Object(i.b)("li",{parentName:"ol"},"Appliquez cette r\xe8gle au paragraphe de texte qui se trouve dans la page ",Object(i.b)("inlineCode",{parentName:"li"},"index.html"))),Object(i.b)("p",null,"Vous devriez obtenir le r\xe9sultat suivant:"),Object(i.b)(c.a,{minHeight:"500px",url:"index.html",src:"examples/css/exercice-index.html",mdxType:"BrowserWindow"}),Object(i.b)(c.a,{minHeight:"500px",url:"a-propos.html",src:"examples/css/exercice-a-propos.html",mdxType:"BrowserWindow"}),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("a",{href:Object(o.a)("exercises/programming/css.zip")},"T\xe9l\xe9charger le r\xe9sultat de l\u2019exercice"))))}x.isMDXComponent=!0},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},b=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,m=b["".concat(s,".").concat(d)]||b[d]||p[d]||l;return a?r.a.createElement(m,i({ref:t},o,{components:a})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},153:function(e,t,a){"use strict";var n=a(0),r=a(35);t.a=function(){return Object(n.useContext)(r.a)}},154:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(153);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},155:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===l)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},156:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(93),s=a.n(l),i=a(154);t.a=function({children:e,minHeight:t,backgroundColor:a,url:n,src:l}){return l&&(e=r.a.createElement("iframe",{src:Object(i.a)(l),frameBorder:"0",style:{minHeight:t}})),r.a.createElement("div",{className:s.a.browserWindow},r.a.createElement("div",{className:s.a.browserWindowHeader},r.a.createElement("div",{className:s.a.buttons},r.a.createElement("span",{className:s.a.dot,style:{background:"#f25f58"}}),r.a.createElement("span",{className:s.a.dot,style:{background:"#fbbe3c"}}),r.a.createElement("span",{className:s.a.dot,style:{background:"#58cb42"}})),r.a.createElement("div",{className:s.a.browserWindowAddressBar},r.a.createElement("input",{disabled:!0,type:"text",value:n,readOnly:!0})),r.a.createElement("div",{className:s.a.browserWindowMenuIcon},r.a.createElement("div",null,r.a.createElement("span",{className:s.a.bar}),r.a.createElement("span",{className:s.a.bar}),r.a.createElement("span",{className:s.a.bar})))),r.a.createElement("div",{className:s.a.browserWindowBody,style:{backgroundColor:a}},e))}}}]);