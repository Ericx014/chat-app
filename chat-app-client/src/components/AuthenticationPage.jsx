import { useState } from "react";
import { useUserContext } from "./App";

const AuthenticationPage = () => {
  const { setCurrentUser } = useUserContext();

  const [phoneNo, setPhoneNo] = useState("");

  const inputStyle =
    "focus:outline-none focus:placeholder-transparent focus:ring-[#778da9] focus:ring-2 bg-gray-100 text-black px-4 py-3 rounded-lg w-full mb-7";
  const centerChild = "flex flex-row justify-center w-full items-center";
  const formStyle =
    "border-[#778da9] border-[2px] p-[30px] w-[400px] rounded-xl hover:shadow-xl transition-shadow duration-300";

  const handleLogin = (e) => {
    e.preventDefault();
    setCurrentUser(phoneNo);
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <form onSubmit={(e) => handleLogin(e)} className={formStyle}>
        <div className={centerChild}>
          <h1 className="font-bold mb-5 text-lg capitalize">Welcome</h1>
        </div>
        <input
          type="text"
          placeholder="Phone No."
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          className={inputStyle}
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
