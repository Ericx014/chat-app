import { useUserContext } from "./App";

/* eslint-disable react/prop-types */
const MessageBubble = ({ message }) => {
  const { currentUser } = useUserContext();

  return (
    <div
      className={`m-4 px-3 p-2 rounded-full max-w-[70%] ${
        message.senderNo === currentUser
          ? "self-end bg-[#415a77] text-white rounded-br-none"
          : "self-start bg-gray-200 text-black rounded-bl-none"
      }`}
    >
      {message.text}
    </div>
  );
};
export default MessageBubble;
