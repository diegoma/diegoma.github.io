import React, { useState } from "react";
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

const MenuButton = styled.div`
  width: 30px;
  height: 20px;
  position: absolute;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #d3531a;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
  }

  span:nth-child(2) {
    top: 8px;
  }

  span:nth-child(3) {
    top: 16px;
  }
`;

const Menu = function ({ menuItems }) {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
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
}
export default Menu;
