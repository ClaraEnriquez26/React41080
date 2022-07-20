import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
  
  return (
    <div className="titleIndex">
      <ItemCount/>
      <h4>{props.greetings}</h4>
    </div>
  )

}

export default ItemListContainer;