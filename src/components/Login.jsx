import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={require("../assets/login-banner.jpg")} alt="login-banner" />
      </div>
      <form className="absolute bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white px-16 py-16 flex flex-col justify-center bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 w-full mt-4 bg-black bg-opacity-30 font-bold rounded-md border border-zinc-300"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 w-full mt-4 bg-black bg-opacity-30 font-bold rounded-md border border-zinc-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 w-full my-4 bg-black bg-opacity-30 font-bold rounded-md border border-zinc-300"
        />
        {!isSignIn && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-4 w-full mb-4 bg-black bg-opacity-30 font-bold rounded-md border border-zinc-300"
          />
        )}

        <button className="p-4 bg-[#ff0000] rounded-md font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          {isSignIn ? (
            <p>
              New to MovieFlix?{" "}
              <span className="text-[#ff0000] cursor-pointer">Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already registered{" "}
              <span className="text-[#ff0000] cursor-pointer">
                Let's Sign In Now
              </span>
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
