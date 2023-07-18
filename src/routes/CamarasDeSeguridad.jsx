import React from 'react';
import { useState } from 'react';
import CintaDescripcion from '../components/CintaDescripcion';
import Tittle_welcome from '../components/Tittle_welcome';
import '../styles/memory2.css';
import Header from '../components/Header';
import { AiOutlineDown, AiOutlineRight, AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";


const AcordionItem = (props) => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="acordion-item">
      <div className="acordion-title" onClick={toggleAccordion}>
        <p className="acordion-text">{props.title}</p>
        {isActive ? <AiOutlineDown /> : <AiOutlineRight />}
      </div>
      {isActive && 
      <div className="acordion-content">
        <img className='acordion-img' src="/camaras-logos/vigilancia-blanco.svg" alt="" />
        <div className="acordion-content__description">
          <p className="acordion-content__text">La memoria ideal para grabar entre <span className='bold'>{props.dias} días</span> es:</p>
          <img src={`/capacidades/${props.gb}gb.svg`} alt="" className="acordion-content__capacity" />
          <p className="acordion-content__reference">HORIZONE CLASS 10 / 2.0</p>
        </div>
      </div>
      }
    </div>
  );
};

const CamarasDeSeguridad = () => {
  const [carrusel, setCarrusel]= useState(1);
  const [selectedThumbanil, setSelectedThumbnail]= useState("1");


  const handlePrev =()=>{
    if(carrusel == 1){
      setCarrusel(2);
    }else if(carrusel != 1){
      setCarrusel(carrusel - 1);
    }
  };

  const handleNext =()=>{
    if(carrusel == 2){
      setCarrusel(1);
    }else if(carrusel != 2){
      setCarrusel(carrusel + 1);
    }
  };

  const handleThumbnail= (e)=>{
    console.log(e.target);
    if(e.target.id == 'thumbnail1'){
      setSelectedThumbnail("1");
    }else if(e.target.id == 'thumbnail2'){;
      setSelectedThumbnail("2");
    }
  };

  return (
    <div className='container'>
      <Header />
      <Tittle_welcome text='Memorias para Grabación de Video y Fotografía' img='/iconos/fotografia.svg'/>
      <CintaDescripcion img='/camaras-logos/vigilancia-blanco.svg'
                          text='Cámaras de Vigilancia o de Vehículos'
      />
      <div className="main-container-element">
        <section className="galeria">
          <div className="galeria-thumbnails">
            <img onClick={handleThumbnail} id='thumbnail1' src="/vigilancia/thumbnails/1.jpg" alt="" className={selectedThumbanil== '1' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
            <img onClick={handleThumbnail} id='thumbnail2' src="/vigilancia/thumbnails/2.jpg" alt="" className={selectedThumbanil== '2' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
          </div>
          <img src={`/vigilancia/${selectedThumbanil}.jpg`} alt="" className="galeria-img" />
        </section>
        <div className="text-container-element">
          <label className="text-container__ask-element">
              ¿Cuántos días quieres grabar?
          </label>
          <p className="text-container__esp">(Aproximadamente)</p>
        </div>
        <section className="acordion-section">
          <AcordionItem title='14 A 16 DÍAS' dias='14 a 16' gb='32'/>
          <AcordionItem title='28 A 30 DÍAS' dias='28 a 30' gb='64'/>
        </section>
        <div className="carrusel-container__element">
          <div className="carrusel-element">
            <AiFillCaretLeft onClick={handlePrev} className='carrusel-button-left carrusel-button'/>
            <img className='carrusel-image' src={`/vigilancia/${carrusel.toString()}.jpg`} alt="" />
            <AiFillCaretRight onClick={handleNext} className='carrusel-button-right carrusel-button'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CamarasDeSeguridad