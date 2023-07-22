import React from 'react'
import { useState, useEffect } from 'react';
import useData from '../Hooks/useData';
import { Link, useNavigate } from 'react-router-dom';
import CintaDescripcion from '../components/CintaDescripcion'
import { AiOutlineSearch } from "react-icons/ai";
import Header from '../components/Header';
import Tittle_welcome from '../components/Tittle_welcome';

const Drones = () => {
  const [droneTipe, setDroneTipe]= useState(null);
  const [droneName, setDroneName]= useState(null);
  const data = useData();
  const navigate = useNavigate();

    useEffect(()=>{
        data.dronTipe= droneTipe;
        data.dronName= droneName;
    });

    const handleSelect = (e)=>{
        if(e.target.value == "1"){
          setDroneTipe(1);
        }else if (e.target.value == "2"){
          setDroneTipe(2);
        }
        const selectedOptionText = e.target.options[e.target.selectedIndex].text;
        setDroneName(selectedOptionText);
    }
    const handleSubmit = ()=>{
        if(droneTipe == null){
          return;
        }else if(droneTipe != null){
          navigate('/camaras/dron/memoria-dron');
        }

      }

  return (
    <div className='container'>
    <Header />
    <Tittle_welcome text='Memorias para Grabación de Video y Fotografía' img='/iconos/fotografia.svg'/>
    <CintaDescripcion img='/camaras-logos/dron-blanco.svg'
                        text='Drones'
    /> 
    <div className="main-container-element">
      
      <article className="question">
          <section className="text-container">
            <label htmlFor="canciones" className="text-container__ask-drone">
              Elige tu <br></br>modelo de Dron
            </label>
          </section>
          <section className="form-container">
            <select
              onChange={handleSelect}
              className="vertical-scroll-select"
            >
              <option value="">Elige una opción</option>
              <option value="2">DRONES AMATEUR</option>
              <option value="1">DJI MINI 2</option>
              <option value="1">DJI AIR 2 S</option>
              <option value="1">DJI MINI 2</option>
              <option value="1">DJI MINI SE</option>
              <option value="1">DJI AVATA</option>
              <option value="1">DJI MAVIC 3 CLASSIC</option>
              <option value="1">DJI MAVIC 3</option>
              <option value="1">DJI FPV</option>
              <option value="2">DJI PHANTOM 4 RTK</option>
              <option value="2">DJI PHANTOM 4 ADVANCED</option>
            </select>
          </section>
        </article>
    </div>
    <div className="button-box-drone">
      <Link className="button_container drone-button" onClick={handleSubmit}>
      <AiOutlineSearch className="button-icon"/>
      <button type="submit">Encuentra mi memoria ideal</button>
      </Link>
    </div>
  </div>
  )
}

export default Drones