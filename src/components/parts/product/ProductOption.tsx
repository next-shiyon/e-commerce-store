import { ChangeEvent } from "react";

type Props = {
  options: string;
  onChangeToggle: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const ProductOption = ({ options, onChangeToggle }: Props) => {
  const splitedOptions = options.replace(" ", "").split(",");
  return (
    <div className="w-2/3">
      <label
        htmlFor="option"
        className="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
      >
        상품 옵션
      </label>
      <select
        id="option"
        className="mb-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        onChange={onChangeToggle}
      >
        <option>옵션을 선택해주세요.</option>
        {splitedOptions.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
