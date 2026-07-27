import './App.css';
import Header from "./components/Header/Header.jsx"
import Home from './pages/home/Home';
import Menu from './components/menu-flotante/Menu';
import Footer from './components/footer/Footer';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { LanguageProvider } from './contexts/LanguageContext';
import { lazy, Suspense } from 'react';

// Lazy loading de componentes para mejor performance
const Proyectos = lazy(() => import('./pages/proyectos/Proyectos'));
const Quiensoy = lazy(() => import('./pages/quiensoy/Quiensoy'));
const Tecnologias = lazy(() => import('./pages/tecnologias/Tecnologias'));
const Contactame = lazy(() => import('./pages/contactame/Contactame.jsx'));

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <Home />
          <Menu />
          <Suspense fallback={<LoadingSpinner message="Cargando proyectos..." />}>
            <Proyectos />
          </Suspense>
          <Suspense fallback={<LoadingSpinner message="Cargando información..." />}>
            <Quiensoy />
          </Suspense>
          <Suspense fallback={<LoadingSpinner message="Cargando tecnologías..." />}>
            <Tecnologias />
          </Suspense>
          <Suspense fallback={<LoadingSpinner message="Cargando contacto..." />}>
            <Contactame />
          </Suspense>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
