import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id }) {
  const [style, setStyle] = useState(true);

  function onChange() {
    style ? setStyle(false) : setStyle(true);
  }

  return (
    <div className={style ? "card" : "cardNew"}>
      <div id="changeIcon" className="container">
        <button onClick={onChange} className={style ? "botonChange" : "botonChange2"}>
        </button>
      </div>
      <Link className="cartas" to={`/ciudad/${id}`}>
        <div className="card-body d-flex flex-column align-content-center">
          <img
            className="iconoClima"
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="80"
            height="80"
            alt=""
          />
          <h5 className="card-title">{name}</h5>
          <div className=" dataCard">
            <div className=" col-md-6 col-lg-6 cartasDatos">
              <p className="cartasDatos-p1">Min</p>
              <p className="cartasDatos-p2">{min}°</p>
            </div>
            <div className=" col-md-6 col-lg-6 cartasDatos">
              <p className="cartasDatos-p1">Max</p>
              <p className="cartasDatos-p2">{max}°</p>
            </div>
          </div>
        </div>
      </Link>
      <div id="closeIcon" className="container">
        <button onClick={onClose} className={style ? "boton" : "boton2"}>
          X
        </button>
      </div>
    </div>
  );
}
