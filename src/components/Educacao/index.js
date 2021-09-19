import styled from 'styled-components';
import { Grid, Cell } from "styled-css-grid";
import CaixaEducacao from "../CaixaEducacao";
import CaixaConteudo from "../CaixaConteudo"
import Secao from "../Secao";

const EducacaoWrapper = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
  list-style: none;
  text-decoration: none;

  > li {
    float: left;
    margin-bottom: 15px;
    margin-right: 10px;
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
      <Grid columns={10} columns="repeat(auto-fit, minmax(120px, 1fr))">
        <Cell width={10}>
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
        </Cell>
      </Grid>
    </Secao>
  )
}

export default Educacao;