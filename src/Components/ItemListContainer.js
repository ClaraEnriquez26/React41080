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
  
  return (
    <div className="titleIndex">
      <ItemList producto={datos} />
    </div>
  )
}

export default ItemListContainer;