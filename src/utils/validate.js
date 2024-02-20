const validOrNot = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPassValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  console.log(email);
  if (!isEmailValid) return "email not valid";
  if (!isPassValid)
    return (
      <span>
        <p>password not valid</p>
        <ul>
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
