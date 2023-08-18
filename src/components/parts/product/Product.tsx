import { useParams } from "react-router-dom";
import { ProductDto } from "../../../assets/types/ProductDto";
import { ChangeEvent, useEffect, useState } from "react";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { ProductOption } from "./ProductOption";
import { useRecoilState } from "recoil";
import { userState } from "../../../global/userState";
import { ProductCartDto } from "../../../assets/types/ProductCartDto";

export const Product = () => {
  const [product, setProduct] = useState<ProductDto>();
  const [productOption, setProductOption] = useState("");
  const [user] = useRecoilState(userState);
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
    setProductOption(e.target.value);
  };

  const onClickSubmit = () => {
    if (productOption.length === 0) {
      window.alert("상품 옵션을 선택해주세요.");
      return;
    }

    if (user === null) {
      window.alert("로그인이 필요한 기능입니다.");
      return;
    }

    if (product !== undefined) {
      const productCartData = {
        uid: user.uid,
        pieces: 1,
        image: product.image,
        title: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
        option: productOption,
      };
      registProductCart(productCartData);
    }
  };

  const registProductCart = (productCart: ProductCartDto) => {
    const db = getDatabase();

    user &&
      set(ref(db, "cart/" + productCart.uid), {
        uid: productCart.uid,
        pieces: productCart.pieces,
        image: productCart.image,
        title: productCart.title,
        price: productCart.price,
        category: productCart.category,
        description: productCart.description,
        option: productCart.option,
        createDate: new Date().toLocaleDateString(),
      }).then(() => {
        window.alert("장바구니 담기에 성공하였습니다.");
      });
  };

  return (
    <>
      {product && (
        <div className="flex flex-col p-5 md:flex-row">
          <div className="p-5 sm:w-screen md:w-1/2">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="p-5 sm:w-screen md:w-1/2">
            <div className="border-t-2 py-4">
              <span className="mb-3 block text-sm font-light">
                카테고리 : {product.category}
              </span>
              <div className="pb-6">
                <h1 className="py-2 text-2xl font-bold">{product.title}</h1>
                <span className="block">{product.description}</span>
              </div>
              <ProductOption
                options={product.option}
                onChangeToggle={handleChangeToggle}
              />
              <span className="mt-5  block text-3xl font-bold">
                $ {Number(product.price).toLocaleString("en-US")}
              </span>
            </div>
            <button
              className="my-2 w-full rounded-lg bg-blue-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={onClickSubmit}
            >
              ADD TO BAG
            </button>
          </div>
        </div>
      )}
    </>
  );
};
