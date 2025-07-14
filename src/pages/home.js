import Logo2 from '../image/logoremove.png';
import style from './home.module.css'

function Home({ menuOpen }){
   
  return (
    <div className={style.flex}>
       {menuOpen && (
     <div className={style.span1}>
      <div className={style.men}>
        <ul>
          <div className={style.ult}>
          <a href="#">Home</a>
          </div>
          <div className={style.ult}>
          <a href="./servicos">Serviços</a>
          </div>
          <div className={style.ult}>
          <a href="./orcamentos">Orçamentos</a>
          </div>
          <div className={style.ult}>
          <a href="./contatos">Contatos</a>
          </div>
          <div className={style.ult}>
          <a href="./sobre">Sobre</a>
          </div>
        </ul>
      </div>
      </div>
       )}
    <div className={style.container1}>
      <div className={style.tit}>
      <h2>Assistência</h2>
      <h2>Técnica de Celulares</h2>
      </div>
      <div className={style.let}>
      <p>Reparos em smartphones com</p>
      <p>rapidez e garantia.</p>
      </div>
      <a href='./servicos' className={style.butt}>
      <button>Ver serviços</button>
      </a>
    </div>
    <div className={style.imag}>
      <img src={Logo2} alt='logo2'/>
      <h2>W ASSISTEC</h2>
    </div>
    </div>
  )
}
export default Home;
