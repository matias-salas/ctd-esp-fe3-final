import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/57978.jpg';
import { useAppContext } from '../../hooks/useContext';
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
        <button onClick={changeTheme}>Change theme</button>
      </nav>
    </header>
  );
};

export default Header;
