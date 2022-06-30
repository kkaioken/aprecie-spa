import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroColaboradores from './pages/CadastroColaboradores';
import token from './data/token.json';
import ListaColaboradoresCadastrados from './pages/ListagemColaboradoresCadastrados';
import NotFound from './pages/NotFound';
import Footer from './components/footer';
import Menu from './components/menu';


export default function Aprecierouter() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={<ListaColaboradoresCadastrados/>} />
        <Route path="/cadastro" element={<CadastroColaboradores token={token} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}