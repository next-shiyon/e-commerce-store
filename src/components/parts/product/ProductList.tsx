import { ProductCard } from "./ProductCard";

const testData = [
  {
    category: "지갑",
    createDate: "8/17/2023",
    description: "마르지엘라 지갑이다.",
    id: "66d1335f-f5c3-4dfa-901d-7fc2c3fa80f7",
    image:
      "https://res.cloudinary.com/ddwqzra81/image/upload/v1692262854/db7it7i3imunxrnztv8x.jpg",
    option: "s, m, lg",
    price: "700",
    title: "마르지엘라 지갑1",
  },
  {
    category: "지갑",
    createDate: "8/17/2023",
    description: "마르지엘라 지갑이다.",
    id: "66d1335f-f5c3-4dfa-901d-7fc2c3fa80f7",
    image:
      "https://res.cloudinary.com/ddwqzra81/image/upload/v1692262854/db7it7i3imunxrnztv8x.jpg",
    option: "s, m, lg",
    price: "7000",
    title: "마르지엘라 지갑2",
  },
  {
    category: "지갑",
    createDate: "8/17/2023",
    description: "마르지엘라 지갑이다.",
    id: "66d1335f-f5c3-4dfa-901d-7fc2c3fa80f7",
    image:
      "https://res.cloudinary.com/ddwqzra81/image/upload/v1692262854/db7it7i3imunxrnztv8x.jpg",
    option: "s, m, lg",
    price: "7000",
    title: "마르지엘라 지갑2",
  },
  {
    category: "지갑",
    createDate: "8/17/2023",
    description: "마르지엘라 지갑이다.",
    id: "66d1335f-f5c3-4dfa-901d-7fc2c3fa80f7",
    image:
      "https://res.cloudinary.com/ddwqzra81/image/upload/v1692262854/db7it7i3imunxrnztv8x.jpg",
    option: "s, m, lg",
    price: "7000",
    title: "마르지엘라 지갑3",
  },
  {
    category: "지갑",
    createDate: "8/17/2023",
    description: "마르지엘라 지갑이다.",
    id: "66d1335f-f5c3-4dfa-901d-7fc2c3fa80f7",
    image:
      "https://res.cloudinary.com/ddwqzra81/image/upload/v1692262854/db7it7i3imunxrnztv8x.jpg",
    option: "s, m, lg",
    price: "7000",
    title: "마르지엘라 지갑4",
  },
  {
    category: "지갑",
    createDate: "8/17/2023",
    description: "마르지엘라 지갑이다.",
    id: "66d1335f-f5c3-4dfa-901d-7fc2c3fa80f7",
    image:
      "https://res.cloudinary.com/ddwqzra81/image/upload/v1692262854/db7it7i3imunxrnztv8x.jpg",
    option: "s, m, lg",
    price: "7000",
    title: "마르지엘라 지갑4",
  },
  {
    category: "지갑",
    createDate: "8/17/2023",
    description: "마르지엘라 지갑이다.",
    id: "66d1335f-f5c3-4dfa-901d-7fc2c3fa80f7",
    image:
      "https://res.cloudinary.com/ddwqzra81/image/upload/v1692262854/db7it7i3imunxrnztv8x.jpg",
    option: "s, m, lg",
    price: "7000",
    title: "마르지엘라 지갑4",
  },
  {
    category: "지갑",
    createDate: "8/17/2023",
    description: "마르지엘라 지갑이다.",
    id: "66d1335f-f5c3-4dfa-901d-7fc2c3fa80f7",
    image:
      "https://res.cloudinary.com/ddwqzra81/image/upload/v1692262854/db7it7i3imunxrnztv8x.jpg",
    option: "s, m, lg",
    price: "7000",
    title: "마르지엘라 지갑4",
  },
];

export const ProductList = () => {
  return (
    <>
      <div className="grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testData.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};
