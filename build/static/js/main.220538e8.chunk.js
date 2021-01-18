(this["webpackJsonpredux-essentials-example"]=this["webpackJsonpredux-essentials-example"]||[]).push([[0],{1137:function(e,t){},1140:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),s=n(32),o=n.n(s),u=(n(72),n(8)),i=n(3),l=n(1),m=function(e){var t=e.userId,n=Object(l.c)((function(e){return e.users.find((function(e){return e.id===t}))}));return c.a.createElement("span",null,"by ",n?n.name:"Unknown author")},d=n(1142),p=n(1141),f=function(e){var t=e.timestamp,n="";if(t){var a=Object(d.a)(t),r=Object(p.a)(a);n="".concat(r," ago")}return c.a.createElement("span",{title:t},"\xa0 ",c.a.createElement("i",null,n))},b=n(15),E=n(19),h=n(7),O=n.n(h),j=n(17),v=n(5),g=n(20),x=n(66);function y(e){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(O.a.mark((function e(t){var n,a,r,c,s,o,u,i=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},a=n.body,r=Object(x.a)(n,["body"]),c={"Content-Type":"application/json"},s=Object(g.a)(Object(g.a)({method:a?"POST":"GET"},r),{},{headers:Object(g.a)(Object(g.a)({},c),r.headers)}),a&&(s.body=JSON.stringify(a)),e.prev=4,e.next=7,window.fetch(t,s);case 7:return u=e.sent,e.next=10,u.json();case 10:if(o=e.sent,!u.ok){e.next=13;break}return e.abrupt("return",o);case 13:throw new Error(u.statusText);case 16:return e.prev=16,e.t0=e.catch(4),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:o));case 19:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}y.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return y(e,Object(g.a)(Object(g.a)({},t),{},{method:"GET"}))},y.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return y(e,Object(g.a)(Object(g.a)({},n),{},{body:t}))};var N=Object(v.b)("posts/fetchPosts",Object(j.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/fakeApi/posts");case 2:return t=e.sent,e.abrupt("return",t.posts);case 4:case"end":return e.stop()}}),e)})))),k=Object(v.b)("posts/addNewPosts",function(){var e=Object(j.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.post("/fakeApi/posts",{post:t});case 2:return n=e.sent,e.abrupt("return",n.post);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(v.c)({name:"posts",initialState:{posts:[],status:"idle",error:null},reducers:{postUpdated:function(e,t){var n=t.payload,a=n.id,r=n.title,c=n.content,s=e.posts.find((function(e){return e.id===a}));s&&(s.title=r,s.content=c)},reactionAdded:function(e,t){var n=t.payload,a=n.postId,r=n.reaction,c=e.posts.find((function(e){return e.id===a}));c&&c.reactions[r]++}},extraReducers:(a={},Object(E.a)(a,N.pending,(function(e,t){e.status="loading"})),Object(E.a)(a,N.fulfilled,(function(e,t){e.status="successed",e.posts=e.posts.concat(t.payload)})),Object(E.a)(a,N.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),Object(E.a)(a,k.fulfilled,(function(e,t){e.posts.push(t.payload)})),a)}),S=C.actions,I=(S.postAdded,S.postUpdated),P=S.reactionAdded,T=C.reducer,A=function(e){return e.posts.posts},U=function(e,t){return e.posts.posts.find((function(e){return e.id===t}))},R={thumbsUp:"\ud83d\udc4d",hooray:"\ud83c\udf89",heart:"\u2764\ufe0f",rocket:"\ud83d\ude80",eyes:"\ud83d\udc40"},F=function(e){var t=e.post,n=Object(l.b)(),a=Object.entries(R).map((function(e){var a=Object(b.a)(e,2),r=a[0],s=a[1];return c.a.createElement("button",{key:r,type:"button",className:"muted-button reaction-button",onClick:function(){return n(P({postId:t.id,reaction:r}))}},s," ",t.reactions[r])}));return c.a.createElement("div",null,a)},M=function(){var e=Object(l.c)(A),t=e.slice().sort((function(e,t){return t.date.localeCompare(e.date)})),n=Object(l.b)(),a=Object(l.c)((function(e){return e.posts.status}));Object(l.c)((function(e){return e.posts.error}));Object(r.useEffect)((function(){"idle"===a&&n(N())}),[a,n]);var s;t.map((function(e){return c.a.createElement("article",{className:"post-excerpt",key:e.id},c.a.createElement("h3",null,e.title),c.a.createElement("p",null,e.content.substring(0,50)),c.a.createElement("div",null," ",c.a.createElement(m,{userId:e.user}),c.a.createElement(f,{timestamp:e.date})),c.a.createElement(u.b,{to:"/posts/".concat(e.id),className:"button muted-button"},"View Post"),c.a.createElement(F,{post:e}))}));if("loading"===a)s=c.a.createElement("div",null," loading... ");else if("successed"===a){s=e.slice().sort((function(e,t){return t.date.localeCompare(e.date)})).map((function(e){return c.a.createElement("article",{className:"post-excerpt",key:e.id},c.a.createElement("h3",null,e.title),c.a.createElement("p",null,e.content.substring(0,50)),c.a.createElement("div",null," ",c.a.createElement(m,{userId:e.user}),c.a.createElement(f,{timestamp:e.date})),c.a.createElement(u.b,{to:"/posts/".concat(e.id),className:"button muted-button"},"View Post"),c.a.createElement(F,{post:e}))}))}return c.a.createElement("section",null,c.a.createElement("h2",null,"Posts"),s)},D=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),o=Object(b.a)(s,2),u=o[0],i=o[1],m=Object(r.useState)(""),d=Object(b.a)(m,2),p=d[0],f=d[1],E=Object(r.useState)("idle"),h=Object(b.a)(E,2),g=h[0],x=h[1],y=Object(l.b)(),w=Object(l.c)((function(e){return e.users})),N=[n,u,p].every(Boolean)&&"idle"===g,C=function(){var e=Object(j.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!N){e.next=18;break}return e.prev=1,x("pending"),e.next=5,y(k({title:n,content:u,user:p}));case 5:t=e.sent,Object(v.e)(t),a(""),i(""),f(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error("Failed to save the post: ",e.t0);case 15:return e.prev=15,x("idle"),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return function(){return e.apply(this,arguments)}}(),S=w.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)}));return c.a.createElement("section",null,c.a.createElement("h2",null,"Add a New Post"),c.a.createElement("form",null,c.a.createElement("label",{htmlFor:"postTitle"},"Post Title:"),c.a.createElement("input",{type:"text",id:"postTitle",name:"postTitle",value:n,onChange:function(e){return a(e.target.value)}}),c.a.createElement("label",{htmlFor:"postAuthor"},"Author:"),c.a.createElement("select",{id:"postAuthor",value:p,onChange:function(e){return f(e.target.value)}},c.a.createElement("option",{value:""}),S),c.a.createElement("label",{htmlFor:"postContent"},"Content:"),c.a.createElement("textarea",{id:"postContent",name:"postContent",value:u,onChange:function(e){return i(e.target.value)}}),c.a.createElement("button",{type:"button",onClick:C,disabled:!N},"Save Post")))},L=n(35),q=Object(v.b)("notifications/fetchNotifications",function(){var e=Object(j.a)(O.a.mark((function e(t,n){var a,r,c,s,o,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.getState,r=G(a()),c=Object(b.a)(r,1),s=c[0],o=s?s.date:"",e.next=6,y.get("/fakeApi/notifications?since=".concat(o));case 6:return u=e.sent,e.abrupt("return",u.notifications);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),z=Object(v.c)({name:"notifications",initialState:[],reducers:{allNotificationsRead:function(e,t){e.forEach((function(e){e.read=!0}))}},extraReducers:Object(E.a)({},q.fulfilled,(function(e,t){e.forEach((function(e){e.isNew=!e.read})),e.push.apply(e,Object(L.a)(t.payload)),e.sort((function(e,t){return t.date.localeCompare(e.date)}))}))}),J=z.actions.allNotificationsRead,B=z.reducer,G=function(e){return e.notifications},V=function(){var e,t=Object(l.b)(),n=Object(l.c)(G).filter((function(e){return!e.read})).length;n>0&&(e=c.a.createElement("span",{className:"badge"},n));return c.a.createElement("nav",null,c.a.createElement("section",null,c.a.createElement("h1",null,"Redux Essentials Example"),c.a.createElement("div",{className:"navContent"},c.a.createElement("div",{className:"navLinks"},c.a.createElement(u.b,{to:"/"},"Posts"),c.a.createElement(u.b,{to:"/users"},"Users"),c.a.createElement(u.b,{to:"/notifications"},"Notifications ",e)),c.a.createElement("button",{className:"button",onClick:function(){t(q())}},"Refresh Notifications"))))},W=function(e){var t=e.match.params.postId,n=Object(l.c)((function(e){return U(e,t)}));return n?c.a.createElement("section",null,c.a.createElement("article",{className:"post"},c.a.createElement("h2",null,n.title),c.a.createElement(m,{userId:n.user}),c.a.createElement("p",{className:"post-content"},n.content),c.a.createElement(f,{timestamp:n.date}),c.a.createElement(u.b,{to:"/editPost/".concat(n.id),className:"button"},"Edit Post"),c.a.createElement(F,{post:n}))):c.a.createElement("section",null,c.a.createElement("h2",null,"Post not found!"))},H=function(e){var t=e.match.params.postId,n=Object(l.c)((function(e){return U(e,t)})),a=Object(r.useState)(n.title),s=Object(b.a)(a,2),o=s[0],u=s[1],m=Object(r.useState)(n.content),d=Object(b.a)(m,2),p=d[0],f=d[1],E=Object(l.b)(),h=Object(i.g)();return c.a.createElement("section",null,c.a.createElement("h2",null,"Edit Post"),c.a.createElement("form",null,c.a.createElement("label",{htmlFor:"postTitle"},"Post Title:"),c.a.createElement("input",{type:"text",id:"postTitle",name:"postTitle",placeholder:"What's on your mind?",value:o,onChange:function(e){return u(e.target.value)}}),c.a.createElement("label",{htmlFor:"postContent"},"Content:"),c.a.createElement("textarea",{id:"postContent",name:"postContent",value:p,onChange:function(e){return f(e.target.value)}})),c.a.createElement("button",{type:"button",onClick:function(){o&&p&&(E(I({id:t,title:o,content:p})),h.push("/posts/".concat(t)))}},"Save Post"))},K=Object(v.b)("/users/fetchUsers",Object(j.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/fakeApi/users");case 2:return t=e.sent,e.abrupt("return",t.users);case 4:case"end":return e.stop()}}),e)})))),Q=Object(v.c)({name:"users",initialState:[],reducers:{},extraReducers:Object(E.a)({},K.fulfilled,(function(e,t){return t.payload}))}),X=function(e){return e.users},Y=Q.reducer,Z=function(e){var t=e.match.params.userId,n=Object(l.c)((function(e){return function(e,t){return e.users.find((function(e){return e.id===t}))}(e,t)})),a=Object(l.c)((function(e){return A(e).filter((function(e){return e.user===t}))})).map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(u.b,{to:"/posts/".concat(e.id)},e.title))}));return c.a.createElement("section",null,c.a.createElement("h2",null,n.name),c.a.createElement("ul",null,a))},$=function(){var e=Object(l.c)(X).map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(u.b,{to:"/users/".concat(e.id)},e.name))}));return c.a.createElement("div",null,c.a.createElement("section",null,c.a.createElement("h2",null,"Users"),c.a.createElement("ul",null,e)))},_=n(56),ee=n.n(_),te=function(){var e=Object(l.b)(),t=Object(l.c)(G),n=Object(l.c)(X);Object(r.useEffect)((function(){e(J())}));var a=t.map((function(e){var t=Object(d.a)(e.date),a=Object(p.a)(t),r=n.find((function(t){return t.id===e.user}))||{name:"Unknown User"},s=ee()("notification",{new:e.isNew});return c.a.createElement("div",{key:e.id,className:s},c.a.createElement("div",null,c.a.createElement("b",null,r.name)," ",e.message),c.a.createElement("div",{title:e.date},c.a.createElement("i",null,a," ago")))}));return c.a.createElement("section",{className:"notificationsList"},c.a.createElement("h2",null,"Notifications"),a)};var ne,ae=function(){return c.a.createElement(u.a,null,c.a.createElement(V,null),c.a.createElement("div",{className:"App"},c.a.createElement(i.d,null,c.a.createElement(i.b,{exact:!0,path:"/",render:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null),c.a.createElement(M,null))}}),c.a.createElement(i.b,{exact:!0,path:"/posts/:postId",component:W}),c.a.createElement(i.b,{path:"/editPost/:postId",component:H}),c.a.createElement(i.b,{exact:!0,path:"/users",component:$}),c.a.createElement(i.b,{exact:!0,path:"/users/:userId",component:Z}),c.a.createElement(i.b,{exact:!0,path:"/notifications",component:te}),c.a.createElement(i.a,{to:"/"}))))},re=Object(v.a)({reducer:{posts:T,users:Y,notifications:B}}),ce=n(9),se=n(21),oe=n.n(se),ue=n(29),ie=n(47),le=n.n(ie),me=ce.c.extend({serializeIds:"always"}),de=le()(),pe=localStorage.getItem("randomTimestampSeed");function fe(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(de()*(t-e+1))+e}pe?ne=new Date(pe):(pe=(ne=new Date).toISOString(),localStorage.setItem("randomTimestampSeed",pe)),de=le()(pe),Object(ue.setRandom)(de),oe.a.seed(ne.getTime());var be=function(e){return e[fe(0,e.length-1)]},Ee=["poked you","says hi!","is glad we're friends","sent you a gift"];new ce.d({routes:function(){this.namespace="fakeApi",this.timing=2e3,this.resource("users"),this.resource("posts"),this.resource("comments");var e=this;this.post("/posts",(function(t,n){var a=this.normalizedRequestAttrs();a.date=(new Date).toISOString();var r=t.users.find(a.userId);if(a.user=r,"error"===a.content)throw new Error("Could not save the post!");return e.create("post",a)})),this.get("/posts/:postId/comments",(function(e,t){return e.posts.find(t.params.postId).comments})),this.get("/notifications",(function(e,t){var n,a=fe(1,5),r=new Date;return t.queryParams.since?n=Object(d.a)(t.queryParams.since):(n=new Date(r.valueOf())).setMinutes(n.getMinutes()-15),{notifications:Object(L.a)(Array(a)).map((function(){var t=be(e.db.users),a=be(Ee);return{id:Object(v.d)(),date:oe.a.date.between(n,r).toISOString(),message:a,user:t.id,read:!1,isNew:!0}}))}}))},models:{user:ce.b.extend({posts:Object(ce.g)()}),post:ce.b.extend({user:Object(ce.f)(),comments:Object(ce.g)()}),comment:ce.b.extend({post:Object(ce.f)()}),notification:ce.b.extend({})},factories:{user:ce.a.extend({id:function(){return Object(v.d)()},firstName:function(){return oe.a.name.firstName()},lastName:function(){return oe.a.name.lastName()},name:function(){return oe.a.name.findName(this.firstName,this.lastName)},username:function(){return oe.a.internet.userName(this.firstName,this.lastName)},afterCreate:function(e,t){t.createList("post",3,{user:e})}}),post:ce.a.extend({id:function(){return Object(v.d)()},title:function(){return Object(ue.sentence)()},date:function(){return oe.a.date.recent(7)},content:function(){return Object(ue.article)(1)},reactions:function(){return{thumbsUp:0,hooray:0,heart:0,rocket:0,eyes:0}},afterCreate:function(e,t){},user:Object(ce.e)()}),comment:ce.a.extend({id:function(){return Object(v.d)()},date:function(){return oe.a.date.past(2)},text:function(){return Object(ue.paragraph)()},post:Object(ce.e)()})},serializers:{user:me,post:me,comment:me},seeds:function(e){e.createList("user",3)}}),re.dispatch(K()),o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:re},c.a.createElement(ae,null))),document.getElementById("root"))},67:function(e,t,n){e.exports=n(1140)},72:function(e,t,n){}},[[67,1,2]]]);
//# sourceMappingURL=main.220538e8.chunk.js.map