import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import { DataContext } from '../../Context/Dataprovider';

export const ProductoItems = ({
    id,
    title,
    price,
    image,
    category
}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;
    const addDetalle = value.addDetalle;
    const [cerrarDetalle, setCerrarDetalle] = value.cerrarDetalle;

    const toogleMenu = (id) => {
            setCerrarDetalle(!cerrarDetalle);
            addDetalle(id);
      }

    return (
        <div className="producto">
            <Link to={`/productos/${id}`}>
                <div className="producto__img">
                    <img src={image} alt={title} />
                </div>
            </Link>
            <div className="producto__footer">
                <h1>{title}</h1>
                <p>{category}</p>
                <p className="price">${price}</p>
            </div>
            <div className="buttom">
                <button className="tbn" onClick={() => addCarrito(id)}>
                    Añadir al Carrito
                </button>
                <div>
                    <Link to={"#"} className="btn" onClick={() => toogleMenu(id)}>Vista</Link>
                </div>
            </div>
        </div>
    )
}
