import styled from 'styled-components';

const Secao = styled.div`
  margin-top: 40px;

  > header {
    text-align: ${({ alignTitle }) => alignTitle};
  }

  h3 {
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 30px;

    &:after {
      display:block;
      width: 100%;
      content: '';
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
  
  h3 + * {
    clear: both;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    text-align: justify;
  }

  p + p {
    margin-top: 15px;
  }
`;

export default Secao;