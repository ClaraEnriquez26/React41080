import { createContext, useState } from "react";

export const Context = createContext
export const ContextProvider = ( {children} ) => {
    const [cart, setCart] = useState([])
 
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        cantidad: productToAdd.cantidad
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })
            setCart(cartUpdated)
        }
    }

    const getCantidad = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.cantidad
        })
        return accu
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
    }

    const clearCart = () => {
        setCart([])
    }

    const getProductCantidad = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.cantidad
    }

return (
<Context.Provider value={[ cart, addItem, isInCart, removeItem, clearCart, getCantidad, getProductCantidad ]}>
</Context.Provider>
 )
}

export default createContext