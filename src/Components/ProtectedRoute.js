import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const store = useSelector((store) => store.user);

  return store ? element : <Navigate to={"/"} />;
};

export default ProtectedRoute;
