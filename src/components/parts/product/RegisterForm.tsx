import { useForm } from "react-hook-form";
import { ProductForm } from "../../../assets/types/ProductForm";
import axios from "axios";
import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { ProductDto } from "../../../assets/types/ProductDto";
import { useRecoilState } from "recoil";
import { userState } from "../../../global/userState";

export const RegisterForm = () => {
  const { register, getValues, handleSubmit } = useForm<ProductForm>();
  const [user] = useRecoilState(userState);
  const [product, setProduct] = useState<ProductDto | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  const uploadImage = async () => {
    const imageFile = getValues("image");

    const formData = new FormData();
    formData.append("file", imageFile[0]);
    formData.append("upload_preset", "yqpnf8zd");
    formData.append("cloud_name", "ddwqzra81");

    await axios
      .post("https://api.cloudinary.com/v1_1/ddwqzra81/image/upload", formData)
      .then((response) => {
        // 2. Cloudinary에서 저장된, 사진 URL을 받아온다.
        setImageUrl(response.data.secure_url);
      });
  };

  const registProduct = () => {
    const db = getDatabase();
    user &&
      setProduct({
        uid: user.uid,
        image: imageUrl,
        title: getValues("title"),
        price: getValues("price"),
        category: getValues("category"),
        description: getValues("description"),
        option: getValues("option"),
        createDate: new Date().toLocaleDateString(),
      });
    console.log(product);
    set(ref(db, "products/"), product);
  };

  const onClickSubmit = async () => {
    // 1. Cloudinary에 사진 데이터 저장
    uploadImage();

    // 2. firebase 데이터베이스에 상품 데이터를 저장
    registProduct();
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      <input type="file" {...register("image")} />
      <input {...register("title")} />
      <input type="number" {...register("price")} />
      <input {...register("category")} />
      <input {...register("description")} />
      <input {...register("option")} />
      <input type="submit" />
    </form>
  );
};
