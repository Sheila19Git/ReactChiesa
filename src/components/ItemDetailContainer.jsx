 import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../mocks/asyncMock";
import ProductDetail from "./ProductDetail";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId).then(res => setProduct(res));
  }, [itemId]);

  return (
    <div>
      {product && <ProductDetail product={product} />}
    </div>
  );
}
