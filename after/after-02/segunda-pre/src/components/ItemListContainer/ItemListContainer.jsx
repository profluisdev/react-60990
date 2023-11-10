import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  const onAdd = (items) => {
    alert(`Agregado ${items} al carrito`);
  };

  useEffect(() => {
    getProducts()
      .then((resp) => {
        setProducts(resp);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div> {greeting} </div>
      <ItemList products={products} />
    </>
  );
};
