import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, suported_Language } from "../utils/constant";
import { toggleShowGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configureSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.user);
  const gptStatus = useSelector((store) => store.gpt.showGptSearch);
  const [showButton, setShowButton] = useState(false);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const handleToggleGptStatus = () => {
    dispatch(toggleShowGptSearch());
  };
  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

        navigate("/browse");
      } else {
        // User is signed out

        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between items-center px-5 md:pr-12 pr-2 ">
      <div>
        <img
          className="md:w-52 w-20 md:m-3 m-1 relative"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      {store && (
        <div className="flex gap-3 ">
          {gptStatus && (
            <select
              className="bg-black  focus:outline-none text-white rounded-md"
              onClick={(e) => handleLanguage(e)}
            >
              {suported_Language.map((lang) => (
                <option
                  key={lang.name}
                  name={lang.identifier}
                  className="bg-gray-800 text-white rounded-sm"
                >
                  {lang.identifier}
                </option>
              ))}
            </select>
          )}
          <button
            className={`md:text-base text-sm py-2 px-4 ${
              gptStatus
                ? "bg-red-700 text-white rounded-md"
                : "bg-gradient-to-tr from-purple-700 via-blue-700 to-cyan-700 text-yellow-400 rounded-br-none rounded-xl"
            }    font-semibold transition-all duration-1000`}
            onClick={handleToggleGptStatus}
          >
            {gptStatus ? "Hompage" : "GPT Search"}
          </button>
          <img
            src="Images/userphoto.png"
            className="w-10 rounded-lg"
            onClick={() => {
              setShowButton(!showButton);
            }}
          />
          <div
            className={`z-50 bg-black/60 border-[1px] border-solid border-white  rounded-lg text-white text-sm m-2 p-2 absolute md:right-10 md:top-20 top-10 right-0 ${
              showButton ? "block" : "hidden"
            }`}
          >
            <p className="font-semibold">Hello {store.displayName}</p>
            <button
              onClick={handleSignOut}
              className="bg-red-600 rounded-lg text-white text-sm m-2 p-2 right-0"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
