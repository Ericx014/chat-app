import { useState } from "react";
import { MessagesProvider } from "../context/MessagesProvider";
// import { useUserContext } from "./App";
import { useConversations } from "../context/ConversationsProvider";
import Sidebar from "./Sidebar";
import Conversation from "./Conversation";
import NewContactModal from "./NewContactModal"

const Dashboard = () => {
	// const {currentUser, setCurrentUser} = useUserContext();
	const {selectedContact} = useConversations();
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };


	return (
    <MessagesProvider>
			<section className="bg-gray-100 flex flex-row">
				<Sidebar onAddContact={handleOpenModal} />
				{selectedContact && <Conversation />}
			</section>
			{modalIsOpen && <NewContactModal onClose={handleCloseModal} />}
		</MessagesProvider>
  );
}

export default Dashboard;