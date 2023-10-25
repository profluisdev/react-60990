
export const LayOut = ({children}) => {
  return (
    <div>
        <h2>Componente LayOut</h2>
        <div className="container mt-5 d-flex flex-column p-4">
            <h3>Tarjetas para mostrar</h3>
            { children }
        </div>
    </div>
  )
}
