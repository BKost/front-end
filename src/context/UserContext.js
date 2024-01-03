import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const cookies = document.cookie;
  const splitCookies = cookies.split(";");

  const isUserCookie = splitCookies.find((cookie) => {
    return cookie.includes("user");
  });

  useEffect(() => {
    setIsLoggedIn(isUserCookie);
  }, []);

  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, showLogout, setShowLogout }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
