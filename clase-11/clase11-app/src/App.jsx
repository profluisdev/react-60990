import { Cart, Componente1, Componente2, Products } from "./components"
import { GlobalContextProvider } from "./context/GlobalContext"

export const App = () => {
  
  return (
    <>
    <GlobalContextProvider>
      <Componente1 />  
      <Componente2 />
      <Products />
      <Cart />
    </GlobalContextProvider>
    </>
  )
}
