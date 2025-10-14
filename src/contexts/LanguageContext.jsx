import React, { createContext, useContext, useState, useCallback } from 'react';
import { dataEspañol, dataItaliano } from '../data/data.js';

// Context para el idioma
const LanguageContext = createContext();

// Hook personalizado para usar el contexto de idioma
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    console.warn('useLanguage se está usando fuera de LanguageProvider o el Provider no está inicializado');
    // Retornar un valor por defecto en lugar de lanzar error
    return { 
      language: { proyectos: { titulo: 'Proyectos' }, home: {}, header: {}, tecnologias: {}, soyyo: {} },
      isSpanish: false,
      toggleLanguage: () => {},
      getCurrentLanguageCode: () => 'it',
      getCurrentLanguageName: () => 'Italiano'
    };
  }
  return context;
};

// Provider del contexto de idioma
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(dataItaliano);
  const [isSpanish, setIsSpanish] = useState(false);

  // Función optimizada para cambiar idioma
  const toggleLanguage = useCallback(() => {
    if (currentLanguage === dataEspañol) {
      setCurrentLanguage(dataItaliano);
      setIsSpanish(false);
    } else {
      setCurrentLanguage(dataEspañol);
      setIsSpanish(true);
    }
  }, [currentLanguage]);

  // Función para obtener el código del idioma actual
  const getCurrentLanguageCode = useCallback(() => {
    return currentLanguage === dataEspañol ? 'es' : 'it';
  }, [currentLanguage]);

  // Función para obtener el nombre del idioma actual
  const getCurrentLanguageName = useCallback(() => {
    return currentLanguage === dataEspañol ? 'Español' : 'Italiano';
  }, [currentLanguage]);

  const value = {
    language: currentLanguage,
    isSpanish,
    toggleLanguage,
    getCurrentLanguageCode,
    getCurrentLanguageName
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
