(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{126:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),l=a(144),o=a.n(l),s=a(148),i=a(146),u=a(143),d=a(145),h=a(127),m=a.n(h);const f=[{title:c.a.createElement(c.a.Fragment,null,"Easy to Use"),imageUrl:"img/undraw_docusaurus_mountain.svg",description:c.a.createElement(c.a.Fragment,null,"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.")},{title:c.a.createElement(c.a.Fragment,null,"Focus on What Matters"),imageUrl:"img/undraw_docusaurus_tree.svg",description:c.a.createElement(c.a.Fragment,null,"Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the ",c.a.createElement("code",null,"docs")," directory.")},{title:c.a.createElement(c.a.Fragment,null,"Powered by React"),imageUrl:"img/undraw_docusaurus_react.svg",description:c.a.createElement(c.a.Fragment,null,"Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.")}];function b({imageUrl:e,title:t,description:a}){const n=Object(d.a)(e);return c.a.createElement("div",{className:o()("col col--4",m.a.feature)},n&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:m.a.featureImage,src:n,alt:t})),c.a.createElement("h3",null,t),c.a.createElement("p",null,a))}t.default=function(){const e=Object(u.a)(),{siteConfig:t={}}=e;return c.a.createElement(s.a,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />"},c.a.createElement("header",{className:o()("hero hero--primary",m.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"hero__title"},t.title),c.a.createElement("p",{className:"hero__subtitle"},t.tagline),c.a.createElement("div",{className:m.a.buttons},c.a.createElement(i.a,{className:o()("button button--outline button--secondary button--lg",m.a.getStarted),to:Object(d.a)("docs/introduction_history")},"C'est parti")))),c.a.createElement("main",null,f&&f.length&&c.a.createElement("section",{className:m.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},f.map((e,t)=>c.a.createElement(b,Object(n.a)({key:t},e))))))))}},147:function(e,t,a){"use strict";var n=a(17);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d})),a.d(t,"c",(function(){return n.e}))},148:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(158),l=a(143),o=a(145);const s="",i="dark";var u=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(l.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),c=Object(n.useCallback)(()=>{a(s),r(s)},[]),o=Object(n.useCallback)(()=>{a(i),r(i)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),{isDarkTheme:t===i,setLightTheme:c,setDarkTheme:o}};var d=r.a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});var h=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=u();return r.a.createElement(d.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)},m=a(1),f=a(146),b=(a(12),a(144)),p=a.n(b),g=a(147);a(85);var v=e=>{const[t,c]=Object(n.useState)(!1),o=Object(n.useRef)(null),{siteConfig:s={}}=Object(l.a)(),{themeConfig:{algolia:i}}=s,u=Object(g.b)();const d=(e=!0)=>{t||Promise.all([a.e(44).then(a.t.bind(null,247,7)),a.e(28).then(a.t.bind(null,248,7))]).then(([{default:t}])=>{c(!0),window.docsearch=t,function(e){window.docsearch({appId:i.appId,apiKey:i.apiKey,indexName:i.indexName,inputSelector:"#search_input_react",algoliaOptions:i.algoliaOptions,handleSelected:(e,t,a)=>{const n=document.createElement("a");n.href=a.url;const r="#__docusaurus"===n.hash?`${n.pathname}`:`${n.pathname}${n.hash}`;u.push(r)}}),e&&o.current.focus()}(e)})},h=Object(n.useCallback)(()=>{d(),t&&o.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),m=Object(n.useCallback)(()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),f=Object(n.useCallback)(e=>{const t="mouseover"!==e.type;d(t)});return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:p()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:p()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:f,onFocus:f,onBlur:m,ref:o}))},E=a(151),k=a.n(E),_=a(86),y=a.n(_);const O=()=>r.a.createElement("span",{className:p()(y.a.toggle,y.a.moon)}),w=()=>r.a.createElement("span",{className:p()(y.a.toggle,y.a.sun)});var j=function(e){const{isClient:t}=Object(l.a)();return r.a.createElement(k.a,Object(m.a)({disabled:!t,icons:{checked:r.a.createElement(O,null),unchecked:r.a.createElement(w,null)}},e))};var N=function(){return Object(n.useContext)(d)};var C=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]};var S=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[l,o]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),d=Object(g.c)(),[h,m]=C(d.hash),f=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(e<s)return;if(r)return c(!1),a(!1),void o(e);const t=document.documentElement.scrollHeight-s,n=window.innerHeight;l&&e>l?a(!1):e+n<t&&a(!0),o(e)};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}},[l,s]),Object(n.useEffect)(()=>{e&&(a(!0),m(d.hash))},[d]),Object(n.useEffect)(()=>{e&&h&&c(!0)},[h]),{navbarRef:u,isNavbarVisible:t}},T=a(150),x=a(87),D=a.n(x);function B({to:e,href:t,label:a,position:n,...c}){const l=Object(o.a)(e);return r.a.createElement(f.a,Object(m.a)({className:"navbar__item navbar__link"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:l},c),a)}var M=function(){const e=Object(l.a)(),{siteConfig:t={}}=e,{baseUrl:a,themeConfig:c={}}=t,{navbar:s={},disableDarkMode:i=!1}=c,{title:u,logo:d={},links:h=[],hideOnScroll:b=!1}=s,[g,E]=Object(n.useState)(!1),[k,_]=Object(n.useState)(!1),{isDarkTheme:y,setLightTheme:O,setDarkTheme:w}=N(),{navbarRef:C,isNavbarVisible:x}=S(b);Object(T.a)(g);const M=Object(n.useCallback)(()=>{E(!0)},[E]),F=Object(n.useCallback)(()=>{E(!1)},[E]),L=Object(n.useCallback)(e=>e.target.checked?w():O(),[O,w]),P=d.href||a,I=/http/.test(P)?{rel:"noopener noreferrer",target:"_blank"}:null,X=d.srcDark&&y?d.srcDark:d.src,R=Object(o.a)(X);return r.a.createElement("nav",{ref:C,className:p()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":g,[D.a.navbarHideable]:b,[D.a.navbarHidden]:!x})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:M,onKeyDown:M},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(f.a,Object(m.a)({className:"navbar__brand",to:P},I),null!=d&&r.a.createElement("img",{className:"navbar__logo",src:R,alt:d.alt}),null!=u&&r.a.createElement("strong",{className:k?D.a.hideLogoText:""},u)),h.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(B,Object(m.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},h.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(B,Object(m.a)({},e,{key:t}))),!i&&r.a.createElement(j,{className:D.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:L}),r.a.createElement(v,{handleSearchBarToggle:_,isSearchBarExpanded:k}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:F}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(f.a,Object(m.a)({className:"navbar__brand",onClick:F,to:P},I),null!=d&&r.a.createElement("img",{className:"navbar__logo",src:R,alt:d.alt}),null!=u&&r.a.createElement("strong",null,u)),!i&&g&&r.a.createElement(j,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:L})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},h.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(B,Object(m.a)({className:"menu__link"},e,{onClick:F})))))))))},F=a(88),L=a.n(F);function P({to:e,href:t,label:a,...n}){const c=Object(o.a)(e);return r.a.createElement(f.a,Object(m.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},n),a)}const I=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var X=function(){const e=Object(l.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:c,links:s=[],logo:i={}}=n||{},u=Object(o.a)(i.src);return n?r.a.createElement("footer",{className:p()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(P,e)))):null))),(i||c)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:L.a.footerLogoLink},r.a.createElement(I,{alt:i.alt,url:u})):r.a.createElement(I,{alt:i.alt,url:u})),c))):null};a(89);t.a=function(e){const{siteConfig:t={}}=Object(l.a)(),{favicon:a,title:n,themeConfig:{image:s},url:i}=t,{children:u,title:d,noFooter:m,description:f,image:b,keywords:p,permalink:g,version:v}=e,E=d?`${d} | ${n}`:n,k=b||s,_=i+Object(o.a)(k),y=Object(o.a)(a);return r.a.createElement(h,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),a&&r.a.createElement("link",{rel:"shortcut icon",href:y}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),v&&r.a.createElement("meta",{name:"docsearch:version",content:v}),p&&p.length&&r.a.createElement("meta",{name:"keywords",content:p.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:_}),k&&r.a.createElement("meta",{property:"twitter:image",content:_}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${E}`}),g&&r.a.createElement("meta",{property:"og:url",content:i+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(M,null),r.a.createElement("div",{className:"main-wrapper"},u),!m&&r.a.createElement(X,null))}},150:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},151:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=h(c),o=h(a(144)),s=h(a(8)),i=h(a(152)),u=h(a(153)),d=a(154);function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:l.default.createElement(i.default,null),unchecked:l.default.createElement(u.default,null)}},m.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},152:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},153:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},154:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);