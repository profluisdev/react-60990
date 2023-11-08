import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const Character = ({ name, image, species, id }) => {
  return (
    <div className="border border-3 p-3 d-flex flex-column m-2">
      <p>Nombre: {name}</p>
      <img src={image} alt="foto" />
      <p>Especie: {species} </p>
      <Link to={`/character/${id}`}>
        <Button text="Detalle" variant="btn-dark" />
      </Link>
    </div>
  );
};
