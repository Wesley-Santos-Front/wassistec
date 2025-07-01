import style from './navbar.module.css';
import { Link } from "react-router-dom";
import Logo from '../image/logo1.png'
import { IoMenu } from "react-icons/io5";

function Navbar(){
  return(
    <header className={style.head}>
      <div className={style.menu}>
        <button className={style.menuBut}>
        <IoMenu className={style.menuIcon}/>
        </button>
      </div>
      <a href='/'>
      <div className={style.log}>
      <img src={Logo} alt='logo' />
      </div>
      </a>
    <ul className={style.hiperl}>
      <a>
        <Link to='/'>Home</Link>
      </a>
       <a>
        <Link to='/servicos'>Serviços</Link>
      </a>
       <a>
        <Link to='/orcamentos'>Orçamentos</Link>
      </a>
       <a>
        <Link to='/contatos'>Contatos</Link>
      </a>
       <a>
        <Link to='/sobre'>Sobre</Link>
      </a>
    </ul>
    </header>
  )
}

export default Navbar;