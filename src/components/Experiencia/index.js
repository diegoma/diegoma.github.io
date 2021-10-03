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
      {
        props.experiencia.content.map((result, index) => (
          <p key={`${index}`}>
            {result}
          </p>
        ))
      }
      <Habilidades habilidades={props.habilidades}></Habilidades>
    </Secao>
  )
}

export default Experiencia;