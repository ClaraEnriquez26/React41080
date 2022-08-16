import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'


const DetailCart = ({ id, quantity, title, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article>
            <header>
                <h2 className="TitleDetail">
                    {title}
                </h2>
            </header>
            <section className='QuantityContainer'>
                <p className="QuantityDetail">
                    Cantidad: {quantity}
                </p>
                <p className='PriceDetail'>
                    Precio: ${price}
                </p>
            </section>           
            <footer>
                 <p className="SubtotalDetail">
                     Subtotal: ${price * quantity}
                 </p>
                 <button className='ButtonDetailCart' onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default DetailCart