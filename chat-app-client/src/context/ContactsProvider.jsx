import React, { useContext } from "react";
import useLocalStorage from "../components/hooks/useLocalStorage";
import { useUserContext } from "../components/App";

const ContactsContext = React.createContext();

const useContacts = () => {
  return useContext(ContactsContext);
};

// eslint-disable-next-line react/prop-types
const ContactsProvider = ({ children }) => {
  const { currentUser } = useUserContext();
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  const createContact = (phoneNo, name, contactOwner = currentUser) => {
    setContacts((prevContacts) => {
			const newContactObject = { phoneNo: phoneNo, name: name, contactOwner };
      const contactExists = prevContacts.find(
        (contact) => contact.phoneNo === phoneNo
      );
      if (contactExists) {
        return prevContacts;
      }
      return [...prevContacts, newContactObject];
    });
  };

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
export { useContacts, ContactsProvider };
