import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Context.js/cartContext';

const Cartwidget = ()  => {
  const { getCantidad } = useContext(Context)
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