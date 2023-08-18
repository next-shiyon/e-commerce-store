import { useParams } from "react-router-dom";
import { ProductDto } from "../../../assets/types/ProductDto";
import { ChangeEvent, useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { ProductOption } from "./ProductOption";

export const Product = () => {
  const [product, setProduct] = useState<ProductDto>();
  const { productId } = useParams();

  useEffect(() => {
    const db = getDatabase();
    const productRef = ref(db, "products/" + productId);
    onValue(productRef, (snapshop) => {
      const data = snapshop.val();
      setProduct(data);
    });
  }, [productId]);

  const handleChangeToggle = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      {product && (
        <div>
          <img src={product.image} alt={product.title} />
          <div>
            <span>{product.category}</span>
            <h1>{product.title}</h1>
            <span>{product.description}</span>
            <span>{product.price}</span>
            <ProductOption
              options={product.option}
              onChangeToggle={handleChangeToggle}
            />
            <button>장바구니</button>
          </div>
        </div>
      )}
    </>
  );
};
