import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';

const Item = ({ id, title, pictureUrl, price, description, stock }) => {

    return (
      <>
        <li key={title}>
          <img alt={pictureUrl} className="Item__pictureUrl"></img>
            <div className="Item__div">
              <span className="Item__description">{description}</span>
              <span className="Item__price">${price}</span>
            </div>
         <button>
         <Link className="Item__btn" to={`/detail/${id}`}>Ver detalle</Link>
         </button>
        <ItemCount stock={5}/>
        </li>
      </>
     );
  };
  
export default Item;