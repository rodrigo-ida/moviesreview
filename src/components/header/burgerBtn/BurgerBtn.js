import React from 'react'
import styled from 'styled-components'
import StyledBurgerBtn from './S.burgerBtn'


const StyledBurgerBtnContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 30px;
padding: 1px;

`

const BurgerBtn = props => {


    return(
    <StyledBurgerBtnContainer onClick={() => props.setclicked(prevState => !prevState)}>

            <StyledBurgerBtn clicked={props.clicked} position='top'/>
            <StyledBurgerBtn clicked={props.clicked} position='middle'/>
            <StyledBurgerBtn clicked={props.clicked} position='bottom'/>
            {props.children}
    
    </StyledBurgerBtnContainer>
)}


export default BurgerBtn;