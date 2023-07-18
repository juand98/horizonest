import React from "react";
import "../styles/tittle_welcome.css";

const Tittle_welcome = (props) => {
  return (
    <div className="tittle_welcome_container">
      <img src={props.img} alt="horizone logo" />
      <h1>{props.text}</h1>
    </div>
  );
};

export default Tittle_welcome;
