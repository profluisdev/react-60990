import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="container mt-2 d-flex ">
        <NavLink to="/">
            <button className="btn btn-dark mx-2">Home</button>
        </NavLink>
        <NavLink to="/cart">
            <button className="btn btn-dark mx-2">Carrito</button>
        </NavLink>
    </nav>
  )
}
