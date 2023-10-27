import { useState } from "react";

export const Promises = () => {
  const [response, setResponse] = useState("");

  // Forma clásica de resolver una promesa

  const task = new Promise((resolver, reject) => {
    const condition = true;

    if (condition) {
      resolver("Tarea cumplida");
    } else {
      reject("Tarea rechazada");
    }
  });

//   task
//     .then((resp) => setResponse(resp)) // Si la promesa se cumple
//     .catch((error) => setResponse(error)); // En caso que la promesa no se cumpla

// Forma moderna de obtener la información de las promesas

const resolvePromise = async () => {
    try {
        const resp = await task;
        console.log(resp)
        setResponse(resp);

    } catch (error) {
        setResponse(error + " Entro en el catch")    
    }
}

resolvePromise();

  return (
    <>
      <h1>Promises</h1>
      <h4>Respuesta de nuestra promesa: {response} </h4>
    </>
  );
};
