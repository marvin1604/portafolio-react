export const validarNombre = (nombre) => {
    return nombre.trim() !== '';
  };

export  const validarEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  };

export  const validarAsunto = (asunto) => {
    return asunto.trim() !== '';
  };

export  const validarMensaje = (mensaje) => {
    return mensaje.trim() !== '';
  };