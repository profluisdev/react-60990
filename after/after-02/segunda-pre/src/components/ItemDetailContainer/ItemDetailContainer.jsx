import { useEffect } from "react";
import { useState } from "react"
import { getProduct } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect( () => { 
        getProduct(id)
            .then( resp => setProduct(resp))
            .catch(err => console.log(err));
     }, [product])
  return (
    <div>
        { product && <ItemDetail {...product} /> }
    </div>
  )
}
