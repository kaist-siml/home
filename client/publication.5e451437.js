import{S as e,i as t,s as n,t as r,c as o,a,b as l,d as i,e as s,f as u,g as c,h,j as p,k as f,l as m,m as d,n as g,o as b,H as v,p as y,q as w,r as J,u as L,v as S,w as j,x as C,y as E,z as x,A as I}from"./client.488d2e83.js";function A(e){let t,n=e[0].title+"";return{c(){t=r(n)},l(e){t=o(e,n)},m(e,n){l(e,t,n)},p(e,r){1&r&&n!==(n=e[0].title+"")&&s(t,n)},d(e){e&&i(t)}}}function $(e){let t,n,a,u=e[0].title+"";return{c(){t=c("a"),n=r(u),this.h()},l(e){t=h(e,"A",{href:!0,target:!0,class:!0});var r=p(t);n=o(r,u),r.forEach(i),this.h()},h(){f(t,"href",a=e[0].url),f(t,"target","_blank"),f(t,"class","svelte-1t18id5")},m(e,r){l(e,t,r),m(t,n)},p(e,r){1&r&&u!==(u=e[0].title+"")&&s(n,u),1&r&&a!==(a=e[0].url)&&f(t,"href",a)},d(e){e&&i(t)}}}function H(e){let t,n,s,u=e[0].contribution+"";return{c(){t=r("("),n=new v,s=r(")"),this.h()},l(e){t=o(e,"("),n=a(e),s=o(e,")"),this.h()},h(){n.a=s},m(e,r){l(e,t,r),n.m(u,e,r),l(e,s,r)},p(e,t){1&t&&u!==(u=e[0].contribution+"")&&n.p(u)},d(e){e&&i(t),e&&n.d(),e&&i(s)}}}function k(e){let t,n=e[0].journal+"";return{c(){t=r(n)},l(e){t=o(e,n)},m(e,n){l(e,t,n)},p(e,r){1&r&&n!==(n=e[0].journal+"")&&s(t,n)},d(e){e&&i(t)}}}function Y(e){let t,n=e[0].booktitle+"";return{c(){t=r(n)},l(e){t=o(e,n)},m(e,n){l(e,t,n)},p(e,r){1&r&&n!==(n=e[0].booktitle+"")&&s(t,n)},d(e){e&&i(t)}}}function P(e){let t,n=e[0].year+"";return{c(){t=r(n)},l(e){t=o(e,n)},m(e,n){l(e,t,n)},p(e,r){1&r&&n!==(n=e[0].year+"")&&s(t,n)},d(e){e&&i(t)}}}function B(e){let t,n,a,u=e[0].comment+"";return{c(){t=r("("),n=r(u),a=r(")")},l(e){t=o(e,"("),n=o(e,u),a=o(e,")")},m(e,r){l(e,t,r),l(e,n,r),l(e,a,r)},p(e,t){1&t&&u!==(u=e[0].comment+"")&&s(n,u)},d(e){e&&i(t),e&&i(n),e&&i(a)}}}function T(e){let t,n,r=e[0].note+"";return{c(){t=new v,n=u(),this.h()},l(e){t=a(e),n=u(),this.h()},h(){t.a=n},m(e,o){t.m(r,e,o),l(e,n,o)},p(e,n){1&n&&r!==(r=e[0].note+"")&&t.p(r)},d(e){e&&i(n),e&&t.d()}}}function K(e){let t,n,a,s;return{c(){t=c("b"),n=c("a"),a=r("Code"),this.h()},l(e){t=h(e,"B",{class:!0});var r=p(t);n=h(r,"A",{href:!0,target:!0,class:!0});var l=p(n);a=o(l,"Code"),l.forEach(i),r.forEach(i),this.h()},h(){f(n,"href",s=e[0].code),f(n,"target","_blank"),f(n,"class","svelte-1t18id5"),f(t,"class","code")},m(e,r){l(e,t,r),m(t,n),m(n,a)},p(e,t){1&t&&s!==(s=e[0].code)&&f(n,"href",s)},d(e){e&&i(t)}}}function M(e){let t,n,r,o,a,s,u,v,y,w,J,L,S,j,C;function E(e,t){return e[0].url?$:A}let x=E(e),I=x(e),M=e[0].contribution&&H(e);function N(e,t){return e[0].booktitle?Y:e[0].journal?k:void 0}let F=N(e),D=F&&F(e),V=e[0].year&&P(e),z=e[0].comment&&B(e),R=e[0].note&&T(e),G=e[0].code&&K(e);return{c(){t=c("article"),n=c("section"),r=c("b"),I.c(),o=d(),a=c("p"),s=d(),u=c("p"),M&&M.c(),v=d(),y=c("p"),D&&D.c(),w=d(),V&&V.c(),J=d(),z&&z.c(),L=d(),S=c("p"),R&&R.c(),j=d(),C=c("p"),G&&G.c(),this.h()},l(e){t=h(e,"ARTICLE",{class:!0});var l=p(t);n=h(l,"SECTION",{class:!0});var c=p(n);r=h(c,"B",{class:!0});var f=p(r);I.l(f),f.forEach(i),o=g(c),a=h(c,"P",{class:!0}),p(a).forEach(i),s=g(c),u=h(c,"P",{class:!0});var m=p(u);M&&M.l(m),m.forEach(i),v=g(c),y=h(c,"P",{class:!0});var d=p(y);D&&D.l(d),w=g(d),V&&V.l(d),J=g(d),z&&z.l(d),d.forEach(i),L=g(c),S=h(c,"P",{class:!0});var b=p(S);R&&R.l(b),b.forEach(i),j=g(c),C=h(c,"P",{class:!0});var E=p(C);G&&G.l(E),E.forEach(i),c.forEach(i),l.forEach(i),this.h()},h(){f(r,"class","title"),f(a,"class","svelte-1t18id5"),f(u,"class","svelte-1t18id5"),f(y,"class","svelte-1t18id5"),f(S,"class","svelte-1t18id5"),f(C,"class","svelte-1t18id5"),f(n,"class","svelte-1t18id5"),f(t,"class","svelte-1t18id5")},m(i,c){l(i,t,c),m(t,n),m(n,r),I.m(r,null),m(n,o),m(n,a),a.innerHTML=e[1],m(n,s),m(n,u),M&&M.m(u,null),m(n,v),m(n,y),D&&D.m(y,null),m(y,w),V&&V.m(y,null),m(y,J),z&&z.m(y,null),m(n,L),m(n,S),R&&R.m(S,null),m(n,j),m(n,C),G&&G.m(C,null)},p(e,[t]){x===(x=E(e))&&I?I.p(e,t):(I.d(1),I=x(e),I&&(I.c(),I.m(r,null))),e[0].contribution?M?M.p(e,t):(M=H(e),M.c(),M.m(u,null)):M&&(M.d(1),M=null),F===(F=N(e))&&D?D.p(e,t):(D&&D.d(1),D=F&&F(e),D&&(D.c(),D.m(y,w))),e[0].year?V?V.p(e,t):(V=P(e),V.c(),V.m(y,J)):V&&(V.d(1),V=null),e[0].comment?z?z.p(e,t):(z=B(e),z.c(),z.m(y,null)):z&&(z.d(1),z=null),e[0].note?R?R.p(e,t):(R=T(e),R.c(),R.m(S,null)):R&&(R.d(1),R=null),e[0].code?G?G.p(e,t):(G=K(e),G.c(),G.m(C,null)):G&&(G.d(1),G=null)},i:b,o:b,d(e){e&&i(t),I.d(),M&&M.d(),D&&D.d(),V&&V.d(),z&&z.d(),R&&R.d(),G&&G.d()}}}function N(e,t,n){let{paper:r}=t;const o=r.author.join(", ");return e.$$set=e=>{"paper"in e&&n(0,r=e.paper)},[r,o]}class F extends e{constructor(e){super(),t(this,e,N,M,n,{paper:0})}}var D=[{type:"preprint",title:"The Normal-Generalised Gamma-Pareto process: A novel pure-jump Lévy process with flexible tail and jump-activity properties",author:["Fadhel Ayed","<b>Juho Lee</b>","François Caron"],journal:"arXiv:2006.10968",url:"https://arxiv.org/abs/2006.10968"},{type:"preprint",title:"Deep amortized clustering",author:["<b>Juho Lee</b>","Yoonho Lee","Yee Whye Teh"],journal:"arXiv:1909.13433",url:"https://arxiv.org/abs/1909.13433",note:"A preliminary version of this work has been accepted to <a href='https://www.sets.parts'>NeurIPS 2019 Sets & Partitions workshop</a> as an oral presentation."},{type:"preprint",title:"A unified construction for series representations and finite approximations of completely random measures",author:["<b>Juho Lee</b>","Xenia Miscouridou","François Caron"],journal:"arXiv:1905.10733",url:"https://arxiv.org/abs/1905.10733"},{type:"preprint",title:"Adaptive network sparsification with dependent variational beta-Bernoulli dropout",author:["<b>Juho Lee</b>","Saehoon Kim","Jaehong Yoon","Hae Beom Lee","Eunho Yang","Sung Ju Hwang"],journal:"arXiv:1805.10896",url:"https://arxiv.org/abs/1805.10896v3"},{type:"conference",title:"Adversarial purification with score-based generative models",author:["<b>Jongmin Yoon</b>","Sung Ju Hwang","<b>Juho Lee</b>"],journal:"ICML",year:2021,comment:"To appear",url:"https://arxiv.org/abs/2106.06041",code:"https://github.com/jmyoon1/adp"},{type:"conference",title:"Learning to perturb word embeddings for out-of-distribution QA",author:["Seanie Lee","Minki Kang","<b>Juho Lee</b>","Sung Ju Hwang"],journal:"ACL",year:2021,comment:"To appear",url:"https://arxiv.org/abs/2105.02692"},{type:"conference",title:"SetVAE: learning hierarchical composition for generative modeling of set-structured data",author:["Jinwoo Kim","Jaehoon Yoo","<b>Juho Lee</b>","Seunghoon Hong"],journal:"CVPR",year:2021,comment:"To appear",url:"https://arxiv.org/abs/2103.15619",code:"https://github.com/jw9730/setvae"},{type:"conference",title:"Bootstrapping neural processes",author:["<b>Juho Lee</b>*","Yoonho Lee*","Jungtaek Kim","Eunho Yang","Sung Ju Hwang","Yee Whye Teh"],contribution:"*: Equal Contribution",journal:"NeurIPS",year:2020,url:"https://arxiv.org/abs/2008.02956"},{type:"conference",title:"Neural complexity measures",author:["Yoonho Lee","<b>Juho Lee</b>","Sung Ju Hwang","Eunho Yang","Seungjin Choi"],journal:"NeurIPS",year:2020,url:"https://arxiv.org/abs/2008.02953"},{type:"conference",title:"Cost-effective interactive attention learning with neural attention processes",author:["Jay Heo","Junhyeon Park","Hyewon Jeong","Kwang Joon Kim","<b>Juho Lee</b>","Eunho Yang","Sung Ju Hwang"],journal:"ICML",year:2020,url:"https://arxiv.org/abs/2006.05419"},{type:"conference",title:"Deep mixed effect model using Gaussian processes: a personalized and reliable prediction for healthcare",author:["Ingyo Chung","Saehoon Kim","<b>Juho Lee</b>","Sung Ju Hwang","Eunho Yang"],journal:"AAAI",year:2020,url:"https://arxiv.org/abs/1806.01551"},{type:"conference",title:"Beyond the Chinese restaurant and Pitman-Yor processes: statistical models with double power-law behavior",author:["Fadhel Ayed*","<b>Juho Lee</b>*","François Caron"],contribution:"*: Equal Contribution",journal:"ICML",year:2019,comment:"full oral presentation",url:"https://arxiv.org/abs/1902.04714"},{type:"conference",title:"Set transformer: a framework for attention-based permutation-invariant neural networks",author:["<b>Juho Lee</b>","Yoonho Lee","Jungtaek Kim","Adam R. Kosiorek","Seungjin Choi","Yee Whye Teh"],journal:"ICML",year:2019,url:"https://arxiv.org/abs/1810.00825v3"},{type:"conference",title:"Learning to propagate labels: transductive propagation network for few-shot learning",author:["Yanbin Liu","<b>Juho Lee</b>","Minseop Park","Saehoon Kim","Eunho Yang","Sung Ju Hwang","Yi Yang"],journal:"ICLR",year:2019,url:"https://arxiv.org/abs/1805.10002"},{type:"conference",title:"A Bayesian model for sparse graphs with flexible degree distribution and overlapping community structure",author:["<b>Juho Lee</b>","Lancelot F. James","Seungjin Choi","François Caron"],journal:"AISTATS",year:2019,comment:"oral presentation",url:"https://arxiv.org/abs/1810.01778",code:"https://github.com/OxCSML-BayesNP/BNRG"},{type:"conference",title:"Uncertainty-aware attention for reliable interpretation and prediction",author:["Jay Heo*","Hae Beom Lee*","Saehoon Kim","<b>Juho Lee</b>","Kwang Joon Kim","Eunho Yang","Sung Ju Hwang"],contribution:"*: Equal Contribution",journal:"NeurIPS",year:2018,url:"https://arxiv.org/abs/1805.09653"},{type:"conference",title:"Dropmax: adaptive variational softmax",author:["Hae Beom Lee","<b>Juho Lee</b>","Saehoon Kim","Eunho Yang","Sung Ju Hwang"],journal:"NeurIPS",year:2018,url:"https://arxiv.org/abs/1712.07834",code:"https://github.com/haebeom-lee/dropmax"},{type:"conference",title:"Bayesian inference on random simple graphs with power law degree distributions",author:["<b>Juho Lee</b>","Creighton Heakulani","Zoubin Ghahramani","Lancelot F. James","Seingjin Choi"],journal:"ICML",year:2017,comment:"",url:"http://proceedings.mlr.press/v70/lee17a.html",code:"https://github.com/juho-lee/powerlawgraph"},{type:"conference",title:"Finite-dimensional BFRY priors and variational Bayesian inference for power law models",author:["<b>Juho Lee</b>","Lancelot F. James","Seungjin Choi"],journal:"NIPS",year:2016,url:"https://papers.nips.cc/paper/6348-finite-dimensional-bfry-priors-and-variational-bayesian-inference-for-power-law-models"},{type:"conference",title:"Tree-guided MCMC inference for normalized random measure mixture models",author:["<b>Juho Lee</b>","Seungjin Choi"],journal:"NIPS",year:2015,url:"https://papers.nips.cc/paper/5800-tree-guided-mcmc-inference-for-normalized-random-measure-mixture-models",code:"https://github.com/juho-lee/nrmm.cpp"},{type:"conference",title:"Bayesian hierarchical clustering with exponential family: small-variance asymptotics and reducibility",author:["<b>Juho Lee</b>","Seungjin Choi"],journal:"AISTATS",year:2015,url:"http://proceedings.mlr.press/v38/lee15c.html"},{type:"conference",title:"Incremental tree-based inference with dependent normalized random measures",author:["<b>Juho Lee</b>","Seungjin Choi"],journal:"AISTATS",year:2014,url:"http://proceedings.mlr.press/v33/lee14.html"},{type:"conference",title:"Online video segmentation by Bayesian split-merge clustering",author:["<b>Juho Lee</b>","Suha Kwak","Bohyung Han","Seungjin Choi"],journal:"ECCV",year:2012,url:"https://link.springer.com/chapter/10.1007/978-3-642-33765-9_61"}];function V(e,t,n){const r=e.slice();return r[3]=t[n],r}function z(e,t,n){const r=e.slice();return r[3]=t[n],r}function R(e,t,n){const r=e.slice();return r[3]=t[n],r}function G(e){let t,n;return t=new F({props:{paper:e[3]}}),{c(){J(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p:b,i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){C(t,e)}}}function X(e){let t,n;return t=new F({props:{paper:e[3]}}),{c(){J(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p:b,i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){C(t,e)}}}function q(e){let t,n;return t=new F({props:{paper:e[3]}}),{c(){J(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,r){S(t,e,r),n=!0},p:b,i(e){n||(w(t.$$.fragment,e),n=!0)},o(e){j(t.$$.fragment,e),n=!1},d(e){C(t,e)}}}function O(e){let t,n,a,s,u,b,v,J,L,S,C,A,$,H,k,Y=e[2].length>0&&function(e){let t,n,a,s,u,b,v=e[2],J=[];for(let t=0;t<v.length;t+=1)J[t]=G(R(e,v,t));const L=e=>j(J[e],1,1,(()=>{J[e]=null}));return{c(){t=c("div"),n=c("h1"),a=r("Unknown types!"),s=d(),u=c("div");for(let e=0;e<J.length;e+=1)J[e].c();this.h()},l(e){t=h(e,"DIV",{});var r=p(t);n=h(r,"H1",{style:!0});var l=p(n);a=o(l,"Unknown types!"),l.forEach(i),s=g(r),u=h(r,"DIV",{class:!0});var c=p(u);for(let e=0;e<J.length;e+=1)J[e].l(c);c.forEach(i),r.forEach(i),this.h()},h(){y(n,"color","red"),f(u,"class","list svelte-10fpwdl")},m(e,r){l(e,t,r),m(t,n),m(n,a),m(t,s),m(t,u);for(let e=0;e<J.length;e+=1)J[e].m(u,null);b=!0},p(e,t){if(4&t){let n;for(v=e[2],n=0;n<v.length;n+=1){const r=R(e,v,n);J[n]?(J[n].p(r,t),w(J[n],1)):(J[n]=G(r),J[n].c(),w(J[n],1),J[n].m(u,null))}for(I(),n=v.length;n<J.length;n+=1)L(n);E()}},i(e){if(!b){for(let e=0;e<v.length;e+=1)w(J[e]);b=!0}},o(e){J=J.filter(Boolean);for(let e=0;e<J.length;e+=1)j(J[e]);b=!1},d(e){e&&i(t),x(J,e)}}}(e),P=e[0],B=[];for(let t=0;t<P.length;t+=1)B[t]=X(z(e,P,t));const T=e=>j(B[e],1,1,(()=>{B[e]=null}));let K=e[1],M=[];for(let t=0;t<K.length;t+=1)M[t]=q(V(e,K,t));const N=e=>j(M[e],1,1,(()=>{M[e]=null}));return{c(){t=c("main"),n=c("div"),Y&&Y.c(),a=d(),s=c("div"),u=c("h3"),b=r("Preprints"),v=d(),J=c("div");for(let e=0;e<B.length;e+=1)B[e].c();L=d(),S=c("div"),C=c("h3"),A=r("Conferences"),$=d(),H=c("div");for(let e=0;e<M.length;e+=1)M[e].c();this.h()},l(e){t=h(e,"MAIN",{class:!0});var r=p(t);n=h(r,"DIV",{class:!0});var l=p(n);Y&&Y.l(l),a=g(l),s=h(l,"DIV",{});var c=p(s);u=h(c,"H3",{class:!0});var f=p(u);b=o(f,"Preprints"),f.forEach(i),v=g(c),J=h(c,"DIV",{class:!0});var m=p(J);for(let e=0;e<B.length;e+=1)B[e].l(m);m.forEach(i),c.forEach(i),L=g(l),S=h(l,"DIV",{});var d=p(S);C=h(d,"H3",{class:!0});var y=p(C);A=o(y,"Conferences"),y.forEach(i),$=g(d),H=h(d,"DIV",{class:!0});var w=p(H);for(let e=0;e<M.length;e+=1)M[e].l(w);w.forEach(i),d.forEach(i),l.forEach(i),r.forEach(i),this.h()},h(){f(u,"class","svelte-10fpwdl"),f(J,"class","list svelte-10fpwdl"),f(C,"class","svelte-10fpwdl"),f(H,"class","list svelte-10fpwdl"),f(n,"class","content svelte-10fpwdl"),f(t,"class","svelte-10fpwdl")},m(e,r){l(e,t,r),m(t,n),Y&&Y.m(n,null),m(n,a),m(n,s),m(s,u),m(u,b),m(s,v),m(s,J);for(let e=0;e<B.length;e+=1)B[e].m(J,null);m(n,L),m(n,S),m(S,C),m(C,A),m(S,$),m(S,H);for(let e=0;e<M.length;e+=1)M[e].m(H,null);k=!0},p(e,[t]){if(e[2].length>0&&Y.p(e,t),1&t){let n;for(P=e[0],n=0;n<P.length;n+=1){const r=z(e,P,n);B[n]?(B[n].p(r,t),w(B[n],1)):(B[n]=X(r),B[n].c(),w(B[n],1),B[n].m(J,null))}for(I(),n=P.length;n<B.length;n+=1)T(n);E()}if(2&t){let n;for(K=e[1],n=0;n<K.length;n+=1){const r=V(e,K,n);M[n]?(M[n].p(r,t),w(M[n],1)):(M[n]=q(r),M[n].c(),w(M[n],1),M[n].m(H,null))}for(I(),n=K.length;n<M.length;n+=1)N(n);E()}},i(e){if(!k){w(Y);for(let e=0;e<P.length;e+=1)w(B[e]);for(let e=0;e<K.length;e+=1)w(M[e]);k=!0}},o(e){j(Y),B=B.filter(Boolean);for(let e=0;e<B.length;e+=1)j(B[e]);M=M.filter(Boolean);for(let e=0;e<M.length;e+=1)j(M[e]);k=!1},d(e){e&&i(t),Y&&Y.d(),x(B,e),x(M,e)}}}function U(e){return[D.filter((e=>"preprint"===e.type)),D.filter((e=>"conference"===e.type)),D.filter((e=>"preprint"!==e.type&&"conference"!==e.type))]}export default class extends e{constructor(e){super(),t(this,e,U,O,n,{})}}
