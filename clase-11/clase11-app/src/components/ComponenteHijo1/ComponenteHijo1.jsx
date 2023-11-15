import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

export const ComponenteHijo1 = () => {
    const { products} = useContext(GlobalContext)
    return (
    <div>
        <h3>ComponenteHijo1</h3>
        { products.map(product => <p key={product.id}> {product.name} </p>) }
    </div>
  )
}
