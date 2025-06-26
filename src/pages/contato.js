import React from 'react';
import style from './contato.module.css';
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

function Contato(){
const endereco =
    "https://www.google.com/maps/search/?api=1&query=Rua+Acacilia+Capelão+Peres+556,+Coqueiros,+Taquari+-+RS";

  return(
       <div className={style.tit}>
        <h2>Contatos</h2>

       <a href={endereco} target="_blank" rel="noopener noreferrer">
        <div className={style.maps}>
          <iframe
            title="Localização no Google Maps"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps?q=Rua+Acacilia+Capelão+Peres+556,+Coqueiros,+Taquari+-+RS&output=embed"
            allowFullScreen
          ></iframe>
        </div>
      </a>
      <div className={style.conta}>
        <div className={style.flexIcon}>
      <IoLogoWhatsapp className={style.iconWhat} />
      <p>(55) 51 99650-7613</p>
      </div>
       <div className={style.flexIcon}>
      <MdOutlineEmail className={style.iconEmail} />
      <p>wesleytksantos321@gmail.com</p>
      </div>
      <div className={style.flexIcon}>
      <FaInstagram className={style.iconInsta} />
      <p>@wesle.ycs</p>
      </div>
      </div>
    </div>
  )
}
export default Contato;