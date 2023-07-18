import React from 'react'
import useData from '../Hooks/useData'
import { useState } from 'react';
import Header from '../components/Header'
import CintaDescripcion from '../components/CintaDescripcion';
import Tittle_welcome from '../components/Tittle_welcome';
import '../styles/drone.css'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const MemoryDeportiva = () => {
    const data= useData();
    const [carrusel, setCarrusel]= useState(1);
  
  
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
  return (
    <div className='container'>
        <Header />
        <div className="main-container-element">
          <Tittle_welcome text='Memorias para Grabación de Video y Fotografía' img='/iconos/fotografia.svg'/>
          <CintaDescripcion img='/camaras-logos/deportiva-blanco.svg'
                            text='Cámaras Deportivas'
          />
          <div className="drone-info-container">
            <div className="drone-memory-img__container">
              <img className='drone-memory-img' src="/capacidades/64gb.svg" alt="" />
            </div>
            <div className="drone-description">
              <p className="drone-description-text">
                La memoria ideal para tu <span className='bold'>{data.deportivaName}</span> es:
              </p>
              <div className="drone-capacity">
                <img src="/capacidades/32gb.svg" alt="" />
                <img src="/capacidades/64gb.svg" alt="" />
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
}

export default MemoryDeportiva