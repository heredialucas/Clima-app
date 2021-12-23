import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { onClose } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { onStyle } from "../redux/actions/actions";

export default function Card({ min, max, name, img, id }) {
  const dispatch = useDispatch();
  const style = useSelector((state) => state.style);

  return (
    <div className={style ? "cardNew" : "card"}>
      <div id="changeIcon" className="container">
        <button
          onClick={()=>dispatch(onStyle(false))}
          className={style ? "botonChange2" : "botonChange"}
        ></button>
      </div>
      <Link className="cartas" to={`/ciudad/${id}`}>
        <div className={style ? "card-body" : "card-body1"}>
          <img
            className="iconoClima"
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="80"
            height="80"
            alt=""
          />
          <h5 className={style ? "card-title" : "card-title1"}>{name}</h5>
          <div className=" dataCard">
            <div className=" col-md-6 col-lg-6 cartasDatos">
              <p className={style ? "cartasDatos-p1" : "cartasDatos-p3"}>Min</p>
              <p className={style ? "cartasDatos-p2" : "cartasDatos-p4"}>{parseInt(min) - 273}°</p>
            </div>
            <div className=" col-md-6 col-lg-6 cartasDatos">
              <p className={style ? "cartasDatos-p1" : "cartasDatos-p3"}>Max</p>
              <p className={style ? "cartasDatos-p2" : "cartasDatos-p4"}>{parseInt(max) - 273}°</p>
            </div>
          </div>
        </div>
      </Link>
      <div id="closeIcon" className="container">
        <button
          onClick={() => dispatch(onClose(id))}
          className={style ? "boton2" : "boton"}
        >
          X
        </button>
      </div>
    </div>
  );
}
