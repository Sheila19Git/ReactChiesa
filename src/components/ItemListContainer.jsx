 import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import ProductCard from "./ProductCard";
import "./Homebanner.css";


export default function ItemListContainer({ mensaje }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const productsRef = collection(db, "products");

    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((res) => {
        const items = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(items);
      })
      .catch(err => console.error("Error cargando productos:", err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;
  if (products.length === 0) return <p>No hay productos en esta categoría</p>;

 return (
  <div className="products-container">

    {!categoryId && (
      <div className="home-banner">
        <h1 className="home-title">Descubrí productos únicos para vos</h1>
      </div>
    )}

    <div className="products-grid">
      {products.map(prod => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </div>

  </div>
);
}