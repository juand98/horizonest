import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import ErrorPage from "./error-page";
import Music from "../components/Music";
import Video from "../components/Video";
import useData from "../Hooks/useData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/music",
    element: <Music />,
  },
  {
    path: "/video",
    element: <Video />,
  },
]);

const information = useData();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context.Provider value={information}>
      <RouterProvider router={router} />
    </Context.Provider>
  </React.StrictMode>
);
