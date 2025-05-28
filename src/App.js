import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Browse from "./Components/Browse";
import MovieInfoPage from "./Components/MovieInfoPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import Layout from "./Layout";

const App = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/",
      element: <ProtectedRoute element={<Layout />} />,
      children: [
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/movie/:id",
          element: <MovieInfoPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRoutes} />;
};

export default App;
