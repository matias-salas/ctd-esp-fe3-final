import React from 'react'
import { useAppContext } from '../hooks/useContext'
import Form from '../components/form/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { state } = useAppContext()

  return (
    <main className={`${state.theme ? 'dark' : ''} main`}>
      <section className='contact-section'>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form />
      </section>
    </main>
  )
}

export default Contact