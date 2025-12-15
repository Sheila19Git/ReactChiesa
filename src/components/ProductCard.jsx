 import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h4>{product.title}</h4>
      <p>Categoría: {product.category}</p>

      <Link to={`/item/${product.id}`}>
        Ver detalle
      </Link>
    </div>
  );
}
