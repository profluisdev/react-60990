import { useEffect, useState } from "react"
import { getProducts } from "../../productMock";
import { Card } from "../Card/Card";


export const Maps = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => { 
            getProducts()
                .then( resp => {{
                    console.log(resp)
                    setProducts( resp ) // Si la promesa se resuelve guardamos los productos en nuestro state products
                    setIsLoading(!isLoading)
                }} )
                .catch( error => console.log(error))
     }, [])

  return (
    <div>
        <h1>Mostrar productos con un map</h1>
        { 
        isLoading ? <h3>Cargando productos ...</h3> :
        products.map( product => <Card key={product.id}  name={product.name} description={product.description} stock={product.stock} /> 
        )
        
        }
    </div>
  )
}
