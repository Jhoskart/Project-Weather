import React from "react";
import style from "./About.module.css"
//creo el componente funcional About que se mostrará en la ruta /about
export default function About(){
    return(
<div className={style.container}>
  <div >
    <div className={style.cardBody}>
    <div className="col-md-5" >
      <div className="hp-100 p-5 text-white bg-dark rounded-3" >
        <h4 className="card-title">Creando la Weather App</h4>
        <p>Desde un principio, tuve miedo y ansias en comenzar a aprender React, ha sido un camino complejo en tan poco 
            tiempo poder crear esta App, con muchos altibajos y perseverancia, la funcionalidad quedo mejor de lo esperado. 
            Con mucho camino por recorrer me despido, un abrazo a mi yo de este momento y al del futuro, y todo aquel que pase 
            por aqui también.</p>
            <div className={style.margin}>Att. Jhoskar Toro</div>
      </div>
      </div>
    </div>
  </div>
</div>


    )
}



        {/* <div>
            <h4>Creando la Weather App</h4>
            <p>Desde un principio, tuve miedo y ansias en comenzar a aprender React, ha sido un camino complejo en tan poco 
            tiempo poder crear esta App, con muchos altibajos y perseverancia, la funcionalidad quedo mejor de lo esperado. 
            con mucho camino por recorrer me despido, un abrazo mi yo de este momento y al del futuro, y todo aquel que pase 
            por aqui también. 
            </p>
            
        </div> */}