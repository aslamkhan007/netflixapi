(this.webpackJsonpnetflixapi=this.webpackJsonpnetflixapi||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(13),s=c.n(i),r=(c(21),c(22),c(0));var o=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("img",{className:"header__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png",alt:""}),Object(r.jsx)("img",{className:"header__userIcon",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:""})]})};c(24),c(25);var l=function(){return Object(r.jsxs)("div",{className:"banner",style:{backgroundSize:"cover",backgroundRepeat:"none",backgroundImage:'url("https://image.tmdb.org/t/p/original/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg")',backgroundPosition:"center center"},children:[Object(r.jsxs)("div",{className:"banner__contents",children:[Object(r.jsx)("h1",{className:"banner__title",children:"Title"}),Object(r.jsxs)("div",{className:"banner__buttons",children:[Object(r.jsx)("button",{className:"banner__button",children:"play"}),Object(r.jsx)("button",{className:"banner__button",children:"my List"})]}),Object(r.jsx)("h1",{className:"banner__description",children:"description"})]}),Object(r.jsx)("div",{className:"banner__fadeBottom"})]})},d=c(4),h=c.n(d),b=c(14),u=c(16),j=(c(27),c(15)),p=c.n(j).a.create({baseURL:"https://api.themoviedb.org/3"});var g=function(e){var t=e.title,c=e.fatchUrl,a=e.isLargeRow,i=Object(n.useState)([]),s=Object(u.a)(i,2),o=s[0],l=s[1];return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(c);case 2:return t=e.sent,l(t.data.results),console.log(t.data.results),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(r.jsxs)("div",{className:"row",children:[t,Object(r.jsx)("div",{className:"row__posters",children:o.map((function(e){return Object(r.jsx)("img",{className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))})]})},f="c28312b07a876384bf0c8c2481874c7f",m={fetchTrending:"/trending/all/week?api_key=".concat(f,"&language=en-US"),fetchNetFlixOriginals:"/discover/tv?api_key=".concat(f,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(f,"&\n    language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(f,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(f,"&with_genres=35"),fetchHorroMovies:"/discover/movie?api_key=".concat(f,"&with_genres=27"),fetchRomanticMovies:"/discover/movie?api_key=".concat(f,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(f,"&with_genres=99")};var _=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsx)(l,{}),Object(r.jsx)(g,{isLargeRow:!0,title:"NETFLIX ORIGINAL",fatchUrl:m.fetchNetFlixOriginals}),Object(r.jsx)(g,{isLargeRow:!1,title:"Tranding Now",fatchUrl:m.fetchTrending}),Object(r.jsx)(g,{isLargeRow:!1,title:"Top Rated",fatchUrl:m.fetchTopRated}),Object(r.jsx)(g,{isLargeRow:!1,title:"Action Movies",fatchUrl:m.fetchActionMovies}),Object(r.jsx)(g,{isLargeRow:!1,title:"Horror Movies",fatchUrl:m.fetchHorroMovies}),Object(r.jsx)(g,{isLargeRow:!1,title:"Romance Now",fatchUrl:m.fetchRomanticMovies}),Object(r.jsx)(g,{isLargeRow:!1,title:"Documentaries",fatchUrl:m.fetchDocumentaries})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(_,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.a08407b1.chunk.js.map