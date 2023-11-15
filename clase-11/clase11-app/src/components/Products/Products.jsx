import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { Item } from "../Item/Item";

export const Products = () => {
    const { products } = useContext(GlobalContext);
  return (
    <div>
        { products.map(product => <Item key={product.id} {...product} />) }
    </div>
  )
}
