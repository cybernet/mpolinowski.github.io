(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{651:function(e,t,n){"use strict";n.r(t),n.d(t,"postQuery",function(){return x});var r=n(1),o=n.n(r),i=n(4),a=n.n(i),l=n(116),c=n(71),m=n(661),s=n.n(m),u=n(686),p=n(660),d=n(655),g=n.n(d),f=c.c.article.withConfig({displayName:"post__Content",componentId:"lq4eaz-0"})(["grid-column:2;box-shadow:0 4px 120px rgba(0,0,0,0.1);max-width:1000px;border-radius:0.2rem;padding:2rem 4.5rem;background-color:",";z-index:9000;margin-top:-3rem;@media (max-width:","){padding:3rem 2rem;}@media (max-width:","){padding:2rem 1rem;}p{font-size:1.1rem;letter-spacing:-0.003em;line-height:1.58;--baseline-multiplier:0.179;--x-height-multiplier:0.35;@media (max-width:","){font-size:1rem;}}.prism-code{padding:0.75rem;border-radius:5px;margin-bottom:1rem;font-size:16px;}"],function(e){return e.theme.colors.article},function(e){return e.theme.breakpoints.tablet},function(e){return e.theme.breakpoints.phone},function(e){return e.theme.breakpoints.phone}),h=c.c.h1.withConfig({displayName:"post__Title",componentId:"lq4eaz-1"})(["margin-bottom:1rem;"]),b=c.c.div.withConfig({displayName:"post__PostContent",componentId:"lq4eaz-2"})(["margin-top:4rem;"]),y=function(e){var t=e.pageContext,n=t.slug,r=t.prev,i=t.next,a=e.data.mdx,c=a.frontmatter;return o.a.createElement(p.d,{customSEO:!0},o.a.createElement(p.i,null,o.a.createElement(p.f,{postPath:n,postNode:a,article:!0}),o.a.createElement(p.c,null,o.a.createElement(l.Link,{to:"/"},g.a.siteTitle)),o.a.createElement(f,null,o.a.createElement(h,null,c.title),o.a.createElement(p.h,null,c.date," — ",a.timeToRead," Min Read — Categories","   ",c.categories.map(function(e,t){return o.a.createElement(o.a.Fragment,{key:e},!!t&&", ",o.a.createElement(l.Link,{to:"/categories/"+s()(e)},e))})),o.a.createElement(b,null,o.a.createElement(u.MDXRenderer,null,a.body)),o.a.createElement(p.e,{prev:r,next:i}))))};t.default=y,y.propTypes={pageContext:a.a.shape({slug:a.a.string.isRequired,next:a.a.object,prev:a.a.object}),data:a.a.shape({mdx:a.a.object.isRequired}).isRequired},y.defaultProps={pageContext:a.a.shape({next:null,prev:null})};var x="4047290385"},655:function(e,t){e.exports={pathPrefix:"/",siteTitle:"| Mike Polinowski | | DevNotes |",siteTitleAlt:"Mike Polinowski",siteTitleManifest:"::Mike::Polinowski::",siteUrl:"https://mpolinowski.github.io/",siteLanguage:"en",siteHeadline:"Mike Polinowski's Developer Notebook",siteBanner:"/social/banner.jpg",favicon:"src/favicon.png",siteDescription:"A Developer Notebook and Personal Technology Playground build with React, Gatsby and MDX",author:"Mike Polinowski",siteLogo:"/social/logo.png",userTwitter:"@minimal",ogSiteName:"minimal",ogLanguage:"en_US",googleAnalyticsID:"UA-76200392-4",themeColor:"#25ad71",backgroundColor:"#2b2e3c"}},659:function(e){e.exports={data:{site:{buildTime:"2019-07-11"}}}},660:function(e,t,n){"use strict";var r=n(1),o=n.n(r),i=n(4),a=n.n(i),l=n(71),c=n(116),m=n(661),s=n.n(m),u=(n(656),l.c.div.withConfig({displayName:"Subline",componentId:"sc-2pjf43-0"})(["font-size:",";color:",";",";",";",";"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.grey.ultraLight},function(e){return e.sectionTitle&&"margin-top: -3rem"},function(e){return e.sectionTitle&&"margin-bottom: 4rem"},function(e){return e.sectionTitle&&"text-align: center"})),p=l.c.article.withConfig({displayName:"Article__Post",componentId:"sc-1p7dbao-0"})(["display:flex;flex-direction:column;margin-top:3.5rem;margin-bottom:3.5rem;@media (max-width:","){margin-top:2rem;margin-bottom:2rem;}"],function(e){return e.theme.breakpoints.phone}),d=l.c.h2.withConfig({displayName:"Article__Title",componentId:"sc-1p7dbao-1"})(["position:relative;text-shadow:0 12px 30px rgba(0,0,0,0.15);margin-bottom:0.75rem;a{color:",";&:hover{color:",";}}"],function(e){return e.theme.colors.grey.ultraLight},function(e){return e.theme.colors.primaryLight}),g=l.c.span.withConfig({displayName:"Article__Initiale",componentId:"sc-1p7dbao-2"})(["position:absolute;font-size:7rem;transform:translate(-50%,-50%);opacity:0.08;user-select:none;z-index:-1;"]),f=l.c.p.withConfig({displayName:"Article__Excerpt",componentId:"sc-1p7dbao-3"})(["grid-column:-1 / 1;margin-top:1rem;margin-bottom:1rem;"]),h=function(e){var t=e.title,n=e.date,r=e.excerpt,i=e.slug,a=e.timeToRead,l=e.categories,m=t.charAt(0);return o.a.createElement(p,null,o.a.createElement(d,null,o.a.createElement(g,null,m),o.a.createElement(c.Link,{to:i},t)),o.a.createElement(u,null,n," — ",a," Min Read — Category","    ",l.map(function(e,t){return o.a.createElement(o.a.Fragment,{key:e},!!t&&", ",o.a.createElement(c.Link,{to:"/categories/"+s()(e)},e))})),o.a.createElement(f,null,r))},b=h;h.propTypes={title:a.a.string.isRequired,date:a.a.string.isRequired,excerpt:a.a.string.isRequired,slug:a.a.string.isRequired,timeToRead:a.a.number.isRequired,categories:a.a.array.isRequired};n(663);var y=l.c.button.withConfig({displayName:"Button",componentId:"f0k30h-0"})(["background:",";border:none;display:inline-flex;align-items:center;border-radius:",";font-size:",";color:",";padding:",";transition:all ",";box-shadow:0 4px 6px rgba(50,50,93,0.11),0 1px 3px rgba(0,0,0,0.08);&:hover{background:",";cursor:pointer;transform:translateY(-2px);}&:focus{outline:none;}"],function(e){return e.theme.colors.primary},function(e){return e.big?".2rem":"1rem"},function(e){return e.big?"1.2rem":"1rem"},function(e){return e.theme.colors.white},function(e){return e.big?"0.5rem 1.75rem":"0.35rem 1.65rem"},function(e){return e.theme.transitions.normal},function(e){return e.theme.colors.primaryLight}),x=n(658),w=l.c.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1uevezl-0"})(["background:linear-gradient( 45deg,",","," );grid-column:1 / -1;margin-left:-1rem;margin-right:-1rem;@media (max-width:","){padding:1rem 2rem 4rem 2rem;}padding:1rem 2rem 4.5rem 2rem;box-shadow:inset 0px -10px 30px 0px rgba(0,0,0,0.1);"],function(e){return Object(x.a)(.1,e.theme.colors.primary)},function(e){return Object(x.b)(.1,e.theme.colors.primary)},function(e){return e.theme.breakpoints.tablet}),E=l.c.div.withConfig({displayName:"Header__Content",componentId:"sc-1uevezl-1"})(["max-width:",";margin:0 auto;font-size:1.3rem;line-height:1.58;font-weight:bold;font-family:'Bitter',-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Helvetica','Arial',serif;@media (max-width:","){font-size:1rem;}a{color:",";font-size:1.2rem;&:hover{opacity:0.85;color:",";}}"],function(e){return e.theme.maxWidth},function(e){return e.theme.breakpoints.phone},function(e){return e.theme.colors.white},function(e){return e.theme.colors.white}),v=function(e){var t=e.children;return o.a.createElement(w,null,o.a.createElement(E,null,t))},k=v;v.propTypes={children:a.a.oneOfType([a.a.array,a.a.node]).isRequired};n(657);var P=n(662),z=n.n(P),O=n(655),L=n.n(O),_=function(e){var t,n,r=e.postNode,i=e.postPath,a=e.article,l=e.buildTime,c="/"===L.a.pathPrefix?"":L.a.pathPrefix,m=""+L.a.siteUrl+c,s=""+m+(i||""),u=""+m+L.a.siteBanner;a?(t=r.frontmatter.title+" | "+L.a.siteTitle,n=r.excerpt):(t=L.a.siteTitleAlt,n=L.a.siteDescription);var p={"@context":"http://schema.org","@type":"WebPage",url:s,headline:L.a.siteHeadline,inLanguage:L.a.siteLanguage,mainEntityOfPage:s,description:L.a.siteDescription,name:L.a.siteTitle,author:{"@type":"Person",name:L.a.author},copyrightHolder:{"@type":"Person",name:L.a.author},copyrightYear:"2018",creator:{"@type":"Person",name:L.a.author},publisher:{"@type":"Person",name:L.a.author},datePublished:"2019-01-07T10:30:00+01:00",dateModified:l,image:{"@type":"ImageObject",url:u}},d=[{"@type":"ListItem",item:{"@id":m,name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":m+"/contact",name:"Contact"},position:2}],g=null;a&&(g={"@context":"http://schema.org","@type":"Article",author:{"@type":"Person",name:L.a.author},copyrightHolder:{"@type":"Person",name:L.a.author},copyrightYear:r.parent.birthtime,creator:{"@type":"Person",name:L.a.author},publisher:{"@type":"Organization",name:L.a.author,logo:{"@type":"ImageObject",url:""+m+L.a.siteLogo}},datePublished:r.parent.birthtime,dateModified:r.parent.mtime,description:n,headline:t,inLanguage:"en",url:s,name:t,image:{"@type":"ImageObject",url:u},mainEntityOfPage:s},d.push({"@type":"ListItem",item:{"@id":s,name:t},position:3}));var f={"@context":"http://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:d};return o.a.createElement(z.a,null,o.a.createElement("html",{lang:L.a.siteLanguage}),o.a.createElement("title",null,t),o.a.createElement("meta",{name:"description",content:n}),o.a.createElement("meta",{name:"image",content:u}),o.a.createElement("meta",{name:"gatsby-starter",content:"Gatsby Starter Minimal Blog"}),o.a.createElement("meta",{property:"og:locale",content:L.a.ogLanguage}),o.a.createElement("meta",{property:"og:site_name",content:L.a.ogSiteName?L.a.ogSiteName:""}),o.a.createElement("meta",{property:"og:url",content:s}),o.a.createElement("meta",{property:"og:type",content:a?"article":"website"}),o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:n}),o.a.createElement("meta",{property:"og:image",content:u}),o.a.createElement("meta",{property:"og:image:alt",content:n}),L.a.siteFBAppID&&o.a.createElement("meta",{property:"fb:app_id",content:L.a.siteFBAppID}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:L.a.userTwitter?L.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:t}),o.a.createElement("meta",{name:"twitter:url",content:L.a.siteUrl}),o.a.createElement("meta",{name:"twitter:description",content:n}),o.a.createElement("meta",{name:"twitter:image",content:u}),o.a.createElement("meta",{name:"twitter:image:alt",content:n}),!a&&o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),a&&o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)))},N=_;_.propTypes={postNode:a.a.object,postPath:a.a.string,article:a.a.bool,buildTime:a.a.string},_.defaultProps={postNode:null,postPath:null,article:!1,buildTime:null};var T={colors:{primary:"#1a8f6e",primaryLight:Object(x.b)(.05,"#1a8f6e"),bg:"#24292e",article:"#31363f",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.2)",ultraLight:"#ededed"},link:"#FFC107",white:"white"},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem"},breakpoints:{tablet:"1200px",phone:"600px"},fontFamily:{serif:"'Bitter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', serif",sansSerif:"'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif"},maxWidth:"1000px",baseFontSize:"18px"},S=n(659),j=function(){return S.data.site.buildTime};function C(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n  html,\n  body {\n    padding: 0;\n    margin: 0;\n  }\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  html {\n    font-family: ",";\n    font-size: ",";\n    h1 {\n      font-size: 3.052rem;\n    }\n    h2 {\n      font-size: 2.441rem;\n    }\n    h3 {\n      font-size: 1.953rem;\n    }\n    h4 {\n      font-size: 1.563rem;\n    }\n    h5 {\n      font-size: 1.25rem;\n    }\n    @media (max-width: ",") {\n      font-size: 16px;\n      h1 {\n        font-size: 2.488rem;\n      }\n      h2 {\n        font-size: 2.074rem;\n      }\n      h3 {\n        font-size: 1.728rem;\n      }\n      h4 {\n        font-size: 1.444rem;\n      }\n      h5 {\n        font-size: 1.2rem;\n      }\n    }\n  }\n  body {\n    background: ",";\n    color: ",";\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  a:not([href]):not([tabindex]) {\n    color: inherit;\n    text-decoration: none;\n    &:hover,\n    &:focus {\n      color: inherit;\n      text-decoration: none;\n    }\n    &:focus {\n      outline: 0;\n    }\n  }\n  h1, h2, h3, h4, h5, h6 {\n    color: ",";\n    font-family: ",";\n  }\n  p {\n    color: ",";\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n  code {\n    font-style: italic;\n    color: ",";\n    background: ",';\n  }\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea, button {\n    font-size: 1rem;\n  }\n  textarea {\n    font-family: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .4rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  pre {\n    margin-top: 0;\n    margin-bottom: 1rem;\n    overflow: auto;\n  }\n  figure {\n    margin: 0 0 1rem 0;\n  }\n  img {\n    vertical-align: middle;\n  }\n  [role='button'] {\n    cursor: pointer;\n  }\n  a,\n  area,\n  button,\n  [role='button'],\n  input,\n  label,\n  select,\n  summary,\n  textarea {\n    touch-action: manipulation;\n  }\n  table {\n    border-collapse: collapse;\n    background-color: ",";\n  }\n  caption {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n    color: ",";\n    text-align: center;\n    caption-side: bottom;\n  }\n  th {\n    text-align: left;\n  }\n  fieldset {\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n    border: 0;\n  }\n  legend {\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1.5rem;\n    line-height: inherit;\n  }\n  input[type='search'] {\n    -webkit-appearance: none;\n  }\n  output {\n    display: inline-block;\n  }\n  svg:not(:root) {\n    overflow: hidden;\n    vertical-align: middle;\n  }\n  [hidden] {\n    display: none !important;\n  }\n"]);return C=function(){return e},e}var I=Object(l.b)(C(),function(e){return e.theme.colors.grey.ultraLight},function(e){return e.theme.colors.primary},function(e){return e.theme.fontFamily.sansSerif},function(e){return e.theme.baseFontSize},function(e){return e.theme.breakpoints.phone},function(e){return e.theme.colors.bg},function(e){return e.theme.colors.grey.ultraLight},function(e){return e.theme.colors.link},function(e){return e.theme.transitions.normal},function(e){return e.theme.colors.primaryLight},function(e){return e.theme.colors.grey.ultraLight},function(e){return e.theme.fontFamily.serif},function(e){return e.theme.colors.grey.ultraLight},function(e){return e.theme.colors.primaryLight},function(e){return e.theme.colors.grey.light},function(e){return e.theme.colors.primary},function(e){return e.theme.colors.grey.ultraLight},function(e){return e.theme.fontFamily.sansSerif},function(e){return e.theme.colors.bg},function(e){return e.theme.colors.color}),R=l.c.footer.withConfig({displayName:"Layout__Footer",componentId:"sc-6xzn7e-0"})(["text-align:center;padding:3rem 1rem;span{font-size:0.75rem;}"]),M=function(e){var t=e.children,n=e.customSEO,r=j();return o.a.createElement(l.a,{theme:T},o.a.createElement(o.a.Fragment,null,!n&&o.a.createElement(N,{buildTime:r}),o.a.createElement(I,null),t,o.a.createElement(R,null,"© 2019 by Mike Polinowski",o.a.createElement("br",null),o.a.createElement("a",{href:"https://github.com/mpolinowski/"},"GitHub")," ",o.a.createElement("br",null),o.a.createElement("span",null,"Last build: ",r))))},D=M;M.propTypes={children:a.a.oneOfType([a.a.array,a.a.node]).isRequired,customSEO:a.a.bool},M.defaultProps={customSEO:!1};var F=l.c.div.withConfig({displayName:"PrevNext__Wrapper",componentId:"sc-5pxgbz-0"})(["display:flex;margin:6rem auto 0 auto;a{color:",";display:flex;align-items:center;}justify-items:center;"],function(e){return e.theme.colors.link}),q=l.c.div.withConfig({displayName:"PrevNext__Prev",componentId:"sc-5pxgbz-1"})(["span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.ultraLight}),A=l.c.div.withConfig({displayName:"PrevNext__Next",componentId:"sc-5pxgbz-2"})(["margin-left:auto;text-align:right;span{text-transform:uppercase;font-size:0.8rem;color:",";}"],function(e){return e.theme.colors.grey.ultraLight}),B=function(e){var t=e.next,n=e.prev;return o.a.createElement(F,null,n&&o.a.createElement(q,null,o.a.createElement("span",null,"Previous"),o.a.createElement(c.Link,{to:n.fields.slug},n.frontmatter.title)),t&&o.a.createElement(A,null,o.a.createElement("span",null,"Next"),o.a.createElement(c.Link,{to:t.fields.slug},t.frontmatter.title)))},H=B;B.propTypes={next:a.a.object,prev:a.a.object},B.defaultProps={next:null,prev:null};var U=l.c.div.withConfig({displayName:"SectionTitle",componentId:"bmdq58-0"})(["font-size:",";text-transform:uppercase;font-weight:bold;text-align:center;color:",";position:relative;padding-bottom:1rem;margin-bottom:4rem;&:after{content:'';height:1px;width:50px;position:absolute;bottom:0;left:50%;margin-left:-25px;background:",";}"],function(e){return e.theme.fontSize.small},function(e){return e.theme.colors.grey.ultraLight},function(e){return e.theme.colors.grey.ultraLight}),W=l.c.div.withConfig({displayName:"Wrapper",componentId:"sc-1v6sncg-0"})(["display:grid;grid-template-columns:1fr minmax(280px,",") 1fr;"],function(e){return e.theme.maxWidth});n.d(t,"a",function(){return b}),n.d(t,"b",function(){return y}),n.d(t,"c",function(){return k}),n.d(t,"d",function(){return D}),n.d(t,"e",function(){return H}),n.d(t,"g",function(){return U}),n.d(t,"f",function(){return N}),n.d(t,"h",function(){return u}),n.d(t,"i",function(){return W})},686:function(e,t,n){var r=n(687);e.exports={MDXRenderer:r}},687:function(e,t,n){function r(e,t,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&o(i,n.prototype),i}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(52),n(19),n(6),n(5),n(12),n(22),n(3),n(169),n(22),n(169),n(52),n(19),n(6),n(5),n(3),n(12);var c=n(1),m=n(70),s=m.useMDXComponents,u=m.mdx,p=n(137).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),l=s(n),m=p(t),d=c.useMemo(function(){if(!o)return null;var e=a({React:c,mdx:u},m),t=Object.keys(e),n=t.map(function(t){return e[t]});return r(Function,["_fn"].concat(t,[""+o])).apply(void 0,[{}].concat(n))},[o,t]);return c.createElement(d,a({components:l},i))}}}]);
//# sourceMappingURL=component---src-templates-post-js-cd16a66d1838e6c127a5.js.map