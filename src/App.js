import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/home';
import Servicos from './pages/servicos';
import Orcamento from './pages/orcamento';
import Contato from './pages/contato';
import Sobre from './pages/sobre';
import Navbar from './components/navbar';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggleMenu() {
    setMenuOpen(menuOpen => !menuOpen);
  }
  return (
    <div className="App">
      <Router>
        <Navbar onToggleMenu={handleToggleMenu}/>
        <Routes>
          <Route path='/' element={<Home menuOpen={menuOpen} />} />
          <Route path='/servicos' element={<Servicos menuOpen={menuOpen} />} />
          <Route path='/orcamentos' element={<Orcamento menuOpen={menuOpen} />} />
          <Route path='/contatos' element={<Contato menuOpen={menuOpen} />} />
          <Route path='/sobre' element={<Sobre menuOpen={menuOpen} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
