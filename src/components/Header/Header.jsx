import React, { useState } from 'react'
import "./Header.css"
import styled from 'styled-components'
import { useLanguage } from '../../contexts/LanguageContext'
import { useScrollHeader } from '../../hooks/useScrollHeader'

import logo from "../../assest/logo-yo.png"
import Menumovil from '../menumovil/Menumovil'

const Header = () => {
  const [state, setState] = useState(false)
  const { language, isSpanish, toggleLanguage } = useLanguage()
  const isScrolled = useScrollHeader(80)

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <NavbarLeft>
        <LogoLink href="/">
          <Logo src={logo} alt="Walter Rodriguez - Full Stack Developer"/>
        </LogoLink>
      </NavbarLeft>
      
      <NavbarRight>
        <NavLink href="#hero">{language.header.inicio}</NavLink>
        <NavLink href="#mis-proyectos">{language.header.proyectos}</NavLink>
        <NavLink href="#soy-yo">{language.header.quienSoy}</NavLink>
        <NavLink href="#tecnologias">{language.header.tecnologias}</NavLink>
        <NavLink href="#contactame">{language.header.contacto}</NavLink>
      </NavbarRight>
      
      <ContainerSwitch>
        <LanguageLabel>IT</LanguageLabel>
        <ButttonSwitch>
          <input
            type="checkbox"
            checked={isSpanish}
            onChange={toggleLanguage}
            aria-label="Cambiar idioma"
          />
          <span className="slider"></span>
        </ButttonSwitch>
        <LanguageLabel>ES</LanguageLabel>
      </ContainerSwitch>
      
      <MobileMenuButton onClick={() => setState(!state)}>
        <i className="fa-solid fa-bars"></i>
      </MobileMenuButton>
      
      {state && <Menumovil setState={setState} />}
    </HeaderContainer>
  )
}

export default Header

// Styled Components con efectos de scroll
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Estado inicial - transparente */
  background: ${props => props.$isScrolled 
    ? 'rgba(31, 43, 62, 0.95)' 
    : 'rgba(31, 43, 62, 0.1)'};
  backdrop-filter: ${props => props.$isScrolled 
    ? 'blur(20px) saturate(180%)' 
    : 'blur(10px)'};
  border-bottom: ${props => props.$isScrolled 
    ? '1px solid rgba(255, 255, 255, 0.1)' 
    : '1px solid transparent'};
  box-shadow: ${props => props.$isScrolled 
    ? '0 8px 32px rgba(0, 0, 0, 0.15)' 
    : 'none'};

  /* Responsive */
  @media (max-width: 768px) {
    padding: 0 15px;
    justify-content: space-around;
    gap: 10px;
  }
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`;

const LogoLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Logo = styled.img`
  height: 45px;
  width: auto;
  filter: brightness(1.1);
  
  @media (max-width: 768px) {
    height: 35px;
  }
`;

const NavbarRight = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  flex: 1;
  justify-content: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  position: relative;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #17c784;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #17c784;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover::after {
    width: 80%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const LanguageLabel = styled.p`
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
  opacity: 0.8;
`;

const ContainerSwitch = styled.div`
display: flex;
justify-content: center;
align-items:center;
gap: 4px;
border-radius: 20px;
`

const ButttonSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 20px;
  & input{
    opacity: 0;
  width: 0;
  height: 0;
  }

  & span{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(23 199 132);
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }

  & span:before{
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    }
    & input:checked + span {
      background-color: red;
    }

    & input:focus + span {
      box-shadow: 0 0 1px yellow;
    }
    & input:checked + span:before {
      -webkit-transform: translateX(24px);
      -ms-transform: translateX(24px);
      transform: translateX(24px);
    }

    `