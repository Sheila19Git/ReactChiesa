 export default function ProductDetail({ product }) {
  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <p>Categoría: {product.category}</p>
      <p>Precio: ${product.price}</p>

      <button>Agregar al carrito</button>
    </div>
  );
}
