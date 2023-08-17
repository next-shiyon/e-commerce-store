import { useForm } from "react-hook-form";
import { ProductForm } from "../../../assets/types/ProductForm";
import { ChangeEvent, useState } from "react";
import { getDatabase, push, ref } from "firebase/database";
import { useRecoilState } from "recoil";
import { userState } from "../../../global/userState";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { uploadImage } from "../../../utils/image";

export const RegisterForm = () => {
  const { register, getValues, handleSubmit } = useForm<ProductForm>();
  const [submitProcessing, setSubmitProcessing] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [user] = useRecoilState(userState);
  const navigate = useNavigate();

  const registProduct = (imageUrl: string) => {
    const db = getDatabase();
    const uuid = uuidv4();
    user &&
      push(ref(db, "products/"), {
        id: uuid,
        image: imageUrl,
        title: getValues("title"),
        price: getValues("price"),
        category: getValues("category"),
        description: getValues("description"),
        option: getValues("option"),
        createDate: new Date().toLocaleDateString(),
      }).then(() => {
        navigate(`${import.meta.env.VITE_NAV_PRODUCTS_DETAIL}${uuid}`);
      });
  };

  const chooseImageFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
    }
  };

  const onClickSubmit = async () => {
    if (submitProcessing) return;

    setSubmitProcessing(true);
    const imageUrl = await uploadImage(getValues("image"));
    registProduct(imageUrl);
    setSubmitProcessing(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onClickSubmit)}
      className="flex flex-col items-center [&>div]:max-sm:w-full [&>div]:sm:w-2/3 [&>div]:lg:w-2/3"
    >
      {imageSrc && (
        <div className="mb-10 flex flex-col items-center border-2 border-blue-900">
          <img src={imageSrc} alt="등록 사진 미리보기" className="h-64 w-64" />
        </div>
      )}
      <div className="group relative z-0 mb-6">
        <label
          htmlFor="image"
          className=" top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          image
        </label>
        <input
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder=" "
          required
          type="file"
          id="image"
          {...register("image")}
          onChange={(e) => chooseImageFile(e)}
        />
      </div>

      <div className="group relative z-0 mb-6 w-full">
        <label
          htmlFor="title"
          className=" top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          title
        </label>
        <input
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder=" "
          required
          id="title"
          {...register("title")}
        />
      </div>

      <div className="group relative z-0 mb-6 w-full">
        <label
          htmlFor="price"
          className=" top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          price
        </label>
        <input
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder=" "
          required
          id="price"
          type="number"
          {...register("price")}
        />
      </div>

      <div className="group relative z-0 mb-6 w-full">
        <label
          htmlFor="category"
          className=" top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          category
        </label>
        <input
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder=" "
          required
          id="category"
          {...register("category")}
        />
      </div>

      <div className="group relative z-0 mb-6 w-full">
        <label
          htmlFor="description"
          className=" top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          description
        </label>
        <input
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder=" "
          required
          id="description"
          {...register("description")}
        />
      </div>

      <div className="group relative z-0 mb-6 w-full">
        <label
          htmlFor="option"
          className=" top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          option
        </label>
        <input
          className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder=" "
          required
          id="option"
          {...register("option")}
        />
      </div>

      <div className="group relative z-0 mb-6 w-full">
        <button
          className="w-full rounded-lg bg-blue-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
