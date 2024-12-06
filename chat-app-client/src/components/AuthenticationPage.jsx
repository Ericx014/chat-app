import { useState } from "react";

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const inputStyle =
    "focus:outline-none focus:placeholder-transparent focus:ring-[#778da9] focus:ring-2 bg-gray-100 text-black px-4 py-3 rounded-lg w-full mb-7";
  const centerChild = "flex flex-row justify-center w-full items-center";
	const formStyle = "border-[#778da9] border-[2px] p-[30px] w-[400px] rounded-xl hover:shadow-xl transition-shadow duration-300"

  const LoginForm = (
    <form className={formStyle}>
      <div className={centerChild}>
        <h1 className="font-bold mb-5 text-lg ">Login</h1>
      </div>
      <input
        type="text"
        id="username-input"
        placeholder="Username"
        className={inputStyle}
      />
      <input
        type="password"
        id="password-input"
        placeholder="Password"
        className={inputStyle}
      />
      <button
        type="submit"
        className="bg-[#1b263b] text-white px-4 py-3 rounded-lg w-full mb-2"
      >
        Login
      </button>
      <div className="text-gray-400 text-sm flex justify-center items-center gap-1 mb-5">
        No account yet?
        <span
          className="underline text-blue-600 hover:font-semibold"
          onClick={() => setIsLogin(!isLogin)}
        >
          Register
        </span>{" "}
        now.
      </div>
    </form>
  );

  const SignupForm = (
    <form className={formStyle}>
      <div className={centerChild}>
        <h1 className="font-bold mb-3 text-lg ">Sign Up</h1>
      </div>
      <input type="text" placeholder="Username" className={inputStyle} />
      <input type="text" placeholder="Phone No." className={inputStyle} />
      <input type="password" placeholder="Password" className={inputStyle} />
      <button
        type="submit"
        className="bg-[#1b263b] text-white px-4 py-3 rounded-lg w-full mb-2"
      >
        Sign Up
      </button>
      <div className="text-gray-400 text-sm flex justify-center items-center gap-1 mb-5">
        Already have an account?
        <span
          className="underline text-blue-600 hover:font-semibold"
          onClick={() => setIsLogin(!isLogin)}
        >
          Login
        </span>{" "}
        now.
      </div>
    </form>
  );

  return (
    <section className="flex justify-center items-center h-screen">
      {isLogin ? LoginForm : SignupForm}
    </section>
  );
};

export default AuthenticationPage;
