(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),s=a(9),c=a(3),r=a(7),l=(a(14),a(15),a(5)),o=a.n(l),d=a(1),u=a(0),m=function(e){var t=e.user,a=t.name,n=t.email;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},j=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,s=t.user;return Object(u.jsxs)("article",{"data-id":a,className:o()("TodoInfo","card",{"TodoInfo--completed":i}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:n}),s&&Object(u.jsx)(m,{user:s})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function f(e){return h.find((function(t){return t.id===e}))||null}var p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(r.a)(Object(r.a)({},e),{},{user:f(e.userId)})})),O=p.map((function(e){return e.id})),x=function(){var e=Object(d.useState)(0),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(d.useState)(""),r=Object(c.a)(i,2),l=r[0],m=r[1],j=Object(d.useState)(!0),x=Object(c.a)(j,2),v=x[0],N=x[1],y=Object(d.useState)(!0),S=Object(c.a)(y,2),I=S[0],g=S[1];return Object(u.jsxs)("div",{className:"App box",children:[Object(u.jsx)("h1",{className:"title",children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),a||N(!1),l.trim()||g(!1),a&&l.trim()&&(!function(){var e={id:Math.max.apply(Math,Object(s.a)(O))+1,title:l,userId:a,completed:!1,user:f(a)};p.push(e)}(),n(0),m(""),g(!0),N(!0))},className:"field",children:[Object(u.jsx)("div",{className:"field column is-two-fifths",children:Object(u.jsxs)("label",{className:"label",children:[Object(u.jsx)("span",{children:"Title: "}),Object(u.jsx)("input",{type:"text","data-cy":"titleInput",className:"input is-link ",value:l,placeholder:"Enter a title",onChange:function(e){m(e.target.value),g(!0)}}),I||Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]})}),Object(u.jsxs)("div",{className:"field column is-half",children:[Object(u.jsxs)("label",{className:"label",children:[Object(u.jsx)("p",{children:"User: "}),Object(u.jsx)("div",{className:"select is-norma",children:Object(u.jsxs)("select",{"data-cy":"userSelect",defaultValue:a,value:a,onChange:function(e){n(+e.target.value),N(!0)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){var t=e.name,a=e.id;return Object(u.jsx)("option",{value:a,children:t},a)}))]})})]}),v||Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("div",{className:"buttons column",children:Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",className:o()("button is-primary is-focused",{"is-danger":!1===I||!1===v}),children:"Add"})})]}),Object(u.jsx)(b,{todos:p})]})};i.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.07c93be6.chunk.js.map