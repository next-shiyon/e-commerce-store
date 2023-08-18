import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { getDatabase, onValue, ref } from "firebase/database";
import { ProductDto } from "../../../assets/types/ProductDto";

export const ProductList = () => {
  const [productList, setProductList] = useState<ProductDto[]>();

  useEffect(() => {
    const db = getDatabase();
    const productRef = ref(db, "products/");
    onValue(productRef, (snapshop) => {
      const data = snapshop.val();

      const newDataArray = [];

      for (const key in data) {
        const newData = {
          ...data[key],
        };
        newDataArray.push(newData);
      }

      setProductList(newDataArray);
    });
  }, []);

  return (
    <>
      <div className="grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {productList &&
          productList.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </>
  );
};
