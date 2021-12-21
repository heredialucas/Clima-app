import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { onFilter } from "../redux/actions/actions";
import "./Ciudad.css";

export default function Ciudad() {
  const { ciudadId } = useParams();
  const citie = useSelector((state) => state.citie);
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
          <div className="contentCardTitle">
            <div className="titleCard">
              <h2 className="divTitleCard">{citie[0].name}</h2>
            </div>
            <div className="ciudadContent">
              <div className="ciudadLeft">
                <p className="descriptionCard">Temperatura: {} ºC</p>
                <p className="descriptionCard">Clima: {}</p>
                <p className="descriptionCard">Viento: {} km/h</p>
              </div>
              <div className="ciudadRight">
                <p className="descriptionCard">
                  Cantidad de nubes: {}
                </p>
                <p className="descriptionCard">Latitud: {}º</p>
                <p className="descriptionCard">Longitud: {}º</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
