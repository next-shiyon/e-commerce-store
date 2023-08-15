import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineLogin } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";

export const Navigator = () => {
  return (
    <nav>
      <ul className=" bold flex flex-row items-center space-x-5 font-bold">
        <li className="hover:text-slate-500">
          <Link to={import.meta.env.VITE_URL_PRODUCTS}>Products</Link>
        </li>
        <li className="hover:text-slate-500">
          <Link to={import.meta.env.VITE_URL_PRODUCTS_CART}>
            <AiOutlineShoppingCart />
          </Link>
        </li>
        <li className="hover:text-slate-500">
          <Link to={import.meta.env.VITE_URL_PRODUCTS_REGISTER}>
            <HiOutlinePencilAlt />
          </Link>
        </li>
        <li className="hover:text-slate-500">
          <button className="flex items-center">
            <AiOutlineLogin />
          </button>
        </li>
      </ul>
    </nav>
  );
};
