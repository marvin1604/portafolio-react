import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/marvin1604',
      icon: 'fab fa-github',
      color: '#333333'
    },
    {
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/walter-rodriguez-sanchez-67bb8a1b5/',
      icon: 'fab fa-linkedin',
      color: '#0077B5'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/developer_python_/',
      icon: 'fab fa-instagram',
      color: '#E4405F'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/MarvinR89804251',
      icon: 'fa-brands fa-twitter',
      color: '#1DA1F2'
    }
  ];

  return (
    <FloatingMenuContainer 
      $isExpanded={isExpanded}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Botón principal */}
      <MainButton $isExpanded={isExpanded}>
        <i className="fa-solid fa-share-nodes"></i>
      </MainButton>

      {/* Enlaces sociales */}
      <SocialLinksContainer $isExpanded={isExpanded}>
        {socialLinks.map((link, index) => (
          <SocialItem
            key={link.name}
            $index={index}
            $isExpanded={isExpanded}
          >
            <SocialLink
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.name}
              $color={link.color}
            >
              <i className={link.icon}></i>
              <SocialLabel>{link.name}</SocialLabel>
            </SocialLink>
          </SocialItem>
        ))}
      </SocialLinksContainer>

      {/* Indicador de interacción */}
      {/* <HelpText $isExpanded={isExpanded}>
        {isExpanded ? 'Redes Sociales' : 'Hover'}
      </HelpText> */}
    </FloatingMenuContainer>
  )
}

export default Menu


const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;



// Styled Components
const FloatingMenuContainer = styled.div`
  position: fixed;
  left: 25px;
  bottom: 25px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Glassmorphism container */
  &::before {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    background: rgba(31, 43, 62, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    opacity: ${props => props.$isExpanded ? 1 : 0};
    transition: all 0.3s ease;
    z-index: -1;
  }

  @media (max-width: 768px) {
    left: 20px;
    bottom: 30px;
  }
`;

const MainButton = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #17c784, #14a06f);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(23, 199, 132, 0.15);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(135deg, #17c784, #14a06f, #17c784);
    border-radius: 50%;
    z-index: -1;
    opacity: 0.8;
  }
  
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 3px 12px rgba(23, 199, 132, 0.2);
  }

  i {
    transform: ${props => props.$isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column-reverse; /* Invertimos la dirección para que los íconos aparezcan hacia arriba */
  gap: 12px;
  opacity: ${props => props.$isExpanded ? 1 : 0};
  transform: ${props => props.$isExpanded ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${props => props.$isExpanded ? 'auto' : 'none'};
`;

const SocialItem = styled.div`
  animation: ${props => props.$isExpanded ? slideIn : 'none'} 
             0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: ${props => props.$index * 0.1 + 0.1}s;
  opacity: ${props => props.$isExpanded ? 1 : 0};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  color: white;
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.$color};
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s ease;
    opacity: 0.9;
  }
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    
    &::before {
      transform: scale(1);
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  i {
    position: relative;
    z-index: 1;
    transition: all 0.2s ease;
  }
  
  &:hover i {
    color: white;
    transform: scale(1.02);
  }
`;

const SocialLabel = styled.span`
  position: absolute;
  left: 42px;
  background: rgba(31, 43, 62, 0.95);
  backdrop-filter: blur(10px);
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid rgba(31, 43, 62, 0.95);
  }
  
  ${SocialLink}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;
