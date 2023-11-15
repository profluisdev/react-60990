import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

export const Componente2 = () => {
    const { handleMessage, message } = useContext( GlobalContext )
    
  return (
    <>
      <h2>Componente 2</h2>
      <label htmlFor="">Escribe el mensaje</label>
      <input type="text" onChange={handleMessage} />
      <p>Mensaje en componente2: {message} </p>
      <hr />
    </>
  )
}
