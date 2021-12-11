import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import swal from "sweetalert";

import "./App.css";
import Nav from "./Components/Nav/Nav.jsx";
import Cards from "./Components/Cards/Cards.jsx";
import About from "./Components/About/About";
import Ciudad from "./Components/Ciudad/Ciudad.jsx";
import Inicio from "./Components/Inicio/Inicio";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);
  // const [style, setStyle] = useState(true);

  const citiesSaveLocalStorage = () => {
    const citiesStorage = JSON.parse(window.localStorage.getItem("citieSave"));
    setCities(citiesStorage);
  };
  useEffect(() => {
    citiesSaveLocalStorage();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("citieSave", JSON.stringify(cities));
  }, [cities]);

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
    swal({
      title: "Ciudad eliminada correctamente",
      icon: "success",
      button: {
        className: "botonSwal",
      },
    });
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    if (ciudad === "")
      return swal({
        title: "Debe escribir una ciudad",
        icon: "warning",
        button: {
          className: "botonSwal",
        },
      });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
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
          let aux = cities.find((c) => c.id === recurso.id);
          if (aux) {
            swal({
              title: "Esta ciudad ya se encuentra creada",
              icon: "warning",
              button: {
                className: "botonSwal",
              },
            });
          } else {
            setCities((oldCities) => [...oldCities, ciudad]);
            swal({
              title: "Ciudad agregada correctamente",
              icon: "success",
              button: {
                className: "botonSwal",
              },
            });
          }
        } else {
          swal({
            title: "Ciudad no encontrada",
            icon: "error",
            button: {
              className: "botonSwal",
            },
          });
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
        <Route path="/" element={<Inicio />} />
        <Route
          path="/Clima-app/ciudades"
          element={<Cards cities={cities} onClose={onClose} />}
        />
        <Route path="/Clima-app/about" element={<About />} />
        <Route path="/Clima-app/ciudad/:ciudadId" element={<Ciudad city={cities} />} />
      </Routes>
    </>
  );
}

export default App;
