import { useState } from "react";
import { Button } from "../Button/Button";

// ;) ;) 
export const Count = ({initial = 0,  max }) => {
  const [count, setCount] = useState(initial);

  const increment = () => { 
    if(count === max) {
      return setCount(count)
    }
    setCount(count +1);
   }

  const decrement = () => { 
    if(count === 0) {
      return setCount(0);
    }
      setCount(count - 1);
   }

  return (
    <>
      <Button text="+" variant={"btn-secondary"} functionClick={increment} />
      <strong> {count} </strong>
      <Button text="-" variant={"btn-secondary"} functionClick={decrement} />
    </>
  )
}
