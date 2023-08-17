import { Outlet } from "react-router-dom";
import { Header } from "./components/layouts/Header";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useSetRecoilState } from "recoil";
import { userState } from "./global/userState";
import Cookie from "js-cookie";

function App() {
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      // 로그인했다면, 전역변수와 로컬스토리지에 저장
      // 로그아웃이라면, 파기
      if (currentUser) {
        const { uid, displayName, email, photoURL } = currentUser;

        const user = {
          uid,
          displayName,
          email,
          photoURL,
        };

        setUser(user);
        Cookie.set("user", JSON.stringify(user));
      } else {
        setUser(null);
        Cookie.remove("user");
      }
    });
  }, [setUser]);

  return (
    <div className="m-auto flex min-w-min max-w-screen-lg flex-col p-3 ">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
