 import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext.jsx";
import "./ProductCard.css";

export default function ProductCard({ product, showDetail = true }) {
  const { addItem } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  const handleAddToCart = () => {
    addItem(product, cantidad);
    setAgregado(true); 
  };

  const handleCantidadChange = (e) => {
    const value = Number(e.target.value);
    if (value < 1) setCantidad(1);
    else if (value > product.stock) setCantidad(product.stock);
    else setCantidad(value);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>Precio: ${product.price}</p>
      <p>Stock disponible: {product.stock}</p>

      {showDetail && (
        <Link to={`/item/${product.id}`}>Ver detalle</Link>
      )}

      {showDetail && !agregado && (
        <div className="product-add">
          <input
            type="number"
            value={cantidad}
            onChange={handleCantidadChange}
            min="1"
            max={product.stock}
          />
          <button className="btn-carrito" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      )}

      {agregado && (
        <p className="added-message">Producto agregado!</p>
      )}
    </div>
  );
}

