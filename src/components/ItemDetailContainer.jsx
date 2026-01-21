 import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import ProductDetail from "./ProductDetail";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", itemId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      } else {
        setProduct(null); 
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div>
      {product ? <ProductDetail product={product} /> : <p>Producto no encontrado</p>}
    </div>
  );
}
