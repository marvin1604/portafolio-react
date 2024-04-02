import React from 'react'
import Card from '../../components/card/Card'
import "./Proyectos.css"
import data from "../../data/dataProyects"
import {useState} from 'react'
import styled from 'styled-components'

const Proyectos = ({idioma}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calcula el índice inicial y final de los elementos en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Function per change page next
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Function per change page prev
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div id='mis-proyectos'>
      <h2>{idioma.proyectos.titulo}</h2>
      <div className="proyectos">
       { currentItems?.map((item) => 
       <Card 
       key={item.id}
       nombre={item.nombre}
       descripcion={item.descripcion}
       imagen={item.imagen}
       url={item.url}
       github={item.github} /> )}
      </div>
      {/* Botons pagination */}
      <ContainerButton>
        <ButtonPrev onClick={prevPage} disabled={currentPage === 1}>
          <i className="fa-solid fa-arrow-left"></i>
          <p>Anterior</p>
          </ButtonPrev>
        <ButtonNext onClick={nextPage} disabled={indexOfLastItem >= data.length}>
          <p>Siguiente</p>
          <i className="fa-solid fa-arrow-right"></i>
        </ButtonNext>
      </ContainerButton>
    </div>
  )
}

export default Proyectos

const ContainerButton = styled.div`
display:flex;
gap:20px;
`
const ButtonNext = styled.button`
  background: white;
    color: rebeccapurple;
    width: 170px;
    height: 35px;
    border-radius: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    transition: all 1s;
    font-weight: bold;

    &:hover{
      background: rebeccapurple;
      color:white;
    }
    & i{
      color: aqua;
    transition: all 1s;
    }
    &:hover i{
      transform: translateX(20px);    
  }
`
const ButtonPrev = styled.button`
background: white;
color: rebeccapurple;
    width: 170px;
    height: 35px;
    border-radius: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    transition: all 1s;
    font-weight: bold;

    &:hover{
      background: rebeccapurple;
      color:white;
    }
    & i{
      color: aqua;
      transition: all 1s;
    }
    &:hover i{
      transform: translateX(-20px);    
  }
`