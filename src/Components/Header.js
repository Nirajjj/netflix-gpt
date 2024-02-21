import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.user);
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
    <div className="flex justify-between items-center px-5 ">
      <div>
        <img className="w-52 m-3 relative" src={LOGO_URL} alt="logo" />
      </div>
      {store && (
        <div>
          <img
            src="Images/userphoto.png"
            className="w-10 rounded-lg"
            onClick={() => {
              setShowButton(!showButton);
            }}
          />
          <div
            className={`bg-black/60 border-2 border-solid border-white  rounded-lg text-white text-sm m-2 p-2 absolute right-0 ${
              showButton ? "block" : "hidden"
            }`}
          >
            <p>{store.displayName}</p>
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
