webpackJsonp([0x9dff75adaaa8],{674:function(a,n){a.exports={data:{post:{id:"E:/gatsby-starter-personal-blog/content/posts/2017-08-21--reactive-material/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/photo-33682907794_96afc3900c_o-ceb86058881c0fb865ff29cbb05690a9-72e4a.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 34.333333333333336%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAB7ElEQVQozxWOX09SARxAf8R68KE1a265NU3xD+CmRKIpyE3EIYqAQCCg3LxAXe7lj38INaw2pamxnlo+9db6KL30BXzpM/QVTvR8zs6OSDCKJRxHYikks4NoOqLXsZoH9BsVntR1HKbGeK3MA8PssYOeU0e2i1hiOSSURHxhxKUgU4vIZWESyRaQPY0+Q+d+o8ZIZQ9HReXpfhFvS8fXekPuVMVsJsjsv8RRLWH5H1YNJLmLrCaQhRDifoH8ufQyEfFj31Rw7sVZ0GJ4zDwDp03udc4Zur5g4EuXx90r7NfnKGcmhUaMsJliUC9hLZS5G0sjgc1eNIj8vVlHC02Sj04Ry/rYrm+RbWuEO4coHw9Z+HDEdPsAz7sGrqbJ2L7BUiXLSXWFE8NPt/qcz1U/1tUIFmUNub1c4Sptw4w6aRhrtC5U1Lf53kWG47McxeY24UONqJ6mfpSlYkb43lX59TXBp5SNb9GH/G65SM4NM24fRY59jwh4RhmZcWJbfIZ72cN8cB5/3Evp9TK1Woi8FsR4FeBne4v3ZYWbzi4/OinaJS/ZDRcnm3Y23EO4JwaRlMfGHacbmZlD5v30LQUYi68zuJNguphmtpzBltvCX4ijahsomTDOyCrRdJDJZYX+xSVG3bNYx2eQYQf/AGVdCvvh1vu+AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="Harbin, China"\n        title=""\n        src="/static/photo-33682907794_96afc3900c_o-ceb86058881c0fb865ff29cbb05690a9-48538.png"\n        srcset="/static/photo-33682907794_96afc3900c_o-ceb86058881c0fb865ff29cbb05690a9-bed0f.png 200w,\n/static/photo-33682907794_96afc3900c_o-ceb86058881c0fb865ff29cbb05690a9-5fd34.png 400w,\n/static/photo-33682907794_96afc3900c_o-ceb86058881c0fb865ff29cbb05690a9-48538.png 800w,\n/static/photo-33682907794_96afc3900c_o-ceb86058881c0fb865ff29cbb05690a9-b70ec.png 1200w,\n/static/photo-33682907794_96afc3900c_o-ceb86058881c0fb865ff29cbb05690a9-72e4a.png 1500w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<!-- TOC -->\n<ul>\n<li><a href="#table-of-content">Table of Content</a></li>\n<li><a href="#01-installing-material-ui">01 Installing Material-UI</a></li>\n<li><a href="#02-using-material-ui-components">02 Using Material-UI Components</a></li>\n<li><a href="#03-final-design">03 Final Design</a></li>\n</ul>\n<!-- /TOC -->\n<p>This is a practice run to add some <a href="https://material.io">Material Design</a> to a react app, generated by the <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> starter kit. So let’s get started!</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install -g create-react-app\n\ncreate-react-app reactive-material\ncd reactive-material\nnpm start</code></pre>\n      </div>\n<p>Then open <a href="http://localhost:3000/">http://localhost:3000/</a> to see your app. You don’t need to install or configure tools like Webpack or Babel.\nThey are preconfigured and hidden so that you can focus on the code. Just create a project, and you’re good to go.</p>\n<h3 id="table-of-content"><a href="#table-of-content" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Table of Content</h3>\n<ol>\n<li><a href="#01-installing-material-ui">Installing Material-UI</a></li>\n<li><a href="#02-using-material-ui-components">Using Material-UI Components</a></li>\n<li><a href="#03-final-design">Final Design</a></li>\n</ol>\n<h2 id="01-installing-material-ui"><a href="#01-installing-material-ui" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>01 Installing Material-UI</h2>\n<p>Now that we made sure that our React App is up-and-running, let’s <em>CTRL+C</em> the process and follow the <a href="https://material-ui-1dab0.firebaseapp.com/getting-started/installation/">Installation Instructions</a> for Material-UI (v.1.0.0 beta):</p>\n<p>To install and save in your package.json dependencies, run:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install material-ui@next --save</code></pre>\n      </div>\n<p>Next, <a href="https://material-ui-1dab0.firebaseapp.com/style/typography/#general">Typography</a>: The Roboto font, that Material-UI is optimized for, can be installed by:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install typeface-roboto --save</code></pre>\n      </div>\n<p>Remember, the Roboto font will not be automatically loaded by Material-UI - but need to be imported to the entrypoint of your app: <em>import ‘typeface-roboto’</em> !</p>\n<p>Next, <a href="http://google.github.io/material-design-icons/#icon-font-for-the-web">Material Design Icons</a>. Install the icons using npm package manager:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install material-design-icons --save</code></pre>\n      </div>\n<p>And last but not least - In order to use prebuilt SVG Material icons, such as those found in the <a href="https://material-ui-1dab0.firebaseapp.com/component-demos">component demos</a> you have to install the material-ui-icons package:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install material-ui-icons --save</code></pre>\n      </div>\n<p>Now that you downloaded the more interesting part of the internet, let’s start with React!</p>\n<h2 id="02-using-material-ui-components"><a href="#02-using-material-ui-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>02 Using Material-UI Components</h2>\n<p>The basic usage is simple: e.g. adding a <a href="https://material-ui-1dab0.firebaseapp.com/demos/app-bar/#app-bar-with-buttons">ButtonAppBar</a> - create a JavaScript file <em>/src/ButtonAppBar.js</em> that is named after the component that you want to use. Copy the code from the Material-UI page and fine tune the CSS and JSX, where needed:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> withStyles <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'material-ui/styles\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> AppBar <span class="token keyword">from</span> <span class="token string">\'material-ui/AppBar\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Toolbar <span class="token keyword">from</span> <span class="token string">\'material-ui/Toolbar\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Typography <span class="token keyword">from</span> <span class="token string">\'material-ui/Typography\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'material-ui/Button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> IconButton <span class="token keyword">from</span> <span class="token string">\'material-ui/IconButton\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> MenuIcon <span class="token keyword">from</span> <span class="token string">\'material-ui-icons/Menu\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">styles</span> <span class="token operator">=</span> theme <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  root<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span>\n    position<span class="token punctuation">:</span> <span class="token string">\'fixed\'</span><span class="token punctuation">,</span>\n    top<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    left<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    zIndex<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  flex<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    flex<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  menuButton<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    marginLeft<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">,</span>\n    marginRight<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">ButtonAppBar</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> classes <span class="token operator">=</span> props<span class="token punctuation">.</span>classes<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>classes<span class="token punctuation">.</span>root<span class="token punctuation">}</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>AppBar position<span class="token operator">=</span><span class="token string">"static"</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>Toolbar<span class="token operator">></span>\n          <span class="token operator">&lt;</span>IconButton className<span class="token operator">=</span><span class="token punctuation">{</span>classes<span class="token punctuation">.</span>menuButton<span class="token punctuation">}</span> color<span class="token operator">=</span><span class="token string">"contrast"</span> aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"Menu"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>MenuIcon <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>IconButton<span class="token operator">></span>\n          <span class="token operator">&lt;</span>Typography type<span class="token operator">=</span><span class="token string">"title"</span> color<span class="token operator">=</span><span class="token string">"inherit"</span> className<span class="token operator">=</span><span class="token punctuation">{</span>classes<span class="token punctuation">.</span>flex<span class="token punctuation">}</span><span class="token operator">></span>\n            Reactive Material\n          <span class="token operator">&lt;</span><span class="token operator">/</span>Typography<span class="token operator">></span>\n          <span class="token operator">&lt;</span>Button color<span class="token operator">=</span><span class="token string">"contrast"</span><span class="token operator">></span>Material Button<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>Toolbar<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>AppBar<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nButtonAppBar<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  classes<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>object<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withStyles</span><span class="token punctuation">(</span>styles<span class="token punctuation">)</span><span class="token punctuation">(</span>ButtonAppBar<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Now go to <em>/src/App.js</em>, import your component and use it inside the JSX code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">\'./app.css\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'typeface-roboto\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> ButtonAppBar <span class="token keyword">from</span> <span class="token string">\'./ButtonAppBar\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span>header className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>header<span class="token punctuation">}</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>ButtonAppBar <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Restart your app with <em>npm start</em> and reload <em>localhost:3000</em> - voila’ :</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/01_mui-5296b1efef5798af7ac3caa8b421deea-f6b03.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 21.380632790028763%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAIAAAABPYjBAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA00lEQVQI12Mwsog2tY4xt42xsI01tY42NI+CIGPLaDObGFPreH1jLxMzc3tndzMzc01NTQ0NDTjJEJu9J7X4QF71kfzqI+klByPSdkem745I25WYty+z7EBG2QnvkG5tXW19MysjE1N9A309fX1dPV0gpaOjy/Djx+/v3399/fYTiL59//nz528I+v7j15cv3////7916zagRWa2Tpa2DkYGBsYGBgZAMwwM9fT0GP7jBn/+/AGSO3fuVFNVMTCz1Dc1N9LTMdHT0dfV1dbV19LSAgAlqnLfCuMkDQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="01 mui"\n        title=""\n        src="/static/01_mui-5296b1efef5798af7ac3caa8b421deea-48538.png"\n        srcset="/static/01_mui-5296b1efef5798af7ac3caa8b421deea-bed0f.png 200w,\n/static/01_mui-5296b1efef5798af7ac3caa8b421deea-5fd34.png 400w,\n/static/01_mui-5296b1efef5798af7ac3caa8b421deea-48538.png 800w,\n/static/01_mui-5296b1efef5798af7ac3caa8b421deea-f6b03.png 1043w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>As you can see from the examples, we added a few custom styles to our app. /src/index.js imports the complete /src/index.css file scoped globally. While our /src/app.js only imports app specific styles <em>import styles from ‘./app.css’;</em>, that are available with the className attribute <em>&#x3C;header className={styles.header}></em>. You can use locally scoped <a href="https://github.com/css-modules/css-modules">CSS Modules</a> for each component that you add to your app!</p>\n<h2 id="03-final-design"><a href="#03-final-design" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>03 Final Design</h2>\n<p>This is not yet a production ready design - but it will be a good starting point for future projects. I ended up removing the ButtonAppBar and replaced it with <a href="https://material-ui-1dab0.firebaseapp.com/demos/drawers/#responsive-drawer">Responsive Drawer</a> component. It gave me a little bit of an headache that the Navbar, that is included here, was <em>not sticky</em>. But everything seems to work now - beside some necessary cleanUp inside the JSX. All other components are now nested inside the Drawer component, that is then nested inside the main app component:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/02_mui-fdb5a8686bbff42056b579cb7410cab9-cfa82.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 54.810238305383926%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABCklEQVQoz5VRTU/DMAzNn4PjLozLtBMn+HcgIU3aX9kHAiEOG4cui+02aTJe4q7qpE4aT5H14j7bz415eFrMnpfzl+Vk/n43fb1/fLv9mNV6t/nYff9Un1/Vevv7n7M3ITR1TW0bThnxNIKYUjuaN0Rk3VGkxq1p0AjBi4hzTjkivoLgELFzpBx5w0iwxJhnhgLv/bXYQ5UGE1Acim3ca+xAnCd6XzipGl6YWTkIi4DkYuRTSlqsZQAIrnCE2OKXFN6coRqdzDF2xb0xKKBG0z5C4C9hsh+52BkdzmuGYbuhr65YF0MsxXkf2PTZaWc1DTB8KAiMtbY6VGioT+Uy6GAJhtBUNx8FJv8BIMdfqWsbuEEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="02 mui"\n        title=""\n        src="/static/02_mui-fdb5a8686bbff42056b579cb7410cab9-48538.png"\n        srcset="/static/02_mui-fdb5a8686bbff42056b579cb7410cab9-bed0f.png 200w,\n/static/02_mui-fdb5a8686bbff42056b579cb7410cab9-5fd34.png 400w,\n/static/02_mui-fdb5a8686bbff42056b579cb7410cab9-48538.png 800w,\n/static/02_mui-fdb5a8686bbff42056b579cb7410cab9-cfa82.png 1133w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Would you use create-react-app and Material-UI in a future project? <strong>Absolutely!</strong></p>',fields:{slug:"/reactive-material/",prefix:"2017-08-21"},frontmatter:{title:"create-react-app and Material-UI",subTitle:"This is a practice run to add some to a react app, generated by the starter kit. So let's get started!",cover:{childImageSharp:{resize:{src:"/static/photo-33682907794_96afc3900c_o-cover-3f2661933f3439a61b9fcb4048081993-160fa.png"}}}}},author:{id:"E:/gatsby-starter-personal-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mike Polinowski</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/contact/">contact me</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. :hearts:</p>'},footnote:{id:"E:/gatsby-starter-personal-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is a personal Developer Blog</li>\n<li>Ξ</li>\n<li>built by <a href="https://github.com/mpolinowski">Mike Polinowski</a></li>\n<li>Ξ</li>\n<li>with <a href="https://www.gatsbyjs.org/">Gatsby</a> &#x26; <a href="https://reactjs.org">React</a></li>\n<li>Ξ</li>\n<li>source code on <a href="https://github.com/mpolinowski/mpolinowski.github.io">GitHub</a></li>\n<li>Ξ</li>\n<li>deliverd by <a href="https://pages.github.com">Github Pages</a></li>\n<li>Ξ</li>\n<li>photos from <a href="https://www.flickr.com/people/149680084@N06/">Flickr</a></li>\n</ul>'}},pathContext:{slug:"/reactive-material/"}}}});
//# sourceMappingURL=path---reactive-material-af8b52bb29bb14f3bd2c.js.map