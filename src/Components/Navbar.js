import React from "react";
import './Navbar.css';
import { FaLeaf } from "react-icons/fa";
import Cartwidget from './Cartwidget';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='title'>
        <p>
          <FaLeaf/> VeganShop
        </p>
      </div>
      <div className='boton'>
        <ul>
           <p>Inicio</p>
           <p>Contacto</p>
           <p>Ubicación</p>
        </ul>
      </div>
      <Cartwidget/>
      </nav>
  )
}

export default Navbar;