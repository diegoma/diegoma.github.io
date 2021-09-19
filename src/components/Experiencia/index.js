import styled from 'styled-components';
import { Grid, Cell } from "styled-css-grid";
import Habilidades from "../Habilidades";
import Secao from "../Secao";

const Experiencia = function (props) {
  return (
    <Secao alignTitle={"left"}>
      <header>
        <h3>
          {props.experiencia.title}
        </h3>
      </header>
      <Grid columns={10}>
        <Cell width={9}>
          {
            props.experiencia.content.map((result, index) => (
              <p key={`${index}`}>
                {result}
              </p>
            ))
          }
          <Habilidades habilidades={props.habilidades}></Habilidades>
        </Cell>
      </Grid>
    </Secao>
  )
}

export default Experiencia;