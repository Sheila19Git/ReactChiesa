import "./NavBar.css";
import GenericButton from "./GenericButton";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className="nav-container">

      <h1 className="logo">Landing</h1>

      <div className="links">
        <GenericButton name="Home" color="white" />
        <GenericButton name="Products" color="white" />
        <GenericButton name="Contact" color="white" />
      </div>
      <CartWidget />
    </nav>
  );
}
