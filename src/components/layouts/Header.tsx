import { SiReactos } from "react-icons/si";
import { Link } from "react-router-dom";
import { Navigator } from "../parts/header/Navigator";

export const Header = () => {
  return (
    <header className="flex items-center justify-between border-b-2 border-b-slate-300 p-4 ">
      <div>
        <Link
          to={import.meta.env.VITE_URL_INDEX}
          className="flex flex-row items-center space-x-2 text-3xl font-bold"
        >
          <SiReactos />
          <h1>Atom</h1>
        </Link>
      </div>
      <div>
        <Navigator />
      </div>
    </header>
  );
};
