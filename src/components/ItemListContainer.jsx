 import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../mocks/asyncMock"; 
import ProductCard from "./ProductCard";

export default function ItemListContainer({ mensaje }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => {
      if (categoryId) {
        setProducts(data.filter(p => p.category === categoryId));
      } else {
        setProducts(data);
      }
    });
  }, [categoryId]);

  return (
    <div className="products-container">
      <h2>{mensaje}</h2>

      {categoryId && <h3>Categoría: {categoryId}</h3>}

      {products.map(prod => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>
  );
}

