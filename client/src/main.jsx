/* DEPENDENCIES */
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Error from "./pages/error.jsx";
import Login from "./pages/login.jsx";
import Home from "./pages/home.jsx";

import SingleCraft from "./pages/singleCraft.jsx";

import SurveyPage from "./pages/SurveyPage.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Explore from "./pages/explore.jsx";
import NewProject from "./pages/newProject.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
        element: <SingleCraft />,
      },
      {
        path: "/survey",
        element: <SurveyPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/new-project",
        element: <NewProject />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
