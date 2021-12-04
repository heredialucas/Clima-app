import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";


import "./App.css";
import Nav from "./Components/Nav/Nav.jsx";
import Cards from "./Components/Cards/Cards.jsx";
import About from "./Components/About/About";
import Ciudad from "./Components/Ciudad/Ciudad.jsx";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";


function App() {
  const [cities, setCities] = useState([]);
  

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    if(ciudad === '') return alert("Debe escribir una localidad")
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          let aux = cities.find(c => c.id === recurso.id)
          if(aux){
            alert ("Esta ciudad se encuentra creada")
          }else{
            setCities((oldCities) => [...oldCities, ciudad]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  // function onFilter(ciudadId) {
  //   let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
  //   if (ciudad.length > 0) {
  //     return ciudad[0];
  //   } else {
  //     return null;
  //   }
  // }
  return (
    <>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Cards cities={cities} onClose={onClose} />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/ciudad/:ciudadId' element={<Ciudad city={cities}/>}/>
      </Routes>
    </>
  );
}

export default App;
