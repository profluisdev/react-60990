
/* 
Técnica de rendering condicional N° 2
En linea con fragment:
La usamos cuando deseamos renderizar un elemento condicional en función a una expresión booleana

*/

export const Tecnica2 = ({ status }) => {
  return (
    <>
        { status && <h2>Usuario autorizado</h2> }
        {/* Usamos el operador not para negar, si el resultado es false lo transforma en true*/}
        { !status && <h2> Usuario no autorizado anda palla</h2> }
      
    </>
  )
}
