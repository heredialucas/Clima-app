(this["webpackJsonpclima-app"]=this["webpackJsonpclima-app"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(12),i=a.n(n),s=a(2),r=a(3),o="onSearch",d="onClose",l="onFilter",j="onStyle",u="onAddCitie",b="onAddCities";function m(e){return{type:j,payload:e}}a(31);var p=a.p+"static/media/logo.103b5fa1.svg",O=a(8),h=(a(32),a(11)),f=a.n(h),x=a(1);function v(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),a=t[0],n=t[1],i=Object(r.c)((function(e){return e.style})),d=Object(r.b)(),l=Object(s.f)();return Object(x.jsxs)("form",{className:"d-flex",onSubmit:function(e){if(e.preventDefault(),""===a)return f()({title:"Debe ingresar una Ciudad",icon:"warning"});d(function(e){return function(t){return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("4ae2636d8dfbdc3044bede63951a019b")).then((function(e){return e.json()})).then((function(e){t({type:o,payload:e})}))}}(a)),n(""),l("/")},children:[Object(x.jsx)("input",{className:"form-control mx-2",type:"text",placeholder:"Ciudad...",value:a,onChange:function(e){return n(e.target.value)}}),Object(x.jsx)("input",{className:i?"btn btn-primary me-2 botonSearch":"btn btn-primary me-2 botonSearch1",type:"submit",value:"Agregar"})]})}a(36);var g=a(7);var N=function(){var e=Object(r.c)((function(e){return e.style})),t=Object(r.b)();return Object(x.jsxs)("nav",{className:e?"navbar navbar-dark navegacion2":"navbar navbar-dark navegacion1",children:[Object(x.jsx)(g.b,{className:"linkCabecera",to:"/",children:Object(x.jsxs)("span",{className:"navbar-brand",children:[Object(x.jsx)("img",{id:"logo",src:p,width:"30",height:"30",className:"d-inline-block align-top",alt:""}),Object(x.jsx)("span",{className:"cabecera",children:"Heredia Lucas - Clima App"})]})}),Object(x.jsxs)("div",{className:"d-flex justify-content-center py-3 navSeparador",children:[Object(x.jsx)(g.b,{className:"linkHome mx-2",to:"/",children:Object(x.jsx)("span",{children:"Ciudades"})}),Object(x.jsx)(g.b,{className:"linkHome mx-2",to:"/about",children:Object(x.jsx)("span",{children:"Acerca del Proyecto"})}),Object(x.jsx)("button",{className:e?"linkHome1":"linkHome2",onClick:function(){return t(m(!1))},children:"Estilos"})]}),Object(x.jsx)(v,{})]})};a(37),a(38);function y(e){var t=e.min,a=e.max,c=e.name,n=e.img,i=e.id,s=Object(r.b)(),o=Object(r.c)((function(e){return e.style}));return Object(x.jsxs)("div",{className:o?"cardNew":"card",children:[Object(x.jsx)("div",{id:"changeIcon",className:"container",children:Object(x.jsx)("button",{onClick:function(){return s(m(!1))},className:o?"botonChange2":"botonChange"})}),Object(x.jsx)(g.b,{className:"cartas",to:"/ciudad/".concat(i),children:Object(x.jsxs)("div",{className:o?"card-body":"card-body1",children:[Object(x.jsx)("img",{className:"iconoClima",src:"http://openweathermap.org/img/wn/"+n+"@2x.png",width:"80",height:"80",alt:""}),Object(x.jsx)("h5",{className:o?"card-title":"card-title1",children:c}),Object(x.jsxs)("div",{className:" dataCard",children:[Object(x.jsxs)("div",{className:" col-md-6 col-lg-6 cartasDatos",children:[Object(x.jsx)("p",{className:o?"cartasDatos-p1":"cartasDatos-p3",children:"Min"}),Object(x.jsxs)("p",{className:o?"cartasDatos-p2":"cartasDatos-p4",children:[parseInt(t)-273,"\xb0"]})]}),Object(x.jsxs)("div",{className:" col-md-6 col-lg-6 cartasDatos",children:[Object(x.jsx)("p",{className:o?"cartasDatos-p1":"cartasDatos-p3",children:"Max"}),Object(x.jsxs)("p",{className:o?"cartasDatos-p2":"cartasDatos-p4",children:[parseInt(a)-273,"\xb0"]})]})]})]})}),Object(x.jsx)("div",{id:"closeIcon",className:"container",children:Object(x.jsx)("button",{onClick:function(){return s(function(e){return{type:d,payload:e}}(i))},className:o?"boton2":"boton",children:"X"})})]})}function C(){var e=Object(r.c)((function(e){return e.cities})),t=Object(r.c)((function(e){return e.style}));return Object(x.jsx)("div",{className:"cards",children:e?e.map((function(e){return Object(x.jsx)(y,{max:e.main.temp_max,min:e.main.temp_min,name:e.name,img:e.weather[0].icon,id:e.id},e.id)})):Object(x.jsx)("h3",{className:t?"loading":"loading1",children:"No hay Ciudades para mostrar"})})}a(39);function w(){var e=Object(r.c)((function(e){return e.style}));return Object(x.jsx)("p",{className:e?"containerAbout":"containerAbout1",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta exercitationem aliquid illum. Neque consectetur quam odio ipsum, rem vel soluta assumenda accusantium, iure placeat libero rerum excepturi. Harum, necessitatibus consequuntur?"})}a(40);function S(){var e=Object(s.g)().ciudadId,t=Object(r.c)((function(e){return e.citie})),a=Object(r.c)((function(e){return e.style})),n=Object(r.b)();return Object(c.useEffect)((function(){n({type:l,payload:e})}),[]),Object(x.jsx)("div",{children:0===t.length?Object(x.jsx)("div",{children:"...Loading"}):Object(x.jsx)("div",{className:"containerCiudad",children:Object(x.jsxs)("div",{className:a?"contentCardTitle":"contentCardTitle1",children:[Object(x.jsx)("div",{className:"titleCard",children:Object(x.jsx)("h2",{className:a?"divTitleCard":"divTitleCard1",children:t[0].name})}),Object(x.jsxs)("div",{className:"ciudadContent",children:[Object(x.jsxs)("div",{className:"ciudadLeft",children:[Object(x.jsxs)("p",{className:a?"descriptionCard":"descriptionCard1",children:["Pa\xeds: ",t[0].sys.country]}),Object(x.jsxs)("p",{className:a?"descriptionCard":"descriptionCard1",children:["Temperatura: ",parseInt(t[0].main.temp)-273," \xbaC"]}),Object(x.jsxs)("p",{className:a?"descriptionCard":"descriptionCard1",children:["Viento: ",t[0].wind.speed," km/h"]})]}),Object(x.jsxs)("div",{className:"ciudadRight",children:[Object(x.jsxs)("p",{className:a?"descriptionCard":"descriptionCard1",children:["Cantidad de nubes: ",t[0].clouds.all]}),Object(x.jsxs)("p",{className:a?"descriptionCard":"descriptionCard1",children:["Latitud: ",t[0].coord.lat,"\xba"]}),Object(x.jsxs)("p",{className:a?"descriptionCard":"descriptionCard1",children:["Longitud: ",t[0].coord.lon,"\xba"]})]})]})]})})})}var k=function(){var e=Object(r.c)((function(e){return e.cities})),t=Object(r.c)((function(e){return e.citie})),a=Object(r.b)(),n=function(){var e=JSON.parse(window.localStorage.getItem("citieSave"));e&&e.length>0&&a({type:u,payload:e});var t=JSON.parse(window.localStorage.getItem("citiesSave"));t&&t.length>0&&a(function(e){return{type:b,payload:e}}(t))};return Object(c.useEffect)((function(){n()}),[]),Object(c.useEffect)((function(){window.localStorage.setItem("citiesSave",JSON.stringify(e)),window.localStorage.setItem("citieSave",JSON.stringify(t))}),[e,t]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N,{}),Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{path:"/about",element:Object(x.jsx)(w,{})}),Object(x.jsx)(s.a,{path:"/",element:Object(x.jsx)(C,{})}),Object(x.jsx)(s.a,{path:"/ciudad/:ciudadId",element:Object(x.jsx)(S,{})})]})]})};a(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))},I=a(13),E=a(20),L=a(6),T={cities:[],citie:[],style:!0};var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var a=e.cities.find((function(e){return e.id===t.payload.id}));return console.log(t.payload),"404"===t.payload.cod?(f()({icon:"error",title:"Ciudad no encontrada"}),Object(L.a)({},e)):a?(f()({icon:"warning",title:"No es posible repetir una ciudad"}),e):Object(L.a)(Object(L.a)({},e),{},{cities:[].concat(Object(E.a)(e.cities),[t.payload])});case d:return Object(L.a)(Object(L.a)({},e),{},{cities:e.cities.filter((function(e){return e.id!==t.payload}))});case l:return Object(L.a)(Object(L.a)({},e),{},{citie:e.cities.filter((function(e){return e.id===parseInt(t.payload)}))});case j:return Object(L.a)(Object(L.a)({},e),{},{style:e.style?t.payload:!t.payload});case u:return Object(L.a)(Object(L.a)({},e),{},{citie:t.payload});case b:return Object(L.a)(Object(L.a)({},e),{},{cities:t.payload});default:return e}},A=a(19),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.b,H=Object(I.c)(_,F(Object(I.a)(A.a)));i.a.render(Object(x.jsx)(r.a,{store:H,children:Object(x.jsx)(g.a,{basename:"/",children:Object(x.jsx)(k,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),D()}},[[42,1,2]]]);
//# sourceMappingURL=main.c7ebdb8d.chunk.js.map