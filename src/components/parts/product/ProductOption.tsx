import { ChangeEvent } from "react";

type Props = {
  options: string;
  onChangeToggle: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const ProductOption = ({ options, onChangeToggle }: Props) => {
  const splitedOptions = options.replace(" ", "").split(",");
  return (
    <select onChange={onChangeToggle}>
      <option></option>
      {splitedOptions.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};
