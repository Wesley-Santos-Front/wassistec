import style from './servicos.module.css';
import { GiSmartphone } from "react-icons/gi";
import { RiBattery2ChargeLine } from "react-icons/ri";
import { PiVideoCameraSlash } from "react-icons/pi";
import { RxSpeakerOff } from "react-icons/rx";
import { RiResetLeftFill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { GrConfigure } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function Servicos(){
  return ( 
      <div className={style.tit}>
        <div className={style.span1}>
                      <div className={style.men}>
                        <ul>
                          <div className={style.ult}>
                          <a href="./">Home</a>
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
           <h2>Serviços</h2>
           <div className={style.flex}>
            <div className={style.indiv} data-aos="flip-left" data-aos-duration="800">
            <GiSmartphone className={style.icon} />
            <p>Troca de tela</p>
            </div>
            <div className={style.indiv} data-aos="flip-right" data-aos-duration="800">
            <RiBattery2ChargeLine className={style.icon} />
            <p>Troca de bateria</p>
            </div>
            <div className={style.indiv} data-aos="flip-left" data-aos-duration="800">
            <PiVideoCameraSlash className={style.icon} />
            <p>Reparo de câmera</p>
            </div>
             <div className={style.indiv} data-aos="flip-right" data-aos-duration="800">
            <RxSpeakerOff className={style.icon} />
            <p>Reparo no audio</p>
            </div>
            <div className={style.indiv} data-aos="flip-left" data-aos-duration="800">
            <RiResetLeftFill className={style.icon} />
            <p>Hard reset</p>
            </div>
             <div className={style.indiv} data-aos="flip-right" data-aos-duration="800">
            <RxUpdate className={style.icon} />
            <p>Atualização de software</p>
            </div>
            <div className={style.indiv} data-aos="flip-left"  data-aos-duration="800">
            <GrConfigure className={style.icon} />
            <p>E muito mais</p>
            </div>
           </div>
           <a href='./orcamentos'>
           <div className={style.butt}>
                 <button>Ver orçamentos</button>
                 </div>
                 </a>
           </div>
  )
}
export default Servicos;