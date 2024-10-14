import './Header.css';
import Logo from './Logo';

const Header = () => {
  return (
    <header id="header-top">
      <Logo />
      <nav>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Serviços</a>
          </li>
          <li>
            <a href='#'>Frota</a>
          </li>
          <li>
            <a href='#'>Contato</a>
          </li>
          <li>
            <a href='#'>Reservar</a>
          </li>
          <button className='btn-cadastro'>Cadastre-se</button>
          <button className='btn-login' >Login</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
