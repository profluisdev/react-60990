import { useState } from "react";

export const HookUseState = () => {
  const [count, setCount] = useState(0);

  const handleSum = () => {
    setCount(count + 1);
  };

  const handleRes = () => {
    if (count == 0) {
      return setCount(0); // ;) ;)
    }

    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  console.log("Cambio de estado");

  return (
    <>
      <div>Count: {count} </div>
      <button onClick={handleSum}>Sumar</button>
      <button onClick={handleRes}>Restar</button>
      <button onClick={handleReset}>Resetear</button>
    </>
  );
};
