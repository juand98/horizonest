import React, { useEffect, useState } from "react";
import "../styles/Music.css";
import Header from "../components/Header";
import Tittle_welcome from "../components/Tittle_welcome";
import useData from "../Hooks/useData";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Music = () => {
  const [cantidadCanciones, setCantidadCanciones] = useState("");
  const [calidadAudio, setCalidadAudio] = useState("");
  const information = useData();
  const navigate = useNavigate();


  useEffect(()=>{
    information.cantidadCanciones = cantidadCanciones;
    information.calidadCanciones = calidadAudio;

  })

  const handleSeleccionarCanciones = (event) => {
    setCantidadCanciones(event.target.value);
  };

  const handleSeleccionarCalidad = (event) => {
    setCalidadAudio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if((calidadAudio == "")|| (cantidadCanciones == "")){
      return;
    }else{
      navigate('/memoria-musica');
    }
  };

  return (
    <div className="container">
      <Header />
      <Tittle_welcome text="Memorias para Almacenamiento de Música" img='/iconos/musica.svg'/>
      <form className="form">
        <article className="question">
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
              <option value="">Elige una opción</option>
              <option value="1000">+1.000 Canciones</option>
              <option value="2000">+2.000 Canciones</option>
              <option value="4500">+4.500 Canciones</option>
              <option value="9000">+9.000 Canciones</option>
              <option value="18000">+18.000 Canciones</option>
            </select>
          </section>
        </article>

        <article className="question">
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
              <option value="">Elige una opción</option>
              <option value="Alta">Alta (Hasta 320 kbps)</option>
              <option value="Media">Media (Hasta 160 kbps)</option>
              <option value="Baja">Baja (Hasta 64 Mbps)</option>
            </select>
          </section>
        </article>
      </form>
      <Link to="/memoria-musica" className="button_container" onClick={handleSubmit}>
          <AiOutlineSearch className="button-icon"/>
          <button type="submit">Encuentra mi memoria ideal</button>
      </Link>
    </div>
  );
};

export default Music;
