import React from 'react'
import Card from '../../components/card/Card'
import "./Proyectos.css"
import data from "../../data/data"

const Proyectos = () => {
  return (
    <div id='mis-proyectos'>
      <h2>Mis proyectos</h2>
      <div class="proyectos">
       { data.map((item) => 
       <Card 
       nombre={item.nombre}
       descripcion={item.descripcion}
       imagen={item.imagen}
       url={item.url}
       github={item.github} /> )}
      </div>
    </div>
  )
}

export default Proyectos