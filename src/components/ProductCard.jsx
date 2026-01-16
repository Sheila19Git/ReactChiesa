import { Link } from "react-router-dom";

export default function ProductCard({ product, showDetail = true }) {
  return (
    <div className="product-card">
      <h4>{product.title}</h4>
      <p>Precio: ${product.price}</p>

      {showDetail && (
        <Link to={`/item/${product.id}`}>
          Ver detalle
        </Link>
      )}
    </div>
  );
}

