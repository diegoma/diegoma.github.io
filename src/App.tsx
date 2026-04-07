import { useState } from 'react';
import db from '../db.json';
import SwitcherTheme from './components/SwitcherTheme';
import GitHubCorner from './components/GitHubCorner';
import Menu from './components/Menu';
import QuemSouEu from './components/QuemSouEu';
import Experiencia from './components/Experiencia';
import Educacao from './components/Educacao';
import Carreira from './components/Carreira';
import Footer from './components/Footer';
import Separador from './components/Separador';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTema = () => setIsDark((t) => !t);

  return (
    <div className={`relative min-h-screen bg-secondary text-primary transition-colors duration-300${isDark ? '' : ' theme-bright'}`}>
      <button
        onClick={toggleTema}
        className="absolute top-[30px] left-[8.33%] bg-transparent border-0 cursor-pointer p-0 z-10 leading-none"
        aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      >
        <SwitcherTheme theme={isDark} />
      </button>

      <span id="quemSouEu" />
      <GitHubCorner projectUrl="https://github.com/diegoma/diegoma.github.io" />

      <div className="w-full pb-px">
        <div className="px-4 sm:px-0 sm:ml-[8.33%] sm:w-8/12">
          <Menu menuItems={db.menuItems} />
        </div>

        <QuemSouEu
          quemSouEu={db.quemSouEu}
          redesSociais={db.redesSociais}
          isDark={isDark}
        />

        <Separador />

        <span id="experiencia" />
        <div className="px-4 sm:px-0 sm:ml-[8.33%] sm:w-10/12">
          <Experiencia experiencia={db.experiencia} habilidades={db.habilidades} />
        </div>

        <span id="educacao" />
        <div className="px-4 sm:px-0 sm:ml-[8.33%] sm:w-10/12">
          <Educacao educacao={db.educacao} />
        </div>

        <span id="carreira" />
        <div className="px-4 sm:px-0 sm:ml-[8.33%] sm:w-10/12">
          <Carreira carreira={db.carreira} />
        </div>

        <Separador />
        <Footer />
      </div>
    </div>
  );
}
