import React from 'react'
import { useEffect, useState } from 'react';
import Tittle_welcome from '../../components/Tittle_welcome'
import useData from '../../Hooks/useData'
import "../../styles/memory1.css";
import Header from '../../components/Header';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";



const Memory3 = () => {
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
    <div className="container">
      <Header />
      <main className='main-container'>
        <Tittle_welcome text={data.reproductorVideojuegos ? "Memorias para reproducción de videojuegos" : "Memorias para almacenamiento archivos"}/>
        <section className="memory-section">
          <div className="info-carrusel">
            <div className="info">
              <p>Te recomendamos las horizone micro sd de 32gb y 64gb para que no tengas que preocuparte por el espacio en tu celular.</p>
              <div className="memory-data">
                <div className="img-section">
                  <img className='memory-img--celular' src="src/assets/capacidades/32gb.svg" alt="" />
                  <img className='memory-img--celular' src="src/assets/capacidades/64gb.svg" alt="" />
                </div>
                <p className='memory-reference'>{data.reproductorVideojuegos ? "HORIZONE VIDEOGAME": "HORIZONE CLASS 10"}</p>
              </div>
            </div>
            <div className="carrusel">
              <AiFillCaretLeft onClick={handlePrev} className='carrusel-button-left carrusel-button'/>
              <img className='carrusel-image' src={`../src/assets/celular/${carrusel.toString()}.jpg`} alt="" />
              <AiFillCaretRight onClick={handleNext} className='carrusel-button-right carrusel-button'/>
            </div>            
          </div>
        </section>
      </main>
    </div>
  )
}

export default Memory3