import React from "react";
import { useState } from "react";
import "../styles/header.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showHeader, setShowHeadeer] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <img src="/logo_horizone_blanco.svg" alt="horizone" onClick={()=>{navigate('/')}}/>
        {/* <span className="material-symbols-outlined">menu</span> */}
        <AiOutlineMenu className="hamburguer-icon" onClick={()=>{setShowHeadeer(!showHeader)}}/>
        {showHeader &&
          <div className="header-modal__container">
            <AiOutlineClose className="icon-close" onClick={()=>{setShowHeadeer(!showHeader)}}/>
            <ul className="header-modal">
              <li>
                <Link to='/musica' className="header-modal__link" >Almacenamiento de música</Link>
              </li>
              <li>
                <Link to='/video' className="header-modal__link">Almacenamiento de video</Link>
              </li>
              <li>
                <Link to='/celular' className="header-modal__link">Expandir memoria celular/tablet</Link>
              </li>
              <li>
                <Link to='/videojuegos' className="header-modal__link">Reproducción de videojuegos</Link>
              </li>
              <li>
                <Link to='/camaras' className="header-modal__link">Grabación de video/fotografías</Link>
              </li>
            </ul>
          </div>
        }
      </div>

      <div className="header-desktop">
        <img src="/logo_horizone_blanco.svg" alt="horizone" onClick={()=>{navigate('/')}}/>
        <div className="header-desktop-links">
          <Link to='/musica' className="header-link">ALMACENAMIENTO DE MÚSICA</Link>
          <Link to='/video' className="header-link">ALMACENAMIENTO DE VIDEO</Link>
          <Link to='/celular' className="header-link">MEMORIA CELULAR/TABLET</Link>
          <Link to='/videojuegos' className="header-link">VIDEOJUEGOS</Link>
          <Link to='/camaras' className="header-link">VIDEO/ FOTOGRAFÍA</Link>
        </div>                  
      </div>
    </>
  );
};

export default Header;
