import { useEffect, useState } from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import { Button } from "../../Button/Button";
import { useFetch } from "../../../hooks/useFetch";

export const CharacterListContainer = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
  
  const handleNexPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <>
      {isLoading ? <h2>Cargando ...</h2> : <CharacterList characters={data.results} />}
      <Button text="Atrás" functionClick={handlePrevPage} />
      <strong> Página {page} </strong>
      <Button text="Siguiente" functionClick={handleNexPage} />
    </>
  );
};
