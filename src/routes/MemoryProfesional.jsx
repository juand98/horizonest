import React, { useEffect } from 'react'
import useData from '../Hooks/useData'
import { useState } from 'react';
import Header from '../components/Header'
import CintaDescripcion from '../components/CintaDescripcion';
import Tittle_welcome from '../components/Tittle_welcome';
import '../styles/drone.css'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const MemoryProfesional = () => {
  const data= useData();
  const [carrusel, setCarrusel]= useState(1);
  const [memory, setMemory] = useState("");

  const [selectedThumbanil, setSelectedThumbnail]= useState("1");


  useEffect(()=>{
    if(data.profesionalName == 'Alpha 7'){
      setMemory("PRO_64gb");
    }else if(data.profesionalName == 'Alpha 7R II'){
      setMemory("PRO_128gb");
    }else if(data.profesionalTipe== 1){
      setMemory("VG_64gb");
    }else if(data.profesionalTipe== 2){
      setMemory("PRO_256gb");
    }
  })


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

  if(data.profesionalName != null || data.profesionalTipe!= null){
    return (
      <div className='container'>
          <Header />
          <Tittle_welcome text='Memorias para Grabación de Video y Fotografía' img='/iconos/fotografia.svg'/>
          <CintaDescripcion img='/camaras-logos/profesional-blanco.svg'
                              text='Cámaras Profesionales'
          />
          <div className="main-container-element main-container-element__tipe2">
            <section className="galeria">
              <div className="galeria-thumbnails">
                <img onClick={handleThumbnail} id='thumbnail1' src="/profesional/thumbnails/1.jpg" alt="" className={selectedThumbanil== '1' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
                <img onClick={handleThumbnail} id='thumbnail2' src="/profesional/thumbnails/2.jpg" alt="" className={selectedThumbanil== '2' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
                <img onClick={handleThumbnail} id='thumbnail3' src="/profesional/thumbnails/3.jpg" alt="" className={selectedThumbanil== '3' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
              </div>
              <img src={`/profesional/${selectedThumbanil}.jpg`} alt="" className="galeria-img" />
            </section>
            
            <div className="drone-info-container">
              <div className="drone-memory-img__container">
                <img className='drone-memory-img' src={`/memorias/${memory}.png`} alt="" />
              </div>
              <div className="drone-description">
                <p className="drone-description-text">
                  La memoria ideal para tu cámara <span className='bold'>{data.profesionalName}</span> es:
                </p>
                <div className="drone-capacity">
                  <img src={data.profesionalTipe== 1 ? '/capacidades/32gb.svg' : '/capacidades/64gb.svg'} alt="" />
                  {
                    data.profesionalName != 'Alpha 7' && 
                    <img src={data.profesionalTipe== 1 ? '/capacidades/64gb.svg' : '/capacidades/128gb.svg'} alt="" />
                  }
                  {
                    (data.profesionalName != 'Alpha 7' && data.profesionalTipe == 2 && data.profesionalName!= 'Alpha 7R II') && 
                    <img src="/capacidades/256gb.svg" alt="" />
                  }
                </div>
                <p className='memory-reference-drone'>{data.profesionalTipe== 1 ? 'HORIZONE VIDEO GAME' : 'HORIZONE PRO'}</p>
              </div>
              <div className="carrusel-container__element">
                <div className="carrusel-element">
                  <AiFillCaretLeft onClick={handlePrev} className='carrusel-button-left carrusel-button'/>
                  <img className='carrusel-image' src={`/profesional/${carrusel.toString()}.jpg`} alt="" />
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
          <p className="error-text">Parece que ha ocurrido un error, vuelve a llenar el <a href='/camaras/camara-profesional'>formulario</a>. Si el error persiste es porque no contamos con una memoria que se acomode a tus necesidades.</p>
        </div>
      </main>
  )
  }
}

export default MemoryProfesional