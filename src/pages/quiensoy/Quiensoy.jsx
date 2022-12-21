import React from 'react'
import "../quiensoy/Quiensoy.css"

import imagenyo from "../../assest/foto.jpg"
import curriculum from "../../assest/curriculum/FrontendDeveloper_walterrodriguez_CV.pdf"
const Quiensoy = () => {
  return (
    <div id='soy-yo'>
        <div className="container-soy-yo">
            <div className="img-container">
                <img src={imagenyo} alt="" />
            </div> 
            <div className="texto">
                <h2 className='quien-soy'>Soy <span className="color-acento">Walter Rodríguez</span> </h2>
                <p>Hola, soy electronico de formación y desarrollador Frontend con Reactjs, me he estado formando en Platzi como desarrollador web. Manejo lenguaje Python, HTML, CSS, JavaScript, Manejo de Git y Github, Reactjs,  Nodejs y Express para el backend. Tengo experiencia en proyectos personales de desarrollo de software.
                </p>
                <p>
                Me apasiona la tecnología, me encanta que mi trabajo pueda convertir ideas en algo real y que mejore la calidad de vida de las personas.
                </p>
                <p>
                Quiero ser parte de una empresa donde pueda aportar mi conocimiento y mi talento.
                </p>
                <a href={curriculum} download="FrontendDeveloper_walterrodriguez_CV.pdf">Descarga mi curriculum Aquí</a>
            </div>
        </div>
    </div>
  )
}

export default Quiensoy