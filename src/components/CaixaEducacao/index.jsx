import styled from 'styled-components';
import CaixaConteudo from '../CaixaConteudo';

const CaixaEducacaoWrapper = styled(CaixaConteudo)`
  h4 {
    clear: both;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    text-align: left;
    margin-bottom: 5px;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  span {
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
`;

const CaixaEducacao = function (props) {
  return (
    <CaixaEducacaoWrapper blockType={props.blockType}>
      <header style={{ overflow: "hidden", marginBottom: "20px" }}>
        <span style={{ float: "left" }}>{props.curso.instituicao}</span>
        <span style={{ float: "right" }}>{props.curso.ano}</span>
      </header>
      <h4>{props.curso.titulo}</h4>
      <p style={{ whiteSpace: "pre-wrap" }}>{props.curso.conteudo}</p>
    </CaixaEducacaoWrapper>
  );
}

export default CaixaEducacao;