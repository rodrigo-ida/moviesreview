import React from "react";
import styled, { keyframes } from "styled-components";

import { NavLink } from "react-router-dom";

const showItem = keyframes`
from{ margin-left: 100%}
to{margin-left: 0%}
`;

const StyledNavbarList = styled.ul`
  text-align: center;
  width: 100%;
  height: auto;
  padding: 15% 0;

  @media (min-width: 600px) {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin-left: 5%;
  }

  
`;

const StyledNavbarListItem = styled.li`

    color: gray;
    font-size: 25px;
    padding: 30px 0;
    margin-left: 100%;
    animation: ${(props) => (props.clicked ? showItem : "")}
      ${(props) => props.animationTime}s 0.7s forwards;

    @media (min-width: 600px) {
      font-size: 18px;
      margin-left: 0;
    }

    a{

        @media (min-width: 600px){
            color: gray;
            padding: 15% 0;
        }
    
  }

`

const activeLink = {
    borderBottom: 'gold 1px solid'
}

const NavbarListItem = (props) => (
  <StyledNavbarList>
    <StyledNavbarListItem clicked={props.clicked} animationTime={0.4}>
      <NavLink exact to='/reel' activeStyle={activeLink}>REEL</NavLink>
    </StyledNavbarListItem>
    <StyledNavbarListItem clicked={props.clicked} animationTime={0.3}>
      <NavLink exact to='/work' activeStyle={activeLink}>WORK</NavLink>
    </StyledNavbarListItem>
    <StyledNavbarListItem clicked={props.clicked} animationTime={0.5}>
      <NavLink exact to='/contact' activeStyle={activeLink}>CONTACT</NavLink>
    </StyledNavbarListItem>
    <StyledNavbarListItem clicked={props.clicked} animationTime={0.6}>
      <NavLink exact to='/about' activeStyle={activeLink}>ABOUT</NavLink>
    </StyledNavbarListItem>
  </StyledNavbarList>
);

export default NavbarListItem;
