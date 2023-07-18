import React from "react";
import "../styles/Music.css";
import Tittle_welcome from "../components/Tittle_welcome";
import useData from "../Hooks/useData";
// import useGetInformation from "../Hooks/useGetinformation"
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import { AiOutlineSearch } from "react-icons/ai";


const Video = () => {
  const [cantidadVideos, setCantidadVideos] = useState("");
  const [calidadVideo, setCalidadVideos] = useState("");
  const information = useData();
  const navigate = useNavigate();


  useEffect(()=>{
    information.cantidadVideos = cantidadVideos;
    information.calidadVideos = calidadVideo;

  })

  const handleSeleccionarVideos = (event) => {
    setCantidadVideos(event.target.value);
  };

  const handleSeleccionarCalidad = (event) => {
    setCalidadVideos(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if((calidadVideo == "")|| (cantidadVideos == "")){
      return;
    }else{
      navigate('/memoria-video');
    }
  };

  return (
    <div className="container">
      <Header />
      <Tittle_welcome text="Memorias para Almacenamiento de Video" img='/iconos/video.svg'/>
      <form>
        <article className="question">
          <section className="text-container">
            <label htmlFor="videos" className="text-container__ask">
              ¿Cuántos videos necesitas almacenar?
            </label>
            <p className="text-container__esp">(Aproximadamente)</p>
          </section>
          <section className="form-container">
            <select
              id="videos"
              name="videos"
              value={cantidadVideos}
              onChange={handleSeleccionarVideos}
              className="vertical-scroll-select"
            >
              <option value="">Elige una opción</option>
              <option value="3">3 películas aprox</option>
              <option value="5">5 películas aprox</option>
              <option value="8">8 películas aprox</option>
              <option value="15">15 películas aprox</option>
              <option value="20">20 películas aprox</option>
            </select>
          </section>
        </article>

        <article className="question">
          <section className="text-container">
            <label htmlFor="calidad" className="text-container__ask">
              ¿En qué calidad de imágen están los videos?
            </label>
            <p className="text-container__esp">(Bitrate)</p>
          </section>
          <section className="form-container">
            <select
              id="calidad"
              name="calidad"
              value={calidadVideo}
              onChange={handleSeleccionarCalidad}
            >
              <option value="">Elige una opción</option>
              <option value="1080P">1080P (Full HD)</option>
              <option value="720P">720P (HD)</option>
              <option value="480P">480P</option>
            </select>
          </section>
        </article>
      </form>
      <Link to="/memoria-video" className="button_container" onClick={handleSubmit}>
          <AiOutlineSearch className="button-icon"/>
          <button type="submit">Encuentra mi memoria ideal</button>
        </Link>
    </div>
  )
};

export default Video;
