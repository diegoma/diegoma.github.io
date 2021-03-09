import styled from 'styled-components';
import { Grid, Cell } from "styled-css-grid";
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

const Carreira = function (props) {
  return (
    <Secao alignTitle={"left"} style={{ marginBottom: "40px" }}>
      <header>
        <h3>
          {props.carreira.title}
        </h3>
      </header>
      <Grid columns={10}>
        <Cell width={9}>
          <CarreiraWrapper>
            {
              props.carreira.empregos.map((result, index) => (
                <li key={`${index}`}>
                  <div style={{ overflow: "hidden", borderBottom: "1px solid #000", marginBottom: "15px", padding: "5px 0" }}>
                    <h4 style={{ float: "left" }}>
                      {result.titulo}
                    </h4>
                    <span style={{ float: "right" }}>
                      {result.periodo}
                    </span>
                  </div>
                  <h5>
                    {result.cargo}
                  </h5>                  
                  {
                    result.conteudo.map((result, index) => (
                      <p key={`${index}`}>
                        {result}
                      </p>
                    ))
                  }
                </li>
              ))
            }
          </CarreiraWrapper>
        </Cell>
      </Grid>
    </Secao>
  )
}

export default Carreira;