import { useState, useEffect } from 'react';

// Hook personalizado para manejar el estado del header en scroll
export const useScrollHeader = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > threshold);
    };

    // Agregar listener de scroll con throttling para mejor performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [threshold]);

  return isScrolled;
};

export default useScrollHeader;
