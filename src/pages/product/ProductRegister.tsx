import { RegisterForm } from "../../components/parts/product/RegisterForm";
export const ProductRegister = () => {
  return (
    <div>
      <div className="mt-5 flex flex-col items-center space-y-3 p-5 text-gray-900">
        <h1 className="text-3xl font-bold">Product Register Form</h1>
        <span className="text-xl font-bold">
          Please enter the product you want to register
        </span>
      </div>
      <div className="p-3">
        <RegisterForm />
      </div>
    </div>
  );
};
