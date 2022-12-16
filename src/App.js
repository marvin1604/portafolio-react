import './App.css';
import Header from "./components/Header/Header.jsx"
import Proyectos from './pages/proyectos/Proyectos';
import Home from './pages/home/Home';
import Quiensoy from './pages/quiensoy/Quiensoy';
import Menu from './components/menu-flotante/Menu';
import Tecnologias from './pages/tecnologias/Tecnologias';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Menu/>
      <Proyectos/>
      <Tecnologias/>
      <Quiensoy/>
      <Footer/>
    </div>
  );
}

export default App;
