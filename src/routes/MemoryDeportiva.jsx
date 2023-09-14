import React from 'react'
import useData from '../Hooks/useData'
import { useState } from 'react';
import Header from '../components/Header'
import CintaDescripcion from '../components/CintaDescripcion';
import Tittle_welcome from '../components/Tittle_welcome';
import '../styles/drone.css'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MemoryDeportiva = () => {
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
  
    if(data.deportivaTipe != null || data.deportivaName != null){
      return (
        <div className='container'>
            <Header />
            <Tittle_welcome text='Memorias para Grabación de Video y Fotografía' img='/iconos/fotografia.svg'/>
            <CintaDescripcion img='/camaras-logos/deportiva-blanco.svg'
                                text='Cámaras Deportivas'
            />
            <div className="main-container-element main-container-element__tipe2">
              <section className="galeria">
                <div className="galeria-thumbnails">
                  <img onClick={handleThumbnail} id='thumbnail1' src="/deportiva/thumbnails/1.jpg" alt="" className={selectedThumbanil== '1' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
                  <img onClick={handleThumbnail} id='thumbnail2' src="/deportiva/thumbnails/2.jpg" alt="" className={selectedThumbanil== '2' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
                  <img onClick={handleThumbnail} id='thumbnail3' src="/deportiva/thumbnails/3.jpg" alt="" className={selectedThumbanil== '3' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
                </div>
                <img src={`/deportiva/${selectedThumbanil}.jpg`} alt="" className="galeria-img" />
              </section>
              <div className="drone-info-container">
                <div className="drone-memory-img__container">
                  <img className='drone-memory-img' src={data.deportivaName== 'Pocket 2' ? '/memorias/PRO_128gb.png' : (data.deportivaTipe== 1 ? '/memorias/PRO_256gb.png' : (data.deportivaTipe== 2 ? '/memorias/VG_64gb.png' : '/memorias/CL10_64gb.png'))} alt="" />
                </div>
                <div className="drone-description">
                  <p className="drone-description-text">
                    La memoria ideal para tu cámara <span className='bold'>{data.marcaDispositivo} </span><span className='bold'>{data.deportivaName}</span> es:
                  </p>
                  <div className="drone-capacity">
                    <img src={data.deportivaTipe== 1 ? '/capacidades/64gb.svg' : (data.deportivaTipe== 2 ? '/capacidades/32gb.svg' : '/capacidades/32gb.svg')} alt="" />
                    <img src={data.deportivaTipe== 1 ? '/capacidades/128gb.svg' : (data.deportivaTipe== 2 ? '/capacidades/64gb.svg' : '/capacidades/64gb.svg')} alt="" />
                    { (data.deportivaTipe== 1 && data.deportivaName != 'Pocket 2') && 
                    <img src="/capacidades/256gb.svg" alt="" />
                    }
                  </div>
                  <p className='memory-reference-drone'>{data.deportivaTipe== 1 ? 'HORIZONE PRO' : (data.deportivaTipe== 2 ? 'HORIZONE VIDEO GAMES' : 'HORIZONE CLASS 10')}</p>
                </div>
                <div className="carrusel-container__element">
                  <div className="carrusel-element">
                    <AiFillCaretLeft onClick={handlePrev} className='carrusel-button-left carrusel-button'/>
                    <img className='carrusel-image' src={`/deportiva/${carrusel.toString()}.jpg`} alt="" />
                    <AiFillCaretRight onClick={handleNext} className='carrusel-button-right carrusel-button'/>
                  </div>
                </div>
              </div>
            </div>
        </div>
      )
    }else{
      return (
        <main className='container'>
        <Header/>
        <Tittle_welcome text='Memorias para Grabación de Video y Fotografía' img='/iconos/fotografia.svg'/>
        <div className="error-container">
          <p className="error-text">Parece que ha ocurrido un error, vuelve a llenar el <Link to={'/camaras/camara-deportiva'}>formulario</Link>. Si el error persiste es porque no contamos con una memoria que se acomode a tus necesidades.</p>
        </div>
        </main>
    )
    }
}

export default MemoryDeportiva