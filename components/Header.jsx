import React from "react";
import "../styles/header.css";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <img src="../src/assets/logo_horizone_blanco.svg" alt="horizone" />
      {/* <span className="material-symbols-outlined">menu</span> */}
      <AiOutlineMenu className="hamburguer-icon"/>
    </div>
  );
};

export default Header;
