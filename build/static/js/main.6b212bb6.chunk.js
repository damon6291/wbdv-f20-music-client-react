(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/damon.6370b3e2.jpg"},18:function(e,a,t){},29:function(e,a,t){e.exports=t.p+"static/media/background.b59ea9b9.jpg"},32:function(e,a,t){e.exports=t(48)},37:function(e,a,t){},46:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),c=t.n(r),s=(t(37),t(18),t(14)),m=t.n(s),o=t(21),i=(t(11),t(6)),u=t(7),d=function(e){var a=Math.floor(e/6e4),t=(e%6e4/1e3).toFixed(0);return a+":"+(t<10?"0":"")+t},f=function(e){parseInt(e%1e3/100);var a=parseInt(e/1e3%60),t=parseInt(e/6e4%60),n=parseInt(e/36e5%24);return(n=n<10?"0"+n:n)+":"+(t=t<10?"0"+t:t)+":"+(a=a<10?"0"+a:a)},p=function(e,a){return e.slice(0,a)+"..."},E=function(e){var a=e.title,t=e.artist,n=e.runtime,r=e.coverImg;return l.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-center "},l.a.createElement("div",{className:"d-flex flex-row align-items-center  animate__animated animate__flipInX animate__slow"},l.a.createElement("img",{src:r,className:"m-1",style:{height:"75px",width:"75px",border:"solid 1px black",borderRadius:"5px"},alt:"playlist"}),l.a.createElement("div",{className:"d-flex flex-column ml-2"},l.a.createElement("h5",null,a),l.a.createElement("h6",{className:"text-muted"},"by ",t))),l.a.createElement("span",{className:"float-right font-italic"},d(n)))},b=t(5),h=t(13),g=t.n(h),v=function(){return l.a.createElement("nav",{class:"navbar sticky-top navbar-dark bg-dark navbar-expand-md shadow-lg "},l.a.createElement("span",{class:"navbar-brand font-weight-bold"},"(logo)"),l.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{class:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse ",id:"navbarSupportedContent"},l.a.createElement("ul",{class:"navbar-nav mr-auto "},l.a.createElement("li",{class:"nav-item"},l.a.createElement(b.b,{class:"nav-link",to:"/Home"},l.a.createElement(i.a,{icon:u.a}),"\xa0 Home")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(b.b,{class:"nav-link",to:"/Profile"},l.a.createElement(i.a,{icon:u.h}),"\xa0 Profile")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(b.b,{class:"nav-link",to:"/Search"},l.a.createElement(i.a,{icon:u.c}),"\xa0 Search")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(b.b,{class:"nav-link",to:"/Login"},l.a.createElement(i.a,{icon:u.e}),"\xa0 Login")),l.a.createElement("li",{class:"nav-item"},l.a.createElement(b.b,{class:"nav-link",to:"/Register"},l.a.createElement(i.a,{icon:u.i}),"\xa0 Register"))),l.a.createElement("span",{className:"float-right text-white"},l.a.createElement("img",{style:{height:"35px"},className:"rounded-circle mr-2",src:g.a}),"(username)")))},w=(t(23),function(e){var a=e.playlistId,t=e.details,r=void 0===t?[]:t,c=e.findDetails,s=e.totalRuntime,d=function(){var e=Object(o.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={playlistId:a},e.next=3,c(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("div",{className:"container mt-4"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8 shadow-lg webdv-playlist-style animate__animated animate__slideInLeft"},l.a.createElement("div",{className:"d-flex flex-column align-items-end animate__animated animate__fadeIn animate__slow"},l.a.createElement("h2",{className:"mt-3 font-weight-bold"},l.a.createElement(i.a,{icon:u.b}),"\xa0",r.name," \xa0",l.a.createElement("small",null,"by ",JSON.stringify(r).length>2?r.owner.display_name:null)),l.a.createElement("h5",{className:"text-muted"},r.description),l.a.createElement("h6",{className:"text-muted"},"total runtime - ",f(s)),l.a.createElement("hr",{style:{width:"100%",border:"2px dashed #C9E4D1"}})),JSON.stringify(r).length>2?r.tracks.items.map((function(e,a){return l.a.createElement("span",{key:a},l.a.createElement(E,{title:e.track.name,artist:e.track.artists[0].name,runtime:e.track.duration_ms,coverImg:e.track.album.images[0].url}),l.a.createElement("hr",null))})):null),l.a.createElement("div",{className:"col-4 d-flex flex-column mt-5"},l.a.createElement("button",{className:"m-1 btn btn-primary shadow font-weight-light animate__animated animate__flipInX"},l.a.createElement(i.a,{icon:u.d}),"\xa0 Share to profile"),l.a.createElement("button",{className:"m-1 btn btn-primary shadow font-weight-light animate__animated animate__flipInX"},l.a.createElement(i.a,{icon:u.g}),"\xa0 Import to library"),l.a.createElement("button",{className:"m-1 btn btn-light shadow font-weight-light animate__animated animate__flipInX"},"...")))))}),y=(t(46),function(e){e.postData;return l.a.createElement("div",{className:"container m-2 webdv-playlist-style"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("span",null,"This is a test post written by someone."))))}),N=function(e){e.playLists;var a=e.findPlayLists;return Object(n.useEffect)((function(){(function(){var e=Object(o.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a({searchParams:"top"});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("div",{className:"container animate__animated animate__fadeIn"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"d-flex flex-column align-self-center"},l.a.createElement(b.b,{class:"btn btn-lg btn-dark mt-5",to:"/Profile"},l.a.createElement(i.a,{icon:u.h})),l.a.createElement(b.b,{class:"btn btn-lg btn-info mt-2",to:"/Search"},l.a.createElement(i.a,{icon:u.c})),l.a.createElement(b.b,{class:"btn btn-lg btn-danger mt-2",to:"/Home"},l.a.createElement(i.a,{icon:u.f})))),l.a.createElement("div",{className:"col-7 mt-3"},l.a.createElement("h4",{className:"text-right font-weight-light"},"Your feed"),l.a.createElement(y,null),l.a.createElement(y,null),l.a.createElement(y,null)),l.a.createElement("div",{className:"col-3 mt-3"},l.a.createElement("h4",{className:"text-right font-weight-light"},"Trending music"),l.a.createElement(y,null),l.a.createElement(y,null)))))},x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("div",{class:"container webdv-playlist-style shadow animate__animated animate__fadeIn"},l.a.createElement("div",{className:"d-flex flex-column align-items-center align-content-end m-3"},l.a.createElement("h2",{className:"mt-3"},"Login\xa0"),l.a.createElement("span",{className:"text-muted"},"Enter your account information below...")),l.a.createElement("div",{class:"form-group row"},l.a.createElement("label",{for:"username",class:"col-sm-2 col-form-label font-weight-bold"},"Username"),l.a.createElement("div",{class:"col-sm-10"},l.a.createElement("input",{id:"username",placeholder:"...",type:"text",class:"form-control shadow"}))),l.a.createElement("div",{class:"form-group row"},l.a.createElement("label",{for:"inputPassword",class:"col-sm-2 col-form-label font-weight-bold"},"Password"),l.a.createElement("div",{class:"col-sm-10"},l.a.createElement("input",{type:"password",class:"form-control shadow",id:"inputPassword",placeholder:"123qwe!@#"}))),l.a.createElement("div",{class:"form-group row"},l.a.createElement("button",{class:"m-2 btn btn-block btn-success"},"Sign In")),l.a.createElement("a",{className:"mt-4 float-left font-weight-bold"},"I don't have an account!"),l.a.createElement("a",{href:"#",className:"float-right mt-4 font-weight-bold"},"I forgot my password!")))},_=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("div",{class:"container webdv-playlist-style mt-4 shadow animate__animated animate__fadeIn ",style:{border:"solid 2px lightgrey",borderRadius:"20px"}},l.a.createElement("div",{className:"d-flex flex-column align-items-center align-content-end m-3"},l.a.createElement("h2",{className:""},"Register\xa0"),l.a.createElement("span",{className:"text-muted"},"Enter your new profile information below...")),l.a.createElement("div",{class:"form-group row"},l.a.createElement("label",{for:"realName",class:"col-sm-2 col-form-label font-weight-bold"},"Your name"),l.a.createElement("div",{class:"col-sm-10"},l.a.createElement("input",{id:"realName",placeholder:"Rob Smith",type:"text",class:"form-control shadow"}))),l.a.createElement("div",{class:"form-group row"},l.a.createElement("label",{for:"email",class:"col-sm-2 col-form-label font-weight-bold"},"Email"),l.a.createElement("div",{class:"col-sm-10"},l.a.createElement("input",{id:"email",placeholder:"you@mail.org",type:"email",class:"form-control shadow"}))),l.a.createElement("div",{class:"form-group row"},l.a.createElement("label",{for:"username",class:"col-sm-2 col-form-label font-weight-bold"},"Username"),l.a.createElement("div",{class:"col-sm-10"},l.a.createElement("input",{id:"username",placeholder:"...",type:"text",class:"form-control shadow"}))),l.a.createElement("div",{class:"form-group row"},l.a.createElement("label",{for:"inputPassword",class:"col-sm-2 col-form-label font-weight-bold"},"Password"),l.a.createElement("div",{class:"col-sm-10"},l.a.createElement("input",{type:"password",class:"form-control shadow",id:"inputPassword",placeholder:"123qwe!@#"}))),l.a.createElement("div",{class:"form-group row"},l.a.createElement("button",{class:"m-2 btn btn-block btn-primary"},"Create my profile!")),l.a.createElement("a",{className:"m-2 float-right font-weight-bold"},"Already have an account?")))},I=t(29),k=t.n(I),S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("div",null,l.a.createElement("img",{src:k.a,alt:"background",className:"background-image shadow"}),l.a.createElement("div",{className:"container position-relative profile-position"},l.a.createElement("div",{className:"d-flex align-items-end px-5"},l.a.createElement("img",{src:g.a,alt:"profile",className:"profile-image border mr-4 shadow"}),l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("h4",{className:"mb-2"},"Damon Joung"),l.a.createElement("span",{className:"text-secondary mb-2"},l.a.createElement("small",null,"5 Followers"))),l.a.createElement("button",{className:"btn btn-danger h-25 ml-auto px-2 py-1 mb-4"},"Follow")),l.a.createElement("div",{className:"d-flex mt-5"},l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"w-75"},l.a.createElement("h3",{className:"border-bottom pl-4 pb-3"},"Playlists"))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h3",{className:"border-bottom pl-4 pb-3"},"Followers"),l.a.createElement(j,null),l.a.createElement(j,null)))))))},L=t(31),P=function(e){var a=e.playLists,t=void 0===a?[]:a,r=e.findPlayLists,c=Object(n.useState)(""),s=Object(L.a)(c,2),m=s[0],o=s[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"d-flex flex-column justify-content-center"},l.a.createElement("input",{type:"text",placeholder:"Search...",className:"w-75 mx-auto my-5 search-box px-2 py-2 shadow",onChange:function(e){return o(e.target.value)},onKeyDown:function(e){return function(e){"Enter"===e.key&&r({searchParams:m})}(e)}}),l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"w-75"},l.a.createElement("h3",{className:"border-bottom pl-4 pb-3"},"Playlists"),t.map((function(e,a){return console.log(e),l.a.createElement(O,{key:a,playList:e})})))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h3",{className:"border-bottom pl-4 pb-3"},"Users"),l.a.createElement(j,null),l.a.createElement(j,null)))))))},j=function(e){e.img,e.name,e.followers;return l.a.createElement("div",{className:"container mt-4"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("img",{src:g.a,alt:"user",className:"user-circle-image mr-2"}),l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("span",null,"Damon Joung"),l.a.createElement("span",{className:"text-secondary"},l.a.createElement("small",null,"5 followers"))),l.a.createElement("button",{className:"btn btn-danger h-25 ml-auto px-2 py-1"},"Follow")))},O=function(e){var a=e.playList,t=a.id,n=a.name,r=a.description,c=a.images,s=a.owner;return l.a.createElement("div",{className:"container mt-4"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("img",{src:c.length>0?c[0].url:null,alt:"playlist",className:"playlist-image mr-5"}),l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement(b.b,{to:"/Details/".concat(t),className:"text-dark"},n||"Null Name"),l.a.createElement("span",null,l.a.createElement("small",null,r.length<55?r:p(r,55))),l.a.createElement("span",{className:"text-secondary"},l.a.createElement("small",null,"Created by ",s.display_name)))))},D=t(12),R="https://wbdv-f20-music-server-spotify.herokuapp.com/",F=function(e){return fetch("".concat(R,"searchForPlaylists"),{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"},json:!0}).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return JSON.parse(e)})).then((function(e){return e.playlists.items}))},J=function(e){return fetch("".concat(R,"getPlaylistInformation"),{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"},json:!0}).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return JSON.parse(e)}))},T=function(e){return{playLists:e.playListReducer.playLists}},C=function(e){return{findPlayLists:function(a){return F(a).then((function(a){!function(e,a){e({type:"FIND_PLAYLIST",playLists:a})}(e,a)}))}}},H={Search:Object(D.b)(T,C)(P),Home:Object(D.b)(T,C)(N)},A=Object(D.b)((function(e){return{details:e.DetailsReducer.details,totalRuntime:e.DetailsReducer.totalRuntime}}),(function(e){return{findDetails:function(a){return J(a).then((function(a){!function(e,a){e({type:"FIND_DETAILS",details:a})}(e,a)}))}}}))(w),X=t(3),Y=t(17),U={playLists:[]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FIND_PLAYLIST":return{playLists:a.playLists};default:return e}},B={details:[],totalRuntime:0},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FIND_DETAILS":var t=0;return a.details.tracks.items.map((function(e){return t+=e.track.duration_ms})),{details:a.details,totalRuntime:t};default:return e}},W=Object(Y.b)({playListReducer:q,DetailsReducer:M}),K=Object(Y.c)(W);var $=function(){return l.a.createElement(D.a,{store:K},l.a.createElement(b.a,null,l.a.createElement(X.a,{path:"/Details/:playlistId",render:function(e){return l.a.createElement(A,Object.assign({},e,{playlistId:e.match.params.playlistId}))}}),l.a.createElement(X.a,{path:"/Home",component:H.Home}),l.a.createElement(X.a,{path:"/Login",component:x}),l.a.createElement(X.a,{path:"/Register",component:_}),l.a.createElement(X.a,{path:"/Profile",component:S}),l.a.createElement(X.a,{path:"/Search",component:H.Search})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.6b212bb6.chunk.js.map