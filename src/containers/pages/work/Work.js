import React, { useState } from "react";
import StyledWork from "./S.work";
import { Route, Switch, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import MovieList from "../../../components/workPage/movieList/MovieList";
import PageFactory from "../../../components/workPage/pageFactory/PageFactory";
import AllMovies from "../../../assets/img/workPage/digital-media-page/Banners_Secondary.jpg";

import movieData from "../../../assets/moviesData/movieData";

import "./Work.css";

const Work = (props) => {
  const location = useLocation()
  const [cardClicked, setcardClicked] = useState(0);

  const pageVariants = {
    initial: {x:'100vw'},
    in: {
       x:0
    },
    out: {
       x:'100vw'
    }
  }

  const pageTransition = {
      duration: .5,
      type: 'spring',
      stiffness: 50
  }

  return (
    <StyledWork>
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path="/work" exact>
                  <MovieList
                    setshowHeader={props.setshowHeader}
                    setcardClicked={setcardClicked}
                    pageVariants={pageVariants}
                    pageTransition={pageTransition}
                  />
                </Route>
                <Route path={"/work" + movieData[cardClicked].url}>
                  <PageFactory
                    img={movieData[cardClicked].img}
                    title={movieData[cardClicked].title}
                    subtitle={movieData[cardClicked].subtitle}
                    description={movieData[cardClicked].mediaDescription}
                    AllMovies={AllMovies}
                    lastParagraph={movieData[cardClicked].lastParagraph}
                    pageVariants={pageVariants}
                    pageTransition={pageTransition}
                  />
                </Route>
              </Switch>
            </AnimatePresence>
    </StyledWork>
  );
};

export default Work;
