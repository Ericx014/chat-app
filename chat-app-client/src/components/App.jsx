import { useContext, createContext } from "react";
import AuthenticationPage from "./AuthenticationPage";
import Dashboard from "./Dashboard";
import useLocalStorage from "./hooks/useLocalStorage";
import { ContactsProvider } from "../context/ContactsProvider";

export const UserContext = createContext();

const App = () => {
  const [currentUser, setCurrentUser] = useLocalStorage("curentuser", null);

  const dashboard = (
    <ContactsProvider>
      <Dashboard />
    </ContactsProvider>
  );

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {!currentUser ? <AuthenticationPage /> : dashboard}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default App;
