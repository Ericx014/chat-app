import { useState } from "react";
// import { useUserContext } from "./App";
import Sidebar from "./Sidebar";
import NewContactModal from "./NewContactModal"

const Dashboard = () => {
	// const {currentUser, setCurrentUser} = useUserContext();
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };


	return (
    <section className="bg-[#778da941]">
      <Sidebar onAddContact={handleOpenModal} />
      {modalIsOpen && <NewContactModal onClose={handleCloseModal} />}
    </section>
  );
}

export default Dashboard;