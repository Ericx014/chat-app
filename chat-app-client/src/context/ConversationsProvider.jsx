/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from "react";
import { useContacts } from "./ContactsProvider";
import { useUserContext } from "../components/App";

const ConversationsContext = React.createContext();

const useConversations = () => {
  return useContext(ConversationsContext);
};

const ConversationsProvider = ({ children }) => {
  const { currentUser } = useUserContext();
  const { contacts } = useContacts();
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const userContacts = contacts.filter(
      (contact) => contact.contactOwner === currentUser
    );
    if (userContacts.length > 0) {
      setSelectedContact(userContacts[0]);
    }
  }, [contacts]);

  const value = {
    selectedContact,
    setSelectedContact,
  };

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
};

export { useConversations, ConversationsProvider };
