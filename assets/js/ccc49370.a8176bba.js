"use strict";(self.webpackChunkdrkapichu=self.webpackChunkdrkapichu||[]).push([[6103],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||l;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4109:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var a=n(7294),r=n(2997),l=n(6010),o=n(3905),i=n(2859),c=n(9960),s=n(7462),m=n(3366),u={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},p={Prism:n(7410).default,theme:u};function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}var y=/\r\n|\r|\n/,v=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},f=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=g({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=g({},n,{backgroundColor:null}),r};function b(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var E=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),d(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),d(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=g({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?g({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),d(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},i=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(i))}})),d(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=g({},b(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?g({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),d(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,i=[],c=[i];o>-1;){for(;(l=a[o]++)<r[o];){var s=void 0,m=t[o],u=n[o][l];if("string"==typeof u?(m=o>0?m:["plain"],s=u):(m=h(m,u.type),u.alias&&(m=h(m,u.alias)),s=u.content),"string"==typeof s){var p=s.split(y),d=p.length;i.push({types:m,content:p[0]});for(var g=1;g<d;g++)v(i),c.push(i=[]),i.push({types:m,content:p[g]})}else o++,t.push(m),n.push(s),a.push(0),r.push(s.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return v(i),c}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),k=E;var N=n(5999),_=n(3810),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},T=n(5350),Z=function(){var e=(0,_.LU)().prism,t=(0,T.Z)().isDarkTheme,n=e.theme||O,a=e.darkTheme||n;return t?a:n},C="codeBlockContainer_J+bg",P="codeBlockContent_csEI",w="codeBlockTitle_oQzk",x="codeBlock_rtdJ",L="copyButton_M3SB",j="codeBlockLines_1zSZ";function S(e){var t,n=e.children,r=e.className,o=e.metastring,i=e.title,c=(0,_.LU)().prism,m=(0,a.useState)(!1),u=m[0],d=m[1],g=(0,a.useState)(!1),y=g[0],v=g[1];(0,a.useEffect)((function(){v(!0)}),[]);var h=(0,_.bc)(o)||i,f=Z(),b=Array.isArray(n)?n.join(""):n,E=null!=(t=(0,_.Vo)(r))?t:c.defaultLanguage,O=(0,_.nZ)(b,o,E),T=O.highlightLines,S=O.code,A=function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),l=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var o=document.getSelection(),i=!1;o.rangeCount>0&&(i=o.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}r.remove(),i&&(o.removeAllRanges(),o.addRange(i)),l&&l.focus()}(S),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.createElement(k,(0,s.Z)({},p,{key:String(y),theme:f,code:S,language:E}),(function(e){var t=e.className,n=e.style,o=e.tokens,i=e.getLineProps,c=e.getTokenProps;return a.createElement("div",{className:(0,l.Z)(C,r,_.kM.common.codeBlock)},h&&a.createElement("div",{style:n,className:w},h),a.createElement("div",{className:(0,l.Z)(P,E)},a.createElement("pre",{tabIndex:0,className:(0,l.Z)(t,x,"thin-scrollbar"),style:n},a.createElement("code",{className:j},o.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=i({line:e,key:t});return T.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,s.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,s.Z)({key:t},c({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,N.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(L,"clean-btn"),onClick:A},u?a.createElement(N.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(N.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var A="anchorWithStickyNavbar_y2LR",I="anchorWithHideOnScrollNavbar_3ly5",D=["id"],B=function(e){var t=Object.assign({},e);return a.createElement("header",null,a.createElement("h1",(0,s.Z)({},t,{id:void 0}),t.children))},H=function(e){return"h1"===e?B:(t=e,function(e){var n,r=e.id,o=(0,m.Z)(e,D),i=(0,_.LU)().navbar.hideOnScroll;return r?a.createElement(t,(0,s.Z)({},o,{className:(0,l.Z)("anchor",(n={},n[I]=i,n[A]=!i,n)),id:r}),o.children,a.createElement("a",{className:"hash-link",href:"#"+r,title:(0,N.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,o)});var t},M="details_h+cY";function R(e){var t=Object.assign({},e);return a.createElement(_.PO,(0,s.Z)({},t,{className:(0,l.Z)("alert alert--info",M,t.className)}))}var z=["mdxType","originalType"];var F={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,m.Z)(r,z));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(S,e):a.createElement("code",e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:a.createElement(S,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(R,(0,s.Z)({},e,{summary:n}),r)},h1:H("h1"),h2:H("h2"),h3:H("h3"),h4:H("h4"),h5:H("h5"),h6:H("h6")},U=n(4996),J="blogPostTitle_RC3s",V="blogPostDate_IAgm",W=["January","February","March","April","May","June","July","August","September","October","November","December"];var Q=function(e){var t,n,r,s,m,u=e.children,p=e.frontMatter,d=e.metadata,g=e.truncated,y=e.isBlogPostPage,v=void 0!==y&&y,h=d.date,f=d.permalink,b=d.tags,E=d.readingTime,k=p.author,N=p.title,_=p.image,O=p.keywords,T=p.description,Z=p.author_url||p.authorURL,C=p.author_title||p.authorTitle,P=p.author_image_url||p.authorImageURL,w=(0,U.Z)(_,{absolute:!0}),x=p.header_image_url;return x=(0,U.Z)(x),a.createElement(a.Fragment,null,a.createElement(i.Z,null,O&&O.length&&a.createElement("meta",{name:"keywords",content:O.join(",")}),_&&a.createElement("meta",{property:"og:image",content:w}),_&&a.createElement("meta",{name:"twitter:image",content:w}),_&&a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+N})),a.createElement("article",{className:v?void 0:"margin-bottom--xl"},(t=v?"h1":"h2",n=h.substring(0,10).split("-"),r=n[0],s=W[parseInt(n[1],10)-1],m=parseInt(n[2],10),a.createElement("header",null,a.createElement(t,{className:(0,l.Z)("margin-bottom--sm",J)},v?N:a.createElement(c.Z,{to:f},N)),a.createElement("div",{className:"margin-vert--md"},T&&a.createElement("p",null,T),a.createElement("time",{dateTime:h,className:V},s," ",m,", ",r," ",E&&a.createElement(a.Fragment,null," \xb7 ",Math.ceil(E)," min read"))),a.createElement("div",{className:"avatar margin-vert--md"},P&&a.createElement("a",{className:"avatar__photo-link avatar__photo",href:Z,target:"_blank",rel:"noreferrer noopener"},a.createElement("img",{src:P,alt:k})),a.createElement("div",{className:"avatar__intro"},k&&a.createElement(a.Fragment,null,a.createElement("h4",{className:"avatar__name"},"Written by ",a.createElement("a",{href:Z,target:"_blank",rel:"noreferrer noopener"},k)),a.createElement("small",{className:"avatar__subtitle"},C)))),a.createElement("div",{className:"margin-vert--md"},a.createElement("img",{className:"img-blog-header",src:x})))),a.createElement("section",{className:"markdown blog-article-custom"},a.createElement(o.Zo,{components:F},u)),(b.length>0||g)&&a.createElement("footer",{className:"row margin-vert--lg"},b.length>0&&a.createElement("div",{className:"col"},a.createElement("strong",null,"Tags:"),b.map((function(e){var t=e.label,n=e.permalink;return a.createElement(c.Z,{key:n,className:"margin-horiz--sm",to:n},t)}))),g&&a.createElement("div",{className:"col text--right"},a.createElement(c.Z,{to:d.permalink,"aria-label":"Read more about "+N},a.createElement("strong",null,"Read More"))))))};var X=function(e){var t=e.nextItem,n=e.prevItem;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,N.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a.createElement("div",{className:"pagination-nav__item"},n&&a.createElement(c.Z,{className:"pagination-nav__link",to:n.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(N.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",n.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&a.createElement(c.Z,{className:"pagination-nav__link",to:t.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(N.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},Y=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function q(e){var t=e.toc,n=e.className,r=e.linkClassName,l=e.isChild;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(q,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}function G(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,l=e.linkClassName,o=void 0===l?"table-of-contents__link":l,i=e.linkActiveClassName,c=void 0===i?void 0:i,u=e.minHeadingLevel,p=e.maxHeadingLevel,d=(0,m.Z)(e,Y),g=(0,_.LU)(),y=null!=u?u:g.tableOfContents.minHeadingLevel,v=null!=p?p:g.tableOfContents.maxHeadingLevel,h=(0,_.DA)({toc:t,minHeadingLevel:y,maxHeadingLevel:v}),f=(0,a.useMemo)((function(){if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:y,maxHeadingLevel:v}}),[o,c,y,v]);return(0,_.Si)(f),a.createElement(q,(0,s.Z)({toc:h,className:r,linkClassName:o},d))}var K="tableOfContents_vrFS",$=["className"];var ee=function(e){var t=e.className,n=(0,m.Z)(e,$);return a.createElement("div",{className:(0,l.Z)(K,"thin-scrollbar",t)},a.createElement(G,(0,s.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))};var te=function(e){var t=e.content,n=(e.sidebar,t.frontMatter),l=t.metadata,o=l.title,i=l.description,c=l.nextItem,s=l.prevItem,m=(l.editUrl,n.hide_table_of_contents),u=n.header_image_url;return u=(0,U.Z)(u),a.createElement(r.Z,{title:o,description:i,wrapperClassName:"blog-wrapper"},t&&a.createElement("div",{className:"container container-wide margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--2"}),a.createElement("main",{className:"col col--8"},a.createElement(Q,{frontMatter:n,metadata:l,isBlogPostPage:!0},a.createElement(t,null)),(c||s)&&a.createElement("div",{className:"margin-vert--xl"},a.createElement(X,{nextItem:c,prevItem:s}))),!m&&t.toc&&a.createElement("div",{className:"col col--2"},a.createElement(ee,{toc:t.toc})))))}}}]);