(this["webpackJsonptic-tac"]=this["webpackJsonptic-tac"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),i=n.n(a),r=n(4),o=n.n(r),s=(n(10),n(2));var u=function(t){t.i,t.j;var e=Object(a.useState)(),n=Object(s.a)(e,2),i=n[0],r=n[1],o=Object(a.useState)(),u=Object(s.a)(o,2),j=u[0],l=u[1],d=Object(a.useState)(["\ud83d\udca9","\ud83d\udd25"]),b=Object(s.a)(d,2),v=b[0],O=b[1];return Object(c.jsx)("div",{className:"Col","data-selected":i,onClick:function(){if(!i){window.choice+=1;var t=v[window.choice%2];l(t),O(v.reverse()),r(!i)}},children:j})};var j=function(t){var e=t.i,n=t.j,i=Object(a.useState)(!1),r=Object(s.a)(i,2),o=r[0],u=r[1],j=n%2==0;return Object(c.jsx)("div",{className:"Wall ".concat(j?"Vertical":"Horizontal"),"data-i":e,"data-j":n,onClick:function(){return u(!o)},"data-selected":o})},l=function(t,e){return Object(c.jsx)("div",{className:"Row",children:e.map((function(e,n){return function(t,e){console.log(t,e,t+e);var n=t%2==0,a=e%2==0,i=n||a;return 0==t||0==e?null:n&&a?Object(c.jsx)("div",{className:"Knob","data-i":t,"data-j":e}):i?Object(c.jsx)(j,{i:t,j:e}):Object(c.jsx)(u,{i:t,j:e})}(t,n)}))})};var d=function(t){var e=t.size,n=new Array(2*e).fill(0);return Object(c.jsx)("div",{className:"Board",children:n.map((function(t,e){return l(e,n)}))})};n(11);window.choice=0;var b=["#534B62","#74A4BC","#FED766","#9C89B8","#66666E","#415D43","#758173"];var v=function(){b.sort((function(){return.5-Math.random()}));var t=b[0],e=Object(a.useState)(3),n=Object(s.a)(e,2),i=n[0],r=n[1];return Object(c.jsxs)("div",{className:"App",style:{backgroundColor:t},children:[Object(c.jsx)("input",{className:"Size",type:"range",min:3,value:i,max:8,step:1,onChange:function(t){return r(Number(t.target.value))}}),Object(c.jsx)(d,{size:i})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),O()}},[[12,1,2]]]);
//# sourceMappingURL=main.5d47c867.chunk.js.map