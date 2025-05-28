import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Browse from "./Components/Browse";
import MovieInfoPage from "./Components/MovieInfoPage";

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
    // {
    //   path: "/movie/:id",
    //   element: <MovieInfoPage />,
    // },
  ]);
  return <RouterProvider router={appRoutes} />;
};

export default App;
