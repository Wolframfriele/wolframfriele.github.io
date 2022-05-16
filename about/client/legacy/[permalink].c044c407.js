import{_ as t,a as e,b as n,c as r,i as a,d as o,S as i,s as f,C as c,E as l,B as u,k as s,e as m,j as p,p as g,r as $,f as v,o as h,l as d,u as I,m as w,v as j,t as y,g as b,h as x,x as C,y as E,L as k,q,w as D,z as R}from"./client.c4cab4ed.js";import{f as T}from"./projects.411646fc.js";import{I as B}from"./Intro.5232411c.js";function N(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=e(t);if(r){var i=e(this).constructor;a=Reflect.construct(o,arguments,i)}else a=o.apply(this,arguments);return n(this,a)}}function F(t,e,n){var r=t.slice();return r[1]=e[n],r[3]=n,r}function O(t){var e,n,r,a;n=new l({props:{copy:"In Depth",left:"1"}});for(var o=t[0].inDepth,i=[],f=0;f<o.length;f+=1)i[f]=P(F(t,o,f));var c=function(t){return b(i[t],1,1,(function(){i[t]=null}))};return{c:function(){e=s("section"),m(n.$$.fragment),r=p();for(var t=0;t<i.length;t+=1)i[t].c()},l:function(t){e=g(t,"SECTION",{});var a=$(e);v(n.$$.fragment,a),r=h(a);for(var o=0;o<i.length;o+=1)i[o].l(a);a.forEach(d)},m:function(t,o){I(t,e,o),w(n,e,null),j(e,r);for(var f=0;f<i.length;f+=1)i[f].m(e,null);a=!0},p:function(t,n){if(1&n){var r;for(o=t[0].inDepth,r=0;r<o.length;r+=1){var a=F(t,o,r);i[r]?(i[r].p(a,n),y(i[r],1)):(i[r]=P(a),i[r].c(),y(i[r],1),i[r].m(e,null))}for(R(),r=o.length;r<i.length;r+=1)c(r);C()}},i:function(t){if(!a){y(n.$$.fragment,t);for(var e=0;e<o.length;e+=1)y(i[e]);a=!0}},o:function(t){b(n.$$.fragment,t),i=i.filter(Boolean);for(var e=0;e<i.length;e+=1)b(i[e]);a=!1},d:function(t){t&&d(e),x(n),E(i,t)}}}function P(t){var e,n;return e=new u({props:{title:t[1].title,wideImage:t[1].wideImage,squareImage:t[1].squareImage,paragraph:t[1].paragraph,left:(t[3]+1)%2}}),{c:function(){m(e.$$.fragment)},l:function(t){v(e.$$.fragment,t)},m:function(t,r){w(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.title=t[1].title),1&n&&(r.wideImage=t[1].wideImage),1&n&&(r.squareImage=t[1].squareImage),1&n&&(r.paragraph=t[1].paragraph),e.$set(r)},i:function(t){n||(y(e.$$.fragment,t),n=!0)},o:function(t){b(e.$$.fragment,t),n=!1},d:function(t){x(e,t)}}}function S(t){var e,n,r,a,o,i,f,E,T,N,F,P,S;document.title=e=t[0].title+" | Wolfram Friele",a=new c({props:{imageName:t[0].coverImage}}),i=new B({props:{title:t[0].title,subTitle:t[0].summary}}),E=new l({props:{copy:"Project Context",left:"0"}}),N=new u({props:{title:t[0].subTitle,wideImage:t[0].projectContextImage,paragraph:t[0].projectContext,weblink:t[0].weblink,date:t[0].date,left:"0",video:t[0].video}});var W=t[0].inDepth.length>0&&O(t);return{c:function(){n=p(),r=s("header"),m(a.$$.fragment),o=p(),m(i.$$.fragment),f=p(),m(E.$$.fragment),T=p(),m(N.$$.fragment),F=p(),W&&W.c(),P=k()},l:function(t){q('[data-svelte="svelte-172snrq"]',document.head).forEach(d),n=h(t),r=g(t,"HEADER",{});var e=$(r);v(a.$$.fragment,e),o=h(e),v(i.$$.fragment,e),f=h(e),v(E.$$.fragment,e),T=h(e),v(N.$$.fragment,e),e.forEach(d),F=h(t),W&&W.l(t),P=k()},m:function(t,e){I(t,n,e),I(t,r,e),w(a,r,null),j(r,o),w(i,r,null),j(r,f),w(E,r,null),j(r,T),w(N,r,null),I(t,F,e),W&&W.m(t,e),I(t,P,e),S=!0},p:function(t,n){var r=D(n,1)[0];(!S||1&r)&&e!==(e=t[0].title+" | Wolfram Friele")&&(document.title=e);var o={};1&r&&(o.imageName=t[0].coverImage),a.$set(o);var f={};1&r&&(f.title=t[0].title),1&r&&(f.subTitle=t[0].summary),i.$set(f);var c={};1&r&&(c.title=t[0].subTitle),1&r&&(c.wideImage=t[0].projectContextImage),1&r&&(c.paragraph=t[0].projectContext),1&r&&(c.weblink=t[0].weblink),1&r&&(c.date=t[0].date),1&r&&(c.video=t[0].video),N.$set(c),t[0].inDepth.length>0?W?(W.p(t,r),1&r&&y(W,1)):((W=O(t)).c(),y(W,1),W.m(P.parentNode,P)):W&&(R(),b(W,1,1,(function(){W=null})),C())},i:function(t){S||(y(a.$$.fragment,t),y(i.$$.fragment,t),y(E.$$.fragment,t),y(N.$$.fragment,t),y(W),S=!0)},o:function(t){b(a.$$.fragment,t),b(i.$$.fragment,t),b(E.$$.fragment,t),b(N.$$.fragment,t),b(W),S=!1},d:function(t){t&&d(n),t&&d(r),x(a),x(i),x(E),x(N),t&&d(F),W&&W.d(t),t&&d(P)}}}function W(t){return{project:T(t.params.permalink)}}function z(t,e,n){var r=e.project;return t.$$set=function(t){"project"in t&&n(0,r=t.project)},[r]}var A=function(e){t(c,i);var n=N(c);function c(t){var e;return r(this,c),e=n.call(this),a(o(e),t,z,S,f,{project:0}),e}return c}();export default A;export{W as preload};
