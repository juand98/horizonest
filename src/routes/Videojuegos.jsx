import React from 'react'
import { useState, useEffect } from 'react';
import Header from "../../components/Header";
import Tittle_welcome from "../../components/Tittle_welcome";
import useData from "../../Hooks/useData";
import useGetInformation from "../../Hooks/useGetinformation"
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Videojuegos = () => {

  const [consola, setConsola] = useState("");
  const [cantidadJuegos, setCantidadjuegos] = useState("");
  const [formTipe, setFormTipe] = useState(null);
  const data = useData();
  const navigate = useNavigate();


  useEffect(()=>{
    data.consolaVideojuegos = consola;
    data.cantidadVideojuegos = cantidadJuegos;

  })

  const handleSeleccionarConsola = (event) => {
    if(event.target.options[event.target.selectedIndex].getAttribute('tipe')== '1'){
        setFormTipe(1);
    }else if(event.target.options[event.target.selectedIndex].getAttribute('tipe')== '2'){
        setFormTipe(2);
    }
    setConsola(event.target.value);
  };

  const handleSeleccionarCantidad = (event) => {
    setCantidadjuegos(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if((consola == "")|| (cantidadJuegos == "")){
      return;
    }else{
      navigate('/memoria-videojuegos');
    }
  };

  return (
    <div className="container">
      <Header />
      <Tittle_welcome text="Memorias para almacenamiento de Videojuegos (En consola)" img='/iconos/videojuegos.svg'/>
      <form>
        <article className="question">
          <section className="text-container">
            <label htmlFor="canciones" className="text-container__ask">
              Elige tu consola
            </label>
          </section>
          <section className="form-container">
            <select
              id="canciones"
              name="canciones"
              value={consola}
              onChange={handleSeleccionarConsola}
              className="vertical-scroll-select"
            >
              <option value="">Elige una opción</option>
              <option tipe='1' value="PSP">PSP</option>
              <option tipe='1' value="PSP Go">PSP Go</option>
              <option tipe='1' value="PSVITA">PSVITA</option>
              <option tipe='2' value="Nintendo 3DS">Nintendo 3DS</option>
              <option tipe='2' value="Nintendo Switch">Nintendo Switch</option>
              <option tipe='2' value="PS2">PS2</option>
            </select>
          </section>
        </article>

        {formTipe && 
        <article className="question">
            <section className="text-container">
            <label htmlFor="calidad" className="text-container__ask">
                ¿Cuántos videojuegos quieres almacenar?
            </label>
            <p className="text-container__esp">(Aproximadamente)</p>
            </section>
            <section className="form-container">
            <select
                id="calidad"
                name="calidad"
                value={cantidadJuegos}
                onChange={handleSeleccionarCantidad}
            >
                <option value="">Elige una opción</option>
                <option value={formTipe== '1' ? '24 a 48 juegos' : '8 a 16 juegos'} >{formTipe== '1' ? '24 a 48 juegos' : '8 a 16 juegos'}</option>
                <option value={formTipe== '1' ? '48 a 96 juegos' : '16 a 32 juegos'} >{formTipe== '1' ? '48 a 96 juegos' : '16 a 32 juegos'}</option>
                <option value={formTipe== '1' ? '96 a 190 juegos' : '32 a 64 juegos'} >{formTipe== '1' ? '96 a 190 juegos' : '32 a 64 juegos'}</option>
            </select>
            </section>
        </article>
        }
      </form>
      {formTipe &&
        <Link to="/memoria-musica" className="button_container" onClick={handleSubmit}>
            <AiOutlineSearch className="button-icon"/>
            <button type="submit">Encuentra mi memoria ideal</button>
        </Link>
        }
    </div>
  )
}

export default Videojuegos  