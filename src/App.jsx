import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import { BtnTema } from './components/UI';
import SwitcherTheme from './components/SwitcherTheme';
import SiteBackground from './components/SiteBackground';
import GitHubCorner from './components/GitHubCorner';
import Menu from './components/Menu';
import QuemSouEu from './components/QuemSouEu';
import Experiencia from './components/Experiencia';
import Educacao from './components/Educacao';
import Carreira from './components/Carreira';
import Footer from './components/Footer';
import Separador from './components/Separador';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  body {
    box-sizing: border-box;
    overflow: hidden;
    line-height: 1;
    color: ${({ theme }) => theme.colors.primary};
    font-family: Arial, Helvetica, sans-serif;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0; padding: 0; border: 0;
    font-size: 100%; font: inherit; vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section { display: block; }
  ol, ul { list-style: none; }
  blockquote, q { quotes: none; }
  blockquote:before, blockquote:after,
  q:before, q:after { content: ''; content: none; }
  table { border-collapse: collapse; border-spacing: 0; }
`;

export default function App() {
  const [theme, setTheme] = useState(true);
  const toggleTema = () => setTheme((t) => !t);

  return (
    <ThemeProvider theme={theme ? db.theme.dark : db.theme.bright}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTheme theme={theme} />
      </BtnTema>
      <SiteBackground>
        <span id="quemSouEu"></span>
        <GitHubCorner projectUrl="https://github.com/diegoma/diegoma.github.io" />
        <Container fluid>
          <Row>
            <Col sm={{ span: 8, offset: 1 }}>
              <Menu menuItems={db.menuItems} />
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <QuemSouEu quemSouEu={db.quemSouEu} redesSociais={db.redesSociais} />
            </Col>
          </Row>
          <Row><Separador /></Row>
          <Row>
            <span id="experiencia"></span>
            <Col sm={{ span: 10, offset: 1 }}>
              <Experiencia experiencia={db.experiencia} habilidades={db.habilidades} />
            </Col>
          </Row>
          <Row>
            <span id="educacao"></span>
            <Col sm={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
              <Educacao educacao={db.educacao} />
            </Col>
          </Row>
          <Row>
            <span id="carreira"></span>
            <Col sm={{ span: 10, offset: 1 }}>
              <Carreira carreira={db.carreira} />
            </Col>
          </Row>
          <Row><Separador /></Row>
          <Row><Footer /></Row>
        </Container>
      </SiteBackground>
    </ThemeProvider>
  );
}
