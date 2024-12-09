import { useState } from "react";
import { useConversations } from "../context/ConversationsProvider";
import { useMessages } from "../context/MessagesProvider";
import { useUserContext } from "./App";
import MessageBubble from "./MessageBubble";

const Conversation = () => {
  const { selectedContact } = useConversations();
  const { messages, addNewMessage } = useMessages();
  const { currentUser } = useUserContext();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewMessage(selectedContact.phoneNo, text);
    setText("");
  };

  const messageToDisplay = messages.filter(
    (message) =>
      (message.receiverNo === selectedContact.phoneNo &&
        message.senderNo === currentUser) ||
      (message.receiverNo === currentUser &&
        message.senderNo === selectedContact.phoneNo)
  );

  return (
    <div className="flex flex-col grow">
      <div className="bg-[#778da924] w-full py-3 px-5 capitalize font-semibold">
        {selectedContact.name}
      </div>
      <div className="flex flex-col grow">
        {messageToDisplay.map((message, index) => {
          return <MessageBubble message={message} key={index} />;
        })}
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-[#778da924] w-full py-3 flex flex-row justify-center"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          placeholder="Enter a message"
          className="focus:outline-none focus:placeholder-transparent py-2 mx-3 px-3 w-[80%] rounded-lg"
        />
        <button type="submit" className="mx-10">
          Send
        </button>
      </form>
    </div>
  );
};

export default Conversation;
