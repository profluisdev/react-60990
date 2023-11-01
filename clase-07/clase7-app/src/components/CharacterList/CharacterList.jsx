import { Character } from "../Character/Character"


export const CharacterList = ({characters}) => {
  return (
    <div className="container d-flex flex-sm-wrap">
        { characters.map( character => <Character key={character.id} {...character} /> )}
    </div>
  )
}
