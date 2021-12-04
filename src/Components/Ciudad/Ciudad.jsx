import React from "react";
import { useParams } from "react-router";

export default function Ciudad({city}) {
    const {ciudadId} = useParams();
    const aux = city.find((e) => e.id === parseInt(ciudadId))
    

    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{aux.name}</h2>
                    <div className="info">
                        <div>Temperatura: {aux.temp} ºC</div>
                        <div>Clima: {aux.weather}</div>
                        <div>Viento: {aux.wind} km/h</div>
                        <div>Cantidad de nubes: {aux.clouds}</div>
                        <div>Latitud: {aux.latitud}º</div>
                        <div>Longitud: {aux.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}