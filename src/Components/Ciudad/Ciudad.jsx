import React from "react";
import { useParams } from "react-router";
import './Ciudad.css'

export default function Ciudad({onFilter}) {
    const {ciudadId} = useParams();
    const city = onFilter(ciudadId) 


    return (
        <div className="containerCiudad">
                <div className="contentCardTitle">
                    <div className="titleCard">

                    <h2 className="divTitleCard">{city.name}</h2>
                    </div>
                    <div className="ciudadContent">
                        <div className="ciudadLeft">
                            <p className="descriptionCard" >Temperatura: {city.temp} ºC</p>
                            <p className="descriptionCard" >Clima: {city.weather}</p>
                            <p className="descriptionCard" >Viento: {city.wind} km/h</p>
                        </div>
                        <div className="ciudadRight">
                            <p className="descriptionCard" >Cantidad de nubes: {city.clouds}</p>
                            <p className="descriptionCard" >Latitud: {city.latitud}º</p>
                            <p className="descriptionCard" >Longitud: {city.longitud}º</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}