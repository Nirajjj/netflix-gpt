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

  const [isSignIn, setIsSignIn] = useState(true);
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
          console.log(user);

          // const { uid, email, displayName } = auth.currentUser;

          // dispatch(
          //   addUser({ uid: uid, email: email, displayName: displayName })
          // );

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Email or password is invalid.");
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
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);

          // ..
        });
    }
  };
  return (
    <div className="w-screen h-screen overflow-hidden bg-black/50">
      <div className="absolute -z-10 bg-cover object-cover w-screen h-screen overflow-hidden">
        <img className="w-[1700px] h-[1000px]" src={BGIMG_URL} alt="img" />
      </div>

      <Header />
      {/* <img
        className="w-52 m-3 relative"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      /> */}
      <div className="w-screen flex justify-center">
        <form
          className="flex flex-col w-[32vw] gap-8 bg-black/65 p-16 rounded-md pb-32 "
          onSubmit={(e) => e.preventDefault()}
        >
          {isSignIn ? (
            <h1 className="text-white font-semibold text-4xl">Sign in</h1>
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
            placeholder="Email or phone number"
          />
          <input
            ref={password}
            className="rounded-md pl-4 py-3.5 placeholder:text-sm bg-[#333333] focus:outline-none text-white transition-all duration-1000"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-600">{errorMessage}</p>
          {isSignIn ? (
            <button
              className="bg-[#E50914] rounded-md py-3.5 text-white font-bold"
              onClick={validate}
            >
              Sign In
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
