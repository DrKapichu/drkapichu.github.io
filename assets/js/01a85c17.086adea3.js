"use strict";(self.webpackChunkdrkapichu=self.webpackChunkdrkapichu||[]).push([[4013],{6962:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var r=a(7294),l=a(3366),n=a(6010),s=a(2997),c=a(9960),i="sidebar_q+wC",m="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",u="sidebarItem_cjdF",g="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs",b=a(5999);function E(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var p=["sidebar","toc","children"];var v=function(e){var t=e.sidebar,a=e.toc,c=e.children,i=(0,l.Z)(e,p),m=t&&t.items.length>0;return r.createElement(s.Z,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(E,{sidebar:t})),r.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&r.createElement("div",{className:"col col--2"},a))))},k="tag_6TIk",h="tagRegular_fTkM",f="tagWithCount_4sRq";function N(e){var t=e.permalink,a=e.label,l=e.count;return r.createElement(c.Z,{href:t,className:(0,n.Z)(k,l?f:h)},a,l&&r.createElement("span",null,l))}var _=a(3810),Z="tag_7kA+";function I(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:Z},r.createElement(N,e))}))),r.createElement("hr",null))}var w=function(e){var t=e.tags,a=(0,_.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(I,{key:e.letter,letterEntry:e})})))};var y=function(e){var t=e.tags,a=e.sidebar,l=(0,_.MA)();return r.createElement(v,{title:l,wrapperClassName:_.kM.wrapper.blogPages,pageClassName:_.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,l),r.createElement(w,{tags:Object.values(t)}))}}}]);