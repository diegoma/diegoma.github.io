import Link from 'next/link';
import styled from 'styled-components';

const MenuWrapper = styled.nav`   
    padding-top: 80px;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    
    ul {
        display: inline-block;
        list-style: none;
        text-decoration: none;
    }

    @media (min-width: 640px)
    {
      ul {
        > li {
          float: left;
        }

        > li + li {
          margin-left: 30px;
        }        
      }
    }

    @media (max-width: 640px)
    {
      ul {
        > li {
          margin-bottom: 7.5px;
        }
      }
    }
`;

const MenuItem = styled.a`
    padding: 2px 0px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;

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

const Menu = function ({ menuItems }) {
  return (
    <MenuWrapper>
      <ul>
        {
          menuItems.map((result, index) => (
            <li key={`result__${index}`}>
              <Link href={result.link}>
                <MenuItem>
                  {result.name}
                </MenuItem>
              </Link>
            </li>
          ))
        }
      </ul>
    </MenuWrapper>
  );
}
export default Menu;
