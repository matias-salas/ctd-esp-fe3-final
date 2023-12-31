import React from 'react'
import { useAppContext } from '../hooks/useContext'
import Card from '../components/card/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { users, loading, state } = useAppContext()
  return (
    <main className={`${state.theme ? 'dark' : ''} main`} >
      <h1 className='title-card'>Listado de Dentistas</h1>
      {/* Aqui deberias renderizar las cards */}
      {!loading ?
        <section className='card-container'>
          {users.map(({ id, name, username, }) => {
            return (
              <Card id={id} name={name} username={username} key={id} />
            )
          })}
        </section>
        :
        <h2>Cargando ...</h2>
      }
    </main>
  )
}

export default Home