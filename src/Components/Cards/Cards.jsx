import React from "react";
import "./Cards.css";
import { useSelector } from "react-redux";
import Card from "../Card/Card.jsx";

export default function Cards() {
  const cities = useSelector((state) => state.cities);
  const style = useSelector(state => state.style)

  return (
    <div className="cards">
      {(!cities) ? (
        <h3 className={style ? "loading" : "loading1"}>No hay Ciudades para mostrar</h3>
      ) : (
        cities.map((c) => (
          <Card
            key={c.id}
            max={c.main.temp_max}
            min={c.main.temp_min}
            name={c.name}
            img={c.weather[0].icon}
            id={c.id}
          />
        ))
      )
      }
    </div>
  );
}
