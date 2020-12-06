import styled, { keyframes } from 'styled-components'

const hideHeader = props =>{



    return keyframes`
    
    to{ top: -60px}
    `
}

const StyledHeader = (
    styled.header`
    background-color: #141414;
    height: ${props => props.headerHeight}px;
    display:flex;
    justify-content: space-between;
    padding: 10px ;
    position: relative;
    top:0;
    z-index: 100;
    animation: ${props => props.showHeader ? '' : hideHeader} .3s forwards;
    `
)
export default StyledHeader