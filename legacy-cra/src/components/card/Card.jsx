import React from 'react'
import "./Card.css"


const Card = ({nombre,descripcion,url,imagen,github}) => {

  return (
    <div className="carta">
      <div className='carta-imagen'>
          <a href={url}><img src={imagen} alt="img-proyecto"/></a>          
      </div>
      <div className='contenido'>
        <h3>{nombre}</h3>
        <p>
            {descripcion}
        </p>
        <div className='containerbtn'>
          <a href={github}>GitHub <i className="fa-brands fa-github-alt"></i></a>
          <a href={url}><i className="fa-solid fa-globe"></i> App</a>
        </div>
        
      </div>
    </div>
  )
}

export default Card