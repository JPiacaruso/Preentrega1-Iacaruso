import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  // console.log(items[0]?.title);
  // console.log(items[1]?.title);

  return (
    <section style={{ display: "flex", justifyContent: "space-evenly" }}>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default ItemList;
