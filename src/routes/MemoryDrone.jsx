import React from 'react'
import { useState } from 'react';
import useData from '../Hooks/useData';
import Header from '../components/Header'
import CintaDescripcion from '../components/CintaDescripcion';
import Tittle_welcome from '../components/Tittle_welcome';
import '../styles/drone.css'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';


const MemoryDrone = () => {
  const [carrusel, setCarrusel]= useState(1);
  const data= useData();
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

  if(data.dronTipe != null){
    return (
      <div className='container'>
        <Header />
        <Tittle_welcome text='Memorias para Grabación de Video y Fotografía' img='/iconos/fotografia.svg'/>
        <CintaDescripcion img='/camaras-logos/dron-blanco.svg'
                            text='Drones'
        />
        <div className="main-container-element main-container-element__tipe2">
          <section className="galeria">
            <div className="galeria-thumbnails">
              <img onClick={handleThumbnail} id='thumbnail1' src="/dron/thumbnails/1.jpg" alt="" className={selectedThumbanil== '1' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
              <img onClick={handleThumbnail} id='thumbnail2' src="/dron/thumbnails/2.jpg" alt="" className={selectedThumbanil== '2' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
              <img onClick={handleThumbnail} id='thumbnail3' src="/dron/thumbnails/3.jpg" alt="" className={selectedThumbanil== '3' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
            </div>
            <img src={`/dron/${selectedThumbanil}.jpg`} alt="" className="galeria-img" />
          </section>
          <div className="drone-info-container">
            <div className="drone-memory-img__container">
              <img className='drone-memory-img' src={data.dronTipe== 1 ? '/memorias/PRO_256gb.png' : '/memorias/VG_64gb.png'} alt="" />
            </div>
            <div className="drone-description">
              <p className="drone-description-text">
                La memoria ideal para tu dron <span className='bold'>{data.dronName}</span> es:
              </p>
              <div className="drone-capacity">
                <img src={data.dronTipe== 1 ? '/capacidades/64gb.svg' : '/capacidades/32gb.svg'} alt="" />
                <img src={data.dronTipe== 1 ? '/capacidades/128gb.svg' : '/capacidades/64gb.svg'} alt="" />
                {(data.dronTipe== 1) && 
                <img src="/capacidades/256gb.svg" alt="" />
                }
              </div>
              <p className='memory-reference-drone'>{data.dronTipe== 1 ? 'HORIZONE PRO' : 'HORIZONE VIDEOGAMES'}</p>
            </div>
            <div className="carrusel-container__element">
              <div className="carrusel-element">
                <AiFillCaretLeft onClick={handlePrev} className='carrusel-button-left carrusel-button'/>
                <img className='carrusel-image' src={`/dron/${carrusel.toString()}.jpg`} alt="" />
                <AiFillCaretRight onClick={handleNext} className='carrusel-button-right carrusel-button'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }else if(data.dronTipe == null){
    return (
      <main className='container'>
        <Header/>
        <Tittle_welcome text='Memorias para Grabación de Video y Fotografía' img='/iconos/fotografia.svg'/>
        <div className="error-container">
          <p className="error-text">Parece que ha ocurrido un error, vuelve a llenar el <Link to={'/camaras/dron'}>formulario</Link>. Si el error persiste es porque no contamos con una memoria que se acomode a tus necesidades.</p>
        </div>
        </main>
    )
  }
}

export default MemoryDrone