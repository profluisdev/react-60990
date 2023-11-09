import { getProducts } from "../../asyncMock"
import { ItemCount } from "../ItemCount/ItemCount"
import {useState, useEffect} from "react"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    

    const onAdd = (items) => { 
        alert(`Agregado ${items} al carrito`)
     }

     useEffect(() => { 
          getProducts()
            .then( resp => setProducts(resp))
            .catch( error => console.log(error));
      }, [])
     
  return (
    <>
    <div> {greeting} </div>
    <ItemList products={products} />
    <ItemCount stock={4} onAdd={onAdd} />
    </>
  )
}
