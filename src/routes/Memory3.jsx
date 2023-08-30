import React from 'react'
import { useState } from 'react';
import Tittle_welcome from '../components/Tittle_welcome'
import useData from '../Hooks/useData'
import "../styles/memory1.css";
import Header from '../components/Header';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";



const Memory3 = () => {
  const data= useData();
  const [carrusel, setCarrusel]= useState(1);

  const [selectedThumbanil, setSelectedThumbnail]= useState("1");



  const handlePrev =()=>{
    if(carrusel == 1){
      setCarrusel(3);
    }else if(carrusel != 1){
      setCarrusel(carrusel - 1);
    }
  };

  const handleNext =()=>{
    if(carrusel == 3){
      setCarrusel(1);
    }else if(carrusel != 3){
      setCarrusel(carrusel + 1);
    }
  };

  const handleThumbnail= (e)=>{
    console.log(e.target);
    if(e.target.id == 'thumbnail1'){
      setSelectedThumbnail("1");
    }else if(e.target.id == 'thumbnail2'){;
      setSelectedThumbnail("2");
    }else if(e.target.id == 'thumbnail3'){
      setSelectedThumbnail("3");
    }
  };

  return (
    <div className="container">
      <Header />
      <Tittle_welcome text={data.reproductorVideojuegos ? "Memorias para reproducción de videojuegos" : "Memorias para almacenamiento archivos"} img='/iconos/celular.svg'/>
      <main className='main-container'>
        <section className="galeria">
          <div className="galeria-thumbnails">
            <img onClick={handleThumbnail} id='thumbnail1' src="/celular/thumbnails/1.jpg" alt="" className={selectedThumbanil== '1' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
            <img onClick={handleThumbnail} id='thumbnail2' src="/celular/thumbnails/2.jpg" alt="" className={selectedThumbanil== '2' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
            <img onClick={handleThumbnail} id='thumbnail3' src="/celular/thumbnails/3.jpg" alt="" className={selectedThumbanil== '3' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
          </div>
          <img src={`/celular/${selectedThumbanil}.jpg`} alt="" className="galeria-img" />
        </section>
        <section className="memory-section">
          <div className="img">
            <img className='memory-img' src={data.reproductorVideojuegos ? "/memorias/VG_64gb.png": "/memorias/CL10_64gb.png"} alt="" />
          </div>
          <div className="info-carrusel">
            <div className="info">
              <p>Te recomendamos las <span className="bold">horizone micro sd de 32gb y 64gb</span> para que no tengas que preocuparte por el espacio en tu celular.</p>
              <div className="memory-data">
                <div className="img-section">
                  <img className='memory-img--celular' src="/capacidades/32gb.svg" alt="" />
                  <img className='memory-img--celular' src="/capacidades/64gb.svg" alt="" />
                </div>
                <p className='memory-reference'>{data.reproductorVideojuegos ? "HORIZONE VIDEOGAME": "HORIZONE CLASS 10"}</p>
              </div>
            </div>
            <div className="carrusel">
              <AiFillCaretLeft onClick={handlePrev} className='carrusel-button-left carrusel-button'/>
              <img className='carrusel-image' src={`/celular/${carrusel.toString()}.jpg`} alt="" />
              <AiFillCaretRight onClick={handleNext} className='carrusel-button-right carrusel-button'/>
            </div>            
          </div>
        </section>
      </main>
    </div>
  )
}

export default Memory3