import { useEffect, useState } from "react";
import { ProductCartDto } from "../../../assets/types/ProductCartDto";
import { useRecoilState } from "recoil";
import { userState } from "../../../global/userState";
import { getDatabase, onValue, ref } from "firebase/database";
import { ProductCard } from "./ProductCard";

export const ProductCartList = () => {
  const [productList, setProductList] = useState<ProductCartDto[]>();
  const [user] = useRecoilState(userState);

  useEffect(() => {
    if (user !== null) {
      const db = getDatabase();
      const productRef = ref(db, "cart/" + user.uid);
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
    }
  }, [user]);

  const getTotalPrice = () => {
    if (productList !== undefined) {
      let total = 0;

      productList.forEach((product) => {
        total += Number(product.price);
      });

      return total.toLocaleString("en-US");
    }
  };

  return (
    <>
      {productList &&
        productList.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}

      <div className="p-3 text-center text-2xl font-bold">
        {productList?.length !== 0 ? (
          <span className="my-2 block border-t-2 py-2">
            Total Price : $ {getTotalPrice()}
          </span>
        ) : (
          <span>카트에 담긴 상품이 없습니다.</span>
        )}
      </div>
    </>
  );
};
