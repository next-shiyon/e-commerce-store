import { Outlet } from "react-router-dom";
import { Header } from "./components/layouts/Header";

function App() {
  return (
    <div className="m-auto flex min-w-min max-w-screen-lg flex-col p-3 ">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
