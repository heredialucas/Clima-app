(this["webpackJsonpclima-app"]=this["webpackJsonpclima-app"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(12),i=a.n(n),s=a(2),r=a(3),o="onSearch",d="onClose",l="onFilter",j="onStyle",u="onAddCitie",b="onAddCities";a(31);var O=a.p+"static/media/logo.103b5fa1.svg",m=a(8),p=(a(32),a(10)),h=a.n(p),x=a(1);function f(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],i=Object(r.c)((function(e){return e.style})),d=Object(r.b)(),l=Object(s.f)();return Object(x.jsxs)("form",{className:"d-flex",onSubmit:function(e){if(e.preventDefault(),""===a)return h()({title:"Debe ingresar una Ciudad",icon:"warning"});d(function(e){return function(t){return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("64d0f3fa5e4ece1d2c8229c991d638d5")).then((function(e){return e.json()})).then((function(e){t({type:o,payload:e})}))}}(a)),n(""),l("/")},children:[Object(x.jsx)("input",{className:"form-control mx-2",type:"text",placeholder:"Ciudad...",value:a,onChange:function(e){return n(e.target.value)}}),Object(x.jsx)("input",{className:i?"btn btn-primary me-2 botonSearch":"btn btn-primary me-2 botonSearch1",type:"submit",value:"Agregar"})]})}a(36);var v=a(7);var g=function(){var e=Object(r.c)((function(e){return e.style})),t=Object(r.b)();return Object(x.jsxs)("nav",{className:e?"navbar navbar-dark navegacion2":"navbar navbar-dark navegacion1",children:[Object(x.jsx)(v.b,{className:"linkCabecera",to:"/",children:Object(x.jsxs)("span",{className:"navbar-brand",children:[Object(x.jsx)("img",{id:"logo",src:O,width:"30",height:"30",className:"d-inline-block align-top",alt:""}),Object(x.jsx)("span",{className:"cabecera",children:"Heredia Lucas - Clima App"})]})}),Object(x.jsxs)("div",{className:"d-flex justify-content-center py-3 navSeparador",children:[Object(x.jsx)(v.b,{className:"linkHome mx-2",to:"/",children:Object(x.jsx)("span",{children:"Ciudades"})}),Object(x.jsx)(v.b,{className:"linkHome mx-2",to:"/about",children:Object(x.jsx)("span",{children:"Acerca del Proyecto"})}),Object(x.jsx)("button",{className:e?"linkHome1":"linkHome2",onClick:function(){return t({type:j,payload:!1})},children:"Estilos"})]}),Object(x.jsx)(f,{})]})};a(37),a(38);function N(e){var t=e.min,a=e.max,n=e.name,i=e.img,s=e.id,o=Object(r.b)(),l=Object(r.c)((function(e){return e.style})),j=Object(c.useState)(!1),u=Object(m.a)(j,2),b=u[0],O=u[1];return Object(x.jsxs)("div",{className:b||l?"cardNew":"card",children:[Object(x.jsx)("div",{id:"changeIcon",className:"container",children:Object(x.jsx)("button",{onClick:function(){return e=!1,void(b?b&&O(e):O(!e));var e},className:b||l?"botonChange2":"botonChange"})}),Object(x.jsx)(v.b,{className:"cartas",to:"/ciudad/".concat(s),children:Object(x.jsxs)("div",{className:b||l?"card-body":"card-body1",children:[Object(x.jsx)("img",{className:"iconoClima",src:"http://openweathermap.org/img/wn/"+i+"@2x.png",width:"80",height:"80",alt:""}),Object(x.jsx)("h5",{className:b||l?"card-title":"card-title1",children:n}),Object(x.jsxs)("div",{className:" dataCard",children:[Object(x.jsxs)("div",{className:" col-md-6 col-lg-6 cartasDatos",children:[Object(x.jsx)("p",{className:b||l?"cartasDatos-p1":"cartasDatos-p3",children:"Min"}),Object(x.jsxs)("p",{className:b||l?"cartasDatos-p2":"cartasDatos-p4",children:[parseInt(t)-273,"\xb0"]})]}),Object(x.jsxs)("div",{className:" col-md-6 col-lg-6 cartasDatos",children:[Object(x.jsx)("p",{className:b||l?"cartasDatos-p1":"cartasDatos-p3",children:"Max"}),Object(x.jsxs)("p",{className:b||l?"cartasDatos-p2":"cartasDatos-p4",children:[parseInt(a)-273,"\xb0"]})]})]})]})}),Object(x.jsx)("div",{id:"closeIcon",className:"container",children:Object(x.jsx)("button",{onClick:function(){return o(function(e){return{type:d,payload:e}}(s))},className:b||l?"boton2":"boton",children:"X"})})]})}function y(){var e=Object(r.c)((function(e){return e.cities})),t=Object(r.c)((function(e){return e.style}));return console.log(e),Object(x.jsx)("div",{className:"containerCards",children:Object(x.jsx)("div",{className:"cards",children:0===e.length?Object(x.jsx)("h3",{className:t?"loading":"loading1",children:"No hay Ciudades para mostrar"}):e.map((function(e){return Object(x.jsx)(N,{max:e.main.temp_max,min:e.main.temp_min,name:e.name,img:e.weather[0].icon,id:e.id},e.id)}))})})}a(39);function C(){var e=Object(r.c)((function(e){return e.style}));return Object(x.jsx)("div",{className:"containerAbout0",children:Object(x.jsxs)("div",{className:e?"containerAbout":"containerAbout1",children:[Object(x.jsx)("h2",{className:"aboutTitle",children:"Clima App"}),Object(x.jsx)("hr",{}),Object(x.jsxs)("p",{children:["En esta Aplicaci\xf3n usted cuenta con aproximadamente 200.000 ciudades de todo el mundo, donde usted podr\xe1 saber:",Object(x.jsxs)("ol",{children:[Object(x.jsx)("li",{children:"El clima actual"}),Object(x.jsx)("li",{children:"Condicion ventosa de la ciudad que usted quiera"}),Object(x.jsx)("li",{children:"Cantidad actual de nubes en la zona que se encuentra"}),Object(x.jsx)("li",{children:"Y su ubicaci\xf3n en cualquier parte del planeta tierra"})]}),Object(x.jsx)("hr",{}),"Pr\xf3ximamente estaremos agregando nuevas funcionalidades, para que usted pueda conocer las condiciones climaticas en d\xedas anteriores y posteriores.",Object(x.jsx)("hr",{}),"Espero sea de su agrado y pueda disfrutarla. \xa1Un saludo!"]})]})})}a(40);function w(){var e=Object(s.g)().ciudadId,t=Object(r.c)((function(e){return e.citie})),a=Object(r.c)((function(e){return e.style})),n=Object(r.b)();return Object(c.useEffect)((function(){n({type:l,payload:e})}),[]),Object(x.jsx)("div",{children:0===t.length?Object(x.jsx)("div",{children:"...Loading"}):Object(x.jsx)("div",{className:"containerCiudad",children:Object(x.jsxs)("div",{className:a?"contentCardTitle":"contentCardTitle1",children:[Object(x.jsx)("div",{className:"titleCard",children:Object(x.jsx)("h2",{className:a?"divTitleCard":"divTitleCard1",children:t[0].name})}),Object(x.jsxs)("div",{className:"ciudadContent",children:[Object(x.jsxs)("div",{className:"ciudadLeft",children:[Object(x.jsxs)("p",{className:a?"descriptionCard":"descriptionCard1",children:["Pa\xeds: ",t[0].sys.country]}),Object(x.jsxs)("p",{className:a?"descriptionCard":"descriptionCard1",children:["Temperatura: ",parseInt(t[0].main.temp)-273," \xbaC"]}),Object(x.jsxs)("p",{className:a?"descriptionCard":"descriptionCard1",children:["Viento: ",t[0].wind.speed," km/h"]})]}),Object(x.jsxs)("div",{className:"ciudadRight",children:[Object(x.jsxs)("p",{className:a?"descriptionCard":"descriptionCard1",children:["Cantidad de nubes: ",t[0].clouds.all]}),Object(x.jsxs)("p",{className:a?"descriptionCard":"descriptionCard1",children:["Latitud: ",t[0].coord.lat,"\xba"]}),Object(x.jsxs)("p",{className:a?"descriptionCard":"descriptionCard1",children:["Longitud: ",t[0].coord.lon,"\xba"]})]})]})]})})})}var S=function(){var e=Object(r.c)((function(e){return e.cities})),t=Object(r.c)((function(e){return e.citie})),a=Object(r.b)(),n=Object(r.c)((function(e){return e.style})),i=function(){var e=JSON.parse(window.localStorage.getItem("citieSave"));e&&e.length>0&&a({type:u,payload:e});var t=JSON.parse(window.localStorage.getItem("citiesSave"));t&&t.length>0&&a(function(e){return{type:b,payload:e}}(t))};return Object(c.useEffect)((function(){i()}),[]),Object(c.useEffect)((function(){window.localStorage.setItem("citiesSave",JSON.stringify(e)),window.localStorage.setItem("citieSave",JSON.stringify(t))}),[e,t]),Object(x.jsxs)("div",{className:n?"body1":"body2",children:[Object(x.jsx)(g,{}),Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{path:"/about",element:Object(x.jsx)(C,{})}),Object(x.jsx)(s.a,{path:"/",element:Object(x.jsx)(y,{})}),Object(x.jsx)(s.a,{path:"/ciudad/:ciudadId",element:Object(x.jsx)(w,{})})]})]})};a(41),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))},D=a(13),I=a(20),E=a(6),A={cities:[],citie:[],style:!0};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var a=e.cities.find((function(e){return e.id===t.payload.id}));return console.log(t.payload),"404"===t.payload.cod?(h()({icon:"error",title:"Ciudad no encontrada"}),Object(E.a)({},e)):a?(h()({icon:"warning",title:"No es posible repetir una ciudad"}),e):(h()({icon:"success",title:"Ciudad Agregada correctamente"}),Object(E.a)(Object(E.a)({},e),{},{cities:[].concat(Object(I.a)(e.cities),[t.payload])}));case d:return Object(E.a)(Object(E.a)({},e),{},{cities:e.cities.filter((function(e){return e.id!==t.payload}))});case l:return Object(E.a)(Object(E.a)({},e),{},{citie:e.cities.filter((function(e){return e.id===parseInt(t.payload)}))});case j:return Object(E.a)(Object(E.a)({},e),{},{style:e.style?t.payload:!t.payload});case u:return Object(E.a)(Object(E.a)({},e),{},{citie:t.payload});case b:return Object(E.a)(Object(E.a)({},e),{},{cities:t.payload});default:return e}},_=a(19),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.b,q=Object(D.c)(T,L(Object(D.a)(_.a)));i.a.render(Object(x.jsx)(r.a,{store:q,children:Object(x.jsx)(v.a,{basename:"/",children:Object(x.jsx)(S,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),k()}},[[42,1,2]]]);
//# sourceMappingURL=main.23d7a39d.chunk.js.map