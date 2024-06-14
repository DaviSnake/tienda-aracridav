import React, { useContext } from 'react';
import { DataContext } from '../../Context/Dataprovider';
import { ProductoItems } from './ProductoItems';

export const ProductosLista = () => {

  const value = useContext(DataContext);
  const [productos] = value.productos;

  return (
    <>
      <h1 className="title">Productos</h1>
      <div className="productos">
        {
          productos.map(producto =>(
            <ProductoItems 
              key={producto.id} 
              id={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
              category={producto.category}
              cantidad={producto.cantidad}
              />
          ))
        }
        
      </div>
    </>
  )
}
