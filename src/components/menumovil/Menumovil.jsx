import React from 'react'
import "./Menumovil.css"

import logo from "../../assest/logoMarvin.png"
const Menumovil = ({setState, idioma}) => {
  return (
    <div className="menu-mobile-container">
        <a href= "/"  className="logo">
          <img  src={logo} alt="logo-marca"/>
        </a>
        <h2>{idioma.header.presentacion}</h2>
        <i className="fa-solid fa-xmark" id="menu-mobile-close" onClick={()=>setState(false)}></i>
        <ul className="menu-mobile">
            <li><a href="/">{idioma.header.inicio}</a></li>
            <li><a href="#mis-proyectos" onClick={()=>setState(false)}>{idioma.header.proyectos}</a></li>
            <li><a href="#soy-yo" onClick={()=>setState(false)}>{idioma.header.quienSoy}</a></li>
            <li><a href="#tecnologias"onClick={()=>setState(false)}>{idioma.header.tecnologias}</a></li>
            <li><a href="#footer" onClick={()=>setState(false)}>{idioma.header.contacto}</a></li> 
        </ul>
        <h3> {idioma.header.contactame}:</h3>
        <ul className="menu-cantactame">
            <a href="https://www.instagram.com/developer_python_/" className="fab fa-instagram"> </a>
            <a href="https://github.com/marvin1604" className="fab fa-github"> </a>
            <a href="https://www.linkedin.com/in/walter-rodriguez-sanchez-67bb8a1b5/" className="fab fa-linkedin"> </a>
            <a href="https://twitter.com/MarvinR89804251" className="fa-brands fa-twitter"> </a>
        </ul>
    </div>
  )
}

export default Menumovil