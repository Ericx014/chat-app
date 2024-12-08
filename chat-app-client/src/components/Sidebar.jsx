/* eslint-disable react/prop-types */
import { useUserContext } from "./App";

const Sidebar = ({ onAddContact }) => {
  const { currentUser, setCurrentUser } = useUserContext();

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <section className="w-[300px] h-screen bg-white flex flex-col">
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
          className="focus:outline-none focus:placeholder-transparent bg-gray-200 text-black px-4 py-2 rounded-lg w-[85%] mx-4 mb-7"
        />
      </form>
      <p>Phone Number: {currentUser}</p>
      <button onClick={handleLogout} className="bg-white rounded-lg py-3 m-4">
					Log out
				</button>
    </section>
  );
};

export default Sidebar;
