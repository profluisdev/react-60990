import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { ComponenteHijo1 } from "../ComponenteHijo1/ComponenteHijo1"

export const Componente1 = () => {
    const { message } = useContext( GlobalContext )
  return (
    <>
     <h2>Componente 1</h2>
     <p>Mensaje: { message } </p>
     <ComponenteHijo1 />
     <hr />
     </>
  )
}
