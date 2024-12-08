import React, { useContext } from "react";
import useLocalStorage from "../components/hooks/useLocalStorage";

const ContactsContext = React.createContext();

const useContacts = () => {
  return useContext(ContactsContext);
};

// eslint-disable-next-line react/prop-types
const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  const createContact = (phoneNo, name) => {
    setContacts((prevContacts) => {
      return [...prevContacts, { phoneNo, name }];
    });
  };

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
export { useContacts, ContactsProvider };
