(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{107:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},124:function(e,t,n){e.exports={selectedPage:"paginator_selectedPage__MveUZ",paginator:"paginator_paginator__3mR-g",pageNumber:"paginator_pageNumber__ngnHq"}},153:function(e,t,n){e.exports={usersPhoto:"users_usersPhoto__3qpGH",userItems:"users_userItems__1aHz_"}},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return g})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return O})),n.d(t,"d",(function(){return S}));var r=n(10),a=n.n(r),c=n(24),u=n(51),o=n(5),i=n(59),s=n(16),l=function(e){return s.c.get("profile/".concat(e)).then((function(e){return e.data}))},f=function(e){return s.c.get("profile/status/".concat(e)).then((function(e){return e.data}))},d=function(e){return s.c.put("profile/status",{status:e}).then((function(e){return e.data}))},m=function(e){var t=new FormData;return t.append("image",e),s.c.put("profile/photo",t,{headers:{"Content-type":"multipart/form-data"}}).then((function(e){return e.data}))},p=function(e){return s.c.put("profile",e).then((function(e){return e.data}))},E={posts:[{id:1,message:"Hi, how are you?",likesCount:3},{id:2,message:"It's my first post",likesCount:1},{id:3,message:"Hello",likesCount:9},{id:4,message:"Da-da",likesCount:91}],profile:null,status:""},b={addPostActionCreator:function(e){return{type:"ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SET_STATUS",status:e}},deletePost:function(e){return{type:"DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SAVE_PHOTO_SUCCESS",photos:e}}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:r=t.sent,n(b.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d(e);case 3:t.sent.resultCode===s.b.Success&&n(b.setStatus(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:(r=t.sent).resultCode===s.b.Success&&n(b.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.id,t.next=3,p(e);case 3:if((u=t.sent).resultCode!==s.b.Success){t.next=12;break}if(null===c){t.next=9;break}n(S(c)),t.next=10;break;case 9:throw new Error("Id \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c null");case 10:t.next=14;break;case 12:return n(Object(i.a)("edit_profile",{_error:u.messages[0]})),t.abrupt("return",Promise.reject(u.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(b.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n])});case"SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SAVE_PHOTO_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r,a,c=n(196),u=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c6656948-fc32-4fc4-9d90-60cb1f9c7aee"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}))},170:function(e,t,n){e.exports=n.p+"static/media/default_avatar.7e3dbe23.png"},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(51),a=n(5),c={dialogs:[{id:1,name:"\u0410\u043d\u043e\u043d\u0438\u043c"},{id:2,name:"\u0410\u043d\u043e\u043d\u0438\u043c"},{id:3,name:"\u0410\u043d\u043e\u043d\u0438\u043c"},{id:5,name:"\u0410\u043d\u043e\u043d\u0438\u043c"}],messages:[{id:1,message:"Hello"},{id:2,message:"How are you"},{id:3,message:"Hey yo"}]},u={sendMessage:function(e){return{type:"SEND-MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},194:function(e,t,n){"use strict";n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return x})),n.d(t,"b",(function(){return U}));var r,a=n(10),c=n.n(a),u=n(24),o=n(51),i=n(5),s=n(378),l={"messages-received":[],"status-changed":[]},f=function(){E("pending"),setTimeout(b,3e3)},d=function(e){var t=JSON.parse(e.data);l["messages-received"].forEach((function(e){return e(t)}))},m=function(){E("ready")},p=function(){E("error"),console.log("Error! Refresh page.")},E=function(e){l["status-changed"].forEach((function(t){return t(e)}))},b=function(){var e,t,n,a;g(),r=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),E("pending"),null===(e=r)||void 0===e||e.addEventListener("close",f),null===(t=r)||void 0===t||t.addEventListener("message",d),null===(n=r)||void 0===n||n.addEventListener("open",m),null===(a=r)||void 0===a||a.addEventListener("error",p)},g=function(){var e,t,n,a,c;null===(e=r)||void 0===e||e.removeEventListener("close",f),null===(t=r)||void 0===t||t.removeEventListener("message",d),null===(n=r)||void 0===n||n.removeEventListener("open",m),null===(a=r)||void 0===a||a.removeEventListener("error",p),null===(c=r)||void 0===c||c.close()},h=function(){b()},v=function(){l["messages-received"]=[],l["status-changed"]=[],g()},O=function(e,t){return l[e].push(t),function(){l[e]=l[e].filter((function(e){return e!==t}))}},S=function(e,t){l[e]=l[e].filter((function(e){return e!==t}))},j=function(e){var t;null===(t=r)||void 0===t||t.send(e)},_={messages:[],status:"pending"},w=function(e){return{type:"MESSAGE_RECEIVED",payload:{messages:e}}},y=function(e){return{type:"STATUS_CHANGED",payload:{status:e}}},C=null,P=function(e){return null===C&&(C=function(t){e(w(t))}),C},I=null,T=function(e){return null===I&&(I=function(t){e(y(t))}),I},k=function(){return function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(),O("messages-received",P(t)),O("status-changed",T(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){return function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S("messages-received",P(t)),S("status-changed",T(t)),v();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j(e);case 1:case"end":return t.stop()}}),t)})))};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGE_RECEIVED":return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(o.a)(e.messages),Object(o.a)(t.payload.messages.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Object(s.a)()})})))).filter((function(e,t,n){return t>=n.length-100}))});case"STATUS_CHANGED":return Object(i.a)(Object(i.a)({},e),{},{status:t.payload.status});default:return e}}},207:function(e,t,n){e.exports={lds_ellipsis:"Preloader_lds_ellipsis__2BwT0","lds-ellipsis1":"Preloader_lds-ellipsis1__IN4-T","lds-ellipsis2":"Preloader_lds-ellipsis2__2LLl-","lds-ellipsis3":"Preloader_lds-ellipsis3__3FJmT"}},242:function(e,t,n){e.exports=n(372)},369:function(e,t,n){},371:function(e,t,n){},372:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),u=n(11),o=n.n(u),i=n(25),s=n(20),l=n(17),f=n(375),d=n(377),m=n(5),p=n(10),E=n.n(p),b=n(24),g=n(59),h=n(16),v=function(){return h.c.get("auth/me").then((function(e){return e.data}))},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return h.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},S=function(){return h.c.delete("auth/login").then((function(e){return e.data}))},j=function(){return h.c.get("security/get-captcha-url").then((function(e){return e.data}))},_={id:null,login:null,email:null,isAuth:!1,captchaUrl:null},w=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:r}}},y=function(e){return{type:"GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},C=function(){return function(){var e=Object(b.a)(E.a.mark((function e(t){var n,r,a,c,u;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:(n=e.sent).resultCode===h.b.Success&&(r=n.data,a=r.id,c=r.login,u=r.email,t(w(a,u,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":case"GET_CAPTCHA_URL_SUCCESS":return Object(m.a)(Object(m.a)({},e),t.payload);default:return e}},I={initialized:!1},T=function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/APP/INITIALIZED_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{initialized:!0});default:return e}},x=n(381),U=n(382),L=n(383),N=n(157),A=N.a.SubMenu,F=function(){return a.a.createElement(N.a,{mode:"inline",style:{height:"100%"}},a.a.createElement(A,{key:"sub1",icon:a.a.createElement(x.a,null),title:"My profile"},a.a.createElement(N.a.Item,{key:"1"},a.a.createElement(i.b,{to:"/profile"},"Profile")),a.a.createElement(N.a.Item,{key:"2"},a.a.createElement(i.b,{to:"/dialogs"},"Messages")),a.a.createElement(N.a.Item,{key:"3"},a.a.createElement(i.b,{to:"/music"},"Music")),a.a.createElement(N.a.Item,{key:"4"},a.a.createElement(i.b,{to:"/settings"},"Settings"))),a.a.createElement(A,{key:"sub2",icon:a.a.createElement(U.a,null),title:"Users"},a.a.createElement(N.a.Item,{key:"5"},a.a.createElement(i.b,{to:"/users"},"Users")),a.a.createElement(N.a.Item,{key:"6"},a.a.createElement(i.b,{to:"/chat"},"Chat"))),a.a.createElement(A,{key:"sub3",icon:a.a.createElement(L.a,null),title:"News"},a.a.createElement(N.a.Item,{key:"7"},a.a.createElement(i.b,{to:"/news"},"News"))))},R=function(){return a.a.createElement("div",null,"Music")},G=function(){return a.a.createElement("div",null,"News")},D=function(){return a.a.createElement("div",null,"Settings")},M=n(152),H=n(170),z=n.n(H),W=n(153),V=n.n(W),q=function(e){var t=e.user,n=e.followingInProgress,r=e.unFollow,c=e.follow;return a.a.createElement("div",{className:V.a.userItems},a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(i.c,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:z.a,alt:"Avatar img",className:V.a.usersPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Un follow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status))))},B=n(109),J=n(158),X=n(124),Z=n.n(X),K=n(2),Q=n.n(K),Y=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,u=void 0===c?1:c,o=e.onPageChanged,i=void 0===o?function(e){return e}:o,s=e.portionSize,l=void 0===s?10:s,f=Object(r.useState)(1),d=Object(J.a)(f,2),m=d[0],p=d[1],E=Math.ceil(t/n),b=[],g=1;g<=E;g++)b.push(g);var h=Math.ceil(E/l),v=(m-1)*l+1,O=m*l;return a.a.createElement("div",{className:Z.a.paginator},m>1&&a.a.createElement("button",{onClick:function(){p(m-1)}},"PREV"),b.filter((function(e){return e>=v&&e<=O})).map((function(e){return a.a.createElement("span",{className:Q()(Object(B.a)({},Z.a.selectedPage,u===e),Z.a.pageNumber),key:e,onClick:function(){i(e)}},e)})),h>m&&a.a.createElement("button",{onClick:function(){p(m+1)}},"NEXT"))},$=n(87),ee=n(98),te=n(210),ne=Object(te.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(){return!0}))})),re=function(e){return e.usersPage.pageSize},ae=function(e){return e.usersPage.totalUsersCount},ce=function(e){return e.usersPage.currentPage},ue=function(e){return e.usersPage.isFetching},oe=function(e){return e.usersPage.followingInProgress},ie=function(e){return e.usersPage.filter},se=function(e){var t=e.onFilterChanged,n=Object(c.d)(ie);return a.a.createElement("div",null,a.a.createElement(ee.c,{enableReinitialize:!0,initialValues:{term:n.term,friend:String(n.friend)},validate:function(e){},onSubmit:function(e,n){var r=n.setSubmitting,a={term:e.term,friend:"null"===e.friend?null:"true"===e.friend};t(a),r(!1)}},(function(e){var t=e.isSubmitting;return a.a.createElement(ee.b,null,a.a.createElement(ee.a,{type:"text",name:"term"}),a.a.createElement(ee.a,{name:"friend",as:"select"},a.a.createElement("option",{value:"null"},"All"),a.a.createElement("option",{value:"true"},"Followed"),a.a.createElement("option",{value:"false"},"Un followed")),a.a.createElement("button",{type:"submit",disabled:t},"Find"))})))},le=n(51),fe=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(m.a)(Object(m.a)({},e),r):e}))},de={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return h.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return h.c.post("follow/".concat(e),{}).then((function(e){return e.data}))},unFollow:function(e){return h.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},me={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},pe=function(e){return{type:"FOLLOW",userId:e}},Ee=function(e){return{type:"UN_FOLLOW",userId:e}},be=function(e){return{type:"SET_USERS",users:e}},ge=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},he=function(e){return{type:"SET_TOTAL_USERS_COUNT",count:e}},ve=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},Oe=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},Se=function(e){return{type:"SET_FILTER",payload:e}},je=function(e,t,n){return function(){var r=Object(b.a)(E.a.mark((function r(a){var c;return E.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(ve(!0)),a(ge(e)),a(Se(n)),r.next=5,de.getUsers(e,t,n.term,n.friend);case 5:c=r.sent,a(ve(!1)),a(be(c.items)),a(he(c.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},_e=function(){var e=Object(b.a)(E.a.mark((function e(t,n,r,a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Oe(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(Oe(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(m.a)(Object(m.a)({},e),{},{users:fe(e.users,t.userId,"id",{followed:!0})});case"UN_FOLLOW":return Object(m.a)(Object(m.a)({},e),{},{users:fe(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(m.a)(Object(m.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(m.a)(Object(m.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(m.a)(Object(m.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(le.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});case"SET_FILTER":return Object(m.a)(Object(m.a)({},e),{},{filter:t.payload});default:return e}},ye=function(){var e=Object(c.c)(),t=Object(s.g)(),n=Object(c.d)(ne),u=Object(c.d)(ae),o=Object(c.d)(re),i=Object(c.d)(ie),l=Object(c.d)(ce),f=Object(c.d)(ue),d=Object(c.d)(oe);Object(r.useEffect)((function(){var n=M.parse(t.location.search.substr(1)),r=l,a=i;switch(n.page&&(r=Number(n.page)),n.term&&(a=Object(m.a)(Object(m.a)({},a),{},{term:n.term})),n.friend){case"null":a=Object(m.a)(Object(m.a)({},a),{},{friend:null});break;case"true":a=Object(m.a)(Object(m.a)({},a),{},{friend:!0});break;case"false":a=Object(m.a)(Object(m.a)({},a),{},{friend:!1})}e(je(r,o,a))}),[]),Object(r.useEffect)((function(){var e={};i.term&&(e.term=i.term),null!==i.friend&&(e.friend=String(i.friend)),1!==l&&(e.page=String(l)),t.push({pathname:"/users",search:M.stringify(e)})}),[i,l]);var p=function(t){e(function(e){return function(){var t=Object(b.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_e(n,e,de.follow.bind(de),pe);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},g=function(t){e(function(e){return function(){var t=Object(b.a)(E.a.mark((function t(n){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_e(n,e,de.unFollow.bind(de),Ee);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))};return a.a.createElement("div",null,a.a.createElement("h2",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"),a.a.createElement(se,{onFilterChanged:function(t){e(je(1,o,t))}}),a.a.createElement(Y,{currentPage:l,pageSize:o,totalItemsCount:u,onPageChanged:function(t){e(je(t,o,i))}}),f?a.a.createElement($.a,null):a.a.createElement("div",null,n.map((function(e){return a.a.createElement(q,{user:e,followingInProgress:d,follow:p,unFollow:g,key:e.id})}))))},Ce=n(379),Pe=n(380),Ie=n(376),Te=n(126),ke=function(e){return e.auth.isAuth},xe=f.a.Header,Ue=function(){var e=Object(c.c)(),t=Object(c.d)(ke);return a.a.createElement(xe,{className:"header"},a.a.createElement("div",{className:"logo"}),a.a.createElement(Ce.a,null,a.a.createElement(Pe.a,{span:19},a.a.createElement(N.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},a.a.createElement(N.a.Item,{key:"1"},a.a.createElement(i.b,{to:"/profile"},"Profile")))),t?a.a.createElement(a.a.Fragment,null,a.a.createElement(Pe.a,{span:1},a.a.createElement(Ie.a,{style:{backgroundColor:"#87d068"},icon:a.a.createElement(x.a,null)})),a.a.createElement(Pe.a,{span:4},a.a.createElement(Te.a,{onClick:function(){e(function(){var e=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:e.sent.resultCode===h.b.Success&&t(w(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Log out"))):a.a.createElement(Pe.a,{span:5},a.a.createElement(Te.a,null,a.a.createElement(i.b,{to:"/login"},"Login")))))},Le=n(192),Ne=n(107),Ae=n(50),Fe=n(88),Re=n.n(Fe),Ge=function(){var e=Object(c.c)(),t=Object(c.d)((function(e){return e.auth.isAuth})),n=Object(c.d)((function(e){return e.auth.captchaUrl}));return t?a.a.createElement(s.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(De,{onSubmit:function(t){var n=t.email,r=t.password,a=t.rememberMe,c=t.captcha;e(function(e,t,n,r){return function(){var a=Object(b.a)(E.a.mark((function a(c){var u,o;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O(e,t,n,r);case 2:(u=a.sent).resultCode===h.b.Success?c(C()):(u.resultCode===h.a.CaptchaIsRequired&&c(function(){var e=Object(b.a)(E.a.mark((function e(t){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:n=e.sent,r=n.url,t(y(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o=u.messages.length>0?u.messages[0]:"Some error",c(Object(g.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(n,r,a,c))},captchaUrl:n}))},De=Object(Le.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(Ae.c)("Email","email",[Ne.b],Ae.a),Object(Ae.c)("Password","password",[Ne.b],Ae.a,{type:"password"}),Object(Ae.c)(void 0,"rememberMe",[],Ae.a,{type:"checkbox"},"Remember me"),r&&a.a.createElement("img",{alt:"",src:r}),r&&Object(Ae.c)("Captcha","captcha",[Ne.b],Ae.a,{}),n&&a.a.createElement("div",{className:Re.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),Me=(n(369),n(370),f.a.Content),He=f.a.Footer,ze=f.a.Sider,We=a.a.lazy((function(){return n.e(4).then(n.bind(null,392))})),Ve=a.a.lazy((function(){return n.e(3).then(n.bind(null,391))})),qe=a.a.lazy((function(){return n.e(5).then(n.bind(null,390))})),Be=Object(l.d)(s.h,Object(c.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(C());Promise.all([t]).then((function(){e(T())}))}}}))((function(e){return a.a.useEffect((function(){e.initializeApp()}),[]),e.initialized?a.a.createElement(f.a,null,a.a.createElement(Ue,null),a.a.createElement(Me,{style:{padding:"0 50px"}},a.a.createElement(d.a,{style:{margin:"16px 0"}},a.a.createElement(d.a.Item,null,"Home"),a.a.createElement(d.a.Item,null,"List"),a.a.createElement(d.a.Item,null,"App")),a.a.createElement(f.a,{className:"site-layout-background",style:{padding:"24px 0"}},a.a.createElement(ze,{className:"site-layout-background",width:200},a.a.createElement(F,null)),a.a.createElement(Me,{style:{padding:"0 24px",minHeight:280}},a.a.createElement(a.a.Suspense,{fallback:a.a.createElement($.a,null)},a.a.createElement(s.d,null,a.a.createElement(s.b,{path:"/",exact:!0},a.a.createElement(s.a,{to:"/profile"})),a.a.createElement(s.b,{exact:!0,path:"/dialogs/:userId?",component:We}),a.a.createElement(s.b,{exact:!0,path:"/profile/:userId?",component:Ve}),a.a.createElement(s.b,{exact:!0,path:"/chat",component:qe}),a.a.createElement(s.b,{exact:!0,path:"/users",component:ye}),a.a.createElement(s.b,{exact:!0,path:"/login",component:Ge}),a.a.createElement(s.b,{exact:!0,path:"/news",component:G}),a.a.createElement(s.b,{exact:!0,path:"/music",component:R}),a.a.createElement(s.b,{exact:!0,path:"/settings",component:D}),a.a.createElement(s.b,{path:"*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}})))))),a.a.createElement(He,{style:{textAlign:"center"}},"Social network 2020 on React")):a.a.createElement($.a,null)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Je=n(212),Xe=n(193),Ze=n(159),Ke=n(191),Qe={},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe;return e},$e=n(194),et=Object(l.c)({profilePage:Ze.b,dialogsPage:Ke.b,sidebar:Ye,usersPage:we,auth:P,form:Xe.a,app:k,chat:$e.a}),tt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,nt=Object(l.e)(et,tt(Object(l.a)(Je.a)));n(371);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,null,a.a.createElement(c.a,{store:nt},a.a.createElement(Be,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return d}));var r=n(142),a=n(0),c=n.n(a),u=n(143),o=n(88),i=n.n(o),s=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,u=n&&r;return c.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:"")},c.a.createElement("div",null,a),u&&c.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(s,e,c.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return c.a.createElement(s,e,c.a.createElement("input",Object.assign({},t,n)))};function d(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:" ";return c.a.createElement("div",null,c.a.createElement(u.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",o)}},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),a=n.n(r),c=n(207),u=n.n(c),o=function(){return a.a.createElement("div",{className:u.a.lds_ellipsis},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))}},88:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2Q0Bw",error:"FormsControls_error__-R594",formSummaryError:"FormsControls_formSummaryError__1Inyn"}}},[[242,1,2]]]);
//# sourceMappingURL=main.8982fd33.chunk.js.map
