import { useCount, useFetch } from "../../hooks";
import { Button } from "../Button/Button";
import { CharacterList } from "../CharacterList/CharacterList";

export const CharacterListContainer = () => {
  const { count, increment, decrement } = useCount(1);
  const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/?page=${count}`);

  return (
    <>
      {isLoading ? <h2>Cargando personajes...</h2> : <CharacterList characters={data.results} />}
      {/* Condicionamos el renderizado del componente Button */}
      {count > 1 && <Button text="Atrás" functionClick={decrement} />}
      <strong> Página {count} </strong>
      <Button text="Siguiente" functionClick={increment} />
    </>
  );
};
