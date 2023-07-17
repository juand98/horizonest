import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useData from '../Hooks/useData'

const AcordionLinkItem = (props) => {
  const data= useData();
  const navigate = useNavigate();
    
    const handleClick =(e)=>{
      if(e.currentTarget.getAttribute('tipe')== '1'){
        navigate('/camaras/camara-deportiva/memoria-camara-deportiva');
      }else if(e.currentTarget.getAttribute('tipe')== '2'){
        navigate('/camaras/camara-profesional/memoria-camara-profesional');
      }
    };

    const handleContext= (e)=>{
      if(e.currentTarget.getAttribute('tipe')== '1'){
        data.deportivaTipe= parseInt(e.currentTarget.getAttribute('value'));
        data.deportivaName= props.children;
      }else if(e.currentTarget.getAttribute('tipe')== '2'){
        data.profesionalTipe= parseInt(e.currentTarget.getAttribute('value'));
        data.profesionalName= props.children;
      }
      
    };

  return (
    <Link tipe={props.tipe} value={props.value} onMouseOver={handleContext} onClick={handleClick} className='acordionLink-item' to={props.link}>{props.children}</Link>
  )
}

export default AcordionLinkItem