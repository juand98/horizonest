import React from "react";

const Card = (props) => {
  return (
    <div>
      <img src={props.img} alt="Boton_musica" />
    </div>
  );
};

/* const Card = (props) => {
  return (
    <div className="info_container">
      <img src={props.img} alt="Boton_musica" />
    </div>
  );
}; */

export default Card;
