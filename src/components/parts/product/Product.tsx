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

    if (product !== undefined) {
      if (user !== null) {
        const productCartData = {
          uid: user.uid,
          pieces: 1,
          image: product.image,
          title: product.title,
          price: product.price,
          category: product.category,
          description: product.description,
          option: product.option,
        };

        registProductCart(productCartData);
      }
    }
  };

  const registProductCart = (productCart: ProductCartDto) => {
    const db = getDatabase();

    if (user === null) {
      window.alert("로그인이 필요한 기능입니다.");
      return;
    }

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
            <button onClick={onClickSubmit}>장바구니</button>
          </div>
        </div>
      )}
    </>
  );
};
