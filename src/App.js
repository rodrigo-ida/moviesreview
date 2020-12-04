import React from "react";
import { BrowserRouter } from "react-router-dom";
import StyledApp from "./S.App";
import Root from "./containers/root/Root";

function App() {
    return (
        <BrowserRouter>
            <StyledApp>
                <Root />
            </StyledApp>
        </BrowserRouter>
    );
}

export default App;
