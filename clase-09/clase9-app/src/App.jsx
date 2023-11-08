import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cart, CharacterDetailContainer, CharacterListContainer, NavBar } from "./components"


export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <CharacterListContainer/> } />
        {/* ;) ;) */}
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/character/:id" element={ <CharacterDetailContainer/> } />
      </Routes>
    </BrowserRouter>
  )
}
