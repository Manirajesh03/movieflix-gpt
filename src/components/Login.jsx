import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const fullName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setErrMsg(null);
  };

  const handleForm = () => {
    const mess = !isSignIn
      ? checkValidData(
          email.current.value,
          password.current.value,
          confirmPassword.current.value,
          fullName.current.value
        )
      : checkValidData(email.current.value, password.current.value);
    setErrMsg(mess);
    if (mess) return;

    //Signin / Signup logic
    if (!isSignIn) {
      //Signup Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("🚀 ~ .then ~ user:", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Signin Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("🚀 ~ .then ~ user:", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute max-[992px]:h-full">
        <img
          src={require("../assets/login-banner.jpg")}
          alt="login-banner"
          className="h-full"
        />
      </div>
      <form
        className="absolute bg-black w-4/12 max-[640px]:w-10/12 max-[992px]:w-9/12 max-[640px]:p-14 my-36 mx-auto right-0 left-0 text-white px-16 py-16 flex flex-col justify-center bg-opacity-80 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        {errMsg !== null && (
          <p className="text-center text-xl font-bold mb-2 text-[#ff0000]">
            {errMsg}
          </p>
        )}
        <h1 className="font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            ref={fullName}
            placeholder="Full Name"
            className="p-4 w-full mt-4 bg-black bg-opacity-30 font-bold rounded-md border border-zinc-300"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 w-full mt-4 bg-black bg-opacity-30 font-bold rounded-md border border-zinc-300"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 w-full my-4 bg-black bg-opacity-30 font-bold rounded-md border border-zinc-300"
        />
        {!isSignIn && (
          <input
            type="password"
            ref={confirmPassword}
            placeholder="Confirm Password"
            className="p-4 w-full mb-4 bg-black bg-opacity-30 font-bold rounded-md border border-zinc-300"
          />
        )}

        <button
          className="p-4 bg-[#ff0000] rounded-md font-bold"
          onClick={handleForm}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          {isSignIn ? (
            <p>
              New to MovieFlix?{" "}
              <span className="text-[#ff0000] cursor-pointer font-bold">
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already registered,{" "}
              <span className="text-[#ff0000] cursor-pointer font-bold">
                Sign In Now
              </span>
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
