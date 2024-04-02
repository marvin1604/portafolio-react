import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useForm} from '@formspree/react';
import {
  validarNombre,
  validarAsunto,
  validarEmail,
  validarMensaje,
} from "../../utils/email";

import imagenFondo from "../../assest/bg-email.jpg";

const Contactame = () => {
  const [state, handleSubmit] = useForm("xayrpabr");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (state.succeeded) {
    return (
      <Container id="contactame">
        <h2>Gracias por Contactarme, me comunicare lo mas pronto posible</h2>
      </Container>
    )
}

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, enviar los datos a través de una API
  //   if (
  //     validarNombre(formData.name) &&
  //     validarEmail(formData.email) &&
  //     validarAsunto(formData.subject) &&
  //     validarMensaje(formData.message)
  //   ) {
  //     console.log(formData);
  //     // Limpia el formulario después de enviar
  //     setFormData({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });
  //   } else {
  //     console.log("El formulario contiene errores");
  //   }
  // };
  const formValido =
    validarNombre(formData.name) &&
    validarEmail(formData.email) &&
    validarAsunto(formData.subject) &&
    validarMensaje(formData.message);

  return (
    <Container id="contactame">
      <ContainerForm imagenFondo={imagenFondo}>
        <h2>Contactame</h2>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            hasError={
              !validarNombre(formData.name) && validarNombre(formData.name)
            }
          />
          <br />

          <label htmlFor="email">Correo electrónico:</label>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            hasError={
              !validarEmail(formData.email) && formData.email.length > 0
            }
          />
          {!validarEmail(formData.email) && formData.email.length > 0 ? (
            <p>Coloca un formato valido, Ejemplo: correo@correo.com</p>
          ) : (
            <></>
          )}
          <br />

          <label htmlFor="subject">Asunto:</label>
          <FormInput
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <br />

          <label htmlFor="message">Mensaje:</label>
          <br />
          <FormTextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></FormTextArea>
          <br />

          <button type="submit" disabled={!formValido}>
            Enviar
          </button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Contactame;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  // @media(max-width: 900px){
  //   padding: 20px;
  //   width: 60%;
  //  }
`;

const ContainerForm = styled.div`
  background: linear-gradient(
      50deg,
      rgba(40, 42, 55, 1) 50%,
      rgba(40, 42, 55, 0.7)
    ),
    url(${(props) => props.imagenFondo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px;
  width: 1000px;
  border-radius: 25px;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.5);
  color: white;
  & h2 {
    margin: 0;
  }

  @media (max-width: 900px) {
    width: 65%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
    justiy-content: center;
  }

  & label {
    font-size: 17px;
    color: #959aab;
    margin-bottom: 10px;
  }
  & p {
    font-size: 12px;
    margin: 0px;
    color: red;
  }
  & button {
    background-color: #1e92e9;
    width: 100%;
    align-self: flex-end;
    cursor: pointer;
    border: none;
    &: hover {
      background-color: #2198f9;
    }
    &: disabled {
      background: #d6dbdf;
      cursor: not-allowed;
    }
  }
`;

const FormInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 17px 14px;
  background-color: #333646;
  color: #f4f6f9;
  margin-bottom: 10px;
  border-radius: 10px;
  border-color: ${(props) => (props.hasError === true ? "red" : "none")};

  &: focus {
    outline: none;
  }
`;
const FormTextArea = styled.textarea`
  width: 100%;
  max-width: 500px;
  padding: 17px 14px;
  background-color: #333646;
  // border: 1px solid red;
  // border-color: #ccc;
  color: #f4f6f9;
  margin-bottom: 10px;
  border-radius: 10px;
  border-color: ${(props) => (props.hasError === true ? "red" : "none")};

  &: focus {
    outline: none;
  }
`;
