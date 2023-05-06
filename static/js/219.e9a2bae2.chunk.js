"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{4219:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var r,a,o=e(5861),c=e(9439),s=e(7757),i=e.n(s),u=e(854),p=e(9777),l=e(2791),f=e(7689),x=e(4518),h=e(168),d=e(6444),g=d.ZP.ul(r||(r=(0,h.Z)(["\n  list-style: none;\n  margin-top: 30px;\n  display: flex;\n  \n  gap: 40px;\n  flex-wrap: wrap;\n  border-radius: 8px;\nbox-shadow: 2px 1px 9px 0px #000000;\n"]))),w=d.ZP.li(a||(a=(0,h.Z)(["\n  width: 250px;\nborder-top: 1px solid grey;\n  border-bottom: 1px solid grey;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  border-radius: 8px;\n  box-shadow: 2px 1px 9px 0px #000000;\n  align-items: center;\n  text-align: center;\n"]))),m=e(6355),v=e(184),y=function(){var t=(0,f.UO)().movieId,n=(0,l.useState)([]),e=(0,c.Z)(n,2),r=e[0],a=e[1],s=(0,l.useState)(!1),h=(0,c.Z)(s,2),d=h[0],y=h[1],b=(0,l.useState)(""),k=(0,c.Z)(b,2),Z=k[0],j=k[1];return(0,l.useEffect)((function(){function n(){return n=(0,o.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),t.prev=1,t.next=4,(0,x.y)(n);case 4:if(e=t.sent,(r=e.cast).length){t.next=10;break}throw new p.Z("No data");case 10:a(r);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),j(t.t0.message);case 16:return t.prev=16,y(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])}))),n.apply(this,arguments)}!function(t){n.apply(this,arguments)}(t)}),[t]),(0,v.jsxs)(v.Fragment,{children:[d&&(0,v.jsx)(u.a,{}),Z&&(0,v.jsxs)(p.Z,{children:[Z," There are not movies"]}),(0,v.jsx)(g,{children:r.map((function(t){var n=t.id,e=t.name,r=t.character,a=t.profile_path;return(0,v.jsxs)(w,{children:[a?(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(a),alt:e}):(0,v.jsx)(m.E4N,{style:{display:"block",width:"100%"},color:"rgb(60 80 60 )",size:300}),(0,v.jsx)("p",{children:e}),(0,v.jsx)("p",{children:r})]},n)}))})]})}},9777:function(t,n,e){e.d(n,{Z:function(){return l}});var r,a,o=e(7689),c=e(168),s=e(6444),i=s.ZP.h1(r||(r=(0,c.Z)(["\ncolor: white;;\ntext-align: center;\nmargin-bottom:10px;\n}\n\n"]))),u=s.ZP.h1(a||(a=(0,c.Z)(["\ncolor: white;;\ntext-align: center;\nmargin-bottom:10px;\n}\n\n"]))),p=e(184),l=function(){var t,n=(0,o.TH)();return(0,p.jsxs)("div",{children:[(0,p.jsx)(i,{children:"Oops! Not Found"}),null!==(t=n.state)&&void 0!==t&&t.movieNotFound?(0,p.jsx)(u,{children:"Sorry, the movie you are looking for does not exist."}):(0,p.jsx)(u,{children:"Sorry, the page you are looking for does not exist."})]})}},854:function(t,n,e){e.d(n,{a:function(){return o}});var r=e(8402),a=e(184),o=function(){return(0,a.jsx)(r.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64",wrapperStyle:{display:"block",marginTop:20,marginLeft:"auto",marginRight:"auto"}})}},4518:function(t,n,e){e.d(n,{Ny:function(){return g},_k:function(){return f},oO:function(){return m},on:function(){return h},y:function(){return y}});var r=e(5861),a=e(7757),o=e.n(a),c=e(1243),s="c706b9e49acca8149f8445498f846084",i="https://api.themoviedb.org/3",u="movie",p="week",l="en-US";function f(){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"/trending/").concat(u,"/").concat(p,"?api_key=").concat(s));case 2:if(!(n=t.sent).statusText){t.next=5;break}throw new Error(n.statusText);case 5:return t.abrupt("return",n.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"/search/movie?api_key=").concat(s,"&language=").concat(l,"&query=").concat(n,"&page=1&include_adult=false"));case 2:if(!(e=t.sent).statusText){t.next=5;break}throw new Error(e.statusText);case 5:return t.abrupt("return",e.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(s,"&language=").concat(l));case 2:if(!(e=t.sent).statusText){t.next=5;break}throw new Error(e.statusText);case 5:return t.abrupt("return",e.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(s,"&language=").concat(l,"&page=1"));case 2:if(!(e=t.sent).statusText){t.next=5;break}throw new Error(e.statusText);case 5:return t.abrupt("return",e.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(s,"&language=").concat(l));case 2:if(!(e=t.sent).statusText){t.next=5;break}throw new Error(e.statusText);case 5:return t.abrupt("return",e.data);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=219.e9a2bae2.chunk.js.map