import styled from 'styled-components';

const HabilidadesWrapper = styled.ul`
  margin-top: 15px;
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
  list-style: none;
  text-decoration: none;

  > li {
    float: left;
    margin-right: 6px;
    margin-bottom: 5px;
  }
  
  span {
    display: inline-block;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    padding: 4px 8px;
  }
`;

const Habilidades = (props) =>
(
  <HabilidadesWrapper>
    {
      props.habilidades.map((result, index) => (
        <li key={`${index}`}>
          <span>{result.title}</span>
        </li>
      ))
    }
  </HabilidadesWrapper>
);

export default Habilidades;
