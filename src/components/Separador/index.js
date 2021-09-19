import styled from 'styled-components';

const SeparadorWrapper = styled.div`
    width: 100%;
`;

const SeparadorLinha = styled.div`
    border-style: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
`;

const Separador = () =>
(
  <SeparadorWrapper>
    <SeparadorLinha style={{ marginLeft: "-45%" }}></SeparadorLinha>
    <SeparadorLinha style={{ marginLeft: "45%", marginTop: "5px" }}></SeparadorLinha>
  </SeparadorWrapper>
);

export default Separador;