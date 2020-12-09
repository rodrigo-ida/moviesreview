import React, { useState, useRef, useEffect} from "react";
import { Redirect, Route } from "react-router-dom";
import StyledRoot from "./S.root";
import Work from "../pages/work/Work";

import Header from "../../components/header/Header";

const Root = () => {
    const [showHeader, setshowHeader] = useState(true);

    const coisa = useRef(null)

    useEffect(()=> {

    console.log(coisa);}
    )

    return (
        <StyledRoot ref={coisa}>
            <Header showHeader={showHeader} /> {/* zindex 100 */}
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
