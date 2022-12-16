import './App.css';
import Header from "./components/Header/Header.jsx"
import Proyectos from './pages/proyectos/Proyectos';
import Home from './pages/home/Home';
import Quiensoy from './pages/quiensoy/Quiensoy';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Quiensoy/>
      <Proyectos/>
    </div>
  );
}

export default App;
