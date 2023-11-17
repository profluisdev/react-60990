/* 
Técnica de rendering condicional N° 3
Operador ternario

*/
export const Tecnica3 = ( {status}) => {
  return (
    <>
        { status ? <h3>Acceso permitido</h3> : <h3>Acceso Denegado anda palla</h3> }
    </>
  )
}
