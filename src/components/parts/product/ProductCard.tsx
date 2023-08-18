import { Link } from "react-router-dom";
import { ProductDto } from "../../../assets/types/ProductDto";

type Props = {
  product: Pick<ProductDto, "id" | "title" | "price" | "image">;
};

export const ProductCard = ({
  product: { id, title, price, image },
}: Props) => {
  return (
    <article className="m-5 overflow-hidden rounded-lg border border-gray-100 bg-white p-3 px-4 shadow-md">
      <Link to={`${import.meta.env.VITE_NAV_PRODUCTS_DETAIL}${id}`}>
        <img
          src={image}
          alt="상품 이미지"
          className="h-64 w-64 border-b-2 object-cover"
        />

        <h3 className="mt-3 font-semibold">{title}</h3>
        <span className="text-xl font-bold">
          $ {Number(price).toLocaleString("en-US")}
        </span>
      </Link>
    </article>
  );
};
