import style from './orcamento.module.css';
import { useState } from "react";

function Orcamento({ menuOpen }){

  const dados = [
    { tipo: "Selecione", marca: "Marca"},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A01 core", valor: 200 },
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A02", valor: 200 },
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A02s", valor: 220 },
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A03 core", valor: 200 },
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A03s", valor: 220 },
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A04", valor: 220 },
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A10", valor: 200 },
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A10s", valor: 200 },
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A11", valor: 240},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A12", valor: 250},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A13 4g", valor: 240},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A13 5g", valor: 260},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A14 4g", valor: 270},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A14 5g", valor: 260},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A20", valor: 250},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A20s", valor: 240},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A21s", valor: 260},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A22 4g", valor: 270},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A22 5g", valor: 280},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A23", valor: 240},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A24", valor: 300},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A25", valor: 320},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A30", valor: 270},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A30s", valor: 270},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A31", valor: 280},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A32 4g", valor: 400},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A32 5g", valor: 250},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A33", valor: 600},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A50", valor: 300},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A50s", valor: 300},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A51", valor: 290},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A52", valor: 440},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A53", valor: 850},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A6 plus", valor: 400},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A70", valor: 400},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A71", valor: 480},
    { tipo: "Tela", marca: "Sansung", modelo: "Galaxy A72", valor: 890},
    { tipo: "Tela", marca: "Sansung", modelo: "E mais...", valor: 0},
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A01 core", valor: 160 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A02", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A02s", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A03 core", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A03s", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A04", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A10", valor: 170 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A10s", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A11", valor: 170 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A12", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A13 4g", valor: 170 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A13 5g", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A14 4g", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A14 5g", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A20", valor: 170 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A20s", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A21s", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A22 4g", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A22 5g", valor: 170 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A23", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A24", valor: 190 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A25", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A30", valor: 170 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A30s", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A31", valor: 190 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A32 4g", valor: 190 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A32 5g", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A33", valor: 170 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A50", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A50s", valor: 190 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A51", valor: 190 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A52", valor: 170 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A53", valor: 180 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A6 plus", valor: 190 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A70", valor: 190 },
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A71", valor: 200},
    { tipo: "Bateria", marca: "Sansung", modelo: "Galaxy A72", valor: 200},
    { tipo: "Bateria", marca: "Sansung", modelo: "E mais...", valor: 0},

    { tipo: "Tela", marca: "Motorola", modelo: "Moto E6 plus", valor: 180},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto E6 play", valor: 190},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto E6s", valor: 190},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto E7 power", valor: 180},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto E13", valor: 190},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto E20", valor: 200},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto E22", valor: 190},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto E40", valor: 200},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G6 play", valor: 200},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G6 plus", valor: 200},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G7 play", valor: 200},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G7 power", valor: 200},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G7 plus", valor: 220},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G8 play", valor: 200},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G8 power", valor: 220},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G8 plus", valor: 220},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G9 play", valor: 200},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G9 power", valor: 220},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G9 plus", valor: 220},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto E7 plus", valor: 220},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto Z play", valor: 250},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto One", valor: 230},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto One Vision", valor: 350},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto One Action", valor: 390},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto One Hyper", valor: 240},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto One Fusion", valor: 240},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto Edge 20 lite", valor: 800},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto Edge 30 neo", valor: 840},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G10", valor: 200},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G10 play", valor: 300},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G13", valor: 240},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G14", valor: 300},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G20", valor: 220},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G22", valor: 200},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G24", valor: 220},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G31", valor: 300},
    { tipo: "Tela", marca: "Motorola", modelo: "Moto G34", valor: 270},
    { tipo: "Tela", marca: "Motorola", modelo: "E muito mais", valor: 0},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto E6 plus", valor: 170},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto E6 play", valor: 170},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto E6s", valor: 170},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto E7 power", valor: 170},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto E13", valor: 170},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto E20", valor: 180},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto E22", valor: 180},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto E40", valor: 180},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G6 play", valor: 170},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G6 plus", valor: 170},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G7 play", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G7 power", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G7 plus", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G8 play", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G8 power", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G8 plus", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G9 play", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G9 power", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G9 plus", valor: 170},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto E7 plus", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto Z play", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto One", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto One Vision", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto One Action", valor: 170},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto One Hyper", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto One Fusion", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto Edge 20 lite", valor: 190},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto Edge 30 neo", valor: 190},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G10", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G10 play", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G13", valor: 160},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G14", valor: 170},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G20", valor: 170},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G20", valor: 170},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G22", valor: 170},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G24", valor: 180},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G31", valor: 180},
    { tipo: "Bateria", marca: "Motorola", modelo: "Moto G34", valor: 180},
    { tipo: "Bateria", marca: "Motorola", modelo: "E muito mais...", valor: 0},

    { tipo: "Tela", marca: "LG", modelo: "LG K11", valor: 200 },
    { tipo: "Tela", marca: "LG", modelo: "LG K12", valor: 200 },
    { tipo: "Tela", marca: "LG", modelo: "LG K20", valor: 240 },
    { tipo: "Tela", marca: "LG", modelo: "LG K22", valor: 200 },
    { tipo: "Tela", marca: "LG", modelo: "LG K40", valor: 240 },
    { tipo: "Tela", marca: "LG", modelo: "LG K40s", valor: 220 },
    { tipo: "Tela", marca: "LG", modelo: "LG K41s", valor: 220 },
    { tipo: "Tela", marca: "LG", modelo: "LG K42", valor: 220 },
    { tipo: "Tela", marca: "LG", modelo: "LG K50s", valor: 240 },
    { tipo: "Tela", marca: "LG", modelo: "LG K51", valor: 260 },
    { tipo: "Tela", marca: "LG", modelo: "LG K51s", valor: 250 },
    { tipo: "Tela", marca: "LG", modelo: "LG K52", valor: 220 },
    { tipo: "Tela", marca: "LG", modelo: "LG K61", valor: 240 },
    { tipo: "Tela", marca: "LG", modelo: "LG K62", valor: 260 },
    { tipo: "Tela", marca: "LG", modelo: "E muito mais...", valor: 0 },
    { tipo: "Bateria", marca: "LG", modelo: "LG K11", valor: 170},
    { tipo: "Bateria", marca: "LG", modelo: "LG K12", valor: 170},
    { tipo: "Bateria", marca: "LG", modelo: "LG K20", valor: 170},
    { tipo: "Bateria", marca: "LG", modelo: "LG K22", valor: 170},
    { tipo: "Bateria", marca: "LG", modelo: "LG K40", valor: 180},
    { tipo: "Bateria", marca: "LG", modelo: "LG K40s", valor: 170},
    { tipo: "Bateria", marca: "LG", modelo: "LG K41s", valor: 170},
    { tipo: "Bateria", marca: "LG", modelo: "LG K42", valor: 180},
    { tipo: "Bateria", marca: "LG", modelo: "LG K50s", valor: 180},
    { tipo: "Bateria", marca: "LG", modelo: "LG K51", valor: 170},
    { tipo: "Bateria", marca: "LG", modelo: "LG K51s", valor: 170},
    { tipo: "Bateria", marca: "LG", modelo: "LG K52", valor: 180},
    { tipo: "Bateria", marca: "LG", modelo: "LG K61", valor: 170},
    { tipo: "Bateria", marca: "LG", modelo: "LG K62", valor: 180},
    { tipo: "Bateria", marca: "LG", modelo: "E muito mais...", valor: 0},

  ];

  const tiposUnicos = [...new Set(dados.map((item) => item.tipo))];
  const marcasUnicas = [...new Set(dados.map((item) => item.marca))];

  const [tipoSelecionado, setTipoSelecionado] = useState(tiposUnicos[0]);
  const [marcaSelecionada, setMarcaSelecionada] = useState(marcasUnicas[0]);

  const modelosFiltrados = dados.filter(
    (item) => item.tipo === tipoSelecionado && item.marca === marcaSelecionada
  );

  const numero = "5196507613"; // coloque seu número com DDI 55 (Brasil)
  const mensagem = "Olá! Vim pelo site e gostaria de um orçamento.";
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  return (
    
      <div className={style.tit}>
               {menuOpen && (
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
               )}
                <h2>Orçamentos</h2>

                <div className={style.main}>


                 <select
          value={tipoSelecionado}
          onChange={(e) => setTipoSelecionado(e.target.value)}
        >
          {tiposUnicos.map((tipo) => (
            <option style={{ color: "#013036", fontSize: "18px", textAlign: "justify", backgroundColor: "transparent", border: "none", cursor:"pointer",}} key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>

        <select
     
     value={marcaSelecionada}
          onChange={(e) => setMarcaSelecionada(e.target.value)}
        >
          {marcasUnicas.map((marca) => (
            <option style={{ color: "#013036", fontSize: "18px", textAlign: "justify", backgroundColor: "transparent", border: "none", cursor:"pointer",}} key={marca} value={marca}>
              {marca}
            </option>
          ))}
        </select>

         <table style={{ width: "100%", marginBottom: "20px" }}>
        <thead className={style.cabec}>
          <tr>
            <th>Modelo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody className={style.mai}>
          {modelosFiltrados.map((item) => (
            <tr key={item.modelo}>
              <td>{item.modelo}</td>
              <td>R$ {item.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={style.butt}>
                       <button>Solicitar orçamento personalizado</button>
                       </div>
                       </a>
      </div>
    </div>
  )
}
export default Orcamento;