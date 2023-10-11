import ItemList from "./ItemList";
import { products } from "../../../productsMock";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const tarea = new Promise((resolve, reject) => {
    resolve(products);
    // reject("algo salio mal");
  });

  tarea.then((res) => setItems(res)).catch((error) => console.log(error));

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      // reject("algo salio mal");
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
