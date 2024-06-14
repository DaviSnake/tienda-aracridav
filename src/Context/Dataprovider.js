import { useState, useEffect, createContext } from "react";
import Data from "../Data.js"

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [menu, setMenu] = useState(false);
    const [detalle, setDetalle] = useState([]);
    const [cerrarDetalle, setCerrarDetalle] = useState(false);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const productos = Data.items;
        if (productos){
            setProductos(productos);
        }else{
            setProductos([]);
        }
        
    }, []);

    const addCarrito = (id) => {
        const check = carrito.every(item => {
            return item.id !== id;
        });

        if (check){
            const data = productos.filter(producto => {
                return producto.id === id;
            });
            setCarrito([...carrito, ...data]);
        }else{
            alert("El producto ya se ha añadido al carrito");
        }
    }

    const addDetalle = (id) => {
        productos.forEach(producto => {
            if (producto.id === parseInt(id)){
                setDetalle(producto);
            }
        })
    }

    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) => {
                return prev + (item.price * item.cantidad);
            }, 0);
            setTotal(res);
        }
        getTotal();
    }, [carrito]);
    
    const value = {
        productos : [productos],
        detalle : [detalle],
        menu : [menu, setMenu],
        cerrarDetalle : [cerrarDetalle, setCerrarDetalle],
        addCarrito : addCarrito,
        addDetalle : addDetalle,
        carrito : [carrito, setCarrito],
        total : [total, setTotal]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

