import React from "react";
import Root from "./routes/Root";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Music from "./routes/Music";
import Video from "./routes/Video";
import Memory1 from "./routes/Memory1";
import Memory2 from "./routes/Memory2";
import Celular from "./routes/Celular";
import Memory3 from "./routes/Memory3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/musica",
    element: <Music />,
  },
  {
    path: "/video",
    element: <Video />,
  },
  {
    path: "/celular",
    element: <Celular />,
  },
  {
    path: "/memoria-musica",
    element: <Memory1 />,
  },
  {
    path: "/memoria-video",
    element: <Memory2 />,
  },
  {
    path: "/memoria-celular",
    element: <Memory3 />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
