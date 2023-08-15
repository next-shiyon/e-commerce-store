import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { NotFoundError } from "../pages/errors/404";
import { Index } from "../pages/Index";
import { Products } from "../pages/product/Products";
import { ProductDetail } from "../pages/product/ProductDetail";
import { ProductCart } from "../pages/product/ProductCart";
import { ProductRegister } from "../pages/product/ProductRegister";

export const router = createBrowserRouter([
  {
    path: import.meta.env.VITE_URL_INDEX,
    element: <App />,
    errorElement: <NotFoundError />,
    children: [
      {
        path: import.meta.env.VITE_URL_INDEX,
        element: <Index />,
      },
      {
        path: import.meta.env.VITE_URL_PRODUCTS,
        element: <Products />,
      },
      {
        path: import.meta.env.VITE_URL_PRODUCTS_DETAIL,
        element: <ProductDetail />,
      },
      {
        path: import.meta.env.VITE_URL_PRODUCTS_CART,
        element: <ProductCart />,
      },
      {
        path: import.meta.env.VITE_URL_PRODUCTS_REGISTER,
        element: <ProductRegister />,
      },
    ],
  },
]);
