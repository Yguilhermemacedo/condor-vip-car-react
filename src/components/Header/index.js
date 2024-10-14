import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header-top">
      <div className='logo'>
        <img src='/img/1.png' alt='Logo da Condor Vip Car' />
      </div>
      <nav>
        <button className={`btn-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </button>
        <ul className={`menu-lista ${menuOpen ? 'open' : ''}`}>
          <li><a href='#' target='blank'>Home</a></li>
          <li><a href='#' target='blank'>Serviços</a></li>
          <li><a href='#' target='blank'>Frota</a></li>
          <li><a href='#' target='blank'>Contato</a></li>
          <li><a href='#' target='blank'>Reservar</a></li>
          <button className='btn-cadastro'>Cadastre-se</button>
          <button className='btn-login'>Login</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
