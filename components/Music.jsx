/* import React from "react";
import "../styles/Music.css";
import Header from "./Header";
import Tittle_welcome from "./Tittle_welcome";

const Music = () => {
  return (
    <div className="container">
      <Header />
      <Tittle_welcome text="Memorias para almacenamiento de musica" />
      <section className="text-container">
        <p className="text-container__ask">
          ¿Cuántas canciones necesitas almacenar?
        </p>
        <p className="text-container__esp">(Aproximadamente)</p>
      </section>
      <section className="form-container">
        <select name="canciones" id="">
          <option value="+1000 Canciones">+1000 Canciones</option>
          <option value="+2.000 Canciones">+2.000 Canciones</option>
          <option value="+4.500 Canciones">+4.500 Canciones</option>
          <option value="+9.000 Canciones">+9.000 Canciones</option>
          <option value="+18.000 Canciones">+18.000 Canciones</option>
        </select>
      </section>
      <section className="text-container">
        <p className="text-container__ask">
          ¿En que calidad de audio están las canciones?
        </p>
        <p className="text-container__esp">(Bitrate)</p>
      </section>
      <section className="form-container">
        <select name="calidad" id="">
          <option value="Alta">Alta (Hasta 320 kbps)</option>
          <option value="Media">Media (Hasta 160 kbps)</option>
          <option value="Baja">Baja (Hasta 64 Mbps)</option>
        </select>
      </section>
      <section className="button_container">
        <img src="" alt="Logo lupa" />
        <button type="submit">Encuentra mi memoria memoria ideal</button>
      </section>
    </div>
  );
};

export default Music;
 */

import React, { useState } from "react";
import "../styles/Music.css";
import Header from "./Header";
import Tittle_welcome from "./Tittle_welcome";
import useData from "../Hooks/useData";

const Music = () => {
  const [cantidadCanciones, setCantidadCanciones] = useState("");
  const [calidadAudio, setCalidadAudio] = useState("");
  const information = useData();

  const handleSeleccionarCanciones = (event) => {
    setCantidadCanciones(event.target.value);
  };

  const handleSeleccionarCalidad = (event) => {
    setCalidadAudio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    information.cantidad = cantidadCanciones;
    information.calidad = calidadAudio;

    // Lógica adicional para manejar el envío del formulario
  };

  return (
    <div className="container">
      <Header />
      <Tittle_welcome text="Memorias para almacenamiento de musica" />

      <form onSubmit={handleSubmit}>
        <section className="text-container">
          <label htmlFor="canciones" className="text-container__ask">
            ¿Cuántas canciones necesitas almacenar?
          </label>
          <p className="text-container__esp">(Aproximadamente)</p>
        </section>
        <section className="form-container">
          <select
            id="canciones"
            name="canciones"
            value={cantidadCanciones}
            onChange={handleSeleccionarCanciones}
            className="vertical-scroll-select"
          >
            <option value="">Elije una opción</option>
            <option value="+1000 Canciones">+1.000 Canciones</option>
            <option value="+2.000 Canciones">+2.000 Canciones</option>
            <option value="+4.500 Canciones">+4.500 Canciones</option>
            <option value="+9.000 Canciones">+9.000 Canciones</option>
            <option value="+18.000 Canciones">+18.000 Canciones</option>
          </select>
        </section>

        <section className="text-container">
          <label htmlFor="calidad" className="text-container__ask">
            ¿En qué calidad de audio están las canciones?
          </label>
          <p className="text-container__esp">(Bitrate)</p>
        </section>
        <section className="form-container">
          <select
            id="calidad"
            name="calidad"
            value={calidadAudio}
            onChange={handleSeleccionarCalidad}
          >
            <option value="">Elije una opción</option>
            <option value="Alta">Alta (Hasta 320 kbps)</option>
            <option value="Media">Media (Hasta 160 kbps)</option>
            <option value="Baja">Baja (Hasta 64 Mbps)</option>
          </select>
        </section>

        <section className="button_container">
          <img src="" alt="Logo lupa" />
          <button type="submit">Encuentra mi memoria ideal</button>
        </section>
      </form>
    </div>
  );
};

export default Music;
