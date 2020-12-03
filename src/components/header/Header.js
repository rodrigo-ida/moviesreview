import React, {useState} from 'react'
import StyledHeader from './S.header'

import BurgerBtn from './burgerBtn/BurgerBtn'
import HeaderNavbar from './header-navbar/HeaderNavbar'

import Logo from './Logo'



const Header = props => {

    const headerHeight = 60

    let [clicked, setclicked] = useState(false)


    return (
        <StyledHeader headerHeight={headerHeight} >
            <Logo />
            <BurgerBtn clicked={clicked} setclicked={setclicked}>
                <HeaderNavbar headerHeight={headerHeight} clicked={clicked}/>
            </BurgerBtn>
        </StyledHeader>
    )
}

export default Header;