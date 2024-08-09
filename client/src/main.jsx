/* DEPENDENCIES */
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Login from "./pages/login.jsx";
import Home from "./pages/home.jsx";

import SingleCraft from "./pages/singleCraft.jsx"

import Survey from "./pages/survey.jsx";
import Dashboard from "./pages/dashboard.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {

        path: "/project/:projectId",
        element: <SingleCraft />
      }, {
        path: "/survey",
        element: <Survey />,
      }, {
        path: "/dashboard",
        element: <Dashboard />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
