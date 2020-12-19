import React, {useState} from "react";

import { Link} from "react-router-dom";


import StyledMovieCard from "../movieCard/MovieCard";
import movieData from "../../../assets/moviesData/movieData";

import { motion } from "framer-motion";
import styled from 'styled-components'

const StyledMovieList = styled.ul`
list-style: none;

@media (min-width: 600px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr ;

  
  

}

`


const MovieList = (props) => {
    
    const [cardClickedId, setcardClickedId] = useState(false)

    const pageVariantsOdd = {
      initial: {x:'-100vw'},
      in: {
         x:0
      },
      out: {
         x:'-100vw'
      }
    }
    const pageVariantsEven = {
      initial: {x:'100vw'},
      in: {
         x:0
      },
      out: {
         x:'-100vw'
      }
    }

  const movieListHelper = movieData.map((e, index) => (
    <li key={e.title + index} style={{display: 'block'}}>
      <Link
        to={(props) => ({
          ...props,
          pathname: props.pathname + e.url,
        })}
      >
        <motion.div
        onClick={()=> setcardClickedId(index)}
        initial='initial'
        animate='in'
        exit={cardClickedId === index ? {x: '100vw'} : 'out'}
        variants={ index % 2 ? pageVariantsOdd : pageVariantsEven}
        transition={props.pageTransition}
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






  return <StyledMovieList >{movieListHelper}</StyledMovieList>
};

export default MovieList;
