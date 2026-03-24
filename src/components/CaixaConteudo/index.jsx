import styled from 'styled-components';

const CaixaConteudo = styled.div`   
  padding: 20px 15px; 
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ blockType, theme }) => blockType == 0 ? theme.colors.secondary : theme.colors.primary};
  background-color: ${({ blockType, theme }) => blockType == 0 ? theme.colors.primary : theme.colors.secondary};
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.4);
  height: auto;
  width: 100%;

  @media (min-width: 992px) {
    padding: 10px 10px;
    height: 350px;
    width: 350px;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
`;

export default CaixaConteudo;