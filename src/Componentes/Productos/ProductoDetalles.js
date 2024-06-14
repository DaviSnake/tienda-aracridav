import React, { useContext, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { DataContext } from '../../Context/Dataprovider';

export const ProductoDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const [detalle, setDetalle] = useState([]);
  const [urls, setUrls] = useState(0);
  const [images, setImages] = useState('');
  const params = useParams();

  useEffect(() => {
    productos.forEach(producto => {
        if (producto.id === parseInt(params.id)){
            setDetalle(producto);
        }
    })
  }, [params.id, productos]);

  return (
    <>
        {
            <div className="detalles">
                <h2>{detalle.title}</h2>
                <p className="price">${detalle.price}</p>
                <div className="grid">
                  <p className="nuevo">Nuevo</p>
                  <div className="size">
                    <select placeholder="Tamaño">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                    <p>Tamaño</p>
                  </div>
                </div>
                <button>Añadir al carrito</button>
                <img src="https://stockx-360.imgix.net/Nike-LD-Waffle-Sacai-Black-Nylon/Images/Nike-LD-Waffle-Sacai-Black-Nylon/Lv2/img1.jpg?auto=format,compress&q=90&updated_at=1606321430&w=1000" alt={detalle.title} />
                <input type="range" min="1" max="36" />
                <div className="description">
                  <p><b>Descripción:</b>sdsdsddsadsdad sdsdd s</p>
                </div>
            </div>
        }
    </>
  )
}
