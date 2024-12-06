import AuthenticationPage from "./AuthenticationPage";
import Dashboard from "./Dashboard";
import useLocalStorage from "./hooks/useLocalStorage";
import { useContext, createContext } from "react";

export const UserContext = createContext();

const App = () => {
  const [currentUser, setCurrentUser] = useLocalStorage("curentuser", null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {!currentUser ? <AuthenticationPage /> : <Dashboard />}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default App;
