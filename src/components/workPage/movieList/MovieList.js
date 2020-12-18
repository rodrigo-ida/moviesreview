import React from "react";

import { Link, useHistory } from "react-router-dom";


import StyledMovieCard from "../movieCard/MovieCard";
import movieData from "../../../assets/moviesData/movieData";

import { motion } from "framer-motion";



const MovieList = (props) => {
    
    const history =  useHistory()
    
    const onUpdate = (props, e) => {
        if(props.x > 50){
            history.push(`/work${e.url}`)
        }
    }

  const movieListHelper = movieData.map((e, index) => (
    <li key={e.title + index}>
      <Link
        to={(props) => ({
          ...props,
          pathname: props.pathname + e.url,
        })}
      >
        <motion.div
        drag='x'
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        onUpdate={(event)=> onUpdate(event, e)}
        >

        <StyledMovieCard
          setshowHeader={props.setshowHeader}
          img={e.img}
          title={e.title}
          subtitle={e.subtitle}
          setcardClicked={props.setcardClicked}
          movieCardIndex={index}
          />
          </motion.div>
      </Link>
    </li>
  ));


console.log(motion);
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={props.pageVariants}
      transition={props.pageTransition}
    >
      <ul>{movieListHelper}</ul>
    </motion.div>
  );
};

export default MovieList;
