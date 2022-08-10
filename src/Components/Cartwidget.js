import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context.js/CartContext';

const Cartwidget = ()  => {
  const { getCantidad } = useContext(CartContext)
    const cantidad = getCantidad()

    return (
        <>
         <div> 
         <Link to='/cart'>
         <Cart color='white'/>
         {cantidad}
         </Link>
         </div> 
         </>
    )
  }

export default Cartwidget;