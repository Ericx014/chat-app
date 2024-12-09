import { useState } from "react";
import { useUserContext } from "./App";

const AuthenticationPage = () => {
  const { login } = useUserContext();
  const [phoneNo, setPhoneNo] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
		login(phoneNo);
  };

  return (
    <section className="flex justify-center items-center h-screen bg-[#778da941]">
      <form
        onSubmit={(e) => handleLogin(e)}
        className="border-[#778da9] border-[2px] bg-white p-[30px] w-[400px] rounded-xl hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex flex-row justify-center w-full items-center">
          <h1 className="font-bold mb-5 text-lg capitalize">Welcome</h1>
        </div>
        <input
          required
          type="text"
          placeholder="Phone No."
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          className="focus:outline-none focus:placeholder-transparent focus:ring-[#778da9] focus:ring-2 bg-gray-200 text-black px-4 py-3 rounded-lg w-full mb-7"
        />
        <button
          type="submit"
          className="bg-[#1b263b] text-white px-4 py-3 rounded-lg w-full mb-2"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default AuthenticationPage;
