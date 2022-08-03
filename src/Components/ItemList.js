import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <ul className="itemList">
        <Item products={products} />
        </ul>
    );
}

export default ItemList;