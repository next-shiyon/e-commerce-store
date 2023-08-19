import { Index } from "../pages/Index";
import { Products } from "../pages/product/Products";
import { ProductDetail } from "../pages/product/ProductDetail";
import { ProductCart } from "../pages/product/ProductCart";
import { ProductRegister } from "../pages/product/ProductRegister";

export const loginedRoute = [
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
];

export const logoutedRoute = [
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
];
