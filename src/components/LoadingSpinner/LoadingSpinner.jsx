import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingSpinner = ({ message = "Cargando..." }) => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>{message}</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingSpinner;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  animation: ${fadeIn} 0.3s ease-in;
`;

const Spinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top: 3px solid #17c784;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 16px;
`;

const LoadingText = styled.p`
  color: #ffffff;
  font-size: 1rem;
  margin: 0;
  opacity: 0.8;
`;
