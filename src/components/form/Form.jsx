import React, { useState } from "react";
import './Form.css'

const Form = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [msgSended, setMsgSended] = useState('');

  const ValidateForm = (params) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!params.name || params.name.length < 3) {
      setMsgSended('Por favor, introduce un nombre válido (mínimo 3 caracteres).');
      return false;
    } else if (!params.email || !regexEmail.test(params.email)) {
      setMsgSended('Por favor, introduce un correo electrónico válido.');
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
        setMsgSended('');
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

  return (
    <>
      <form onSubmit={formHandler} className="form-contact">
        <div className="input-form-container">
          <label htmlFor="name"></label>
          <input type="text" name="name" onChange={changed} value={form.name} placeholder="Nombre Completo" />
        </div>
        <div className="input-form-container">
          <label htmlFor="email"></label>
          <input type="email" name="email" onChange={changed} value={form.email} placeholder="Correo Electrónico" />
        </div>
        <input type="submit" value="Enviar" className="btn-send" />
      </form>
      {msgSended && <h3>{msgSended}</h3>}
    </>
  );
};

export default Form;
