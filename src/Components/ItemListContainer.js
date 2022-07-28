import ItemList from './ItemList'
import { useEffect, useState } from "react";
import fetchProducts from '../Utils/Fetch';

const ItemListContainer = ({ props, addToCart }) => {
  const [datos, setDatos] = useState([])

  useEffect(() => {
    fetchProducts()
      .then(result => {
        setDatos(result)
      })
      .catch(err => console.log(err))
  }, []);

 // const onAdd = (id, qty) => {
   //  const product = datos.find(x => id === x.id)
    // console.info("Agregaste: " + product.title + " x " + qty + " items al carrito");
   //  addToCart({product, qty})
  // }
  
  return (
    <div className="titleIndex">
      <ItemList producto={datos} />
    </div>
  )
}

export default ItemListContainer;