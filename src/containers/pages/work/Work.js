import React from "react";
import StyledWork from "./S.work";
import { Route} from "react-router-dom";


import MovieList from "../../../components/workPage/movieList/MovieList";
import PageFactory from "../../../components/workPage/pageFactory/PageFactory";
import Img from "../../../assets/img/first.jpg";

import "./Work.css";

const Work = (props) => {
    return (
        <StyledWork>
            <Route path="/work" exact>
                <MovieList setshowHeader={props.setshowHeader} />
            </Route>
            <Route path="/work/midia-digital">
                <PageFactory img={Img} />
            </Route>
        </StyledWork>
    );
};

export default Work;
