import React from "react";
import Header from "../../components/Header";
import Tittle_welcome from "../../components/Tittle_welcome";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import useData from "../../Hooks/useData";
import context from "../../Context/context";

const Root = () => {

  const information = useData();

  return (
    <>
      <context.Provider value= {information}>
        <main className="main-container-root">
          <Header />
          <div className="body_container">
            {/* <Tittle_welcome text="Bienvenido" img='/iconos/blanco.svg'/> */}
            <img className='home-logo' src="/logo_horizone_blanco.svg" alt="" />
            <p className="question">¿Para qué necesitas tu memoria?</p>
            <section className="cards_container">
              <Link className="info_container" to="/musica">
                <Card img="/1_BOTON_MUSICA_OVERD.svg"></Card>
              </Link>
              <Link className="info_container" to="/video">
                <Card img="/2_BOTON_VIDEO_OVERD.svg"></Card>
              </Link>
              <Link className="info_container" to="/celular">
                <Card img="/3_BOTON_CELULAR_OVERD.svg"></Card>
              </Link>
              <Link className="info_container" to="/videojuegos">
                <Card img="/4_BOTON_VIDEOJUEGOS_OVERD.svg"></Card>
              </Link>
              <Link className="info_container" to="/camaras">
                <Card img="/5_BOTON_FOTOGRAFIA_OVERD.svg"></Card>
              </Link>
            </section>
          </div>
        </main>
      </context.Provider>
    </>
  );
};

export default Root;
