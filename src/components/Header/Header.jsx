import React, { useState } from 'react'
import "./Header.css"
import styled from 'styled-components'

import logo from "../../assest/logo-yo.png"
import Menumovil from '../menumovil/Menumovil'

const Header = ({idioma, handleIdioma, checked}) => {
  const [state, setState]=useState(false)

  return (
    <div className='container'>
        <div className="navbar-left">
          <a href= "/"  className="logo">
            <img  src={logo} alt="logo-marca"/>
          </a>
      </div>
      <div className="navbar-rigth">
        {/* <BsFillBrightnessHighFill color='yellow'/> */}
        <a href="index.html">{idioma.header.inicio}</a>
        <a href="#mis-proyectos">{idioma.header.proyectos}</a>
        <a href="#soy-yo">{idioma.header.quienSoy}</a>
        <a href="#tecnologias">{idioma.header.tecnologias}</a>
        <a href="#contactame">{idioma.header.contacto}</a>
        {/* <button className='switch' id='switch'>
          <span><i class="fa-solid fa-sun"></i></span>
          <span><i class="fa-solid fa-moon"></i></span>
        </button> */}
      </div>
      <ContainerSwitch>
          <p>IT</p>
          <ButttonSwitch>
            <input
              type="checkbox"
              checked={checked}
              onClick={handleIdioma}
            />
            <span className="slider"></span>
          </ButttonSwitch>
          <p>ES</p>
        </ContainerSwitch>
        <div className="menu-mobile-bars" onClick= {()=> setState(!state)}>
          <i className="fa-solid fa-bars" id="bars" ></i>
        </div >
      {state && <Menumovil setState={setState} idioma={idioma}/>}
    </div>
  )
}

export default Header

const ContainerSwitch = styled.div`
display: flex;
justify-content: center;
align-items:center;
gap: 4px;
border-radius: 20px;
`

const ButttonSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 20px;
  & input{
    opacity: 0;
  width: 0;
  height: 0;
  }

  & span{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(23 199 132);
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }

  & span:before{
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    }
    & input:checked + span {
      background-color: red;
    }

    & input:focus + span {
      box-shadow: 0 0 1px yellow;
    }
    & input:checked + span:before {
      -webkit-transform: translateX(24px);
      -ms-transform: translateX(24px);
      transform: translateX(24px);
    }

    `