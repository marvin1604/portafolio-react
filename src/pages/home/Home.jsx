import React from 'react'
import "../home/Home.css"


import html from "../../assest/tecnologias/html5-original.svg"
import css from "../../assest/tecnologias/css3-original.svg"
import javascript from "../../assest/tecnologias/javascript-original.svg"
import react from "../../assest/tecnologias/react-original.svg"
import node from "../../assest/tecnologias/nodejs-original.svg"
import express from "../../assest/tecnologias/express-original.svg"
import mongodb from "../../assest/tecnologias/mongodb-original.svg"
import git from "../../assest/tecnologias/git-original.svg"
import SvgComponent from '../../components/SvgComponent'



const Home = () => {
  return (
    <div id="hero">
      <div className='left'>
        <h2 className='titulo1'> Hola, soy</h2>
        <h1 className='titulo2'>Walter</h1>
        <h2 className='titulo3'>{"<>Frontend Developer</>"}</h2>
        <div className='container-tec'>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={javascript} alt="" />
          <img src={react} alt="" />
          <img src={node} alt="" />
          <img src={express} alt="" />
          <img src={mongodb} alt="" />
          <img src={git} alt="" />          
        </div>
      </div> 
      <div className='rigth'>
        <div className='foto-principal'>
          <SvgComponent />
        </div>
      </div>
    </div>
  )
}

export default Home