import{S as e,i as t,s as a,C as n,E as r,c as l,a as s,m as o,n as f,t as m,b as g,d as i,H as $,e as c,f as p,q as h,g as u,h as d,j as k,k as v,l as I,o as j,p as w,r as E,B as b,u as q}from"./client.67c756b7.js";import{I as y}from"./Intro.976dfd68.js";import{p as S}from"./projects.de9a902d.js";function W(e,t,a){const n=e.slice();return n[0]=t[a],n[2]=a,n}function x(e){let t,a;return t=new b({props:{title:e[0].title,wideImage:e[0].coverImage,squareImage:e[0].squareImage,paragraph:e[0].summary,link:e[0].permalink,left:e[2]%2}}),{c(){l(t.$$.fragment)},l(e){s(t.$$.fragment,e)},m(e,n){o(t,e,n),a=!0},p:f,i(e){a||(m(t.$$.fragment,e),a=!0)},o(e){g(t.$$.fragment,e),a=!1},d(e){i(t,e)}}}function A(e){let t,a,f,b,A,B,C,H,N,O,R,T;f=new n({props:{imageName:"data-object"}}),A=new y({props:{title:"AI engineer-in-training. Recovering advertising professional.",subTitle:"On the hunt for purpose-driven projects that tackle climate change, global inequality, and fake news."}}),H=new r({props:{copy:"Selection of Work",left:"0"}});let D=S,F=[];for(let t=0;t<D.length;t+=1)F[t]=x(W(e,D,t));const z=e=>g(F[e],1,1,(()=>{F[e]=null}));return R=new $({props:{left:"1"}}),{c(){t=c(),a=p("header"),l(f.$$.fragment),b=c(),l(A.$$.fragment),B=c(),C=p("section"),l(H.$$.fragment),N=c();for(let e=0;e<F.length;e+=1)F[e].c();O=c(),l(R.$$.fragment),this.h()},l(e){h('[data-svelte="svelte-15akq16"]',document.head).forEach(u),t=d(e),a=k(e,"HEADER",{});var n=v(a);s(f.$$.fragment,n),b=d(n),s(A.$$.fragment,n),n.forEach(u),B=d(e),C=k(e,"SECTION",{});var r=v(C);s(H.$$.fragment,r),N=d(r);for(let e=0;e<F.length;e+=1)F[e].l(r);O=d(r),s(R.$$.fragment,r),r.forEach(u),this.h()},h(){document.title="Work | Wolfram Friele"},m(e,n){I(e,t,n),I(e,a,n),o(f,a,null),j(a,b),o(A,a,null),I(e,B,n),I(e,C,n),o(H,C,null),j(C,N);for(let e=0;e<F.length;e+=1)F[e].m(C,null);j(C,O),o(R,C,null),T=!0},p(e,[t]){if(0&t){let a;for(D=S,a=0;a<D.length;a+=1){const n=W(e,D,a);F[a]?(F[a].p(n,t),m(F[a],1)):(F[a]=x(n),F[a].c(),m(F[a],1),F[a].m(C,O))}for(q(),a=D.length;a<F.length;a+=1)z(a);w()}},i(e){if(!T){m(f.$$.fragment,e),m(A.$$.fragment,e),m(H.$$.fragment,e);for(let e=0;e<D.length;e+=1)m(F[e]);m(R.$$.fragment,e),T=!0}},o(e){g(f.$$.fragment,e),g(A.$$.fragment,e),g(H.$$.fragment,e),F=F.filter(Boolean);for(let e=0;e<F.length;e+=1)g(F[e]);g(R.$$.fragment,e),T=!1},d(e){e&&u(t),e&&u(a),i(f),i(A),e&&u(B),e&&u(C),i(H),E(F,e),i(R)}}}export default class extends e{constructor(e){super(),t(this,e,null,A,a,{})}}