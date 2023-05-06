"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[623],{9777:function(n,t,e){e.d(t,{Z:function(){return l}});var r,a,o=e(7689),c=e(168),i=e(6444),s=i.ZP.h1(r||(r=(0,c.Z)(["\ncolor: white;;\ntext-align: center;\nmargin-bottom:10px;\n}\n\n"]))),u=i.ZP.h1(a||(a=(0,c.Z)(["\ncolor: white;;\ntext-align: center;\nmargin-bottom:10px;\n}\n\n"]))),p=e(184),l=function(){var n,t=(0,o.TH)();return(0,p.jsxs)("div",{children:[(0,p.jsx)(s,{children:"Oops! Not Found"}),null!==(n=t.state)&&void 0!==n&&n.movieNotFound?(0,p.jsx)(u,{children:"Sorry, the movie you are looking for does not exist."}):(0,p.jsx)(u,{children:"Sorry, the page you are looking for does not exist."})]})}},854:function(n,t,e){e.d(t,{a:function(){return o}});var r=e(8402),a=e(184),o=function(){return(0,a.jsx)(r.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperClass:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64",wrapperStyle:{display:"block",marginTop:20,marginLeft:"auto",marginRight:"auto"}})}},7335:function(n,t,e){e.d(t,{Z:function(){return f}});var r,a,o=e(7689),c=e(1087),i=e(168),s=e(6444),u=s.ZP.li(r||(r=(0,i.Z)(["\ndisplay:flex;\ncolor: white;;\npadding: 7px 20px;\nmax-width: 250px;\nborder-radius: 8px;\nbox-shadow: 2px 1px 9px 0px #000000;\ntransition: all 250ms linear;\ntext-decoration-line: none;\nlist-style-type: none; \nmargin-bottom:10px;\n&:hover,\n&:focus {\n  background-color: yellow;\n  color: white;\n  transform: scale(1.01);\n  font-size: 16px;\n  font-weight: 500;\n}\n\n"]))),p=s.ZP.ul(a||(a=(0,i.Z)(["\ndisplay:flex;\nflex-wrap: wrap;\nflex-direction: row-reverse;\ncolor:white;\n\n}\n\n"]))),l=e(184),f=function(n){var t=n.movies,e=(0,o.TH)();return(0,l.jsx)(p,{children:t.map((function(n){var t=n.id,r=n.poster_path,a=n.original_title;return(0,l.jsx)(u,{children:(0,l.jsxs)(c.rU,{state:{from:e},to:"/movies/".concat(t),children:[a,"  ",(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(r),alt:a,width:"300"})]})},t)}))})}},1077:function(n,t,e){e.d(t,{Q:function(){return s},e:function(){return i}});var r,a,o=e(168),c=e(6444),i=c.ZP.h1(r||(r=(0,o.Z)(["\npadding-top: 80px;\npadding-bottom: 30px;\ntext-align: center;\nmargin: 0;\n"]))),s=c.ZP.ul(a||(a=(0,o.Z)(["\ndisplay: flex;\n\npadding: 0;\npadding-bottom: 30px;\nmargin: 0;\nlist-style: none;\njustify-items: center;\ngap: 20px;\n"])))},623:function(n,t,e){e.r(t),e.d(t,{default:function(){return T}});var r,a,o,c=e(5861),i=e(9439),s=e(7757),u=e.n(s),p=e(2791),l=e(4518),f=e(9777),x=e(854),d=e(3853),h=e(168),g=e(6444),m=g.ZP.form(r||(r=(0,h.Z)(["\ntext-align: center;\npadding-bottom: 35px;\n"]))),v=g.ZP.input(a||(a=(0,h.Z)(["\npadding: 4px;\n// width: 400px;\nborder-radius: 20px; \nfont-size: 16px;\n&:focus {\n  background-color: grey;\n  color: rgb(0, 31, 51);\n}\n"]))),w=g.ZP.button(o||(o=(0,h.Z)(["\npadding: 4px 8px;\nborder-radius: 20px; \nfont-size: 16px;\n// width: 400px;\n&:hover,\n&:focus {\n  color:rgb(0, 31, 51);\n  background-color: yellow;\n}\n"]))),y=e(184),b=function(n){var t=n.onSubmit,e=n.query,r=(0,p.useState)(e),a=(0,i.Z)(r,2),o=a[0],c=a[1];return(0,y.jsxs)(m,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.search.value;t(e)},children:[(0,y.jsx)(v,{onChange:function(n){var t=n.target.value;c(t)},name:"search",value:o,type:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,y.jsxs)(w,{type:"submit",children:["Search",(0,y.jsx)(d.jRj,{})]})]})},Z=e(7335),k=e(1087),j=e(1077),T=function(){var n,t=(0,k.lr)(),e=(0,i.Z)(t,2),r=e[0],a=e[1],o=null!==(n=r.get("query"))&&void 0!==n?n:"",s=(0,p.useState)([]),d=(0,i.Z)(s,2),h=d[0],g=d[1],m=(0,p.useState)(!1),v=(0,i.Z)(m,2),w=v[0],T=v[1],_=(0,p.useState)(""),S=(0,i.Z)(_,2),P=S[0],C=S[1];(0,p.useEffect)((function(){function n(){return n=(0,c.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return T(!0),n.prev=1,n.next=4,(0,l.on)(t);case 4:if(e=n.sent,r=e.results,e.total_results){n.next=10;break}throw new f.Z("No data");case 10:g(r);case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),C(n.t0.message);case 16:return n.prev=16,T(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[1,13,16,19]])}))),n.apply(this,arguments)}o&&function(t){n.apply(this,arguments)}(o)}),[o]);return(0,y.jsxs)(j.Q,{children:[P&&(0,y.jsxs)(f.Z,{children:[P," There are not movies"]}),(0,y.jsx)(b,{onSubmit:function(n){n?a({query:n}):(a({}),g([]))},query:o}),w&&(0,y.jsx)(x.a,{}),(0,y.jsx)(Z.Z,{movies:h})]})}},4518:function(n,t,e){e.d(t,{Ny:function(){return g},_k:function(){return f},oO:function(){return v},on:function(){return d},y:function(){return y}});var r=e(5861),a=e(7757),o=e.n(a),c=e(1243),i="c706b9e49acca8149f8445498f846084",s="https://api.themoviedb.org/3",u="movie",p="week",l="en-US";function f(){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"/trending/").concat(u,"/").concat(p,"?api_key=").concat(i));case 2:if(!(t=n.sent).statusText){n.next=5;break}throw new Error(t.statusText);case 5:return n.abrupt("return",t.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"/search/movie?api_key=").concat(i,"&language=").concat(l,"&query=").concat(t,"&page=1&include_adult=false"));case 2:if(!(e=n.sent).statusText){n.next=5;break}throw new Error(e.statusText);case 5:return n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(i,"&language=").concat(l));case 2:if(!(e=n.sent).statusText){n.next=5;break}throw new Error(e.statusText);case 5:return n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=").concat(l,"&page=1"));case 2:if(!(e=n.sent).statusText){n.next=5;break}throw new Error(e.statusText);case 5:return n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=").concat(l));case 2:if(!(e=n.sent).statusText){n.next=5;break}throw new Error(e.statusText);case 5:return n.abrupt("return",e.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=623.f445fc47.chunk.js.map