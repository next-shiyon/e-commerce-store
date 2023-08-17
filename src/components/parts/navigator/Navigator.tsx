import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import {
  GoogleAuthProvider,
  browserSessionPersistence,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { useRecoilState } from "recoil";
import { userState } from "../../../global/userState";

export const Navigator = () => {
  const [user] = useRecoilState(userState);
  const navigate = useNavigate();

  const onClickLogin = () => {
    auth.setPersistence(browserSessionPersistence).then(() => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.table(result);
        })
        .catch(() => {
          navigate(import.meta.env.VITE_URL_ERROR_NOT_FOUND);
        });
    });
  };

  const onClickLogout = () => {
    auth.signOut();
  };

  return (
    <nav>
      <ul className=" bold flex flex-row items-center font-semibold max-sm:space-x-3 sm:space-x-3 lg:space-x-5">
        <li className="hover:text-slate-500">
          <Link to={import.meta.env.VITE_URL_PRODUCTS}>Products</Link>
        </li>
        {user && (
          <li className="hover:text-slate-500">
            <Link to={import.meta.env.VITE_URL_PRODUCTS_CART}>
              <AiOutlineShoppingCart />
            </Link>
          </li>
        )}
        {user && (
          <li className="hover:text-slate-500">
            <Link to={import.meta.env.VITE_URL_PRODUCTS_REGISTER}>
              <HiOutlinePencilAlt />
            </Link>
          </li>
        )}
        <li className="hover:text-slate-500">
          <button
            className="flex items-center"
            onClick={user === null ? onClickLogin : onClickLogout}
          >
            {user === null ? <AiOutlineLogin /> : <AiOutlineLogout />}
          </button>
        </li>
      </ul>
    </nav>
  );
};
