import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineLogin } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase";

export const Navigator = () => {
  const onClickLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        console.table(error);
      });
  };

  return (
    <nav>
      <ul className=" bold flex flex-row items-center font-semibold max-sm:space-x-3 sm:space-x-3  lg:space-x-5">
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
          <button className="flex items-center" onClick={onClickLogin}>
            <AiOutlineLogin />
          </button>
        </li>
      </ul>
    </nav>
  );
};
