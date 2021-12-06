import React from "react";
import { useParams } from "react-router";
import './Ciudad.css'

export default function Ciudad({city}) {
    const {ciudadId} = useParams();
    const test = city.find((e) => e.id === parseInt(ciudadId))


    return (
        <div className="container">
                <div className="contentCardTitle">
                    <div className="titleCard">

                    <h2 className="divTitleCard">{test.name}</h2>
                    </div>
                    <div className="ciudadContent">
                        <div className="ciudadLeft">
                            <p className="descriptionCard" >Temperatura: {test.temp} ºC</p>
                            <p className="descriptionCard" >Clima: {test.weather}</p>
                            <p className="descriptionCard" >Viento: {test.wind} km/h</p>
                        </div>
                        <div className="ciudadRight">
                            <p className="descriptionCard" >Cantidad de nubes: {test.clouds}</p>
                            <p className="descriptionCard" >Latitud: {test.latitud}º</p>
                            <p className="descriptionCard" >Longitud: {test.longitud}º</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}