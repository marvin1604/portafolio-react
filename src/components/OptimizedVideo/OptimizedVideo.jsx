import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const OptimizedVideo = ({ src, fallbackImage, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef(null);
  const observerRef = useRef(null);

  // Lazy loading con Intersection Observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observerRef.current.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observerRef.current.observe(videoRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Preload check - solo cargar video si la conexión es buena
  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    // Si la conexión es lenta, usar imagen de fallback
    if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
      setHasError(true);
    }
  }, []);

  const handleCanPlay = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  // Reducir calidad en dispositivos móviles
  const isMobile = window.innerWidth <= 768;

  if (hasError || !shouldLoadVideo) {
    return (
      <VideoContainer ref={videoRef} className={className}>
        <FallbackImage 
          src={fallbackImage || '/api/placeholder/1920/1080'} 
          alt="Background"
          loading="lazy"
        />
        <VideoOverlay />
      </VideoContainer>
    );
  }

  return (
    <VideoContainer ref={videoRef} className={className}>
      {!isLoaded && (
        <FallbackImage 
          src={fallbackImage || '/api/placeholder/1920/1080'} 
          alt="Loading background"
          loading="lazy"
        />
      )}
      
      {shouldLoadVideo && (
        <OptimizedVideoElement
          {...props}
          onCanPlay={handleCanPlay}
          onError={handleError}
          preload={isMobile ? "none" : "metadata"}
          playsInline
          style={{ opacity: isLoaded ? 1 : 0 }}
        >
          {/* Múltiples fuentes para mejor compatibilidad y compresión */}
          <source src={src.replace('.mp4', '-compressed.webm')} type="video/webm" />
          <source src={src.replace('.mp4', '-compressed.mp4')} type="video/mp4" />
          <source src={src} type="video/mp4" />
        </OptimizedVideoElement>
      )}
      
      <VideoOverlay />
    </VideoContainer>
  );
};

export default OptimizedVideo;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const OptimizedVideoElement = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100%;
  height: calc(100vh - 70px);
  object-fit: cover;
  transition: opacity 0.3s ease;
  
  @media (max-width: 600px) {
    height: 50%;
  }
  
  /* Optimización para dispositivos con recursos limitados */
  @media (max-width: 768px) {
    object-fit: cover;
    transform: scale(1.1); /* Ligero zoom para ocultar bordes en móviles */
  }
`;

const FallbackImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.6);
  left: 0;
  top: 0;
  
  @media (max-width: 600px) {
    height: 100%;
  }
`;
