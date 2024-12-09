/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import useLocalStorage from "../components/hooks/useLocalStorage";
import { useUserContext } from "../components/App";
import { useContacts } from "./ContactsProvider";

const MessagesContext = React.createContext();

const useMessages = () => {
  return useContext(MessagesContext);
};

const MessagesProvider = ({ children }) => {
  const { currentUser } = useUserContext();
  const { updateReceiverContact } = useContacts();
  const [messages, setMessages] = useLocalStorage("messages", []);

  const addNewMessage = (receiverNo, text, senderNo = currentUser) => {
    const newMessageObject = { receiverNo, text, senderNo };
    setMessages((prevMessages) => [...prevMessages, newMessageObject]);

    updateReceiverContact(receiverNo, senderNo);
  };

  const value = {
    messages,
    addNewMessage,
  };

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
};

export { useMessages, MessagesProvider };
