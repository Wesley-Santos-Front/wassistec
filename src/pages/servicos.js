import style from './servicos.module.css';
import { GiSmartphone } from "react-icons/gi";
import { RiBattery2ChargeLine } from "react-icons/ri";
import { PiVideoCameraSlash } from "react-icons/pi";
import { RxSpeakerOff } from "react-icons/rx";
import { RiResetLeftFill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { GrConfigure } from "react-icons/gr";


function Servicos(){
  return ( 
      <div className={style.tit}>
           <h2>Serviços</h2>
           <div className={style.flex}>
            <div className={style.indiv}>
            <GiSmartphone className={style.icon} />
            <p>Troca de tela</p>
            </div>
            <div className={style.indiv}>
            <RiBattery2ChargeLine className={style.icon} />
            <p>Troca de bateria</p>
            </div>
            <div className={style.indiv}>
            <PiVideoCameraSlash className={style.icon} />
            <p>Reparo de câmera</p>
            </div>
             <div className={style.indiv}>
            <RxSpeakerOff className={style.icon} />
            <p>Reparo no audio</p>
            </div>
            <div className={style.indiv}>
            <RiResetLeftFill className={style.icon} />
            <p>Hard reset</p>
            </div>
             <div className={style.indiv}>
            <RxUpdate className={style.icon} />
            <p>Atualização de software</p>
            </div>
            <div className={style.indiv}>
            <GrConfigure className={style.icon} />
            <p>E muito mais</p>
            </div>
           </div>
           <div className={style.butt}>
                 <button>Ver orçamentos</button>
                 </div>
           </div>
  )
}
export default Servicos;