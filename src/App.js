import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAddCities,onAddCitie } from "./Components/redux/actions/actions";

import "./App.css";
import Nav from "./Components/Nav/Nav.jsx";
import Cards from "./Components/Cards/Cards.jsx";
import About from "./Components/About/About";
import Ciudad from "./Components/Ciudad/Ciudad.jsx";
 
function App() {
  const cities = useSelector((state) => state.cities);
  const citie = useSelector((state) => state.citie);
  const dispatch = useDispatch();
  const style = useSelector(state => state.style)
  
  const citiesSaveLocalStorage = () => {
    
    const citieStorage = JSON.parse(window.localStorage.getItem("citieSave"));
    if(citieStorage && citieStorage.length > 0 ) {
      dispatch(onAddCitie(citieStorage)) ;
    }

    const citiesStorage = JSON.parse(window.localStorage.getItem("citiesSave"));
    if(citiesStorage && citiesStorage.length > 0) {
      dispatch(onAddCities(citiesStorage)) ;
    }
  };

  useEffect(() => {
    citiesSaveLocalStorage();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("citiesSave", JSON.stringify(cities));
    window.localStorage.setItem("citieSave", JSON.stringify(citie));
  }, [cities,citie]);


  return (
    <div className={style ? "body1" : "body2"}>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Cards />} />
        <Route path="/ciudad/:ciudadId" element={<Ciudad />} />
      </Routes>
      </div>
  );
}

export default App;
