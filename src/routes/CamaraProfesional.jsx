import React from 'react'
import Header from '../components/Header'
import Tittle_welcome from '../components/Tittle_welcome'
import CintaDescripcion from '../components/CintaDescripcion'
import AcordionLink from '../components/AcordionLink'
import AcordionLinkItem from '../components/AcordionLinkItem'

const CamaraProfesional = () => {

  return (
    <div className='container'>
      <Header />
      <Tittle_welcome text='Memorias para Grabación de Video y Fotografía' img='/iconos/fotografia.svg'/>
      <CintaDescripcion img='/camaras-logos/profesional-blanco.svg'
                          text='Cámaras Profesionales'
      />
      <div className="main-container-element">
        <div className="text-container-element">
          <label className="text-container__ask-element-deportiva">
              Elige tu marca y modelo de cámara deportiva
          </label>
        </div>
        <section className="acordion-section acordion-section__tipe2">
          <AcordionLink title='SONY'>
            <AcordionLinkItem value='1' tipe='2' >Semi Profesional</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2' >ZV - 1F</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Alpha A6400</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Alpha A6600</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Alpha 7</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Alpha 7 II</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Alpha 7R II</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Alpha 7 III</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Alpha 7R III</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Alpha 7 IV</AcordionLinkItem>
          </AcordionLink>

          <AcordionLink title='CANON'>
            <AcordionLinkItem value='1' tipe='2' >Semi Profesional</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Serie 5D Mark 4</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Serie 6D Mark 2</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Serie 6D Mark 1</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>EOS M50</AcordionLinkItem>
            <AcordionLinkItem value='1' tipe='2'>EOS Rebel T1 y T1i</AcordionLinkItem>
            <AcordionLinkItem value='1' tipe='2'>EOS Rebel T2 y T2i</AcordionLinkItem>
            <AcordionLinkItem value='1' tipe='2'>EOS Rebel T3 y T3i</AcordionLinkItem>
            <AcordionLinkItem value='1' tipe='2'>EOS Rebel T4i</AcordionLinkItem>
            <AcordionLinkItem value='1' tipe='2'>EOS Rebel T5 y T5i</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>EOS Rebel T6 y T6i</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>EOS Rebel T7i</AcordionLinkItem>
          </AcordionLink>
 
          <AcordionLink title='NIKON'>
            <AcordionLinkItem value='1' tipe='2' >Semi Profesional</AcordionLinkItem>
            <AcordionLinkItem value='1' tipe='2'>Serie D3500</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Serie D5300</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Serie D7500</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Serie D810</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Serie D850</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Z50</AcordionLinkItem>
            <AcordionLinkItem value='2' tipe='2'>Z5</AcordionLinkItem>
          </AcordionLink>

        </section>
      </div>
    </div>
  )
}

export default CamaraProfesional