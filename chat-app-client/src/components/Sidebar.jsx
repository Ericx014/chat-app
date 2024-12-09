/* eslint-disable react/prop-types */
import { useUserContext } from "./App";
import { useContacts } from "../context/ContactsProvider";
import { useConversations } from "../context/ConversationsProvider";

const Sidebar = ({ onAddContact }) => {
  const { currentUser, logout } = useUserContext();
  const { contacts } = useContacts();
  const { selectedContact, setSelectedContact } = useConversations();

  const handleLogout = () => {
    logout()
  };

  const handleSelectContact = (selectedContact) => {
    console.log(selectedContact);
    setSelectedContact(selectedContact);
  };

  return (
    <section className="w-[350px] h-screen bg-white flex flex-col">
      <div className="flex flex-row justify-between items-center mx-4 mt-6 mb-3">
        <h1 className="font-bold text-2xl">Chats</h1>
        <button
          onClick={onAddContact}
          className="text-2xl font-bold rounded-md hover:bg-gray-100 w-[30px] h-[30px] flex items-center justify-center"
        >
          +
        </button>
      </div>
      <form>
        <input
          type="text"
          placeholder="Search"
          className="focus:outline-none focus:placeholder-transparent bg-gray-200 text-black px-4 py-2 rounded-lg w-[85%] mx-4 mb-6"
        />
      </form>
      {contacts.map((contact, index) => {
        const isSelected = selectedContact?.phoneNo === contact.phoneNo;

        if (contact.contactOwner == currentUser) {
          return (
            <div
              key={index}
              onClick={() =>
                handleSelectContact({
                  name: contact.name,
                  phoneNo: contact.phoneNo,
                })
              }
              className={`${
                isSelected && "bg-gray-100"
              } flex flex-col justify-center mx-3 px-3 rounded-md py-2 mb-2`}
            >
              <p>{contact.name}</p>
            </div>
          );
        }
      })}
      <p>Phone Number: {currentUser}</p>
      <button onClick={handleLogout} className="bg-white rounded-lg py-3 m-4">
        Log out
      </button>
    </section>
  );
};

export default Sidebar;
