import React from 'react'
import styled, {keyframes} from 'styled-components'

const StyledNavbarList = styled.ul`
text-align: center;
width: 100%;
height: auto;
padding: 15% 0;
`

const showItem = keyframes`
from{ margin-left: 100%}
to{margin-left: 0%}
`

const StyledNavbarListItem = styled.li`
color: gray;
font-size: 25px;
padding: 30px 0;
margin-left: 100%;
animation: ${props => props.clicked ? showItem : ''} ${props => props.animationStart}s .7s forwards;

`

const NavbarListItem = props => (
    <StyledNavbarList>
        <StyledNavbarListItem clicked={props.clicked} animationStart={.4}>REEL</StyledNavbarListItem>
        <StyledNavbarListItem clicked={props.clicked} animationStart={.3}>WORK</StyledNavbarListItem>
        <StyledNavbarListItem clicked={props.clicked} animationStart={.5}>CONTACT</StyledNavbarListItem>
        <StyledNavbarListItem clicked={props.clicked} animationStart={.6}>ABOUT</StyledNavbarListItem>
    </StyledNavbarList>)


export default NavbarListItem