import React, { useState } from "react";

const Login = () => {
  const [signStatus, setSignStatus] = useState(true);

  const signInAndUp = () => {
    setSignStatus(!signStatus);
  };
  const validate = () => {};
  return (
    <div className="w-screen h-screen bg-black/50 absolute overflow-hidden">
      <img
        className="absolute -z-10 w-[1500px] h-[700px] bg-cover overflow-hidden object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="img"
      />

      <img
        className="w-52 m-3 relative"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="w-screen flex justify-center">
        <form className="flex flex-col w-[32vw] gap-8 bg-black/65 p-16 rounded-md pb-32 ">
          <h1 className="text-white font-semibold text-4xl">Sign in</h1>
          {!signStatus && (
            <input
              className="rounded-md pl-4 py-3.5 placeholder:text-sm bg-[#333333] focus:outline-none text-white "
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            className="rounded-md pl-4 py-3.5 placeholder:text-sm bg-[#333333] focus:outline-none text-white transition-all duration-1000"
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="rounded-md pl-4 py-3.5 placeholder:text-sm bg-[#333333] focus:outline-none text-white"
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#E50914] rounded-md py-3.5 text-white font-bold">
            Sign In
          </button>

          {signStatus ? (
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
