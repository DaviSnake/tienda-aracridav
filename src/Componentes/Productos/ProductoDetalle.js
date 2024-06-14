import React, { useContext, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { DataContext } from '../../Context/Dataprovider';

export const ProductoDetalle = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const [detallle] = value.detalle;
  const [detalle, setDetalle] = useState([]);
  const [cerrarDetalle, setCerrarDetalle] = value.cerrarDetalle;
  const params = useParams();

  const toogleFalse = () => {
    setCerrarDetalle(false);
  }

  const show1 = cerrarDetalle ? "detallle show" : "detallle";
  const show2= cerrarDetalle ? "detalle show" : "detallle";
 
  
  return (
    <>
        { 
          <div className={show1}>
            <div className={show2}>
              <div className="detalle__close" onClick={toogleFalse}>
                <box-icon name="x"></box-icon>
              </div>
              <div className="producto__img">
                    <img src={detallle.image} alt={detallle.title} />
                </div>
                <h2>{detallle.title}</h2>
                <p className="price">${detallle.price}</p>
                <button>Añadir al carrito</button>
            </div>
          </div>
        }
    </>
  )
}
