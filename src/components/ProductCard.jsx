 import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";
import "./ProductCard.css";

export default function ProductCard({ product, showDetail = true }) {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>Precio: ${product.price}</p>

      {showDetail && (
        <Link to={`/item/${product.id}`}>
          Ver detalle
        </Link>
      )}

      <button className="btn-carrito" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}
