import React from 'react'
import "../home/Home.css"
import OptimizedVideo from '../../components/OptimizedVideo/OptimizedVideo'
import TechIconSprite, { useTechIcons } from '../../components/TechIcons/TechIconSprite'
import { useLanguage } from '../../contexts/LanguageContext'

import video1 from "../../assest/videos/video-hero-comp.mp4"
import fallbackImage from "../../assest/developer.jpg"
import styled from 'styled-components'

const Home = () => {
  const techIcons = useTechIcons();
  const { language } = useLanguage();

  return (
    <HeroSection id="hero">
      <OptimizedVideo 
        autoPlay 
        muted 
        loop 
        src={video1}
        fallbackImage={fallbackImage}
      />
      
      <ContentContainer className='left'>
        <h2 className='titulo1'> {language.home.titulo1}</h2>
        <h1 className='titulo2'>Walter Rodriguez</h1>
        <h2 className='titulo3'>{`<>${language.home.titulo3}</>`}</h2>
        <TechIconSprite icons={techIcons} className='container-tec' />
      </ContentContainer>
    </HeroSection>
  )
}

export default Home


// Styled Components simplificados
const HeroSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  position: absolute;
  z-index: 2;
`;