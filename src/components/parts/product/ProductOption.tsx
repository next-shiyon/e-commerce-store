type Props = {
  options: string;
};

export const ProductOption = ({ options }: Props) => {
  const splitedOptions = options.split(",");
  return (
    <select>
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
