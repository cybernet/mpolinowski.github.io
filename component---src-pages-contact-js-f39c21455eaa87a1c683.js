(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{445:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(1),o=n.n(a),s=n(4),l=n.n(s),c=n(571),m=n.n(c),d=n(458),u=n(453),p=n(468),f=n(464),h=n(36),b=n.n(h),g=function(){return r.a.createElement(d.a,null,r.a.createElement(u.a,null,r.a.createElement(p.a,{title:"Contact"}),r.a.createElement(f.a,null,"Feel free to contact me by email: ",r.a.createElement(m.a,{email:b.a.contactEmail})," or use the form below.")))};g.propTypes={classes:o.a.object.isRequired},t.default=l()(function(e){return{}})(g)},453:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(1),o=n.n(a),s=n(4),l=n.n(s),c=function(e){var t=e.children,n=e.classes;return r.a.createElement("article",{className:n.article},t)};c.propTypes={classes:o.a.object.isRequired,children:o.a.node.isRequired},t.a=l()(function(e){var t;return{article:(t={background:e.main.colors.background,maxWidth:e.main.sizes.articleMaxWidth,margin:"0 auto",padding:"calc("+e.bars.sizes.infoBar+"px + 1.5rem) 1.5rem  1.5rem 1.5rem","& strong, & b":{letterSpacing:"-.02em"},"& a":{fontWeight:"bold",letterSpacing:"-.02em",textDecoration:"underline",transition:"0.3s","&:hover":{color:e.base.colors.linkHover}}},t["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={padding:"calc(2.5rem + "+e.bars.sizes.infoBar+"px) 3.5rem 2.5rem"},t["@media (min-width: "+e.mediaQueryTresholds.L+"px)"]={padding:"3.5rem"},t)}})(c)},458:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(1),o=n.n(a),s=n(4),l=n.n(s),c=n(125),m=function(e){var t=e.classes,n=e.children;return r.a.createElement("main",{className:t.main},r.a.createElement(c.a,null,n))};m.propTypes={classes:o.a.object.isRequired,children:o.a.any.isRequired};var d=l()(function(e){var t,n;return{main:(t={position:"absolute",top:0,left:0,bottom:0,width:"100%",animationName:"main-entry",animationDuration:".5s"},t["@media (min-width: "+e.mediaQueryTresholds.L+"px)"]={width:"calc(100vw - "+e.info.sizes.width+"px - "+e.bars.sizes.actionsBar+"px)",left:e.info.sizes.width+"px"},t["@media print"]={position:"relative","& > div":{overflow:"visible!important"},"& > div > div":{position:"relative!important"}},t),article:(n={maxWidth:e.main.sizes.maxWidth,margin:"0 auto",padding:"calc(1.5rem + "+e.info.sizes.height+"px) 1.8rem 1.5rem 1.5rem","& strong, & b":{letterSpacing:"-.02em",fontWeight:600},"& a":{fontWeight:600,letterSpacing:"-.02em",textShadow:"\n         2px  2px "+e.main.colors.background+",\n        -2px  2px "+e.main.colors.background+",\n        -2px -2px "+e.main.colors.background+",\n        -2px  2px "+e.main.colors.background+",\n        -2px  0   "+e.main.colors.background+",\n         2px  0   "+e.main.colors.background+"\n      ",display:"inline-block",textDecoration:"none",transition:"0.3s","&:hover":{color:e.base.colors.linkHover}}},n["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={padding:"calc(2.5rem + "+e.info.sizes.height+"px) 3.5rem 2.5rem"},n["@media (min-width: "+e.mediaQueryTresholds.L+"px)"]={padding:"3.5rem"},n),"@keyframes main-entry":{"0%":{opacity:0,transform:"translateY(20px)"},"100%":{opacity:1,transform:"translateY(0)"}}}})(m);n.d(t,"a",function(){return d})},464:function(e,t,n){"use strict";n(90);var i=n(0),r=n.n(i),a=n(1),o=n.n(a),s=n(4),l=n.n(s),c=n(25),m=n(9),d=function(e){var t=e.classes,n=e.html,i=e.children;return n?r.a.createElement("div",{className:t.content,dangerouslySetInnerHTML:{__html:n}}):r.a.createElement("div",{className:t.content},i)};d.propTypes={classes:o.a.object.isRequired,html:o.a.string,children:o.a.node,setFontSizeIncrease:o.a.func.isRequired,fontSizeIncrease:o.a.number.isRequired};var u={setFontSizeIncrease:m.c};t.a=Object(c.b)(function(e,t){return{fontSizeIncrease:e.fontSizeIncrease}},u)(l()(function(e){var t,n,i;return{content:(i={color:e.main.colors.content,fontSize:function(t){return"calc("+e.main.fonts.content.size+"em * "+t.fontSizeIncrease+")"},lineHeight:e.main.fonts.content.lineHeight,"& a":{color:e.base.colors.link},"& .gatsby-highlight":{margin:"2em 0"},"& .gatsby-resp-iframe-wrapper":{margin:"2em 0"},"& .gatsby-resp-image-link":(t={margin:"2em -1.5rem",border:"none"},t["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={margin:"2.5em -3.5rem"},t),"& h2, & h3":{color:e.main.colors.contentHeading,fontSize:e.main.fonts.contentHeading.h2Size+"em",fontWeight:e.main.fonts.contentHeading.weight,lineHeight:e.main.fonts.contentHeading.lineHeight,margin:"2em 0 1em",letterSpacing:"-0.02em"},"& h3":{fontSize:e.main.fonts.contentHeading.h3Size+"em"},"& p":{margin:"0 0 1.5em 0",fontWeight:400},"& ul":(n={listStyle:"circle",padding:"0 0 0 1.3em"},n["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={padding:"0 0 0 2em"},n),"& li":{margin:"0 0 .5em 0"},"& blockquote":{border:"5px solid "+e.main.colors.blockquoteFrame,fontStyle:"italic",margin:"2.5em 0",padding:"1em 1.1em 1em 1.3em",position:"relative","& p":{margin:0},"&::before, &::after":{background:e.main.colors.background,content:'""',height:"5px",left:"50%",marginLeft:"-47%",position:"absolute",top:"-5px",width:"94%"},"&::after":{top:"auto",bottom:"-5px"}}},i["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={fontSize:e.main.fonts.content.sizeM+"em"},i["@media (min-width: "+e.mediaQueryTresholds.L+"px)"]={fontSize:e.main.fonts.content.sizeL+"em"},i)}})(d))},468:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(1),o=n.n(a),s=n(4),l=n.n(s),c=function(e){var t=e.classes,n=e.title;return r.a.createElement("header",{className:t.header},r.a.createElement("h1",{className:t.title},n))};c.propTypes={classes:o.a.object.isRequired,title:o.a.string.isRequired},t.a=l()(function(e){var t,n;return{header:{margin:"0 0 3em",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignContent:"center"},title:(t={color:e.main.colors.title,fontSize:e.main.fonts.title.size+"em",letterSpacing:"-0.04em",fontWeight:e.main.fonts.title.weight,lineHeight:e.main.fonts.title.lineHeight,margin:"0 0 0.4em"},t["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={fontSize:e.main.fonts.title.sizeM+"em"},t["@media (min-width: "+e.mediaQueryTresholds.L+"px)"]={fontSize:e.main.fonts.title.sizeL+"em",letterSpacing:"-0.05em"},t),mark:(n={width:"130px",display:"block",margin:"0 0 0 10px"},n["@media (min-width: "+e.mediaQueryTresholds.M+"px)"]={width:"170px"},n["@media (min-width: "+e.mediaQueryTresholds.L+"px)"]={width:"190px"},n)}})(c)},571:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(0),s=(i=o)&&i.__esModule?i:{default:i};function l(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}var c=function(e,t,n,i,r){var a=void 0;return i?(a="mailto:"+i,r&&(a+="?"+function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")}(r))):e?a="tel:"+e:t?a="sms:"+t:n&&(a="facetime:"+n),a},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={humanInteraction:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"render",value:function(){return!1===this.props.obfuscate?this.renderLink():this.renderObfuscatedLink()}},{key:"renderLink",value:function(){var e=this.props,t=e.tel,n=e.sms,i=e.facetime,a=e.email,o=(e.obfuscate,e.headers),m=e.children,d=l(e,["tel","sms","facetime","email","obfuscate","headers","children"]);return s.default.createElement("a",r({href:c(t,n,i,a,o)},d),m||t||n||i||a)}},{key:"reverse",value:function(e){return e.split("").reverse().join("")}},{key:"renderObfuscatedLink",value:function(){var e=this,t=this.props,n=t.tel,i=t.sms,a=t.facetime,o=t.email,c=(t.obfuscate,t.headers,t.children),m=t.style,d=t.linkText,u=l(t,["tel","sms","facetime","email","obfuscate","headers","children","style","linkText"]),p=!0===this.state.humanInteraction||c?r({},m||{},{unicodeBidi:"bidi-override",display:"inline-block",direction:"ltr"}):r({},m||{},{unicodeBidi:"bidi-override",display:"inline-block",direction:"rtl"});return s.default.createElement("a",r({onClick:this.handleClick.bind(this),onFocus:this.handleCopiability.bind(this),onMouseOver:this.handleCopiability.bind(this),onContextMenu:this.handleCopiability.bind(this),href:d||"obfuscated"},u,{style:p}),!0===e.state.humanInteraction?c||n||i||a||o:c||e.reverse(n||i||a||o).replace("(",")").replace(")","("))}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,n=t.tel,i=t.sms,r=t.facetime,a=t.email,o=t.headers;window.location.href=c(n,i,r,a,o)}},{key:"handleCopiability",value:function(){this.setState(function(e){return r({},e,{humanInteraction:!0})})}}]),t}();t.default=m}}]);
//# sourceMappingURL=component---src-pages-contact-js-f39c21455eaa87a1c683.js.map