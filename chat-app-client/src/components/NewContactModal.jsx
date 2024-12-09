import { useState } from "react";
import { useContacts } from "../context/ContactsProvider";

/* eslint-disable react/prop-types */
const NewContactModal = ({ closeModal }) => {
  const { createContact } = useContacts();
  const [phoneNo, setPhoneNo] = useState("");
  const [name, setName] = useState("");

  const handleAddContact = (e) => {
    e.preventDefault();
    createContact(phoneNo, name);
    setPhoneNo("");
    setName("");
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={(e) => handleAddContact(e)}
        className="bg-white p-6 rounded-lg w-[400px] relative"
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 rounded-md text-2xl font-bold hover:bg-gray-100 w-[30px] h-[30px] flex items-center justify-center"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4">Add New Chat</h2>
        {/* Add your modal content here */}
        <input
          type="text"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          placeholder="Phone no."
          className="focus:outline-none focus:placeholder-transparent bg-gray-200 text-black px-4 py-2 rounded-lg w-full mb-4"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Contact name"
          className="focus:outline-none focus:placeholder-transparent bg-gray-200 text-black px-4 py-2 rounded-lg w-full mb-7"
        />
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={closeModal}
            className="w-[80px] px-4 py-2 bg-[#778da941] rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-[80px] px-4 py-2 bg-[#1b263b] text-white rounded-md"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewContactModal;
