import React from "react";
import './Navbar.css';
import { FaLeaf } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='title'>
        <p>
          <FaLeaf/> VeganShop
        </p>
      </div>
      <div className='boton'>
        <p>
           Inicio
        </p>
      </div>
      <div className='boton'>
        <p>
           Contacto
        </p>
      </div>
      <div className='boton'>
        <p>
           Ubicación
        </p>
      </div>
      </nav>
  )
}

export default Navbar;