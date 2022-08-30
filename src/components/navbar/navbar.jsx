import React from "react";
import "./style.css";
import { SiTrello } from "react-icons/si";
function Navbar() {
  return (
    <div className="navbar">
      <SiTrello />
      <h1 className="logo">Trello</h1>
    </div>
  );
}

export default Navbar;
