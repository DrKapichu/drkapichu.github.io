"use strict";(self.webpackChunkdrkapichu=self.webpackChunkdrkapichu||[]).push([[3089],{7638:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(7294),r=a(2263),l=a(9974),i=a(2053),m=a(9960),o=a(5999);var c=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(m.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(m.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var s=function(e){var t=e.metadata,a=e.items,m=(e.sidebar,(0,r.Z)().siteConfig.title),o=t.blogDescription,s=t.blogTitle,g="/"===t.permalink?m:s;return n.createElement(l.Z,{title:g,description:o,wrapperClassName:"blog-wrapper"},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("main",{className:"col col--12"},n.createElement("div",{className:"row"},a.map((function(e){var t=e.content;return n.createElement("div",{className:"col col--4 row-preview"},n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null)))}))),n.createElement(c,{metadata:t})))))}},2053:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7294),r=a(6010),l=a(2859),i=a(9960),m=a(4996),o="blogPostTitle_bv-i",c="blogPostDate_gBjs",s=["January","February","March","April","May","June","July","August","September","October","November","December"];var g=function(e){e.children;var t=e.frontMatter,a=e.metadata,g=e.truncated,d=e.isBlogPostPage,p=void 0!==d&&d,u=a.date,v=a.permalink,E=a.tags,b=a.readingTime,h=t.author,_=t.title,N=t.image,f=t.keywords,k=t.description,w=t.header_image_url;w=(0,m.Z)(w);var y,Z,T,I,C,M=t.author_url||t.authorURL,P=(t.author_title||t.authorTitle,t.author_image_url||t.authorImageURL),x=(0,m.Z)(N,{absolute:!0});return n.createElement("div",{className:"card"},n.createElement("div",{className:"card__image"},n.createElement("img",{src:w,alt:"Image alt text",title:"Logo Title Text 1"})),n.createElement("div",{className:"card__body"},n.createElement(l.Z,null,f&&f.length&&n.createElement("meta",{name:"keywords",content:f.join(",")}),N&&n.createElement("meta",{property:"og:image",content:x}),N&&n.createElement("meta",{name:"twitter:image",content:x}),N&&n.createElement("meta",{name:"twitter:image:alt",content:"Image for "+_})),n.createElement("article",null,(y=p?"h1":"h2",Z=u.substring(0,10).split("-"),T=Z[0],I=s[parseInt(Z[1],10)-1],C=parseInt(Z[2],10),n.createElement("header",null,n.createElement(y,{style:{fontFamily:"InterCustom",fontSize:16},className:(0,r.Z)("margin-bottom--sm",o)},p?_:n.createElement(i.Z,{to:v},_)),n.createElement("p",{style:{fontFamily:"InterCustom",fontSize:14,lineHeight:1.2}},k),n.createElement("div",{className:"avatar margin-vert--md"},P&&n.createElement("a",{className:"avatar__photo-link avatar__photo",href:M,target:"_blank",rel:"noreferrer noopener"},n.createElement("img",{src:P,alt:h})),n.createElement("div",{className:"avatar__intro"},h&&n.createElement(n.Fragment,null,n.createElement("time",{dateTime:u,className:c},I," ",C,", ",T," ",b&&n.createElement(n.Fragment,null," \xb7 ",Math.ceil(b)," min read"))))))),(E.length>0||g)&&n.createElement("footer",{className:"row margin-vert--sm"},E.length>0&&n.createElement("div",{className:"col"},E.map((function(e){var t=e.label,a=e.permalink;return n.createElement("span",{className:"badge badge--primary"},n.createElement(i.Z,{key:a,to:a},t))})))))))}}}]);