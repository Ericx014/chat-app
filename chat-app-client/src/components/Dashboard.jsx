import { useUserContext } from "./App";

const Dashboard = () => {
	const {currentUser, setCurrentUser} = useUserContext();
	
	const handleLogout = () => {
		setCurrentUser(null)
	}

	return (
    <section>
      <div className="flex flex-col w-[300px] h-screen bg-blue-50 items-start">
				<p>Phone Number: {currentUser}</p>
				<button onClick={handleLogout}>Log out</button>
			</div>
    </section>
  );
}

export default Dashboard;