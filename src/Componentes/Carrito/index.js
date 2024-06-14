import React, {useContext} from 'react'
import { DataContext } from '../../Context/Dataprovider';
//import axios from 'axios';

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const toogleFalse = () => {
    setMenu(false);
  }

  const show1 = menu ? "carritos show" : "carritos";
  const show2= menu ? "carrito show" : "carrito";

  const resta = id => {
    carrito.forEach(item => {
        if (item.id === id){
            item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
        }
        setCarrito([...carrito]);
    });
  }

  const suma = id => {
    carrito.forEach(item => {
        if (item.id === id){
            item.cantidad += 1;
        }
        setCarrito([...carrito]);
    });
  }

  const removeProducto = id => {
    if (window.confirm("¿Esta seguro de eliminar el producto?")){
        carrito.forEach((item, index) => {
            if (item.id === id){
                item.cantidad = 1;
                carrito.splice(index, 1);
            }
        });
        setCarrito([...carrito]);
    }
  }

//   const pagarAxios = async(total) => {
    // const config = {
    //     url: 'https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.2/transactions',
    //     method: 'POST',
    //     mode: "no-cors",
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
    //         'Content-Type': 'application/json',
    //         'bk-Api-Key-Id': '597055555532',
    //         'Tbk-Api-Key-Secret': '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C'
    //     },
    //     //data: JSON.stringify({email: email, password: password}),
    // };
    // const response = await axios(config).catch((err) => err);
    // if(response.data.error){
    //     alert(response.data.error);
    // } else {
    //     alert(response.data);
    // }

//     const url = 'https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.2/transactions'
//     const data = {
//         buy_order: "ordenCompra12345678",
//         itemssession_id: "sesion1234557545",
//         amount: total,
//         return_url: "http://www.comercio.cl/webpay/retorno" 
//     };
//     axios
//     .post(url, data, {
//         mode: "no-cors",
//         headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json;charset=UTF-8",
//         'Access-Control-Allow-Origin': '*',
//         "bk-Api-Key-Id": "597055555532",
//         "Tbk-Api-Key-Secret": "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C"
//         },
//     })
//     .then(({data}) => {
//         console.log(data);
//     });
//   }

//   const pagarFetch = async(total) => {
    
//     //alert(`entro a pagar  ${total}`)
        
//     try {
//         const url = "https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.2/transactions";
//         const parametros = {
//             method: 'POST',
//             mode: "no-cors",
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//                 "bk-Api-Key-Id": "597055555532",
//                 "Tbk-Api-Key-Secret": "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C"
//               }),
//             body: JSON.stringify({
//                 buy_order: "ordenCompra12345678",
//                 session_id: "sesion1234557545",
//                 amount: total,
//                 return_url: "http://www.comercio.cl/webpay/retorno" 
//             })
//         }
//         const result = await fetch(url, parametros);
//         console.log(result.text());
//     } catch (error) {
//         console.log(error);
//     }   
    
   
//   }

  const pagarFetchJson = async(total) => {
    
    const joke = {
        buy_order: "ordenCompra12345678",
        session_id: "sesion1234557545",
        amount: total,
        return_url: "http://www.comercio.cl/webpay/retorno" 
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
    //    'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
          "Tbk-Api-Key-Id": "597055555532",
          "Tbk-Api-Key-Secret": "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C"
        },
        body: JSON.stringify(joke)
      };
      fetch('https://webpay3gint.transbank.cl/rswebpaytransaction/api/webpay/v1.2/transactions', options)
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error(error));
   
  }

  return (
    <div className={show1}>
        <div className={show2}>
            <div className="carrito__close" onClick={toogleFalse}>
                <box-icon name="x"></box-icon>
            </div>
            <h2>Su carrito</h2>
            <div className="carrito__center">                
        {

            carrito.length === 0 ? <h2 style={{
                textAlign: "center", fontSize: "3rem"
            }}>Carrito Vacio</h2> : <>
            {
            carrito.map((producto) => (
                <div className="carrito__item" key={producto.id}>
                    <img src={producto.image} alt=""/>
                    <div>
                        <h3>{producto.title}</h3>
                        <p className="price">${producto.price}</p>
                    </div>
                    <div>
                        <box-icon name="up-arrow" type="solid" onClick={() => suma(producto.id)}></box-icon>
                        <p className="cantidad">{producto.cantidad}</p>
                        <box-icon name="down-arrow" type="solid" onClick={() => resta(producto.id)}></box-icon>
                    </div>
                    <div className="remove__item" onClick={() => removeProducto(producto.id)}>
                    <box-icon name="trash"></box-icon>
                    </div>
                </div>
            ))
            }
            </>
        }
            


            </div>
            <div className="carrito__footer">
                <h3>Total: ${total}</h3>
                <button className="btn" onClick={() => pagarFetchJson(total)}>Pagar</button>
            </div>
        </div>

        
    </div>   
  )
}
