import React from 'react'
import styled from 'styled-components'

const StyledNavbarList = styled.ul`
text-align: center;
width: 100%;
height: auto;
padding: 25% 0;
`

const StyledNavbarListItem = styled.li`
color: gray;
font-size: 25px;
padding: 30px 0;

`

const NavbarListItem = props => (
    <StyledNavbarList>
        <StyledNavbarListItem>REEL</StyledNavbarListItem>
        <StyledNavbarListItem>WORK</StyledNavbarListItem>
        <StyledNavbarListItem>CONTACT</StyledNavbarListItem>
        <StyledNavbarListItem>ABOUT</StyledNavbarListItem>
    </StyledNavbarList>)


export default NavbarListItem