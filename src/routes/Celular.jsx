import React, { useEffect, useState } from 'react'
import useData from '../Hooks/useData';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Tittle_welcome from '../components/Tittle_welcome';
import { AiOutlineSearch } from "react-icons/ai";


const Celular = () => {
  const [esReproductor, setEsReproductor]= useState(null);
  const data = useData();
  const navigate = useNavigate();

  useEffect(()=>{
    data.reproductorVideojuegos= esReproductor;
  });

  const handleSelect = (e)=>{
    if(e.target.value == "almacenamiento"){
      setEsReproductor(false);
    }else if (e.target.value == "reproductor"){
      setEsReproductor(true);
    }
  }

  const handleSubmit = ()=>{
    if(esReproductor == null){
      return;
    }else{
      navigate('/memoria-celular');
    }
  }

  return(
    <div className="container">
      <Header />
      <Tittle_welcome text="Memorias para celular o tablet" img='/iconos/celular.svg'/>
      <form>
        <article className="question">
          <section className="text-container">
            <label htmlFor="canciones" className="text-container__ask">
              ¿Para qué quieres expandir la memoria de tu celular o tablet?
            </label>
          </section>
          <section className="form-container">
            <select
              onChange={handleSelect}
              className="vertical-scroll-select"
            >
              <option value="">Elige una opción</option>
              <option value="almacenamiento">Almacenamiento de archivos</option>
              <option value="reproductor">Reproducción de videojuegos</option>
            </select>
          </section>
        </article>
      </form>
      <Link className="button_container celular-button" onClick={handleSubmit}>
          <AiOutlineSearch className="button-icon"/>
          <button type="submit">Encuentra mi memoria ideal</button>
        </Link>
    </div>
  )
}

export default Celular