import React, { useState, useRef, useEffect} from "react";
import { Redirect, Route } from "react-router-dom";
import StyledRoot from "./S.root";
import Work from "../pages/work/Work";

import Header from "../../components/header/Header";
import HeaderNavbar from '../../components/header/header-navbar/HeaderNavbar'


const Root = () => {
    const [showHeader, setshowHeader] = useState(true);

    const coisa = useRef(null)

    useEffect(()=> {

    console.log(coisa);}
    )
    const headerHeight = 60
    let [clicked, setclicked] = useState(false)



    return (
        <StyledRoot ref={coisa}>
            <Header clicked={clicked} setclicked={setclicked} showHeader={showHeader} /> {/* zindex 100 */}
            <HeaderNavbar headerHeight={headerHeight} clicked={clicked}/>
            <main>
                <Route path="/work">
                    <Work setshowHeader={setshowHeader} coisa={coisa}/>
                </Route>
                <Redirect from="/" to="/work" />
            </main>
        </StyledRoot>
    );
};

export default Root;
