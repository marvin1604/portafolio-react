import React from 'react'
import "../quiensoy/Quiensoy.css"
import { useLanguage } from '../../contexts/LanguageContext'

import imagenyo from "../../assest/foto.jpg"
import curriculum from "../../assest/curriculum/FrontendDeveloper_walterrodriguez_CV.pdf"
import curriculum2 from "../../assest/curriculum/FullStackDeveloper_WalterRodriguez_cv.pdf"

const Quiensoy = () => {
  const { language } = useLanguage();
  return (
    <div id='soy-yo'>
        <div className="container-soy-yo">
            <div className="img-container">
                <img src={imagenyo} alt="" />
            </div> 
            <div className="texto">
                <h2 className='quien-soy'>{language?.soyyo?.titulo}</h2>
                <p>{language?.soyyo?.parrafo1}</p>
                <p>{language?.soyyo?.parrafo2}</p>
                <p>{language?.soyyo?.parrafo3}
                </p>
                {language?.soyyo?.download === 'ES'?
                <a href={curriculum} download="FrontendDeveloper_walterrodriguez_CV.pdf">Descarga mi CV Aquí</a> : 
<a href={curriculum2} download="FullStackDeveloper_WalterRodriguez_cv.pdf">Scarica il mio cv qui</a>
                }
                
                
            </div>
        </div>
    </div>
  )
}

export default Quiensoy