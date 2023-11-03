import { useCount } from "../../hooks";
import { Button } from "../Button/Button";

export const CustomHook = () => {
  const { count, increment, decrement, reset } = useCount(10);

  return (
    <>
    <div>CustomHook</div>
      <Button text="+" variant={"btn-secondary"} functionClick={increment} />
      <strong> {count} </strong>
      <Button text="-" variant={"btn-secondary"} functionClick={decrement} />
      <Button text="Reset" variant={"btn-secondary"} functionClick={reset} />
    </>
  )
}
