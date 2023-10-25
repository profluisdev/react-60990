import { useEffect, useState } from "react";
import { Button } from "../Button/Button";

const products = [
  {
    id: 1,
    title: "Pantalón",
    price: 200,
  },
  {
    id: 2,
    title: "Camisa",
    price: 100,
  },
  {
    id: 3,
    title: "Corbata",
    price: 30,
  },
  {
    id: 4,
    title: "Zapato",
    price: 340,
  },
];

export const HookUseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount1 = () => {
    setCount(count + 1);
  };
  const handleCount2 = () => {
    setCount2(count2 + 1);
  };


  // Cada ves que se cambia cualquier estado del componente se ejecuta el useEffect
  // useEffect(() => {
  //   console.log(products);
  // });

  // Con array de dependencia vacío, el useEffect se ejecuta una sola ves, por más que luego haya cambios de estado
  // useEffect( () => {
  //   console.log(products);
  // }, [] );

  // Con array de dependencia incluyendo los elementos a los cuales va estar observando el array.
  //   useEffect(() => {
  //     console.log("Se modifico el contador");
  //   }, [count, count2]);

  useEffect(() => {
    console.log("Se modifico el contador 1");
  }, [count]);

  useEffect(() => {
    console.log("Se modifico el contador 2");
  }, [count2]);

  return (
    <>
      <div>HookUseEffect</div>
      <Button text={`Count ${count}`} functionClick={handleCount1}/>
      <Button text={`Count ${count2}`} variant="btn-success" functionClick={handleCount2}/>
    </>
  );
};
