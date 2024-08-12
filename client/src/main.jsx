/* DEPENDENCIES */
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Error from "./pages/error.jsx";
import Login from "./pages/login.jsx";
import Home from "./pages/home.jsx";

import SingleCraft from "./pages/singleCraft.jsx"

import SurveyPage from "./pages/surveyPage.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Explore from "./pages/explore.jsx";


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
        element: <SingleCraft />
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
