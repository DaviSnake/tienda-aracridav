import React, {useContext} from 'react'
import ARACRIDAV from '../../images/Logo-Aracridav-Completo.png'
import { Link } from "react-router-dom";
import { DataContext } from '../../Context/Dataprovider';

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  const toogleMenu = () => {
    setMenu(!menu);
  }

  return (
    <div>
        <header>            
            <Link to="/">
                <div className="logo">
                    <img src={ARACRIDAV} alt="logo" width="150"/>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/productos">Productos</Link>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item_total">{carrito.length}</span>
            </div>
        </header>
    </div>
  )
}
