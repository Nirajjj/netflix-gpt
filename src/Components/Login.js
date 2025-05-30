import React, { useRef, useState } from "react";
import validOrNot from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
import { BGIMG_URL } from "../utils/constant";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const signInAndUp = () => {
    setIsSignIn(!isSignIn);
  };
  const validate = () => {
    const message = validOrNot(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) return;

    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // const { uid, email, displayName } = auth.currentUser;

          // dispatch(
          //   addUser({ uid: uid, email: email, displayName: displayName })
          // );

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            `Email or password is invalid. ${errorCode - errorMessage}`
          );
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // const auth = getAuth();
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;

              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              console.log(error);
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " " + errorMessage);

              // ...
            });
          // ...
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);

          // ..
        });
    }
  };
  return (
    <div className="w-screen h-screen overflow-y-hidden bg-black/50 relative">
      <div className="absolute -z-10 bg-cover object-cover w-screen h-screen overflow-hidden">
        <img className="w-screen h-screen" src={BGIMG_URL} alt="img" />
      </div>

      <Header />
      {/* <img
        className="w-52 m-3 relative"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      /> */}
      <div className="w-screen flex justify-center ">
        <form
          className="flex flex-col md:w-[34vw] w-screen gap-6 bg-black/65 p-16 rounded-lg pb-24 absolute top-20"
          onSubmit={(e) => e.preventDefault()}
        >
          {isSignIn ? (
            <h1 className="text-white font-semibold text-4xl">Login</h1>
          ) : (
            <h1 className="text-white font-semibold text-4xl">Sign up</h1>
          )}

          {!isSignIn && (
            <input
              ref={name}
              className="rounded-md pl-4 py-3.5 placeholder:text-sm bg-[#333333] focus:outline-none text-white "
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            ref={email}
            className="rounded-md pl-4 py-3.5 placeholder:text-sm bg-[#333333] focus:outline-none text-white transition-all duration-1000"
            type="text"
            placeholder="Email"
          />
          <input
            ref={password}
            className="rounded-md pl-4 py-3.5 placeholder:text-sm bg-[#333333] focus:outline-none text-white transition-all duration-1000"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-600 text-md font-semibold">{errorMessage}</p>
          {isSignIn ? (
            <button
              className="bg-[#E50914] rounded-md py-3.5 text-white font-bold"
              onClick={validate}
            >
              Login
            </button>
          ) : (
            <button
              className="bg-[#E50914] rounded-md py-3.5 text-white font-bold"
              onClick={validate}
            >
              Sign Up
            </button>
          )}

          {isSignIn ? (
            <p className="text-[#7c7b7b]">
              New to Netflix-GPT? &nbsp;
              <span className="text-white cursor-pointer" onClick={signInAndUp}>
                Sign up now
              </span>
            </p>
          ) : (
            <p className="text-[#7c7b7b]">
              Alredy have an account? &nbsp;
              <span className="text-white cursor-pointer" onClick={signInAndUp}>
                Login now
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
