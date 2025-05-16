import { NavLink } from "react-router-dom";

const Navbar = () => (
    <nav>
        <NavLink className="text-black" to="/">Home</NavLink>{" "}
        <NavLink to="/about">About</NavLink>{" "}
        <NavLink to="/product">Product</NavLink>{" "}
        <NavLink to="/contact">Contact</NavLink>{" "}
        <NavLink to="/contact/form">Form</NavLink>{" "}
        <NavLink to="/contact/link-2">Link-2</NavLink>
    </nav>
);

export default Navbar;
