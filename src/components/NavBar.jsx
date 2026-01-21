 import "./NavBar.css";
import GenericButton from "./GenericButton";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <nav className="nav-container">
      <img src={logo} alt="Logo" className="logo-img" />

      <div className="links">
        <GenericButton name="Home" color="white" to="/" />
        <GenericButton name="Perfumeria" color="white" to="/category/perfumeria" />
        <GenericButton name="Belleza" color="white" to="/category/belleza" />
        <GenericButton name="Accesorios" color="white" to="/category/accesorios" />
      </div>

      <CartWidget />
    </nav>
  );
}
