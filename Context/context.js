import { createContext } from "react";

const context = createContext({
  cantidadCanciones: null,
  calidadCanciones: null,
  cantidadVideos: null,
  calidadVideos: null,
  reproductorVideojuegos: null,
});

export default context;
