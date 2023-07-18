import React from 'react'
import '../styles/camaraCard.css'

const CamaraCard = (props) => {
  return (
    <div className='camara_card__container'>
        <img className='camara_card__img' src={props.img} alt="" />
        <p className='camara_card__text'>{props.text}</p>
    </div>
  )
}

export default CamaraCard