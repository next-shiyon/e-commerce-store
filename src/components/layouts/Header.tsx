import { SiReactos } from "react-icons/si";
import { Link } from "react-router-dom";
import { Navigator } from "../parts/navigator/Navigator";

export const Header = () => {
  return (
    <header>
      <div>
        <Link to={import.meta.env.VITE_URL_INDEX}>
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
