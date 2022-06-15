import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./City.css"
//creo el componente funcional City que mostrará los detalles de una ciudad
//recibida por props en la ruta /ciudad/{ciudadId}
export default function City(){

    const { ciudadId } = useParams();
    const[infoCity, setInfoCity] = useState();

    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${ciudadId}&appid=4ae2636d8dfbdc3044bede63951a019b`)
        .then((respuesta) => respuesta.json())
        .then((info) => {
            console.log(info)
                const objetoCiudad ={
                    name: info.name,
                    temp: info.main.temp,
                    weather: info.weather[0].main,
                    wind: info.wind.speed,
                    clouds: info.clouds.all,
                    latitud: info.coord.lat,
                    longitud: info.coord.lon
                }
                setInfoCity(objetoCiudad)
        })
    if (!infoCity){
            return(
                <div>
                    <p>Cargando...</p>
                </div>
            )
        }else{
            return(
             <div className="container">
                <div className="col-md-4">
                <div className="hp-100 p-5 bg-dark rounded-3">
                <h2>{infoCity.name}</h2>
                <div>
                    <div>Temperatura: {infoCity.temp}</div>
                    <div>Clima: {infoCity.weather}</div>
                    <div>Viento: {infoCity.wind}</div>
                    <div>Cantidad de nubes: {infoCity.clouds}</div>
                    <div>Latitud: {infoCity.latitud}º</div>
                    <div>Longitud: {infoCity.longitud}º</div>
                </div>
                </div>
                </div>
            </div>
            )
        }
}