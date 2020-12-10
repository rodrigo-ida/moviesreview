import React from "react";
import { CSSTransition } from "react-transition-group";
import StyledHeaderNavbar from "./S.headerNavbar";

import StyledNavbarList from "./NavbarList";
import './HeaderNavbar.css'

const HeaderNavbar = (props) => {

    console.log(props.clicked);
    return (
        <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.clicked}
            timeout={300}
            classNames={{
                enterActive: "StyledHeaderNavbar-enterActive",
                enterDone: "StyledHeaderNavbar-enterDone",
                exit: "StyledHeaderNavbar-exit",
                exitActive: "StyledHeaderNavbar-exitActive",
                exitDone: "StyledHeaderNavbar-exitDone",
            }}
        >
            <StyledHeaderNavbar
                headerHeight={props.headerHeight}
                clicked={props.clicked}
            >
                <StyledNavbarList clicked={props.clicked} />
            </StyledHeaderNavbar>
        </CSSTransition>
    );
};

export default HeaderNavbar;
