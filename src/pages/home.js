import Logo2 from '../image/logoremove.png';
import style from './home.module.css'

function Home(){
  return (
    <div className={style.flex}>
    <div className={style.container1}>
      <div className={style.tit}>
      <h2>Assistência</h2>
      <h2>Técnica de Celulares</h2>
      </div>
      <div className={style.let}>
      <p>Reparos em smartphones com</p>
      <p>rapidez e garantia.</p>
      </div>
      <div className={style.butt}>
      <button>Ver serviços</button>
      </div>
    </div>
    <div className={style.imag}>
      <img src={Logo2} alt='logo2'/>
      <h2>W ASSISTEC</h2>
    </div>
    </div>
  )
}
export default Home;