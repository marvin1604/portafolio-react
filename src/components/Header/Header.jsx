import React from 'react'
import "./Header.css"

import logo from "../../assest/logo-marvin1604-removebg-preview.png"

const Header = () => {
  return (
    <div className='container'>
        <div className="navbar-left">
        <a href= "/"  className="logo">
          <img  src={logo} alt="logo-marca"/>
        </a>
      </div>
      <div className="navbar-rigth">
        <a href="index.html">Inicio</a>
        <a href="#mis-proyectos">Proyectos</a>
        <a href="#soy-yo">Quien soy</a>
        <a href="#tecnologias">Tecnologías</a>
        <a href="#contactanos">Contacto</a>
      </div>
      {/* <div className="menu-mobile-bars">
        <i className="fa-solid fa-bars" id="bars" ></i>
      </div > */}
      <div className="menu-cantactame-desktop">
          <a href="https://github.com/marvin1604" className="fab fa-github"></a>
          <a href="https://www.linkedin.com/in/walter-rodriguez-sanchez-67bb8a1b5/" className="fab fa-linkedin"></a>
      </div>
    </div>
  )
}

export default Header