import "./ItemListContainer.css";
const ItemListContainer = ({ saludo }) => {
  return (
    <div>
      <h4 className="itemList">{saludo}</h4>
    </div>
  );
};

export default ItemListContainer;
