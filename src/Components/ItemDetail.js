import ItemCount from './ItemCount'
import { ContainerProduct } from './OtherStylesComponents';

const ItemDetail = ({ title, pictureUrl, price, stock, description }) => {
      const addProducto = (cantidad) => {
        alert (`Agregaste ${cantidad} productos al carrito`);
      };

      return (
        <ContainerProduct>
        <div className='ItemDetail__Container'>
          <p className='ItemDetail__Title'>Detalle producto</p>
             <div className='ItemDetail__imgDetailContainer'>
                 <img src={pictureUrl}/>
             </div>
             <div>
                <h4 className="ItemDetail__title">{title}</h4>
                <p className='ItemDetail__description'>{description}</p>
                <span className='ItemDetail__price'>{price}</span>
                <span>{stock}</span>
                <ItemCount addProducto={addProducto} stock={5}/>
             </div>
        </div>
        </ContainerProduct>
      )
    }

export default ItemDetail;