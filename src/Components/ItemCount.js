
import { useState } from 'react';
import {
    ContainerProduct
} from './OtherStylesComponents'

const ItemCount = ({
    id,
    title,
    price,
    pictureUrl,
    description,
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
                    <button onClick={() => onAdd(id, Number(cantidad))}>Agregar al carrito</button>
                    <p>{price}</p>
                </div>
            </div>
        </ContainerProduct>
    );
}

export default ItemCount;