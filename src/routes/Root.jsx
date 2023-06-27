import React from "react";
import Header from "../../components/Header";
import Tittle_welcome from "../../components/Tittle_welcome";
import Card from "../../components/Card";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <div className="body_container">
        <Tittle_welcome text="Bienvenido"></Tittle_welcome>
        <p>¿Para que necesitas tú memoria?</p>
        <section className="cards_container">
          <Link className="info_container" to="/music">
            <Card img="../src/assets/1_BOTON_MUSICA_OVERD.svg"></Card>
          </Link>
          <Link className="info_container" to="/video">
            <Card img="../src/assets/2_BOTON_VIDEO_OVERD.svg"></Card>
          </Link>
          <Link className="info_container" to="/music">
            <Card img="../src/assets/3_BOTON_CELULAR_OVERD.svg"></Card>
          </Link>
          <Link className="info_container" to="/music">
            <Card img="../src/assets/4_BOTON_VIDEOJUEGOS_OVERD.svg"></Card>
          </Link>
          <Link className="info_container" to="/music">
            <Card img="../src/assets/5_BOTON_FOTOGRAFIA_OVERD.svg"></Card>
          </Link>
        </section>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
