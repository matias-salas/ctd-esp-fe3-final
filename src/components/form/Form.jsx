import React, { useState } from "react";
import { useAppContext } from '../../hooks/useContext'; // Importa el hook de contexto
import "./Form.css";

const Form = () => {
  const { state } = useAppContext(); // Obtén el valor del tema desde el contexto
  const [form, setForm] = useState({ name: "", email: "" });
  const [msgSended, setMsgSended] = useState("");

  const ValidateForm = (params) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!params.name || params.name.length < 3) {
      setMsgSended("Por favor, introduce un nombre válido (mínimo 3 caracteres).");
      return false;
    } else if (!params.email || !regexEmail.test(params.email)) {
      setMsgSended("Por favor, introduce un correo electrónico válido.");
      return false;
    } else {
      setMsgSended(`Gracias ${form.name}!, formulario enviado.`);
      return true;
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();

    if (ValidateForm(form)) {
      setTimeout(() => {
        setMsgSended("");
      }, 8000);
    }
  };

  const changed = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const formThemeClass = state.theme ? 'form-container-dark' : 'form-container'; // Determina la clase CSS según el tema
  
  
  return (
    <div className={`form-container ${formThemeClass}`}> {/* Aplica la clase CSS al contenedor del formulario */}
      <form onSubmit={formHandler} className={`form-contact ${formThemeClass}`}> {/* Aplica la clase CSS al formulario */}
        <div className={`input-form-container ${formThemeClass}`}> {/* Aplica la clase CSS a los elementos del formulario */}
          <label htmlFor="name">Nombre Completo</label>
          <input type="text" name="name" onChange={changed} value={form.name} />
        </div>
        <div className={`input-form-container ${formThemeClass}`}> {/* Aplica la clase CSS a los elementos del formulario */}
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" name="email" onChange={changed} value={form.email} />
        </div>
        <input type="submit" value="Enviar" className={`btn-send ${formThemeClass}`} /> {/* Aplica la clase CSS al botón */}
      </form>
      {msgSended && <h3 className={`message ${formThemeClass}`}>{msgSended}</h3>} {/* Aplica la clase CSS al mensaje */}
    </div>
  );
};

export default Form;
