import style from './sobre.module.css';

function Sobre(){
  return(
    <div className={style.tit}>
           <h2>Sobre</h2>
      <div className={style.conteudo}>
        <h3>Sou técnico especializado em manutenção de smartphones, com experiência em troca de telas, baterias,
         componentes internos, problemas de áudio, conectores de carga e muito mais.</h3>
         <h3>Trabalho com peças 100% originais, prezando sempre pela qualidade, agilidade e segurança no reparo
         do seu aparelho.</h3>
         <h3>Meu compromisso é oferecer um atendimento transparente, com diagnóstico preciso e soluções
         confiáveis para o seu dispositivo.</h3>
          <h3>
         Seja bem-vindo! Seu smartphone está em boas mãos.</h3>
      </div>
    </div>
  )
}
export default Sobre;