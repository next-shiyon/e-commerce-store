import { atom } from "recoil";
import Cookie from "js-cookie";

export interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export const userState = atom<User | null>({
  key: "userState",
  default: getDefaultValue(),
});

function getDefaultValue() {
  const user = Cookie.get("user");

  if (user === undefined) {
    return null;
  } else {
    return JSON.parse(user);
  }
}
