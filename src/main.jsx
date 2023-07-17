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
import Camaras from "./routes/Camaras";
import CamarasDeSeguridad from "./routes/CamarasDeSeguridad";
import Drones from "./routes/Drones";
import MemoryDrone from "./routes/MemoryDrone";
import CamaraDeportiva from "./routes/CamaraDeportiva";
import MemoryDeportiva from "./routes/MemoryDeportiva";
import MemoryProfesional from "./routes/MemoryProfesional";
import CamaraProfesional from "./routes/CamaraProfesional";
import Videojuegos from "./routes/Videojuegos";
import MemoryVideojuegos from "./routes/MemoryVideojuegos";

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
    path: "/videojuegos",
    element: <Videojuegos />
  },
  {
    path: "/camaras",
    element: <Camaras />,
  },
  {
    path: "/camaras/camara-de-seguridad",
    element: <CamarasDeSeguridad/>
  },
  {
    path: "/camaras/dron",
    element: <Drones />
  },
  {
    path: "/camaras/camara-deportiva",
    element: <CamaraDeportiva />
  },
  {
    path: "/camaras/camara-profesional",
    element: <CamaraProfesional />
  },
  {
    path: "/camaras/dron/memoria-dron",
    element: <MemoryDrone/>
  },
  {
    path: "/camaras/camara-deportiva/memoria-camara-deportiva",
    element: <MemoryDeportiva />
  },
  {
    path: "/camaras/camara-profesional/memoria-camara-profesional",
    element: <MemoryProfesional />
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
  {
    path: "/memoria-videojuegos",
    element: <MemoryVideojuegos />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
