import React, {useState} from "react";
import StyledWork from "./S.work";
import { Route, Switch } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import MovieList from "../../../components/workPage/movieList/MovieList";
import PageFactory from "../../../components/workPage/pageFactory/PageFactory";
import AllMovies from '../../../assets/img/workPage/digital-media-page/Banners_Secondary.jpg'

import movieData from '../../../assets/moviesData/movieData'

import "./Work.css";

const Work = (props) => {

    const [cardClicked, setcardClicked] = useState(0)


    return (
        <StyledWork>
            <Route
                render={({ location }) => {
                    return (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={50}
                                classNames={{
                                    enterActive: "view-transition-enter-active",
                                    enterDone: "view-transition-enter-done",
                                    exit: "view-transition-exit",
                                    exitActive: "view-transition-exit-active",
                                    exitDone: "view-transition-exit-done",
                                }}
                            >
                                <Switch location={location}>
                                    <Route path="/work" exact>
                                        <MovieList
                                            setshowHeader={props.setshowHeader}
                                            setcardClicked={setcardClicked}
                                        />
                                    </Route>
                                    <Route path={'/work' + movieData[cardClicked].url}>
                                        <PageFactory
                                            img={movieData[cardClicked].img}
                                            title={movieData[cardClicked].title}
                                            subtitle={movieData[cardClicked].subtitle}
                                            description={movieData[cardClicked].mediaDescription}
                                            AllMovies={AllMovies}
                                            lastParagraph={movieData[cardClicked].lastParagraph}
                                            coisa={props.coisa}
                                        />
                                    </Route>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    );
                }}
            />
        </StyledWork>
    );
};

export default Work;
