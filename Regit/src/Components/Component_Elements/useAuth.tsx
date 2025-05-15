import { useEffect, useState } from "react";

export default function useAuth() {
  let [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem("user");
    let checker = !!token;
    setLoggedIn(checker);
  }, []);
  return isLoggedIn;
}
