import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Secao from "../Secao";

const CarreiraWrapper = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
  list-style: none;
  text-decoration: none;

  > li + li {
    margin-top: 40px;
  }

  h4 {
    font-size: 16px;
  }

  h5 {
    clear: both;
    margin-bottom: 15px;
  }
`;

const CarreiraHeader = styled.header`
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 15px;
  padding: 5px 0;
`;

const Carreira = function (props) {
  return (
    <Secao alignTitle={"left"} style={{ marginBottom: "40px" }}>
      <header>
        <h3>
          {props.carreira.title}''
        </h3>
      </header>
      <Row>
        <Col md={{ span: 9, offset: 3 }}>
          <CarreiraWrapper>
            {
              props.carreira.empregos.map((result, index) => (
                <li key={`${index}`}>
                  <CarreiraHeader>
                    <h4 style={{ float: "left" }}>
                      {result.titulo}
                    </h4>
                    <span style={{ float: "right" }}>
                      {result.periodo}
                    </span>
                  </CarreiraHeader>
                  <h5>
                    {result.cargo}
                  </h5>                  
                  
                  {
                    result.conteudo.map((result, index) => (
                      <p style={{ whiteSpace: " pre-wrap" }} key={`${index}`}>
                        {result}
                      </p>
                    ))
                  }

                  <h6 style={{ marginTop: "10px", marginBottom: "10px", fontWeight: "bold"}}>Atividades</h6>
                  
                  <ul style={{ listStyle: "inside" }}>
                    {
                      result.atividades.map((result, index) => (
                        <li style={{ whiteSpace: " pre-wrap", marginBottom: "5px" }} key={`${index}`}>
                          {result}
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
          </CarreiraWrapper>
        </Col>
      </Row>
    </Secao>
  )
}

export default Carreira;