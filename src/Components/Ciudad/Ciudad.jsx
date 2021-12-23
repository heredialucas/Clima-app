import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { onFilter } from "../redux/actions/actions";
import "./Ciudad.css";

export default function Ciudad() {
  const { ciudadId } = useParams();
  const citie = useSelector((state) => state.citie);
  const style = useSelector(state => state.style)
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(onFilter(ciudadId));
  }, [])
  
  return (
    <div>
      {(citie.length === 0) ? (
        <div>...Loading</div>
      ) : (
        <div className="containerCiudad">
          <div className={style ? "contentCardTitle" : "contentCardTitle1"}>
            <div className="titleCard">
              <h2 className={style ? "divTitleCard" : "divTitleCard1" }>{citie[0].name}</h2>
            </div>
            <div className="ciudadContent">
              <div className="ciudadLeft">
                <p className={style ? "descriptionCard" : "descriptionCard1"}>País: {citie[0].sys.country}</p>
                <p className={style ? "descriptionCard" : "descriptionCard1"}>Temperatura: {parseInt(citie[0].main.temp) - 273} ºC</p>
                <p className={style ? "descriptionCard" : "descriptionCard1"}>Viento: {citie[0].wind.speed} km/h</p>
              </div>
              <div className="ciudadRight">
                <p className={style ? "descriptionCard" : "descriptionCard1"}>
                  Cantidad de nubes: {citie[0].clouds.all}
                </p>
                <p className={style ? "descriptionCard" : "descriptionCard1"}>Latitud: {citie[0].coord.lat}º</p>
                <p className={style ? "descriptionCard" : "descriptionCard1"}>Longitud: {citie[0].coord.lon}º</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
