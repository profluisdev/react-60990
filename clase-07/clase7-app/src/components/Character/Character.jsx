import { Button } from "../Button/Button"

export const Character = ({name, image, species}) => {
  return (
    <div className="border border-3 p-3 d-flex flex-column m-2"> 
        <p>Nombre: {name}</p>
        <img src={image} alt="foto" />
        <p>Especie: {species} </p>
        <Button text="Detalle" variant="btn-dark"/>
    </div>
  )
}
