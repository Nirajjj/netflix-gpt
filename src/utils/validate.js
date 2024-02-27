const validOrNot = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isPassValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "email not valid";
  if (!isPassValid)
    return (
      <span>
        <p className="text-md font-semibold">
          Your password must be have at least:-
        </p>
        {/* <p className="text-sm">
          Your password should be at least 8 characters long and include a mix
          of uppercase letters, lowercase letters, numbers, and special
          characters.
        </p> */}
        <ul className="text-md font-semibold">
          <li>At least 8 characters long</li>
          <li>At least 1 capital letter</li>
          <li>At least 1 lowercase letter</li>
          <li>At least 1 special character</li>
          <li>At least 1 numeric character</li>
        </ul>
      </span>
    );
  return null;
};

export default validOrNot;
