import React from 'react'
import "../quiensoy/Quiensoy.css"

import imagenyo from "../../assest/foto.jpg"
import curriculum from "../../assest/curriculum/FrontendDeveloper_walterrodriguez_CV.pdf"
import curriculum2 from "../../assest/curriculum/FullStackDeveloper_WalterRodriguez_cv.pdf"
const Quiensoy = ({idioma}) => {
  return (
    <div id='soy-yo'>
        <div className="container-soy-yo">
            <div className="img-container">
                <img src={imagenyo} alt="" />
            </div> 
            <div className="texto">
                <h2 className='quien-soy'>{idioma?.soyyo?.titulo}</h2>
                <p>{idioma?.soyyo?.parrafo1}</p>
                <p>{idioma?.soyyo?.parrafo2}</p>
                <p>{idioma?.soyyo?.parrafo3}
                </p>
                {idioma?.soyyo?.download === 'ES'?
                <a href={curriculum} download="FrontendDeveloper_walterrodriguez_CV.pdf">Descarga mi CV Aquí</a> : 
<a href={curriculum2} download="FullStackDeveloper_WalterRodriguez_cv.pdf">Scarica il mio cv qui</a>
                }
                
                
            </div>
        </div>
    </div>
  )
}

export default Quiensoy