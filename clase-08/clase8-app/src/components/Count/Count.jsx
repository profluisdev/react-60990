import { useState } from "react";
import { Button } from "../Button/Button";
import { useCount } from "../../hooks";

// ;) ;) 
export const Count = ({initial = 0,  max }) => {
  const { count, increment, decrement, reset } = useCount(0);

  return (
    <>
      <Button text="+" variant={"btn-secondary"} functionClick={increment} />
      <strong> {count} </strong>
      <Button text="-" variant={"btn-secondary"} functionClick={decrement} />
      <Button text="Reset" variant={"btn-secondary"} functionClick={reset} />
    </>
  )
}
