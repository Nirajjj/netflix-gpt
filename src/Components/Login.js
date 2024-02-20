import React, { useRef, useState } from "react";
import validOrNot from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const signInAndUp = () => {
    setIsSignIn(!isSignIn);
  };
  const validate = () => {
    const message = validOrNot(email.current.value, password.current.value);

    setErrorMessage(message);
  };
  return (
    <div className="w-screen h-screen bg-black/50 absolute overflow-hidden">
      <img
        className="absolute -z-10 w-[1500px] h-[700px] bg-cover overflow-hidden object-cover"
        src="Images/netflix bg.jpg"
        alt="img"
      />

      <img className="w-52 m-3 relative" src="Images/logo.png" alt="logo" />
      <div className="w-screen flex justify-center">
        <form
          className="flex flex-col w-[32vw] gap-8 bg-black/65 p-16 rounded-md pb-32 "
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-white font-semibold text-4xl">Sign in</h1>
          {!isSignIn && (
            <input
              className="rounded-md pl-4 py-3.5 placeholder:text-sm bg-[#333333] focus:outline-none text-white "
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            ref={email}
            className="rounded-md pl-4 py-3.5 placeholder:text-sm bg-[#333333] focus:outline-none text-white transition-all duration-1000"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            ref={password}
            className="rounded-md pl-4 py-3.5 placeholder:text-sm bg-[#333333] focus:outline-none text-white transition-all duration-1000"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-600">{errorMessage}</p>
          <button
            className="bg-[#E50914] rounded-md py-3.5 text-white font-bold"
            onClick={validate}
          >
            Sign In
          </button>

          {isSignIn ? (
            <p className="text-[#7c7b7b]">
              New to Netflix? &nbsp;
              <span className="text-white cursor-pointer" onClick={signInAndUp}>
                Sign up now
              </span>
            </p>
          ) : (
            <p className="text-[#7c7b7b]">
              Alredy have an account? &nbsp;
              <span className="text-white cursor-pointer" onClick={signInAndUp}>
                Sign in now
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
