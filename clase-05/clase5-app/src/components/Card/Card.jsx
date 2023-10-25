import { Button } from "../Button/Button"

export const Card = ({title, message}) => {
  return (
    <div className="card w-25 p-1">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{message}</p>
      <Button text="Detalles" variantCss={"blueviolet"} />
    </div>
  </div>
  )
}
