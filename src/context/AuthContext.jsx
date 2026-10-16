import { createContext, useState } from "react";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const register = (name, email, password) => {
    const newUser = {
      name,
      email,
      password,
    };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    return true;
  };
  const login = (email, password) => {
    const registeredUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      const loggedUser = {
        name: registeredUser.name,
        email: registeredUser.email,
      };

      localStorage.setItem("user", JSON.stringify(loggedUser));
      setUser(loggedUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout,}}> {children}</AuthContext.Provider>);
}

export default AuthProvider;