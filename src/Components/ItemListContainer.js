import ItemList from './ItemList'
import { useEffect, useState } from "react";
import { getProduct } from '../Utils/Fetch';

const ItemListContainer =  () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

useEffect(() => {
  getProduct().then(response => {
    setData(response)
  }).catch(error => {
    console.log(error)
  }).finally(() => {
    setLoading(false)
  });
},[])

  if (loading) {
  return (
    <div className="titleIndex">
      <ItemList producto={data} />
    </div>
  );
}}

export default ItemListContainer;