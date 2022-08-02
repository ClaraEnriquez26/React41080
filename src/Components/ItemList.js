import Item from "./Item";

const ItemList = ({ producto }) => {
    return (
        <ul className="itemList">
        <Item products={producto} />
        </ul>
    );
}

export default ItemList;