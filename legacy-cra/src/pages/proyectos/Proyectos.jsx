import React, { useState } from 'react'
import styled from 'styled-components'
import Card from '../../components/card/Card'
import { useLanguage } from '../../contexts/LanguageContext'
import data from "../../data/dataProyects"
import "./Proyectos.css"

const Proyectos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { language } = useLanguage();
  
  // Configuración de paginación
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Funciones de navegación
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Título con fallback seguro
  const titulo = language?.proyectos?.titulo || 'Mis Proyectos';

  return (
    <div id='mis-proyectos'>
      <h2>{titulo}</h2>
      
      <div className="proyectos">
        {currentItems?.map((item) => (
          <Card 
            key={item?.id}
            nombre={item?.nombre}
            descripcion={item?.descripcion}
            imagen={item?.imagen}
            url={item?.url}
            github={item?.github} 
          />
        ))}
      </div>
      
      {/* Botones de paginación */}
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
  );
}

export default Proyectos

// Styled Components
const ContainerButton = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 30px;
  }
`;

const PaginationButton = styled.button`
  background: #ffffff;
  color: #663399;
  width: 170px;
  height: 45px;
  border-radius: 50px;
  border: 2px solid #663399;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(102, 51, 153, 0.15);

  &:hover:not(:disabled) {
    background: #663399;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 51, 153, 0.25);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
  
  i {
    color: #17c784;
    transition: all 0.3s ease;
    font-size: 1rem;
  }
  
  &:hover:not(:disabled) i {
    color: #17c784;
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 40px;
    font-size: 0.85rem;
  }
`;

const ButtonNext = styled(PaginationButton)`
  &:hover:not(:disabled) i {
    transform: translateX(5px);
  }
`;

const ButtonPrev = styled(PaginationButton)`
  &:hover:not(:disabled) i {
    transform: translateX(-5px);
  }
`;