 import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";
import ProductCard from "./ProductCard.jsx";
import './Cart.css';
import { Link } from "react-router-dom";



export default function Cart() {
  const { cart, clearCart, removeItem, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 className="cart-empty">El carrito está vacío 🛒</h2>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Tu carrito</h2>

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <ProductCard product={item} showDetail={false} />
          <button 
            className="cart-item-delete"
            onClick={() => removeItem(item.id)}
          >
            Eliminar
          </button>
        </div>
      ))}

      <h3 className="cart-total">Total a pagar: ${totalPrice}</h3>

      <button className="cart-clear" onClick={clearCart}>
        Vaciar carrito
      </button>

      <Link to="/checkout" className="cart-checkout">
         Finalizar compra
      </Link>
    </div>
  );
}
