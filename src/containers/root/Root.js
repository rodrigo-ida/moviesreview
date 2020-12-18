import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import StyledRoot from "./S.root";
import Work from "../pages/work/Work";

import Header from "../../components/header/Header";
import HeaderNavbar from "../../components/header/header-navbar/HeaderNavbar";

const Root = () => {
  const [showHeader, setshowHeader] = useState(true);

  const headerHeight = 70;
  let [clicked, setclicked] = useState(false);

  return (
    <StyledRoot>
      <Header
        clicked={clicked}
        setclicked={setclicked}
        showHeader={showHeader}
        headerHeight={headerHeight}
      />
      <HeaderNavbar headerHeight={headerHeight} clicked={clicked} />
      <main style={{overflowX: 'hidden'}}>
        <Route path="/work">
          <Work setshowHeader={setshowHeader}/>
        </Route>
        <Redirect from="/" to="/work" />
      </main>
    </StyledRoot>
  );
};

export default Root;
