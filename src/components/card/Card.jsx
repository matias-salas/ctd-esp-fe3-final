import React from "react";
import { useAppContext } from '../../hooks/useAppContext'
import { Link } from 'react-router-dom'
import dentista from '../../assets/img/doctor.jpg'
import { BiHeart, BiSolidHeart } from 'react-icons/bi'
import './Card.css'


const Card = ({ name, username, id, email }) => {
  const { users, state, dispatch } = useAppContext()

  const isFav = (id) => state.favs.some(favDentist => favDentist.id === id)

  const addFav = (id) => {
    const dentist = users.find(dentist => dentist.id === id)
    dispatch({ type: 'add', payload: dentist }); // Using the action type directly as a string
    const favs = [...state.favs, dentist]
    localStorage.favs = JSON.stringify(favs)
  }

  const removeFav = (id) => {
    const dentist = users.find(dentist => dentist.id === id)
    dispatch({ type: 'remove', payload: dentist }); // Using the action type directly as a string
    const favs = state.favs.filter(({ id }) => id !== dentist.id)
    localStorage.favs = JSON.stringify(favs)
  }

  return (
    <article className={`${state.theme ? 'dark-card' : ''} card`} key={id}>
      <div className="title-btnFav">
        <img src={dentista} alt="Dentista" className="img-dentista" />

      </div>
      <div className="content-card">
        <Link to={`/dentist/${id}`} className='card_link'>
          <h3 className=''>{name}</h3>
        <p>{username}</p>
        </Link>

        <p>{email}</p>
        {
          isFav(id) ?
            <BiSolidHeart onClick={() => removeFav(id)} className="btn-fav" /> :
            <BiHeart onClick={() => addFav(id)} className="btn-fav" />
        }
      </div>
    </article>
  );
};

export default Card;
