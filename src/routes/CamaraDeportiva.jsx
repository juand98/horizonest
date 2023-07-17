import React from 'react'
import useData from '../../Hooks/useData'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Tittle_welcome from '../../components/Tittle_welcome'
import CintaDescripcion from '../../components/CintaDescripcion'
import AcordionLink from '../../components/AcordionLink'
import AcordionLinkItem from '../../components/AcordionLinkItem'
import {AiOutlineRight } from "react-icons/ai";



const CamaraDeportiva = () => {
  const data= useData();
  const navigate= useNavigate();

  const handleClick =()=>{
    navigate('/camaras/camara-deportiva/memoria-camara-deportiva')
  };

  const handleContext= (e)=>{
    data.deportivaTipe= parseInt(e.currentTarget.getAttribute('value'));
    data.deportivaName= e.currentTarget.getAttribute('name');
  };

  return (
    <div className='container'>
      <Header />
      <div className="main-container-element">
        <Tittle_welcome text='Memorias para Grabación de Video y Fotografía' img='/iconos/fotografia.svg'/>
        <CintaDescripcion img='/camaras-logos/deportiva-blanco.svg'
                          text='Cámaras Deportivas'
        />
        <div className="text-container-element">
          <label className="text-container__ask-element-deportiva">
              Elige tu marca y modelo de cámara deportiva
          </label>
        </div>
        <section className="acordion-section">
          <AcordionLink title='GO PRO'>
            <AcordionLinkItem value='1' tipe='1'>Hero 11 Black</AcordionLinkItem>
            <AcordionLinkItem value='1' tipe='1'>Hero 10 Black</AcordionLinkItem>
            <AcordionLinkItem value='1' tipe='1'>Hero 10 Black Bones</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='1'>Hero 9</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='1'>Hero 8</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='1'>Hero 6</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='1'>Hero 5</AcordionLinkItem>
            <AcordionLinkItem value='3' tipe='1'>Hero 4</AcordionLinkItem>
            <AcordionLinkItem value='3' tipe='1'>Hero Session</AcordionLinkItem>
            <AcordionLinkItem value='3' tipe='1'>Hero 3 y anteriores</AcordionLinkItem>
          </AcordionLink>

          <AcordionLink title='DJI'>
            <AcordionLinkItem value='1' tipe='1'>Osmo Action</AcordionLinkItem>
            <AcordionLinkItem value='1' tipe='1'>Action 2</AcordionLinkItem>
            <AcordionLinkItem value='1' tipe='1'>Osmo Action 3</AcordionLinkItem>
          </AcordionLink>

          <div value='3' name='cámara genérica' onMouseOver={handleContext} onClick={handleClick} className="acordion-item">
            <div className="acordion-title">
              <p className="acordion-text">GENÉRICA</p>
              <AiOutlineRight />
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default CamaraDeportiva