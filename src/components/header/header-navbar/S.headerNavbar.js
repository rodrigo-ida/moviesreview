import styled, { keyframes } from 'styled-components'

const showItSelf = keyframes`
from{ left: 100vw}
to{ left: 0}
`

const hideItSelf = keyframes`
from{ left: 0%}
to{ left: 100vw}
`

const StyledHeaderNavbar = styled.div`
position: absolute;
top: ${props => props.headerHeight}px;
left: 100vw;
background-color: black;
height: calc\(100vh - ${props => props.headerHeight}px\);
width: 100vw;
/* animation: ${props => props.clicked ? showItSelf : hideItSelf} 2s forwards ease-in; */

@media (min-width: 600px){
    
}
`


export default StyledHeaderNavbar