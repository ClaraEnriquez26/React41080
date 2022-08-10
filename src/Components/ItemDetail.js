import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import './ItemDetail.css';
import { CartContext } from '../Context.js/CartContext';

const ItemDetail = ({ id, title, pictureUrl, description, price, stock }) => {
  const [cantidad, setCantidad] = useState(0)
  
  const { addItem, getProductCantidad } = useContext(CartContext)
  //const CantidadAdded = getProductCantidad(id)

  const handleOnAdd = (cantidad) => {
      console.log('agregue al carrito: ', cantidad)
      setCantidad(cantidad)
      addItem({id, title, price, cantidad})
  }

      return (
        <>
        <div className='ItemDetail__Container'>
          <p className='ItemDetail__Title'>Detalle producto</p>
             <div className='ItemDetail__imgDetailContainer'>
                 <img src={pictureUrl} alt='picture'/>
             </div>
             <div>
                <h4 className="ItemDetail__title">{title}</h4>
                <p className='ItemDetail__description'>{description}</p>
                <span className='ItemDetail__price'>{price}</span>
                <div>
                {cantidad > 0 ? <Link className='FinalizarLaCompra' to='/cart'>Finalizar Compra</Link> 
                : <ItemCount initial={0} stock={stock} onAdd={handleOnAdd}/>}
                </div>
             </div>
        </div>
        </>
      )
    }

export default ItemDetail;