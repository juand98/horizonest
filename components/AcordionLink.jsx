import React from 'react'
import { useState } from 'react';
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";

const AcordionLink = (props) => {
    const [isActive, setIsActive] = useState(false);
  
    const toggleAccordion = () => {
      setIsActive(!isActive);
    };
  
    return (
      <div className="acordion-item">
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