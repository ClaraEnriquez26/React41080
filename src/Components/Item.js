import ItemCount from "./ItemCount";
import { ContainerProduct } from './OtherStylesComponents'

const Item = ({ producto }) => {
  const handleClick = (description) => {
    console.log(description)
  }

    return producto.map ((producto) => (
      <>
        <li key={producto.title}>
          <img alt={producto.pictureUrl} className="Item__pictureUrl" src={producto.pictureUrl}></img>
            <div className="Item__div">
              <span className="Item__description">{producto.description}</span>
              <span className="Item__price">{producto.price}</span>
            </div>
          <p className="Item__stock">{producto.stock}</p>
         <button onClick={handleClick}>Detalle del producto</button>
        <ItemCount stock={5}/>
        </li>
      </>
     ));
  };
  
export default Item;