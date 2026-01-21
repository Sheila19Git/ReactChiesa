 import { useContext } from "react";
import { CartContext } from "../Context/CartContext.jsx";
import './ProductDetail.css';

export default function ProductDetail({ product }) {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-detail-img" />
      <h2>{product.title}</h2>
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>

      <button className="btn-carrito" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}
