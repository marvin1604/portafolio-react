import './App.css';
import Header from "./components/Header/Header.jsx"
import Proyectos from './pages/proyectos/Proyectos';
import Home from './pages/home/Home';
import Quiensoy from './pages/quiensoy/Quiensoy';
import Menu from './components/menu-flotante/Menu';
import Tecnologias from './pages/tecnologias/Tecnologias';
import Footer from './components/footer/Footer';
import Contactame from './pages/contactame/Contactame.jsx'
import { useState } from 'react';
import { dataEspañol } from './data/data.js';
import { dataItaliano } from './data/data.js';

function App() {


  const [idioma, setIdioma] = useState(dataItaliano)
  const [checked, setChecked] = useState(false)

  const handleIdioma = () =>{
    if(idioma === dataEspañol){
      setIdioma(dataItaliano)
      setChecked(false)
      return
    }
    if(idioma === dataItaliano){
      setIdioma(dataEspañol)
      setChecked(true)
      return
    }
  }

  return (
    <div className="App">
      <Header idioma={idioma} handleIdioma={handleIdioma} checked={checked}/>
      <Home idioma={idioma}/>
      <Menu/>
      <Proyectos idioma={idioma}/>
      <Quiensoy idioma={idioma}/>
      <Tecnologias idioma={idioma}/>
      <Contactame />
      <Footer/>
    </div>
  );
}

export default App;
