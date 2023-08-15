import { Link } from "react-router-dom";

export const Navigator = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={import.meta.env.VITE_URL_PRODUCTS}>Products</Link>
        </li>
        <li>
          <Link to={import.meta.env.VITE_URL_PRODUCTS_CART}>Carts</Link>
        </li>
        <li>
          <Link to={import.meta.env.VITE_URL_PRODUCTS_REGISTER}>Register</Link>
        </li>
        <li>
          <button>LOGIN</button>
        </li>
      </ul>
    </nav>
  );
};
