/*! For license information please see c4f5d8e4.195fd066.js.LICENSE.txt */
(self.webpackChunkdrkapichu=self.webpackChunkdrkapichu||[]).push([[4195,2535],{4823:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return I}});var r=a(7294),n=a(6010),i=a(2997),o=a(9960),l=a(2263),s=a(4996),c="heroBanner_4JBe",m="card_skNW",u="mainCardColumn_X1Sj",p=a(7462),d=a(3366),f=a(4184),g=a.n(f),h=r.createContext({});h.Consumer,h.Provider;function b(e,t){var a=(0,r.useContext)(h);return e||a[t]||t}var v=["bsPrefix","className","noGutters","as"],y=["xl","lg","md","sm","xs"],k=r.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.noGutters,o=e.as,l=void 0===o?"div":o,s=(0,d.Z)(e,v),c=b(a,"row"),m=c+"-cols",u=[];return y.forEach((function(e){var t,a=s[e];delete s[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&u.push(""+m+r+"-"+t)})),r.createElement(l,(0,p.Z)({ref:t},s,{className:g().apply(void 0,[n,c,i&&"no-gutters"].concat(u))}))}));k.displayName="Row",k.defaultProps={noGutters:!1};var E=k,x=["bsPrefix","className","as"],N=["xl","lg","md","sm","xs"],w=r.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.as,o=void 0===i?"div":i,l=(0,d.Z)(e,x),s=b(a,"col"),c=[],m=[];return N.forEach((function(e){var t,a,r,n=l[e];if(delete l[e],"object"==typeof n&&null!=n){var i=n.span;t=void 0===i||i,a=n.offset,r=n.order}else t=n;var o="xs"!==e?"-"+e:"";t&&c.push(!0===t?""+s+o:""+s+o+"-"+t),null!=r&&m.push("order"+o+"-"+r),null!=a&&m.push("offset"+o+"-"+a)})),c.length||c.push(s),r.createElement(o,(0,p.Z)({},l,{ref:t,className:g().apply(void 0,[n].concat(c,m))}))}));w.displayName="Col";var S=w,_=a(5641);function Z(e){var t=e.title,a=e.img,n=e.description,i=e.href;return r.createElement(S,{className:u},r.createElement("h1",{style:{fontSize:24}}," ",r.createElement(o.Z,{to:i},t)),a&&r.createElement("div",{style:{paddingLeft:40,paddingRight:40,paddingTop:20,paddingBottom:20}},r.createElement("img",{src:(0,s.Z)(a)})),r.createElement("p",{style:{color:"black",marginBottom:0}},n))}var I=function(){return(0,l.Z)().siteConfig,r.createElement(i.Z,{title:"datacraft - the club for data scientists",description:"datacraft - the club for data scientists. Inside the community",keywords:["datacraft","club","community","Data Science","Machine Learning","Artificial Intelligence"]},r.createElement("header",{className:(0,n.Z)("hero hero--primary",c),style:{backgroundImage:"url("+(0,s.Z)("img/HomePageIllustration_blank.png")+")",backgroundSize:"cover",backgroundPosition:"bottom",minHeight:"calc(100vh - 200px)",zIndex:-1}},r.createElement("div",{className:(0,n.Z)("container",m)},r.createElement("h1",{className:"hero__subtitle",style:{color:"#0b7c39",fontSize:"40px"}},r.createElement("img",{src:"img/datacraft_logo_full.png",alt:" ",width:"250",height:"40"})),r.createElement("h1",{className:"hero__subtitle",style:{color:"black"}},"Welcome to the datacraft club blog!"),r.createElement("p",{className:"hero__subtitle",style:{color:"black",marginBottom:0}},"Inside the community of data scientists"))),r.createElement("main",{style:{marginTop:"-40px"}},r.createElement("div",{className:(0,n.Z)("container",m)},r.createElement(E,null,r.createElement(Z,{title:"Blog",href:"/blog",img:"img/icons/Search engine _Monochromatic.svg",description:"Browse our latest articles and experiments on Data Science & AI"}),r.createElement(Z,{title:"Open Source",href:"/opensource",img:"img/icons/World wide web_Monochromatic.svg",description:"Discover our open source contributions to the Data Science community"}))),r.createElement("div",{className:(0,n.Z)("container",m)},r.createElement(E,null,r.createElement(Z,{title:"Our latest blog posts",href:"",description:r.createElement(r.Fragment,null,r.createElement("ul",{style:{listStyleType:"none",padding:0,margin:0}},_.items.slice(0,5).map((function(e,t){return r.createElement("li",{key:t},r.createElement("a",{href:""+e.permalink},e.title))}))))})))))}},4184:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)){if(a.length){var o=n.apply(null,a);o&&e.push(o)}}else if("object"===i)if(a.toString===Object.prototype.toString)for(var l in a)r.call(a,l)&&a[l]&&e.push(l);else e.push(a.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},5641:function(e){"use strict";e.exports=JSON.parse('{"title":"Recent posts","items":[{"title":"An exploration of autoML frameworks and libraries for a possible workshop","permalink":"/blog/automl-frameworks-and-libraries"},{"title":"Fairness in AI - Identify and tackle biases","permalink":"/blog/identify-and-tackle-biases"},{"title":"Un petit m\xe9mo \xe0 propos de Kubernetes","permalink":"/blog/sense4data-kubernetes"},{"title":"Fairness in AI - How a benchathon unlocked our knowledge","permalink":"/blog/AI-Fairness-et-benchathon2"},{"title":"Comment nos pr\xe9jug\xe9s deviennent un probl\xe8me \xe9thique pour une intelligence artificielle ?","permalink":"/blog/Des-biais-cognitifs-aux-biais-des-algorithmes"}]}')}}]);