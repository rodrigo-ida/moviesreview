import styled, { keyframes } from 'styled-components'

const showItSelf = keyframes`
from{ left: 100%}
to{ left: 0}
`

const hideItSelf = keyframes`
from{ left: 0%}
to{ left: 100%}
`

const StyledHeaderNavbar = styled.div`
position: absolute;
top: ${props => props.headerHeight}px;
left: 100%;
background-color: black;
height: calc\(100vh - ${props => props.headerHeight}px\);
width: 100vw;
animation: ${props => props.clicked ? showItSelf : hideItSelf} .3s forwards ease-in;

`


export default StyledHeaderNavbar