import React from 'react'
import "./Tecnologias.css"

import html from "../../assest/tecnologias/html5-original.svg"
import css from "../../assest/tecnologias/css3-original.svg"
import javascript from "../../assest/tecnologias/javascript-original.svg"
import react from "../../assest/tecnologias/react-original.svg"
import node from "../../assest/tecnologias/nodejs-original.svg"
import express from "../../assest/tecnologias/express-original.svg"
import mongodb from "../../assest/tecnologias/mongodb-original.svg"
import git from "../../assest/tecnologias/git-original.svg"
import python from "../../assest/tecnologias/python-original.svg"

const Tecnologias = () => {
  return (
    <div id="tecnologias">
        <div class="container-tecnologias">
        <h2>Tecnologías:</h2>
        <div class="container-images-tecnologias">
            <div>
            <img src={html} alt="" />
            <p>HTML</p>
            </div>
            <div>
            <img src={css} alt="" />
            <p>CSS</p>
            </div>
            <div>
            <img src={javascript} alt="" />
            <p>Javascript</p>
            </div>
            <div>
            <img src={python} alt=""/>
            <p>Python</p>
            </div>
            <div>
            <img src={react} alt="" />
            <p>React</p>
            </div>
            <div>
            <img src={node} alt="" />
            <p>Node</p>
            </div>
            <div>
            <img src={express} alt="" />
            <p>Express</p>
            </div>
            <div>
            <img src={mongodb} alt="" />
            <p>MondoDB</p>
            </div>
            <div>
            <img src={git} alt="" />
            <p>Git</p>
            </div>
        </div>
        
        <h3>Cursos Principales</h3>
        <h4><a href="https://platzi.com/p/walter.rodriguez1992/">Sigue mi carrera en Platzi Aquí</a></h4>
        {/* <div class="container-images-cursos">
            <div class="curso-1">
            <img src="https://static.platzi.com/media/achievements/badge-practico-html-css-1-106665ee-bf4f-4301-8991-1fab9e54a73e.png" alt=""/>
            <p>Cursos practico HTML y CSS</p>
            <form action="https://platzi.com/p/walter.rodriguez1992/curso/1758-html-practico/diploma/detalle/">
                <button class="certificado">Ver certificado</button>
            </form>
            </div>
            <div class="curso-2">
            <img src="https://static.platzi.com/media/achievements/piezas-django-intermedio-testing-static-files-django-admin_badge-354a5d94-cd66-4a58.png" alt=""/>
            <p>Curso de Django Intermedio</p>
            <form action="https://platzi.com/p/walter.rodriguez1992/curso/2728-django-intermedio/diploma/detalle/">
                <button class="certificado">Ver certificado</button>
            </form>
            </div>
            <div class="curso-3">
            <img src="https://static.platzi.com/media/achievements/badge-curso-practico-frontend-developer-d28c2eb0-cd3e-4951-bb96-5f1bcab2add5.png" alt=""/>
            <p>Curso Práctico de Frontend Developer</p>
            <form action="https://platzi.com/p/walter.rodriguez1992/curso/2477-frontend-developer-practico/diploma/detalle/">
                <button class="certificado">Ver certificado</button>
            </form>
            </div>
            <div class="curso-4">
            <img src="https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png" alt=""/>
            <p>Curso Práctico de JavaScript</p>
            <form action="https://platzi.com/p/walter.rodriguez1992/curso/3271-javascript-practico/diploma/detalle/">
                <button class="certificado">Ver certificado</button>
            </form>
            </div>
            <div class="curso-5">
            <img src="https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png" alt=""/>
            <p>Curso Profesional de Git y GitHub</p>
            <form action="https://platzi.com/p/walter.rodriguez1992/curso/3271-javascript-practico/diploma/detalle/">
                <button class="certificado">Ver certificado</button>
            </form>
            </div>
            <div class="curso-6">
            <img src="https://static.platzi.com/media/achievements/badge-profesional-de-python-22f3ae5d-ce99-4519-a20a-2aa46ea2c840.png" alt=""/>
            <p>Curso Profesional Python</p>
            <form action="https://platzi.com/p/walter.rodriguez1992/curso/2397-python-profesional/diploma/detalle/">
                <button class="certificado">Ver certificado</button>
            </form>
            </div>

        </div> */}
        </div>
    
  </div>
  )
}

export default Tecnologias