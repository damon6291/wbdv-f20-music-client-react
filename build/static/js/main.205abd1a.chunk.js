(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{19:function(e,a,t){},22:function(e,a,t){e.exports=t.p+"static/media/damon.6370b3e2.jpg"},30:function(e,a,t){e.exports=t.p+"static/media/background.b59ea9b9.jpg"},33:function(e,a,t){e.exports=t(53)},38:function(e,a,t){},51:function(e,a,t){},53:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),s=(t(38),t(19),t(12)),o=t.n(s),m=t(16),i=(t(13),t(4)),u=t(5),d=function(e){var a=Math.floor(e/6e4),t=(e%6e4/1e3).toFixed(0);return a+":"+(t<10?"0":"")+t},f=function(e){var a=parseInt(e/1e3%60),t=parseInt(e/6e4%60),n=parseInt(e/36e5%24);return(n=n<10?"0"+n:n)+":"+(t=t<10?"0"+t:t)+":"+(a=a<10?"0"+a:a)},p=function(e,a){return e.slice(0,a)+"..."},E=function(e){return JSON.stringify(e).length>2},h=function(e){var a=e.title,t=e.artist,n=e.runtime,r=e.coverImg,c=e.externalUrl;return l.a.createElement("div",{className:"d-flex flex-row justify-content-between align-items-center "},l.a.createElement("div",{className:"d-flex flex-row align-items-center  animate__animated animate__flipInX animate__slow"},l.a.createElement("a",{href:c},l.a.createElement("img",{src:r,className:"m-1",style:{height:"75px",width:"75px",border:"solid 1px black",borderRadius:"5px"},alt:"playlist"})),l.a.createElement("div",{className:"d-flex flex-column ml-2"},l.a.createElement("h5",null,a),l.a.createElement("h6",{className:"text-muted"},"by ",t))),l.a.createElement("span",{className:"float-right font-italic"},d(n)))},g=t(6),b="https://wbdv-f20-music-server-spotify.herokuapp.com/api/",N=(t(45),t(46),t(22)),y=t.n(N),v=function(e){return l.a.createElement("nav",{className:"navbar sticky-top navbar-dark bg-dark navbar-expand-md shadow-lg "},l.a.createElement("span",{className:"navbar-brand font-weight-bold"},"(logo)"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse ",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto "},console.log(e),e.loggedIn?l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"nav-item"},l.a.createElement(g.b,{className:"nav-link",to:"/Home"},l.a.createElement(i.a,{icon:u.d}),"\xa0 Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(g.b,{className:"nav-link",to:"/Profile/myprofile"},l.a.createElement(i.a,{icon:u.l}),"\xa0 Profile")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(g.b,{className:"nav-link",to:"/Search"},l.a.createElement(i.a,{icon:u.g}),"\xa0 Search"))):l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"nav-item"},l.a.createElement(g.b,{className:"nav-link",to:"/Login"},l.a.createElement(i.a,{icon:u.i}),"\xa0 Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(g.b,{className:"nav-link",to:"/Register"},l.a.createElement(i.a,{icon:u.m}),"\xa0 Register")))),l.a.createElement("a",{className:"float-right text-white",href:"".concat(b,"spotifylogin")},l.a.createElement("img",{style:{height:"35px"},alt:"user",className:"rounded-circle mr-2",src:y.a}),"(username)")))},w=(t(24),function(e){var a=e.playlistId,t=e.details,r=void 0===t?[]:t,c=e.findDetails,s=e.totalRuntime,d=r.images,p=r.external_urls,g=function(e){return E(e)},b=function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(a);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("div",{className:"container mt-4"},console.log(r),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8 shadow-lg webdv-playlist-style animate__animated animate__slideInLeft"},l.a.createElement("div",{className:"d-flex flex-column animate__animated animate__fadeIn animate__slow"},l.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},l.a.createElement("a",{href:g(r)&&g(p)?p.spotify:null},l.a.createElement("img",{style:{height:"90px",width:"90px",border:"solid 1px black",borderRadius:"5px"},src:g(r)&&g(d)?d[0].url:null,alt:"playlist"})),l.a.createElement("div",{className:"d-flex flex-column align-items-end"},l.a.createElement("h2",{className:"mt-3 font-weight-bold"},l.a.createElement(i.a,{icon:u.e}),"\xa0",r.name," \xa0",l.a.createElement("small",null,"by ",g(r)?r.owner.display_name:null)),l.a.createElement("h5",{className:"text-muted"},r.description),l.a.createElement("h6",{className:"text-muted"},"total runtime - ",f(s)))),l.a.createElement("hr",{style:{width:"100%",border:"2px dashed #C9E4D1"}})),g(r)?r.tracks.items.map((function(e,a){return l.a.createElement("span",{key:a},l.a.createElement(h,{title:e.track.name,artist:e.track.artists[0].name,runtime:e.track.duration_ms,coverImg:e.track.album.images[0].url,externalUrl:e.track.external_urls.spotify}),l.a.createElement("hr",null))})):null),l.a.createElement("div",{className:"col-4 d-flex flex-column mt-5"},l.a.createElement("button",{className:"m-1 btn btn-primary shadow font-weight-light animate__animated animate__flipInX"},l.a.createElement(i.a,{icon:u.h}),"\xa0 Share to profile"),l.a.createElement("button",{className:"m-1 btn btn-primary shadow font-weight-light animate__animated animate__flipInX"},l.a.createElement(i.a,{icon:u.k}),"\xa0 Import to library"),l.a.createElement("button",{className:"m-1 btn btn-light shadow font-weight-light animate__animated animate__flipInX"},"...")))))}),x=(t(51),function(e){var a=e.playList,t=a.id,n=a.name,r=a.description,c=a.images,s=a.owner;return l.a.createElement("div",{className:"container my-3 webdv-small-playlist-style"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("img",{src:c.length>0?c[0].url:null,alt:"playlist",className:"playlist-image m-2 mr-4"}),l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement(g.b,{to:"/Details/".concat(t),className:"text-dark"},n||"Null Name"),l.a.createElement("span",null,l.a.createElement("small",null,r.length<55?r:p(r,55))),l.a.createElement("span",null,l.a.createElement(g.b,{to:"/Profile/".concat(s.id),className:"text-secondary"},l.a.createElement("small",null,"Created by ",s.display_name))))))}),_=function(e){e.postData;return l.a.createElement("div",{className:"container m-2 webdv-playlist-style"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col d-flex flex-row "},l.a.createElement("img",{style:{height:"30px"},alt:"user",className:"rounded-circle mt-1 mr-2",src:y.a}),l.a.createElement("span",{className:"mt-2 font-weight-bold"},"@username"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("hr",{className:"m-2",style:{color:"black",size:"1px"}}),l.a.createElement("p",null,"Check out some of my favorite songs on my new playlist. Let me know if you like it!"),l.a.createElement(x,{playList:{id:"",images:[{url:"https://upload.wikimedia.org/wikipedia/en/9/93/KendrickGKMC.jpg"}],name:"Title goes here",description:"Something",owner:{display_name:"someUsername"}}}))))},I=function(){return l.a.createElement("div",{className:"container webdv-postgen-style my-3"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("textarea",{placeholder:"Speak your mind...",class:"form-control mt-2",style:{outline:"none"},rows:"2"}),l.a.createElement("button",{class:"ml-1 mt-2 btn btn-outline-dark  d-flex align-content-center justify-content-center align-items-center"},l.a.createElement(i.a,{icon:u.f}))),l.a.createElement("div",{className:"d-flex justify-content-end mt-1"},l.a.createElement("a",{className:"font-weight-bold mb-2",href:"#!"},"Attach a playlist...")))},k=function(e){e.playLists,e.findPlayLists;var a=e.loggedIn;return Object(n.useEffect)((function(){}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{loggedIn:a}),l.a.createElement("div",{className:"container-fluid animate__animated animate__fadeIn"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-2 mt-3",style:{}},a?l.a.createElement("div",{className:"d-flex flex-column align-self-center"},l.a.createElement(g.b,{style:{textDecoration:"none"},className:"shadow-lg btn-lg btn-dark mt-5",to:"/Profile"},l.a.createElement(i.a,{icon:u.l}),l.a.createElement("br",null),"My Profile"),l.a.createElement(g.b,{style:{textDecoration:"none"},className:"shadow-lg btn-lg btn-info mt-2",to:"/Search"},l.a.createElement(i.a,{icon:u.g}),l.a.createElement("br",null),"Search"),l.a.createElement(g.b,{style:{textDecoration:"none"},className:" shadow-lg btn-lg btn-danger mt-2",to:"/Home"},l.a.createElement(i.a,{icon:u.j}),l.a.createElement("br",null),"Log out")):l.a.createElement("div",{className:"d-flex flex-column align-self-center"},l.a.createElement(g.b,{style:{textDecoration:"none !important"},className:"btn btn-lg btn-primary mt-5",to:"/Profile"},l.a.createElement(i.a,{icon:u.l}),l.a.createElement("br",null),"Register"),l.a.createElement(g.b,{style:{textDecoration:"none !important"},className:"btn btn-lg btn-light mt-2",to:"/Login"},l.a.createElement(i.a,{icon:u.i}),l.a.createElement("br",null),"Log in"))),l.a.createElement("div",{className:"col-7 mt-3"},a?l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"text-right font-weight-bold"},l.a.createElement("span",{className:"webdv-title-style"},"\xa0\xa0",l.a.createElement(i.a,{icon:u.b}),"\xa0New post\xa0")),l.a.createElement(I,null)):l.a.createElement("span",null),l.a.createElement("h4",{className:"mb-3 text-right font-weight-bold"},l.a.createElement("span",{className:"webdv-title-style"},"\xa0",l.a.createElement(i.a,{icon:u.c}),"\xa0Latest feed\xa0")),l.a.createElement(_,null),l.a.createElement(_,null),l.a.createElement(_,null)),l.a.createElement("div",{className:"col-3 mt-3"},l.a.createElement("div",{style:{borderRadius:"40px",backgroundColor:"#D5C5C8",opacity:"85%"}},l.a.createElement("span",null,"\xa0"),l.a.createElement("h4",{className:" text-center font-weight-bold"},l.a.createElement("span",{className:"webdv-title-style"},"\xa0",l.a.createElement(i.a,{icon:u.a}),"\xa0Trending music\xa0")),l.a.createElement("hr",null),l.a.createElement(x,{playList:{id:"",images:[{url:"https://upload.wikimedia.org/wikipedia/en/a/ae/Drake_-_Take_Care_cover.jpg"}],name:"Playlist title",description:"A description would be here",owner:{display_name:"user1"}}}),l.a.createElement(x,{playList:{id:"",images:[{url:"https://upload.wikimedia.org/wikipedia/en/c/c8/CarterIII.jpg"}],name:"Example",description:"Something",owner:{display_name:"anotherUser"}}}))))))},L=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("div",{className:"container webdv-playlist-style shadow animate__animated animate__fadeIn"},l.a.createElement("div",{className:"d-flex flex-column align-items-center align-content-end m-3"},l.a.createElement("h2",{className:"mt-3"},"Login\xa0"),l.a.createElement("span",{className:"text-muted"},"Enter your account information below...")),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"username",className:"col-sm-2 col-form-label font-weight-bold"},"Username"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{id:"username",placeholder:"...",type:"text",className:"form-control shadow"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label font-weight-bold"},"Password"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"password",className:"form-control shadow",id:"inputPassword",placeholder:"123qwe!@#"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("button",{className:"m-2 btn btn-block btn-success"},"Sign In")),l.a.createElement("a",{className:"mt-4 float-left font-weight-bold"},"I don't have an account!"),l.a.createElement("a",{href:"#",className:"float-right mt-4 font-weight-bold"},"I forgot my password!")))},F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("div",{className:"container webdv-playlist-style mt-4 shadow animate__animated animate__fadeIn ",style:{border:"solid 2px lightgrey",borderRadius:"20px"}},l.a.createElement("div",{className:"d-flex flex-column align-items-center align-content-end m-3"},l.a.createElement("h2",{className:""},"Register\xa0"),l.a.createElement("span",{className:"text-muted"},"Enter your new profile information below...")),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"realName",className:"col-sm-2 col-form-label font-weight-bold"},"Your name"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{id:"realName",placeholder:"Rob Smith",type:"text",className:"form-control shadow"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"email",className:"col-sm-2 col-form-label font-weight-bold"},"Email"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{id:"email",placeholder:"you@mail.org",type:"email",className:"form-control shadow"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"username",className:"col-sm-2 col-form-label font-weight-bold"},"Username"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{id:"username",placeholder:"...",type:"text",className:"form-control shadow"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label font-weight-bold"},"Password"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"password",className:"form-control shadow",id:"inputPassword",placeholder:"123qwe!@#"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("button",{className:"m-2 btn btn-block btn-primary"},"Create my profile!")),l.a.createElement("a",{className:"m-2 float-right font-weight-bold"},"Already have an account?")))},j=t(30),P=t.n(j),O=function(e){var a=e.ownerId,t=e.profile,r=void 0===t?[]:t,c=e.findProfile,s=e.playlists,i=void 0===s?[]:s,u=e.findPlaylists,d=e.findMyProfile,f=e.following,p=void 0===f?[]:f,h=function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"myprofile"===a?d():(c(a),u(a));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){return E(e)},b=r.images;return Object(n.useEffect)((function(){h()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("div",{className:"animate__animated animate__fadeIn"},console.log(p),l.a.createElement("img",{src:P.a,alt:"background",className:"background-image shadow"}),l.a.createElement("div",{className:"container position-relative profile-position"},l.a.createElement("div",{className:"d-flex align-items-end px-5"},l.a.createElement("img",{src:g(r)&&g(b)?b[0].url:null,alt:"profile",className:"profile-image border mr-4 shadow"}),l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("h4",{className:"mb-2"},r.display_name),l.a.createElement("span",{className:"text-secondary mb-2"},l.a.createElement("small",null,"Followers: ",g(r)&&r.followers.total))),l.a.createElement("button",{className:"btn btn-danger h-25 ml-auto px-2 py-1 mb-4"},"Follow")),l.a.createElement("div",{className:"d-flex mt-5"},l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"w-75"},l.a.createElement("h3",{className:"border-bottom pl-4 pb-3"},"Playlists"),g(i)&&i.items.map((function(e,a){return l.a.createElement(x,{key:a,playList:e})})))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h3",{className:"border-bottom pl-4 pb-3"},"Followers"),g(p)&&p.artists.items.map((function(e,a){return console.log(e),l.a.createElement(R,{key:a,img:g(e.images)?e.images[0].url:null,name:e.name,followers:e.followers.total})}))))))))},S=t(32),D=function(e){var a=e.playLists,t=void 0===a?[]:a,r=e.findPlayLists,c=Object(n.useState)(""),s=Object(S.a)(c,2),o=s[0],m=s[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement("div",{className:"container animate__animated animate__fadeIn"},l.a.createElement("div",{className:"d-flex flex-column justify-content-center"},l.a.createElement("input",{type:"text",placeholder:"Search...",className:"w-75 mx-auto my-5 search-box px-2 py-2 shadow",onChange:function(e){return m(e.target.value)},onKeyDown:function(e){return function(e){"Enter"===e.key&&r(o)}(e)}}),l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"w-75"},l.a.createElement("h3",{className:"border-bottom pl-4 pb-3"},"Playlists"),t.map((function(e,a){return console.log(e),l.a.createElement(x,{key:a,playList:e})})))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h3",{className:"border-bottom pl-4 pb-3"},"Users")))))))},R=function(e){var a=e.img,t=e.name,n=e.followers;return l.a.createElement("div",{className:"container mt-4"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("img",{src:a,alt:"user",className:"user-circle-image mr-2"}),l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("span",null,t),l.a.createElement("span",{className:"text-secondary"},l.a.createElement("small",null,n," followers"))),l.a.createElement("button",{className:"btn btn-danger h-25 ml-auto px-2 py-1"},"Follow")))},C=t(11),T=function(e){return fetch("".concat(b,"playlists/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return JSON.parse(e)}))},A=function(e){return fetch("".concat(b,"playlist/").concat(e,"/details")).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return JSON.parse(e)}))},J=function(e){return fetch("".concat(b,"profile/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return JSON.parse(e)}))},M=function(e){return fetch("".concat(b,"profile/").concat(e,"/playlists")).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return JSON.parse(e)}))},H=function(){return fetch("".concat(b,"myprofile")).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return JSON.parse(e)}))},U=function(){return fetch("".concat(b,"myprofile/following")).then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return JSON.parse(e)}))},Y=function(e){return{playLists:e.playListReducer.playLists,loggedIn:!0}},W=function(e){return{findPlayLists:function(a){return T(a).then((function(a){!function(e,a){e({type:"FIND_PLAYLIST",playLists:a})}(e,a.playlists.items)}))}}},X={Search:Object(C.b)(Y,W)(D),Home:Object(C.b)(Y,W)(k)},G=Object(C.b)((function(e){return{details:e.DetailsReducer.details,totalRuntime:e.DetailsReducer.totalRuntime}}),(function(e){return{findDetails:function(a){return A(a).then((function(a){!function(e,a){e({type:"FIND_DETAILS",details:a})}(e,a)}))}}}))(w),K=function(e,a){e({type:"FIND_PLAYLISTS",playlists:a})},q=Object(C.b)((function(e){return{profile:e.ProfileReducer.profile,playlists:e.ProfileReducer.playlists,following:e.ProfileReducer.following}}),(function(e){return{findProfile:function(a){return J(a).then((function(a){!function(e,a){e({type:"FIND_PROFILE",profile:a})}(e,a)}))},findPlaylists:function(a){return M(a).then((function(a){K(e,a)}))},findMyProfile:function(){return H().then((function(a){!function(e,a){e({type:"FIND_MYPROFILE",profile:a})}(e,a),console.log(a.id),M(a.id).then((function(a){K(e,a)})),U().then((function(a){!function(e,a){e({type:"FIND_FOLLOWING",following:a})}(e,a)}))}))}}}))(O),B=t(3),z=t(18),$={playLists:[]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FIND_PLAYLIST":return{playLists:a.playLists};default:return e}},V={details:[],totalRuntime:0},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FIND_DETAILS":var t=0;return a.details.tracks.items.map((function(e){return t+=e.track.duration_ms})),{details:a.details,totalRuntime:t};default:return e}},ee=t(14),ae={profile:[],playlists:[],following:[]},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FIND_PROFILE":return Object(ee.a)(Object(ee.a)({},e),{},{following:[],profile:a.profile});case"FIND_PLAYLISTS":return Object(ee.a)(Object(ee.a)({},e),{},{playlists:a.playlists});case"FIND_MYPROFILE":return{playlists:a.playlists,profile:a.profile};case"FIND_FOLLOWING":return Object(ee.a)(Object(ee.a)({},e),{},{following:a.following});default:return e}},ne=Object(z.b)({playListReducer:Q,DetailsReducer:Z,ProfileReducer:te}),le=Object(z.c)(ne);var re=function(){return l.a.createElement(C.a,{store:le},l.a.createElement(g.a,null,l.a.createElement(B.a,{path:"/Details/:playlistId",render:function(e){return l.a.createElement(G,Object.assign({},e,{playlistId:e.match.params.playlistId}))}}),l.a.createElement(B.a,{path:"/",exact:!0,component:X.Home}),l.a.createElement(B.a,{path:"/Home",exact:!0,component:X.Home}),l.a.createElement(B.a,{path:"/Login",component:L}),l.a.createElement(B.a,{path:"/Register",component:F}),l.a.createElement(B.a,{path:"/Profile/:ownerId",render:function(e){return l.a.createElement(q,{ownerId:e.match.params.ownerId})}}),l.a.createElement(B.a,{path:"/Search",component:X.Search})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.205abd1a.chunk.js.map