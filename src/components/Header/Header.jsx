import React, { useState } from 'react'
import "./Header.css"

import logo from "../../assest/logo-marvin1604-removebg-preview.png"
import Menumovil from '../menumovil/Menumovil'

const Header = () => {
  const [state, setState]=useState(false)

  return (
    <div className='container'>
        <div className="navbar-left">
        <a href= "/"  className="logo">
          <img  src={logo} alt="logo-marca"/>
        </a>
        <div className="menu-mobile-bars" onClick= {()=> setState(!state)}>
          <i className="fa-solid fa-bars" id="bars" ></i>
      </div >
      </div>
      <div className="navbar-rigth">
        <a href="index.html">Inicio</a>
        <a href="#mis-proyectos">Proyectos</a>
        <a href="#soy-yo">Quien soy</a>
        <a href="#tecnologias">Tecnologías</a>
        <a href="#footer">Contacto</a>
      </div>
      {state && <Menumovil setState={setState}/>}
    </div>
  )
}

export default Header