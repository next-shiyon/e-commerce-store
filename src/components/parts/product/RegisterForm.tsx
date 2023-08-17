import { useForm } from "react-hook-form";
import { ProductForm } from "../../../assets/types/ProductForm";

export const RegisterForm = () => {
  const { register, getValues, handleSubmit } = useForm<ProductForm>();

  const onClickSubmit = () => {
    console.log(getValues());
    // 1. Cloudinary에 사진 데이터 저장

    // 2. Cloudinary에서 저장된, 사진 URL을 받아온다.

    // 3. firebase 데이터베이스에 상품 데이터를 저장한다.
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
