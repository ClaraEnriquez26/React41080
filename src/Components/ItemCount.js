
import { useState } from 'react';
import {
    ContainerProduct
} from './OtherStylesComponents'
import Cartwidget from './Cartwidget';

const ItemCount = ({
    title,
    price,
    pictureUrl,
    description,
    stock,
    onAdd
}, initial) => {
    const [cantidad, setCantidad] = useState(0);

    const increment = () => {
        if (cantidad < 5) setCantidad(cantidad + 1);
    }

    const decrement = () => {
        if (cantidad > 0) setCantidad(cantidad - 1);
    }

    return (
        <ContainerProduct>
            <div className="productContainer">
                <div className="productImage">
                    <img src={pictureUrl} alt={title}/>
                </div>
                <div className="productInfo">
                    <p>{title}</p>
                    <p>{description}</p>
                    <p>{cantidad} artículos</p>
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                    <button disabled={stock === 0 ? true : null} 
                    onClick={() => onAdd(cantidad)} className='cart_btn'>Agregar al <Cartwidget/></button>
                    <p>{price}</p>
                </div>
            </div>
        </ContainerProduct>
    );
}

export default ItemCount;