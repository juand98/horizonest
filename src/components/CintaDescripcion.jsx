import React from 'react'
import '../styles/CintaDescripcion.css'

const CintaDescripcion = (props) => {
  return (
    <div className='contenedor-cinta-descripción'>
        <img className='cinta-img' src={props.img} alt="" />
        <p className='cinta-text'>{props.text}</p>
    </div>
  )
}

export default CintaDescripcion