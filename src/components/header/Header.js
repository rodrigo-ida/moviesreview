import React, {useState} from 'react'
import StyledHeader from './S.header'
import {Link} from 'react-router-dom'

import BurgerBtn from './burgerBtn/BurgerBtn'

import Logo from './Logo'



const Header = props => {


    const LogoClickHandler = () =>{
        props.setclicked(false)
    }

    return (
        <StyledHeader headerHeight={props.headerHeight} showHeader={props.showHeader} >
            <Link to='/work'>
            <Logo onClick={LogoClickHandler}/>
            </Link>
            <BurgerBtn clicked={props.clicked} setclicked={props.setclicked} />

        </StyledHeader>
    )
}

export default Header;