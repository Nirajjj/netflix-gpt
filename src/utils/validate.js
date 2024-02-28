const validOrNot = (email, password) => {
  // const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isPassValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(

  if (!isEmailValid) return "email not valid";
  if (!isPassValid)
    return (
      <span>
        <p>Your password must be have at least:-</p>
        <ul>
          <li>8 characters long</li>
          <li>1 capital letter</li>
          <li>1 lowercase letter</li>
          <li>1 special character</li>
          <li>1 numeric character</li>
        </ul>
      </span>
    );
  return null;
};

export default validOrNot;
