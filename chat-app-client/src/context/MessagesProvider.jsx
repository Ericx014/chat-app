/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import useLocalStorage from "../components/hooks/useLocalStorage";
import { useUserContext } from "../components/App";

const MessagesContext = React.createContext();

const useMessages = () => {
  return useContext(MessagesContext);
};

const MessagesProvider = ({ children }) => {
  const { currentUser } = useUserContext();
  const [messages, setMessages] = useLocalStorage("messages", []);

  const addNewMessage = (receiverNo, text, senderNo = currentUser) => {
    const newMessageObject = { receiverNo, text, senderNo };
    setMessages((prevMessages) => [...prevMessages, newMessageObject]);
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
