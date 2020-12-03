import React from 'react'
import StyledHeaderNavbar from './S.headerNavbar'

import StyledNavbarList from './NavbarList'



const HeaderNavbar = props => {

    return(
        <StyledHeaderNavbar headerHeight={props.headerHeight} clicked={props.clicked}>
                <StyledNavbarList clicked={props.clicked}/>
        </StyledHeaderNavbar>
    )
}

export default HeaderNavbar