import React from 'react'
import { useState } from 'react';
import useData from '../../Hooks/useData';
import Header from '../../components/Header'
import CintaDescripcion from '../../components/CintaDescripcion';
import Tittle_welcome from '../../components/Tittle_welcome';
import '../../styles/drone.css'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";


const MemoryDrone = () => {
  const [carrusel, setCarrusel]= useState(1);
  const data= useData();


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

  if(data.dronTipe != null){
    return (
      <div className='container'>
        <Header />
        <div className="main-container-element">
          <Tittle_welcome text='Memorias para Grabación de Video y Fotografía' img='/iconos/fotografia.svg'/>
          <CintaDescripcion img='/camaras-logos/dron-blanco.svg'
                            text='Drones'
          />
          <div className="drone-info-container">
            <div className="drone-memory-img__container">
              <img className='drone-memory-img' src="/capacidades/32gb.svg" alt="" />
            </div>
            <div className="drone-description">
              <p className="drone-description-text">
                La memoria ideal para tu dron <span className='bold'>{data.dronName}</span> es:
              </p>
              <div className="drone-capacity">
                <img src="/capacidades/32gb.svg" alt="" />
                <img src="/capacidades/64gb.svg" alt="" />
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
      <main className='main-container'>
        <Tittle_welcome text= "Memorias para almacenamiento de música" img='/iconos/fotografia.svg'/>
        <div>ERROR</div>
      </main>
    )
  }
}

export default MemoryDrone