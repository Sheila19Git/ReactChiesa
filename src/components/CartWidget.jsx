 import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
        alt="Carrito"
        className="cart-widget-icon"
      />
      {totalQuantity > 0 && (
        <span className="cart-widget-badge">{totalQuantity}</span>
      )}
    </Link>
  );
}
