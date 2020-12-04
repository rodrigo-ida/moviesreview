import styled from 'styled-components'

const StyledHeader = (
    styled.header`
    background-color: #141414;
    height: ${props => props.headerHeight}px;
    display:flex;
    justify-content: space-between;
    padding: 10px ;
    `
)
export default StyledHeader