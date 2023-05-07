"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[631],{9777:function(n,e,t){t.d(e,{Z:function(){return l}});var r,a,c=t(7689),i=t(168),o=t(6444),s=o.ZP.h1(r||(r=(0,i.Z)(["\ncolor: white;;\ntext-align: center;\nmargin-bottom:10px;\n}\n\n"]))),u=o.ZP.h1(a||(a=(0,i.Z)(["\ncolor: white;;\ntext-align: center;\nmargin-bottom:10px;\n}\n\n"]))),p=t(184),l=function(){var n,e=(0,c.TH)();return(0,p.jsxs)("div",{children:[(0,p.jsx)(s,{children:"Oops! Not Found"}),null!==(n=e.state)&&void 0!==n&&n.movieNotFound?(0,p.jsx)(u,{children:"Sorry, the movie you are looking for does not exist."}):(0,p.jsx)(u,{children:"Sorry, the page you are looking for does not exist."})]})}},854:function(n,e,t){t.d(e,{a:function(){return c}});var r=t(8402),a=t(184),c=function(){return(0,a.jsx)(r.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64",wrapperStyle:{display:"block",marginTop:20,marginLeft:"auto",marginRight:"auto"}})}},6631:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,a,c,i,o,s,u=t(5861),p=t(9439),l=t(7757),x=t.n(l),d=t(854),h=t(9777),f=t(9564),g=t(2791),w=t(7689),v=t(4518),m=t(168),b=t(1087),y=t(6444),j=(0,y.ZP)(b.rU)(r||(r=(0,m.Z)(["\n  display: flex;\n  width: 150px;\n  height: 20px:\n  align-items: center;\n  font-size: 20px;\n  border: 1px solid #0d57aa;\n  border-radius: 6px;\n  margin-bottom: 8px;\n  text-align: center;\n  justify-content:center;\n  background-color: white;\n  color: rgb(0, 31, 51);\n  box-shadow: 2px 1px 9px 0px #fff;\n  &:hover,\n  &:focus {\n    background-color: yellow;\n    color: rgb(0, 31, 51);\n\n"]))),Z=y.ZP.div(a||(a=(0,m.Z)(["\n  @media screen and (min-width: 980px) {\n    display: flex;\n    gap: 20px;\n    flex-wrap: wrap;\n  }\n"]))),k=y.ZP.img(c||(c=(0,m.Z)(["\n  width: 300px;\n"]))),_=y.ZP.div(i||(i=(0,m.Z)(["\n  @media screen and (min-width: 980px) {\n    width: calc(100% - 300px - 20px);\n  }\n"]))),T=y.ZP.ul(o||(o=(0,m.Z)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  gap: 12px;\n"]))),S=y.ZP.div(s||(s=(0,m.Z)(["\n  margin: 0 -20px;\n  padding: 5px 20px;\n  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,\n    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;\n"]))),P=t(6036),E=t(184),F=function(){var n,e,t=(0,w.UO)().movieId,r=(0,g.useState)({}),a=(0,p.Z)(r,2),c=a[0],i=a[1],o=(0,g.useState)(!1),s=(0,p.Z)(o,2),l=s[0],m=s[1],b=(0,g.useState)(""),y=(0,p.Z)(b,2),F=y[0],N=y[1],C=(0,w.TH)(),G=C.state;C.state&&(G=C.state.from);var O=(0,g.useState)(null!==(n=null===(e=C.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),U=(0,p.Z)(O,2),M=U[0],H=U[1];(0,g.useEffect)((function(){function n(){return n=(0,u.Z)(x().mark((function n(e){var t;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),n.prev=1,n.next=4,(0,v.Ny)(e);case 4:if(t=n.sent){n.next=9;break}throw new h.Z("No data");case 9:i(t);case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),N(n.t0.message);case 15:return n.prev=15,m(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,12,15,18]])}))),n.apply(this,arguments)}!function(e){n.apply(this,arguments)}(t)}),[t]);var L=c.original_title,R=c.release_date,V=c.poster_path,Y=c.vote_average,q=c.overview,z=c.genres,A=R?new Date(R).getFullYear():"",D=Y?Math.round(10*Y):"";return(0,E.jsxs)(E.Fragment,{children:[V&&(0,E.jsxs)(j,{to:M,setFrom:H,locationValue:G,children:[(0,E.jsx)(P.VG_,{}),"  Go back"]}),l&&(0,E.jsx)(d.a,{}),F?(0,E.jsxs)(f.Z,{children:[F," Sorry, we don't have that movie"]}):(0,E.jsxs)(Z,{children:[V?(0,E.jsx)(k,{src:"https://image.tmdb.org/t/p/w300/".concat(V),alt:L,width:"300"}):(0,E.jsx)("p",{children:"Not found"}),(0,E.jsxs)(_,{children:[(0,E.jsxs)("h1",{children:[L," ",A?"(".concat(A,")"):""]}),(0,E.jsxs)("p",{children:["User score: ",D?"".concat(D,"%"):""]}),(0,E.jsx)("h2",{children:"Overview"}),(0,E.jsx)("p",{children:q}),(0,E.jsx)("h3",{children:"Genres"}),(0,E.jsx)(T,{children:z&&z.map((function(n){var e=n.name,t=n.id;return(0,E.jsx)("li",{children:e},t)}))})]})]}),F?(0,E.jsx)("p",{children:" "}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Z,{}),c&&(0,E.jsxs)(S,{children:[(0,E.jsx)("p",{children:"Additional information"}),(0,E.jsxs)("ul",{children:[(0,E.jsx)("li",{children:(0,E.jsx)(j,{to:"cast",children:"Cast"})}),(0,E.jsx)("li",{children:(0,E.jsx)(j,{to:"review",children:"Review"})})]})]}),(0,E.jsx)(g.Suspense,{children:(0,E.jsx)(w.j3,{})})]})]})}},4518:function(n,e,t){t.d(e,{Ny:function(){return g},_k:function(){return x},oO:function(){return v},on:function(){return h},y:function(){return b}});var r=t(5861),a=t(7757),c=t.n(a),i=t(1243),o="c706b9e49acca8149f8445498f846084",s="https://api.themoviedb.org/3",u="movie",p="week",l="en-US";function x(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"/trending/").concat(u,"/").concat(p,"?api_key=").concat(o));case 2:if(!(e=n.sent).statusText){n.next=5;break}throw new Error(e.statusText);case 5:return n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&language=").concat(l,"&query=").concat(e,"&page=1&include_adult=false"));case 2:if(!(t=n.sent).statusText){n.next=5;break}throw new Error(t.statusText);case 5:return n.abrupt("return",t.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(o,"&language=").concat(l));case 2:if(!(t=n.sent).statusText){n.next=5;break}throw new Error(t.statusText);case 5:return n.abrupt("return",t.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=").concat(l,"&page=1"));case 2:if(!(t=n.sent).statusText){n.next=5;break}throw new Error(t.statusText);case 5:return n.abrupt("return",t.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=").concat(l));case 2:if(!(t=n.sent).statusText){n.next=5;break}throw new Error(t.statusText);case 5:return n.abrupt("return",t.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=631.1e4d6062.chunk.js.map