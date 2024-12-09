import { useContext, createContext } from "react";
import AuthenticationPage from "./AuthenticationPage";
import Dashboard from "./Dashboard";
import useLocalStorage from "./hooks/useLocalStorage";
import { ContactsProvider } from "../context/ContactsProvider";
import { ConversationsProvider } from "../context/ConversationsProvider";
import { MessagesProvider } from "../context/MessagesProvider";

export const UserContext = createContext();

const App = () => {
  const [currentUser, setCurrentUser] = useLocalStorage("curentuser", "");
  const [users, setUsers] = useLocalStorage("users", []);

  const dashboard = (
    <ContactsProvider>
      <MessagesProvider>
        <ConversationsProvider>
          <Dashboard />
        </ConversationsProvider>
      </MessagesProvider>
    </ContactsProvider>
  );

  const login = (phoneNo) => {
    setUsers((prevUsers) => {
      const userExists = prevUsers.find(
        (userPhoneNo) => userPhoneNo === phoneNo
      );
      if (userExists) {
        return prevUsers;
      }
      return [...prevUsers, phoneNo];
    });

    setCurrentUser(phoneNo);
  };

  const logout = () => {
    setCurrentUser("");
  };

  const value = { currentUser, users, login, logout };

  return (
    <UserContext.Provider value={value}>
      {!currentUser ? <AuthenticationPage /> : dashboard}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default App;
