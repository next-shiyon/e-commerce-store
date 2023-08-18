import { ProductCartList } from "../../components/parts/product/ProductCartList";

export const ProductCart = () => {
  return (
    <div>
      <ProductCartList />
      <button className="my-2 w-full rounded-lg bg-blue-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Order
      </button>
    </div>
  );
};
