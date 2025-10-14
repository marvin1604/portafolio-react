import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { useLanguage } from '../../contexts/LanguageContext'

import logo from "../../assest/logo-yo.png"

const Menumovil = ({setState}) => {
  const { language } = useLanguage();

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleLinkClick = (href) => {
    setState(false);
    if (href.startsWith('#')) {
      // Scroll suave a sección
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <MobileMenuOverlay onClick={() => setState(false)}>
      <MobileMenuContainer onClick={(e) => e.stopPropagation()}>
        {/* Header del menú */}
        <MenuHeader>
          <LogoContainer>
            <Logo src={logo} alt="Walter Rodriguez Logo"/>
          </LogoContainer>
          <CloseButton onClick={() => setState(false)}>
            <i className="fa-solid fa-xmark"></i>
          </CloseButton>
        </MenuHeader>

        {/* Contenido principal del menú */}
        <MenuContent>
          <WelcomeText>{language.header.presentacion}</WelcomeText>
          
          <Navigation>
            <NavItem>
              <NavLink onClick={() => handleLinkClick('/')}>
                <i className="fa-solid fa-home"></i>
                {language.header.inicio}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => handleLinkClick('#mis-proyectos')}>
                <i className="fa-solid fa-folder-open"></i>
                {language.header.proyectos}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => handleLinkClick('#soy-yo')}>
                <i className="fa-solid fa-user"></i>
                {language.header.quienSoy}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => handleLinkClick('#tecnologias')}>
                <i className="fa-solid fa-code"></i>
                {language.header.tecnologias}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => handleLinkClick('#contactame')}>
                <i className="fa-solid fa-envelope"></i>
                {language.header.contacto}
              </NavLink>
            </NavItem>
          </Navigation>

          {/* Redes sociales */}
          <SocialSection>
            <SocialTitle>{language.header.contactame}:</SocialTitle>
            <SocialLinks>
              <SocialLink 
                href="https://www.instagram.com/developer_python_/" 
                target="_blank" 
                rel="noopener noreferrer"
                $color="#E4405F"
              >
                <i className="fab fa-instagram"></i>
              </SocialLink>
              <SocialLink 
                href="https://github.com/marvin1604" 
                target="_blank" 
                rel="noopener noreferrer"
                $color="#333"
              >
                <i className="fab fa-github"></i>
              </SocialLink>
              <SocialLink 
                href="https://www.linkedin.com/in/walter-rodriguez-sanchez-67bb8a1b5/" 
                target="_blank" 
                rel="noopener noreferrer"
                $color="#0077B5"
              >
                <i className="fab fa-linkedin"></i>
              </SocialLink>
              <SocialLink 
                href="https://twitter.com/MarvinR89804251" 
                target="_blank" 
                rel="noopener noreferrer"
                $color="#1DA1F2"
              >
                <i className="fa-brands fa-twitter"></i>
              </SocialLink>
            </SocialLinks>
          </SocialSection>
        </MenuContent>
      </MobileMenuContainer>
    </MobileMenuOverlay>
  )
}

export default Menumovil

// Animaciones
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const staggerIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled Components
const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1001;
  animation: ${fadeIn} 0.3s ease-out;
  
  /* Touch optimization */
  -webkit-overflow-scrolling: touch;
`;

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 85%;
  max-width: 400px;
  height: 100vh;
  background: linear-gradient(135deg, #1f2b3e 0%, #2a3b52 100%);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  box-shadow: 10px 0 30px rgba(0, 0, 0, 0.3);
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(31, 43, 62, 0.8);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  filter: brightness(1.1);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(90deg);
  }
  
  &:active {
    transform: rotate(90deg) scale(0.95);
  }
`;

const MenuContent = styled.div`
  flex: 1;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
`;

const WelcomeText = styled.h2`
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 40px 0;
  padding: 0 20px;
  opacity: 0.9;
  line-height: 1.4;
`;

const Navigation = styled.nav`
  flex: 1;
`;

const NavItem = styled.div`
  animation: ${staggerIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.15s; }
  &:nth-child(3) { animation-delay: 0.2s; }
  &:nth-child(4) { animation-delay: 0.25s; }
  &:nth-child(5) { animation-delay: 0.3s; }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-left: 3px solid transparent;
  
  &:hover {
    background: rgba(23, 199, 132, 0.1);
    border-left-color: #17c784;
    color: #17c784;
    transform: translateX(8px);
  }
  
  &:active {
    transform: translateX(4px);
    background: rgba(23, 199, 132, 0.15);
  }
  
  i {
    width: 20px;
    text-align: center;
    font-size: 1.1rem;
    opacity: 0.8;
    transition: all 0.3s ease;
  }
  
  &:hover i {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const SocialSection = styled.div`
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(31, 43, 62, 0.5);
`;

const SocialTitle = styled.h3`
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 20px 0;
  opacity: 0.9;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  color: white;
  font-size: 1.4rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: ${props => props.$color};
    border-color: ${props => props.$color};
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(-2px) scale(1.05);
  }
  
  i {
    transition: all 0.3s ease;
  }
  
  &:hover i {
    color: white;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
`;