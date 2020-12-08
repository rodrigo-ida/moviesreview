import React from "react";

import { Link } from "react-router-dom";

import StyledMovieCard from "../movieCard/MovieCard";
import movieData from "../../../assets/moviesData/movieData";

const MovieList = (props) => {
    const movieListHelper = movieData.map((e) => (
        <li>
            <Link
                to={(props) => ({
                    ...props,
                    pathname: props.pathname + e.url,
                })}
            >
                <StyledMovieCard
                    setshowHeader={props.setshowHeader}
                    img={e.img}
                    title={e.title}
                    subtitle={e.subtitle}
                />
            </Link>
        </li>
    ));
    return <ul>
        {movieListHelper}
    </ul>;
};

export default MovieList;
