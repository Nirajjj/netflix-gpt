import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Browse from "./Components/Browse";

const App = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRoutes} />;
};

export default App;
