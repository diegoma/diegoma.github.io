import styled from 'styled-components';

const RedesSociaisWrapper = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  display: inline-block;
  list-style: none;
  text-decoration: none;

  > li {
    float: left;
  }

  > li + li {
    margin-left: 14px;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

const IconeRedeSocial = styled.img.attrs((props) => { 
  return (
    {
      src: props.iconPath.replace('$theme', props.theme.name),
    }
  )
})`

`;

const RedesSociais = (props) =>
(
  <RedesSociaisWrapper>
      {
        props.redesSociais.map((result, index) => (
          <li key={`${index}`}>
            <a href={`${result.link}`} target="_blank">
              <IconeRedeSocial iconPath={`${result.icon}`} alt={`${result.title}`} />
            </a>
          </li>
        ))
      }
  </RedesSociaisWrapper>
);

export default RedesSociais;
