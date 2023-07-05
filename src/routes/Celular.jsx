import React, { useEffect, useState } from 'react'
import useData from '../../Hooks/useData';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Tittle_welcome from '../../components/Tittle_welcome';
import { AiOutlineSearch } from "react-icons/ai";


const Celular = () => {
  const [esReproductor, setEsReproductor]= useState(null);
  const data = useData();
  const navigate = useNavigate();

  useEffect(()=>{
    data.reproductorVideojuegos= esReproductor;
    console.log('render');
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
      <form>
        <Tittle_welcome text="Memorias para celular o tablet" />
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

        <Link to="/memoria-celular" className="button_container" onClick={handleSubmit}>
          <AiOutlineSearch className="button-icon"/>
          <button type="submit">Encuentra mi memoria ideal</button>
        </Link>
      </form>
    </div>
  )
}

export default Celular