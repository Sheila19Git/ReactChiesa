 import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";

export default function ProductDetail({ product }) {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.price}</p>

      <button onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}
