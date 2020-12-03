import styled from 'styled-components'

const StyledHeader = (
    styled.header`
    background-color: rgba(0,0,0,0.3);
    height: ${props => props.headerHeight}px;
    display:flex;
    justify-content: space-between;
    padding: 10px ;
    position: relative;

    `
)
export default StyledHeader