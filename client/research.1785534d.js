import{S as e,i as a,s as n,e as t,t as s,a as i,b as l,f as r,g as o,d as c,c as d,j as h,m,k as g,l as u,n as p,q as f,o as v}from"./client.aae54561.js";var y=[{name:"Bayesian Deep Learning",image:"image/research/bayesian.png",description:"Modern deep neural networks are typically overparameterized and thus under-specified by the available data.\nIn other words, deep neural networks often contain multiple solutions which can express hypotheses describing the data.\nWhile the classical training of deep neural networks aims to find a single solution, the Bayesian approach considers multiple possible solutions by performing marginalization.\nWe are studying various sub-fields involving deep neural networks from the Bayesian perspective.\n"},{name:"Meta-Learning",image:"image/research/meta-learning.png",description:"Meta-learning refers to algorithms that learn how to learn; more broadly, any algorithm that uses meta-knowledge to facilitate other learning tasks is an instance of meta-learning.\nUnlike hand-designed learning algorithms, meta-learned algorithms can directly leverage common structure or inherent knowledge extracted from multiple related tasks.\nThis is essential for human-like AI capabilities such as continuously learning or processing multimodal data.\nIn our lab, we are interested in the fundamentals of meta-learning and its applications.\nSpecifically, we develop general meta-learning algorithms that learn meta-knowledge under real-world constraints, such as in settings with limited data.\nWe also formulate domain-specific meta-learning methods for problem settings such as domain generalization, generative modeling, and Bayesian learning.\n"},{name:"Healthcare",image:"image/research/healthcare.png",description:"Detecting cancer was doctors’ exclusive work before. Nowadays, thanks to the development of WSI(whole slide image), AI can detect cancer either.\nAS WSI is too big to fit into modern CNN architectures, it is divided into thousand of patches.\nAlso, there are only about 1000 WSI labels per dataset which easily provokes an over-fitting problem.\nOur lab focuses on multiple instance learning, where only slide-level labels are given.\nWe are trying to make pseudo-WSI labels by using information between patches. Furthermore, we are interested in self-supervised learning to extract adequate features for WSI.\nWe are also studying a reliable medical classification model based on multimodal data (MRI, natural language, omics, etc.) by applying confidence estimation through Bayesian deep learning and interpretability using explainable AI techniques.\n"}];function b(e,a,n){const t=e.slice();return t[0]=a[n],t}function w(e){let a,n,f,v,y,b,w,k,I,W,S=e[0].name+"",x=e[0].description+"";return{c(){a=t("div"),n=t("h2"),f=s(S),v=i(),y=t("p"),b=s(x),w=i(),k=t("img"),W=i(),this.h()},l(e){a=l(e,"DIV",{});var t=r(a);n=l(t,"H2",{class:!0});var s=r(n);f=o(s,S),s.forEach(c),v=d(t),y=l(t,"P",{class:!0});var i=r(y);b=o(i,x),i.forEach(c),w=d(t),k=l(t,"IMG",{src:!0,alt:!0,class:!0}),W=d(t),t.forEach(c),this.h()},h(){h(n,"class","svelte-18ll25p"),h(y,"class","svelte-18ll25p"),m(k.src,I=e[0].image||"image/dummy_wide.svg")||h(k,"src",I),h(k,"alt","..."),h(k,"class","svelte-18ll25p")},m(e,t){g(e,a,t),u(a,n),u(n,f),u(a,v),u(a,y),u(y,b),u(a,w),u(a,k),u(a,W)},p:p,d(e){e&&c(a)}}}function k(e){let a,n,s,o=y,m=[];for(let a=0;a<o.length;a+=1)m[a]=w(b(e,o,a));return{c(){a=i(),n=t("main"),s=t("div");for(let e=0;e<m.length;e+=1)m[e].c();this.h()},l(e){f('[data-svelte="svelte-2sbtyy"]',document.head).forEach(c),a=d(e),n=l(e,"MAIN",{});var t=r(n);s=l(t,"DIV",{class:!0});var i=r(s);for(let e=0;e<m.length;e+=1)m[e].l(i);i.forEach(c),t.forEach(c),this.h()},h(){document.title="SIML - Research",h(s,"class","content svelte-18ll25p")},m(e,t){g(e,a,t),g(e,n,t),u(n,s);for(let e=0;e<m.length;e+=1)m[e].m(s,null)},p(e,[a]){if(0&a){let n;for(o=y,n=0;n<o.length;n+=1){const t=b(e,o,n);m[n]?m[n].p(t,a):(m[n]=w(t),m[n].c(),m[n].m(s,null))}for(;n<m.length;n+=1)m[n].d(1);m.length=o.length}},i:p,o:p,d(e){e&&c(a),e&&c(n),v(m,e)}}}class I extends e{constructor(e){super(),a(this,e,null,k,n,{})}}export{I as default};
