import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

export const Cart = () => {
    const { cart } = useContext(GlobalContext);
  return (
    <div>
        <h2>Carrito</h2>
        { cart.map(c => <p key={c.id}>Producto: {c.name} </p>) }
    </div>
  )
}
