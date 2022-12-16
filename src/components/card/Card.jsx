import React from 'react'
import "./Card.css"

import web from "../../assest/nuevos/browser-website-svgrepo-com.svg"

const Card = ({nombre,descripcion,url,imagen,github}) => {
  return (
    <div class="carta">
          <a href={url}><img src={imagen} alt="img-proyecto"/></a>          
          <div className='contenido'>
            <h3>{nombre}</h3>
            <p>
                {descripcion}
            </p>
            <div className='containerbtn'>
              <a href={github}>GitHub <i class="fa-brands fa-github-alt"></i></a>
              <a href={url}><i class="fa-solid fa-globe"></i> App</a>
            </div>
            
          </div>
    </div>
  )
}

export default Card