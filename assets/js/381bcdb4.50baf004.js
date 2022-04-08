"use strict";(self.webpackChunkdrkapichu=self.webpackChunkdrkapichu||[]).push([[9214],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(a),d=i,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var h=2;h<r;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6793:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},assets:function(){return c},toc:function(){return u},default:function(){return d}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),o=["components"],s={slug:"AI-Fairness-et-benchathon2",title:"Fairness in AI - How a benchathon unlocked our knowledge",author:"Antoine Isnardy",author_title:"Lead Data Scientist at Danone",author_url:"mailto:antoine.isnardy@danone.com",header_image_url:"img/blog/AIFairness-benchathon4.jpg",tags:["benchathon","fairness","aif360","fairlearn","ethicalai"],description:"Benchmark of Python packages for AI fairness",keywords:["fairness","ethicalai","Aequitas","Shapash","aif360","Dalex","fairlearn","What if tool"]},l=void 0,h={permalink:"/blog/AI-Fairness-et-benchathon2",editUrl:"https://github.com/DrKapichu/drkapichu.github.io/tree/main/blog/blog/2022-04-05-AIFairness-benchathon.md",source:"@site/blog/2022-04-05-AIFairness-benchathon.md",title:"Fairness in AI - How a benchathon unlocked our knowledge",description:"Benchmark of Python packages for AI fairness",date:"2022-04-05T00:00:00.000Z",formattedDate:"April 5, 2022",tags:[{label:"benchathon",permalink:"/blog/tags/benchathon"},{label:"fairness",permalink:"/blog/tags/fairness"},{label:"aif360",permalink:"/blog/tags/aif-360"},{label:"fairlearn",permalink:"/blog/tags/fairlearn"},{label:"ethicalai",permalink:"/blog/tags/ethicalai"}],readingTime:10.965,truncated:!0,authors:[{name:"Antoine Isnardy",title:"Lead Data Scientist at Danone",url:"mailto:antoine.isnardy@danone.com"}],nextItem:{title:"Fairness in AI - How a benchathon unlocked our knowledge",permalink:"/blog/AI-Fairness-et-benchathon"}},c={authorsImageUrls:[void 0]},u=[{value:"Benchathon as an innovation catalyst",id:"benchathon-as-an-innovation-catalyst",children:[],level:2},{value:"Highlight of 6 ethical/fairness libraries",id:"highlight-of-6-ethicalfairness-libraries",children:[{value:"Shapash",id:"shapash",children:[],level:3},{value:"What if tool",id:"what-if-tool",children:[],level:3},{value:"Aequitas",id:"aequitas",children:[],level:3},{value:"Fairlearn",id:"fairlearn",children:[],level:3},{value:"AIF360",id:"aif360",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"fairness-in-ai---how-a-benchathon-unlocked-our-knowledge"},"Fairness in AI - How a benchathon unlocked our knowledge"),(0,r.kt)("p",null,"Let's all board on a journey to the land of AI fairness that we, a group of private players (Danone, Ekimetrics, datacraft), researchers (Telecom Paris, Inria), and students (Universit\xe9 de Cergy), partnered to uncover fairness & ethics in Artificial Intelligence from a practical standpoint. Through this journey the group tried to tackle the following challenge: \u201chow should a Data Scientist concretely react when exposed to fairness concerns?\u201d.  "),(0,r.kt)("p",null,"We started with a series of workshops to discuss the existing tools and methods, assess the needs and define an ",(0,r.kt)("a",{parentName:"p",href:"https://datacraft-paris.github.io/trustworthyai/"},"ethical charter"),". This led to the writing of a first popularisation article, in French, which you can find ",(0,r.kt)("a",{parentName:"p",href:"./biais-humains-et-algorithmes"},"here"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Then we continued our journey with a benchathon - definition below - in which the group participated to get a quick and documented opinion of an already rich fairness/ethical ecosystem. It first explains how the concept of benchathon accelerated our practical grasp of the topic, and then explores the first conclusions drawn about the fairness ecosystem. You can find the code developped during this benchathon on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datacraft-paris/Fairness-Benchathon"},"datacraft's GitHub repo"),"."),(0,r.kt)("h2",{id:"benchathon-as-an-innovation-catalyst"},"Benchathon as an innovation catalyst"),(0,r.kt)("p",null,"At this stage of our \u201cfairness journey\u201d, we had a decent high level understanding of what fairness could imply in real life. It was then the right time to start acting concrete: try and derive a pragmatic methodology, even if it implied implementing our own routines."),(0,r.kt)("p",null,"To that end, a very first step was to make sure we\u2019d not reinvent the wheel, and we\u2019d plainly benefit from existing open source contributions. This happened during a one-day benchathon. If you work in tech, you may already be familiar with the following two notions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Benchmark: ",(0,r.kt)("em",{parentName:"li"},"gathering and comparing qualitative information about how an activity is conducted through people, processes, and technology")," (Source: ",(0,r.kt)("a",{parentName:"li",href:"https://www.apqc.org/blog/what-are-four-types-benchmarking"},"https://www.apqc.org/blog/what-are-four-types-benchmarking"),")  "),(0,r.kt)("li",{parentName:"ul"},"Hackathon: ",(0,r.kt)("em",{parentName:"li"},"[short]"," event ","[...]"," in which computer programmers and others involved in software development ","[...]"," collaborate intensively on software projects")," (Source: ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hackathon"},"https://en.wikipedia.org/wiki/Hackathon"),")  ")),(0,r.kt)("p",null,"Hackathons usually involve teams that compete on the \u201csame topic\u201d for 2 to 3 days. Because we were limited in time - 1 day, rather than focusing all on the same \u201cthing\u201d, we decided to make the most out of the presence of 9 data scientists: we shared and split between us the technical analysis of several fairness open source libraries - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Trusted-AI/AIF360"},"AIF360"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MAIF/shapash"},"Shapash"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dssg/aequitas"},"Aequitas"),", ",(0,r.kt)("a",{parentName:"p",href:"https://pair-code.github.io/what-if-tool/"},"What if tool"),", ",(0,r.kt)("a",{parentName:"p",href:"https://fairlearn.org/"},"Fairlearn"),". Hence the concept of benchathon."),(0,r.kt)("p",null,"Even though all of us were entitled as \u201cData Scientists\u201d, we all came from different structures, different backgrounds, and different (coding) habits. That diversity definitely triggered (and still does) great discussions and perspectives along the initiative. Still, an important step during the benchathon was to settle on an interpretation grid that would make the outcome as reusable and general as possible, and as unbiased as possible - in line with the topic then :). A few criteria were identified:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"   ",(0,r.kt)("strong",null,"Criteria"),"                  "),(0,r.kt)("th",null,"    ",(0,r.kt)("strong",null,"Description"),"                                                                                                             "),(0,r.kt)("th",null,"   ",(0,r.kt)("strong",null,"Scale"),"           "),"  "),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"left",bgcolor:"white"}," Installation  "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," How easy is it to get started?                                                                               "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," 1-5 "),"  "),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"left",bgcolor:"white"}," Usability     "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," How easy to use is the API?                                                                                  "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," 1-5 "),"  "),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"left",bgcolor:"white"}," Documentation "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," How well documented is the library?                                                                          "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," 1-5 "),"  "),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"left",bgcolor:"white"}," Completeness  "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," Does the library perform everything it is supposed to?                                                       "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," 1-5 "),"  "),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"left",bgcolor:"white"}," Reliability   "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," Does the library seem reliable? (code quality, tests, \u2026)                                                     "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," 1-5 "),"  "),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"left",bgcolor:"white"}," Legitimacy    "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," Is the library popular within the community? (number of stars on GitHub, latest commit, number of issues, \u2026) "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," 1-5 "),"  "),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"left",bgcolor:"white"}," Future        "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," Gut instinct - would you trust it and use it in real projects?                                               "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," Y/N "),"  "),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"left",bgcolor:"white"}," Weaknesses    "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," What is currently missing?                                                                                   "),(0,r.kt)("td",{align:"left",bgcolor:"white"}," N/A "),"  ")),(0,r.kt)("p",null,"That being set, what was important was also to pace the day, so that despite the fact that small groups worked independently, we always kept an overall coherence and dynamics. It meant:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mini sprints of 1,5 hours"),(0,r.kt)("li",{parentName:"ul"},"At the end of each mini sprint, a quick roundtable to share insights or blocking points, and get challenged by the whole group"),(0,r.kt)("li",{parentName:"ul"},"Lunch break altogether: everyone brought something to share. This was a great moment of conviviality. It would even seem that a new datacraft initiative was born at this very moment, stay tuned!"),(0,r.kt)("li",{parentName:"ul"},"At the end of the day, wrap up session during which each group made a demo of the library it spent the day on, and made sure to fill out above-mentioned criteria. The latter was especially important because this is what helps us today to have a concrete reference that every one can refer to.")),(0,r.kt)("p",null,"Taking a step back, below are a few takeaways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This benchathon was extremely productive: in the matter of only a day, our practical grasp of the fairness/ethical ecosystem clearly passed a milestone (see next section)."),(0,r.kt)("li",{parentName:"ul"},"All people around the table had a developer background, and the same objective - namely, uncovering the fairness topic from a technical & practical standpoint. It helped to get started fairly quickly, and proved that this format was a great fit for that audience and purpose."),(0,r.kt)("li",{parentName:"ul"},"One mistake we made was not to invest enough time beforehand in mapping the main open source libraries available in the AI community. It turns out we missed what would become our GO TO in the future: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ModelOriented/DALEX"},"Dalex"),".")),(0,r.kt)("h2",{id:"highlight-of-6-ethicalfairness-libraries"},"Highlight of 6 ethical/fairness libraries"),(0,r.kt)("p",null,"If you are further interested in the exhaustive findings on the five libraries that were studied during the benchathon, we summarized our conclusions in this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datacraft-paris/Fairness-Benchathon/blob/master/docs/Benchathon-summary.pdf"},"file"),". The following section aims at providing a (subjective) summary of these libraries, in increasing relevance order, with respect to fairness / ethics."),(0,r.kt)("h3",{id:"shapash"},"Shapash"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MAIF/shapash"},"Open source library")," developed by MAIF - a French insurance actor, and Quantmetry - a French AI consultancy, that mainly focuses on interpretability (no built-in fairness-oriented feature). It acts as a layer on top of the usual interpretability toolbox (feature importance, SHAP values, \u2026). It comes with a very decent web interface, high quality code, and a great community/documentation. It also provides an audit report of the project (from data prep to modeling, to exploratory analysis)."),(0,r.kt)("p",null,"In a nutshell: great project, but not that relevant (yet?) for fairness topics."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of Shapash.",src:a(1683).Z,title:"Screenshot of Shapash."})),(0,r.kt)("div",{style:{textAlign:"center",marginLeft:"9em",marginRight:"9em",marginBottom:"5em"}},"Screenshot of Shapash. ",(0,r.kt)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/MAIF/shapash"},"Credits"),"."),(0,r.kt)("h3",{id:"what-if-tool"},"What if tool"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pair-code.github.io/what-if-tool/"},"Open source interface")," developed by Google. It mainly aims at conducting counterfactual analysis (\u201cwhat would be the machine learning model prediction if we changed the value of that particular attribute, like the sex e.g.?\u201d). It comes with a decent web interface, especially to deal with unstructured data like images. Documentation is however not handy to deal with."),(0,r.kt)("p",null,"In a nutshell: great interface. However, counterfactual analysis is only one (important) feature among the different aspects related to fairness, which in turn does not justify a lock-in with that specific tool."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of What-if tool.",src:a(2048).Z,title:"Screenshot of What-if tool."})),(0,r.kt)("div",{style:{textAlign:"center",marginLeft:"9em",marginRight:"9em",marginBottom:"5em"}},"Screenshot of What-if tool. ",(0,r.kt)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/pair-code/what-if-tool"},"Credits"),"."),(0,r.kt)("h3",{id:"aequitas"},"Aequitas"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://aequitas.dssg.io/"},"Aequitas")," is a bias and audit toolkit developed by Carnegie Mellon University. It aims at spotting unfair allocation compared to population repartition or wrong decisions about certain groups of people. It comes with a web interface (which we could not make work) and a Python library to help compute fairness metrics. Documentation is decent, especially their representation of the ",(0,r.kt)("a",{parentName:"p",href:"http://www.datasciencepublicpolicy.org/our-work/tools-guides/aequitas/"},'"fairness tree"'),", which helps to navigate the (many and ambiguous) fairness metrics, depending on the use case."),(0,r.kt)("p",null,"In a nutshell: Aequitas is a tool that has been available for quite some time now, but that does not benefit from a living community. To be kept under the radar (or contribute to!)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of Aequitas web application.",src:a(265).Z,title:"Screenshot of Aequitas web application."})),(0,r.kt)("div",{style:{textAlign:"center",marginLeft:"9em",marginRight:"9em",marginBottom:"5em"}},"Screenshot of Aequitas web application. ",(0,r.kt)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://aequitas.dssg.io/"},"Credits"),"."),(0,r.kt)("h3",{id:"fairlearn"},"Fairlearn"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://fairlearn.org/"},"Fairlearn")," is an open source library maintained by diverse contributors (from Microsoft, Zalando, \u2026). It aims at tackling each step of the fairness value chain. It implements fairness metrics, of which you have a summary below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure complemented by datacraft&#39;s initiative",src:a(5127).Z,title:"Figure complemented by datacraft's initiative"})),(0,r.kt)("div",{style:{textAlign:"center",marginLeft:"9em",marginRight:"9em",marginBottom:"5em"}},"Credits: ",(0,r.kt)("a",{href:"#reference"},"[1]")," - complemented by datacraft\u2019s ethical initiative."),(0,r.kt)("p",null,"Fairlearn implements mitigation techniques:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pre-processing methods: alter a training set before training a model (example in fairlearn: removing sensitive correlations)"),(0,r.kt)("li",{parentName:"ul"},"In-processing method: train a model (or a sequence of models) accounting for fairness constraints (example in fairlearn: exponentiated gradient ",(0,r.kt)("a",{parentName:"li",href:"#reference"},"[2]"),")"),(0,r.kt)("li",{parentName:"ul"},"Post-processing methods: alter predictions to account for fairness constraints, once a model is trained (example in fairlearn: threshold optimization post processing algorithm ",(0,r.kt)("a",{parentName:"li",href:"#reference"},"[3]"),")")),(0,r.kt)("p",null,"It also tries to go beyond the usual binary classification problem, which is the usual go-to when uncovering the fairness topic (e.g. giving a try at regression). However, making our way through the \u201cget started\u201d procedure or the documentation - yet well designed and appealing, was no easy task. Note that the library also comes with nice dashboards that allow, among others, model comparison."),(0,r.kt)("p",null,"In a nutshell: promising and active library for fairness topics. Accessibility could be improved. To definitely keep an eye on (or contribute to!)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the Fairlearn dashboard.",src:a(1657).Z,title:"Screenshot of the Fairlearn dashboard."})),(0,r.kt)("div",{style:{textAlign:"center",marginLeft:"9em",marginRight:"9em",marginBottom:"5em"}},"Screenshot of the Fairlearn dashboard. ",(0,r.kt)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://opendatascience.com/how-to-assess-ai-systems-fairness-and-mitigate-any-observed-unfairness-issues/"},"Credits"),"."),(0,r.kt)("h3",{id:"aif360"},"AIF360"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://aif360.mybluemix.net/"},"AIF360")," is an open source library developed by IBM. From our perspective, and before doing this initiative, this library was considered as the go-to for tackling fairness topics. It comes with an online tool, implements a wide range of mitigation techniques:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pre-processing methods among which reweighting ",(0,r.kt)("a",{parentName:"li",href:"#reference"},"[4]"),", or learning fair representations ",(0,r.kt)("a",{parentName:"li",href:"#reference"},"[5]")),(0,r.kt)("li",{parentName:"ul"},"In-Processing methods: grid search reduction ",(0,r.kt)("a",{parentName:"li",href:"#reference"},"[6, 7]")),(0,r.kt)("li",{parentName:"ul"},"Post-processing methods: equalized odds postprocessing ",(0,r.kt)("a",{parentName:"li",href:"#reference"},"[8, 9]"))),(0,r.kt)("p",null,"It also benefits from a wide community, and comes with a user-friendly web interface. "),(0,r.kt)("p",null,"However rich in terms of features / mitigation techniques, the documentation is quite poor (it is not unusual to go and directly look into the source code to get answers). Besides, (useful) snippets of code are disseminated in various Jupyter notebooks, which slows down the appropriation. Last, some choices regarding data representation (formatting) and/or object declaration/instantiation (like the main explainer object, which is quite verbose), led us to troubles when trying to get used to the library."),(0,r.kt)("p",null,"In a nutshell: AIF360 is a very rich and mature ecosystem. Accessibility is however currently an obstacle to its full exploitation."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of AIF360.",src:a(3503).Z,title:"Screenshot of AIF360."})),(0,r.kt)("div",{style:{textAlign:"center",marginLeft:"9em",marginRight:"9em",marginBottom:"5em"}},"Screenshot of AIF360. ",(0,r.kt)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://aif360.mybluemix.net/"},"Credits"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"At this point in time, we had discovered very interesting libraries, some of them backed by great communities and capabilities. Still, some open points remained that we thought would be worth investing time on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There was no clear winner: each library came with pros and cons. An ideal tool should be able to combine the best of each."),(0,r.kt)("li",{parentName:"ul"},"All those tools were very much focused (and still are) on the tooling, namely implementing a wide set of mitigation techniques or fairness dashboards. However, we were still missing a systematic framework for tackling fairness topics, that not only would make practical tools available, but that would also provide the associated reasoning: what question should a data scientist ask themselves? In which situation? Who should take part in this or that sensitive decision with respect to the model, \u2026?")),(0,r.kt)("p",null,"This is what will be tackled in the third article of this series. We\u2019ll introduce Dalex, another library that will be used as a foundation to derive (our interpretation of) the whole reasoning when exposed to fairness / ethical concerns."),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,"[1]"," - Credits: Data Robot \u2013 Trusted AI 102: A Guide to Building Fair and Unbiased AI Systems",(0,r.kt)("br",{parentName:"p"}),"\n","[2]"," - ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1803.02453"},"Agarwal et al. (2018)  A Reductions Approach to Fair Classification"),(0,r.kt)("br",{parentName:"p"}),"\n","[3]"," - ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1610.02413.pdf"},"M. Hardt, E. Price, N. Srebro (2018) - Equality of Opportunity in Supervised Learning"),(0,r.kt)("br",{parentName:"p"}),"\n","[4]",' - F. Kamiran and T. Calders, "Data Preprocessing Techniques for Classification without Discrimination," Knowledge and Information Systems, 2012',(0,r.kt)("br",{parentName:"p"}),"\n","[5]",' - R. Zemel, Y. Wu, K. Swersky, T. Pitassi, and C. Dwork, "Learning Fair Representations." International Conference on Machine Learning, 2013',(0,r.kt)("br",{parentName:"p"}),"\n","[6]"," - ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1803.02453"},"A. Agarwal, A. Beygelzimer, M. Dudik, J. Langford, and H. Wallach (2018) - A Reductions Approach to Fair Classification - International Conference on Machine Learning"),(0,r.kt)("br",{parentName:"p"}),"\n","[7]"," - ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1905.12843"},"A. Agarwal, M. Dudik, and Z. Wu (2019) - Fair Regression: Quantitative Definitions and Reduction-based Algorithms - International Conference on Machine Learning"),(0,r.kt)("br",{parentName:"p"}),"\n","[8]",' - M. Hardt, E. Price, and N. Srebro, "Equality of Opportunity in Supervised Learning" Conference on Neural Information Processing Systems, 2016.',(0,r.kt)("br",{parentName:"p"}),"\n","[9]",' - G. Pleiss, M. Raghavan, F. Wu, J. Kleinberg, and K. Q. Weinberger, "On Fairness and Calibration," Conference on Neural Information Processing Systems, 2017.'))}d.isMDXComponent=!0},3503:function(e,t,a){t.Z=a.p+"assets/images/AIF360-9deb604be90f0ffe7f55d7bc381fcdbc.jpg"},265:function(e,t,a){t.Z=a.p+"assets/images/Aequitas-9c7a24656682c403120ea61fe07e2753.jpg"},5127:function(e,t,a){t.Z=a.p+"assets/images/Fairlearn-1-48ac6dab8d7e909d170a3d54c9eca17e.jpg"},1657:function(e,t,a){t.Z=a.p+"assets/images/Fairlearn-2-9d99856c58780c027ecfa7acc9ae0480.jpg"},1683:function(e,t,a){t.Z=a.p+"assets/images/Shapash-2a18e60b585020d550a6d7cba9e7eaa7.jpg"},2048:function(e,t,a){t.Z=a.p+"assets/images/What_if_tool-1bf8f4b04ca7846adc517306b1dd5f4a.jpg"}}]);