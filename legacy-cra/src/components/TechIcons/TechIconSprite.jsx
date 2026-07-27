import React, { memo } from 'react';
import styled from 'styled-components';

import html from "../../assest/tecnologias/html5-original.svg"
import css from "../../assest/tecnologias/css3-original.svg"
import javascript from "../../assest/tecnologias/javascript-original.svg"
import react from "../../assest/tecnologias/react-original.svg"
import next from "../../assest/tecnologias/nextjs-original-wordmark.svg"
import node from "../../assest/tecnologias/nodejs-original.svg"
import express from "../../assest/tecnologias/express-original.svg"
import mongodb from "../../assest/tecnologias/mongodb-original.svg"
import git from "../../assest/tecnologias/git-original.svg"

const TechIconSprite = memo(({ icons, className }) => {
  return (
    <IconContainer className={className}>
      {icons.map((icon, index) => (
        <IconWrapper key={icon.name}>
          <LazyIcon
            src={icon.src}
            alt={icon.name}
            title={icon.name}
            loading="lazy"
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        </IconWrapper>
      ))}
    </IconContainer>
  );
});

TechIconSprite.displayName = 'TechIconSprite';

export default TechIconSprite;

export const useTechIcons = () => {
  return [
    { name: 'HTML5', src: html },
    { name: 'CSS3', src: css },
    { name: 'JavaScript', src: javascript },
    { name: 'React', src: react },
    { name: 'Next.js', src: next },
    { name: 'Node.js', src: node },
    { name: 'Express', src: express },
    { name: 'MongoDB', src: mongodb },
    { name: 'Git', src: git },
  ];
};

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  animation: fadeInUp 2s ease;
  animation-fill-mode: forwards;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  padding: 4px;
  transition: all 0.3s ease;
  opacity: 0;
  animation: slideIn 0.6s ease forwards;

  &:hover {
    transform: scale(1.2) rotate(5deg);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const LazyIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(1.1);
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(1.3) contrast(1.1);
  }
`;

