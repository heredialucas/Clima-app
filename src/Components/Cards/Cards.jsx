import React from "react";
import "./Cards.css";
import { useSelector } from "react-redux";
import Card from "../Card/Card.jsx";

export default function Cards() {
  const cities = useSelector((state) => state.cities);

  return (
    <div className="cards">
      {(!cities) ? (
        <div>...Loading</div>
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
