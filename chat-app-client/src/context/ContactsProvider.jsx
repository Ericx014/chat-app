import React, { useContext } from "react";
import useLocalStorage from "../components/hooks/useLocalStorage";
import { useUserContext } from "../components/App";

const ContactsContext = React.createContext();

const useContacts = () => {
  return useContext(ContactsContext);
};

// eslint-disable-next-line react/prop-types
const ContactsProvider = ({ children }) => {
  const { currentUser, users } = useUserContext();
  const [contacts, setContacts] = useLocalStorage("contacts", []);

  const createContact = (phoneNo, name, contactOwner = currentUser) => {
    setContacts((prevContacts) => {
      const userExists = users.find((user) => user === phoneNo);
      if (!userExists) {
        alert("Invalid phone number.");
        return prevContacts;
      }

      const contactExists = prevContacts.find(
        (contact) =>
          contact.phoneNo === phoneNo && contact.contactOwner === contactOwner
      );
      if (contactExists) {
        alert("Contact already exists.");
        return prevContacts;
      }

      const newContactObject = { phoneNo: phoneNo, name: name, contactOwner };
			console.log("Created contact: ", newContactObject);
      return [...prevContacts, newContactObject];
    });
  };

	const updateReceiverContact = (receiverNo, senderNo) => {
    const receiverContacts = contacts.filter(
      (contact) => contact.contactOwner == receiverNo
    );
    const isSenderInReceiverContacts = receiverContacts.some(
      (contact) => contact.phoneNo === senderNo
    );
    console.log("Contact exist in receiver?:", isSenderInReceiverContacts);

    if (!isSenderInReceiverContacts) {
      createContact(senderNo, senderNo, receiverNo);
    }
  };

  return (
    <ContactsContext.Provider
      value={{ contacts, createContact, updateReceiverContact }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
export { useContacts, ContactsProvider };
