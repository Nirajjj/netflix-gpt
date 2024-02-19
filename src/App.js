import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={appRoutes} />;
}

export default App;
