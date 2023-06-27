import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <img src="../src/assets/logo_horizone_blanco.svg" alt="horizone" />
      <span className="material-symbols-outlined">menu</span>
    </div>
  );
};

export default Header;
