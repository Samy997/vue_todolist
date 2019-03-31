(function(t){function e(e){for(var n,i,u=e[0],c=e[1],d=e[2],s=0,f=[];s<u.length;s++)i=u[s],r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(a.splice(e--,1),t=u(u.s=o[0]))}return t}var n={},r={app:0},a=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"05b46983"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(t),a=function(e){c.onerror=c.onload=null,clearTimeout(d);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,o[1](i)}r[t]=void 0}};var d=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,o){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(o,n,function(e){return t[e]}.bind(null,n));return o},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/vue_todolist/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=d;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},"322f":function(t,e,o){},"48cc":function(t,e,o){},5003:function(t,e,o){"use strict";var n=o("48cc"),r=o.n(n);r.a},5679:function(t,e,o){"use strict";var n=o("7fb6"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view")],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("TodoList")]),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},u=[],c={name:"Header"},d=c,s=(o("f706"),o("2877")),l=Object(s["a"])(d,i,u,!1,null,"73aad1a3",null),f=l.exports,p={name:"app",components:{Header:f}},m=p,h=(o("034f"),Object(s["a"])(m,r,a,!1,null,null,null)),v=h.exports,b=o("8c4f"),_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},y=[],g=o("75fc"),T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)}),0)},j=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v("\n        "+t._s(t.todo.title)+"\n        "),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("X")])])])},O=[],x={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},k=x,$=(o("5679"),Object(s["a"])(k,w,O,!1,null,"680ba132",null)),P=$.exports,C={name:"Todos",components:{TodoItem:P},props:["todos"]},E=C,A=Object(s["a"])(E,T,j,!1,null,"5f8f6b89",null),S=A.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},M=[],I={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},J=I,L=(o("5003"),Object(s["a"])(J,H,M,!1,null,"34fd6611",null)),q=L.exports,D=o("bc3a"),N=o.n(D),X={name:"home",components:{Todos:S,AddTodo:q},data:function(){return{todos:[]}},methods:{deleteTodo:function(t){N.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(this.todos=this.todos.filter(function(e){return e.id!==t}))},addTodo:function(t){var e=this,o=t.title,n=t.completed;N.a.post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:n}).then(function(t){return e.todos=[].concat(Object(g["a"])(e.todos),[t.data])})}},created:function(){var t=this;N.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(function(e){return t.todos=e.data})}},z=X,B=Object(s["a"])(z,_,y,!1,null,null,null),F=B.exports;n["a"].use(b["a"]);var G=new b["a"]({routes:[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:G,render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,e,o){},"7fb6":function(t,e,o){},f706:function(t,e,o){"use strict";var n=o("322f"),r=o.n(n);r.a}});
//# sourceMappingURL=app.99d999c7.js.map