var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,o;function a(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function p(){return v(" ")}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.data!==e&&(t.data=e)}class k{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){var s;this.e||(this.is_svg?this.e=(s=e.nodeName,document.createElementNS("http://www.w3.org/2000/svg",s)):this.e=d(11===e.nodeType?"TEMPLATE":e.nodeName),this.t="TEMPLATE"!==e.tagName?e:e.content,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)u(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(f)}}function _(t){o=t}function b(){if(!o)throw new Error("Function called outside component initialization");return o}const $=[],y=[];let w=[];const x=[],C=Promise.resolve();let T=!1;function E(t){w.push(t)}const z=new Set;let S=0;function A(){if(0!==S)return;const t=o;do{try{for(;S<$.length;){const t=$[S];S++,_(t),j(t.$$)}}catch(t){throw $.length=0,S=0,t}for(_(null),$.length=0,S=0;y.length;)y.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];z.has(e)||(z.add(e),e())}w.length=0}while($.length);for(;x.length;)x.pop()();T=!1,z.clear(),_(t)}function j(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const q=new Set;let N;function M(){N={r:0,c:[],p:N}}function U(){N.r||s(N.c),N=N.p}function R(t,e){t&&t.i&&(q.delete(t),t.i(e))}function I(t,e,n,s){if(t&&t.o){if(q.has(t))return;q.add(t),N.c.push((()=>{q.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function Y(t,e){const n=e.token={};function s(t,s,r,i){if(e.token!==n)return;e.resolved=i;let l=e.ctx;void 0!==r&&(l=l.slice(),l[r]=i);const o=t&&(e.current=t)(l);let a=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==s&&t&&(M(),I(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),U())})):e.block.d(1),o.c(),R(o,1),o.m(e.mount(),e.anchor),a=!0),e.block=o,e.blocks&&(e.blocks[s]=o),a&&A()}if(!(r=t)||"object"!=typeof r&&"function"!=typeof r||"function"!=typeof r.then){if(e.current!==e.then)return s(e.then,1,e.value,t),!0;e.resolved=t}else{const n=b();if(t.then((t=>{_(n),s(e.then,1,e.value,t),_(null)}),(t=>{if(_(n),s(e.catch,2,e.error,t),_(null),!e.hasCatch)throw t})),e.current!==e.pending)return s(e.pending,0),!0}var r}function L(t){t&&t.c()}function H(t,n,i,l){const{fragment:o,after_update:a}=t.$$;o&&o.m(n,i),l||E((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):s(n),t.$$.on_mount=[]})),a.forEach(E)}function O(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];w.forEach((s=>-1===t.indexOf(s)?e.push(s):n.push(s))),n.forEach((t=>t())),w=e}(n.after_update),s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&($.push(t),T||(T=!0,C.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(e,r,i,l,a,c,u,h=[-1]){const d=o;_(e);const v=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:r.target||d.$$.root};u&&u(v.root);let p=!1;if(v.ctx=i?i(e,r.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return v.ctx&&a(v.ctx[t],v.ctx[t]=r)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](r),p&&D(e,t)),n})):[],v.update(),p=!0,s(v.before_update),v.fragment=!!l&&l(v.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);v.fragment&&v.fragment.l(t),t.forEach(f)}else v.fragment&&v.fragment.c();r.intro&&R(e.$$.fragment),H(e,r.target,r.anchor,r.customElement),A()}_(d)}class X{$destroy(){O(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const t=s.indexOf(n);-1!==t&&s.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var B={},F={};function Z(t){return new Function("d","return {"+t.map((function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'})).join(",")+"}")}function G(t){var e=Object.create(null),n=[];return t.forEach((function(t){for(var s in t)s in e||n.push(e[s]=s)})),n}function J(t,e){var n=t+"",s=n.length;return s<e?new Array(e-s+1).join(0)+n:n}function V(t){var e,n=t.getUTCHours(),s=t.getUTCMinutes(),r=t.getUTCSeconds(),i=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":((e=t.getUTCFullYear())<0?"-"+J(-e,6):e>9999?"+"+J(e,6):J(e,4))+"-"+J(t.getUTCMonth()+1,2)+"-"+J(t.getUTCDate(),2)+(i?"T"+J(n,2)+":"+J(s,2)+":"+J(r,2)+"."+J(i,3)+"Z":r?"T"+J(n,2)+":"+J(s,2)+":"+J(r,2)+"Z":s||n?"T"+J(n,2)+":"+J(s,2)+"Z":"")}var W=function(t){var e=new RegExp('["'+t+"\n\r]"),n=t.charCodeAt(0);function s(t,e){var s,r=[],i=t.length,l=0,o=0,a=i<=0,c=!1;function u(){if(a)return F;if(c)return c=!1,B;var e,s,r=l;if(34===t.charCodeAt(r)){for(;l++<i&&34!==t.charCodeAt(l)||34===t.charCodeAt(++l););return(e=l)>=i?a=!0:10===(s=t.charCodeAt(l++))?c=!0:13===s&&(c=!0,10===t.charCodeAt(l)&&++l),t.slice(r+1,e-1).replace(/""/g,'"')}for(;l<i;){if(10===(s=t.charCodeAt(e=l++)))c=!0;else if(13===s)c=!0,10===t.charCodeAt(l)&&++l;else if(s!==n)continue;return t.slice(r,e)}return a=!0,t.slice(r,i)}for(10===t.charCodeAt(i-1)&&--i,13===t.charCodeAt(i-1)&&--i;(s=u())!==F;){for(var f=[];s!==B&&s!==F;)f.push(s),s=u();e&&null==(f=e(f,o++))||r.push(f)}return r}function r(e,n){return e.map((function(e){return n.map((function(t){return l(e[t])})).join(t)}))}function i(e){return e.map(l).join(t)}function l(t){return null==t?"":t instanceof Date?V(t):e.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,e){var n,r,i=s(t,(function(t,s){if(n)return n(t,s-1);r=t,n=e?function(t,e){var n=Z(t);return function(s,r){return e(n(s),r,t)}}(t,e):Z(t)}));return i.columns=r||[],i},parseRows:s,format:function(e,n){return null==n&&(n=G(e)),[n.map(l).join(t)].concat(r(e,n)).join("\n")},formatBody:function(t,e){return null==e&&(e=G(t)),r(t,e).join("\n")},formatRows:function(t){return t.map(i).join("\n")},formatRow:i,formatValue:l}}(","),Q=W.parse;function K(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}var tt,et=(tt=Q,function(t,e,n){return 2===arguments.length&&"function"==typeof e&&(n=e,e=void 0),function(t,e){return fetch(t,e).then(K)}(t,e).then((function(t){return tt(t,n)}))});function nt(t,e,n){this.k=t,this.x=e,this.y=n}function st(e){let n;return{c(){n=d("div"),n.innerHTML='<div class="nav__container svelte-164agi8"><nav class="svelte-164agi8"><ul class="nav__logo svelte-164agi8"><li class="svelte-164agi8"><a href="#about" class="svelte-164agi8"><strong>Yuriko Schumacher</strong></a></li></ul> \n      <ul class="nav__menu svelte-164agi8"><li class="svelte-164agi8"><a href="#about">About</a></li> \n        <li class="svelte-164agi8"><a href="#work">Work</a></li></ul></nav></div>',m(n,"id","nav"),m(n,"class","svelte-164agi8")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}nt.prototype={constructor:nt,scale:function(t){return 1===t?this:new nt(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new nt(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},new nt(1,0,0),nt.prototype;class rt extends X{constructor(t){super(),P(this,t,null,st,i,{})}}var it=new RegExp(/\s+([^\s]*)\s*$/);function lt(t,e){return void 0===e&&(e=" "),function(t){return null==t}(t)?"":String(t).replace(it,e+"$1")}function ot(e){let n,s,r,i,l,o,a,h,g,k,_,b,$,y,w,x,C,T,E,z,S,A,j,q,N,M,U,R,I,Y,L,H,O,D,P=lt("important stories.")+"",X=lt("on projects!")+"";return{c(){n=d("div"),s=d("div"),r=d("div"),r.innerHTML='<img src="./image/yuriko.png" alt="" width="350" class="svelte-ivrt5s"/>',i=p(),l=d("div"),o=d("h1"),o.textContent="Hi, I'm Yuriko.",a=p(),h=d("p"),g=v("Currently, I work as a "),k=d("a"),k.textContent="data visuals designer/developer",_=v(" at the Texas Tribune. I am passionate about designing and producing meaningful (and beautiful ✨) graphics/data tools that tell "),b=v(P),$=p(),y=d("p"),w=v("My skills currently include: front-end development with frameworks like "),x=d("span"),x.textContent="React",C=v(" and "),T=d("span"),T.textContent="Svelte",E=v(", JavaScript libraries including "),z=d("span"),z.textContent="d3.js",S=v(" and "),A=d("span"),A.textContent="three.js",j=v(", data analysis and statistical analysis in "),q=d("span"),q.textContent="R",N=v(", GIS analysis and production using "),M=d("span"),M.textContent="QGIS",U=v(", design tools like "),R=d("span"),R.textContent="figma",I=v(", and graphics prodution with "),Y=d("span"),Y.textContent="Illustrator",L=v(". I'm constantly exploring new technologies as I pursue the best ways to execute "),H=v(X),O=p(),D=d("div"),D.innerHTML='<ul class="about__list contact-info svelte-ivrt5s"><li class="font--special svelte-ivrt5s"><a href="mailto:yuriko.schumacher@gmail.com"><i class="far fa-envelope"></i>\n              yuriko.schumacher@gmail.com</a></li> \n          <li class="font--special svelte-ivrt5s"><a href="tel:6466680656"><i class="fas fa-phone"></i> 646-668-0656</a></li></ul> \n        <ul class="about__list svelte-ivrt5s"><li class="font--special svelte-ivrt5s"><a href="./pdf/resume.pdf" target="_blank">Resume</a></li> \n          <li class="font--special svelte-ivrt5s"><a href="#work">Work</a></li> \n          <li class="svelte-ivrt5s"><a href="https://twitter.com/yuriko_a_s" target="_blank"><i class="fa-brands fa-x-twitter"></i></a></li> \n          <li class="svelte-ivrt5s"><a href="https://github.com/Yuriko-Schumacher" target="_blank"><i class="fab fa-github"></i></a></li> \n          <li class="svelte-ivrt5s"><a href="https://www.linkedin.com/in/yuriko-schumacher/?locale=en_US" target="_blank"><i class="fab fa-linkedin"></i></a></li></ul>',m(r,"class","about__img svelte-ivrt5s"),m(k,"href","https://www.texastribune.org/about/staff/yuriko-schumacher/"),m(k,"target","_blank"),m(h,"class","svelte-ivrt5s"),m(x,"class","skill svelte-ivrt5s"),m(T,"class","skill svelte-ivrt5s"),m(z,"class","skill svelte-ivrt5s"),m(A,"class","skill svelte-ivrt5s"),m(q,"class","skill svelte-ivrt5s"),m(M,"class","skill svelte-ivrt5s"),m(R,"class","skill svelte-ivrt5s"),m(Y,"class","skill svelte-ivrt5s"),m(y,"class","svelte-ivrt5s"),m(D,"class","about__lists svelte-ivrt5s"),m(l,"class","about__info svelte-ivrt5s"),m(s,"class","about__container svelte-ivrt5s"),m(n,"class","about svelte-ivrt5s"),m(n,"id","about")},m(t,e){u(t,n,e),c(n,s),c(s,r),c(s,i),c(s,l),c(l,o),c(l,a),c(l,h),c(h,g),c(h,k),c(h,_),c(h,b),c(l,$),c(l,y),c(y,w),c(y,x),c(y,C),c(y,T),c(y,E),c(y,z),c(y,S),c(y,A),c(y,j),c(y,q),c(y,N),c(y,M),c(y,U),c(y,R),c(y,I),c(y,Y),c(y,L),c(y,H),c(l,O),c(l,D)},p:t,i:t,o:t,d(t){t&&f(n)}}}class at extends X{constructor(t){super(),P(this,t,null,ot,i,{})}}function ct(t,e,n){const s=t.slice();return s[5]=e[n],s}function ut(t,e,n){const s=t.slice();return s[8]=e[n],s}function ft(t,e,n){const s=t.slice();return s[11]=e[n],s}function ht(t){let e;return{c(){e=d("i"),m(e,"class","fa-solid fa-star svelte-4zr9mq")},m(t,n){u(t,e,n)},d(t){t&&f(e)}}}function dt(t){let e,n,s=t[11]+"";return{c(){e=d("li"),n=v(s),m(e,"class","svelte-4zr9mq")},m(t,s){u(t,e,s),c(e,n)},p(t,e){2&e&&s!==(s=t[11]+"")&&g(n,s)},d(t){t&&f(e)}}}function vt(t){let e,n,s=t[8]+"";return{c(){e=d("li"),n=v(s),m(e,"class","svelte-4zr9mq")},m(t,s){u(t,e,s),c(e,n)},p(t,e){4&e&&s!==(s=t[8]+"")&&g(n,s)},d(t){t&&f(e)}}}function pt(t){let e,n,s=t[3],r=[];for(let e=0;e<s.length;e+=1)r[e]=mt(ct(t,s,e));return{c(){e=d("ul"),n=v("Visualization types:\n            ");for(let t=0;t<r.length;t+=1)r[t].c();m(e,"class","works__tools svelte-4zr9mq")},m(t,s){u(t,e,s),c(e,n);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(e,null)},p(t,n){if(8&n){let i;for(s=t[3],i=0;i<s.length;i+=1){const l=ct(t,s,i);r[i]?r[i].p(l,n):(r[i]=mt(l),r[i].c(),r[i].m(e,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=s.length}},d(t){t&&f(e),h(r,t)}}}function mt(t){let e,n,s=t[5]+"";return{c(){e=d("li"),n=v(s),m(e,"class","svelte-4zr9mq")},m(t,s){u(t,e,s),c(e,n)},p(t,e){8&e&&s!==(s=t[5]+"")&&g(n,s)},d(t){t&&f(e)}}}function gt(e){let n,s,r,i,l,o,_,b,$,y,w,x,C,T,E,z,S,A,j,q,N,M,U,R,I,Y,L,H,O=e[4](e[0].date)+"",D=e[0].media+"",P=e[0].title+"",X=lt(e[0].description)+"",B="TRUE"==e[0].is_featured&&ht(),F=e[1],Z=[];for(let t=0;t<F.length;t+=1)Z[t]=dt(ft(e,F,t));let G=e[2],J=[];for(let t=0;t<G.length;t+=1)J[t]=vt(ut(e,G,t));let V=0!=e[3].length&&pt(e);return{c(){n=d("a"),s=d("div"),r=d("div"),i=d("img"),_=p(),b=d("div"),$=d("div"),y=d("div"),w=v(O),x=p(),C=d("div"),T=v(D),E=p(),z=d("h2"),S=v(P),B&&B.c(),A=p(),j=new k(!1),q=p(),N=d("div"),M=d("ul"),U=v("Skills:\n          ");for(let t=0;t<Z.length;t+=1)Z[t].c();R=p(),I=d("ul"),Y=v("Roles:\n          ");for(let t=0;t<J.length;t+=1)J[t].c();L=p(),V&&V.c(),m(i,"class"," svelte-4zr9mq"),a(i.src,l="./image/"+e[0].id+"."+e[0].img)||m(i,"src",l),m(i,"width","400"),m(i,"alt",o=e[0].title),m(r,"class","works__img svelte-4zr9mq"),m(y,"class","works__date font--special svelte-4zr9mq"),m(C,"class","works__media font--special"),m($,"class","works__info works__info__top svelte-4zr9mq"),m(z,"class","svelte-4zr9mq"),j.a=q,m(M,"class","works__tools svelte-4zr9mq"),m(I,"class","works__tools svelte-4zr9mq"),m(N,"class","works__info works__info__bottom svelte-4zr9mq"),m(b,"class","works__description"),m(s,"class","works__work svelte-4zr9mq"),m(n,"href",H=e[0].link),m(n,"target","_blank"),m(n,"class","svelte-4zr9mq")},m(t,e){u(t,n,e),c(n,s),c(s,r),c(r,i),c(s,_),c(s,b),c(b,$),c($,y),c(y,w),c($,x),c($,C),c(C,T),c(b,E),c(b,z),c(z,S),B&&B.m(z,null),c(b,A),j.m(X,b),c(b,q),c(b,N),c(N,M),c(M,U);for(let t=0;t<Z.length;t+=1)Z[t]&&Z[t].m(M,null);c(N,R),c(N,I),c(I,Y);for(let t=0;t<J.length;t+=1)J[t]&&J[t].m(I,null);c(N,L),V&&V.m(N,null)},p(t,[e]){if(1&e&&!a(i.src,l="./image/"+t[0].id+"."+t[0].img)&&m(i,"src",l),1&e&&o!==(o=t[0].title)&&m(i,"alt",o),1&e&&O!==(O=t[4](t[0].date)+"")&&g(w,O),1&e&&D!==(D=t[0].media+"")&&g(T,D),1&e&&P!==(P=t[0].title+"")&&g(S,P),"TRUE"==t[0].is_featured?B||(B=ht(),B.c(),B.m(z,null)):B&&(B.d(1),B=null),1&e&&X!==(X=lt(t[0].description)+"")&&j.p(X),2&e){let n;for(F=t[1],n=0;n<F.length;n+=1){const s=ft(t,F,n);Z[n]?Z[n].p(s,e):(Z[n]=dt(s),Z[n].c(),Z[n].m(M,null))}for(;n<Z.length;n+=1)Z[n].d(1);Z.length=F.length}if(4&e){let n;for(G=t[2],n=0;n<G.length;n+=1){const s=ut(t,G,n);J[n]?J[n].p(s,e):(J[n]=vt(s),J[n].c(),J[n].m(I,null))}for(;n<J.length;n+=1)J[n].d(1);J.length=G.length}0!=t[3].length?V?V.p(t,e):(V=pt(t),V.c(),V.m(N,null)):V&&(V.d(1),V=null),1&e&&H!==(H=t[0].link)&&m(n,"href",H)},i:t,o:t,d(t){t&&f(n),B&&B.d(),h(Z,t),h(J,t),V&&V.d()}}}function kt(t,e,n){let{data:s}=e,r=[s.skill_1,s.skill_2,s.skill_3];r=r.filter((t=>""!==t));let i=[s.role_1,s.role_2,s.role_3,s.role_4];i=i.filter((t=>""!==t));let l=[s.viz_1,s.viz_2,s.viz_3,s.viz_4,s.viz_5];return l=l.filter((t=>""!=t)),t.$$set=t=>{"data"in t&&n(0,s=t.data)},[s,r,i,l,t=>{const[e,n]=t.split("-");return new Date(n,e-1).toLocaleString("en-US",{month:"long",year:"numeric"})}]}class _t extends X{constructor(t){super(),P(this,t,kt,gt,i,{data:0})}}function bt(t,e,n){const s=t.slice();return s[2]=e[n],s[4]=n,s}function $t(t){let e,n;return e=new _t({props:{data:t[2],index:t[4]}}),{c(){L(e.$$.fragment)},m(t,s){H(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.data=t[2]),e.$set(s)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function yt(t){let e,n,s,r,i,l,o,a,g,k,_,b,$,y,w=lt("by date.")+"",x=t[0],C=[];for(let e=0;e<x.length;e+=1)C[e]=$t(bt(t,x,e));const T=t=>I(C[t],1,1,(()=>{C[t]=null}));return{c(){e=d("div"),n=d("div"),s=d("h1"),s.textContent="My work:",r=p(),i=d("p"),l=v("This selection showcases some of my best work, ranging from my academic projects at Northeastern University to my recent contributions at the Texas Tribune. Stars "),o=d("i"),a=v(" indicate the selection of work that I'm the most proud of. Other ones are sorted "),g=v(w),k=p(),_=d("p"),_.textContent="Each card represents a project and contains the publication date, the organization I worked with, a brief description, the skills applied, my roles, and the types of visualizations used in the project.",b=p(),$=d("div");for(let t=0;t<C.length;t+=1)C[t].c();m(s,"class","svelte-gh47uv"),m(o,"class","fa-solid fa-star"),m(i,"class","svelte-gh47uv"),m(_,"class","svelte-gh47uv"),m(n,"class","work__intro svelte-gh47uv"),m($,"class","work-cards svelte-gh47uv"),m(e,"id","work"),m(e,"class","svelte-gh47uv")},m(t,f){u(t,e,f),c(e,n),c(n,s),c(n,r),c(n,i),c(i,l),c(i,o),c(i,a),c(i,g),c(n,k),c(n,_),c(e,b),c(e,$);for(let t=0;t<C.length;t+=1)C[t]&&C[t].m($,null);y=!0},p(t,[e]){if(1&e){let n;for(x=t[0],n=0;n<x.length;n+=1){const s=bt(t,x,n);C[n]?(C[n].p(s,e),R(C[n],1)):(C[n]=$t(s),C[n].c(),R(C[n],1),C[n].m($,null))}for(M(),n=x.length;n<C.length;n+=1)T(n);U()}},i(t){if(!y){for(let t=0;t<x.length;t+=1)R(C[t]);y=!0}},o(t){C=C.filter(Boolean);for(let t=0;t<C.length;t+=1)I(C[t]);y=!1},d(t){t&&f(e),h(C,t)}}}function wt(t,e,n){let{data:s}=e;return s.length,t.$$set=t=>{"data"in t&&n(0,s=t.data)},[s]}class xt extends X{constructor(t){super(),P(this,t,wt,yt,i,{data:0})}}function Ct(e){let n;return{c(){n=d("footer"),n.innerHTML='<div class="footer__info"><div class="about__lists svelte-avky4g"><ul class="about__list contact-info svelte-avky4g"><li class="font--special svelte-avky4g"><a href="mailto:yuriko.schumacher@gmail.com"><i class="far fa-envelope"></i> yuriko.schumacher@gmail.com</a></li> \n        <li class="font--special svelte-avky4g"><a href="tel:6466680656"><i class="fas fa-phone"></i> 646-668-0656</a></li></ul> \n      <ul class="about__list svelte-avky4g"><li class="font--special svelte-avky4g"><a href="./pdf/resume.pdf" target="_blank">Resume</a></li> \n        <li class="svelte-avky4g"><a href="https://twitter.com/yuriko_a_s" target="_blank"><i class="fa-brands fa-x-twitter"></i></a></li> \n        <li class="svelte-avky4g"><a href="https://github.com/Yuriko-Schumacher" target="_blank"><i class="fab fa-github"></i></a></li> \n        <li class="svelte-avky4g"><a href="https://www.linkedin.com/in/yuriko-schumacher/?locale=en_US" target="_blank"><i class="fab fa-linkedin"></i></a></li></ul></div></div> \n  <div class="credit"><p class="font--special">© Yuriko Schumacher 2024</p></div>'},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class Tt extends X{constructor(t){super(),P(this,t,null,Ct,i,{})}}function Et(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function zt(t){let e,n;return e=new xt({props:{data:t[0][0]}}),{c(){L(e.$$.fragment)},m(t,s){H(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.data=t[0][0]),e.$set(s)},i(t){n||(R(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function St(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function At(t){let e,n,s,r,i,l,o,a;n=new rt({}),r=new at({});let h={ctx:t,current:null,token:null,hasCatch:!1,pending:St,then:zt,catch:Et,value:3,blocks:[,,,]};return Y(t[1],h),o=new Tt({}),{c(){e=d("main"),L(n.$$.fragment),s=p(),L(r.$$.fragment),i=p(),h.block.c(),l=p(),L(o.$$.fragment)},m(t,f){u(t,e,f),H(n,e,null),c(e,s),H(r,e,null),c(e,i),h.block.m(e,h.anchor=null),h.mount=()=>e,h.anchor=l,c(e,l),H(o,e,null),a=!0},p(e,[n]){!function(t,e,n){const s=e.slice(),{resolved:r}=t;t.current===t.then&&(s[t.value]=r),t.current===t.catch&&(s[t.error]=r),t.block.p(s,n)}(h,t=e,n)},i(t){a||(R(n.$$.fragment,t),R(r.$$.fragment,t),R(h.block),R(o.$$.fragment,t),a=!0)},o(t){I(n.$$.fragment,t),I(r.$$.fragment,t);for(let t=0;t<3;t+=1){I(h.blocks[t])}I(o.$$.fragment,t),a=!1},d(t){t&&f(e),O(n),O(r),h.block.d(),h.token=null,h=null,O(o)}}}function jt(t,e,n){let{datasets:s=[]}=e,r=async function(){let t=await et("data/work.csv");t=t.sort(((t,e)=>t.is_featured-e.is_featured)),console.log(t);let e=await et("data/other.csv");n(0,s=[t,e])}();return t.$$set=t=>{"datasets"in t&&n(0,s=t.datasets)},[s,r]}return new class extends X{constructor(t){super(),P(this,t,jt,At,i,{datasets:0})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
