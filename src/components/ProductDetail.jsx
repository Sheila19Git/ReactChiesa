 import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext.jsx";
import './ProductDetail.css';


export default function ProductCard({ product }) {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.price}</p>

      <div className="product-card-buttons">
        <Link to={`/item/${product.id}`}>
          Ver detalle
        </Link>

        <button className= "btn-carrito" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
