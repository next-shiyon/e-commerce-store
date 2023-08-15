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
    path: "/",
    element: <App />,
    errorElement: <NotFoundError />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/products/cart",
        element: <ProductCart />,
      },
      {
        path: "/products/register",
        element: <ProductRegister />,
      },
    ],
  },
]);
