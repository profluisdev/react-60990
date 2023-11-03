import { Button } from "../Button/Button"

export const Task = ( {id, text, status,changeStatus } ) => {
  return (
    <div className="d-flex col mt-2 p-2 align-items-center justify-content-between border border-2 ">
        <p style={status ? { textDecoration: "line-through" } : {}} > {text} </p>
        <div>
          <Button text="Realizado" variant="btn-success" functionClick={() => changeStatus(id) }/>
          <Button text="Eliminar" variant="btn-danger"  />
        </div>
    </div>
  )
}
