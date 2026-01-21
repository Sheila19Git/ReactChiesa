 import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import "./Checkout.css";


export default function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Completá nombre y email");
      return;
    }

    alert("Compra confirmada ");
    clearCart();
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          Confirmar compra (${totalPrice})
        </button>
      </form>
    </div>
  );
}
