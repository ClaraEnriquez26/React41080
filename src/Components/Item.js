import ItemCount from "./ItemCount";
import { ContainerProduct } from './OtherStylesComponents'

const Item = ({ price, title, stock, description, pictureUrl }) => {
    return (
        <ContainerProduct>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={pictureUrl} alt={title}/>
        <p>{price}</p>
        <ItemCount stock={stock}/>
        </ContainerProduct>
    )
  }

export default Item;