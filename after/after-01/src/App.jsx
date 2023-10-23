// https://react-icons.github.io/react-icons

import { ContainerBox } from "./components/ContainerBox/ContainerBox";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
  return (
    <>
      <NavBar />
      <ContainerBox message={"Hola Bienvenidos a mi app"} />
    </>
  );
};
