import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around mt-2">
      <h4>Tienda App</h4>
      <div>
        <button className="btn btn-outline-dark mx-2">Home</button>
        <button className="btn btn-outline-dark mx-2">Categorías</button>
      </div>
      <CartWidget />
    </nav>
  );
};
