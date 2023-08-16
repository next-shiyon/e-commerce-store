import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import {
  GoogleAuthProvider,
  User,
  browserSessionPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase";
import { useEffect, useState } from "react";

export const Navigator = () => {
  const [user, setUser] = useState<User | null>(null);

  const onClickLogin = () => {
    auth.setPersistence(browserSessionPersistence).then(() => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.table(result);
        })
        .catch((error) => {
          console.table(error);
        });
    });
  };

  const onClickLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      currentUser && setUser(currentUser);
    });
  }, []);

  return (
    <nav>
      <ul className=" bold flex flex-row items-center font-semibold max-sm:space-x-3 sm:space-x-3  lg:space-x-5">
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
          {user === null ? (
            <button className="flex items-center" onClick={onClickLogin}>
              <AiOutlineLogin />
            </button>
          ) : (
            <button className="flex items-center" onClick={onClickLogout}>
              <AiOutlineLogout />
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};
