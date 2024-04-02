import React from 'react'
import "../home/Home.css"


import html from "../../assest/tecnologias/html5-original.svg"
import css from "../../assest/tecnologias/css3-original.svg"
import javascript from "../../assest/tecnologias/javascript-original.svg"
import react from "../../assest/tecnologias/react-original.svg"
import next from "../../assest/tecnologias/nextjs-original-wordmark.svg"
import node from "../../assest/tecnologias/nodejs-original.svg"
import express from "../../assest/tecnologias/express-original.svg"
import mongodb from "../../assest/tecnologias/mongodb-original.svg"
import git from "../../assest/tecnologias/git-original.svg"


import video1 from "../../assest/videos/video-hero-comp.mp4"
import styled from 'styled-components'



const Home = ({idioma}) => {
  return (
    <div id="hero">
      <MyVideo autoPlay muted loop src={video1} />
      <FilterVideo></FilterVideo>
      <div className='left'>
        <h2 className='titulo1'> {idioma.home.titulo1}</h2>
        <h1 className='titulo2'>Walter Rodriguez</h1>
        <h2 className='titulo3'>{`<>${idioma.home.titulo3}</>`}</h2>
        <div className='container-tec'>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={javascript} alt="" />
          <img src={react} alt="" />
          <img src={next} alt="" />
          <img src={node} alt="" />
          <img src={express} alt="" />
          <img src={mongodb} alt="" />
          <img src={git} alt="" />          
        </div>
      </div>
      {/* <div className='rigth'>
        <div className='foto-principal'>
          <SvgComponent />
        </div>
      </div> */}
    </div>
  )
}

export default Home


const MyVideo = styled.video`
  min-width: 100vw;
  min-height: 100%;
  height: calc(100vh - 70px);
  object-fit:cover;
  @media(max-width:600px){
    height: 50%;
  }
`

const FilterVideo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(10,10,10, 0.4);
  left: 0;
  top:0;
  @media(max-width:600px){
    heigth: 50%;
  }
`