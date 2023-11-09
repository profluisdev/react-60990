import { useEffect } from "react";
import { useState } from "react"
import { getProduct } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    useEffect( () => { 
        getProduct("6")
            .then( resp => setProduct(resp))
            .catch(err => console.log(err));
     }, [product])
  return (
    <div>
        { product && <ItemDetail {...product} /> }
    </div>
  )
}
