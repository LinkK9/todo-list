(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{107:function(t,e,a){t.exports={todoListContainer:"TaskItem_todoListContainer__2wv1U",todoContainer:"TaskItem_todoContainer__2S08_",flexCenter:"TaskItem_flexCenter__o701M",tickBox:"TaskItem_tickBox__2LnbW",completed:"TaskItem_completed__3qG5u",notCompleted:"TaskItem_notCompleted__2FZSK",starOn:"TaskItem_starOn__THRED",starOff:"TaskItem_starOff__8HYI1",createdDate:"TaskItem_createdDate__3den-",textRed:"TaskItem_textRed__1qdy0",textSuccess:"TaskItem_textSuccess__1ORwi"}},162:function(t,e,a){t.exports={todoListContainer:"TodoList_todoListContainer__12VZ9",btn:"TodoList_btn__1sY0g"}},164:function(t,e,a){t.exports={taskInputContainer:"Home_taskInputContainer__2LVOR",taskListContainer:"Home_taskListContainer__3iqvy"}},247:function(t,e,a){},461:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),s=a(18),i=(a(247),a(85)),u=a.n(i),d=(a(166),a(117)),l=a(16),p=a(9),j=a(4);function b(t){return Object(s.c)((function(t){return t.authState.isLoggedIn}))?Object(j.jsx)(l.b,Object(p.a)(Object(p.a)({},t),{},{children:t.children})):Object(j.jsx)(l.a,{to:"/login"})}var O=a(138),f=a.n(O),h=a(464),k=a(46),v=a.n(k),m=a(72),g=a(73),x=a.n(g),_="https://linhtrinhviet.herokuapp.com",C={GetTodoList:function(){return x.a.get(_+"/todo")},AddTodo:function(t){var e=(new Date).getTime();return x.a.post(_+"/todo",{taskName:t,createdDate:e,isCompleted:!1,isFavorite:!1})},ChooseFavorite:function(t,e){return x.a.patch(_+"/todo/".concat(t),{isFavorite:e})},ChangeStatusComplete:function(t,e){return x.a.patch(_+"/todo/".concat(t),{isCompleted:e})},DeleteTask:function(t){return x.a.delete(_+"/todo/".concat(t))},EditTask:function(t,e){return x.a.patch(_+"/todo/".concat(t),{taskName:e})}},L="Change_Input_Value",y="Changed_Status_Complete",T="Choose_Favorite_Task",S="Login_Succsess",w="Logout_Succsess",I="Begin_Add_Todo",N="Add_Todo_Success",D="Get_Todo_Success",F="Sync_Error",E="Clear_Screen",B="Delete_Task",R="Edit_Task",A=function(){return function(){var t=Object(m.a)(v.a.mark((function t(e,a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:I}),t.next=4,C.GetTodoList();case 4:n=t.sent,e({type:D,payload:{taskList:n.data}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e({type:F});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,a){return t.apply(this,arguments)}}()};var H=function(){var t=Object(s.b)(),e=Object(s.c)((function(t){return t.todoState.newTaskName})),a=function(){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e;null===(e=t.current)||void 0===e||e.focus()}),[]),t}();return Object(j.jsx)(h.a,{ref:a,placeholder:"Nh\u1eadp t\xean task r\u1ed3i \u1ea5n enter",value:e,onChange:function(e){var a;t((a=e.target.value,{type:L,payload:{newInputValue:a}}))},onPressEnter:function(){""!==e&&t(function(t){return function(){var e=Object(m.a)(v.a.mark((function e(a,n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:I}),e.next=4,C.AddTodo(t);case 4:return e.next=6,C.GetTodoList();case 6:r=e.sent,a({type:N,payload:{newTaskName:t,id:r.data[r.data.length-1].id}}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a({type:F});case 13:return e.prev=13,e.finish(13);case 15:case"end":return e.stop()}}),e,null,[[0,10,13,15]])})));return function(t,a){return e.apply(this,arguments)}}()}(e))}})},P=a(82),G=a.n(P),V=a(63),q=a(466),M=a(465),J=a(67),U=a(107),W=a.n(U),Y=a(236),Z=h.a.TextArea;var z=function(t){var e=t.taskItem,a=t.onChooseFavoriteTask,r=t.onCompletionStageChanged,c=Object(s.b)(),o=Object(n.useState)(e.taskName),i=Object(V.a)(o,2),u=i[0],d=i[1],l=Object(n.useRef)(null),p=Object(n.useState)(!1),b=Object(V.a)(p,2),O=b[0],f=b[1],h={on:{color:"orange",float:"right",position:"absolute",top:"50%",right:"10px",transform:"translate(0, -50%)"},off:{color:"gainsboro",float:"right",position:"absolute",top:"50%",right:"10px",transform:"translate(0, -50%)"}};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{onClick:function(){f(!0),setTimeout((function(){var t;null===(t=l.current)||void 0===t||t.focus()}),10)},className:W.a.todoContainer,children:[Object(j.jsx)(q.a,{id:e.id,className:W.a.tickBox,onChange:function(t){f(!1),r(e.id,!e.isCompleted)},checked:e.isCompleted}),Object(j.jsx)("div",{className:e.isCompleted?W.a.completed:W.a.notCompleted,children:e.taskName}),e.isCompleted?null:Object(j.jsx)(Y.a,{onClick:function(t){t.stopPropagation(),a(e.id,!e.isFavorite)},style:e.isFavorite?h.on:h.off})]}),Object(j.jsx)(M.a,{title:"Edit Task",visible:O,onCancel:function(){f(!1)},footer:[Object(j.jsx)(J.a,{type:"primary",block:!0,danger:!0,onClick:function(){var t;c((t=e.id,function(){var e=Object(m.a)(v.a.mark((function e(a,n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.DeleteTask(t);case 3:a({type:B,payload:{id:t}}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}()))},children:"Delete Task"})],children:Object(j.jsx)(Z,{ref:l,onChange:function(t){d(t.target.value)},value:u,onPressEnter:function(){var t,a;c((t=e.id,a=u,function(){var e=Object(m.a)(v.a.mark((function e(n,r){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.EditTask(t,a);case 3:n({type:R,payload:{id:t,value:a}}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}())),f(!1)},autoSize:{minRows:1,maxRows:6},allowClear:!0})})]})},K=a(162),Q=a.n(K),X=a(463);var $=function(t){var e=t.taskList,a=Object(s.b)(),n=Object(s.c)((function(t){return t.todoState.isLoading})),r=Object(s.c)((function(t){return t.todoState.isError})),c=function(t,e){a(function(t,e){return function(){var a=Object(m.a)(v.a.mark((function a(n,r){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,C.ChangeStatusComplete(t,e);case 3:n({type:y,payload:{id:t,value:e}}),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.log(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(t,e){return a.apply(this,arguments)}}()}(t,e))},o=function(t,e){a(function(t,e){return function(){var a=Object(m.a)(v.a.mark((function a(n,r){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,C.ChooseFavorite(t,e);case 3:n({type:T,payload:{id:t,value:e}}),a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.log(a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(t,e){return a.apply(this,arguments)}}()}(t,e))};return Object(j.jsxs)("div",{children:[Object(j.jsx)(G.a,{level:3,children:t.title}),"Danh s\xe1ch task"===t.title&&n&&Object(j.jsx)(X.a,{tip:"Loading..."}),"Danh s\xe1ch task"===t.title&&r&&Object(j.jsx)(J.a,{className:Q.a.btn,onClick:function(){return a(A())},children:"Try again!"}),Object(j.jsx)("div",{className:Q.a.todoListContainer,children:e.map((function(t){return Object(j.jsx)(z,{taskItem:t,onChooseFavoriteTask:o,onCompletionStageChanged:c},t.id)}))})]})},tt=a(164),et=a.n(tt),at=function(){var t=Object(s.b)(),e=Object(l.g)(),a=function(){t({type:w}),e.push("/login")},r=Object(n.useState)(!1),c=Object(V.a)(r,2),o=c[0],i=c[1];return Object(j.jsxs)("div",{className:u.a.appHeader,children:[Object(j.jsx)(G.a,{className:u.a.header,children:"Todo-List!"}),Object(j.jsx)(J.a,{danger:!0,className:u.a.btn,onClick:function(){i(!0)},children:"Logout"}),Object(j.jsx)(M.a,{visible:o,onCancel:function(){i(!1)},onOk:function(){a()},okButtonProps:{danger:!0},okText:"Logout",children:Object(j.jsx)("h2",{children:"B\u1ea1n c\xf3 mu\u1ed1n logout?"})})]})};function nt(){var t=Object(s.c)((function(t){return t.todoState.taskList})),e=f.a.partition(t,(function(t){return t.isCompleted})),a=f.a.orderBy(e[0],["createdDate"],["desc"]),r=Object(s.c)((function(t){return t.todoState.newTaskName})),c=f.a.orderBy(e[1],["isFavorite","createdDate"],["desc","desc"]);r&&(c=c.filter((function(t){return t.taskName.includes(r)})));var o=Object(s.b)();return Object(n.useEffect)((function(){o({type:E}),o(A())}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(at,{}),Object(j.jsx)("div",{className:et.a.taskInputContainer,children:Object(j.jsx)(H,{})}),Object(j.jsxs)("section",{className:et.a.taskListContainer,children:[Object(j.jsx)($,{taskList:c,title:"Danh s\xe1ch task"}),Object(j.jsx)($,{taskList:a,title:"Danh s\xe1ch task ho\xe0n th\xe0nh"})]})]})}var rt=function(){var t=Object(n.useState)(""),e=Object(V.a)(t,2),a=e[0],r=e[1],c=Object(n.useState)(""),o=Object(V.a)(c,2),i=o[0],u=o[1],d=Object(l.g)(),p=Object(s.b)();return Object(s.c)((function(t){return t.authState.isLoggedIn}))?Object(j.jsx)(l.a,{to:"/home"}):Object(j.jsxs)("div",{children:[Object(j.jsx)(G.a,{children:"Login"}),Object(j.jsx)(h.a,{placeholder:"User name: Nh\u1eadp t\xean b\u1ea5t k\u1ef3",value:a,onChange:function(t){return r(t.target.value)}}),Object(j.jsx)(h.a,{placeholder:"password: Nh\u1eadp b\u1ea5t k\u1ef3",type:"password",value:i,onChange:function(t){return u(t.target.value)}}),Object(j.jsx)("div",{style:{marginTop:16},children:Object(j.jsx)(J.a,{type:"primary",onClick:function(){a&&i?(p({type:S}),d.push("/")):alert("Sai ten tai khoan mat khau")},children:"\u0110\u0103ng nh\u1eadp"})})]})};var ct=function(){return Object(j.jsx)("div",{className:u.a.app,children:Object(j.jsx)(d.a,{children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(b,{path:"/home",children:Object(j.jsx)(nt,{})}),Object(j.jsx)(l.b,{path:"/login",children:Object(j.jsx)(rt,{})}),Object(j.jsx)(l.b,{exact:!0,path:"/",children:Object(j.jsx)(l.a,{to:"/home"})})]})})})},ot=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,467)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),n(t),r(t),c(t),o(t)}))},st=a(66),it=a(232),ut=a(86),dt=Object(st.combineReducers)({authState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoggedIn:localStorage.getItem("isLoggedIn")},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:return localStorage.setItem("isLoggedIn",!0),Object(p.a)(Object(p.a)({},t),{},{isLoggedIn:!0});case w:return localStorage.removeItem("isLoggedIn"),Object(p.a)(Object(p.a)({},t),{},{isLoggedIn:!1});default:return t}},todoState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{taskList:[],newTaskName:"",isLoading:!0,isError:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case R:var a=t.taskList.findIndex((function(t){return t.id===e.payload.id}));return Object(p.a)(Object(p.a)({},t),{},{taskList:[].concat(Object(ut.a)(t.taskList.filter((function(t){return t.id!==e.payload.id}))),[Object(p.a)(Object(p.a)({},t.taskList[a]),{},{taskName:e.payload.value})])});case B:return Object(p.a)(Object(p.a)({},t),{},{taskList:Object(ut.a)(t.taskList.filter((function(t){return t.id!==e.payload.id})))});case E:return Object(p.a)(Object(p.a)({},t),{},{taskList:[]});case F:return Object(p.a)(Object(p.a)({},t),{},{isLoading:!1,isError:!0});case D:var n=e.payload.taskList;return Object(p.a)(Object(p.a)({},t),{},{taskList:[].concat(Object(ut.a)(t.taskList),Object(ut.a)(n)),isLoading:!1});case I:return Object(p.a)(Object(p.a)({},t),{},{isLoading:!0,isError:!1});case N:var r={id:e.payload.id,taskName:e.payload.newTaskName,isCompleted:!1,isFavorite:!1,createdDate:(new Date).getTime(),completedDate:""};return Object(p.a)(Object(p.a)({},t),{},{isLoading:!1,isError:!1,newTaskName:"",taskList:[].concat(Object(ut.a)(t.taskList),[r])});case L:return Object(p.a)(Object(p.a)({},t),{},{newTaskName:e.payload.newInputValue});case y:var c=t.taskList.map((function(t){return t.id===e.payload.id?Object(p.a)(Object(p.a)({},t),{},{isCompleted:!t.isCompleted}):t}));return Object(p.a)(Object(p.a)({},t),{},{taskList:c});case T:var o=t.taskList.map((function(t){return t.id===e.payload.id?Object(p.a)(Object(p.a)({},t),{},{isFavorite:!t.isFavorite}):t}));return Object(p.a)(Object(p.a)({},t),{},{taskList:o});default:return t}}}),lt=a(231),pt=Object(st.createStore)(dt,Object(lt.composeWithDevTools)(Object(st.applyMiddleware)(it.a)));o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(s.a,{store:pt,children:Object(j.jsx)(ct,{})})}),document.getElementById("root")),ot()},85:function(t,e,a){t.exports={app:"App_app__3O2im",header:"App_header__1j-5t",appHeader:"App_appHeader__2BEmT"}}},[[461,1,2]]]);
//# sourceMappingURL=main.e4ff6462.chunk.js.map