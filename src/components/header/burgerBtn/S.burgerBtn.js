import styled, { keyframes } from 'styled-components'

const openAnimationTop = keyframes`
from{ transform: rotate(0deg);top: 0px}
to{ transform: rotate(45deg); top: 8px}
`
const openAnimationMiddle = keyframes`
from{ width: 25px;}
to{ width: 0px;}
`
const openAnimationBottom = keyframes`
from{ transform: rotate(0deg); top: 0px}
to{ transform: rotate(-45deg); top: -8px}
`

const closeAnimationTop = keyframes`
from{ transform: rotate(45deg); top: 8px}
to{ transform: rotate(0deg);top: 0px}
`
const closeAnimationMiddle = keyframes`
from{ width: 0px;}
to{ width: 25px;}
`
const closeAnimationBottom = keyframes`
from{ transform: rotate(-45deg); top: -8px}
to{ transform: rotate(0deg); top: 0px}
`

const StyledBurgerBtn = styled.div`
    background-color: ${props => props.cor || 'black'} ;
    width: 25px;
    height: 2px;
    position: relative;
    animation: ${props => {
        if(props.clicked){
            if(props.position === 'top') {return openAnimationTop}
            if(props.position === 'middle') {return openAnimationMiddle}
            if(props.position === 'bottom') {return openAnimationBottom}
        }else{
            if(props.position === 'top') {return closeAnimationTop}
            if(props.position === 'middle') {return closeAnimationMiddle}
            if(props.position === 'bottom') {return closeAnimationBottom}
        }
    }} .3s forwards ease-in;
`

export default StyledBurgerBtn;