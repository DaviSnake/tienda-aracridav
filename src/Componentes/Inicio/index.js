import React from 'react'
import Protada from "../../images/inicio.jpg";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="inicio">
        <Link to="/">
            <h1>Inicio</h1>
        </Link>
        <img src={Protada} alt="inicio"/>
    </div>
  )
}
