import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Cartwidget = () => {
  const { getQuantity } = useContext(CartContext)
  const quantity = getQuantity()

    return (
        <>
         <div> 
         <Link to='/cart'>
         <Cart color='white'/>
         {quantity}
         </Link>
         </div> 
         </>
    )
  }

export default Cartwidget;