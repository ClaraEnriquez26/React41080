import Item from "./Item";

const ItemList = ({ producto }) => {
    return (
       <div>
        {
            producto.map(p =>
                <Item key={p.id} price={p.price} title={p.title} stock={p.stock} description={p.description} pictureUrl={p.pictureUrl}/>)
        }
        </div>
    );
}

export default ItemList;