import React from 'react'
import { useState } from 'react';
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import useData from '../Hooks/useData';

const AcordionLink = (props) => {
    const [isActive, setIsActive] = useState(false);
    const data= useData();
  
    const toggleAccordion = () => {
      setIsActive(!isActive);
    };

    const handleRef= (e)=>{
      data.marcaDispositivo= e.currentTarget.getAttribute('title');
    };
  
    return (
      <div className="acordion-item" title={props.title} onMouseOver={handleRef}>
        <div className="acordion-title" onClick={toggleAccordion}>
          <p className="acordion-text">{props.title}</p>
          {isActive ? <AiOutlineDown /> : <AiOutlineRight />}
        </div>
        {isActive && 
        <div className="acordionLink-content">
          {props.children}
        </div>
        }
      </div>
    );
  };

export default AcordionLink