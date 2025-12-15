 import "./NavBar.css";
import GenericButton from "./GenericButton";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className="nav-container">

      <h1 className="logo">Landing</h1>

      <div className="links">
        <GenericButton name="Home" color="white" to="/" />
        <GenericButton name="Deportes" color="white" to="/category/deportes" />
        <GenericButton name="Tecnología" color="white" to="/category/tecnologia" />
        <GenericButton name="Turismo" color="white" to="/category/turismo" />
      </div>

      <CartWidget />
    </nav>
  );
}
