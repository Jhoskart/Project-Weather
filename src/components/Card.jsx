import React from 'react';
import './Card.css';
import { Link } from "react-router-dom"
export default function Card({min, max, name, img, onClose, id}) {
  // acá va tu código
  return (
    <div className="card text-white bg-dark lead" >
    <div className="card-header">
    <button  className='btn btn-sm btn-danger' onClick={onClose}>X</button>
    <Link className = "decoration" to={`/ciudad/${id}`}>
    {name}
    </Link>
    </div>
    <div className="card-body">
      <div className=" row card-title">
        <div className='col-sm-4 col-md-4 col-lg-4 lead'>
          <h4>Min</h4>
          <p>{min}°</p>
        </div>
        <div className='col-sm-4 col-md-4 col-lg-4 lead'> 
          <h4>Max</h4>
          <p>{max}°</p>
        </div>
        <div className='col-sm-4'>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imagen de clima"/>
        </div>
    </div>
  </div>
  </div>
    )
};
