import db from '../db.json';
import SiteBackground from '../src/components/SiteBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Menu from '../src/components/Menu';
import QuemSouEu from '../src/components/QuemSouEu';
import Experiencia from '../src/components/Experiencia';
import Educacao from '../src/components/Educacao';
import Carreira from '../src/components/Carreira';
import Footer from '../src/components/Footer';
import Separador from '../src/components/Separador';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

export default function Home() {
  return (
    <SiteBackground>
      <span id="quemSouEu"></span>
      <GitHubCorner projectUrl="https://github.com/diegoma/diegoma.github.io" />

      <Container fluid>
      {/* left={2} width={10} */}
        <Row>
          <Menu menuItems={db.menuItems}></Menu>
        </Row>

        {/* left={3} width={8} */}
        <Row>
          <QuemSouEu quemSouEu={db.quemSouEu} redesSociais={db.redesSociais}></QuemSouEu>
        </Row>

        {/* width={12} */}
        <Row>
          <Separador></Separador>
        </Row>

        {/* left={2} width={10} */}
        <Row>
          <span id="experiencia"></span>
          <Experiencia experiencia={db.experiencia} habilidades={db.habilidades}></Experiencia>
        </Row>

        {/* left={2} width={10} */}
        <Row>
          <span id="educacao"></span>
          <Educacao educacao={db.educacao}></Educacao>
        </Row>

        {/* left={2} width={10} */}
        <Row>
          <span id="carreira"></span>
          <Carreira carreira={db.carreira}></Carreira>
        </Row>

        {/* width={12} */}
        <Row>
          <Separador></Separador>
        </Row>

        {/* width={12} */}
        <Row>
          <Footer></Footer>
        </Row>
      </Container>
    </SiteBackground>
  )
}
