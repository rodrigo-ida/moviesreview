import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import StyledRoot from "./S.root";
import Work from "../pages/work/Work";

import Header from "../../components/header/Header";

const Root = () => {
    const [showHeader, setshowHeader] = useState(true);

    return (
        <StyledRoot>
            <Header showHeader={showHeader} /> {/* zindex 100 */}
            <main>
                <Route path="/work">
                    <Work setshowHeader={setshowHeader} />
                </Route>
                <Redirect from="/" to="/work" />
            </main>
        </StyledRoot>
    );
};

export default Root;
