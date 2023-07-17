import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Tittle_welcome from '../../components/Tittle_welcome'
import CamaraCard from '../../components/CamaraCard'

const Camaras = () => {
  return (
    <>
        <main className="main-container-root">
          <Header />
          <Tittle_welcome text="Memorias para Gabación de Video y Fotografía" img='/iconos/fotografia.svg' />
          <div className="body_container">
            <p className='question'>¿Qué dispositivo de grabación utilizas?</p>
            <section className="cards_container__camaras">
              <Link className="info_container" to="/camaras/camara-de-seguridad">
                <CamaraCard img= '/camaras-logos/vigilancia.svg'
                            text= 'Cámara de Vigilancia o de Vehículo'
                />
              </Link>
              <Link className="info_container" to="/camaras/dron">
                <CamaraCard img= '/camaras-logos/dron.svg'
                            text= 'Dron'
                />
              </Link>
              <Link className="info_container" to="/camaras/camara-deportiva">
                <CamaraCard img= '/camaras-logos/deportiva.svg'
                            text= 'Cámara Deportiva'
                />
              </Link>
              <Link className="info_container" to="/camaras/camara-profesional">
                <CamaraCard img= '/camaras-logos/profesional.svg'
                            text= 'Cámara Profesional'
                />
              </Link>
            </section>
          </div>
        </main>
    </>
  )
}

export default Camaras