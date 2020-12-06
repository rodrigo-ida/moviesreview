import React from "react";
import StyledWork from "./S.work";
import {Route} from 'react-router-dom'

import MovieList from '../../../components/workPage/movieList/MovieList'



const Work = (props) => {
    return (
        <StyledWork>
            <Route path='/work' >
                <MovieList setshowHeader={props.setshowHeader}/>
            </Route>
            <Route path='/work/midia-digital'>

            </Route>
        </StyledWork>
    );
};

export default Work;
