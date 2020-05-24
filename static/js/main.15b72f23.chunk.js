(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(7),s=a.n(l),i=a(8),o=a(1),r=a(2),m=a(4),u=a(3),d=a(5),v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={willWatch:!1},e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,c=t.removeMovie,l=t.addMovieToWillWatch,s=t.removeMovieFromWillWatch;return console.log(a),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("p",null,a.title)),n.a.createElement("div",{className:"card"},n.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(a.backdrop_path||a.poster_path),alt:""}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h6",{className:"card-title"},a.title),n.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},n.a.createElement("p",{className:"mb-0"},"Rating: ",a.vote_average),!0===this.state.willWatch?n.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.setState({willWatch:!1}),s(a)}},"Remove Will Watch"):n.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.setState({willWatch:!0}),l(a)}},"Add Will Watch")),n.a.createElement("button",{className:"btn btn-secondary",onClick:c.bind(this,a)},"Delete movie"))))}}]),t}(n.a.Component),p="https://api.themoviedb.org/3",h="3f4ca4f3a9750da53450646ced312397",b=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.sort_by!==this.props.sort_by}},{key:"render",value:function(){var e=this.props,t=e.sort_by,a=e.updateSortBy,c=function(e){return function(){a(e)}},l=function(e){return"nav-link ".concat(t===e?"active":"")};return n.a.createElement("ul",{className:"tabs nav nav-pills"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:l("popularity.desc"),onClick:c("popularity.desc")},"Popylarity")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:l("revenue.desc"),onClick:c("revenue.desc")},"Revenue")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:l("vote_avearage.desc"),onClick:c("vote_avearage.desc")},"Vote avearage")))}}]),t}(n.a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pageSelected,a=e.pageSelectedPlus,c=e.pageSelectedMinus,l=e.totalPages;return n.a.createElement("div",null,n.a.createElement("button",{className:"btn btn-primary text-white",onClick:c},"Prev"),n.a.createElement("span",{className:"px-4"},t," \u0438\u0437 ",l),n.a.createElement("button",{className:"btn btn-primary text-white",onClick:a},"Next"))}}]),t}(n.a.Component),f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).getMovies=function(){fetch("".concat(p,"/discover/movie?api_key=").concat(h,"&sort_by=").concat(e.state.sort_by,"&page=").concat(e.state.pageSelected)).then(function(e){return e.json()}).then(function(t){e.setState({movies:t.results,totalPages:t.total_pages})})},e.removeMovie=function(t){var a=e.state.movies.filter(function(e){return e.id!==t.id});e.setState({movies:a})},e.addMovieToWillWatch=function(t){var a=[].concat(Object(i.a)(e.state.moviesWillWatch),[t]);e.setState({moviesWillWatch:a})},e.removeMovieFromWillWatch=function(t){var a=e.state.moviesWillWatch.filter(function(e){return e.id!==t.id});e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){e.setState({sort_by:t})},e.pageSelectedPlus=function(){e.state.pageSelected<=500&&e.setState({pageSelected:e.state.pageSelected+1})},e.pageSelectedMinus=function(){e.state.pageSelected>1&&e.setState({pageSelected:e.state.pageSelected-1})},e.state={movies:[],moviesWillWatch:[],sort_by:"popularity.desc",pageSelected:1,totalPages:0},e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e,t){t.sort_by===this.state.sort_by&&t.pageSelected===this.state.pageSelected||this.getMovies()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row m-4"},n.a.createElement("div",{className:"col-12"},n.a.createElement(b,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy}))),n.a.createElement("div",{className:"row m-4"},n.a.createElement("div",{className:"col-9 d-flex justify-content-center"},n.a.createElement(g,{pageSelected:this.state.pageSelected,pageSelectedPlus:this.pageSelectedPlus,pageSelectedMinus:this.pageSelectedMinus,totalPages:this.state.totalPages}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-9"},n.a.createElement("div",{className:"row"},this.state.movies.map(function(t){return n.a.createElement("div",{className:"col-6 mb-4",key:t.id},n.a.createElement(v,{movie:t,removeMovie:e.removeMovie,addMovieToWillWatch:e.addMovieToWillWatch,removeMovieFromWillWatch:e.removeMovieFromWillWatch}))}))),n.a.createElement("div",{className:"col-3"},n.a.createElement("p",null,"Will watch: ",this.state.moviesWillWatch.length))),n.a.createElement("div",{className:"row m-4"},n.a.createElement("div",{className:"col-9 d-flex justify-content-center"},n.a.createElement(g,{pageSelected:this.state.pageSelected,pageSelectedPlus:this.pageSelectedPlus,pageSelectedMinus:this.pageSelectedMinus,totalPages:this.state.totalPages}))))}}]),t}(n.a.Component);a(14);s.a.render(n.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.15b72f23.chunk.js.map