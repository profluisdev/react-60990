import { Hijo } from "../Hijo/Hijo"

export const Padre = () => {
    console.log("Cambio de estado en el componente padre")
  return (
    <>
    <h3>Componente Padre</h3>
    {/* ;) ;) */}
    <Hijo message="Hola Hijo" />
    </>
  )
}
