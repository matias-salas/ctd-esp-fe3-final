import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/kundalini_circle.png';
import { useAppContext } from '../../hooks/useAppContext';
import './Navbar.css';

const Header = () => {
  const { state, dispatch } = useAppContext();

  const changeTheme = () => {
    dispatch({ type: 'toggle' }); // Using the action type directly as a string
    localStorage.theme = JSON.stringify(!state.theme);
  };

  return (
    <header className={`header ${state.theme ? 'dark' : 'light'}`}>
      <Link to="/">
        <img src={logo} alt="Logo" className='logo' />
      </Link>
      <nav className='navbar'>
        <ul className='menu'>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/favs">Favorites</NavLink></li>
        </ul>
      </nav>
      <button onClick={changeTheme} className="theme-button">
      {state.theme ? '🌙' : '☀️'} {/* Cambia el icono en función del tema */}
       </button> 
    </header>
  );
  
};

export default Header;
