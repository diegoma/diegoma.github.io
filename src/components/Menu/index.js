import styled from 'styled-components';

const MenuWrapper = styled.nav`
    margin-top: 80px;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;

    ul {
      display: inline-block;
      list-style: none;
      text-decoration: none;
      
      > li {
        float: left;
      }

      > li + li {
        margin-left: 30px;
      }        
    }
`;

const MenuItem = styled.a`
    padding: 2px 0px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};

    &:after {
      display:block;
      width: 0%;
      content: '';
      border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
      transition: width 300ms ease-in-out;
    }

    &:hover { 
      color: ${({ theme }) => theme.colors.primary};
      
      &:after {
        width: 100%;
      }
    }

    &:active {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:visited {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:focus {
      color: ${({ theme }) => theme.colors.primary};
    }
`;

const Menu = ({menuItems}) =>
(
  <MenuWrapper>
    <ul>
      {
        menuItems.map((result, index) => (
          <li key={`result__${index}`}>
            <MenuItem href={result.link}>
              {result.name}
            </MenuItem>
          </li>
        ))
      }
    </ul>
  </MenuWrapper>
);

export default Menu;
