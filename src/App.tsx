import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFoundError } from "./pages/errors/404";
import { useRecoilState } from "recoil";
import { userState } from "./global/userState";
import { loginedRoute, logoutedRoute } from "./router/router";
import { Layout } from "./components/layouts/Layout";

function App() {
  const [user] = useRecoilState(userState);

  const router = createBrowserRouter([
    {
      path: import.meta.env.VITE_URL_INDEX,
      element: <Layout />,
      errorElement: <NotFoundError />,
      children: user !== null ? loginedRoute : logoutedRoute,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
