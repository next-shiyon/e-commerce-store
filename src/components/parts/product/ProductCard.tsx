import { Link } from "react-router-dom";
import { ProductDto } from "../../../assets/types/ProductDto";

type Props = {
  product: {
    pieces?: number;
    option?: string;
  } & Pick<ProductDto, "id" | "title" | "price" | "image">;
};

export const ProductCard = ({
  product: { id, title, price, image, pieces, option },
}: Props) => {
  return (
    <article className="m-5 flex w-auto justify-center overflow-hidden rounded-lg border border-gray-100 bg-white p-3 px-4 shadow-md">
      <Link to={`${import.meta.env.VITE_NAV_PRODUCTS_DETAIL}${id}`}>
        <img
          src={image}
          alt="상품 이미지"
          className="h-64 w-64 border-b-2 object-cover"
        />
        <div>
          <h3 className="mt-3 font-semibold">{title}</h3>
          {pieces && <span>Option : {option}</span>}
        </div>
        <div className="flex justify-between">
          <span className="text-xl font-bold">
            $ {Number(price).toLocaleString("en-US")}
          </span>
          {pieces && <span>Pieces : {pieces}</span>}
        </div>
      </Link>
    </article>
  );
};
