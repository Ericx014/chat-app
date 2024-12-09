/* eslint-disable react/prop-types */
import { useState } from "react";

const DropDown = ({ onAddContact, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAddContact = () => {
    onAddContact();
    setIsOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-2xl font-bold rounded-md hover:bg-gray-100 w-[30px] h-[30px] flex items-center justify-center"
      >
        <span className="flex items-center">
          +
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-1">
            <li
              onClick={handleAddContact}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Add Contact
            </li>
            <li
              onClick={handleLogout}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default DropDown;