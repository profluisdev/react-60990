import { UserWidget } from "../UserWidget/UserWidget";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
      <div>
        <button className="btn btn-success mx-2">Home</button>
        <button className="btn btn-success mx-2">Productos</button>
        <button className="btn btn-success mx-2">Contactos</button>
      </div>
      <div className="d-flex">
        <UserWidget />
        <p className="mx-2">Luis</p>
      </div>
    </nav>
  );
};
