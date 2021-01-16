import React from "react";
import StyledHeader from "./S.header";
import { Link } from "react-router-dom";

import BurgerBtn from "./burgerBtn/BurgerBtn";

import Logo from "./Logo";

import NavbarList from './header-navbar/NavbarList'

const Header = (props) => {
    const LogoClickHandler = () => {
        props.setclicked(false);
    };

    console.log(window.outerWidth);

    return (
        <StyledHeader
            headerHeight={props.headerHeight}
            showHeader={props.showHeader}
        >

                <Link to="/work">
                <Logo onClick={LogoClickHandler} />
            </Link>
            { window.outerWidth < 600 ? '' : <NavbarList />}

            
            
            
            <BurgerBtn clicked={props.clicked} setclicked={props.setclicked} />
        </StyledHeader>
    );
};

export default Header;
