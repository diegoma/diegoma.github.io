import db from '../db.json';
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
      <Container fluid>
      <Row>
        <Col sm="12">
          <QuemSouEu quemSouEu={db.quemSouEu} redesSociais={db.redesSociais}></QuemSouEu>
        </Col>
      </Row>

      <Row>
        <Separador></Separador>
      </Row>

      <Row>
        <span id="experiencia"></span>
        <Col sm={{ span: 10, offset: 1 }}>
          <Experiencia experiencia={db.experiencia} habilidades={db.habilidades}></Experiencia>
        </Col>
      </Row>

      <Row>
        <span id="educacao"></span>
        <Col sm={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
          <Educacao educacao={db.educacao}></Educacao>
        </Col>
      </Row>

      <Row>
        <span id="carreira"></span>
        <Col sm={{ span: 10, offset: 1 }}>
          <Carreira carreira={db.carreira}></Carreira>
        </Col>
      </Row>

      <Row>
        <Separador></Separador>
      </Row>

      <Row>
        <Footer></Footer>
      </Row>
    </Container>
  )
}
