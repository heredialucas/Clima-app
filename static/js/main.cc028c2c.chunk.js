(this["webpackJsonpclima-app"]=this["webpackJsonpclima-app"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(12),i=a.n(n),s=a(13),r=a(5),o=a(2),d=a(7),l=a.n(d),u=(a(20),a.p+"static/media/logo.103b5fa1.svg"),j=(a(21),a(0));function m(e){var t=e.onSearch,a=Object(c.useState)(""),n=Object(r.a)(a,2),i=n[0],s=n[1],d=Object(o.f)();return Object(j.jsxs)("form",{className:"d-flex",onSubmit:function(e){e.preventDefault(),t(i),s(""),d("./ciudades")},children:[Object(j.jsx)("input",{className:"form-control mx-2",type:"text",placeholder:"Ciudad...",value:i,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("input",{className:"btn btn-primary me-2 botonSearch",type:"submit",value:"Agregar"})]})}a(23);var b=a(4);var h=function(e){var t=e.onSearch;return Object(j.jsxs)("nav",{className:"navbar navbar-dark navegacion",children:[Object(j.jsx)(b.b,{className:"linkCabecera",to:"/",children:Object(j.jsxs)("span",{className:"navbar-brand",children:[Object(j.jsx)("img",{id:"logo",src:u,width:"30",height:"30",className:"d-inline-block align-top",alt:""}),Object(j.jsx)("span",{className:"cabecera",children:"Heredia Lucas - Clima App"})]})}),Object(j.jsxs)("div",{className:"d-flex justify-content-center py-3 navSeparador",children:[Object(j.jsx)(b.b,{className:"linkHome mx-2",to:"/",children:Object(j.jsx)("span",{children:"Inicio"})}),Object(j.jsx)(b.b,{className:"linkHome mx-2",to:"/ciudades",children:Object(j.jsx)("span",{children:"Ciudades"})}),Object(j.jsx)(b.b,{className:"linkHome mx-2",to:"/about",children:Object(j.jsx)("span",{children:"Acerca del Proyecto"})})]}),Object(j.jsx)(m,{onSearch:t})]})};a(24),a(25);function x(e){var t=e.min,a=e.max,n=e.name,i=e.img,s=e.onClose,o=e.id,d=Object(c.useState)(!0),l=Object(r.a)(d,2),u=l[0],m=l[1];return Object(j.jsxs)("div",{className:u?"card":"cardNew",children:[Object(j.jsx)("div",{id:"changeIcon",className:"container",children:Object(j.jsx)("button",{onClick:function(){m(!u)},className:u?"botonChange":"botonChange2"})}),Object(j.jsx)(b.b,{className:"cartas",to:"/ciudad/".concat(o),children:Object(j.jsxs)("div",{className:"card-body d-flex flex-column align-content-center",children:[Object(j.jsx)("img",{className:"iconoClima",src:"http://openweathermap.org/img/wn/"+i+"@2x.png",width:"80",height:"80",alt:""}),Object(j.jsx)("h5",{className:"card-title",children:n}),Object(j.jsxs)("div",{className:" dataCard",children:[Object(j.jsxs)("div",{className:" col-md-6 col-lg-6 cartasDatos",children:[Object(j.jsx)("p",{className:"cartasDatos-p1",children:"Min"}),Object(j.jsxs)("p",{className:"cartasDatos-p2",children:[t,"\xb0"]})]}),Object(j.jsxs)("div",{className:" col-md-6 col-lg-6 cartasDatos",children:[Object(j.jsx)("p",{className:"cartasDatos-p1",children:"Max"}),Object(j.jsxs)("p",{className:"cartasDatos-p2",children:[a,"\xb0"]})]})]})]})}),Object(j.jsx)("div",{id:"closeIcon",className:"container",children:Object(j.jsx)("button",{onClick:s,className:u?"boton":"boton2",children:"X"})})]})}function O(e){var t=e.cities,a=e.onClose;return Object(j.jsx)("div",{className:"cards",children:t.map((function(e){return Object(j.jsx)(x,{max:e.max,min:e.min,name:e.name,img:e.img,onClose:function(){return a(e.id)},id:e.id},e.id)}))})}a(26);function p(){return Object(j.jsx)("p",{className:"containerAbout",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta exercitationem aliquid illum. Neque consectetur quam odio ipsum, rem vel soluta assumenda accusantium, iure placeat libero rerum excepturi. Harum, necessitatibus consequuntur?"})}a(27);function f(e){var t=e.city,a=Object(o.g)().ciudadId,c=t.find((function(e){return e.id===parseInt(a)}));return Object(j.jsx)("div",{className:"containerCiudad",children:Object(j.jsxs)("div",{className:"contentCardTitle",children:[Object(j.jsx)("div",{className:"titleCard",children:Object(j.jsx)("h2",{className:"divTitleCard",children:c.name})}),Object(j.jsxs)("div",{className:"ciudadContent",children:[Object(j.jsxs)("div",{className:"ciudadLeft",children:[Object(j.jsxs)("p",{className:"descriptionCard",children:["Temperatura: ",c.temp," \xbaC"]}),Object(j.jsxs)("p",{className:"descriptionCard",children:["Clima: ",c.weather]}),Object(j.jsxs)("p",{className:"descriptionCard",children:["Viento: ",c.wind," km/h"]})]}),Object(j.jsxs)("div",{className:"ciudadRight",children:[Object(j.jsxs)("p",{className:"descriptionCard",children:["Cantidad de nubes: ",c.clouds]}),Object(j.jsxs)("p",{className:"descriptionCard",children:["Latitud: ",c.latitud,"\xba"]}),Object(j.jsxs)("p",{className:"descriptionCard",children:["Longitud: ",c.longitud,"\xba"]})]})]})]})})}a(28);function N(){return Object(j.jsxs)("div",{className:"containerInicio",children:[Object(j.jsx)("h1",{className:"inicio1",children:"BIENVENIDA/O"}),Object(j.jsx)(b.b,{to:"./ciudades",children:Object(j.jsx)("h2",{className:"inicio2",children:"Agregue una ciudad"})})]})}var g=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){!function(){var e=JSON.parse(window.localStorage.getItem("citieSave"));n(e)}()}),[]),Object(c.useEffect)((function(){window.localStorage.setItem("citieSave",JSON.stringify(a))}),[a]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{onSearch:function(e){if(""===e)return l()({title:"Debe escribir una ciudad",icon:"warning",button:{className:"botonSwal"}});fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("4ae2636d8dfbdc3044bede63951a019b")).then((function(e){return e.json()})).then((function(e){if(void 0!==e.main){var t={min:Math.round(e.main.temp_min),max:Math.round(e.main.temp_max),img:e.weather[0].icon,id:e.id,wind:e.wind.speed,temp:e.main.temp,name:e.name,weather:e.weather[0].main,clouds:e.clouds.all,latitud:e.coord.lat,longitud:e.coord.lon};a.find((function(t){return t.id===e.id}))?l()({title:"Esta ciudad ya se encuentra creada",icon:"warning",button:{className:"botonSwal"}}):(n((function(e){return[].concat(Object(s.a)(e),[t])})),l()({title:"Ciudad agregada correctamente",icon:"success",button:{className:"botonSwal"}}))}else l()({title:"Ciudad no encontrada",icon:"error",button:{className:"botonSwal"}})}))}}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(N,{})}),Object(j.jsx)(o.a,{path:"/ciudades",element:Object(j.jsx)(O,{cities:a,onClose:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))})),l()({title:"Ciudad eliminada correctamente",icon:"success",button:{className:"botonSwal"}})}})}),Object(j.jsx)(o.a,{path:"/about",element:Object(j.jsx)(p,{})}),Object(j.jsx)(o.a,{path:"/ciudad/:ciudadId",element:Object(j.jsx)(f,{city:a})})]})]})};a(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};i.a.render(Object(j.jsx)(b.a,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.cc028c2c.chunk.js.map