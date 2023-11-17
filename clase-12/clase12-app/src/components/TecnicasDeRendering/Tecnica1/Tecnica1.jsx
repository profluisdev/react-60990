/* 
Técnica de rendering condicional N° 1
Return Temprano: 
Esta técnica la usamos en JS y evitamos colocar el else

*/

// Forma tradicional

function esFinde(dia) {
  if (dia === "sábado" || dia === "domingo") {
    return true;
  } else {
    return false;
  }
}

// Con la técnica del return temprano

function esFindeSemana(dia) {
  if (dia === "sábado" || dia === "domingo") {
    return true;
  }

  // En caso que no se cumpla la condición if se ejecuta el código siguiente
  // en este caso el return ya hace salir de la función
  return false;
}

export const Tecnica1 = ({ name }) => {
  if (name != "Juan") {
    return <h2> Quien sos vos? Anda palla !! </h2>;
  }

  return <h2> Hola {name} </h2>;
};
