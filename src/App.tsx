import { useState, useEffect } from 'react';
import db from '../db.json';
import SwitcherTheme from './components/SwitcherTheme';
import Menu from './components/Menu';
import QuemSouEu from './components/QuemSouEu';
import Experiencia from './components/Experiencia';
import Educacao from './components/Educacao';
import Carreira from './components/Carreira';
import Footer from './components/Footer';
import Separador from './components/Separador';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTema = () => setIsDark((t) => !t);

  useEffect(() => {
    const color = isDark ? '#0d1117' : '#ffffff';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    document.documentElement.style.backgroundColor = color;
  }, [isDark]);

  useEffect(() => {
    document.documentElement.style.overflowY = isMenuOpen ? 'hidden' : '';
    return () => { document.documentElement.style.overflowY = ''; };
  }, [isMenuOpen]);

  return (
    <div className={`relative min-h-screen bg-secondary text-primary transition-colors duration-300${isDark ? '' : ' theme-bright'}`}>
      <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between h-[70px] px-4 sm:px-[8.33%] bg-secondary transition-colors duration-300">
        <button
          onClick={toggleTema}
          className="bg-transparent border-0 cursor-pointer p-0 leading-none"
          aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
        >
          <SwitcherTheme theme={isDark} />
        </button>
        <span className="sm:hidden absolute left-1/2 -translate-x-1/2 text-sm tracking-wide">
          Diego Moreira Alves
        </span>
        <Menu
          menuItems={db.menuItems}
          isOpen={isMenuOpen}
          onOpen={() => setIsMenuOpen(true)}
        />
      </header>

      {/* Mobile overlay — at root level so z-50 is not capped by the header's stacking context */}
      <div
        className={`sm:hidden fixed inset-0 z-50 bg-secondary flex flex-col items-center justify-center transition-opacity duration-300${isMenuOpen ? ' opacity-100 pointer-events-auto' : ' opacity-0 pointer-events-none'}`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-[30px] right-[8.33%] bg-transparent border-0 cursor-pointer p-0 text-primary text-2xl leading-none"
          aria-label="Fechar menu"
        >
          ✕
        </button>
        <ul className="flex flex-col items-center gap-10">
          {db.menuItems.map((item, index) => (
            <li key={`menu-mobile__${index}`}>
              <a
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="nav-link overlay-nav-link pt-[2px] pb-[2px] no-underline text-primary hover:text-primary active:text-primary visited:text-primary focus:text-primary"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full pt-[70px] pb-px">
        <span id="quemSouEu" />
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
