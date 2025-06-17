import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Servicos from './pages/servicos';
import Orcamento from './pages/orcamento';
import Contato from './pages/contato';
import Sobre from './pages/sobre';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicos' element={<Servicos />} />
          <Route path='/orcamentos' element={<Orcamento />} />
          <Route path='/contatos' element={<Contato />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
