import React from 'react'
import "./Menumovil.css"

import logo from "../../assest/logo-marvin1604-removebg-preview.png"
const Menumovil = ({setState}) => {
  return (
    <div class="menu-mobile-container">
        <a href= "/"  class="logo">
          <img  src={logo} alt="logo-marca"/>
        </a>
        <h2>Soy Walter Rodriguez, Bienvenido</h2>
        <i class="fa-solid fa-xmark" id="menu-mobile-close" onClick={()=>setState(false)}></i>
        <ul class="menu-mobile">
            <li><a href="/">Inicio</a></li>
            <li><a href="#mis-proyectos" onClick={()=>setState(false)}>Proyectos</a></li>
            <li><a href="#soy-yo" onClick={()=>setState(false)}>Quien soy</a></li>
            <li><a href="#tecnologias"onClick={()=>setState(false)}>Tecnologías</a></li>
            <li><a href="#footer" onClick={()=>setState(false)}>Contacto</a></li> 
        </ul>
        <h3> Contactame:</h3>
        <ul class="menu-cantactame">
            <a href="https://www.instagram.com/developer_python_/" class="fab fa-instagram"> </a>
            <a href="https://github.com/marvin1604" class="fab fa-github"> </a>
            <a href="https://www.linkedin.com/in/walter-rodriguez-sanchez-67bb8a1b5/" class="fab fa-linkedin"> </a>
            <a href="https://twitter.com/MarvinR89804251" class="fa-brands fa-twitter"> </a>
        </ul>
    </div>
  )
}

export default Menumovil