import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks";
import { CharacterDetail } from "../CharacterDetail/CharacterDetail";

// ;) ;) 
export const CharacterDetailContainer = () => {

  const { id } = useParams()
  const {data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${id}`)
  
  return (
    <div className="container d-flex justify-content-center mt-5">
            { isLoading ? <h2>Cargando detalles...</h2> : <CharacterDetail {...data} /> }
    </div>
  )
}
