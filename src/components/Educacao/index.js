import styled from 'styled-components';
import CaixaEducacao from "../CaixaEducacao";
import CaixaConteudo from "../CaixaConteudo"
import Secao from "../Secao";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EducacaoWrapper = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
  list-style: none;
  text-decoration: none;

  > li {
    margin-bottom: 20px;

    @media (min-width:992px) {
      float: left;
      margin-bottom: 15px;
      margin-right: 10px;
    }
  }
`;

const Educacao = function (props) {
  let count = 1;

  return (
    <Secao alignTitle={"right"}>
      <header>
        <h3>
          {props.educacao.title}
        </h3>
      </header>
      <EducacaoWrapper>
        {
          props.educacao.cursos.map(function (result, index)
            {                  
              return ( 
                <li key={`${++count}`}>
                  <CaixaEducacao blockType={(count%2)} curso={result}>
                  </CaixaEducacao>
                </li>
              )
            } 
          )
        }  

        <li key={`${++count}`}>
          <CaixaConteudo blockType={`${(count%2)}`}>
            <div>
              <header style={{ overflow: "hidden", marginBottom: "20px" }}>
                <h4 style={{ fontSize: "18px" }}> 
                  {props.educacao.idiomas.titulo}
                </h4>
              </header>
              <ul style={{ overflow: "hidden" }}>
                {
                  props.educacao.idiomas.linguas.map((result, index) => (
                    <li key={`${index}`} style={{ float: "left", width: "50%" }}>
                      <h6>{result.titulo}</h6>
                      <p>{result.nivel}</p>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div style={{ clear: "both", marginTop: "20px" }}>
              <header style={{ overflow: "hidden", marginBottom: "20px" }}>
                <h4 style={{ fontSize: "18px" }}>
                  {props.educacao.cursosAvulsos.titulo}
                </h4>
              </header>
              <p>
                {props.educacao.cursosAvulsos.cursos}
              </p>
            </div>
          </CaixaConteudo>
        </li>
      </EducacaoWrapper>
    </Secao>
  )
}

export default Educacao;