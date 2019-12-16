import React from 'react';
import "../styles/Img.css";
import burgericon from "../assets/burger-icon.png";


function Img() {
    return (
        <img className="burger-icon" src={burgericon} alt="burger" />
    );
}

export default Img;

