import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {
      const addProducto = (cantidad) => {
        alert (`Agregaste ${cantidad} producto al carrito`);
      };

      return (
        <div className='DetailContainer'>
             <div className='imgDetailContainer'>
                 <img src={producto.pictureUrl}/>
             </div>
             <div>
                <span>{producto.title}</span>
                <p>{producto.description}</p>
                <span>{producto.price}</span>
                <span>{producto.stock}</span>
                <ItemCount addProducto={addProducto} stock={5}/>
             </div>
        </div>
      )
    }

export default ItemDetail;