(this["webpackJsonpclima-app"]=this["webpackJsonpclima-app"]||[]).push([[0],{20:function(e,a,t){},21:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t(12),i=t.n(n),s=t(13),r=t(5),o=t(2),d=t(7),l=t.n(d),u=(t(20),t.p+"static/media/logo.103b5fa1.svg"),m=(t(21),t(0));function j(e){var a=e.onSearch,t=Object(c.useState)(""),n=Object(r.a)(t,2),i=n[0],s=n[1],d=Object(o.f)();return Object(m.jsxs)("form",{className:"d-flex",onSubmit:function(e){e.preventDefault(),a(i),s(""),d("./ciudades")},children:[Object(m.jsx)("input",{className:"form-control mx-2",type:"text",placeholder:"Ciudad...",value:i,onChange:function(e){return s(e.target.value)}}),Object(m.jsx)("input",{className:"btn btn-primary me-2 botonSearch",type:"submit",value:"Agregar"})]})}t(23);var b=t(4);var h=function(e){var a=e.onSearch;return Object(m.jsxs)("nav",{className:"navbar navbar-dark navegacion",children:[Object(m.jsx)(b.b,{className:"linkCabecera",to:"/",children:Object(m.jsxs)("span",{className:"navbar-brand",children:[Object(m.jsx)("img",{id:"logo",src:u,width:"30",height:"30",className:"d-inline-block align-top",alt:""}),Object(m.jsx)("span",{className:"cabecera",children:"Heredia Lucas - Clima App"})]})}),Object(m.jsxs)("div",{className:"d-flex justify-content-center py-3 navSeparador",children:[Object(m.jsx)(b.b,{className:"linkHome mx-2",to:"/",children:Object(m.jsx)("span",{children:"Inicio"})}),Object(m.jsx)(b.b,{className:"linkHome mx-2",to:"/ciudades",children:Object(m.jsx)("span",{children:"Ciudades"})}),Object(m.jsx)(b.b,{className:"linkAbout mx-2",to:"/about",children:Object(m.jsx)("span",{children:"Acerca del Proyecto"})})]}),Object(m.jsx)(j,{onSearch:a})]})};t(24),t(25);function x(e){var a=e.min,t=e.max,c=e.name,n=e.img,i=e.onClose,s=e.id;return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)(b.b,{className:"cartas",to:"/ciudad/".concat(s),children:Object(m.jsxs)("div",{className:"card-body d-flex flex-column align-content-center",children:[Object(m.jsx)("img",{className:"iconoClima",src:"http://openweathermap.org/img/wn/"+n+"@2x.png",width:"80",height:"80",alt:""}),Object(m.jsx)("h5",{className:"card-title",children:c}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-sm-6 col-md-6 col-lg-6 cartasDatos",children:[Object(m.jsx)("p",{className:"cartasDatos-p1",children:"Min"}),Object(m.jsxs)("p",{className:"cartasDatos-p2",children:[a,"\xb0"]})]}),Object(m.jsxs)("div",{className:"col-sm-6 col-md-6 col-lg-6 cartasDatos",children:[Object(m.jsx)("p",{className:"cartasDatos-p1",children:"Max"}),Object(m.jsxs)("p",{className:"cartasDatos-p2",children:[t,"\xb0"]})]})]})]})}),Object(m.jsx)("div",{id:"closeIcon",className:"container",children:Object(m.jsx)("button",{onClick:i,className:"btn btn-sm btn-danger boton",children:"X"})})]})}function p(e){var a=e.cities,t=e.onClose;return Object(m.jsx)("div",{className:"cards",children:a.map((function(e){return Object(m.jsx)(x,{max:e.max,min:e.min,name:e.name,img:e.img,onClose:function(){return t(e.id)},id:e.id},e.id)}))})}t(26);function O(){return Object(m.jsx)("p",{className:"containerAbout",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta exercitationem aliquid illum. Neque consectetur quam odio ipsum, rem vel soluta assumenda accusantium, iure placeat libero rerum excepturi. Harum, necessitatibus consequuntur?"})}t(27);function f(e){var a=e.city,t=Object(o.g)().ciudadId,c=a.find((function(e){return e.id===parseInt(t)}));return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"contentCardTitle",children:[Object(m.jsx)("div",{className:"titleCard",children:Object(m.jsx)("h2",{className:"divTitleCard",children:c.name})}),Object(m.jsxs)("div",{className:"ciudadContent",children:[Object(m.jsxs)("div",{className:"ciudadLeft",children:[Object(m.jsxs)("p",{className:"descriptionCard",children:["Temperatura: ",c.temp," \xbaC"]}),Object(m.jsxs)("p",{className:"descriptionCard",children:["Clima: ",c.weather]}),Object(m.jsxs)("p",{className:"descriptionCard",children:["Viento: ",c.wind," km/h"]})]}),Object(m.jsxs)("div",{className:"ciudadRight",children:[Object(m.jsxs)("p",{className:"descriptionCard",children:["Cantidad de nubes: ",c.clouds]}),Object(m.jsxs)("p",{className:"descriptionCard",children:["Latitud: ",c.latitud,"\xba"]}),Object(m.jsxs)("p",{className:"descriptionCard",children:["Longitud: ",c.longitud,"\xba"]})]})]})]})})}t(28);function N(){return Object(m.jsxs)("div",{className:"containerInicio",children:[Object(m.jsx)("h1",{className:"inicio1",children:"BIENVENIDA/O"}),Object(m.jsx)(b.b,{to:"./ciudades",children:Object(m.jsx)("h2",{className:"inicio2",children:"Agregue una ciudad"})})]})}var g=function(){var e=Object(c.useState)([]),a=Object(r.a)(e,2),t=a[0],n=a[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{onSearch:function(e){if(""===e)return l()({title:"Debe escribir una ciudad",icon:"warning",button:{className:"botonSwal"}});fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("4ae2636d8dfbdc3044bede63951a019b")).then((function(e){return e.json()})).then((function(e){if(void 0!==e.main){var a={min:Math.round(e.main.temp_min),max:Math.round(e.main.temp_max),img:e.weather[0].icon,id:e.id,wind:e.wind.speed,temp:e.main.temp,name:e.name,weather:e.weather[0].main,clouds:e.clouds.all,latitud:e.coord.lat,longitud:e.coord.lon};t.find((function(a){return a.id===e.id}))?l()({title:"Esta ciudad ya se encuentra creada",icon:"warning",button:{className:"botonSwal"}}):(n((function(e){return[].concat(Object(s.a)(e),[a])})),l()({title:"Ciudad agregada correctamente",icon:"success",button:{className:"botonSwal"}}))}else l()({title:"Ciudad no encontrada",icon:"error",button:{className:"botonSwal"}})}))}}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",element:Object(m.jsx)(N,{})}),Object(m.jsx)(o.a,{path:"/ciudades",element:Object(m.jsx)(p,{cities:t,onClose:function(e){n((function(a){return a.filter((function(a){return a.id!==e}))})),l()({title:"Ciudad eliminada correctamente",icon:"success",button:{className:"botonSwal"}})}})}),Object(m.jsx)(o.a,{path:"/about",element:Object(m.jsx)(O,{})}),Object(m.jsx)(o.a,{path:"/ciudad/:ciudadId",element:Object(m.jsx)(f,{city:t})})]})]})};t(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,i=a.getLCP,s=a.getTTFB;t(e),c(e),n(e),i(e),s(e)}))};i.a.render(Object(m.jsx)(b.a,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.69ec33fb.chunk.js.map