import Habilidades from "../Habilidades";
import Secao from "../Secao";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Experiencia = function (props) {
  return (
    <Secao alignTitle={"left"}>
      <header>
        <h3>
          {props.experiencia.title}
        </h3>
      </header>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          {
            props.experiencia.content.map((result, index) => (
              <p key={`${index}`}>
                {result}
              </p>
            ))
          }
          <Habilidades habilidades={props.habilidades}></Habilidades>
        </Col>
      </Row>
    </Secao>
  )
}

export default Experiencia;