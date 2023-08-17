import banner from "../assets/imgs/banner.jpg";
import { ProductList } from "../components/parts/product/ProductList";

export const Index = () => {
  return (
    <div>
      <div
        className=" h-28 w-full bg-cover bg-center object-none md:h-32"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-60">
          <div className="text-center">
            <h1 className="text-xl font-semibold uppercase text-white md:text-2xl">
              Browse what You want.
            </h1>
            <span className="text-white">
              Frontend delveoper's e-commerce-store
            </span>
          </div>
        </div>
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
};
