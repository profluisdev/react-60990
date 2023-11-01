import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { CharacterList } from "../CharacterList/CharacterList";

export const CharacterListContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const getCharacters = async () => {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await resp.json();
    setCharacters(data.results);
    console.log(data.results);
  };

  const handleNexPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    getCharacters();
  }, [page]);
  return (
    <>
      <CharacterList characters={characters} />
      <Button text="Atrás" functionClick={handlePrevPage} />
      <strong> Página {page} </strong>
      <Button text="Siguiente" functionClick={handleNexPage} />
    </>
  );
};
